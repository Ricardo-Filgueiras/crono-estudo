import React, { useState, useMemo } from 'react';
import { useStudy, getTodayDateString, addDaysToDate, getWeekDays } from '../context/StudyContext';
import { formatStudyDuration } from './StudyTimer';
import { 
  BarChart3, 
  Award, 
  Flame, 
  Target, 
  Layers, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  Languages, 
  BookOpen, 
  PieChart
} from 'lucide-react';

type PeriodFilter = 'hoje' | 'semana' | 'mes' | '30dias' | 'geral';

export const StatsDashboard: React.FC = () => {
  const { topics, errors, sessionLogs, englishHabits } = useStudy();
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>('semana');
  const [hoveredHeatmapDay, setHoveredHeatmapDay] = useState<{
    dateStr: string;
    seconds: number;
    topicsCount: number;
    hasEnglish: boolean;
  } | null>(null);

  const today = getTodayDateString();

  // === 1. CÁLCULO DE LIMITES TEMPORAIS DO PERÍODO SELECIONADO ===
  const { startDate, endDate, periodLabel } = useMemo(() => {
    if (selectedPeriod === 'hoje') {
      return { startDate: today, endDate: today, periodLabel: 'Hoje' };
    }
    
    if (selectedPeriod === 'semana') {
      const week = getWeekDays(today);
      const start = week[0].dateStr; // Segunda
      const end = week[6].dateStr;   // Domingo
      const startFmt = `${week[0].dayNumber}/${start.split('-')[1]}`;
      const endFmt = `${week[6].dayNumber}/${end.split('-')[1]}`;
      return { 
        startDate: start, 
        endDate: end, 
        periodLabel: `Esta Semana (${startFmt} a ${endFmt})` 
      };
    }

    if (selectedPeriod === 'mes') {
      const [year, month] = today.split('-');
      const start = `${year}-${month}-01`;
      const lastDay = new Date(Number(year), Number(month), 0).getDate();
      const end = `${year}-${month}-${String(lastDay).padStart(2, '0')}`;
      const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      return { 
        startDate: start, 
        endDate: end, 
        periodLabel: `${monthNames[Number(month) - 1]} de ${year}` 
      };
    }

    if (selectedPeriod === '30dias') {
      const start = addDaysToDate(today, -29);
      return { 
        startDate: start, 
        endDate: today, 
        periodLabel: 'Últimos 30 Dias' 
      };
    }

    // Geral (Todo o histórico)
    return { 
      startDate: '2020-01-01', 
      endDate: '2099-12-31', 
      periodLabel: 'Todo o Histórico Acumulado' 
    };
  }, [selectedPeriod, today]);

  // === 2. CONSOLIDAÇÃO DIÁRIA DE TEMPO DE ESTUDO ===
  // Mapeia dataStr -> { seconds: number, topicsStudied: Set<string>, hasEnglish: boolean }
  const dailyStudyMap = useMemo(() => {
    const map = new Map<string, { seconds: number; topicsStudied: Set<string>; hasEnglish: boolean }>();

    const touchDay = (d: string) => {
      if (!map.has(d)) {
        map.set(d, { seconds: 0, topicsStudied: new Set(), hasEnglish: false });
      }
      return map.get(d)!;
    };

    // A. Sessões registradas no histórico
    for (const log of sessionLogs) {
      if (!log.dateStr) continue;
      const day = touchDay(log.dateStr);
      day.seconds += log.secondsStudied || 0;
      if (log.type === 'topic' && log.topicId) {
        day.topicsStudied.add(log.topicId);
      }
      if (log.type === 'english') {
        day.hasEnglish = true;
      }
    }

    // B. Tópicos que já têm dataEstudo registrada (garante compatibilidade histórica)
    for (const t of topics) {
      if (t.dataEstudo) {
        const secs = t.tempoEstudadoSegundos || (t.tempoEstudadoMinutos ? t.tempoEstudadoMinutos * 60 : 0);
        if (secs > 0) {
          const day = touchDay(t.dataEstudo);
          day.topicsStudied.add(t.id);
          // Se não houver log registrado dessa data para esse tópico, adiciona
          const hasLog = sessionLogs.some(l => l.dateStr === t.dataEstudo && l.topicId === t.id);
          if (!hasLog) {
            day.seconds += secs;
          }
        }
      }
    }

    // C. Hábitos de inglês registrados
    for (const [dateStr, h] of Object.entries(englishHabits)) {
      if (h.done || (h.secondsStudied && h.secondsStudied > 0) || (h.minutesStudied && h.minutesStudied > 0)) {
        const day = touchDay(dateStr);
        day.hasEnglish = true;
        const engSecs = h.secondsStudied || (h.minutesStudied ? h.minutesStudied * 60 : 0);
        const hasLog = sessionLogs.some(l => l.dateStr === dateStr && l.type === 'english');
        if (!hasLog && engSecs > 0) {
          day.seconds += engSecs;
        }
      }
    }

    return map;
  }, [sessionLogs, topics, englishHabits]);

  // === 3. MÉTRICAS CONSOLIDADAS DO PERÍODO SELECIONADO ===
  const periodMetrics = useMemo(() => {
    let totalSeconds = 0;
    let topicSeconds = 0;
    let englishSeconds = 0;
    let activeDays = 0;
    const studiedTopicIds = new Set<string>();

    dailyStudyMap.forEach((data, dateStr) => {
      if (dateStr >= startDate && dateStr <= endDate) {
        if (data.seconds > 0 || data.hasEnglish) {
          activeDays++;
          totalSeconds += data.seconds;
        }
        data.topicsStudied.forEach(id => studiedTopicIds.add(id));
      }
    });

    // Filtra logs de sessão do período para separar por tag/origem
    const logsInPeriod = sessionLogs.filter(s => s.dateStr >= startDate && s.dateStr <= endDate);
    const tagSecondsMap: Record<string, number> = {
      'MBA': 0,
      'Matemática Base': 0,
      'Português Base': 0,
      'Ciências da Natureza': 0,
      'Concurso': 0,
      'Inglês': 0
    };

    for (const log of logsInPeriod) {
      if (log.type === 'english') {
        tagSecondsMap['Inglês'] += log.secondsStudied;
        englishSeconds += log.secondsStudied;
      } else {
        topicSeconds += log.secondsStudied;
        if (log.origem && log.origem.length > 0) {
          const share = log.secondsStudied / log.origem.length;
          for (const orig of log.origem) {
            if (tagSecondsMap[orig] !== undefined) {
              tagSecondsMap[orig] += share;
            }
          }
        }
      }
    }

    // Tópicos com dataEstudo no período
    const topicsCompletedInPeriod = topics.filter(t => 
      t.dataEstudo && 
      t.dataEstudo >= startDate && 
      t.dataEstudo <= endDate &&
      (t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios')
    ).length;

    // Erros catalogados no período
    const errorsInPeriod = errors.filter(e => e.data >= startDate && e.data <= endDate).length;

    // Dias de inglês no período
    const englishDaysInPeriod = Object.entries(englishHabits).filter(([d, h]) => 
      d >= startDate && d <= endDate && h.done
    ).length;

    // Média diária (baseada nos dias ativos ou dias totais do período)
    const avgDailySeconds = activeDays > 0 ? Math.round(totalSeconds / activeDays) : 0;

    return {
      totalSeconds,
      topicSeconds,
      englishSeconds,
      activeDays,
      studiedTopicCount: studiedTopicIds.size,
      topicsCompletedInPeriod,
      errorsInPeriod,
      englishDaysInPeriod,
      avgDailySeconds,
      tagSecondsMap,
      recentLogs: logsInPeriod.slice(0, 10)
    };
  }, [dailyStudyMap, sessionLogs, topics, errors, englishHabits, startDate, endDate]);

  // === 4. CÁLCULO DE STREAKS (OFENSIVA) & CONSISTÊNCIA HISTÓRICA ===
  const { currentStreak, maxStreak, totalActiveDays } = useMemo(() => {
    const activeDates = Array.from(dailyStudyMap.entries())
      .filter(([_, d]) => d.seconds > 60 || d.hasEnglish)
      .map(([dateStr]) => dateStr)
      .sort();

    const activeSet = new Set(activeDates);
    const totalActive = activeSet.size;

    if (totalActive === 0) {
      return { currentStreak: 0, maxStreak: 0, totalActiveDays: 0 };
    }

    // Ofensiva atual: se hoje estudou, conta até hoje. Se não, verifica ontem
    let streak = 0;
    let checkDate = today;
    if (!activeSet.has(checkDate)) {
      checkDate = addDaysToDate(today, -1);
    }

    while (activeSet.has(checkDate)) {
      streak++;
      checkDate = addDaysToDate(checkDate, -1);
    }

    // Maior ofensiva histórica
    let max = 0;
    let tempStreak = 0;
    let prevDate: string | null = null;

    for (const d of activeDates) {
      if (!prevDate) {
        tempStreak = 1;
      } else {
        const expectedNext = addDaysToDate(prevDate, 1);
        if (d === expectedNext) {
          tempStreak++;
        } else {
          tempStreak = 1;
        }
      }
      if (tempStreak > max) max = tempStreak;
      prevDate = d;
    }

    return { currentStreak: streak, maxStreak: max, totalActiveDays: totalActive };
  }, [dailyStudyMap, today]);

  // === 5. DADOS DO HEATMAP DE CONSISTÊNCIA (ÚLTIMAS 16 SEMANAS) ===
  const heatmapData = useMemo(() => {
    // 16 semanas = 112 dias
    const numWeeks = 16;
    const week = getWeekDays(today);
    const sundayCurrentWeek = week[6].dateStr;
    const startHeatmapDate = addDaysToDate(sundayCurrentWeek, -(numWeeks * 7 - 1));

    const weeks: Array<Array<{
      dateStr: string;
      dayNumber: number;
      monthName: string;
      seconds: number;
      level: 0 | 1 | 2 | 3 | 4;
      topicsCount: number;
      hasEnglish: boolean;
      isToday: boolean;
    }>> = [];

    const monthShorts = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let curDate = startHeatmapDate;

    for (let w = 0; w < numWeeks; w++) {
      const daysInWeek = [];
      for (let d = 0; d < 7; d++) {
        const dayInfo = dailyStudyMap.get(curDate) || { seconds: 0, topicsStudied: new Set(), hasEnglish: false };
        const secs = dayInfo.seconds;
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (secs > 5400) level = 4;        // > 90 min
        else if (secs > 3000) level = 3;   // 50 - 90 min
        else if (secs > 1500) level = 2;   // 25 - 50 min
        else if (secs > 0 || dayInfo.hasEnglish) level = 1; // 1 - 25 min

        const [, m, dayNum] = curDate.split('-');
        daysInWeek.push({
          dateStr: curDate,
          dayNumber: Number(dayNum),
          monthName: monthShorts[Number(m) - 1],
          seconds: secs,
          level,
          topicsCount: dayInfo.topicsStudied.size,
          hasEnglish: dayInfo.hasEnglish,
          isToday: curDate === today
        });

        curDate = addDaysToDate(curDate, 1);
      }
      weeks.push(daysInWeek);
    }

    return weeks;
  }, [dailyStudyMap, today]);

  // === 6. DADOS DO GRÁFICO DIÁRIO DA SEMANA ATUAL ===
  const weekChartDays = useMemo(() => {
    const days = getWeekDays(today);
    const maxSecs = Math.max(...days.map(d => dailyStudyMap.get(d.dateStr)?.seconds || 0), 3600); // Mínimo 1h de escala
    return days.map(d => {
      const info = dailyStudyMap.get(d.dateStr) || { seconds: 0, topicsStudied: new Set(), hasEnglish: false };
      const percent = Math.min(100, Math.round((info.seconds / maxSecs) * 100));
      return {
        ...d,
        seconds: info.seconds,
        percent,
        hasEnglish: info.hasEnglish,
        topicsCount: info.topicsStudied.size
      };
    });
  }, [dailyStudyMap, today]);

  // === 7. PROGRESSO GLOBAL DAS TRILHAS (LEGACY ENRIQUECIDO) ===
  const total = topics.length;
  const completed = topics.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
  const mastered = topics.filter(t => t.status === 'Dominado').length;
  const percentGeneral = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getTagStats = (tagName: string) => {
    const list = topics.filter(t => t.origem && t.origem.includes(tagName as any));
    const done = list.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
    const perc = list.length > 0 ? Math.round((done / list.length) * 100) : 0;
    return { total: list.length, completed: done, percent: perc };
  };

  const mbaStats = getTagStats('MBA');
  const mathStats = getTagStats('Matemática Base');
  const portStats = getTagStats('Português Base');
  const natureStats = getTagStats('Ciências da Natureza');
  const concursoStats = getTagStats('Concurso');

  return (
    <div className="space-y-6">
      
      {/* ============================================================== */}
      {/* CABEÇALHO DO DASHBOARD & SELETOR DE PERÍODO                    */}
      {/* ============================================================== */}
      <section aria-label="Filtro de Período Temporal" className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </span>
              <div>
                <h1 className="text-lg font-extrabold text-white">
                  Inteligência de Estudos & Período
                </h1>
                <p className="text-xs text-slate-400">
                  Visualizando: <span className="text-emerald-400 font-semibold">{periodLabel}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Botões Seletores de Período */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedPeriod('hoje')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedPeriod === 'hoje'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Hoje
            </button>
            <button
              onClick={() => setSelectedPeriod('semana')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedPeriod === 'semana'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Esta Semana
            </button>
            <button
              onClick={() => setSelectedPeriod('mes')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedPeriod === 'mes'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Este Mês
            </button>
            <button
              onClick={() => setSelectedPeriod('30dias')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedPeriod === '30dias'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Últimos 30 Dias
            </button>
            <button
              onClick={() => setSelectedPeriod('geral')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedPeriod === 'geral'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Geral
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARDS DE MÉTRICAS DO PERÍODO SELECIONADO                       */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
          
          {/* 1. Tempo Líquido no Período */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Tempo Líquido</span>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-white tracking-tight">
              {formatStudyDuration(periodMetrics.totalSeconds)}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {periodMetrics.activeDays} {periodMetrics.activeDays === 1 ? 'dia ativo' : 'dias ativos'} no período
            </p>
          </div>

          {/* 2. Média Diária Ativa */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 relative overflow-hidden group hover:border-amber-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Média por Dia Ativo</span>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400 tracking-tight">
              {periodMetrics.avgDailySeconds > 0 ? formatStudyDuration(periodMetrics.avgDailySeconds) : '0m'}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Ritmo de foco nas sessões
            </p>
          </div>

          {/* 3. Tópicos no Período */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Tópicos no Período</span>
              <BookOpen className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-black text-purple-400 tracking-tight">
              {periodMetrics.studiedTopicCount}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {periodMetrics.topicsCompletedInPeriod} concluídos no intervalo
            </p>
          </div>

          {/* 4. Hábito de Inglês & Caderno de Erros */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between text-slate-400 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Inglês & Erros</span>
              <Languages className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-blue-400 tracking-tight">
              {periodMetrics.englishDaysInPeriod}d <span className="text-xs text-slate-400 font-normal">inglês</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {periodMetrics.errorsInPeriod} {periodMetrics.errorsInPeriod === 1 ? 'erro anotado' : 'erros anotados'}
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* GRÁFICO DIÁRIO DE ATIVIDADE (SEMANA ATUAL)                      */}
      {/* ============================================================== */}
      <section aria-labelledby="daily-chart-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 id="daily-chart-heading" className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Produção Diária da Semana (Horas Líquidas)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tempo medido pelo cronômetro em cada dia de Segunda a Domingo
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-xs font-medium text-slate-300 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Meta sugerida: 2h/dia
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2 sm:gap-3 pt-6 pb-2">
          {weekChartDays.map(day => {
            const hasActivity = day.seconds > 0;
            const isToday = day.isToday;

            return (
              <div key={day.dateStr} className="flex flex-col items-center group">
                
                {/* Tempo acima da barra */}
                <span className={`text-[11px] font-mono mb-2 transition-all ${
                  hasActivity ? 'text-emerald-400 font-bold' : 'text-slate-600'
                }`}>
                  {hasActivity ? formatStudyDuration(day.seconds) : '0m'}
                </span>

                {/* Trilho da barra vertical */}
                <div className="w-full max-w-[46px] h-36 bg-slate-950 rounded-2xl p-1 flex flex-col justify-end border border-slate-800 relative">
                  {/* Barra com altura proporcional */}
                  <div 
                    className={`w-full rounded-xl transition-all duration-700 ${
                      hasActivity 
                        ? isToday
                          ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]'
                          : 'bg-emerald-500/80 hover:bg-emerald-400'
                        : 'bg-slate-900/40'
                    }`}
                    style={{ height: `${Math.max(day.percent, hasActivity ? 12 : 4)}%` }}
                  />

                  {/* Tooltip com detalhes no hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-20 pointer-events-none">
                    <div className="bg-slate-950 border border-slate-700 text-white text-[11px] py-1.5 px-2.5 rounded-xl shadow-2xl whitespace-nowrap">
                      <div className="font-bold text-emerald-400">{day.dayName}, {day.dayNumber}</div>
                      <div>Tempo: {formatStudyDuration(day.seconds)}</div>
                      {day.topicsCount > 0 && <div>{day.topicsCount} tópicos estudados</div>}
                      {day.hasEnglish && <div className="text-blue-400">✓ Inglês cumprido</div>}
                    </div>
                    <div className="w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700 -mt-1"></div>
                  </div>
                </div>

                {/* Rótulo do dia */}
                <div className="mt-2.5 text-center">
                  <span className={`block text-xs font-semibold ${isToday ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {day.dayName}
                  </span>
                  <span className={`text-[11px] font-mono ${isToday ? 'text-white font-bold' : 'text-slate-500'}`}>
                    {day.dayNumber}
                  </span>
                </div>

                {/* Indicador de "Hoje" */}
                {isToday && (
                  <span className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Hoje
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* HEATMAP DE CONSISTÊNCIA ESTILO GITHUB & OFENSIVA (STREAKS)     */}
      {/* ============================================================== */}
      <section aria-labelledby="heatmap-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 id="heatmap-heading" className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-500" />
              Consistência & Mapa de Calor (Últimas 16 Semanas)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Cada célula representa um dia de dedicação. A intensidade verde reflete o volume de foco.
            </p>
          </div>

          {/* Cards de Ofensiva (Streaks) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-2xl">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ofensiva Atual</div>
                <div className="text-base font-black text-amber-400 font-mono">
                  {currentStreak} {currentStreak === 1 ? 'dia' : 'dias'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-2xl">
              <Award className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Maior Recorde</div>
                <div className="text-base font-black text-emerald-400 font-mono">
                  {maxStreak} {maxStreak === 1 ? 'dia' : 'dias'}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-2xl">
              <Target className="w-4 h-4 text-purple-400" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dias Ativos</div>
                <div className="text-base font-black text-purple-400 font-mono">
                  {totalActiveDays} {totalActiveDays === 1 ? 'dia' : 'dias'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade do Heatmap */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 overflow-x-auto">
          <div className="min-w-[620px]">
            
            {/* Linhas de dias (Segunda a Domingo) */}
            <div className="flex gap-1.5 items-start">
              
              {/* Rótulos dos dias da semana à esquerda */}
              <div className="flex flex-col justify-between h-[116px] text-[10px] text-slate-400 pr-2 pt-0.5 font-medium select-none">
                <span>Seg</span>
                <span>Qua</span>
                <span>Sex</span>
                <span>Dom</span>
              </div>

              {/* Colunas de semanas */}
              <div className="flex gap-1.5 flex-1">
                {heatmapData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                    {week.map((cell) => {
                      let bgClass = 'bg-slate-900/60 border border-slate-800/60';
                      if (cell.level === 1) bgClass = 'bg-emerald-950 border border-emerald-900/80 hover:border-emerald-600';
                      if (cell.level === 2) bgClass = 'bg-emerald-800 border border-emerald-700 hover:border-emerald-500';
                      if (cell.level === 3) bgClass = 'bg-emerald-600 border border-emerald-500 hover:border-emerald-300';
                      if (cell.level === 4) bgClass = 'bg-emerald-400 border border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.35)]';

                      return (
                        <div
                          key={cell.dateStr}
                          onMouseEnter={() => setHoveredHeatmapDay(cell)}
                          onMouseLeave={() => setHoveredHeatmapDay(null)}
                          className={`h-3 rounded-sm transition-all cursor-pointer relative ${bgClass} ${
                            cell.isToday ? 'ring-1 ring-white/50' : ''
                          }`}
                          title={`${cell.dateStr}: ${formatStudyDuration(cell.seconds)}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

            </div>

            {/* Rodapé do Heatmap: Legenda & Detalhe Dinâmico */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-850 text-xs text-slate-400">
              <div>
                {hoveredHeatmapDay ? (
                  <span className="text-white font-medium">
                    📅 <span className="text-emerald-400 font-bold">{hoveredHeatmapDay.dateStr}</span>: {formatStudyDuration(hoveredHeatmapDay.seconds)} estudados
                    {hoveredHeatmapDay.topicsCount > 0 ? ` (${hoveredHeatmapDay.topicsCount} tópicos)` : ''}
                    {hoveredHeatmapDay.hasEnglish ? ' • Inglês ✓' : ''}
                  </span>
                ) : (
                  <span>Passe o cursor sobre os quadrados para inspecionar os dias</span>
                )}
              </div>

              {/* Escala Menos -> Mais */}
              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Menos</span>
                <span className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-800"></span>
                <span className="w-3 h-3 rounded-sm bg-emerald-950 border border-emerald-900/80"></span>
                <span className="w-3 h-3 rounded-sm bg-emerald-800 border border-emerald-700"></span>
                <span className="w-3 h-3 rounded-sm bg-emerald-600 border border-emerald-500"></span>
                <span className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-300"></span>
                <span>Mais</span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* EQUILÍBRIO DA CARGA NO PERÍODO & LOGS DE SESSÃO RECENTES       */}
      {/* ============================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Distribuição por Matéria no Período */}
        <section aria-labelledby="distribution-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="distribution-heading" className="text-base font-bold text-white flex items-center gap-2">
              <PieChart className="w-4 h-4 text-purple-400" />
              Equilíbrio da Carga ({periodLabel})
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Total: {formatStudyDuration(periodMetrics.totalSeconds)}
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Acompanhe para onde sua atenção foi direcionada e evite negligenciar matérias de alto peso.
          </p>

          <div className="space-y-3.5 pt-2">
            {[
              { name: 'MBA Ciência de Dados', key: 'MBA', color: 'bg-purple-500', text: 'text-purple-300' },
              { name: 'Matemática Base', key: 'Matemática Base', color: 'bg-amber-500', text: 'text-amber-300' },
              { name: 'Português Base', key: 'Português Base', color: 'bg-blue-500', text: 'text-blue-300' },
              { name: 'Ciências da Natureza', key: 'Ciências da Natureza', color: 'bg-teal-500', text: 'text-teal-300' },
              { name: 'Concurso Público (TI)', key: 'Concurso', color: 'bg-emerald-500', text: 'text-emerald-300' },
              { name: 'Hábito Diário de Inglês', key: 'Inglês', color: 'bg-indigo-500', text: 'text-indigo-300' },
            ].map(item => {
              const secs = periodMetrics.tagSecondsMap[item.key] || 0;
              const perc = periodMetrics.totalSeconds > 0 
                ? Math.round((secs / periodMetrics.totalSeconds) * 100) 
                : 0;

              return (
                <div key={item.key} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-semibold ${item.text}`}>{item.name}</span>
                    <span className="font-mono text-slate-300">
                      {formatStudyDuration(secs)} ({perc}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                      style={{ width: `${perc}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnóstico Pedagógico de Equilíbrio */}
          <div className="mt-4 p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-xs flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-slate-300 space-y-1">
              <span className="font-bold text-white">Diagnóstico Pedagógico do Período:</span>
              {periodMetrics.totalSeconds === 0 ? (
                <p>Nenhuma sessão contabilizada neste período ainda. Selecione um tópico no <em>Foco de Hoje</em> e inicie o cronômetro para movimentar suas métricas!</p>
              ) : periodMetrics.tagSecondsMap['Português Base'] === 0 && periodMetrics.totalSeconds > 3600 ? (
                <p className="text-amber-300">💡 <strong>Atenção:</strong> Português Base ainda não recebeu sessões neste período. Considere reservar um bloco de 25m para morfologia/fonética.</p>
              ) : (
                <p className="text-emerald-300">✨ Excelente engajamento! Carga horária ativa distribuída entre suas metas principais.</p>
              )}
            </div>
          </div>
        </section>

        {/* Histórico / Log de Sessões Recentes no Período */}
        <section aria-labelledby="sessions-log-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="sessions-log-heading" className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              Sessões Registradas ({periodLabel})
            </h2>
            <span className="text-xs text-slate-400">
              {periodMetrics.recentLogs.length} sessões listadas
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Registro cronometrado com precisão temporal gerado pelo motor de estudo.
          </p>

          <div className="space-y-2 max-h-[310px] overflow-y-auto pr-1">
            {periodMetrics.recentLogs.length === 0 ? (
              <div className="text-center py-10 bg-slate-950 rounded-2xl border border-slate-800 p-4">
                <Clock className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                <p className="text-xs text-slate-400 font-medium">Nenhuma sessão registrada neste período.</p>
                <p className="text-[11px] text-slate-600 mt-1">Ao estudar com o cronômetro ativo, os blocos de estudo aparecem aqui automaticamente.</p>
              </div>
            ) : (
              periodMetrics.recentLogs.map((log) => (
                <div 
                  key={log.id} 
                  className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80 flex items-center justify-between text-xs hover:border-slate-700 transition-all"
                >
                  <div className="space-y-0.5 min-w-0 pr-2">
                    <div className="font-semibold text-white truncate">
                      {log.targetTitle}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span className="font-mono text-emerald-400">{log.dateStr}</span>
                      <span>•</span>
                      <span className="truncate">
                        {log.type === 'english' ? 'Inglês' : (log.origem?.[0] || 'Tópico')}
                      </span>
                    </div>
                  </div>
                  <div className="font-mono font-bold text-emerald-400 bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800 shrink-0">
                    {formatStudyDuration(log.secondsStudied)}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

      </div>

      {/* ============================================================== */}
      {/* EVOLUÇÃO GLOBAL DAS TRILHAS DO EDITAL & MBA                    */}
      {/* ============================================================== */}
      <section aria-labelledby="stats-streams-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 id="stats-streams-heading" className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              Evolução Global por Trilha de Aprendizado (Acumulado)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Progresso total do plano de estudos consolidado desde o início
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              <strong className="text-amber-400 font-bold">{mastered}</strong> dominados
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold">
              {completed}/{total} itens ({percentGeneral}%)
            </span>
          </div>
        </div>

        <div className="space-y-4">
          
          {/* Matemática Base */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-amber-300">
                📐 Matemática Base (Módulos 01 a 06 do Google Drive)
              </span>
              <span className="font-mono text-amber-400">{mathStats.completed}/{mathStats.total} ({mathStats.percent}%)</span>
            </div>
            <div 
              className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800"
              role="progressbar"
              aria-valuenow={mathStats.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${mathStats.percent}%` }} />
            </div>
          </div>

          {/* Português Base */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-blue-300">
                📝 Português Base (Fonética, Acentuação, Morfologia e Texto)
              </span>
              <span className="font-mono text-blue-400">{portStats.completed}/{portStats.total} ({portStats.percent}%)</span>
            </div>
            <div 
              className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800"
              role="progressbar"
              aria-valuenow={portStats.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${portStats.percent}%` }} />
            </div>
          </div>

          {/* Ciências da Natureza */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-teal-300">
                🧪 Ciências da Natureza (Física, Química & Biologia)
              </span>
              <span className="font-mono text-teal-400">{natureStats.completed}/{natureStats.total} ({natureStats.percent}%)</span>
            </div>
            <div 
              className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800"
              role="progressbar"
              aria-valuenow={natureStats.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="bg-teal-500 h-full rounded-full transition-all duration-500" style={{ width: `${natureStats.percent}%` }} />
            </div>
          </div>

          {/* MBA */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-purple-300">
                🎓 MBA Ciência de Dados & Analytics Avançados
              </span>
              <span className="font-mono text-purple-400">{mbaStats.completed}/{mbaStats.total} ({mbaStats.percent}%)</span>
            </div>
            <div 
              className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800"
              role="progressbar"
              aria-valuenow={mbaStats.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${mbaStats.percent}%` }} />
            </div>
          </div>

          {/* Concurso */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-300">
                🏛️ Concurso Público (TI & Conhecimentos Específicos)
              </span>
              <span className="font-mono text-emerald-400">{concursoStats.completed}/{concursoStats.total} ({concursoStats.percent}%)</span>
            </div>
            <div 
              className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800"
              role="progressbar"
              aria-valuenow={concursoStats.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${concursoStats.percent}%` }} />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
