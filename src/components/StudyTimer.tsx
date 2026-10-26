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
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStudy, getTodayDateString } from '../context/StudyContext';

interface StudyTimerProps {
  currentTopicTitle?: string;
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

export const StudyTimer: React.FC<StudyTimerProps> = () => {
  const { 
    activeTimerTarget, 
    setActiveTimerTarget, 
    recordStudySeconds, 
    quickCompleteTopic, 
    toggleEnglishDone,
    topics,
    englishHabits
  } = useStudy();

  const [mode, setMode] = useState<'pomodoro' | 'free' | 'stopwatch' | 'custom'>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // In seconds
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0); // For progressive stopwatch
  const [customMinutes, setCustomMinutes] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [countDirection, setCountDirection] = useState<'down' | 'up'>('down');
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const lastTargetIdRef = useRef<string | null>(null);

  // Sync preset duration when user clicks "Focar" on a new item with estimatedMinutes
  useEffect(() => {
    if (!activeTimerTarget) {
      lastTargetIdRef.current = null;
      return;
    }
    if (lastTargetIdRef.current !== activeTimerTarget.id) {
      lastTargetIdRef.current = activeTimerTarget.id;
      setSessionCompleted(false);
      if (!isRunning && activeTimerTarget.estimatedMinutes) {
        const est = activeTimerTarget.estimatedMinutes;
        if (est === 25) {
          setMode('pomodoro');
          setTimeLeft(25 * 60);
          setCountDirection('down');
        } else if (est === 45) {
          setMode('free');
          setTimeLeft(45 * 60);
          setCountDirection('down');
        } else {
          setMode('custom');
          setCustomMinutes(est);
          setTimeLeft(est * 60);
          setCountDirection('down');
        }
      }
    }
  }, [activeTimerTarget, isRunning]);

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

  // Unified 1-second tick for timer + automatic accounting to activeTimerTarget
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      // Account 1 second to the linked item in real time
      if (activeTimerTarget) {
        recordStudySeconds(activeTimerTarget, 1);
      }

