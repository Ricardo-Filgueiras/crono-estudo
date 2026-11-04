import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://rjsmllzudhlfvhfjupzz.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqc21sbHp1ZGhsZnZoZmp1cHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3ODQzODAsImV4cCI6MjEwODM2MDM4MH0.zGfErM_yCsxdtleu3N97gEQzyzkeDXIadml5eoT_s5s';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  const token = authHeader.replace('Bearer ', '');
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    global: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return res.status(401).json({ error: 'Sessão inválida ou expirada' });
  }

  const action = req.body;
  if (!action || !action.type) {
    return res.status(400).json({ error: 'Ação inválida ou malformada' });
  }

  try {
    const { type, data } = action;

    if (type === 'HABIT_UPDATE') {
      const { error } = await supabase.from('user_english_habits').upsert({
        user_id: user.id,
        date_str: data.date_str,
        done: Boolean(data.done),
        at_end: Boolean(data.at_end),
        minutes_studied: data.minutes_studied || 0,
        seconds_studied: data.seconds_studied || 0,
        completed_at: data.completed_at ? new Date(data.completed_at).toISOString() : null
      }, { onConflict: 'user_id,date_str' });

      if (error) throw error;
      return res.status(200).json({ success: true, type, date_str: data.date_str });
    }

    if (type === 'TOPIC_PROGRESS') {
      const topicUpdateData: any = {
        user_id: user.id,
        topic_id: data.topic_id,
        updated_at: new Date().toISOString()
      };
      if (data.status !== undefined) topicUpdateData.status = data.status;
      if (data.data_estudo !== undefined) topicUpdateData.data_estudo = data.data_estudo;
      if (data.agendado_para !== undefined) topicUpdateData.agendado_para = data.agendado_para;
      if (data.proxima_revisao !== undefined) topicUpdateData.proxima_revisao = data.proxima_revisao;
      if (data.ordem_fila !== undefined) topicUpdateData.ordem_fila = data.ordem_fila;
      if (data.tempo_estudado_segundos !== undefined) topicUpdateData.tempo_estudado_segundos = data.tempo_estudado_segundos;
      if (data.tempo_estudado_minutos !== undefined) topicUpdateData.tempo_estudado_minutos = data.tempo_estudado_minutos;
      if (data.anotacoes !== undefined) topicUpdateData.anotacoes = data.anotacoes;
      if (data.justificativa_recomendacao !== undefined) topicUpdateData.justificativa_recomendacao = data.justificativa_recomendacao;

      if (!topicUpdateData.status) {
        topicUpdateData.status = 'Pendente';
      }

      const { error } = await supabase.from('user_topic_progress').upsert(topicUpdateData, { onConflict: 'user_id,topic_id' });

      if (error) throw error;
      return res.status(200).json({ success: true, type, topic_id: data.topic_id });
    }

    if (type === 'SESSION_LOG') {
      const { error } = await supabase.from('user_study_sessions').upsert({
        id: data.id,
        user_id: user.id,
        topic_id: data.topic_id ?? null,
        target_title: data.target_title,
        origem: data.origem || [],
        date_str: data.date_str,
        seconds_studied: data.seconds_studied || 0,
        type: data.type || 'topic',
        timestamp: data.timestamp ? new Date(data.timestamp).toISOString() : new Date().toISOString()
      }, { onConflict: 'id' });

      if (error) throw error;
      return res.status(200).json({ success: true, type, id: data.id });
    }

    if (type === 'BATCH_TOPIC_ORDER') {
      if (Array.isArray(data)) {
        for (const item of data) {
          await supabase.from('user_topic_progress').update({
            ordem_fila: item.ordem_fila,
            updated_at: new Date().toISOString()
          }).eq('user_id', user.id).eq('topic_id', item.id);
        }
      }
      return res.status(200).json({ success: true, type });
    }

    if (type === 'ERROR_UPSERT') {
      const { error } = await supabase.from('user_study_errors').upsert({
        id: data.id,
        user_id: user.id,
        data: data.data,
        disciplina: data.disciplina,
        microtopico: data.microtopico,
        id_questao: data.id_questao,
        enunciado: data.enunciado,
        alternativa_marcada: data.alternativa_marcada,
        gabarito_correto: data.gabarito_correto,
        classificacao_erro: data.classificacao_erro,
        licao_aprendida: data.licao_aprendida,
        prerequisito_relacionado: data.prerequisito_relacionado,
        created_at: new Date().toISOString()
      }, { onConflict: 'id' });

      if (error) throw error;
      return res.status(200).json({ success: true, type, id: data.id });
    }

    if (type === 'ERROR_DELETE') {
      const { error } = await supabase.from('user_study_errors')
        .delete()
        .eq('user_id', user.id)
        .eq('id', data.id);

      if (error) throw error;
      return res.status(200).json({ success: true, type, id: data.id });
    }

    return res.status(400).json({ error: `Tipo de ação desconhecido: ${type}` });
  } catch (err: any) {
    console.error('[API /sync/push] Erro:', err);
    return res.status(500).json({ error: err.message || 'Erro ao processar push de sincronização' });
  }
}
