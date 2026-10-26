import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Timer as TimerIcon, 
  Maximize2, 
  Minimize2, 
  ArrowUp, 
  ArrowDown, 
  CheckCircle, 
  Sparkles, 
  X,
  Target,
  Coffee,
  FastForward
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudy, getTodayDateString } from '../context/StudyContext';

interface StudyTimerProps {
  onRunningChange?: (running: boolean) => void;
  autoStartTrigger?: number;
}

export const formatStudyDuration = (totalSeconds?: number, fallbackMinutes?: number): string => {
  const secs = totalSeconds !== undefined ? totalSeconds : (fallbackMinutes || 0) * 60;
  if (secs <= 0) return '0m';
  const hrs = Math.floor(secs / 3600);
  const mins = Math.floor((secs % 3600) / 60);
  const remSecs = secs % 60;
  if (hrs > 0) {
    return `${hrs}h ${mins}m`;
  }
  if (mins > 0) {
    return remSecs > 0 ? `${mins}m ${remSecs}s` : `${mins}m`;
  }
  return `${remSecs}s`;
};

type TimerPhase = 'study' | 'block_done' | 'break' | 'break_done';

export const StudyTimer: React.FC<StudyTimerProps> = ({ onRunningChange, autoStartTrigger }) => {
  const { 
    activeTimerTarget, 
    setActiveTimerTarget, 
    recordStudySeconds, 
    quickCompleteTopic, 
    toggleEnglishDone,
    topics,
    englishHabits
  } = useStudy();

  const [mode, setMode] = useState<'20m' | '25m' | '30m' | 'stopwatch' | 'custom'>('25m');
  const [studyDurationMinutes, setStudyDurationMinutes] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // In seconds
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0); // For progressive stopwatch
  const [customMinutes, setCustomMinutes] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [countDirection, setCountDirection] = useState<'down' | 'up'>('down');
  const [phase, setPhase] = useState<TimerPhase>('study');
  const [breakMinutes, setBreakMinutes] = useState(5);

  const lastTargetIdRef = useRef<string | null>(null);

  // Notify parent when running state changes (for anti-distraction mode)
  useEffect(() => {
    onRunningChange?.(isRunning);
  }, [isRunning, onRunningChange]);

  // When user clicks "Focar" on a card, bind duration and start immediately
  useEffect(() => {
    if (!activeTimerTarget) {
      lastTargetIdRef.current = null;
      return;
    }

    const isNewTarget = lastTargetIdRef.current !== activeTimerTarget.id;
    if (isNewTarget) {
      lastTargetIdRef.current = activeTimerTarget.id;
      setPhase('study');

      const est = activeTimerTarget.estimatedMinutes || 25;
      if (est === 20) {
        setMode('20m');
        setStudyDurationMinutes(20);
        setTimeLeft(20 * 60);
        setCountDirection('down');
      } else if (est === 25) {
        setMode('25m');
        setStudyDurationMinutes(25);
        setTimeLeft(25 * 60);
        setCountDirection('down');
      } else if (est === 30) {
        setMode('30m');
        setStudyDurationMinutes(30);
        setTimeLeft(30 * 60);
        setCountDirection('down');
      } else {
        setMode('custom');
        setCustomMinutes(est);
        setStudyDurationMinutes(est);
        setTimeLeft(est * 60);
        setCountDirection('down');
      }
    }

    if (autoStartTrigger && autoStartTrigger > 0) {
      setPhase('study');
      setIsRunning(true);
    }
  }, [activeTimerTarget, autoStartTrigger]);

  // ESC key to exit Zen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZenMode) {
        setIsZenMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZenMode]);

  // Unified 1-second tick for study & break phases
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      // Only account study time during the 'study' phase
      if (phase === 'study' && activeTimerTarget) {
        recordStudySeconds(activeTimerTarget, 1);
      }

      if (phase === 'study' && (mode === 'stopwatch' || countDirection === 'up')) {
        setStopwatchSeconds(prev => prev + 1);
      } else {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            if (phase === 'study') {
              setPhase('block_done');
              try {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.75 } });
              } catch {
                // noop
              }
            } else if (phase === 'break') {
              setPhase('break_done');
            }
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, mode, countDirection, phase, activeTimerTarget, recordStudySeconds]);

  const selectPresetMinutes = (mins: 20 | 25 | 30) => {
    setPhase('study');
    setIsRunning(false);
    setMode(`${mins}m` as '20m' | '25m' | '30m');
    setStudyDurationMinutes(mins);
    setTimeLeft(mins * 60);
    setCountDirection('down');
  };

  const selectStopwatchMode = () => {
    setPhase('study');
    setIsRunning(false);
    setMode('stopwatch');
    setStopwatchSeconds(0);
    setCountDirection('up');
  };

  const selectCustomMode = (mins?: number) => {
    const val = mins ?? customMinutes;
    setPhase('study');
    setIsRunning(false);
    setMode('custom');
    setCustomMinutes(val);
    setStudyDurationMinutes(val);
    setTimeLeft(val * 60);
    setCountDirection('down');
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (phase === 'break' || phase === 'break_done') {
      setPhase('break');
      setTimeLeft(breakMinutes * 60);
      return;
    }
    setPhase('study');
    if (mode === 'stopwatch') {
      setStopwatchSeconds(0);
    } else {
      setTimeLeft(studyDurationMinutes * 60);
    }
    setStopwatchSeconds(0);
  };

  const startBreak = (mins: 5 | 10) => {
    setBreakMinutes(mins);
    setPhase('break');
    setCountDirection('down');
    setTimeLeft(mins * 60);
    setIsRunning(true);
  };

  const resumeStudyBlock = () => {
    setPhase('study');
    setCountDirection(mode === 'stopwatch' ? 'up' : 'down');
    if (mode !== 'stopwatch') {
      setTimeLeft(studyDurationMinutes * 60);
    }
    setIsRunning(true);
  };

  const handleCustomMinuteChange = (mins: number) => {
    const val = Math.max(1, Math.min(300, mins));
    setCustomMinutes(val);
    setStudyDurationMinutes(val);
    if (mode === 'custom') {
      setPhase('study');
      setTimeLeft(val * 60);
      setIsRunning(false);
    }
  };

  const handleCompleteLinkedItem = () => {
    if (!activeTimerTarget) return;
    if (activeTimerTarget.type === 'english') {
      const dateStr = activeTimerTarget.dateStr || getTodayDateString();
      const current = englishHabits[dateStr];
      if (!current?.done) {
        toggleEnglishDone(dateStr);
      }
    } else if (activeTimerTarget.type === 'topic') {
      quickCompleteTopic(activeTimerTarget.id, activeTimerTarget.dateStr || getTodayDateString());
    }
    setIsRunning(false);
    setPhase('study');
    setTimeLeft(studyDurationMinutes * 60);
    setActiveTimerTarget(null);
    setIsZenMode(false);
  };

  // Get live accumulated time for the currently linked target
  const getLinkedTargetAccumulatedLabel = (): string | null => {
    if (!activeTimerTarget) return null;
    if (activeTimerTarget.type === 'english') {
      const dateKey = activeTimerTarget.dateStr || getTodayDateString();
      const habit = englishHabits[dateKey];
      return formatStudyDuration(habit?.secondsStudied, habit?.minutesStudied);
    }
    const foundTopic = topics.find(t => t.id === activeTimerTarget.id);
    if (!foundTopic) return null;
    return formatStudyDuration(foundTopic.tempoEstudadoSegundos, foundTopic.tempoEstudadoMinutos);
  };

  const accumulatedLabel = getLinkedTargetAccumulatedLabel();

  // Format display
  const totalSecs = phase === 'study' && countDirection === 'up' ? stopwatchSeconds : timeLeft;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  const timeFormatted = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isBreakPhase = phase === 'break' || phase === 'break_done';

  // Reusable Post-Block / Break Transition Controls
  const renderTransitionActions = (isFullscreen: boolean) => {
    if (phase === 'block_done') {
      return (
        <div className={`${isFullscreen ? 'max-w-xl mx-auto' : ''} bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in`}>
          <div className="text-xs sm:text-sm text-emerald-100 flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
            <span>
              <strong>Bloco concluído!</strong> Deseja iniciar um intervalo ou concluir o item?
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => startBreak(5)}
              className="text-xs bg-sky-600 hover:bg-sky-500 text-white font-semibold px-3 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm"
            >
              <Coffee className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Intervalo (5m)</span>
            </button>
            <button
              onClick={() => startBreak(10)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 font-medium px-3 py-2 rounded-xl transition flex items-center gap-1.5"
            >
              <Coffee className="w-3.5 h-3.5" aria-hidden="true" />
              <span>10m</span>
            </button>
            <button
              onClick={resumeStudyBlock}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-xl border border-slate-700 transition"
            >
              +1 Bloco ({studyDurationMinutes}m)
            </button>
            {activeTimerTarget && (
              <button
                onClick={handleCompleteLinkedItem}
                className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Marcar Concluído</span>
              </button>
            )}
          </div>
        </div>
      );
    }

    if (phase === 'break' || phase === 'break_done') {
      return (
        <div className={`${isFullscreen ? 'max-w-xl mx-auto' : ''} bg-sky-950/40 border border-sky-500/30 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in`}>
          <div className="text-xs sm:text-sm text-sky-200 flex items-center gap-2">
            <Coffee className="w-4 h-4 text-sky-400 flex-shrink-0" aria-hidden="true" />
            <span>
              {phase === 'break_done'
                ? '☕ Intervalo finalizado! Pronto para retomar ou já concluiu este tópico?'
                : `☕ Intervalo de descanso (${breakMinutes}m) em andamento — relaxe a mente.`}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={resumeStudyBlock}
              className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-xl transition flex items-center gap-1.5"
            >
              <FastForward className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Continuar Estudando ({studyDurationMinutes}m)</span>
            </button>
            {activeTimerTarget && (
              <button
                onClick={handleCompleteLinkedItem}
                className="text-xs bg-slate-800 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 font-semibold px-3 py-1.5 rounded-xl transition flex items-center gap-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Marcar Item Concluído</span>
              </button>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Zen Fullscreen Modal (Ocupa a tela inteira sem distrações) */}
      {isZenMode && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-between p-6 sm:p-12 animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Modo Foco Zen em Tela Cheia"
        >
          {/* Top Bar in Zen Mode */}
          <div className="w-full max-w-3xl flex items-center justify-between text-slate-400">
            <span className={`text-xs font-semibold uppercase tracking-widest flex items-center gap-2 ${
              isBreakPhase ? 'text-sky-400' : 'text-emerald-400'
            }`}>
              {isBreakPhase ? (
                <>
                  <Coffee className="w-4 h-4" aria-hidden="true" />
                  <span>Intervalo de Descanso • Sem Distrações</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Modo Foco em Tela Cheia • Imersão Total</span>
                </>
              )}
            </span>
            <button
              onClick={() => setIsZenMode(false)}
              aria-label="Sair da Tela Cheia (pressione Escape)"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
            >
              <Minimize2 className="w-4 h-4" aria-hidden="true" />
              <span>Reduzir Tela (Esc)</span>
            </button>
          </div>

          {/* Central Big Typography Clock */}
          <div className="text-center space-y-6 my-auto">
            <div className="space-y-2">
              <div className="text-slate-100 text-lg sm:text-2xl font-bold max-w-xl mx-auto">
                {activeTimerTarget ? activeTimerTarget.title : 'Sessão de Foco Pomodoro'}
              </div>
              {activeTimerTarget && accumulatedLabel && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span>⏱️ Tempo total investido neste item: <strong>{accumulatedLabel}</strong></span>
                </div>
              )}
            </div>

            <div 
              role="timer"
              aria-label={`Tempo: ${timeFormatted}`}
              className={`font-mono text-7xl sm:text-9xl font-black tracking-tighter drop-shadow-2xl ${
                isBreakPhase ? 'text-sky-300' : 'text-white'
              }`}
            >
              {timeFormatted}
            </div>

            {/* Quick Block Duration Selector & Direction inside Fullscreen */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {([20, 25, 30] as const).map(mins => (
                <button
                  key={mins}
                  onClick={() => selectPresetMinutes(mins)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                    phase === 'study' && mode === `${mins}m`
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {mins}m
                </button>
              ))}
              <button
                onClick={() => setCountDirection(countDirection === 'down' ? 'up' : 'down')}
                className="inline-flex items-center gap-1 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-xs text-slate-300 hover:text-white transition"
              >
                {countDirection === 'down' ? (
                  <>
                    <ArrowDown className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Regressivo</span>
                  </>
                ) : (
                  <>
                    <ArrowUp className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Progressivo</span>
                  </>
                )}
              </button>
            </div>

            {/* Transition controls if block or break ended */}
            {renderTransitionActions(true)}
          </div>

          {/* Zen Bottom Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              aria-label={isRunning ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
              className={`px-8 py-3.5 rounded-2xl font-bold text-base transition flex items-center gap-2 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
              }`}
            >
              {isRunning ? <Pause className="w-5 h-5" aria-hidden="true" /> : <Play className="w-5 h-5 ml-0.5" aria-hidden="true" />}
              <span>{isRunning ? 'Pausar' : 'Iniciar Foco'}</span>
            </button>

            <button
              onClick={resetTimer}
              aria-label="Reiniciar cronômetro"
              className="px-4 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex items-center gap-2 text-sm font-medium"
              title="Reiniciar tempo do bloco atual"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Reiniciar</span>
            </button>

            {activeTimerTarget && (
              <button
                onClick={handleCompleteLinkedItem}
                className="px-5 py-3.5 rounded-2xl font-bold text-sm bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 transition flex items-center gap-2"
                title="Marcar item como concluído hoje com 1 clique"
              >
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                <span>Concluir Item</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* In-Page Timer Bar */}
      <section 
        aria-label="Cronômetro de Estudo Pomodoro" 
        className={`border rounded-2xl p-4 sm:p-5 flex flex-col gap-3.5 shadow-lg transition ${
          isBreakPhase
            ? 'bg-sky-950/20 border-sky-500/40 ring-1 ring-sky-500/20'
            : isRunning 
            ? 'bg-emerald-950/20 border-emerald-500/50 ring-1 ring-emerald-500/20' 
            : activeTimerTarget
            ? 'bg-slate-900 border-emerald-500/30'
            : 'bg-slate-900/90 border-slate-800/80'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Current Target & Accumulated Time */}
          <div className="flex items-center gap-3 w-full md:w-auto min-w-0">
            <div 
              className={`p-2.5 rounded-xl border transition flex-shrink-0 ${
                isBreakPhase
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                  : isRunning 
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse' 
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              }`} 
              aria-hidden="true"
            >
              {isBreakPhase ? <Coffee className="w-5 h-5" /> : <Target className="w-5 h-5" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1">
                  <TimerIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {isBreakPhase
                      ? `Intervalo (${breakMinutes}m)`
                      : countDirection === 'up'
                      ? 'Cronômetro Progressivo'
                      : 'Pomodoro Regressivo'}
                  </span>
                </span>
                {activeTimerTarget && accumulatedLabel && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    ⏱️ Total investido: {accumulatedLabel}
                  </span>
                )}
              </div>

              <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2 mt-0.5">
                <span className="truncate">
                  {activeTimerTarget 
                    ? activeTimerTarget.title 
                    : 'Clique em "Focar" em uma tarefa abaixo para iniciar seu bloco'}
                </span>
                {activeTimerTarget && !isRunning && (
                  <button
                    onClick={() => setActiveTimerTarget(null)}
                    className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-slate-800 flex-shrink-0"
                    title="Desvincular tarefa do cronômetro"
                    aria-label="Desvincular tarefa do cronômetro"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Block Duration Pills, Digital Clock & Controls */}
          <div className="flex flex-wrap items-center gap-2.5 justify-center md:justify-end w-full md:w-auto">
            {/* Pomodoro Block Pills (20m, 25m, 30m, Livre, Manual) */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs" role="group" aria-label="Duração do bloco Pomodoro">
              {([20, 25, 30] as const).map(mins => (
                <button
                  key={mins}
                  onClick={() => selectPresetMinutes(mins)}
                  aria-pressed={phase === 'study' && mode === `${mins}m`}
                  className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    phase === 'study' && mode === `${mins}m`
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mins}m
                </button>
              ))}
              <button
                onClick={selectStopwatchMode}
                aria-pressed={mode === 'stopwatch'}
                className={`px-2 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'stopwatch' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Contagem progressiva livre"
              >
                Livre
              </button>
              <button
                onClick={() => selectCustomMode()}
                aria-pressed={mode === 'custom'}
                className={`px-2 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'custom' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Definir minutos manualmente"
              >
                Manual
              </button>
            </div>

            {mode === 'custom' && (
              <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 text-xs">
                <label htmlFor="custom-minutes-input" className="sr-only">Minutos personalizados</label>
                <input
                  id="custom-minutes-input"
                  type="number"
                  min="1"
                  max="300"
                  value={customMinutes}
                  onChange={e => handleCustomMinuteChange(parseInt(e.target.value) || 1)}
                  className="w-10 bg-transparent text-emerald-400 font-bold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                />
                <span className="text-slate-400" aria-hidden="true">m</span>
              </div>
            )}

            {/* Clock Display & Controls Group */}
            <div className="flex items-center gap-2">
              <div 
                role="timer"
                aria-label={`Tempo restante: ${timeFormatted}`}
                className={`font-mono text-xl sm:text-2xl font-bold px-3.5 py-1 bg-slate-950 rounded-xl border min-w-[92px] text-center ${
                  isBreakPhase ? 'text-sky-300 border-sky-500/30' : 'text-white border-slate-800'
                }`}
              >
                {timeFormatted}
              </div>

              <div className="flex items-center gap-1.5">
                {/* Play / Pause */}
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  aria-label={isRunning ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
                  className={`px-3 py-2 rounded-xl font-semibold text-xs transition flex items-center gap-1.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isRunning ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                  title={isRunning ? 'Pausar (Reexibe a lista de tarefas)' : 'Iniciar bloco de foco'}
                >
                  {isRunning ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
                  <span className="hidden sm:inline">{isRunning ? 'Pausar' : 'Iniciar'}</span>
                </button>

                {/* 1-Click Complete Linked Item directly from Timer */}
                {activeTimerTarget && (
                  <button
                    onClick={handleCompleteLinkedItem}
                    aria-label="Marcar tarefa em foco como concluída hoje"
                    className="p-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 transition"
                    title="Concluir esta tarefa agora (1 clique)"
                  >
                    <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}

                {/* Reset Timer */}
                <button
                  onClick={resetTimer}
                  aria-label="Reiniciar cronômetro"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                  title="Reiniciar Cronômetro"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Expand to Fullscreen Zen Mode */}
                <button
                  onClick={() => setIsZenMode(true)}
                  aria-label="Expandir cronômetro para tela inteira"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                  title="Expandir cronômetro para ocupar a tela inteira (Modo Zen)"
                >
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Block / Break Transition Bar */}
        {renderTransitionActions(false)}
      </section>
    </>
  );
};
