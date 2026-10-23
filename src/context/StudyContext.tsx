import React, { createContext, useContext, useState, useEffect, useMemo, useRef } from 'react';
import { Topic, ErrorItem, ActiveTab, PedagogicalStatus, RecommendationItem } from '../types';
import { INITIAL_TOPICS, INITIAL_ERRORS } from '../data/initialData';
import { 
  buildTopicMap, 
  getPedagogicalStatus, 
  getUnmetPrerequisites, 
  getUnlockPower, 
  recommendNextSteps 
} from '../utils/conceptGraph';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';
import confetti from 'canvas-confetti';

interface StudyContextType {
  topics: Topic[];
  errors: ErrorItem[];
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  updateTopic: (id: string, updates: Partial<Topic>) => void;
  markAsMastered: (id: string) => void;
  rescheduleTopic: (id: string, daysOffsetOrDate: number | string) => void;
  scheduleForToday: (id: string) => void;
  completeRevision: (id: string, nextIntervalDays?: number) => void;
  addError: (item: Omit<ErrorItem, 'id'>) => void;
  deleteError: (id: string) => void;
  exportBackup: () => void;
  importBackup: (file: File) => Promise<boolean>;
  resetToInitial: () => void;
  selectedTopicForModal: Topic | null;
  setSelectedTopicForModal: (topic: Topic | null) => void;

  // Sincronização Nuvem / Supabase
  isSyncing: boolean;
  isCloudConnected: boolean;
  cloudSyncError: string | null;

  // === GRAFO CONCEITUAL & RECOMENDAÇÃO INTELIGENTE (FASE 1) ===
  getTopicPedagogicalStatus: (topic: Topic) => PedagogicalStatus;
  getTopicUnmetPrerequisites: (topic: Topic) => Topic[];
  getTopicUnlockCount: (topicId: string) => number;
  getRecommendedMission: (availableMinutes?: number) => RecommendationItem[];
  schedulePedagogicalMission: (availableMinutes?: number) => void;

  // === HÁBITO DIÁRIO DE INGLÊS & REORDENAÇÃO ===
  englishHabits: Record<string, { done: boolean; atEnd: boolean }>;
  toggleEnglishDone: (dateStr: string) => void;
  toggleEnglishAtEnd: (dateStr: string) => void;
  moveTopicOrder: (topicId: string, direction: 'up' | 'down') => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEY_TOPICS = 'crono_estudo_topics_v7';
const STORAGE_KEY_ERRORS = 'crono_estudo_errors_v1';
const STORAGE_KEY_HABITS = 'crono_estudo_english_habits_v1';

export interface WeekDayInfo {
  dateStr: string;
  dayNumber: number;
  dayName: string;
  isToday: boolean;
}

export const getWeekDays = (baseDateStr: string): WeekDayInfo[] => {
  const base = new Date(baseDateStr + 'T12:00:00');
  const dayOfWeek = base.getDay(); 
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  
  const monday = new Date(base);
  monday.setDate(base.getDate() + diffToMonday);

  const days: WeekDayInfo[] = [];
  const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    days.push({
      dateStr,
      dayNumber: d.getDate(),
      dayName: dayNames[i],
      isToday: dateStr === baseDateStr
    });
  }
  return days;
};

