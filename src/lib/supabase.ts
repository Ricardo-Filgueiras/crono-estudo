import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rjsmllzudhlfvhfjupzz.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqc21sbHp1ZGhsZnZoZmp1cHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3ODQzODAsImV4cCI6MjEwODM2MDM4MH0.zGfErM_yCsxdtleu3N97gEQzyzkeDXIadml5eoT_s5s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
