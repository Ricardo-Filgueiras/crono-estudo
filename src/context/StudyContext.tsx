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
import confetti from 'canvas-confetti';

interface StudyContextType {
  topics: Topic[];
  errors: ErrorItem[];
  sessionLogs: StudySessionLog[];
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
  refreshCloudData: () => Promise<void>;

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
const STORAGE_KEY_SESSION_LOGS = 'crono_estudo_session_logs_v1';
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
        (isPortugueseTopic ||
          saved.faseRecomendada === '⏳ Pendente - Aguardando estudo.' ||
          saved.faseRecomendada === '⏳ Standby (Próximos módulos do MBA).') &&
        initial.faseRecomendada
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
    // Sintetizar histórico base inicial a partir dos tópicos com dataEstudo registrada
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

  const { user } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [cloudSyncError, setCloudSyncError] = useState<string | null>(null);
  const cloudLoadedForUser = useRef<string | null>(null);
  const isApplyingCloudData = useRef(false);

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

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SESSION_LOGS, JSON.stringify(sessionLogs));
    } catch (e) {
      console.error('Falha ao salvar logs de sessão no storage', e);
    }
  }, [sessionLogs]);

  // Função centralizada para carregar dados do Supabase
  const loadCloudData = async (_isManualOrRefresh = false) => {
    if (!user) return;
    try {
      setIsSyncing(true);
      setCloudSyncError(null);

      const [topicsRes, prereqsRes, progressRes, errorsRes, habitsRes, sessionsRes] = await Promise.all([
        supabase.from('topics').select('*'),
        supabase.from('topic_prerequisites').select('*'),
        supabase.from('user_topic_progress').select('*').eq('user_id', user.id),
        supabase.from('user_study_errors').select('*').eq('user_id', user.id),
        supabase.from('user_english_habits').select('*').eq('user_id', user.id),
        supabase.from('user_study_sessions').select('*').eq('user_id', user.id)
      ]);

      isApplyingCloudData.current = true;

      // 1. Tópicos e Progresso
      if (topicsRes.data && topicsRes.data.length > 0) {
        const prereqMap = new Map<string, string[]>();
        for (const p of (prereqsRes.data || [])) {
          if (!prereqMap.has(p.topic_id)) prereqMap.set(p.topic_id, []);
          prereqMap.get(p.topic_id)!.push(p.prerequisite_id);
        }

        const progressMap = new Map<string, any>();
        for (const prog of (progressRes.data || [])) {
          progressMap.set(prog.topic_id, prog);
        }

        const combinedTopics: Topic[] = topicsRes.data.map((t: any) => {
          const prog = progressMap.get(t.id);
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
            status: prog?.status || 'Pendente',
            dataEstudo: prog?.data_estudo || undefined,
            acertosExercicios: prog?.acertos_exercicios ?? undefined,
            anotacoes: prog?.anotacoes || undefined,
            proximaRevisao: prog?.proxima_revisao || undefined,
            agendadoPara: prog?.agendado_para || undefined,
            ordemFila: prog?.ordem_fila ?? undefined,
            prioridade: prog?.prioridade || undefined,
            tempoEstudadoMinutos: prog?.tempo_estudado_minutos || 0,
            tempoEstudadoSegundos: prog?.tempo_estudado_segundos || 0,
            evidencias: prog?.evidencias || {},
            justificativaRecomendacao: prog?.justificativa_recomendacao || undefined
          };
        });

        setTopics(mergeWithInitialTopics(combinedTopics));
      }

      // 2. Erros FCC
      if (errorsRes.data && errorsRes.data.length > 0) {
        setErrors(errorsRes.data.map((e: any) => ({
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

      // 3. Hábitos de Inglês
      if (habitsRes.data && habitsRes.data.length > 0) {
        const habitsObj: Record<string, EnglishHabitDay> = {};
        for (const h of habitsRes.data) {
          habitsObj[h.date_str] = {
            done: h.done,
            atEnd: h.at_end,
            minutesStudied: h.minutes_studied || 0,
            secondsStudied: h.seconds_studied || 0,
            completedAt: h.completed_at
          };
        }
        setEnglishHabits(prev => ({ ...prev, ...habitsObj }));
      }

      // 4. Sessões de Estudo
      if (sessionsRes.data && sessionsRes.data.length > 0) {
        setSessionLogs(sessionsRes.data.map((s: any) => ({
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
      console.error('Erro ao sincronizar com Supabase:', err);
      setCloudSyncError(err.message || 'Falha ao sincronizar com a nuvem');
    } finally {
      setIsSyncing(false);
      setTimeout(() => {
        isApplyingCloudData.current = false;
      }, 500);
    }
  };

  // Carregar dados e manter escuta em tempo real (WebSockets) via Supabase Realtime
  useEffect(() => {
    if (!user) {
      cloudLoadedForUser.current = null;
      return;
    }

    loadCloudData();

    // 🔴 WEBSOCKET REALTIME: O que for alterado no mobile reflete instantaneamente no desktop
    const channel = supabase
      .channel(`crono_realtime_${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_english_habits',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const h = payload.new as any;
            setEnglishHabits(prev => ({
              ...prev,
              [h.date_str]: {
                done: h.done,
                atEnd: h.at_end,
                minutesStudied: h.minutes_studied || 0,
                secondsStudied: h.seconds_studied || 0,
                completedAt: h.completed_at
              }
            }));
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_topic_progress',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const prog = payload.new as any;
            setTopics(prev => prev.map(t => {
              if (t.id === prog.topic_id) {
                return {
                  ...t,
                  status: prog.status,
                  dataEstudo: prog.data_estudo || undefined,
                  acertosExercicios: prog.acertos_exercicios ?? undefined,
                  anotacoes: prog.anotacoes || undefined,
                  proximaRevisao: prog.proxima_revisao || undefined,
                  agendadoPara: prog.agendado_para || undefined,
                  ordemFila: prog.ordem_fila ?? undefined,
                  prioridade: prog.prioridade || undefined,
                  tempoEstudadoMinutos: prog.tempo_estudado_minutos || 0,
                  tempoEstudadoSegundos: prog.tempo_estudado_segundos || 0,
                  evidencias: prog.evidencias || {},
                  justificativaRecomendacao: prog.justificativa_recomendacao || undefined
                };
              }
              return t;
            }));
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_study_sessions',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
            const s = payload.new as any;
            setSessionLogs(prev => {
              const idx = prev.findIndex(item => item.id === s.id);
              const mapped = {
                id: s.id,
                topicId: s.topic_id || undefined,
                targetTitle: s.target_title,
                origem: s.origem || [],
                dateStr: s.date_str,
                secondsStudied: s.seconds_studied || 0,
                type: s.type || 'topic',
                timestamp: s.timestamp || new Date().toISOString()
              };
              if (idx !== -1) {
                const next = [...prev];
                next[idx] = mapped;
                return next;
              }
              return [mapped, ...prev];
            });
          }
        }
      )
      .subscribe();

    // Sincronização ao focar na janela / desbloquear tela
    const handleWindowFocusOrVisibility = () => {
      if (document.visibilityState === 'visible') {
        loadCloudData(true);
      }
    };

    window.addEventListener('visibilitychange', handleWindowFocusOrVisibility);
    window.addEventListener('focus', handleWindowFocusOrVisibility);

    return () => {
      supabase.removeChannel(channel);
      window.removeEventListener('visibilitychange', handleWindowFocusOrVisibility);
      window.removeEventListener('focus', handleWindowFocusOrVisibility);
    };
  }, [user]);

  // Sincronizar alterações locais para o Supabase (Relacional granular + Backup Snapshot)
  useEffect(() => {
    if (!user || cloudLoadedForUser.current !== user.id) return;
    if (isApplyingCloudData.current) return;

    const nowIso = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY_UPDATED_AT, nowIso);
    } catch {}

    const timeout = setTimeout(async () => {
      try {
        setIsSyncing(true);
        setCloudSyncError(null);

        // 1. Upsert relacional em user_topic_progress
        const progressRows = topics.map(t => ({
          user_id: user.id,
          topic_id: t.id,
          status: t.status,
          data_estudo: t.dataEstudo || null,
          acertos_exercicios: t.acertosExercicios ?? null,
          anotacoes: t.anotacoes || null,
          proxima_revisao: t.proximaRevisao || null,
          agendado_para: t.agendadoPara || null,
          ordem_fila: t.ordemFila ?? null,
          prioridade: t.prioridade || null,
          tempo_estudado_minutos: t.tempoEstudadoMinutos || 0,
          tempo_estudado_segundos: t.tempoEstudadoSegundos || 0,
          evidencias: t.evidencias || {},
          justificativa_recomendacao: t.justificativaRecomendacao || null,
          updated_at: nowIso
        }));

        const { error: progError } = await supabase
          .from('user_topic_progress')
          .upsert(progressRows, { onConflict: 'user_id,topic_id' });
        if (progError) console.error('Erro ao salvar progresso relacional:', progError);

        // 2. Upsert relacional de hábitos de inglês
        const habitEntries = Object.entries(englishHabits);
        if (habitEntries.length > 0) {
          const habitRows = habitEntries.map(([dateStr, h]) => ({
            user_id: user.id,
            date_str: dateStr,
            done: h.done,
            at_end: h.atEnd,
            minutes_studied: h.minutesStudied || 0,
            seconds_studied: h.secondsStudied || 0,
            completed_at: h.completedAt || null
          }));
          const { error: habitError } = await supabase
            .from('user_english_habits')
            .upsert(habitRows, { onConflict: 'user_id,date_str' });
          if (habitError) console.error('Erro ao salvar hábitos relacionais:', habitError);
        }

        // 3. Upsert relacional de sessões de estudo
        if (sessionLogs.length > 0) {
          const sessionRows = sessionLogs.map(s => ({
            id: s.id,
            user_id: user.id,
            topic_id: s.topicId || null,
            target_title: s.targetTitle,
            origem: s.origem || [],
            date_str: s.dateStr,
            seconds_studied: s.secondsStudied || 0,
            type: s.type,
            timestamp: s.timestamp || nowIso
          }));
          const { error: sessError } = await supabase
            .from('user_study_sessions')
            .upsert(sessionRows, { onConflict: 'user_id,id' });
          if (sessError) console.error('Erro ao salvar sessões relacionais:', sessError);
        }

        // 4. Backup na tabela snapshot user_study_data (dupla segurança)
        const { error: snapError } = await supabase.from('user_study_data').upsert(
          {
            user_id: user.id,
            topics,
            errors,
            session_logs: sessionLogs,
            updated_at: nowIso
          },
          { onConflict: 'user_id' }
        );
        if (snapError) console.error('Erro ao salvar snapshot de backup:', snapError);
      } catch (err: any) {
        console.error('Erro ao salvar no Supabase:', err);
        setCloudSyncError('Não foi possível salvar na nuvem');
      } finally {
        setIsSyncing(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [topics, errors, englishHabits, sessionLogs, user]);

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

    if (user) {
      supabase.from('user_topic_progress').upsert({
        user_id: user.id,
        topic_id: id,
        status: 'Dominado',
        data_estudo: effectiveDate,
        agendado_para: null,
        fase_recomendada: '⭐ Conteúdo dominado! Alicerce consolidado para conteúdos dependentes.',
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,topic_id' }).then(({ error }) => {
        if (error) console.error('Erro ao sincronizar tópico dominado:', error);
      });
    }

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

    if (user) {
      supabase.from('user_topic_progress').upsert({
        user_id: user.id,
        topic_id: id,
        status: 'Teoria Concluída',
        data_estudo: effectiveDate,
        proxima_revisao: nextRevDate,
        agendado_para: null,
        fase_recomendada: '✅ Concluído no Foco do Dia! Revisão agendada (D+7).',
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,topic_id' }).then(({ error }) => {
        if (error) console.error('Erro ao sincronizar conclusão de tópico:', error);
      });
    }

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

    if (user) {
      supabase.from('user_topic_progress').upsert({
        user_id: user.id,
        topic_id: id,
        status: 'Em Andamento',
        agendado_para: dateStr,
        data_estudo: null,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,topic_id' }).then(({ error }) => {
        if (error) console.error('Erro ao reabrir tópico:', error);
      });
    }
  };

  const recordStudySeconds = (target: ActiveTimerTarget, secondsToAdd: number) => {
    if (secondsToAdd <= 0) return;

    const dateKey = target.dateStr || getTodayDateString();
    const nowIso = new Date().toISOString();
    const logId = `${dateKey}_${target.type}_${target.id}`;

    // 1. Registra no histórico de sessões com granularidade por dia e alvo
    setSessionLogs(prev => {
      const existingIdx = prev.findIndex(l => l.id === logId);
      if (existingIdx !== -1) {
        const updated = [...prev];
        const item = updated[existingIdx];
        updated[existingIdx] = {
          ...item,
          secondsStudied: (item.secondsStudied || 0) + secondsToAdd,
          timestamp: nowIso
        };
        return updated;
      } else {
        const matchingTopic = target.type === 'topic' ? topics.find(t => t.id === target.id) : null;
        const newLog: StudySessionLog = {
          id: logId,
          topicId: target.type === 'topic' ? target.id : undefined,
          targetTitle: target.title || matchingTopic?.microtopico || (target.type === 'english' ? 'Hábito Diário de Inglês' : 'Sessão de Estudo'),
          origem: matchingTopic?.origem || (target.type === 'english' ? ['Concurso'] : []),
          dateStr: dateKey,
          secondsStudied: secondsToAdd,
          type: target.type,
          timestamp: nowIso
        };
        return [newLog, ...prev];
      }
    });

    if (target.type === 'english') {
      let finalSecs = 0;
      setEnglishHabits(prev => {
        const current = prev[dateKey] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
        finalSecs = (current.secondsStudied || (current.minutesStudied || 0) * 60) + secondsToAdd;
        const totalMinutes = Math.floor(finalSecs / 60);
        return {
          ...prev,
          [dateKey]: {
            ...current,
            secondsStudied: finalSecs,
            minutesStudied: totalMinutes
          }
        };
      });

      if (user) {
        const cur = englishHabits[dateKey] || { done: false, atEnd: false };
        supabase.from('user_english_habits').upsert({
          user_id: user.id,
          date_str: dateKey,
          done: cur.done,
          at_end: cur.atEnd,
          seconds_studied: finalSecs,
          minutes_studied: Math.floor(finalSecs / 60)
        }, { onConflict: 'user_id,date_str' }).then(({ error }) => {
          if (error) console.error('Erro ao sincronizar hábito com tempo:', error);
        });
      }
      return;
    }

    if (target.type === 'topic') {
      let updatedSecs = 0;
      let updatedMins = 0;
      setTopics(prev => prev.map(t => {
        if (t.id === target.id) {
          const prevSecs = t.tempoEstudadoSegundos !== undefined
            ? t.tempoEstudadoSegundos
            : (t.tempoEstudadoMinutos || 0) * 60;
          updatedSecs = prevSecs + secondsToAdd;
          updatedMins = Math.floor(updatedSecs / 60);
          return {
            ...t,
            tempoEstudadoSegundos: updatedSecs,
            tempoEstudadoMinutos: updatedMins,
            dataEstudo: t.dataEstudo || dateKey,
            status: t.status === 'Pendente' ? 'Em Andamento' : t.status
          };
        }
        return t;
      }));

      if (user) {
        supabase.from('user_topic_progress').upsert({
          user_id: user.id,
          topic_id: target.id,
          tempo_estudado_segundos: updatedSecs,
          tempo_estudado_minutos: updatedMins,
          data_estudo: dateKey,
          updated_at: nowIso
        }, { onConflict: 'user_id,topic_id' }).then(({ error }) => {
          if (error) console.error('Erro ao sincronizar tempo do tópico:', error);
        });
      }
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

  const addError = async (item: Omit<ErrorItem, 'id'>) => {
    const newItem: ErrorItem = {
      ...item,
      id: `err-${Date.now()}`
    };
    setErrors(prev => [newItem, ...prev]);

    if (user) {
      try {
        await supabase.from('user_study_errors').insert({
          id: newItem.id,
          user_id: user.id,
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
        });
      } catch (e) {
        console.error('Erro ao salvar erro no banco relacional:', e);
      }
    }
  };

  const deleteError = async (id: string) => {
    setErrors(prev => prev.filter(e => e.id !== id));
    if (user) {
      try {
        await supabase.from('user_study_errors').delete().eq('id', id).eq('user_id', user.id);
      } catch (e) {
        console.error('Erro ao excluir erro do banco relacional:', e);
      }
    }
  };

  const exportBackup = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      version: '4.1-session-logs',
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
        if (Array.isArray(data.errors)) {
          setErrors(data.errors);
        }
        if (data.englishHabits && typeof data.englishHabits === 'object') {
          setEnglishHabits(data.englishHabits);
        }
        if (Array.isArray(data.sessionLogs)) {
          setSessionLogs(data.sessionLogs);
        }
        return true;
      }
    } catch (e) {
      console.error('Falha ao importar backup', e);
    }
    return false;
  };

  const toggleEnglishDone = (dateStr: string) => {
    let nextDone = false;
    let nextCompletedAt: string | undefined = undefined;

    setEnglishHabits(prev => {
      const current = prev[dateStr] || { done: false, atEnd: false };
      nextDone = !current.done;
      nextCompletedAt = nextDone ? new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : undefined;
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
          completedAt: nextCompletedAt
        }
      };
    });

    if (user) {
      const current = englishHabits[dateStr] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
      supabase.from('user_english_habits').upsert({
        user_id: user.id,
        date_str: dateStr,
        done: nextDone,
        at_end: current.atEnd,
        minutes_studied: current.minutesStudied || 0,
        seconds_studied: current.secondsStudied || 0,
        completed_at: nextCompletedAt || null
      }, { onConflict: 'user_id,date_str' }).then(({ error }) => {
        if (error) console.error('Erro ao salvar hábito de inglês imediatamente no Supabase:', error);
      });
    }
  };

  const toggleEnglishAtEnd = (dateStr: string) => {
    let nextAtEnd = false;
    setEnglishHabits(prev => {
      const current = prev[dateStr] || { done: false, atEnd: false };
      nextAtEnd = !current.atEnd;
      return {
        ...prev,
        [dateStr]: { ...current, atEnd: nextAtEnd }
      };
    });

    if (user) {
      const current = englishHabits[dateStr] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };
      supabase.from('user_english_habits').upsert({
        user_id: user.id,
        date_str: dateStr,
        done: current.done,
        at_end: nextAtEnd,
        minutes_studied: current.minutesStudied || 0,
        seconds_studied: current.secondsStudied || 0,
        completed_at: current.completedAt || null
      }, { onConflict: 'user_id,date_str' }).then(({ error }) => {
        if (error) console.error('Erro ao salvar posição de hábito de inglês:', error);
      });
    }
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
        refreshCloudData: () => loadCloudData(true),
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
