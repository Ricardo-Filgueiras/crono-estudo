import React, { useState } from 'react';
import { useStudy, getTodayDateString, getWeekDays } from '../context/StudyContext';
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
  AlertTriangle, 
  ExternalLink,
  Languages,
  ArrowDownToLine,
  ArrowUp,
  ArrowDown,
  CalendarDays
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
    schedulePedagogicalMission,
    englishHabits,
    toggleEnglishDone,
    toggleEnglishAtEnd,
    moveTopicOrder
  } = useStudy();

  const [activeTimerTopic, setActiveTimerTopic] = useState<string | undefined>(undefined);
  const [sessionDuration, setSessionDuration] = useState<'micro' | 'curta' | 'media' | 'longa' | 'livre'>('media');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showCatalogDrawer, setShowCatalogDrawer] = useState(false);
  
  const today = getTodayDateString();
  const [selectedDate, setSelectedDate] = useState<string>(today);

  // Dias da semana atual (Segunda a Domingo)
  const weekDays = getWeekDays(today);

  // Tópicos da data selecionada
  const activeDateScheduledTopics = topics.filter(t => {
    if (t.status === 'Dominado') return false;
    if (selectedDate === today) {
      return t.agendadoPara === today || (t.agendadoPara && t.agendadoPara < today);
    }
    return t.agendadoPara === selectedDate;
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

  // Status do hábito de inglês para o dia selecionado
  const currentHabit = englishHabits[selectedDate] || { done: false, atEnd: false };

  // Componente do Card de Inglês
  const renderEnglishCard = () => (
    <article
      key="daily-english-habit"
      className={`border rounded-2xl p-4 sm:p-5 transition shadow-sm space-y-3 ${
        currentHabit.done
          ? 'bg-emerald-950/20 border-emerald-500/40 ring-1 ring-emerald-500/30'
          : 'bg-gradient-to-r from-indigo-950/40 to-slate-900 border-indigo-500/30 hover:border-indigo-500/50'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Info */}
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
              <Languages className="w-3 h-3" aria-hidden="true" />
              <span>Micro-Hábito Diário</span>
            </span>

            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              15-20 min
            </span>

            {currentHabit.done ? (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                <span>Concluído Hoje!</span>
              </span>
            ) : currentHabit.atEnd ? (
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <ArrowDownToLine className="w-3 h-3" aria-hidden="true" />
                <span>Adiado p/ o final do dia</span>
              </span>
            ) : (
              <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/25">
                Item 1 Prioritário
              </span>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span>🇬🇧 Prática de Inglês (Listening & Vocabulário Técnico)</span>
          </h3>

          <p className="text-xs text-slate-300 font-mono">
            {currentHabit.done
              ? '✅ Excelente consistência diária mantida! Hábito concluído.'
              : '15 minutos de leitura de documentação técnica, podcast ou vocabulário para concurso e TI.'}
          </p>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 sm:pt-0 sm:flex sm:items-center sm:gap-2 w-full sm:w-auto border-t sm:border-t-0 border-slate-800/80">
          {/* Focar Timer */}
          <button
            onClick={() => setActiveTimerTopic('Hábito Diário: 15 min de Inglês')}
            aria-label="Vincular hábito de inglês ao cronômetro"
            className="text-xs px-2.5 py-2 sm:py-1.5 rounded-lg border font-medium bg-slate-800 text-slate-200 border-slate-700 hover:text-white transition flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Cronometrar 15 min de foco"
          >
            <Clock className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs">Focar</span>
          </button>

          {/* Adiar p/ Fim do Dia */}
          <button
            onClick={() => toggleEnglishAtEnd(selectedDate)}
            aria-label={currentHabit.atEnd ? 'Mover inglês de volta para o topo' : 'Adiar inglês para o final do dia'}
            className={`text-xs px-2.5 py-2 sm:py-1.5 rounded-lg border font-medium transition flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              currentHabit.atEnd
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title={currentHabit.atEnd ? 'Retornar ao início' : 'Adiar para o fim do dia'}
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs">{currentHabit.atEnd ? 'No Fim' : 'P/ Fim'}</span>
          </button>

          {/* Marcar OK */}
          <button
            onClick={() => toggleEnglishDone(selectedDate)}
            aria-label={currentHabit.done ? 'Desmarcar hábito de inglês' : 'Marcar hábito de inglês como concluído'}
            className={`text-xs font-semibold px-3 py-2 sm:py-1.5 rounded-lg transition flex items-center justify-center gap-1 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
              currentHabit.done
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-emerald-600/90 hover:bg-emerald-500 text-white'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs">{currentHabit.done ? 'OK Feito' : 'Marcar OK'}</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Header Bar */}
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

      {/* Focus Timer Bar */}
      <StudyTimer currentTopicTitle={activeTimerTopic} />

      {/* Navegador dos Dias da Semana Atual (Weekly Day Strip - Seta 2 da imagem) */}
      <section aria-label="Navegador dos dias da semana atual" className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-3 sm:p-4 space-y-2.5 shadow-md">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold text-slate-200">
            <CalendarDays className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Semana Atual:</span>
          </div>

          {selectedDate !== today && (
            <button
              onClick={() => setSelectedDate(today)}
              className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20 transition"
            >
              ← Voltar para Hoje
            </button>
          )}
        </div>

        {/* 7 Dias da Semana (Grid responsivo) */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2" role="group" aria-label="Seletor de dias da semana">
          {weekDays.map(day => {
            const isSelected = selectedDate === day.dateStr;
            const countForDay = topics.filter(t => t.status !== 'Dominado' && (day.isToday ? (t.agendadoPara === day.dateStr || (t.agendadoPara && t.agendadoPara < day.dateStr)) : t.agendadoPara === day.dateStr)).length;

            return (
              <button
                key={day.dateStr}
                onClick={() => setSelectedDate(day.dateStr)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center justify-center p-1.5 sm:p-2.5 rounded-xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-sm'
                    : day.isToday
                    ? 'bg-slate-800/90 border-slate-700 text-white hover:border-slate-600'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  {day.dayName}
                </span>

                <span className={`text-xs sm:text-sm font-extrabold my-0.5 ${
                  isSelected ? 'text-emerald-300' : 'text-slate-100'
                }`}>
                  {day.dayNumber}
                </span>

                <div className="flex items-center gap-1">
                  {day.isToday && (
                    <span className="text-[8px] font-bold px-1 py-0.2 rounded bg-emerald-500 text-slate-950 uppercase">
                      Hoje
                    </span>
                  )}
                  {countForDay > 0 && (
                    <span className={`text-[9px] px-1 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {countForDay}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Missão e Tópicos do Dia */}
      <section aria-label="Missão e Tópicos de Hoje" className="space-y-3">
        
        {/* Item 1: Bloco Fixo de Inglês (Renderizado no início se não foi adiado) */}
        {!currentHabit.atEnd && renderEnglishCard()}

        {/* Tópicos Regulares Agendados */}
        {activeDateScheduledTopics.length === 0 ? (
          /* Empty State */
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {selectedDate === today
                  ? 'Nenhum tópico regular na fila ativa de hoje'
                  : `Nenhum tópico agendado para ${selectedDate}`}
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                O motor pedagógico seleciona conteúdos disponíveis cujos pré-requisitos já foram dominados:
              </p>
            </div>

            {/* Time pill selector */}
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
          /* Active Scheduled Topics List with Reordering Controls */
          activeDateScheduledTopics.map((topic, index) => {
            const isOverdue = topic.agendadoPara && topic.agendadoPara < today;
            const isSelectedForTimer = activeTimerTopic === topic.microtopico;
            const isSharedMBA = topic.origem && topic.origem.includes('MBA') && topic.origem.includes('Concurso');
            
            const pedStatus = getTopicPedagogicalStatus(topic);
            const unmetPrereqs = getTopicUnmetPrerequisites(topic);
            const isBlocked = pedStatus === 'Bloqueado';

            const isFirst = index === 0;
            const isLast = index === activeDateScheduledTopics.length - 1;

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
                  
                  {/* Left: Reordering buttons & Topic Title */}
                  <div className="flex items-start gap-2.5 flex-1">
                    
                    {/* Reordering Up/Down Controls */}
                    <div className="flex flex-col items-center gap-0.5 pt-0.5">
                      <button
                        onClick={() => moveTopicOrder(topic.id, 'up')}
                        disabled={isFirst}
                        aria-label={`Mover ${topic.microtopico} para cima`}
                        className={`p-1 rounded hover:bg-slate-800 transition ${
                          isFirst ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Subir na ordem de estudo"
                      >
                        <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>

                      <button
                        onClick={() => moveTopicOrder(topic.id, 'down')}
                        disabled={isLast}
                        aria-label={`Mover ${topic.microtopico} para baixo`}
                        className={`p-1 rounded hover:bg-slate-800 transition ${
                          isLast ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Descer na ordem de estudo"
                      >
                        <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

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
                                : tag === 'Ciências da Natureza'
                                ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
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

                      {topic.linkMaterial && (
                        <div className="pt-0.5">
                          <a
                            href={topic.linkMaterial}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-1 rounded-lg border border-emerald-500/30 transition shadow-sm"
                          >
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            <span>Acessar Doc no Google Drive</span>
                          </a>
                        </div>
                      )}
                    </div>
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

        {/* Item 1: Bloco Fixo de Inglês (Renderizado no fim se o usuário clicou em 'Adiar p/ fim') */}
        {currentHabit.atEnd && renderEnglishCard()}

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