export const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const addDaysToDate = (dateStr: string, days: number): string => {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + days);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopics] = useState<Topic[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOPICS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Erro ao ler tópicos do localStorage', e);
    }
    const today = getTodayDateString();
    return INITIAL_TOPICS.map(t => t.id === 'topic-1' ? { ...t, agendadoPara: today } : t);
  });

  const [errors, setErrors] = useState<ErrorItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ERRORS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Erro ao ler erros do localStorage', e);
    }
    return INITIAL_ERRORS;
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('hoje');
  const [selectedTopicForModal, setSelectedTopicForModal] = useState<Topic | null>(null);

  const [englishHabits, setEnglishHabits] = useState<Record<string, { done: boolean; atEnd: boolean }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HABITS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erro ao ler hábitos de inglês', e);
    }
    return {};
  });

  const { user } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [cloudSyncError, setCloudSyncError] = useState<string | null>(null);
  const cloudLoadedForUser = useRef<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(topics));
    } catch (e) {
      console.error('Falha ao salvar tópicos no storage', e);
    }
  }, [topics]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ERRORS, JSON.stringify(errors));
    } catch (e) {
      console.error('Falha ao salvar erros no storage', e);
    }
  }, [errors]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HABITS, JSON.stringify(englishHabits));
    } catch (e) {
      console.error('Falha ao salvar hábitos no storage', e);
    }
  }, [englishHabits]);

  // Carregar dados do Supabase quando o usuário autenticar
  useEffect(() => {
    if (!user) {
      cloudLoadedForUser.current = null;
      return;
    }

    if (cloudLoadedForUser.current === user.id) return;

    let isMounted = true;
    const loadCloudData = async () => {
      try {
        setIsSyncing(true);
        setCloudSyncError(null);
        const { data, error } = await supabase
          .from('user_study_data')
          .select('topics, errors')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        if (isMounted) {
          if (data && Array.isArray(data.topics) && data.topics.length > 0) {
            setTopics(data.topics);
            if (Array.isArray(data.errors)) {
              setErrors(data.errors);
            }
          } else {
            // Primeiro login: salva os dados locais atuais no Supabase
            await supabase.from('user_study_data').upsert({
              user_id: user.id,
              topics,
              errors,
              updated_at: new Date().toISOString()
            });
          }
          cloudLoadedForUser.current = user.id;
        }
      } catch (err: any) {
        console.error('Erro ao sincronizar com Supabase:', err);
        if (isMounted) setCloudSyncError(err.message || 'Falha ao sincronizar com a nuvem');
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    };

    loadCloudData();

    return () => {
      isMounted = false;
    };
  }, [user]);

  // Sincronizar alterações locais para o Supabase (Debounced)
  useEffect(() => {
    if (!user || cloudLoadedForUser.current !== user.id) return;

    const timeout = setTimeout(async () => {
      try {
        setIsSyncing(true);
        setCloudSyncError(null);
        const { error } = await supabase.from('user_study_data').upsert({
          user_id: user.id,
          topics,
          errors,
          updated_at: new Date().toISOString()
        });
        if (error) throw error;
      } catch (err: any) {
        console.error('Erro ao salvar no Supabase:', err);
        setCloudSyncError('Não foi possível salvar na nuvem');
      } finally {
        setIsSyncing(false);
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [topics, errors, user]);

  // Mapa otimizado de tópicos para consulta de grafos
  const topicMap = useMemo(() => buildTopicMap(topics), [topics]);

  const getTopicPedagogicalStatus = (topic: Topic): PedagogicalStatus => {
    return getPedagogicalStatus(topic, topicMap);
  };

  const getTopicUnmetPrerequisites = (topic: Topic): Topic[] => {
    return getUnmetPrerequisites(topic, topicMap);
  };

  const getTopicUnlockCount = (topicId: string): number => {
    return getUnlockPower(topicId, topics);
  };

  const getRecommendedMission = (availableMinutes?: number): RecommendationItem[] => {
    return recommendNextSteps(topics, { maxItems: 3, availableMinutes });
  };

  const schedulePedagogicalMission = (availableMinutes?: number) => {
    const today = getTodayDateString();
    const recommendations = recommendNextSteps(topics, { maxItems: 2, availableMinutes });

    if (recommendations.length === 0) return;

    setTopics(prev => {
      const recMap = new Map(recommendations.map(r => [r.topic.id, r]));
      return prev.map(t => {
        const match = recMap.get(t.id);
        if (match) {
          return {
            ...t,
            agendadoPara: today,
            justificativaRecomendacao: match.explanation,
            faseRecomendada: `🎯 Recomendado pelo Motor de Pré-requisitos: ${match.explanation}`
          };
        }
        return t;
      });
    });

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // noop
    }
  };

  const updateTopic = (id: string, updates: Partial<Topic>) => {
    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const markAsMastered = (id: string) => {
    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: 'Dominado',
          faseRecomendada: '⭐ Conteúdo dominado! Alicerce consolidado para conteúdos dependentes.',
          agendadoPara: undefined // Remove da fila de hoje
        };
      }
      return t;
    }));

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignora se confetti falhar
    }
  };

  const rescheduleTopic = (id: string, daysOffsetOrDate: number | string) => {
    const today = getTodayDateString();
    let newDate: string;

    if (typeof daysOffsetOrDate === 'number') {
      newDate = addDaysToDate(today, daysOffsetOrDate);
    } else {
      newDate = daysOffsetOrDate;
    }

    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          agendadoPara: newDate,
          faseRecomendada: `⏩ Reagendado para ${newDate}`
        };
      }
      return t;
    }));
  };

  const scheduleForToday = (id: string) => {
    const today = getTodayDateString();
    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          agendadoPara: today
        };
      }
      return t;
    }));
  };

  const completeRevision = (id: string, nextIntervalDays = 15) => {
    const today = getTodayDateString();
    const nextDate = addDaysToDate(today, nextIntervalDays);

    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          proximaRevisao: nextDate,
          status: t.status === 'Precisa Revisar' ? 'Teoria Concluída' : t.status,
          faseRecomendada: `✅ Revisão concluída! Próxima revisão em ${nextIntervalDays} dias.`
        };
      }
      return t;
    }));

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // noop
    }
  };

  const addError = (item: Omit<ErrorItem, 'id'>) => {
    const newItem: ErrorItem = {
      ...item,
      id: `err-${Date.now()}`
    };
    setErrors(prev => [newItem, ...prev]);
  };

  const deleteError = (id: string) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  };

  const exportBackup = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      version: '4.0-concept-graph',
      topics,
      errors
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `crono-estudo-backup-${getTodayDateString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importBackup = async (file: File): Promise<boolean> => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (Array.isArray(data.topics)) {
        setTopics(data.topics);
        if (Array.isArray(data.errors)) {
          setErrors(data.errors);
        }
        return true;
      }
    } catch (e) {
      console.error('Falha ao importar backup', e);
    }
    return false;
  };

  const toggleEnglishDone = (dateStr: string) => {
    setEnglishHabits(prev => {
      const current = prev[dateStr] || { done: false, atEnd: false };
      const nextDone = !current.done;
      if (nextDone) {
        try {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        } catch {}
      }
      return {
        ...prev,
        [dateStr]: { ...current, done: nextDone }
      };
    });
  };

  const toggleEnglishAtEnd = (dateStr: string) => {
    setEnglishHabits(prev => {
      const current = prev[dateStr] || { done: false, atEnd: false };
      return {
        ...prev,
        [dateStr]: { ...current, atEnd: !current.atEnd }
      };
    });
  };

  const moveTopicOrder = (topicId: string, direction: 'up' | 'down') => {
    setTopics(prev => {
      const idx = prev.findIndex(t => t.id === topicId);
      if (idx === -1) return prev;
      
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= prev.length) return prev;

      const newTopics = [...prev];
      const temp = newTopics[idx];
      newTopics[idx] = newTopics[targetIdx];
      newTopics[targetIdx] = temp;
      return newTopics;
    });
  };

  const resetToInitial = () => {
    if (window.confirm('Tem certeza que deseja restaurar os dados originais? Todas as alterações manuais serão resetadas.')) {
      setTopics(INITIAL_TOPICS);
      setErrors(INITIAL_ERRORS);
      localStorage.removeItem(STORAGE_KEY_TOPICS);
      localStorage.removeItem(STORAGE_KEY_ERRORS);
    }
  };

  return (
    <StudyContext.Provider
      value={{
        topics,
        errors,
        activeTab,
        setActiveTab,
        updateTopic,
        markAsMastered,
        rescheduleTopic,
        scheduleForToday,
        completeRevision,
        addError,
        deleteError,
        exportBackup,
        importBackup,
        resetToInitial,
        selectedTopicForModal,
        setSelectedTopicForModal,
        isSyncing,
        isCloudConnected: !!user,
        cloudSyncError,
        getTopicPedagogicalStatus,
        getTopicUnmetPrerequisites,
        getTopicUnlockCount,
        getRecommendedMission,
        schedulePedagogicalMission,
        englishHabits,
        toggleEnglishDone,
        toggleEnglishAtEnd,
        moveTopicOrder
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
};
