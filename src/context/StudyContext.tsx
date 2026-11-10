import React, { createContext, useContext, useState, useEffect, useMemo, useRef } from 'react';
import { Topic, ErrorItem, ActiveTab, PedagogicalStatus, RecommendationItem, EnglishHabitDay, ActiveTimerTarget, StudySessionLog } from '../types';
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
import { SyncService } from '../services/syncService';
import { SyncNotification } from '../components/SyncToast';
import { RealtimeChannel } from '@supabase/supabase-js';
import confetti from 'canvas-confetti';

interface StudyContextType {
  topics: Topic[];
  errors: ErrorItem[];
  sessionLogs: StudySessionLog[];
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  updateTopic: (id: string, updates: Partial<Topic>) => Promise<void>;
  markAsMastered: (id: string, completedDateStr?: string) => Promise<void>;
  quickCompleteTopic: (id: string, completedDateStr?: string) => Promise<void>;
  completeBookSession: (id: string, completedDateStr?: string) => Promise<void>;
  reopenTopicForDate: (id: string, dateStr: string) => Promise<void>;
  rescheduleTopic: (id: string, daysOffsetOrDate: number | string) => Promise<void>;
  scheduleForToday: (id: string) => Promise<void>;
  scheduleTopicForDate: (id: string, dateStr: string) => Promise<void>;
  diluteAccumulatedTopics: (baseDateStr?: string, maxItemsPerDay?: number) => Promise<{ movedCount: number; daysCount: number }>;
  completeRevision: (id: string, nextIntervalDays?: number) => Promise<void>;
  addError: (item: Omit<ErrorItem, 'id'>) => Promise<void>;
  updateError: (id: string, updates: Partial<ErrorItem>) => Promise<void>;
  deleteError: (id: string) => Promise<void>;
  exportBackup: () => void;
  importBackup: (file: File) => Promise<boolean>;
  resetToInitial: () => void;
  selectedTopicForModal: Topic | null;
  setSelectedTopicForModal: (topic: Topic | null) => void;

  // Sincronização Nuvem Soberana / Supabase
  isSyncing: boolean;
  isCloudConnected: boolean;
  cloudSyncError: string | null;
  refreshCloudData: () => Promise<void>;
  syncNotification: SyncNotification | null;
  dismissSyncNotification: () => void;

  // === GRAFO CONCEITUAL & RECOMENDAÇÃO INTELIGENTE ===
  getTopicPedagogicalStatus: (topic: Topic) => PedagogicalStatus;
  getTopicUnmetPrerequisites: (topic: Topic) => Topic[];
  getTopicUnlockCount: (topicId: string) => number;
  getRecommendedMission: (availableMinutes?: number) => RecommendationItem[];
  schedulePedagogicalMission: (availableMinutes?: number) => void;

  // === HÁBITO DIÁRIO DE INGLÊS, CRONÔMETRO VINCULADO & REORDENAÇÃO ===
  englishHabits: Record<string, EnglishHabitDay>;
  toggleEnglishDone: (dateStr: string) => Promise<void>;
  toggleEnglishAtEnd: (dateStr: string) => Promise<void>;
  moveTopicOrder: (topicId: string, direction: 'up' | 'down', visibleIds?: string[]) => Promise<void>;
  activeTimerTarget: ActiveTimerTarget | null;
  setActiveTimerTarget: (target: ActiveTimerTarget | null) => void;
  recordStudySeconds: (target: ActiveTimerTarget, secondsToAdd: number) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEY_TOPICS = 'crono_estudo_topics_v7';
const STORAGE_KEY_ERRORS = 'crono_estudo_errors_v1';
const STORAGE_KEY_HABITS = 'crono_estudo_english_habits_v1';
const STORAGE_KEY_SESSION_LOGS = 'crono_estudo_session_logs_v1';

export const formatDateBR = (dateStr?: string): string => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
};

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

export const getDisciplineGroup = (disciplina: string): string => {
  const d = (disciplina || '').toLowerCase();
  if (d.includes('português') || d.includes('portugues')) return 'Português';
  if (d.includes('matemática') || d.includes('matematica') || d.includes('álgebra') || d.includes('geometria')) return 'Matemática';
  if (d.includes('sql') || d.includes('spark') || d.includes('estatística') || d.includes('estatistica') || d.includes('dados') || d.includes('mba')) return 'MBA/Dados';
  if (d.includes('claude') || d.includes('agente') || d.includes('coding agent')) return 'Claude Code';
  if (d.includes('livro') || d.includes('leitura') || d.includes('bibliogr')) return 'Leitura/Livro';
  if (d.includes('física') || d.includes('química') || d.includes('biologia') || d.includes('natureza')) return 'Natureza';
  return disciplina;
};

export const isRestDay = (dateStr: string): boolean => {
  const d = new Date(dateStr + 'T12:00:00');
  // Domingo (dia 0) é o Dia do Descanso Semanal
  return d.getDay() === 0;
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
        (isPortugueseTopic ||
          saved.faseRecomendada === '⏳ Pendente - Aguardando estudo.' ||
          saved.faseRecomendada === '⏳ Standby (Próximos módulos do MBA).') &&
        initial.faseRecomendada
          ? initial.faseRecomendada
          : saved.faseRecomendada
    });
  }

  for (const initial of INITIAL_TOPICS) {
    if (!processedIds.has(initial.id)) {
      merged.push(initial);
    }
  }

  return merged;
};

