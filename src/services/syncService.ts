import { supabase } from '../lib/supabase';

export type SyncActionType = 
  | 'HABIT_UPDATE'
  | 'QUESTION_HABIT_UPDATE'
  | 'TOPIC_PROGRESS'
  | 'SESSION_LOG'
  | 'BATCH_TOPIC_ORDER'
  | 'ERROR_UPSERT'
  | 'ERROR_DELETE';

export interface SyncAction {
  type: SyncActionType;
  data: any;
}

export interface BootstrapData {
  topics: any[];
  prerequisites: any[];
  progress: any[];
  habits: any[];
  question_habits?: any[];
  sessions: any[];
  errors: any[];
  server_time: string;
}

export class SyncService {
  /**
   * Envia uma mutação para a nuvem de forma resiliente e atômica.
   * Tenta primariamente a RPC transactional `sync_push` com autoridade total na nuvem.
   * Em caso de falha de conexão, recorre ao endpoint intermediário `/api/sync/push`.
   * Lança erro caso a nuvem rejeite, permitindo o Rollback imediato no cliente.
   */
  static async push(action: SyncAction): Promise<{ success: boolean; data?: any }> {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || !session.user) {
      throw new Error('Usuário não autenticado. Ações só são persistidas na nuvem para contas logadas.');
    }

    // 1. Caminho Principal: RPC Transacional Direta no PostgreSQL (sub-100ms)
    try {
      const { data, error } = await supabase.rpc('sync_push', { p_action: action });
      if (!error && data?.success) {
        return { success: true, data };
      }
      if (error) {
        console.warn('[SyncService] RPC sync_push avisou erro, tentando fallback API:', error.message);
      }
    } catch (rpcErr) {
      console.warn('[SyncService] Falha na chamada RPC sync_push, tentando fallback API:', rpcErr);
    }

    // 2. Caminho Secundário: Rota Serverless Blindada (/api/sync/push)
    try {
      const response = await fetch('/api/sync/push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify(action)
      });

      if (response.ok) {
        const result = await response.json();
        return { success: true, data: result };
      }

      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Servidor respondeu com status ${response.status}`);
    } catch (fetchErr: any) {
      console.error('[SyncService] Todas as tentativas de gravação falharam:', fetchErr);
      throw fetchErr;
    }
  }

  /**
   * Hidratação soberana da nuvem (Single Source of Truth).
   * Baixa todo o estado consolidado em uma única chamada relacional atômica.
   */
  static async bootstrap(): Promise<BootstrapData | null> {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || !session.user) {
      return null;
    }

    // 1. Caminho Principal: RPC sync_bootstrap consolidada
    try {
      const { data, error } = await supabase.rpc('sync_bootstrap');
      if (!error && data) {
        return data as BootstrapData;
      }
      if (error) {
        console.warn('[SyncService] RPC sync_bootstrap avisou erro, tentando fallback API:', error.message);
      }
    } catch (rpcErr) {
      console.warn('[SyncService] Falha na RPC sync_bootstrap, tentando fallback API:', rpcErr);
    }

    // 2. Caminho Secundário: Endpoint /api/sync/bootstrap
    try {
      const response = await fetch('/api/sync/bootstrap', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (apiErr) {
      console.warn('[SyncService] Fallback API /api/sync/bootstrap falhou:', apiErr);
    }

    // 3. Fallback Direto Multi-Query via SDK
    try {
      const [topicsRes, prereqsRes, progressRes, habitsRes, sessionsRes, errorsRes] = await Promise.all([
        supabase.from('topics').select('*'),
        supabase.from('topic_prerequisites').select('*'),
        supabase.from('user_topic_progress').select('*').eq('user_id', session.user.id),
        supabase.from('user_english_habits').select('*').eq('user_id', session.user.id),
        supabase.from('user_study_sessions').select('*').eq('user_id', session.user.id).order('timestamp', { ascending: false }),
        supabase.from('user_study_errors').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false })
      ]);

      return {
        topics: topicsRes.data || [],
        prerequisites: prereqsRes.data || [],
        progress: progressRes.data || [],
        habits: habitsRes.data || [],
        sessions: sessionsRes.data || [],
        errors: errorsRes.data || [],
        server_time: new Date().toISOString()
      };
    } catch (fallbackErr) {
      console.error('[SyncService] Erro fatal no bootstrap:', fallbackErr);
      throw fallbackErr;
    }
  }
}
