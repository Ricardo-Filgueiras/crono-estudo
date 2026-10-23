import React, { useRef } from 'react';
import { useStudy } from '../context/StudyContext';
import { useAuth } from '../context/AuthContext';
import { ActiveTab } from '../types';
import { 
  Calendar, 
  BookOpen, 
  RotateCcw, 
  AlertCircle, 
  BarChart3, 
  Download, 
  Upload, 
  RefreshCw,
  Award,
  Cloud,
  LogIn,
  LogOut
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    topics, 
    activeTab, 
    setActiveTab, 
    exportBackup, 
    importBackup, 
    resetToInitial,
    isSyncing
  } = useStudy();

  const { user, openAuthModal, signOut } = useAuth();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const completedCount = topics.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
  const masteredCount = topics.filter(t => t.status === 'Dominado').length;
  const totalCount = topics.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ok = await importBackup(file);
      if (ok) {
        alert('Backup restaurado com sucesso!');
      } else {
        alert('Erro ao carregar o arquivo. Certifique-se de que é um JSON de backup válido.');
      }
      e.target.value = '';
    }
  };

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { 
      id: 'hoje', 
      label: 'Foco de Hoje', 
      icon: <Calendar className="w-4 h-4" aria-hidden="true" /> 
    },
    { 
      id: 'edital', 
      label: 'Edital Completo', 
      icon: <BookOpen className="w-4 h-4" aria-hidden="true" />,
      badge: totalCount
    },
    { 
      id: 'revisoes', 
      label: 'Revisões (D+7)', 
      icon: <RotateCcw className="w-4 h-4" aria-hidden="true" />,
      badge: topics.filter(t => t.proximaRevisao).length
    },
    { 
      id: 'erros', 
      label: 'Caderno de Erros FCC', 
      icon: <AlertCircle className="w-4 h-4" aria-hidden="true" /> 
    },
    { 
      id: 'estatisticas', 
      label: 'Estatísticas', 
      icon: <BarChart3 className="w-4 h-4" aria-hidden="true" /> 
    },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20" aria-hidden="true">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">CronoEstudo</h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/20">
                  TCE-GO • TI
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Português, RLM & Específicos • Ciclo inteligente sem sobrecarga
              </p>
            </div>
          </div>

          {/* Quick Stats & Backup Actions */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Progress pill */}
            <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
              <Award className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span className="text-slate-200">
                Progresso: <strong className="text-emerald-400 font-semibold">{progressPercent}%</strong> ({completedCount}/{totalCount})
              </span>
              {masteredCount > 0 && (
                <span className="ml-1 pl-2 border-l border-slate-700 text-amber-300 font-medium">
                  {masteredCount} dominados
                </span>
              )}
            </div>

            {/* Backup buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={exportBackup}
                title="Fazer Backup dos seus estudos (Download JSON)"
                aria-label="Fazer Backup dos seus estudos e baixar arquivo JSON"
                className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Backup</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                title="Restaurar Backup anterior"
                aria-label="Restaurar dados anteriores a partir de um arquivo JSON"
                className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
              >
                <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Restaurar</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
                onChange={handleFileChange}
              />

              <button
                onClick={resetToInitial}
                title="Recarregar dados originais com todas as matérias e tópicos padrão"
                aria-label="Restaurar dados originais do edital e resetar alterações"
                className="text-slate-300 hover:text-amber-400 p-1.5 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Auth / Cloud Sync Status */}
            <div className="flex items-center pl-2 border-l border-slate-800">
              {user ? (
                <div className="flex items-center gap-2">
                  <div
                    title={isSyncing ? "Sincronizando com Supabase..." : "Nuvem Conectada e Sincronizada"}
                    className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2.5 py-1.5 rounded-lg text-xs"
                  >
                    <Cloud className={`w-3.5 h-3.5 ${isSyncing ? 'animate-pulse text-amber-400' : 'text-emerald-400'}`} />
                    <span className="hidden md:inline font-mono text-[11px] max-w-[120px] truncate text-slate-200">
                      {user.email}
                    </span>
                  </div>
                  <button
                    onClick={signOut}
                    title="Sair da conta"
                    aria-label="Sair da conta"
                    className="text-slate-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 transition"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={openAuthModal}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-medium text-xs px-3 py-1.5 rounded-lg shadow-sm shadow-emerald-500/20 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Entrar / Sincronizar</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Tab Navigation (Mobile uses BottomNav) */}
        <nav className="hidden sm:flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Navegação principal">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className={`text-xs px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-emerald-500/20 text-emerald-200' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
