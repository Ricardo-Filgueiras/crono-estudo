import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://rjsmllzudhlfvhfjupzz.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqc21sbHp1ZGhsZnZoZmp1cHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3ODQzODAsImV4cCI6MjEwODM2MDM4MH0.zGfErM_yCsxdtleu3N97gEQzyzkeDXIadml5eoT_s5s';

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  const token = authHeader.replace('Bearer ', '');
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });

  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return res.status(401).json({ error: 'Sessão inválida ou expirada' });
  }

  try {
    const [topicsRes, prereqsRes, progressRes, habitsRes, sessionsRes, errorsRes] = await Promise.all([
      supabase.from('topics').select('*'),
      supabase.from('topic_prerequisites').select('*'),
      supabase.from('user_topic_progress').select('*').eq('user_id', user.id),
      supabase.from('user_english_habits').select('*').eq('user_id', user.id),
      supabase.from('user_study_sessions').select('*').eq('user_id', user.id).order('timestamp', { ascending: false }),
      supabase.from('user_study_errors').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
    ]);

    return res.status(200).json({
      topics: topicsRes.data || [],
      prerequisites: prereqsRes.data || [],
      progress: progressRes.data || [],
      habits: habitsRes.data || [],
      sessions: sessionsRes.data || [],
      errors: errorsRes.data || [],
      server_time: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('[API /sync/bootstrap] Erro:', err);
    return res.status(500).json({ error: err.message || 'Erro interno no bootstrap' });
  }
}