export const StudyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  // 1. Estado local (Cache de inicialização rápida)
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
      if (saved) return JSON.parse(saved);
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

  const [sessionLogs, setSessionLogs] = useState<StudySessionLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SESSION_LOGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Erro ao ler logs de sessão do localStorage', e);
    }
    const initialLogs: StudySessionLog[] = [];
    for (const t of INITIAL_TOPICS) {
      const secs = t.tempoEstudadoSegundos || (t.tempoEstudadoMinutos ? t.tempoEstudadoMinutos * 60 : 0);
      if (t.dataEstudo && secs > 0) {
        initialLogs.push({
          id: `${t.dataEstudo}_topic_${t.id}`,
          topicId: t.id,
          targetTitle: t.microtopico || t.macrotema || t.disciplina,
          origem: t.origem,
          dateStr: t.dataEstudo,
          secondsStudied: secs,
          type: 'topic',
          timestamp: new Date(t.dataEstudo + 'T20:00:00Z').toISOString()
        });
      }
    }
    return initialLogs;
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [cloudSyncError, setCloudSyncError] = useState<string | null>(null);
  const [syncNotification, setSyncNotification] = useState<SyncNotification | null>(null);

  const cloudLoadedForUser = useRef<string | null>(null);
  const isApplyingCloudData = useRef(false);
  const realtimeChannelRef = useRef<RealtimeChannel | null>(null);
  const studySyncTimeoutRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const notifySync = (notification: Omit<SyncNotification, 'id' | 'timestamp'>) => {
    const fullNotice: SyncNotification = {
      ...notification,
      id: `notice-${Date.now()}`,
      timestamp: Date.now()
    };
    setSyncNotification(fullNotice);

    // Auto-dismiss após 5 segundos para mensagens normais
    if (notification.type !== 'error') {
      setTimeout(() => {
        setSyncNotification(prev => prev?.id === fullNotice.id ? null : prev);
      }, 5000);
    }
  };

  const dismissSyncNotification = () => {
    setSyncNotification(null);
  };

  const broadcastChange = (event: string, payload: any) => {
    if (realtimeChannelRef.current) {
      realtimeChannelRef.current.send({
        type: 'broadcast',
        event,
        payload
      }).catch(err => {
        console.warn('[Realtime Broadcast] Aviso ao enviar:', err);
      });
    }
  };

  // Cache efêmero de localStorage (mantido sempre espelhado com a autoridade)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(topics));
    } catch {}
  }, [topics]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ERRORS, JSON.stringify(errors));
    } catch {}
  }, [errors]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HABITS, JSON.stringify(englishHabits));
    } catch {}
  }, [englishHabits]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SESSION_LOGS, JSON.stringify(sessionLogs));
    } catch {}
  }, [sessionLogs]);

  /**
   * PILAR 1 & 4: Hidratação Soberana da Nuvem (Single Source of Truth)
   * Executa o Bootstrap consolidado em chamada única atômica.
   */
  const loadCloudData = async (_isManualOrRefresh = false) => {
    if (!user) return;
    try {
      setIsSyncing(true);
      setCloudSyncError(null);

      const bootstrapData = await SyncService.bootstrap();
      if (!bootstrapData) return;

      isApplyingCloudData.current = true;

      // 1. Tópicos & Progresso Relacional
      if (bootstrapData.topics && bootstrapData.topics.length > 0) {
        const prereqMap = new Map<string, string[]>();
        for (const p of (bootstrapData.prerequisites || [])) {
          if (!prereqMap.has(p.topic_id)) prereqMap.set(p.topic_id, []);
          prereqMap.get(p.topic_id)!.push(p.prerequisite_id);
        }

        const progressMap = new Map<string, any>();
        for (const prog of (bootstrapData.progress || [])) {
          progressMap.set(prog.topic_id, prog);
        }

        setTopics(prevLocal => {
          const localMap = new Map(prevLocal.map(item => [item.id, item]));
          const combinedTopics: Topic[] = bootstrapData.topics.map((t: any) => {
            const prog = progressMap.get(t.id);
            const localTopic = localMap.get(t.id);
            const cloudSecs = prog?.tempo_estudado_segundos || (prog?.tempo_estudado_minutos ? prog.tempo_estudado_minutos * 60 : 0);
            const localSecs = localTopic?.tempoEstudadoSegundos || (localTopic?.tempoEstudadoMinutos ? localTopic.tempoEstudadoMinutos * 60 : 0);
            const bestSecs = Math.max(cloudSecs, localSecs);
            const bestMins = Math.floor(bestSecs / 60);

            return {
              id: t.id,
              disciplina: t.disciplina,
              macrotema: t.macrotema,
              microtopico: t.microtopico,
              peso: t.peso,
              origem: t.origem || [],
              faseRecomendada: t.fase_recomendada,
              linkMaterial: t.link_material,
              tempoEstimadoMinutos: t.tempo_estimado_minutos,
              prerequisitos: prereqMap.get(t.id) || [],
              status: prog?.status || localTopic?.status || 'Pendente',
              dataEstudo: prog?.data_estudo || localTopic?.dataEstudo || undefined,
              acertosExercicios: prog?.acertos_exercicios ?? localTopic?.acertosExercicios ?? undefined,
              anotacoes: prog?.anotacoes || localTopic?.anotacoes || undefined,
              proximaRevisao: prog?.proxima_revisao || localTopic?.proximaRevisao || undefined,
              agendadoPara: prog?.agendado_para !== undefined ? (prog.agendado_para || undefined) : localTopic?.agendadoPara,
              ordemFila: prog?.ordem_fila ?? localTopic?.ordemFila ?? undefined,
              prioridade: prog?.prioridade || localTopic?.prioridade || undefined,
              tempoEstudadoMinutos: bestMins,
              tempoEstudadoSegundos: bestSecs,
              evidencias: prog?.evidencias || localTopic?.evidencias || {},
              justificativaRecomendacao: prog?.justificativa_recomendacao || localTopic?.justificativaRecomendacao || undefined
            };
          });

          return mergeWithInitialTopics(combinedTopics);
        });
      }

      // 2. Caderno de Erros FCC
      if (bootstrapData.errors && bootstrapData.errors.length > 0) {
        setErrors(bootstrapData.errors.map((e: any) => ({
          id: e.id,
          data: e.data,
          disciplina: e.disciplina,
          microtopico: e.microtopico,
          idQuestao: e.id_questao || '',
          enunciado: e.enunciado || '',
          alternativaMarcada: e.alternativa_marcada || '',
          gabaritoCorreto: e.gabarito_correto || '',
          classificacaoErro: e.classificacao_erro || '',
          licaoAprendida: e.licao_aprendida || '',
          prerequisitoRelacionado: e.prerequisito_relacionado
        })));
      }

      // 3. Hábitos de Inglês (Preserva o maior tempo estudado para não zerar o cronômetro ativo)
      if (bootstrapData.habits && bootstrapData.habits.length > 0) {
        setEnglishHabits(prev => {
          const next = { ...prev };
          for (const h of bootstrapData.habits) {
            const localHabit = prev[h.date_str];
            const cloudSecs = h.seconds_studied || (h.minutes_studied ? h.minutes_studied * 60 : 0);
            const localSecs = localHabit?.secondsStudied || (localHabit?.minutesStudied ? localHabit.minutesStudied * 60 : 0);
            const bestSecs = Math.max(cloudSecs, localSecs);
            next[h.date_str] = {
              done: h.done ?? localHabit?.done ?? false,
              atEnd: h.at_end ?? localHabit?.atEnd ?? false,
              minutesStudied: Math.floor(bestSecs / 60),
              secondsStudied: bestSecs,
              completedAt: h.completed_at || localHabit?.completedAt
            };
          }
          return next;
        });
      }

      // 4. Sessões de Estudo
      if (bootstrapData.sessions && bootstrapData.sessions.length > 0) {
        setSessionLogs(bootstrapData.sessions.map((s: any) => ({
          id: s.id,
          topicId: s.topic_id || undefined,
          targetTitle: s.target_title,
          origem: s.origem || [],
          dateStr: s.date_str,
          secondsStudied: s.seconds_studied || 0,
          type: s.type || 'topic',
          timestamp: s.timestamp || new Date().toISOString()
        })));
      }

      cloudLoadedForUser.current = user.id;
    } catch (err: any) {
      console.error('[StudyContext] Erro ao carregar dados da nuvem:', err);
      setCloudSyncError(err.message || 'Falha ao sincronizar com a nuvem');
    } finally {
      setIsSyncing(false);
      setTimeout(() => {
        isApplyingCloudData.current = false;
      }, 500);
    }
  };

  // Subscrição em Tempo Real (Broadcast + Postgres Changes) e Re-hidratação ao Alternar Janela
  useEffect(() => {
    if (!user) {
      cloudLoadedForUser.current = null;
      return;
    }

    loadCloudData();

    const channel = supabase.channel(`crono_realtime_${user.id}`, {
      config: {
        broadcast: { ack: true }
      }
    });
    realtimeChannelRef.current = channel;

    channel
      .on('broadcast', { event: 'HABIT_UPDATE' }, ({ payload }) => {
        if (!payload || !payload.dateStr) return;
        setEnglishHabits(prev => ({
          ...prev,
          [payload.dateStr]: {
            ...(prev[payload.dateStr] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 }),
            ...payload.habit
          }
        }));
      })
      .on('broadcast', { event: 'TOPIC_UPDATE' }, ({ payload }) => {
        if (!payload || !payload.topicId) return;
        setTopics(prev => prev.map(t => t.id === payload.topicId ? { ...t, ...payload.updates } : t));
      })
      .on('broadcast', { event: 'SESSION_UPDATE' }, ({ payload }) => {
        if (!payload || !payload.log) return;
        setSessionLogs(prev => {
          const idx = prev.findIndex(item => item.id === payload.log.id);
          if (idx !== -1) {
            const next = [...prev];
            next[idx] = payload.log;
            return next;
          }
          return [payload.log, ...prev];
        });
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('[Supabase Realtime] Canal conectado e pronto.');
        }
      });

    // Reconciliação Soberana ao focar janela ou desbloquear tela do celular
    const handleWindowFocusOrVisibility = () => {
      if (document.visibilityState === 'visible') {
        loadCloudData(true);
      }
    };

    window.addEventListener('visibilitychange', handleWindowFocusOrVisibility);
    window.addEventListener('focus', handleWindowFocusOrVisibility);

    return () => {
      realtimeChannelRef.current = null;
      supabase.removeChannel(channel);
      window.removeEventListener('visibilitychange', handleWindowFocusOrVisibility);
      window.removeEventListener('focus', handleWindowFocusOrVisibility);
    };
  }, [user]);

  // Mapa de tópicos para o Grafo Conceitual
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
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    } catch {}
  };

  // =========================================================================
  // PILAR 2 & 3: MUTAÇÕES OTIMISTAS COM ROLLBACK AUTOMÁTICO & BLINDAGEM DE SYNC
  // =========================================================================

  const updateTopic = async (id: string, updates: Partial<Topic>) => {
    const previousTopics = [...topics];

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates });

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: updates.status,
            data_estudo: updates.dataEstudo,
            agendado_para: updates.agendadoPara,
            proxima_revisao: updates.proximaRevisao,
            ordem_fila: updates.ordemFila,
            tempo_estudado_segundos: updates.tempoEstudadoSegundos,
            tempo_estudado_minutos: updates.tempoEstudadoMinutos,
            anotacoes: updates.anotacoes,
            justificativa_recomendacao: updates.justificativaRecomendacao
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Falha ao salvar tópico na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const markAsMastered = async (id: string, completedDateStr?: string) => {
    const today = getTodayDateString();
    const effectiveDate = completedDateStr || today;
    const previousTopics = [...topics];

    const topicUpdates: Partial<Topic> = {
      status: 'Dominado',
      dataEstudo: effectiveDate,
      faseRecomendada: '⭐ Conteúdo dominado! Alicerce consolidado para conteúdos dependentes.',
      agendadoPara: undefined
    };

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...topicUpdates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch {}

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: 'Dominado',
            data_estudo: effectiveDate,
            agendado_para: null
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao sincronizar tópico dominado: ${err.message}. Alteração revertida.`
        });
      }
    } else {
      notifySync({
        type: 'info',
        message: 'Modo Convidado: alteração salva no aparelho. Conecte-se para sincronizar com seu celular.'
      });
    }
  };

  const quickCompleteTopic = async (id: string, completedDateStr?: string) => {
    const today = getTodayDateString();
    const effectiveDate = completedDateStr || today;
    const nextRevDate = addDaysToDate(effectiveDate, 7);
    const previousTopics = [...topics];

    const topicUpdates: Partial<Topic> = {
      status: 'Teoria Concluída',
      dataEstudo: effectiveDate,
      proximaRevisao: nextRevDate,
      agendadoPara: undefined,
      faseRecomendada: '✅ Concluído no Foco do Dia! Revisão agendada (D+7).'
    };

    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          ...topicUpdates,
          status: t.status === 'Dominado' ? 'Dominado' : 'Teoria Concluída'
        };
      }
      return t;
    }));

    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    try {
      confetti({ particleCount: 55, spread: 60, origin: { y: 0.65 } });
    } catch {}

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: 'Teoria Concluída',
            data_estudo: effectiveDate,
            proxima_revisao: nextRevDate,
            agendado_para: null
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao concluir tópico na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    } else {
      notifySync({
        type: 'info',
        message: 'Modo Convidado: alteração salva no aparelho. Conecte-se para sincronizar com seu celular.'
      });
    }
  };

  const reopenTopicForDate = async (id: string, dateStr: string) => {
    const previousTopics = [...topics];
    const topicUpdates: Partial<Topic> = {
      status: 'Em Andamento',
      agendadoPara: dateStr,
      dataEstudo: undefined
    };

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...topicUpdates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: 'Em Andamento',
            agendado_para: dateStr,
            data_estudo: null
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao reabrir tópico na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const rescheduleTopic = async (id: string, daysOffsetOrDate: number | string) => {
    const today = getTodayDateString();
    const previousTopics = [...topics];
    let targetDate: string;

    if (typeof daysOffsetOrDate === 'number') {
      targetDate = addDaysToDate(today, daysOffsetOrDate);
    } else {
      targetDate = daysOffsetOrDate;
    }

    // Se a data de destino for Domingo (Dia de Descanso), pula para Segunda!
    while (isRestDay(targetDate)) {
      targetDate = addDaysToDate(targetDate, 1);
    }

    const topicToMove = previousTopics.find(t => t.id === id);
    if (!topicToMove) return;

    const group = getDisciplineGroup(topicToMove.disciplina);
    const updatesMap = new Map<string, string>();
    updatesMap.set(id, targetDate);

    // Mapeamento atual de tópicos agendados (excluindo os dominados e o tópico que está sendo movido)
    const activeScheduled = previousTopics.filter(t => t.id !== id && t.agendadoPara && t.status !== 'Dominado');
    const dayMap = new Map<string, Topic[]>();
    for (const t of activeScheduled) {
      const d = t.agendadoPara!;
      if (!dayMap.has(d)) dayMap.set(d, []);
      dayMap.get(d)!.push(t);
    }

    // Fila em cascata para restaurar o equilíbrio de concorrência de disciplina
    const cascadeQueue: { topic: Topic; fromDate: string }[] = [];

    // Se o dia de destino já possui um concorrente do mesmo grupo disciplinar (exceto leitura de apoio)
    const existingInTarget = dayMap.get(targetDate) || [];
    const concurrentIndex = existingInTarget.findIndex(item => {
      if (item.id === id) return false;
      const gItem = getDisciplineGroup(item.disciplina);
      const isBothBook = item.origem?.includes('Leitura / Livro') && topicToMove.origem?.includes('Leitura / Livro');
      return gItem === group && !isBothBook;
    });

    if (concurrentIndex !== -1) {
      const pushedTopic = existingInTarget.splice(concurrentIndex, 1)[0];
      cascadeQueue.push({ topic: pushedTopic, fromDate: targetDate });
    }

    // Efeito dominó sucessivo (empurra o concorrente para o dia útil seguinte)
    while (cascadeQueue.length > 0) {
      const { topic: curr, fromDate } = cascadeQueue.shift()!;
      let nextDate = addDaysToDate(fromDate, 1);
      while (isRestDay(nextDate)) {
        nextDate = addDaysToDate(nextDate, 1);
      }

      updatesMap.set(curr.id, nextDate);

      const targetList = dayMap.get(nextDate) || [];
      const currGroup = getDisciplineGroup(curr.disciplina);
      const nextConcurrentIndex = targetList.findIndex(item => {
        if (updatesMap.has(item.id)) return false;
        const gItem = getDisciplineGroup(item.disciplina);
        const isBothBook = item.origem?.includes('Leitura / Livro') && curr.origem?.includes('Leitura / Livro');
        return gItem === currGroup && !isBothBook;
      });

      if (nextConcurrentIndex !== -1) {
        const nextPushed = targetList.splice(nextConcurrentIndex, 1)[0];
        cascadeQueue.push({ topic: nextPushed, fromDate: nextDate });
      }

      targetList.push(curr);
      dayMap.set(nextDate, targetList);
    }

    // Hierarquia e pré-requisitos: garantir que tópicos dependentes de id fiquem após targetDate
    for (const t of previousTopics) {
      if (t.prerequisitos?.includes(id)) {
        const tDate = updatesMap.get(t.id) || t.agendadoPara;
        if (tDate && tDate <= targetDate) {
          let pushPrereqDate = addDaysToDate(targetDate, 1);
          while (isRestDay(pushPrereqDate)) {
            pushPrereqDate = addDaysToDate(pushPrereqDate, 1);
          }
          updatesMap.set(t.id, pushPrereqDate);
        }
      }
    }

    // Atualização otimista
    setTopics(prev => prev.map(t => {
      const newD = updatesMap.get(t.id);
      if (newD) {
        return {
          ...t,
          agendadoPara: newD,
          faseRecomendada: t.id === id 
            ? `⏩ Reagendado para ${formatDateBR(newD)}` 
            : `⚡ Avançado em cascata para ${formatDateBR(newD)} (ordem hierárquica mantida)`
        };
      }
      return t;
    }));

    for (const [topicId, newD] of updatesMap.entries()) {
      broadcastChange('TOPIC_UPDATE', { topicId, updates: { agendadoPara: newD } });
    }

    if (user) {
      try {
        const promises = Array.from(updatesMap.entries()).map(([topicId, newD]) => {
          const orig = previousTopics.find(p => p.id === topicId);
          return SyncService.push({
            type: 'TOPIC_PROGRESS',
            data: {
              topic_id: topicId,
              status: orig?.status || 'Pendente',
              agendado_para: newD
            }
          });
        });
        await Promise.all(promises);
        if (updatesMap.size > 1) {
          notifySync({
            type: 'success',
            message: `⏩ Adiado com efeito cascata! ${updatesMap.size - 1} conteúdo(s) concorrente(s) foram avançados preservando a hierarquia.`
          });
        }
      } catch (err: any) {
        setTopics(previousTopics);
        notifySync({
          type: 'error',
          message: `Erro ao reagendar em cascata: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const scheduleForToday = async (id: string) => {
    const today = getTodayDateString();
    const previousTopics = [...topics];
    const topicUpdates: Partial<Topic> = {
      agendadoPara: today
    };

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...topicUpdates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    if (user) {
      const currentTopic = previousTopics.find(t => t.id === id);
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: currentTopic?.status || 'Pendente',
            agendado_para: today
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao agendar tópico para hoje na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const completeBookSession = async (id: string, completedDateStr?: string) => {
    const today = getTodayDateString();
    const effectiveDate = completedDateStr || today;
    const nextDate = addDaysToDate(effectiveDate, 1);
    const previousTopics = [...topics];

    const topicUpdates: Partial<Topic> = {
      status: 'Em Andamento',
      agendadoPara: nextDate,
      faseRecomendada: `📖 Leitura concluída em ${formatDateBR(effectiveDate)}! Próxima sessão agendada para ${formatDateBR(nextDate)}.`
    };

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...topicUpdates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    try {
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.7 } });
    } catch {}

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: 'Em Andamento',
            agendado_para: nextDate
          }
        });
        notifySync({
          type: 'success',
          message: 'Sessão de leitura registrada! O livro continuará na rotina para os próximos dias.'
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao salvar sessão de leitura: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const scheduleTopicForDate = async (id: string, dateStr: string) => {
    const previousTopics = [...topics];
    const currentTopic = previousTopics.find(t => t.id === id);
    const isCompleted = currentTopic?.status === 'Teoria Concluída' || currentTopic?.status === 'Dominado';

    const topicUpdates: Partial<Topic> = {
      agendadoPara: dateStr,
      status: isCompleted ? 'Em Andamento' : (currentTopic?.status || 'Pendente'),
      ...(isCompleted ? { dataEstudo: undefined } : {})
    };

    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...topicUpdates } : t));
    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            status: topicUpdates.status,
            agendado_para: dateStr,
            ...(isCompleted ? { data_estudo: null } : {})
          }
        });
        notifySync({
          type: 'success',
          message: `Tópico agendado para ${formatDateBR(dateStr)} com sucesso!`
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao agendar tópico: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const diluteAccumulatedTopics = async (baseDateStr?: string, maxItemsPerDay = 3): Promise<{ movedCount: number; daysCount: number }> => {
    const today = getTodayDateString();
    const effectiveBase = baseDateStr || today;
    const previousTopics = [...topics];

    // 1. Identificar tópicos acumulados (agendados para <= effectiveBase e não dominados/concluídos hoje)
    const overdueTopics = topics.filter(t => {
      if (t.status === 'Dominado') return false;
      if ((t.status === 'Teoria Concluída' || t.status === 'Em Exercícios') && t.dataEstudo === effectiveBase) {
        return false;
      }
      return t.agendadoPara === effectiveBase || (t.agendadoPara && t.agendadoPara < effectiveBase);
    });

    if (overdueTopics.length <= maxItemsPerDay) {
      notifySync({
        type: 'info',
        message: 'A fila deste dia já está equilibrada. Não há necessidade de diluir.'
      });
      return { movedCount: 0, daysCount: 0 };
    }

    // 2. Ordenação de prioridade inicial: quem já tem tempo estudado ou livro
    const sorted = [...overdueTopics].sort((a, b) => {
      const aSecs = (a.tempoEstudadoSegundos || 0) + (a.tempoEstudadoMinutos || 0) * 60;
      const bSecs = (b.tempoEstudadoSegundos || 0) + (b.tempoEstudadoMinutos || 0) * 60;
      if (bSecs !== aSecs) return bSecs - aSecs;

      const aIsBook = a.origem?.includes('Leitura / Livro') ? 1 : 0;
      const bIsBook = b.origem?.includes('Leitura / Livro') ? 1 : 0;
      if (bIsBook !== aIsBook) return bIsBook - aIsBook;

      const aOrder = a.ordemFila ?? 999;
      const bOrder = b.ordemFila ?? 999;
      return aOrder - bOrder;
    });

    // Manter no dia base no máximo 1 tópico por disciplina (respeitando regra pedagógica de não-concorrência)
    const keepToday: Topic[] = [];
    const toDistribute: Topic[] = [];
    const usedGroupsToday = new Set<string>();

    for (const t of sorted) {
      const group = getDisciplineGroup(t.disciplina);
      if (keepToday.length < maxItemsPerDay && !usedGroupsToday.has(group)) {
        keepToday.push(t);
        usedGroupsToday.add(group);
      } else {
        toDistribute.push(t);
      }
    }

    // Ordenação da fila a distribuir: respeitar hierarquia de pré-requisitos
    toDistribute.sort((a, b) => {
      if (b.prerequisitos?.includes(a.id)) return -1;
      if (a.prerequisitos?.includes(b.id)) return 1;
      return a.disciplina.localeCompare(b.disciplina);
    });

    // 3. Alocação em esteira nos próximos dias disponíveis
    const updatesMap = new Map<string, string>();
    const assignedPerDay = new Map<string, Topic[]>();
    const scheduledDateOfTopic = new Map<string, string>();
    const targetDaysSet = new Set<string>();

    // Inicializa dias futuros com tópicos já agendados fora do lote
    for (const t of topics) {
      if (t.agendadoPara && t.agendadoPara > effectiveBase && !toDistribute.some(td => td.id === t.id)) {
        if (!assignedPerDay.has(t.agendadoPara)) assignedPerDay.set(t.agendadoPara, []);
        assignedPerDay.get(t.agendadoPara)!.push(t);
        scheduledDateOfTopic.set(t.id, t.agendadoPara);
      }
    }

    for (const t of toDistribute) {
      const group = getDisciplineGroup(t.disciplina);
      let dayOffset = 1;
      let placed = false;

      let minDateAllowed = effectiveBase;
      if (t.prerequisitos && t.prerequisitos.length > 0) {
        for (const pid of t.prerequisitos) {
          const pDate = scheduledDateOfTopic.get(pid);
          if (pDate && pDate > minDateAllowed) {
            minDateAllowed = pDate;
          }
        }
      }

      while (!placed && dayOffset < 30) {
        const candidateDate = addDaysToDate(effectiveBase, dayOffset);

        // Pular Domingo (Dia de Descanso sagrado)
        if (isRestDay(candidateDate)) {
          dayOffset += 1;
          continue;
        }

        // Respeitar dependência de pré-requisito
        if (candidateDate <= minDateAllowed) {
          dayOffset += 1;
          continue;
        }

        const currentDayTopics = assignedPerDay.get(candidateDate) || [];
        const dayGroups = new Set(currentDayTopics.map(item => getDisciplineGroup(item.disciplina)));

        // Sem concorrência da mesma matéria no mesmo dia e até o limite do dia
        if (currentDayTopics.length < maxItemsPerDay && !dayGroups.has(group)) {
          currentDayTopics.push(t);
          assignedPerDay.set(candidateDate, currentDayTopics);
          updatesMap.set(t.id, candidateDate);
          scheduledDateOfTopic.set(t.id, candidateDate);
          targetDaysSet.add(candidateDate);
          placed = true;
          break;
        }

        dayOffset += 1;
      }
    }

    // Atualização otimista local
    setTopics(prev => prev.map(t => {
      const newDate = updatesMap.get(t.id);
      if (newDate) {
        return {
          ...t,
          agendadoPara: newDate,
          faseRecomendada: `⚡ Diluído para ${formatDateBR(newDate)} (1 matéria/dia, sem conflitos)`
        };
      }
      return t;
    }));

    try {
      confetti({ particleCount: 65, spread: 70, origin: { y: 0.6 } });
    } catch {}

    if (user) {
      try {
        const promises = Array.from(updatesMap.entries()).map(([topicId, newDate]) => {
          const orig = previousTopics.find(p => p.id === topicId);
          return SyncService.push({
            type: 'TOPIC_PROGRESS',
            data: {
              topic_id: topicId,
              status: orig?.status || 'Pendente',
              agendado_para: newDate
            }
          });
        });
        await Promise.all(promises);
        notifySync({
          type: 'success',
          message: `✨ ${toDistribute.length} tópicos foram redistribuídos em esteira (1 matéria por dia, respeitando domingo de descanso)!`
        });
      } catch (err: any) {
        setTopics(previousTopics);
        notifySync({
          type: 'error',
          message: `Erro ao salvar diluição na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    }

    return { movedCount: toDistribute.length, daysCount: targetDaysSet.size };
  };

  const completeRevision = async (id: string, nextIntervalDays = 15) => {
    const today = getTodayDateString();
    const nextDate = addDaysToDate(today, nextIntervalDays);
    const previousTopics = [...topics];

    const topicUpdates: Partial<Topic> = {
      proximaRevisao: nextDate,
      status: 'Teoria Concluída',
      faseRecomendada: `✅ Revisão concluída! Próxima revisão em ${nextIntervalDays} dias.`
    };

    setTopics(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          ...topicUpdates,
          status: t.status === 'Precisa Revisar' ? 'Teoria Concluída' : t.status
        };
      }
      return t;
    }));

    broadcastChange('TOPIC_UPDATE', { topicId: id, updates: topicUpdates });

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch {}

    if (user) {
      try {
        await SyncService.push({
          type: 'TOPIC_PROGRESS',
          data: {
            topic_id: id,
            proxima_revisao: nextDate,
            status: 'Teoria Concluída'
          }
        });
      } catch (err: any) {
        setTopics(previousTopics);
        broadcastChange('TOPIC_UPDATE', { topicId: id, updates: previousTopics.find(t => t.id === id) || {} });
        notifySync({
          type: 'error',
          message: `Erro ao salvar revisão na nuvem: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const toggleEnglishDone = async (dateStr: string) => {
    const previousHabits = { ...englishHabits };
    const current = previousHabits[dateStr] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
    const nextDone = !current.done;
    const nowIso = new Date().toISOString();
    const nextCompletedAt = nextDone ? nowIso : undefined;

    const updatedHabit: EnglishHabitDay = {
      ...current,
      done: nextDone,
      completedAt: nextCompletedAt
    };

    // 1. Atualização Otimista Imediata
    setEnglishHabits(prev => ({
      ...prev,
      [dateStr]: updatedHabit
    }));

    if (nextDone) {
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch {}
    }

    // 2. Broadcast em tempo real para outras abas
    broadcastChange('HABIT_UPDATE', { dateStr, habit: updatedHabit });

    // 3. Persistência Resiliente na Nuvem
    if (user) {
      try {
        await SyncService.push({
          type: 'HABIT_UPDATE',
          data: {
            date_str: dateStr,
            done: nextDone,
            at_end: current.atEnd,
            minutes_studied: current.minutesStudied || 0,
            seconds_studied: current.secondsStudied || 0,
            completed_at: nextCompletedAt || null
          }
        });
      } catch (err: any) {
        // 4. Rollback Automático Seguro
        setEnglishHabits(previousHabits);
        broadcastChange('HABIT_UPDATE', { dateStr, habit: current });
        notifySync({
          type: 'error',
          message: `Falha ao salvar Hábito de Inglês na nuvem: ${err.message || 'Erro de conexão'}. Alteração desfeita para evitar divergência.`
        });
      }
    } else {
      notifySync({
        type: 'info',
        message: 'Modo Convidado: Prática de Inglês concluída neste navegador. Faça login para sincronizar com seu celular.'
      });
    }
  };

  const toggleEnglishAtEnd = async (dateStr: string) => {
    const previousHabits = { ...englishHabits };
    const current = previousHabits[dateStr] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
    const nextAtEnd = !current.atEnd;

    const updatedHabit: EnglishHabitDay = {
      ...current,
      atEnd: nextAtEnd
    };

    setEnglishHabits(prev => ({
      ...prev,
      [dateStr]: updatedHabit
    }));

    broadcastChange('HABIT_UPDATE', { dateStr, habit: updatedHabit });

    if (user) {
      try {
        await SyncService.push({
          type: 'HABIT_UPDATE',
          data: {
            date_str: dateStr,
            done: current.done,
            at_end: nextAtEnd,
            minutes_studied: current.minutesStudied || 0,
            seconds_studied: current.secondsStudied || 0,
            completed_at: current.completedAt || null
          }
        });
      } catch (err: any) {
        setEnglishHabits(previousHabits);
        broadcastChange('HABIT_UPDATE', { dateStr, habit: current });
        notifySync({
          type: 'error',
          message: `Erro ao atualizar posição do Hábito de Inglês: ${err.message}. Alteração revertida.`
        });
      }
    }
  };

  const recordStudySeconds = (target: ActiveTimerTarget, secondsToAdd: number) => {
    if (secondsToAdd <= 0) return;

    const dateKey = target.dateStr || getTodayDateString();
    const nowIso = new Date().toISOString();
    const logId = `${dateKey}_${target.type}_${target.id}`;

    // 1. Atualização otimista do log de sessão (calculado de forma pura dentro do updater)
    setSessionLogs(prev => {
      const existingIdx = prev.findIndex(l => l.id === logId);
      let updatedLog: StudySessionLog;
      let nextLogs: StudySessionLog[];

      if (existingIdx !== -1) {
        nextLogs = [...prev];
        const item = nextLogs[existingIdx];
        updatedLog = {
          ...item,
          secondsStudied: (item.secondsStudied || 0) + secondsToAdd,
          timestamp: nowIso
        };
        nextLogs[existingIdx] = updatedLog;
      } else {
        const matchingTopic = target.type === 'topic' ? topics.find(t => t.id === target.id) : null;
        updatedLog = {
          id: logId,
          topicId: target.type === 'topic' ? target.id : undefined,
          targetTitle: target.title || matchingTopic?.microtopico || (target.type === 'english' ? 'Hábito Diário de Inglês' : 'Sessão de Estudo'),
          origem: matchingTopic?.origem || (target.type === 'english' ? ['Concurso'] : []),
          dateStr: dateKey,
          secondsStudied: secondsToAdd,
          type: target.type,
          timestamp: nowIso
        };
        nextLogs = [updatedLog, ...prev];
      }

      if (user) {
        const logSyncKey = `log_${logId}`;
        if (studySyncTimeoutRef.current[logSyncKey]) {
          clearTimeout(studySyncTimeoutRef.current[logSyncKey]);
        }
        const logSnapshot = updatedLog;
        studySyncTimeoutRef.current[logSyncKey] = setTimeout(() => {
          SyncService.push({
            type: 'SESSION_LOG',
            data: {
              id: logSnapshot.id,
              topic_id: logSnapshot.topicId || null,
              target_title: logSnapshot.targetTitle,
              origem: logSnapshot.origem || [],
              date_str: logSnapshot.dateStr,
              seconds_studied: logSnapshot.secondsStudied,
              type: logSnapshot.type,
              timestamp: logSnapshot.timestamp
            }
          }).catch(err => console.warn('[Sync] Aviso ao sincronizar sessão:', err));
        }, 5000);
      }

      return nextLogs;
    });

    if (target.type === 'english') {
      setEnglishHabits(prev => {
        const current = prev[dateKey] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
        const baseSecs = current.secondsStudied !== undefined ? current.secondsStudied : (current.minutesStudied || 0) * 60;
        const finalSecs = baseSecs + secondsToAdd;
        const finalMins = Math.floor(finalSecs / 60);
        const updatedHabit: EnglishHabitDay = {
          ...current,
          secondsStudied: finalSecs,
          minutesStudied: finalMins
        };

        if (user) {
          const habitSyncKey = `hab_${dateKey}`;
          if (studySyncTimeoutRef.current[habitSyncKey]) {
            clearTimeout(studySyncTimeoutRef.current[habitSyncKey]);
          }
          studySyncTimeoutRef.current[habitSyncKey] = setTimeout(() => {
            SyncService.push({
              type: 'HABIT_UPDATE',
              data: {
                date_str: dateKey,
                done: updatedHabit.done,
                at_end: updatedHabit.atEnd,
                seconds_studied: updatedHabit.secondsStudied,
                minutes_studied: updatedHabit.minutesStudied,
                completed_at: updatedHabit.completedAt || null
              }
            }).catch(err => console.warn('[Sync] Aviso ao sincronizar tempo de inglês:', err));
          }, 5000);
        }

        return {
          ...prev,
          [dateKey]: updatedHabit
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
          const updatedSecs = prevSecs + secondsToAdd;
          const updatedMins = Math.floor(updatedSecs / 60);
          const nextStatus = t.status === 'Pendente' ? 'Em Andamento' : t.status;
          const nextDataEstudo = t.dataEstudo || dateKey;

          if (user) {
            const topicSyncKey = `top_${target.id}`;
            if (studySyncTimeoutRef.current[topicSyncKey]) {
              clearTimeout(studySyncTimeoutRef.current[topicSyncKey]);
            }
            studySyncTimeoutRef.current[topicSyncKey] = setTimeout(() => {
              SyncService.push({
                type: 'TOPIC_PROGRESS',
                data: {
                  topic_id: target.id,
                  tempo_estudado_segundos: updatedSecs,
                  tempo_estudado_minutos: updatedMins,
                  data_estudo: nextDataEstudo,
                  status: nextStatus
                }
              }).catch(err => console.warn('[Sync] Aviso ao sincronizar tempo do tópico:', err));
            }, 5000);
          }

          return {
            ...t,
            tempoEstudadoSegundos: updatedSecs,
            tempoEstudadoMinutos: updatedMins,
            dataEstudo: nextDataEstudo,
            status: nextStatus
          };
        }
        return t;
      }));
    }
  };

  const moveTopicOrder = async (topicId: string, direction: 'up' | 'down', visibleIds?: string[]) => {
    const previousTopics = [...topics];
    const reorderedUpdates: Array<{ id: string; ordem_fila: number; status: Topic['status'] }> = [];

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
        ? newTopics.map(t => {
            if (orderMap.has(t.id)) {
              const newOrder = orderMap.get(t.id)!;
              reorderedUpdates.push({ id: t.id, ordem_fila: newOrder, status: t.status });
              return { ...t, ordemFila: newOrder };
            }
            return t;
          })
        : newTopics;

      return finalTopics;
    });

    if (reorderedUpdates.length > 0) {
      for (const item of reorderedUpdates) {
        broadcastChange('TOPIC_UPDATE', { topicId: item.id, updates: { ordemFila: item.ordem_fila } });
      }

      if (user) {
        try {
          await SyncService.push({
            type: 'BATCH_TOPIC_ORDER',
            data: reorderedUpdates
          });
        } catch (err: any) {
          setTopics(previousTopics);
          notifySync({
            type: 'error',
            message: `Erro ao salvar ordenação da fila na nuvem: ${err.message}. Alteração revertida.`
          });
        }
      }
    }
  };

  const addError = async (item: Omit<ErrorItem, 'id'>) => {
    const newItem: ErrorItem = {
      ...item,
      id: `err-${Date.now()}`
    };
    const previousErrors = [...errors];
    setErrors(prev => [newItem, ...prev]);

    if (user) {
      try {
        await SyncService.push({
          type: 'ERROR_UPSERT',
          data: {
            id: newItem.id,
            data: newItem.data,
            disciplina: newItem.disciplina,
            microtopico: newItem.microtopico,
            id_questao: newItem.idQuestao,
            enunciado: newItem.enunciado,
            alternativa_marcada: newItem.alternativaMarcada,
            gabarito_correto: newItem.gabaritoCorreto,
            classificacao_erro: newItem.classificacaoErro,
            licao_aprendida: newItem.licaoAprendida,
            prerequisito_relacionado: newItem.prerequisitoRelacionado
          }
        });
      } catch (e: any) {
        setErrors(previousErrors);
        notifySync({
          type: 'error',
          message: `Erro ao salvar item no Caderno de Erros: ${e.message}. Alteração revertida.`
        });
      }
    }
  };

  const updateError = async (id: string, updates: Partial<ErrorItem>) => {
    const previousErrors = [...errors];
    let updatedItem: ErrorItem | null = null;

    setErrors(prev => prev.map(e => {
      if (e.id === id) {
        updatedItem = { ...e, ...updates };
        return updatedItem;
      }
      return e;
    }));

    if (user && updatedItem) {
      const itemToSave = updatedItem as ErrorItem;
      try {
        await SyncService.push({
          type: 'ERROR_UPSERT',
          data: {
            id: itemToSave.id,
            data: itemToSave.data,
            disciplina: itemToSave.disciplina,
            microtopico: itemToSave.microtopico,
            id_questao: itemToSave.idQuestao,
            enunciado: itemToSave.enunciado,
            alternativa_marcada: itemToSave.alternativaMarcada,
            gabarito_correto: itemToSave.gabaritoCorreto,
            classificacao_erro: itemToSave.classificacaoErro,
            licao_aprendida: itemToSave.licaoAprendida,
            prerequisito_relacionado: itemToSave.prerequisitoRelacionado
          }
        });
      } catch (e: any) {
        setErrors(previousErrors);
        notifySync({
          type: 'error',
          message: `Erro ao atualizar item do Caderno de Erros: ${e.message}. Alteração revertida.`
        });
      }
    }
  };

  const deleteError = async (id: string) => {
    const previousErrors = [...errors];
    setErrors(prev => prev.filter(e => e.id !== id));

    if (user) {
      try {
        await SyncService.push({
          type: 'ERROR_DELETE',
          data: { id }
        });
      } catch (e: any) {
        setErrors(previousErrors);
        notifySync({
          type: 'error',
          message: `Erro ao remover item do Caderno de Erros: ${e.message}. Alteração revertida.`
        });
      }
    }
  };

  const exportBackup = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      version: '5.0-cloud-authoritative',
      topics,
      errors,
      englishHabits,
      sessionLogs
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
        if (Array.isArray(data.errors)) setErrors(data.errors);
        if (data.englishHabits && typeof data.englishHabits === 'object') setEnglishHabits(data.englishHabits);
        if (Array.isArray(data.sessionLogs)) setSessionLogs(data.sessionLogs);
        return true;
      }
    } catch (e) {
      console.error('Falha ao importar backup', e);
    }
    return false;
  };

  const resetToInitial = () => {
    if (window.confirm('Tem certeza que deseja restaurar os dados originais? Todas as alterações manuais serão resetadas.')) {
      setTopics(INITIAL_TOPICS);
      setErrors(INITIAL_ERRORS);
      setEnglishHabits({});
      setSessionLogs([]);
      localStorage.removeItem(STORAGE_KEY_TOPICS);
      localStorage.removeItem(STORAGE_KEY_ERRORS);
      localStorage.removeItem(STORAGE_KEY_HABITS);
      localStorage.removeItem(STORAGE_KEY_SESSION_LOGS);
    }
  };

  return (
    <StudyContext.Provider
      value={{
        topics,
        errors,
        sessionLogs,
        activeTab,
        setActiveTab,
        updateTopic,
        markAsMastered,
        quickCompleteTopic,
        completeBookSession,
        reopenTopicForDate,
        rescheduleTopic,
        scheduleForToday,
        scheduleTopicForDate,
        diluteAccumulatedTopics,
        completeRevision,
        addError,
        updateError,
        deleteError,
        exportBackup,
        importBackup,
        resetToInitial,
        selectedTopicForModal,
        setSelectedTopicForModal,
        isSyncing,
        isCloudConnected: !!user,
        cloudSyncError,
        refreshCloudData: () => loadCloudData(true),
        syncNotification,
        dismissSyncNotification,
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
