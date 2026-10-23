import React, { useEffect } from 'react';
import { useStudy, getTodayDateString, addDaysToDate } from '../context/StudyContext';
import { Printer, X, Calendar } from 'lucide-react';

interface WeeklyPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeeklyPrintModal: React.FC<WeeklyPrintModalProps> = ({ isOpen, onClose }) => {
  const { topics } = useStudy();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const today = getTodayDateString();
  const daysOfWeek = [
    { label: 'Segunda-feira', offset: 0 },
    { label: 'Terça-feira', offset: 1 },
    { label: 'Quarta-feira', offset: 2 },
    { label: 'Quinta-feira', offset: 3 },
    { label: 'Sexta-feira', offset: 4 },
    { label: 'Sábado', offset: 5 },
    { label: 'Domingo (Revisão & Planejamento)', offset: 6 },
  ];

  // Distribute pending topics across the week (prioritizing base + specifics)
  const pending = topics.filter(t => t.status === 'Pendente');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static print:inset-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="weekly-print-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl print:border-none print:shadow-none print:w-full print:max-w-none print:max-h-none print:bg-white print:text-black">
        
        {/* Header - Hidden on print */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400" aria-hidden="true">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 id="weekly-print-title" className="text-base font-bold text-white">Cronograma Semanal para Impressão</h2>
              <p className="text-xs text-slate-300">Pronto para imprimir e colar no seu mural ou mesa de estudos</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Imprimir cronograma ou salvar em PDF"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>Imprimir / Salvar em PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar janela de cronograma semanal"
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 overflow-y-auto space-y-5 print:p-8 print:m-0 print:overflow-visible">
          
          {/* Printable Document Title */}
          <div className="border-b-2 border-slate-700 pb-3 print:border-black flex justify-between items-end">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white print:text-black uppercase tracking-tight">
                Planejador Semanal de Estudos
              </h1>
              <p className="text-xs text-slate-300 print:text-gray-700 font-medium">
                Semana iniciada em: {today} • Foco & Carga Cognitiva Equilibrada
              </p>
            </div>
            <div className="text-right text-[11px] text-slate-300 print:text-gray-700">
              <span className="font-semibold text-emerald-400 print:text-black">Micro-hábito diário: </span>
              15m Inglês + 20m Leitura
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 print:grid-cols-2 print:gap-3">
            {daysOfWeek.map((day, idx) => {
              const dayDate = addDaysToDate(today, day.offset);
              // Pick 1 or 2 pending topics for each day
              const dayTopic1 = pending[idx * 2];
              const dayTopic2 = pending[idx * 2 + 1];

              return (
                <div
                  key={day.label}
                  className="border border-slate-800 print:border-gray-400 rounded-xl p-3.5 bg-slate-950/40 print:bg-white text-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 print:border-gray-300 pb-1.5 font-bold">
                    <span className="text-emerald-400 print:text-black uppercase text-[11px] tracking-wider">
                      {day.label}
                    </span>
                    <span className="text-slate-400 print:text-gray-500 font-mono text-[10px]">
                      {dayDate}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {/* Habit checkbox */}
                    <div className="flex items-start gap-2 text-slate-200 print:text-black">
                      <div className="w-4 h-4 border border-slate-600 print:border-black rounded mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <span className="font-semibold">[Hábito Diário]</span> 15 min de Inglês
                      </div>
                    </div>

                    {/* Topic 1 */}
                    {dayTopic1 && (
                      <div className="flex items-start gap-2 text-slate-200 print:text-black">
                        <div className="w-4 h-4 border border-slate-600 print:border-black rounded mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-sky-400 print:text-black">[{dayTopic1.disciplina}]</span>{' '}
                          {dayTopic1.microtopico}
                        </div>
                      </div>
                    )}

                    {/* Topic 2 */}
                    {dayTopic2 && (
                      <div className="flex items-start gap-2 text-slate-200 print:text-black">
                        <div className="w-4 h-4 border border-slate-600 print:border-black rounded mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-semibold text-amber-400 print:text-black">[{dayTopic2.disciplina}]</span>{' '}
                          {dayTopic2.microtopico}
                        </div>
                      </div>
                    )}

                    {/* Blank line for hand-written notes */}
                    <div className="pt-2 border-t border-dashed border-slate-800 print:border-gray-300 flex items-center justify-between text-[10px] text-slate-400 print:text-gray-500">
                      <span>Tempo Real: _______ min</span>
                      <span>Acertos: ______ %</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Notes Section */}
          <div className="border border-slate-800 print:border-gray-400 rounded-xl p-3 bg-slate-950/20 print:bg-white text-xs">
            <span className="font-bold text-slate-200 print:text-black uppercase text-[10px] tracking-wider block mb-1">
              Anotações da Semana & Lições Aprendidas (FCC / Teoria):
            </span>
            <div className="h-16 border-b border-dashed border-slate-800 print:border-gray-300"></div>
          </div>

        </div>

      </div>
    </div>
  );
};
