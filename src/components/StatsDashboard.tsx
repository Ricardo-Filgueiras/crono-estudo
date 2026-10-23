import React from 'react';
import { useStudy } from '../context/StudyContext';
import { BarChart3, Award, Flame, Target, Layers } from 'lucide-react';

export const StatsDashboard: React.FC = () => {
  const { topics, errors } = useStudy();

  const total = topics.length;
  const completed = topics.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
  const mastered = topics.filter(t => t.status === 'Dominado').length;
  const percentGeneral = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Group by Trilha / Context
  const getTagStats = (tagName: string) => {
    const list = topics.filter(t => t.origem && t.origem.includes(tagName as any));
    const done = list.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
    const perc = list.length > 0 ? Math.round((done / list.length) * 100) : 0;
    return { total: list.length, completed: done, percent: perc };
  };

  const mbaStats = getTagStats('MBA');
  const mathStats = getTagStats('Matemática Base');
  const portStats = getTagStats('Português Base');
  const concursoStats = getTagStats('Concurso');

  return (
    <div className="space-y-6">
      
      {/* Top Metric Cards */}
      <section aria-label="Indicadores Globais de Estudo" className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-300 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total em Aprendizado</span>
            <Target className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {percentGeneral}%
          </div>
          <p className="text-xs text-slate-300 mt-1">
            {completed} de {total} itens concluídos
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-300 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Bagagem Prévia / Dominados</span>
            <Award className="w-4 h-4 text-amber-400" aria-hidden="true" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            {mastered}
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Matérias consolidadas
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-300 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">MBA Ciência de Dados</span>
            <Layers className="w-4 h-4 text-purple-400" aria-hidden="true" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">
            {mbaStats.percent}%
          </div>
          <p className="text-xs text-slate-300 mt-1">
            {mbaStats.completed}/{mbaStats.total} tópicos do MBA
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between text-slate-300 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Caderno de Erros</span>
            <Flame className="w-4 h-4 text-rose-400" aria-hidden="true" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-400">
            {errors.length}
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Pegadinhas mapeadas
          </p>
        </div>

      </section>

      {/* Progress by Streams / Trilhas */}
      <section aria-labelledby="stats-streams-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <h2 id="stats-streams-heading" className="text-base font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          Evolução por Trilha de Aprendizado
        </h2>

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
              aria-label="Progresso da trilha Matemática Base"
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
              aria-label="Progresso da trilha Português Base"
            >
              <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: `${portStats.percent}%` }} />
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
              aria-label="Progresso da trilha MBA Ciência de Dados"
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
              aria-label="Progresso da trilha Concurso Público"
            >
              <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${concursoStats.percent}%` }} />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
