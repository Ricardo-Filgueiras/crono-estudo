import React, { useState } from 'react';
import { useStudy, getTodayDateString } from '../context/StudyContext';
import { StudyTimer } from './StudyTimer';
import { WeeklyPrintModal } from './WeeklyPrintModal';
import { 
  CheckCircle, 
  Clock, 
  FastForward, 
  Award, 
  Printer, 
  Sparkles, 
  ChevronDown,
  ChevronUp,
  Plus,
  BookmarkCheck,
  Lock,
  Unlock,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';

export const TodayFocus: React.FC = () => {
  const { 
    topics, 
    markAsMastered, 
    rescheduleTopic, 
    scheduleForToday, 
    setSelectedTopicForModal,
    getTopicPedagogicalStatus,
    getTopicUnmetPrerequisites,
    schedulePedagogicalMission
  } = useStudy();

  const [activeTimerTopic, setActiveTimerTopic] = useState<string | undefined>(undefined);
  const [sessionDuration, setSessionDuration] = useState<'micro' | 'curta' | 'media' | 'longa' | 'livre'>('media');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showCatalogDrawer, setShowCatalogDrawer] = useState(false);
  const today = getTodayDateString();

  // Topics explicitly scheduled for today or past days that weren't completed yet
  const todayScheduledTopics = topics.filter(t => {
    if (t.status === 'Dominado') return false;
    return t.agendadoPara === today || (t.agendadoPara && t.agendadoPara < today);
  });

  const pendingPortuguese = topics.filter(t => t.disciplina === 'Língua Portuguesa' && t.status === 'Pendente');
  const pendingMath = topics.filter(t => (t.disciplina.includes('Raciocínio Lógico') || t.disciplina.includes('Matemática')) && t.status === 'Pendente');

  const handlePedagogicalPlan = () => {
    const minutesMap = {
      micro: 20,
      curta: 40,
      media: 60,
      longa: 120,
      livre: 0
    };
    schedulePedagogicalMission(minutesMap[sessionDuration]);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Clean, Minimalist Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 pb-1 border-b border-slate-800/60">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Foco de Hoje
          </h2>
          <p className="text-xs text-slate-300">
            Ordem orientada por pré-requisitos conceituais • Sem sobrecarga mental
          </p>
        </div>

        {/* Action: Print Weekly Planner */}
        <button
          onClick={() => setIsPrintModalOpen(true)}
          className="self-start sm:self-auto flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition shadow-sm"
          title="Imprimir ou gerar PDF do cronograma semanal para ter no papel"
          aria-label="Abrir janela de impressão do cronograma semanal"
        >
          <Printer className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          <span>Imprimir Cronograma Semanal</span>
        </button>
      </div>

      {/* Focus Timer Bar (Minimal & Clean) */}
      <StudyTimer currentTopicTitle={activeTimerTopic} />

      {/* Today's Mission Cards */}
      <section aria-label="Missão e Tópicos de Hoje" className="space-y-3">
        {todayScheduledTopics.length === 0 ? (
          /* Clean Empty State with Pedagogical Setup */
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                Nenhum tópico na fila ativa de hoje
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                O motor pedagógico seleciona conteúdos disponíveis cujos pré-requisitos já foram dominados:
              </p>
            </div>

            {/* Clean time pill selector */}
            <div className="grid grid-cols-5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs w-full max-w-md mx-auto" role="group" aria-label="Tempo disponível para estudo">
              {(
                [
                  { id: 'micro', label: '15-20m' },
                  { id: 'curta', label: '30-45m' },
                  { id: 'media', label: '1h' },
                  { id: 'longa', label: '2h+' },
                  { id: 'livre', label: 'Livre' },
                ] as const
              ).map(d => (
                <button
                  key={d.id}
                  onClick={() => setSessionDuration(d.id)}
                  aria-pressed={sessionDuration === d.id}
                  className={`px-1.5 sm:px-3 py-2 rounded-lg transition text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    sessionDuration === d.id ? 'bg-emerald-600 text-white font-medium' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div>
              <button
                onClick={handlePedagogicalPlan}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition inline-flex items-center gap-2"
                aria-label="Puxar missão de estudo orientada por dependências conceituais"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Puxar Missão Inteligente (Base → Topo)</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Scheduled Topics */
          todayScheduledTopics.map(topic => {
            const isOverdue = topic.agendadoPara && topic.agendadoPara < today;
            const isSelectedForTimer = activeTimerTopic === topic.microtopico;
            const isSharedMBA = topic.origem && topic.origem.includes('MBA') && topic.origem.includes('Concurso');
            
            const pedStatus = getTopicPedagogicalStatus(topic);
            const unmetPrereqs = getTopicUnmetPrerequisites(topic);
            const isBlocked = pedStatus === 'Bloqueado';

            return (
              <article
                key={topic.id}
                className={`bg-slate-900/90 border rounded-2xl p-4 sm:p-5 transition shadow-sm space-y-3 ${
                  isSelectedForTimer
                    ? 'border-emerald-500 ring-1 ring-emerald-500/20 bg-slate-900'
                    : isBlocked
                    ? 'border-amber-500/40 bg-amber-950/10'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Left: Topic Title & Badges */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      
                      {/* Origin Tags */}
                      {topic.origem && topic.origem.map(tag => (
                        <span
                          key={tag}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            tag === 'MBA'
                              ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                              : tag === 'Matemática Base'
                              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                              : tag === 'Português Base'
                              ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                              : tag === 'Leitura / Livro'
                              ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}

                      {isSharedMBA && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <BookmarkCheck className="w-3 h-3" aria-hidden="true" />
                          <span>Sinergia Dupla</span>
                        </span>
                      )}

                      <span className="text-[11px] text-slate-300 ml-1">{topic.disciplina}</span>

                      {/* Pedagogical Status Badge */}
                      {isBlocked ? (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 font-semibold">
                          <Lock className="w-3 h-3" aria-hidden="true" />
                          <span>Bloqueado por Pré-requisito</span>
                        </span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 flex items-center gap-1 font-medium">
                          <Unlock className="w-3 h-3" aria-hidden="true" />
                          <span>Disponível (Base Segura)</span>
                        </span>
                      )}

                      {isOverdue && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400">
                          Reagendado
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {topic.microtopico}
                    </h3>

                    {topic.anotacoes && (
                      <p className="text-xs text-slate-300 font-mono line-clamp-1">
                        {topic.anotacoes}
                      </p>
                    )}
                  </div>

                  {/* Right: Action Buttons (Responsive Grid on Mobile) */}
                  <div className="grid grid-cols-4 gap-1.5 pt-2 sm:pt-0 sm:flex sm:items-center sm:gap-1.5 w-full sm:w-auto border-t sm:border-t-0 border-slate-800/80">
                    <button
                      onClick={() => setActiveTimerTopic(topic.microtopico)}
                      aria-label={`Vincular tópico ${topic.microtopico} ao cronômetro de foco`}
                      className={`text-xs px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg border font-medium transition flex flex-col sm:flex-row items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isSelectedForTimer
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-slate-800 text-slate-200 border-slate-700 hover:text-white'
                      }`}
                      title="Vincular ao Cronômetro"
                    >
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">Focar</span>
                    </button>

                    <button
                      onClick={() => markAsMastered(topic.id)}
                      aria-label={`Marcar tópico ${topic.microtopico} como já dominado`}
                      className="text-xs bg-slate-800 hover:bg-amber-500/20 text-slate-200 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                      title="Marcar como já dominado"
                    >
                      <Award className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">Dominado</span>
                    </button>

                    <button
                      onClick={() => rescheduleTopic(topic.id, 1)}
                      aria-label={`Adiar tópico ${topic.microtopico} para amanhã`}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                      title="Adiar para amanhã sem culpa"
                    >
                      <FastForward className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">Adiar</span>
                    </button>

                    <button
                      onClick={() => setSelectedTopicForModal(topic)}
                      aria-label={`Concluir tópico ${topic.microtopico} e editar registro`}
                      className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex flex-col sm:flex-row items-center justify-center gap-1 shadow-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">Concluir</span>
                    </button>
                  </div>

                </div>

                {/* Pedagogical Explanation Callout */}
                {topic.justificativaRecomendacao && (
                  <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-2.5 text-xs text-emerald-200 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-emerald-300">Por que estudar agora: </span>
                      {topic.justificativaRecomendacao}
                    </div>
                  </div>
                )}

                {/* Unmet Prerequisites Diagnostic Alert */}
                {isBlocked && unmetPrereqs.length > 0 && (
                  <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200 space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-amber-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                      <span>Atenção pedagógica: Conhecimentos fundamentais pendentes</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Para evitar frustração e assimilar com facilidade, recomendamos dominar primeiro os seguintes pré-requisitos:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {unmetPrereqs.map(p => (
                        <button
                          key={p.id}
                          onClick={() => scheduleForToday(p.id)}
                          className="bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-500/30 px-2.5 py-1 rounded-lg text-[11px] font-medium transition flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                          title="Clique para puxar este pré-requisito para o foco de hoje"
                        >
                          <Plus className="w-3 h-3 text-amber-300" aria-hidden="true" />
                          <span>Puxar base: {p.microtopico}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </article>
            );
          })
        )}
      </section>

      {/* Minimal Collapsible Drawer to Browse Catalog */}
      <div className="pt-2">
        <button
          onClick={() => setShowCatalogDrawer(!showCatalogDrawer)}
          aria-expanded={showCatalogDrawer}
          aria-controls="catalog-drawer-section"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1.5 transition mx-auto"
        >
          {showCatalogDrawer ? <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /> : <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
          <span>{showCatalogDrawer ? 'Recolher catálogo' : '+ Adicionar manualmente um tópico à fila de hoje'}</span>
        </button>

        {showCatalogDrawer && (
          <section id="catalog-drawer-section" aria-label="Tópicos disponíveis para adicionar" className="mt-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3 animate-fade-in">
            <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              Próximos tópicos disponíveis:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pendingPortuguese.slice(0, 2).concat(pendingMath.slice(0, 2)).map(t => (
                <div key={t.id} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="line-clamp-1 pr-2">
                    <span className="text-[10px] text-slate-400 block">{t.disciplina}</span>
                    <span className="text-slate-100 font-medium">{t.microtopico}</span>
                  </div>
                  <button
                    onClick={() => scheduleForToday(t.id)}
                    aria-label={`Adicionar tópico ${t.microtopico} à fila de hoje`}
                    className="p-1.5 bg-slate-800 hover:bg-emerald-600 rounded-lg text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                    title="Adicionar à fila de hoje"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Printable Weekly Modal */}
      <WeeklyPrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

    </div>
  );
};
