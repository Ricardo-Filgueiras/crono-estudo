import React from 'react';
import { useStudy, getTodayDateString } from '../context/StudyContext';
import { RotateCcw, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export const ReviewQueue: React.FC = () => {
  const { topics, completeRevision } = useStudy();
  const today = getTodayDateString();

  // Topics with revision date
  const reviewTopics = topics.filter(t => t.proximaRevisao && t.status !== 'Dominado');

  const overdueOrToday = reviewTopics.filter(t => t.proximaRevisao! <= today);
  const upcoming = reviewTopics.filter(t => t.proximaRevisao! > today);

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <section aria-labelledby="review-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20" aria-hidden="true">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <h2 id="review-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Revisão Espaçada Ativa (Curva do Esquecimento)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Rever anotações e pontos de dúvida em 5 minutos garante a fixação a longo prazo para a prova.
            </p>
          </div>
        </div>
      </section>

      {/* Due / Overdue section */}
      <section aria-labelledby="due-reviews-heading" className="space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <h3 id="due-reviews-heading" className="text-base font-bold text-white">
            Revisões Prontas para Hoje ({overdueOrToday.length})
          </h3>
        </div>

        {overdueOrToday.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800/80">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-80" aria-hidden="true" />
            <p className="text-sm text-slate-200 font-medium">Nenhuma revisão atrasada ou pendente para hoje!</p>
            <p className="text-xs text-slate-400 mt-1">Sua memória está em dia.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {overdueOrToday.map(topic => (
              <article
                key={topic.id}
                className="bg-slate-900 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between gap-3 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-amber-400">
                      {topic.disciplina}
                    </span>
                    <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 font-mono text-[10px]">
                      Venceu em: {topic.proximaRevisao}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2">
                    {topic.microtopico}
                  </h4>

                  {topic.anotacoes && (
                    <div className="text-xs bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-slate-300 font-mono">
                      <strong className="text-amber-400">Ponto chave: </strong>
                      {topic.anotacoes}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => completeRevision(topic.id, 15)}
                    aria-label={`Concluir revisão do tópico ${topic.microtopico} e agendar próxima em 15 dias`}
                    className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3.5 py-1.5 rounded-xl shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Revisado! (+15 dias)</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Upcoming reviews */}
      {upcoming.length > 0 && (
        <section aria-labelledby="upcoming-reviews-heading" className="space-y-3 pt-4">
          <h3 id="upcoming-reviews-heading" className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" aria-hidden="true" />
            Próximas Revisões Agendadas ({upcoming.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {upcoming.map(topic => (
              <article
                key={topic.id}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
                    <span>{topic.disciplina}</span>
                    <span className="font-mono text-emerald-400">{topic.proximaRevisao}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-100 line-clamp-2">
                    {topic.microtopico}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
