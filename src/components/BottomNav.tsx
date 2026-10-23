import React from 'react';
import { useStudy } from '../context/StudyContext';
import { ActiveTab } from '../types';
import { 
  Calendar, 
  BookOpen, 
  RotateCcw, 
  AlertCircle, 
  BarChart3 
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, topics, errors } = useStudy();

  const totalCount = topics.length;
  const reviewCount = topics.filter(t => t.proximaRevisao).length;

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { 
      id: 'hoje', 
      label: 'Foco', 
      icon: <Calendar className="w-5 h-5" aria-hidden="true" /> 
    },
    { 
      id: 'edital', 
      label: 'Edital', 
      icon: <BookOpen className="w-5 h-5" aria-hidden="true" />,
      badge: totalCount
    },
    { 
      id: 'revisoes', 
      label: 'Revisar', 
      icon: <RotateCcw className="w-5 h-5" aria-hidden="true" />,
      badge: reviewCount > 0 ? reviewCount : undefined
    },
    { 
      id: 'erros', 
      label: 'Erros FCC', 
      icon: <AlertCircle className="w-5 h-5" aria-hidden="true" />,
      badge: errors.length > 0 ? errors.length : undefined
    },
    { 
      id: 'estatisticas', 
      label: 'Métricas', 
      icon: <BarChart3 className="w-5 h-5" aria-hidden="true" /> 
    },
  ];

  return (
    <nav 
      aria-label="Navegação móvel inferior"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 pb-safe shadow-2xl"
    >
      <div className="grid grid-cols-5 h-14">
        {navItems.map(item => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center relative py-1 text-[10px] font-medium transition focus:outline-none ${
                isActive 
                  ? 'text-emerald-400 font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.badge !== undefined && (
                  <span className={`absolute -top-1.5 -right-2 text-[9px] px-1 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-200'
                  }`}>
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 tracking-tight truncate max-w-[56px]">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-1 w-6 h-0.5 bg-emerald-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
