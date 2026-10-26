import React, { createContext, useContext, useState, useEffect, useMemo, useRef } from 'react';
import { Topic, ErrorItem, ActiveTab, PedagogicalStatus, RecommendationItem, EnglishHabitDay, ActiveTimerTarget } from '../types';
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
  markAsMastered: (id: string, completedDateStr?: string) => void;
  quickCompleteTopic: (id: string, completedDateStr?: string) => void;
  reopenTopicForDate: (id: string, dateStr: string) => void;
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

  // === HÁBITO DIÁRIO DE INGLÊS, CRONÔMETRO VINCULADO & REORDENAÇÃO ===
  englishHabits: Record<string, EnglishHabitDay>;
  toggleEnglishDone: (dateStr: string) => void;
  toggleEnglishAtEnd: (dateStr: string) => void;
  moveTopicOrder: (topicId: string, direction: 'up' | 'down', visibleIds?: string[]) => void;
  activeTimerTarget: ActiveTimerTarget | null;
  setActiveTimerTarget: (target: ActiveTimerTarget | null) => void;
  recordStudySeconds: (target: ActiveTimerTarget, secondsToAdd: number) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEY_TOPICS = 'crono_estudo_topics_v7';
const STORAGE_KEY_ERRORS = 'crono_estudo_errors_v1';
const STORAGE_KEY_HABITS = 'crono_estudo_english_habits_v1';
const STORAGE_KEY_UPDATED_AT = 'crono_estudo_updated_at_v1';

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

