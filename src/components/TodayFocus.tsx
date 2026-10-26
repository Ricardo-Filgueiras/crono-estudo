import React, { useState } from 'react';
import { useStudy, getTodayDateString, getWeekDays } from '../context/StudyContext';
import { StudyTimer, formatStudyDuration } from './StudyTimer';
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
  Lock, 
  AlertTriangle, 
  ExternalLink,
  Languages,
  ArrowDownToLine,
  ArrowUp,
  ArrowDown,
  CalendarDays,
  RotateCcw,
  FileEdit,
  CheckCheck,
  MoreHorizontal,
  Play,
  Eye
} from 'lucide-react';

export const TodayFocus: React.FC = () => {
  const { 
    topics, 
    markAsMastered, 
    quickCompleteTopic,
    reopenTopicForDate,
    rescheduleTopic, 
    scheduleForToday, 
    setSelectedTopicForModal,
    getTopicPedagogicalStatus,
    getTopicUnmetPrerequisites,
    schedulePedagogicalMission,
    englishHabits,
    toggleEnglishDone,
    toggleEnglishAtEnd,
    moveTopicOrder,
    activeTimerTarget,
    setActiveTimerTarget
  } = useStudy();

  const [sessionDuration, setSessionDuration] = useState<'micro' | 'curta' | 'media' | 'longa' | 'livre'>('media');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showCatalogDrawer, setShowCatalogDrawer] = useState(false);
  // Começa recolhido por padrão para economizar carga cognitiva na primeira tela
  const [showCompletedSection, setShowCompletedSection] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [autoStartTrigger, setAutoStartTrigger] = useState(0);
  const [peekListWhileRunning, setPeekListWhileRunning] = useState(false);
  
  const today = getTodayDateString();
  const [selectedDate, setSelectedDate] = useState<string>(today);

  // Dias da semana atual (Segunda a Domingo)
  const weekDays = getWeekDays(today);

  // Status do hábito de inglês para o dia selecionado
  const currentHabit = englishHabits[selectedDate] || { done: false, atEnd: false, minutesStudied: 0, secondsStudied: 0 };

  // Tópicos pendentes/ativos da data selecionada (exclui concluídos hoje e dominados) e respeita ordemFila
  const activeDateScheduledTopics = topics
    .filter(t => {
      if (t.status === 'Dominado') return false;
      if ((t.status === 'Teoria Concluída' || t.status === 'Em Exercícios') && t.dataEstudo === selectedDate) {
        return false;
      }
      if (selectedDate === today) {
        return t.agendadoPara === today || (t.agendadoPara && t.agendadoPara < today);
      }
      return t.agendadoPara === selectedDate;
    })
    .sort((a, b) => {
      const aOrder = a.ordemFila ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.ordemFila ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });

  const activeTopicIds = activeDateScheduledTopics.map(t => t.id);

  // Tópicos concluídos na data selecionada
  const completedDateTopics = topics.filter(t => {
    return (
      t.dataEstudo === selectedDate &&
      (t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios')
    );
  });

  const totalPendingCount = activeDateScheduledTopics.length + (!currentHabit.done ? 1 : 0);
  const totalCompletedCount = completedDateTopics.length + (currentHabit.done ? 1 : 0);

  // Tempo total estudado no dia selecionado (Inglês + Tópicos do dia)
  const totalSecondsToday =
    (currentHabit.secondsStudied !== undefined ? currentHabit.secondsStudied : (currentHabit.minutesStudied || 0) * 60) +
    topics
      .filter(t => t.dataEstudo === selectedDate || t.agendadoPara === selectedDate)
      .reduce((acc, t) => acc + (t.tempoEstudadoSegundos !== undefined ? t.tempoEstudadoSegundos : (t.tempoEstudadoMinutos || 0) * 60), 0);

  // Modo Imersão Anti-Distração: esconde o restante da lista enquanto o timer está rodando
  const isImmersiveFocusActive = isTimerRunning && !!activeTimerTarget && !peekListWhileRunning;

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

  const handleStartFocusOnEnglish = () => {
    setPeekListWhileRunning(false);
    setActiveTimerTarget({
      type: 'english',
      id: `english-${selectedDate}`,
      title: 'Prática de Inglês (Listening & Vocabulário Técnico)',
      dateStr: selectedDate,
      estimatedMinutes: 15
    });
    setAutoStartTrigger(prev => prev + 1);
  };

  const handleStartFocusOnTopic = (topicId: string, title: string, estimatedMinutes?: number) => {
    setPeekListWhileRunning(false);
    setActiveTimerTarget({
      type: 'topic',
      id: topicId,
      title,
      dateStr: selectedDate,
      estimatedMinutes: estimatedMinutes || 25
    });
    setAutoStartTrigger(prev => prev + 1);
  };

  const isEnglishTimerActive = activeTimerTarget?.type === 'english' && activeTimerTarget?.dateStr === selectedDate;
  const englishDurationLabel = formatStudyDuration(currentHabit.secondsStudied, currentHabit.minutesStudied);
  const hasEnglishStudiedTime = (currentHabit.secondsStudied || 0) > 0 || (currentHabit.minutesStudied || 0) > 0;

  // Card Limpo do Hábito de Inglês (Apenas 2 botões primários: Focar + Concluir, e menu '...')
  const renderEnglishCard = () => {
    if (isImmersiveFocusActive && !isEnglishTimerActive) return null;

    return (
      <article
        key="daily-english-habit"
        className={`border rounded-2xl p-4 sm:p-5 transition shadow-sm ${
          isEnglishTimerActive
            ? 'bg-slate-900 border-emerald-500/60 ring-1 ring-emerald-500/20'
            : 'bg-slate-900/80 border-slate-800/90 hover:border-slate-700'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Subtle metadata + Strong Title */}
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/70 font-medium">
                <Languages className="w-3 h-3 text-indigo-400" aria-hidden="true" />
                <span>Hábito Diário • 15m</span>
              </span>

              {hasEnglishStudiedTime && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 font-mono">
                  <Clock className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                  <span>{englishDurationLabel} estudados</span>
                </span>
              )}

              {currentHabit.atEnd && (
                <span className="text-slate-500">• No fim da fila</span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Prática de Inglês (Listening & Vocabulário Técnico)
            </h3>

            <p className="text-xs text-slate-400 line-clamp-1">
              Leitura de documentação técnica, podcast ou vocabulário para concurso e TI.
            </p>
          </div>

          {/* Right: Clean 2-Button Action Bar + '...' Menu */}
          <div className="flex items-center gap-2 self-end sm:self-center relative">
            {/* Botão 1: Focar */}
            <button
              onClick={handleStartFocusOnEnglish}
              aria-label="Iniciar foco de 15 minutos em Inglês"
              className={`text-xs px-3.5 py-2 rounded-xl border font-semibold transition flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                isEnglishTimerActive
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
              }`}
            >
              <Play className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>{isEnglishTimerActive && isTimerRunning ? 'Em Foco' : 'Focar'}</span>
            </button>

            {/* Botão 2: Concluir em 1-Clique (Zero Pop-up) */}
            <button
              onClick={() => {
                toggleEnglishDone(selectedDate);
                if (isEnglishTimerActive) {
                  setActiveTimerTarget(null);
                  setIsTimerRunning(false);
                }
              }}
              aria-label="Marcar hábito de inglês como concluído hoje"
              className="text-xs font-semibold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Concluir com 1 clique e mover para Concluídos de Hoje"
            >
              <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Concluir</span>
            </button>

            {/* Menu Secundário '...' */}
            <div className="relative">
              <button
                onClick={() => setOpenMenuId(openMenuId === 'english' ? null : 'english')}
                aria-label="Mais opções para o hábito de inglês"
                className="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              >
                <MoreHorizontal className="w-4 h-4" aria-hidden="true" />
              </button>

              {openMenuId === 'english' && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-30 text-xs">
                  <button
                    onClick={() => {
                      toggleEnglishAtEnd(selectedDate);
                      setOpenMenuId(null);
                    }}
                    className="w-full px-3.5 py-2 text-left text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                    <span>{currentHabit.atEnd ? 'Mover para o topo' : 'Adiar p/ o fim do dia'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      
      {/* Header Bar Minimalista */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Foco de Hoje
            </h2>

            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {totalPendingCount === 0
                ? '🎉 Tudo concluído hoje!'
                : `Faltam ${totalPendingCount} ${totalPendingCount === 1 ? 'item' : 'itens'}`}
            </span>

            {totalSecondsToday > 0 && (
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                ⏱️ {formatStudyDuration(totalSecondsToday)} hoje
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Escolha um item para iniciar o bloco Pomodoro ou marque como concluído com 1 clique.
          </p>
        </div>

        {!isImmersiveFocusActive && (
          <button
            onClick={() => setIsPrintModalOpen(true)}
            className="self-start sm:self-auto flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-medium transition"
            title="Imprimir ou gerar PDF do cronograma semanal"
          >
            <Printer className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>Imprimir Semana</span>
          </button>
        )}
      </div>

      {/* Focus Timer Bar (Global, Regressive Pomodoro + Break + Fullscreen + Reset) */}
      <StudyTimer
        onRunningChange={running => {
          setIsTimerRunning(running);
          if (!running) setPeekListWhileRunning(false);
        }}
        autoStartTrigger={autoStartTrigger}
      />

      {/* Aviso Suave de Modo Imersão Anti-Distração */}
      {isImmersiveFocusActive && (
        <div className="flex items-center justify-between bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-2.5 text-xs text-slate-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Modo Imersão ativo: os demais itens foram ocultados para evitar distrações.</span>
          </span>
          <button
            onClick={() => setPeekListWhileRunning(true)}
            className="text-slate-400 hover:text-white underline flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Espiar lista ({totalPendingCount})</span>
          </button>
        </div>
      )}

      {/* Navegador dos Dias da Semana Atual (Oculto durante o foco ativo para reduzir ruído visual) */}
      {!isImmersiveFocusActive && (
        <section aria-label="Navegador dos dias da semana atual" className="bg-slate-900/70 border border-slate-800/70 rounded-2xl p-3 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <CalendarDays className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Semana Atual</span>
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

          <div className="grid grid-cols-7 gap-1 sm:gap-2" role="group" aria-label="Seletor de dias da semana">
            {weekDays.map(day => {
              const isSelected = selectedDate === day.dateStr;
              const pendingTopicsForDay = topics.filter(t => {
                if (t.status === 'Dominado') return false;
                if ((t.status === 'Teoria Concluída' || t.status === 'Em Exercícios') && t.dataEstudo === day.dateStr) return false;
                return day.isToday
                  ? (t.agendadoPara === day.dateStr || (t.agendadoPara && t.agendadoPara < day.dateStr))
                  : t.agendadoPara === day.dateStr;
              }).length;

              const completedTopicsForDay = topics.filter(
                t => t.dataEstudo === day.dateStr && (t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios')
              ).length + (englishHabits[day.dateStr]?.done ? 1 : 0);

              return (
                <button
                  key={day.dateStr}
                  onClick={() => setSelectedDate(day.dateStr)}
                  aria-pressed={isSelected}
                  className={`flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300'
                      : day.isToday
                      ? 'bg-slate-800/80 border-slate-700 text-white hover:border-slate-600'
                      : 'bg-slate-950/50 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    {day.dayName}
                  </span>

                  <span className={`text-xs sm:text-sm font-bold my-0.5 ${
                    isSelected ? 'text-emerald-300' : 'text-slate-200'
                  }`}>
                    {day.dayNumber}
                  </span>

                  <div className="flex items-center gap-1">
                    {pendingTopicsForDay > 0 && (
                      <span className="text-[9px] px-1.5 rounded-full font-semibold bg-slate-800 text-slate-300">
                        {pendingTopicsForDay}
                      </span>
                    )}
                    {completedTopicsForDay > 0 && (
                      <span className="text-[9px] px-1 rounded-full font-semibold bg-emerald-500/20 text-emerald-300">
                        ✓{completedTopicsForDay}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Fila Ativa de Hoje (Enxuta e Focada) */}
      <section aria-label="Para Estudar Hoje" className="space-y-3">
        
        {/* Item 1: Bloco Fixo de Inglês (No topo se não concluído e não adiado p/ fim) */}
        {!currentHabit.done && !currentHabit.atEnd && renderEnglishCard()}

        {/* Tópicos Regulares Pendentes */}
        {activeDateScheduledTopics.length === 0 && !isImmersiveFocusActive ? (
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-center space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-white">
                {completedDateTopics.length > 0
                  ? `🎉 Meta cumprida! Você concluiu ${completedDateTopics.length} tópico(s) hoje.`
                  : 'Sua fila de matérias regulares de hoje está vazia'}
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Puxe de 2 a 3 tópicos recomendados de acordo com o seu tempo disponível agora:
              </p>
            </div>

            <div className="grid grid-cols-5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs w-full max-w-md mx-auto" role="group" aria-label="Tempo disponível para estudo">
              {(
                [
                  { id: 'micro', label: '20m' },
                  { id: 'curta', label: '40m' },
                  { id: 'media', label: '1h' },
                  { id: 'longa', label: '2h' },
                  { id: 'livre', label: 'Livre' },
                ] as const
              ).map(d => (
                <button
                  key={d.id}
                  onClick={() => setSessionDuration(d.id)}
                  aria-pressed={sessionDuration === d.id}
                  className={`px-2 py-1.5 rounded-lg transition text-center ${
                    sessionDuration === d.id ? 'bg-emerald-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div>
              <button
                onClick={handlePedagogicalPlan}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-700/20 transition inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Sugerir Próximos Tópicos</span>
              </button>
            </div>
          </div>
        ) : (
          activeDateScheduledTopics.map((topic, index) => {
            const isSelectedForTimer = activeTimerTarget?.type === 'topic' && activeTimerTarget?.id === topic.id;
            // Se estiver no Modo Imersão Anti-Distração, esconde todos os cards exceto o que está em foco!
            if (isImmersiveFocusActive && !isSelectedForTimer) return null;

            const pedStatus = getTopicPedagogicalStatus(topic);
            const unmetPrereqs = getTopicUnmetPrerequisites(topic);
            const isBlocked = pedStatus === 'Bloqueado';

            const isFirst = index === 0;
            const isLast = index === activeDateScheduledTopics.length - 1;

            const hasStudiedTime = (topic.tempoEstudadoSegundos || 0) > 0 || (topic.tempoEstudadoMinutos || 0) > 0;
            const studiedLabel = formatStudyDuration(topic.tempoEstudadoSegundos, topic.tempoEstudadoMinutos);
            const isMenuOpen = openMenuId === topic.id;

            return (
              <article
                key={topic.id}
                className={`border rounded-2xl p-4 sm:p-5 transition shadow-sm space-y-3 ${
                  isSelectedForTimer
                    ? 'bg-slate-900 border-emerald-500/60 ring-1 ring-emerald-500/20'
                    : 'bg-slate-900/80 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Reorder Arrows + Subtle Tags + Prominent Topic Title */}
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    {/* Discrete 1-click Reorder Controls */}
                    <div className="flex flex-col items-center gap-0.5 pt-0.5 flex-shrink-0">
                      <button
                        onClick={() => moveTopicOrder(topic.id, 'up', activeTopicIds)}
                        disabled={isFirst}
                        aria-label={`Mover ${topic.microtopico} para cima`}
                        className={`p-1 rounded hover:bg-slate-800 transition ${
                          isFirst ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Subir na ordem de estudo"
                      >
                        <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>

                      <button
                        onClick={() => moveTopicOrder(topic.id, 'down', activeTopicIds)}
                        disabled={isLast}
                        aria-label={`Mover ${topic.microtopico} para baixo`}
                        className={`p-1 rounded hover:bg-slate-800 transition ${
                          isLast ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-white'
                        }`}
                        title="Descer na ordem de estudo"
                      >
                        <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                      <span className="font-medium text-slate-300">{topic.disciplina}</span>

                      {topic.origem && topic.origem.length > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/60">
                          {topic.origem.join(' + ')}
                        </span>
                      )}

                      {hasStudiedTime && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 font-mono">
                          <Clock className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                          <span>{studiedLabel} estudados</span>
                        </span>
                      )}

                      {isBlocked && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/25">
                          <Lock className="w-3 h-3" aria-hidden="true" />
                          <span>Requer base</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {topic.microtopico}
                    </h3>

                    {topic.anotacoes && (
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {topic.anotacoes}
                      </p>
                    )}

                    {topic.linkMaterial && (
                      <div className="pt-0.5">
                        <a
                          href={topic.linkMaterial}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition"
                        >
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          <span>Abrir material de apoio</span>
                        </a>
                      </div>
                    )}
                    </div>
                  </div>

                  {/* Right: Only 2 Primary Buttons (Focar + Concluir) & '...' Menu */}
                  <div className="flex items-center gap-2 self-end sm:self-center relative">
                    {/* Botão 1: Focar */}
                    <button
                      onClick={() => handleStartFocusOnTopic(topic.id, topic.microtopico, topic.tempoEstimadoMinutos)}
                      aria-label={`Iniciar foco no tópico ${topic.microtopico}`}
                      className={`text-xs px-3.5 py-2 rounded-xl border font-semibold transition flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isSelectedForTimer
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>{isSelectedForTimer && isTimerRunning ? 'Em Foco' : 'Focar'}</span>
                    </button>

                    {/* Botão 2: Concluir em 1-Clique (Sem Pop-up!) */}
                    <button
                      onClick={() => {
                        quickCompleteTopic(topic.id, selectedDate);
                        if (isSelectedForTimer) {
                          setActiveTimerTarget(null);
                          setIsTimerRunning(false);
                        }
                      }}
                      aria-label={`Marcar tópico ${topic.microtopico} como concluído hoje`}
                      className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3.5 py-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex items-center gap-1.5 shadow-sm"
                      title="Concluir com 1 clique e mover para Concluídos de Hoje"
                    >
                      <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Concluir</span>
                    </button>

                    {/* Menu de Três Pontos (...) para ações secundárias */}
                    <div className="relative">
                      <button
                        onClick={() => setOpenMenuId(isMenuOpen ? null : topic.id)}
                        aria-label={`Mais opções para ${topic.microtopico}`}
                        className="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
                      >
                        <MoreHorizontal className="w-4 h-4" aria-hidden="true" />
                      </button>

                      {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-30 text-xs divide-y divide-slate-800">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                rescheduleTopic(topic.id, 1);
                                setOpenMenuId(null);
                              }}
                              className="w-full px-3.5 py-2 text-left text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                            >
                              <FastForward className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                              <span>Adiar para amanhã</span>
                            </button>

                            <button
                              onClick={() => {
                                markAsMastered(topic.id, selectedDate);
                                if (isSelectedForTimer) setActiveTimerTarget(null);
                                setOpenMenuId(null);
                              }}
                              className="w-full px-3.5 py-2 text-left text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                            >
                              <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                              <span>Marcar como Dominado</span>
                            </button>

                            <button
                              onClick={() => {
                                setSelectedTopicForModal(topic);
                                setOpenMenuId(null);
                              }}
                              className="w-full px-3.5 py-2 text-left text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                            >
                              <FileEdit className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                              <span>Anotações e Detalhes</span>
                            </button>
                          </div>

                          <div className="py-1">
                            <button
                              disabled={isFirst}
                              onClick={() => {
                                moveTopicOrder(topic.id, 'up', activeTopicIds);
                                setOpenMenuId(null);
                              }}
                              className={`w-full px-3.5 py-2 text-left flex items-center gap-2 ${
                                isFirst ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Subir na fila de hoje</span>
                            </button>

                            <button
                              disabled={isLast}
                              onClick={() => {
                                moveTopicOrder(topic.id, 'down', activeTopicIds);
                                setOpenMenuId(null);
                              }}
                              className={`w-full px-3.5 py-2 text-left flex items-center gap-2 ${
                                isLast ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-800'
                              }`}
                            >
                              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Descer na fila de hoje</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Alerta enxuto de pré-requisito caso bloqueado */}
                {isBlocked && unmetPrereqs.length > 0 && (
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-2.5 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
                      <span>Pré-requisito sugerido antes: <strong>{unmetPrereqs[0].microtopico}</strong></span>
                    </div>
                    <button
                      onClick={() => scheduleForToday(unmetPrereqs[0].id)}
                      className="text-[11px] text-amber-300 hover:text-white bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/30 transition flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" aria-hidden="true" />
                      <span>Adicionar à fila</span>
                    </button>
                  </div>
                )}

              </article>
            );
          })
        )}

        {/* Item 1: Bloco Fixo de Inglês (No fim da fila se adiado e não concluído) */}
        {!currentHabit.done && currentHabit.atEnd && renderEnglishCard()}

      </section>

      {/* Seção Recolhível: Concluídos de Hoje (Oculta durante foco ativo; recolhida por padrão) */}
      {!isImmersiveFocusActive && (
        <section aria-label="Tarefas e Itens Concluídos de Hoje" className="pt-1">
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowCompletedSection(!showCompletedSection)}
              aria-expanded={showCompletedSection}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-800/30 transition focus:outline-none"
            >
              <div className="flex items-center gap-2.5">
                <CheckCheck className={`w-4 h-4 ${totalCompletedCount > 0 ? 'text-emerald-400' : 'text-slate-500'}`} aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  Concluídos Hoje ({totalCompletedCount})
                </span>
                {totalSecondsToday > 0 && (
                  <span className="text-[11px] font-mono text-slate-400">
                    • ⏱️ {formatStudyDuration(totalSecondsToday)} acumulados
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <span>{showCompletedSection ? 'Ocultar' : 'Mostrar'}</span>
                {showCompletedSection ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                )}
              </div>
            </button>

            {showCompletedSection && (
              <div className="p-4 border-t border-slate-800/70 space-y-2 bg-slate-950/30">
                {totalCompletedCount === 0 ? (
                  <p className="text-center py-2 text-xs text-slate-500">
                    Nenhum item concluído ainda hoje.
                  </p>
                ) : (
                  <>
                    {/* Hábito de Inglês Concluído */}
                    {currentHabit.done && (
                      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2 min-w-0">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                          <span className="text-xs sm:text-sm text-slate-300 line-through decoration-slate-600 truncate">
                            Prática de Inglês (Listening & Vocabulário Técnico)
                          </span>
                          {hasEnglishStudiedTime && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800">
                              ⏱️ {englishDurationLabel}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => toggleEnglishDone(selectedDate)}
                          className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 transition flex items-center gap-1 flex-shrink-0"
                          title="Desfazer e voltar para a lista de hoje"
                        >
                          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Desfazer</span>
                        </button>
                      </div>
                    )}

                    {/* Tópicos Regulares Concluídos no Dia */}
                    {completedDateTopics.map(topic => {
                      const hasTime = (topic.tempoEstudadoSegundos || 0) > 0 || (topic.tempoEstudadoMinutos || 0) > 0;
                      const durationStr = formatStudyDuration(topic.tempoEstudadoSegundos, topic.tempoEstudadoMinutos);

                      return (
                        <div
                          key={topic.id}
                          className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-3"
                        >
                          <div className="flex flex-wrap items-center gap-2 min-w-0">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                            <span className="text-xs sm:text-sm text-slate-300 line-through decoration-slate-600 truncate">
                              {topic.microtopico}
                            </span>
                            <span className="text-[11px] text-slate-500">({topic.disciplina})</span>
                            {hasTime && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800">
                                ⏱️ {durationStr}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <button
                              onClick={() => setSelectedTopicForModal(topic)}
                              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800 transition"
                              title="Adicionar ou ver anotações"
                            >
                              Notas
                            </button>
                            <button
                              onClick={() => reopenTopicForDate(topic.id, selectedDate)}
                              className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 transition flex items-center gap-1"
                              title="Desfazer e devolver para a fila de hoje"
                            >
                              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Desfazer</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gaveta discreta para adicionar tópico manualmente */}
      {!isImmersiveFocusActive && (
        <div className="pt-1">
          <button
            onClick={() => setShowCatalogDrawer(!showCatalogDrawer)}
            aria-expanded={showCatalogDrawer}
            aria-controls="catalog-drawer-section"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 rounded-lg p-1.5 transition mx-auto"
          >
            {showCatalogDrawer ? <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /> : <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
            <span>{showCatalogDrawer ? 'Recolher sugestões' : '+ Adicionar mais um item para hoje'}</span>
          </button>

          {showCatalogDrawer && (
            <section id="catalog-drawer-section" aria-label="Tópicos disponíveis para adicionar" className="mt-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pendingPortuguese.slice(0, 2).concat(pendingMath.slice(0, 2)).map(t => (
                  <div key={t.id} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="line-clamp-1 pr-2">
                      <span className="text-[10px] text-slate-500 block">{t.disciplina}</span>
                      <span className="text-slate-200 font-medium">{t.microtopico}</span>
                    </div>
                    <button
                      onClick={() => scheduleForToday(t.id)}
                      className="p-1.5 bg-slate-800 hover:bg-emerald-600 rounded-lg text-slate-200 hover:text-white transition"
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
      )}

      {/* Printable Weekly Modal */}
      <WeeklyPrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

    </div>
  );
};
