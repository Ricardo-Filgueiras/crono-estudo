import React, { useState, useMemo } from 'react';
import { useStudy } from '../context/StudyContext';
import { StudyContextTag } from '../types';
import { 
  Search, 
  Award, 
  FastForward, 
  Edit3,
  BookmarkCheck,
  Lock,
  GitFork
} from 'lucide-react';

export const CurriculumView: React.FC = () => {
  const { 
    topics, 
    markAsMastered, 
    rescheduleTopic, 
    scheduleForToday, 
    setSelectedTopicForModal,
    getTopicPedagogicalStatus,
    getTopicUnmetPrerequisites,
    getTopicUnlockCount
  } = useStudy();

  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('TODAS');
  const [selectedStatus, setSelectedStatus] = useState<string>('TODOS');
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>('TODAS');

  // Unique disciplines
  const disciplinas = useMemo(() => {
    const list = Array.from(new Set(topics.map(t => t.disciplina)));
    return ['TODAS', ...list];
  }, [topics]);

  // Filtered topics
  const filteredTopics = useMemo(() => {
    return topics.filter(t => {
      if (selectedTag !== 'TODAS') {
        if (!t.origem || !t.origem.includes(selectedTag as StudyContextTag)) return false;
      }
      if (selectedDisciplina !== 'TODAS' && t.disciplina !== selectedDisciplina) return false;

      const pedStatus = getTopicPedagogicalStatus(t);

      if (selectedStatus !== 'TODOS') {
        if (selectedStatus === 'DISPONIVEL' && (t.status === 'Dominado' || pedStatus !== 'Disponível')) return false;
        if (selectedStatus === 'BLOQUEADO' && pedStatus !== 'Bloqueado') return false;
        if (selectedStatus !== 'DISPONIVEL' && selectedStatus !== 'BLOQUEADO' && t.status !== selectedStatus) return false;
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        const inMicro = t.microtopico.toLowerCase().includes(q);
        const inMacro = t.macrotema.toLowerCase().includes(q);
        const inDisc = t.disciplina.toLowerCase().includes(q);
        const inNotes = (t.anotacoes || '').toLowerCase().includes(q);
        return inMicro || inMacro || inDisc || inNotes;
      }
      return true;
    });
  }, [topics, selectedTag, selectedDisciplina, selectedStatus, search, getTopicPedagogicalStatus]);

  const completedFiltered = filteredTopics.filter(t => t.status === 'Teoria Concluída' || t.status === 'Dominado' || t.status === 'Em Exercícios').length;
  const percentFiltered = filteredTopics.length > 0 ? Math.round((completedFiltered / filteredTopics.length) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Header */}
      <section aria-labelledby="curriculum-filters-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <h2 id="curriculum-filters-heading" className="sr-only">Filtros e Busca do Edital</h2>
        
        {/* Search bar */}
        <div>
          <label htmlFor="curriculum-search" className="sr-only">
            Pesquisar por assunto ou palavra-chave
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" aria-hidden="true" />
            <input
              id="curriculum-search"
              type="search"
              placeholder="Pesquisar por assunto, disciplina do MBA ou tópico de matemática (ex: SQL, Spark, recursão, polinômios, crase)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Quick Trilha Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1" role="group" aria-label="Filtrar por Trilha">
          <span className="text-[11px] font-semibold text-slate-300 mr-2 uppercase tracking-wider">
            Filtrar por Trilha:
          </span>
          {[
            { id: 'TODAS', label: 'Todas as Trilhas' },
            { id: 'MBA', label: '🎓 MBA Ciência de Dados' },
            { id: 'Matemática Base', label: '📐 Matemática Base' },
            { id: 'Português Base', label: '📝 Português Base' },
            { id: 'Leitura / Livro', label: '📖 Livros & Leituras' },
            { id: 'Concurso', label: '🏛️ Concurso Público' },
          ].map(tag => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              aria-pressed={selectedTag === tag.id}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedTag === tag.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Additional Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/60">
          
          {/* Disciplina */}
          <div>
            <label htmlFor="filter-disciplina" className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Disciplina Específica
            </label>
            <select
              id="filter-disciplina"
              value={selectedDisciplina}
              onChange={e => setSelectedDisciplina(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500"
            >
              {disciplinas.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="filter-status" className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Status Conceitual / Dependências
            </label>
            <select
              id="filter-status"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500"
            >
              <option value="TODOS">Todos os Conteúdos</option>
              <option value="DISPONIVEL">🟢 Prontos para Aprender (Pré-requisitos dominados)</option>
              <option value="BLOQUEADO">🔒 Bloqueados por Pré-requisitos pendentes</option>
              <option value="Dominado">⭐ Dominados (Bagagem Prévia)</option>
              <option value="Em Andamento">🚀 Em Andamento</option>
              <option value="Teoria Concluída">📖 Teoria Concluída</option>
              <option value="Pendente">⏳ Pendente</option>
              <option value="Precisa Revisar">⚠️ Precisa Revisar</option>
            </select>
          </div>

        </div>

        {/* Progress pill for filtered items */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300" aria-live="polite">
          <div>
            Exibindo <strong className="text-white">{filteredTopics.length}</strong> tópicos • <span className="text-emerald-400 font-medium">{completedFiltered} concluídos ({percentFiltered}%)</span>
          </div>
          <div className="w-36 bg-slate-800 h-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={percentFiltered} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso dos tópicos filtrados">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${percentFiltered}%` }}
            />
          </div>
        </div>

      </section>

      {/* Topics list */}
      <section aria-label="Lista de Tópicos do Edital" className="space-y-3">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-300 text-sm">Nenhum tópico encontrado para esses filtros.</p>
          </div>
        ) : (
          filteredTopics.map(topic => {
            const isCompleted = topic.status === 'Teoria Concluída' || topic.status === 'Dominado';
            const isMastered = topic.status === 'Dominado';
            const isSharedMBA = topic.origem && topic.origem.includes('MBA') && topic.origem.includes('Concurso');

            const pedStatus = getTopicPedagogicalStatus(topic);
            const unmetPrereqs = getTopicUnmetPrerequisites(topic);
            const isBlocked = pedStatus === 'Bloqueado';
            const unlockPower = getTopicUnlockCount(topic.id);

            return (
              <article
                key={topic.id}
                className={`bg-slate-900 border rounded-2xl p-4 sm:p-5 transition hover:border-slate-700 shadow-sm space-y-3 ${
                  isMastered
                    ? 'border-amber-500/30 bg-amber-950/10'
                    : isBlocked
                    ? 'border-amber-500/30 bg-slate-900/60'
                    : isCompleted
                    ? 'border-emerald-500/20 bg-slate-900/90'
                    : 'border-slate-800'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Topic content */}
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

                      <span className="text-xs text-slate-300 font-medium ml-1">{topic.disciplina}</span>
                      {topic.macrotema && <span className="text-xs text-slate-400">• {topic.macrotema}</span>}
                      
                      {/* Status indicator */}
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ml-auto md:ml-0 ${
                        isMastered
                          ? 'bg-amber-500/20 text-amber-300'
                          : topic.status === 'Teoria Concluída'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : topic.status === 'Em Andamento'
                          ? 'bg-sky-500/20 text-sky-300'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {isMastered ? '⭐ Dominado' : topic.status}
                      </span>

                      {/* Unlock Potential Pill */}
                      {unlockPower > 0 && !isMastered && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1" title={`Este conceito é pré-requisito para outros ${unlockPower} conteúdos`}>
                          <GitFork className="w-3 h-3" aria-hidden="true" />
                          <span>Destrava {unlockPower} tópicos</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-2">
                      {isBlocked && (
                        <span title="Bloqueado por pré-requisitos pendentes" className="inline-flex">
                          <Lock className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                        </span>
                      )}
                      <span>{topic.microtopico}</span>
                    </h3>

                    {topic.anotacoes && (
                      <p className="text-xs text-slate-300 font-mono bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                        <strong className="text-emerald-400">Nota: </strong>{topic.anotacoes}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                    
                    {/* Schedule for Today */}
                    <button
                      onClick={() => scheduleForToday(topic.id)}
                      className="text-xs bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                      title="Agendar para a fila de estudo de hoje"
                      aria-label={`Agendar ${topic.microtopico} para hoje`}
                    >
                      + Hoje
                    </button>

                    {/* Reschedule */}
                    <button
                      onClick={() => rescheduleTopic(topic.id, 2)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition"
                      title="Reagendar para daqui a 2 dias"
                      aria-label={`Reagendar ${topic.microtopico} para daqui a 2 dias`}
                    >
                      <FastForward className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                    </button>

                    {/* Mark as Mastered */}
                    {!isMastered && (
                      <button
                        onClick={() => markAsMastered(topic.id)}
                        className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition"
                        title="Marcar como Dominado"
                        aria-label={`Marcar ${topic.microtopico} como dominado`}
                      >
                        <Award className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}

                    {/* Edit Modal */}
                    <button
                      onClick={() => setSelectedTopicForModal(topic)}
                      className="text-xs bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white px-3 py-1.5 rounded-lg border border-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex items-center gap-1"
                      aria-label={`Editar anotações e status de ${topic.microtopico}`}
                    >
                      <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Editar</span>
                    </button>

                  </div>

                </div>

                {/* Unmet Prerequisites Note */}
                {isBlocked && unmetPrereqs.length > 0 && (
                  <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-2.5 text-xs text-amber-300 flex items-start gap-2">
                    <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-[11px]">
                      <span className="font-semibold text-amber-200">Requer antes: </span>
                      {unmetPrereqs.map(p => p.microtopico).join(' • ')}
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </section>

    </div>
  );
};