      if (mode === 'stopwatch' || countDirection === 'up') {
        setStopwatchSeconds(prev => prev + 1);
      } else {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setSessionCompleted(true);
            try {
              confetti({ particleCount: 70, spread: 60, origin: { y: 0.75 } });
            } catch {
              // noop
            }
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, mode, countDirection, activeTimerTarget, recordStudySeconds]);

  const switchMode = (newMode: 'pomodoro' | 'free' | 'stopwatch' | 'custom', customMin?: number) => {
    setMode(newMode);
    setIsRunning(false);
    setSessionCompleted(false);
    if (newMode === 'pomodoro') {
      setTimeLeft(25 * 60);
      setCountDirection('down');
    }
    if (newMode === 'free') {
      setTimeLeft(45 * 60);
      setCountDirection('down');
    }
    if (newMode === 'stopwatch') {
      setStopwatchSeconds(0);
      setCountDirection('up');
    }
    if (newMode === 'custom') {
      const mins = customMin ?? customMinutes;
      setTimeLeft(mins * 60);
      setCountDirection('down');
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSessionCompleted(false);
    if (mode === 'pomodoro') setTimeLeft(25 * 60);
    if (mode === 'free') setTimeLeft(45 * 60);
    if (mode === 'stopwatch') setStopwatchSeconds(0);
    if (mode === 'custom') setTimeLeft(customMinutes * 60);
    setStopwatchSeconds(0);
  };

  const handleCustomMinuteChange = (mins: number) => {
    const val = Math.max(1, Math.min(300, mins));
    setCustomMinutes(val);
    if (mode === 'custom') {
      setTimeLeft(val * 60);
      setIsRunning(false);
      setSessionCompleted(false);
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
    setSessionCompleted(false);
    setIsRunning(false);
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
  const totalSecs = countDirection === 'up' ? stopwatchSeconds : timeLeft;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  const timeFormatted = hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <>
      {/* Zen Fullscreen Modal */}
      {isZenMode && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-between p-8 sm:p-12 animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Modo Foco Zen em Tela Cheia"
        >
          {/* Top Bar in Zen Mode */}
          <div className="w-full max-w-3xl flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Modo Foco Zen • Contabilização Automática</span>
            </span>
            <button
              onClick={() => setIsZenMode(false)}
              aria-label="Sair do Modo Zen de foco (pressione Escape)"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
            >
              <Minimize2 className="w-4 h-4" aria-hidden="true" />
              <span>Sair do Modo Zen (Esc)</span>
            </button>
          </div>

          {/* Central Big Typography Clock */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-slate-200 text-base sm:text-lg font-bold max-w-lg mx-auto line-clamp-2">
                {activeTimerTarget ? activeTimerTarget.title : 'Sessão Livre de Estudo (Sem item vinculado)'}
              </div>
              {activeTimerTarget && accumulatedLabel && (
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span>⏱️ Tempo acumulado neste item: <strong>{accumulatedLabel}</strong></span>
                </div>
              )}
            </div>

            <div 
              role="timer"
              aria-label={`Tempo: ${timeFormatted}`}
              className="font-mono text-7xl sm:text-9xl font-black text-white tracking-tighter drop-shadow-2xl"
            >
              {timeFormatted}
            </div>

            {/* Direction toggle */}
            <div className="inline-flex items-center gap-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-xs text-slate-300">
              <span>Contagem:</span>
              <button
                onClick={() => setCountDirection(countDirection === 'down' ? 'up' : 'down')}
                aria-label={`Alterar contagem para ${countDirection === 'down' ? 'progressiva' : 'regressiva'}`}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
              >
                {countDirection === 'down' ? (
                  <>
                    <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Regressiva (Decrescente)</span>
                  </>
                ) : (
                  <>
                    <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Progressiva (Crescente)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Zen Bottom Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              <span>{isRunning ? 'Pausar' : 'Iniciar'}</span>
            </button>

            {activeTimerTarget && (
              <button
                onClick={() => {
                  handleCompleteLinkedItem();
                  setIsZenMode(false);
                }}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-slate-900 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 transition flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                <span>Concluir Tarefa e Sair</span>
              </button>
            )}

            <button
              onClick={resetTimer}
              aria-label="Zerar cronômetro"
              className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
              title="Zerar Timer"
            >
              <RotateCcw className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Normal In-page Timer Bar */}
      <section 
        aria-label="Cronômetro de Estudo" 
        className={`border rounded-2xl p-4 flex flex-col gap-3 shadow-lg transition ${
          isRunning 
            ? 'bg-emerald-950/20 border-emerald-500/50 ring-1 ring-emerald-500/20' 
            : activeTimerTarget
            ? 'bg-slate-900/95 border-emerald-500/30'
            : 'bg-slate-900/90 border-slate-800/80'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div 
              className={`p-2.5 rounded-xl border transition ${
                isRunning 
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse' 
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              }`} 
              aria-hidden="true"
            >
              <Target className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1">
                  <TimerIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{countDirection === 'up' ? 'Contador Progressivo' : 'Modo Foco Vinculado'}</span>
                </span>
                {activeTimerTarget && accumulatedLabel && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    ⏱️ Contabilizado: {accumulatedLabel}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2 mt-0.5">
                <span className="truncate">
                  {activeTimerTarget 
                    ? `🎯 Focando em: ${activeTimerTarget.title}` 
                    : 'Clique em "Focar" em uma tarefa abaixo para contabilizar o tempo nela'}
                </span>
                {activeTimerTarget && (
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

          <div className="flex flex-wrap items-center gap-2.5 justify-center w-full md:w-auto">
            {/* Mode pills */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs" role="group" aria-label="Modos do cronômetro">
              <button
                onClick={() => switchMode('custom', 15)}
                aria-pressed={mode === 'custom' && customMinutes === 15}
                className={`px-2 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'custom' && customMinutes === 15 ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
                title="15 minutos (Ideal para Micro-hábito de Inglês)"
              >
                15m
              </button>
              <button
                onClick={() => switchMode('pomodoro')}
                aria-pressed={mode === 'pomodoro'}
                className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'pomodoro' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                25m
              </button>
              <button
                onClick={() => switchMode('free')}
                aria-pressed={mode === 'free'}
                className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'free' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                45m
              </button>
              <button
                onClick={() => switchMode('stopwatch')}
                aria-pressed={mode === 'stopwatch'}
                className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'stopwatch' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                ⏱️ Livre
              </button>
              <button
                onClick={() => switchMode('custom')}
                aria-pressed={mode === 'custom' && customMinutes !== 15}
                className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  mode === 'custom' && customMinutes !== 15 ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
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

            {/* Clock Display & Controls Group (Mobile-friendly) */}
            <div className="flex items-center gap-2">
              {/* Clock Display */}
              <div 
                role="timer"
                aria-label={`Tempo do cronômetro: ${timeFormatted}`}
                className="font-mono text-xl sm:text-2xl font-bold text-white px-3 py-1 sm:py-0.5 bg-slate-950 rounded-xl border border-slate-800 min-w-[85px] text-center"
              >
                {timeFormatted}
              </div>

              {/* Play/Pause/Reset Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setSessionCompleted(false);
                    setIsRunning(!isRunning);
                  }}
                  aria-label={isRunning ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
                  className={`p-2.5 sm:p-2 rounded-xl font-medium transition flex items-center justify-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
                  }`}
                  title={isRunning ? 'Pausar' : 'Iniciar'}
                >
                  {isRunning ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4 ml-0.5" aria-hidden="true" />}
                </button>

                <button
                  onClick={resetTimer}
                  aria-label="Zerar cronômetro"
                  className="p-2.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                  title="Zerar Timer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Zen Fullscreen Trigger */}
                <button
                  onClick={() => setIsZenMode(true)}
                  aria-label="Entrar no Modo Foco Zen em tela cheia"
                  className="p-2.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                  title="Entrar no Modo Foco Zen (Tela Cheia Limpa)"
                >
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post-Session Action Banner (Replaces blocking browser alert) */}
        {sessionCompleted && (
          <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="text-xs text-emerald-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>
                <strong>Sessão concluída!</strong>{' '}
                {activeTimerTarget 
                  ? `O tempo foi contabilizado em "${activeTimerTarget.title}". Deseja concluir esta tarefa agora?`
                  : 'Excelente foco! Vincule uma tarefa para registrar seus minutos.'}
              </span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {activeTimerTarget && (
                <button
                  onClick={handleCompleteLinkedItem}
                  className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1 shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Sim, Marcar Concluído</span>
                </button>
              )}
              <button
                onClick={() => {
                  setTimeLeft(5 * 60);
                  setSessionCompleted(false);
                  setIsRunning(true);
                }}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-700 transition"
              >
                +5 min
              </button>
              <button
                onClick={() => setSessionCompleted(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1.5"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