export const mergeWithInitialTopics = (savedTopics: Topic[]): Topic[] => {
  const initialMap = new Map(INITIAL_TOPICS.map(t => [t.id, t]));
  const savedMap = new Map(savedTopics.map(t => [t.id, t]));
  const legacyIds = new Set(['math-poly-div', 'math-rec-seq']);

  const savedTopic1 = savedMap.get('topic-1');
  const savedTopic7 = savedMap.get('topic-7');
  const shouldMigratePortugueseFocus =
    savedTopic1?.status === 'Em Andamento' &&
    (!savedTopic7 || savedTopic7.status === 'Pendente');

  // 1. Preserve the exact order of savedTopics (so user manual reordering is never lost on refresh!)
  const merged: Topic[] = [];
  const processedIds = new Set<string>();

  for (const saved of savedTopics) {
    if (legacyIds.has(saved.id)) continue;
    processedIds.add(saved.id);

    const initial = initialMap.get(saved.id);
    if (!initial) {
      merged.push(saved);
      continue;
    }

    if (shouldMigratePortugueseFocus && initial.id === 'topic-1') {
      merged.push({
        ...initial,
        ...saved,
        macrotema: initial.macrotema,
        status: 'Pendente',
        agendadoPara: undefined,
        faseRecomendada: initial.faseRecomendada,
        anotacoes: initial.anotacoes,
        prerequisitos: initial.prerequisitos,
        tempoEstimadoMinutos: initial.tempoEstimadoMinutos ?? saved.tempoEstimadoMinutos,
        origem: saved.origem && saved.origem.length > 0 ? saved.origem : initial.origem
      });
      continue;
    }

    if (shouldMigratePortugueseFocus && (initial.id === 'topic-7' || initial.id === 'topic-8')) {
      merged.push({
        ...initial,
        ...saved,
        macrotema: initial.macrotema,
        status: 'Em Andamento',
        agendadoPara: getTodayDateString(),
        faseRecomendada: initial.faseRecomendada,
        anotacoes: initial.anotacoes,
        prerequisitos: initial.prerequisitos,
        tempoEstimadoMinutos: initial.tempoEstimadoMinutos ?? saved.tempoEstimadoMinutos,
        origem: saved.origem && saved.origem.length > 0 ? saved.origem : initial.origem
      });
      continue;
    }

    const isPortugueseTopic = initial.disciplina === 'Língua Portuguesa';

    merged.push({
      ...initial,
      ...saved,
      macrotema: initial.macrotema,
      prerequisitos: initial.prerequisitos ?? saved.prerequisitos,
      tempoEstimadoMinutos: saved.tempoEstimadoMinutos ?? initial.tempoEstimadoMinutos,
      origem: saved.origem && saved.origem.length > 0 ? saved.origem : initial.origem,
      ordemFila: saved.ordemFila,
      anotacoes:
        (isPortugueseTopic || saved.anotacoes === 'Aguardando teoria.') && initial.anotacoes
          ? initial.anotacoes
          : saved.anotacoes,
      faseRecomendada:
        (isPortugueseTopic || saved.faseRecomendada === '⏳ Pendente - Aguardando estudo.') && initial.faseRecomendada
          ? initial.faseRecomendada
          : saved.faseRecomendada
    });
  }

  // 2. Append any newly added topics from INITIAL_TOPICS that were not in savedTopics yet
  for (const initial of INITIAL_TOPICS) {
    if (!processedIds.has(initial.id)) {
      merged.push(initial);
    }
  }

  return merged;
};

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topics, setTopics] = useState<Topic[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOPICS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return mergeWithInitialTopics(parsed);
        }
      }
    } catch (e) {
      console.error('Erro ao ler tópicos do localStorage', e);
    }
    const today = getTodayDateString();
    return INITIAL_TOPICS.map(t => t.id === 'topic-7' ? { ...t, agendadoPara: today } : t);
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
  const [activeTimerTarget, setActiveTimerTarget] = useState<ActiveTimerTarget | null>(null);

  const [englishHabits, setEnglishHabits] = useState<Record<string, EnglishHabitDay>>(() => {
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
          .select('topics, errors, updated_at')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        if (isMounted) {
          const localUpdatedAt = localStorage.getItem(STORAGE_KEY_UPDATED_AT);
          const cloudUpdatedAt = data?.updated_at;
          const isLocalNewer =
            localUpdatedAt &&
            cloudUpdatedAt &&
            new Date(localUpdatedAt).getTime() > new Date(cloudUpdatedAt).getTime();

          if (data && Array.isArray(data.topics) && data.topics.length > 0 && !isLocalNewer) {
            setTopics(mergeWithInitialTopics(data.topics));
            if (Array.isArray(data.errors)) {
              setErrors(data.errors);
            }
          } else {
            // Primeiro login ou estado local mais recente que a nuvem: salva os dados locais atuais no Supabase
            const nowIso = new Date().toISOString();
            await supabase.from('user_study_data').upsert(
              {
                user_id: user.id,
                topics,
                errors,
                updated_at: nowIso
              },
              { onConflict: 'user_id' }
            );
            localStorage.setItem(STORAGE_KEY_UPDATED_AT, nowIso);
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

  // Sincronizar alterações locais para o Supabase (Debounced rápido de 300ms)
  useEffect(() => {
    if (!user || cloudLoadedForUser.current !== user.id) return;

    const nowIso = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY_UPDATED_AT, nowIso);
    } catch {}

    const timeout = setTimeout(async () => {
      try {
        setIsSyncing(true);
        setCloudSyncError(null);
        const { error } = await supabase.from('user_study_data').upsert(
          {
            user_id: user.id,
            topics,
            errors,
            updated_at: nowIso
          },
          { onConflict: 'user_id' }
        );
        if (error) throw error;
      } catch (err: any) {
        console.error('Erro ao salvar no Supabase:', err);
        setCloudSyncError('Não foi possível salvar na nuvem');
      } finally {
        setIsSyncing(false);
      }
    }, 300);

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

  const markAsMastered = (id: string, completedDateStr?: string) => {
    const today = getTodayDateString();
    const effectiveDate = completedDateStr || today;
    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: 'Dominado',
          dataEstudo: effectiveDate,
          faseRecomendada: '⭐ Conteúdo dominado! Alicerce consolidado para conteúdos dependentes.',
          agendadoPara: undefined // Remove da fila pendente
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

  const quickCompleteTopic = (id: string, completedDateStr?: string) => {
    const today = getTodayDateString();
    const effectiveDate = completedDateStr || today;
    const nextRevDate = addDaysToDate(effectiveDate, 7);

    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: t.status === 'Dominado' ? 'Dominado' : 'Teoria Concluída',
          dataEstudo: effectiveDate,
          proximaRevisao: t.proximaRevisao || nextRevDate,
          agendadoPara: undefined,
          faseRecomendada: '✅ Concluído no Foco do Dia! Revisão agendada (D+7).'
        };
      }
      return t;
    }));

    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.65 }
      });
    } catch {
      // noop
    }
  };

  const reopenTopicForDate = (id: string, dateStr: string) => {
    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: 'Em Andamento',
          agendadoPara: dateStr,
          dataEstudo: undefined
        };
      }
      return t;
    }));
  };

  const recordStudySeconds = (target: ActiveTimerTarget, secondsToAdd: number) => {
    if (secondsToAdd <= 0) return;

    if (target.type === 'english') {
      const dateKey = target.dateStr || getTodayDateString();
      setEnglishHabits(prev => {
        const current = prev[dateKey] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
        const totalSeconds = (current.secondsStudied || (current.minutesStudied || 0) * 60) + secondsToAdd;
        const totalMinutes = Math.floor(totalSeconds / 60);
        return {
          ...prev,
          [dateKey]: {
            ...current,
            secondsStudied: totalSeconds,
            minutesStudied: totalMinutes
          }
        };
      });
      return;
    }

    if (target.type === 'topic') {
      setTopics(prev => prev.map(t => {
        if (t.id === target.id) {
          const prevSecs = t.tempoEstudadoSegundos !== undefined
            ? t.tempoEstudadoSegundos
            : (t.tempoEstudadoMinutos || 0) * 60;
          const nextSecs = prevSecs + secondsToAdd;
          const nextMins = Math.floor(nextSecs / 60);
          return {
            ...t,
            tempoEstudadoSegundos: nextSecs,
            tempoEstudadoMinutos: nextMins,
            status: t.status === 'Pendente' ? 'Em Andamento' : t.status
          };
        }
        return t;
      }));
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
        [dateStr]: {
          ...current,
          done: nextDone,
          completedAt: nextDone ? new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : undefined
        }
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

  const moveTopicOrder = (topicId: string, direction: 'up' | 'down', visibleIds?: string[]) => {
    setTopics(prev => {
      const idx = prev.findIndex(t => t.id === topicId);
      if (idx === -1) return prev;

      let targetIdx = -1;
      let nextVisibleOrder: string[] | null = null;

      if (visibleIds && visibleIds.length > 1) {
        const visiblePos = visibleIds.indexOf(topicId);
        if (visiblePos === -1) return prev;
        const targetVisiblePos = direction === 'up' ? visiblePos - 1 : visiblePos + 1;
        if (targetVisiblePos < 0 || targetVisiblePos >= visibleIds.length) return prev;
        const neighborId = visibleIds[targetVisiblePos];
        targetIdx = prev.findIndex(t => t.id === neighborId);

        nextVisibleOrder = [...visibleIds];
        const tempId = nextVisibleOrder[visiblePos];
        nextVisibleOrder[visiblePos] = nextVisibleOrder[targetVisiblePos];
        nextVisibleOrder[targetVisiblePos] = tempId;
      } else {
        targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      }

      if (targetIdx < 0 || targetIdx >= prev.length) return prev;

      const orderMap = nextVisibleOrder
        ? new Map(nextVisibleOrder.map((id, orderIdx) => [id, orderIdx]))
        : null;

      const newTopics = [...prev];
      const temp = newTopics[idx];
      newTopics[idx] = newTopics[targetIdx];
      newTopics[targetIdx] = temp;

      const finalTopics = orderMap
        ? newTopics.map(t => (orderMap.has(t.id) ? { ...t, ordemFila: orderMap.get(t.id) } : t))
        : newTopics;

      try {
        localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(finalTopics));
        localStorage.setItem(STORAGE_KEY_UPDATED_AT, new Date().toISOString());
      } catch {}

      return finalTopics;
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
        quickCompleteTopic,
        reopenTopicForDate,
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
        moveTopicOrder,
        activeTimerTarget,
        setActiveTimerTarget,
        recordStudySeconds
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
