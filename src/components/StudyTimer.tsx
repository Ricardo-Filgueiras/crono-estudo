import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Timer as TimerIcon, Maximize2, Minimize2, ArrowUp, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudyTimerProps {
  currentTopicTitle?: string;
}

export const StudyTimer: React.FC<StudyTimerProps> = ({ currentTopicTitle }) => {
  const [mode, setMode] = useState<'pomodoro' | 'free' | 'stopwatch' | 'custom'>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // In seconds
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0); // For progressive stopwatch
  const [customMinutes, setCustomMinutes] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [countDirection, setCountDirection] = useState<'down' | 'up'>('down');

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

  // Countdown timer logic
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning && (mode !== 'stopwatch' && countDirection === 'down')) {
      if (timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft(prev => prev - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        setIsRunning(false);
        try {
          confetti({ particleCount: 60, spread: 55, origin: { y: 0.8 } });
        } catch {
          // noop
        }
        alert('Sessão concluída! Excelente foco!');
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode, countDirection]);

  // Progressive count up logic
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning && (mode === 'stopwatch' || countDirection === 'up')) {
      timer = setInterval(() => {
        setStopwatchSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, mode, countDirection]);

  const switchMode = (newMode: 'pomodoro' | 'free' | 'stopwatch' | 'custom', customMin?: number) => {
    setMode(newMode);
    setIsRunning(false);
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
    }
  };

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
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-between p-8 sm:p-12 animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Modo Foco Zen em Tela Cheia"
        >
          {/* Top Bar in Zen Mode */}
          <div className="w-full max-w-3xl flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Modo Foco Zen • Concentração Pura
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
            <div className="text-slate-300 text-sm sm:text-base font-medium max-w-md mx-auto line-clamp-2">
              {currentTopicTitle || 'Sessão de Estudo em Andamento'}
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
          <div className="flex items-center gap-4">
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
      <section aria-label="Cronômetro de Estudo" className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" aria-hidden="true">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <TimerIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{countDirection === 'up' ? 'Contador Livre' : 'Modo Foco'}</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-1">
              {currentTopicTitle || 'Selecione uma missão para cronometrar'}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 justify-center">
          {/* Mode pills */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs" role="group" aria-label="Modos do cronômetro">
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
              aria-pressed={mode === 'custom'}
              className={`px-2.5 py-1 rounded-lg font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                mode === 'custom' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
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
                onClick={() => setIsRunning(!isRunning)}
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
      </section>
    </>
  );
};
