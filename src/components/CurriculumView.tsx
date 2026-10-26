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
  GitFork,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Compass,
  Crosshair
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
  const [showPortugueseLineageMap, setShowPortugueseLineageMap] = useState<boolean>(true);

  // Unique disciplines filtered by selected Trilha
  const disciplinas = useMemo(() => {
    const base = selectedTag === 'TODAS'
      ? topics
      : topics.filter(t => t.origem && t.origem.includes(selectedTag as StudyContextTag));
    const list = Array.from(new Set(base.map(t => t.disciplina)));
    return ['TODAS', ...list];
  }, [topics, selectedTag]);

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
      <section aria-labelledby="curriculum-filters-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xl">
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

        {/* Quick Trilha Filter Pills (Horizontal scrollable on mobile) */}
        <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar whitespace-nowrap" role="group" aria-label="Filtrar por Trilha">
          <span className="text-[11px] font-semibold text-slate-300 mr-1 uppercase tracking-wider flex-shrink-0">
            Trilha:
          </span>
          {[
            { id: 'TODAS', label: 'Todas' },
            { id: 'MBA', label: '🎓 MBA Dados' },
            { id: 'Matemática Base', label: '📐 Matemática' },
            { id: 'Português Base', label: '📝 Português' },
            { id: 'Ciências da Natureza', label: '🧪 Ciências da Natureza' },
            { id: 'Leitura / Livro', label: '📖 Livros' },
            { id: 'Concurso', label: '🏛️ Concurso' },
          ].map(tag => (
            <button
              key={tag.id}
              onClick={() => {
                setSelectedTag(tag.id);
                setSelectedDisciplina('TODAS');
              }}
              aria-pressed={selectedTag === tag.id}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
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
              <option value="Em Exercícios">📝 Em Exercícios</option>
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

      {/* Mapa da Linhagem de Aprendizagem de Língua Portuguesa */}
      {(selectedTag === 'Português Base' || selectedDisciplina === 'Língua Portuguesa') && (
        <section
          aria-labelledby="pt-lineage-heading"
          className="bg-slate-900/95 border border-blue-500/30 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4"
        >
          <div className="flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-blue-500/15 text-blue-300 border border-blue-500/30">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 id="pt-lineage-heading" className="text-sm sm:text-base font-bold text-white">
                  Fundação do Prédio: Linhagem de Aprendizagem de Língua Portuguesa
                </h2>
                <p className="text-xs text-slate-300">
                  Do micro ao macro (Adição → Multiplicação → Potenciação): como um nível deságua obrigatoriamente no outro até a Tipologia Textual.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowPortugueseLineageMap(prev => !prev)}
              aria-expanded={showPortugueseLineageMap}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-950 text-slate-200 border border-slate-800 hover:bg-slate-800 transition flex items-center gap-1.5 flex-shrink-0"
            >
              <span>{showPortugueseLineageMap ? 'Ocultar Mapa' : 'Ver Mapa'}</span>
              {showPortugueseLineageMap ? (
                <ChevronUp className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>

          {showPortugueseLineageMap && (
            <div className="space-y-4 pt-2 border-t border-slate-800/80">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Nível 1 */}
                <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                      Nível 1 • Os Tijolos
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold">⭐ Dominado</span>
                  </div>
                  <h3 className="text-xs font-bold text-white">Fonética e Ortografia</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trilha:</strong> Fonemas e Letras (ex.: <em>&quot;am&quot;</em> em <em>tampa</em> = dígrafo) → Encontros → Separação Silábica → Tonicidade → Regras de Acentuação.
                  </p>
                  <div className="text-[11px] text-amber-200/90 bg-amber-950/30 border border-amber-500/20 rounded-xl p-2">
                    <strong>Ponte p/ Nível 2:</strong> O som e a escrita garantem a identidade da palavra. Sem acento muda o sentido e a classe (<em>sábia</em> [adjetivo] vs. <em>sabia</em> [verbo]).
                  </div>
                </div>

                {/* Nível 2 */}
                <div className="bg-slate-950/80 border border-sky-500/40 rounded-2xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-500/15 px-2 py-0.5 rounded-md border border-sky-500/30">
                      Nível 2 • As Peças
                    </span>
                    <span className="text-[11px] text-sky-300 font-semibold">🚀 Foco Atual</span>
                  </div>
                  <h3 className="text-xs font-bold text-white">A Função das Peças (Morfologia)</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trilha:</strong> Substantivos e Adjetivos → Verbos (ações, tempos e modos) → Pronomes (substituem nomes) → Conjunções e Preposições (conectores).
                  </p>
                  <div className="text-[11px] text-sky-200/90 bg-sky-950/30 border border-sky-500/20 rounded-xl p-2">
                    <strong>Ponte p/ Nível 3:</strong> O verbo é o motor da frase. Dominar pronomes relativos (<em>que, o qual</em>) e conjunções impede que a análise sintática pareça adivinhação.
                  </div>
                </div>

                {/* Nível 3 */}
                <div className="bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded-md border border-indigo-500/30">
                      Nível 3 • As Vigas
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">🔒 Aguarda Nível 2</span>
                  </div>
                  <h3 className="text-xs font-bold text-white">A Estrutura em Movimento (Sintaxe)</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trilha:</strong> Achar o Verbo → Sujeito e Predicado → Transitividade → Complementos (OD/OI) → Período Composto (Coordenadas e Subordinadas).
                  </p>
                  <div className="text-[11px] text-indigo-200/90 bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-2">
                    <strong>Ponte p/ Nível 4:</strong> É a multiplicação acontecendo: usar a conjunção <em>&quot;embora&quot;</em> (Nível 2) para criar uma oração subordinada concessiva que dá fluidez ao texto.
                  </div>
                </div>

                {/* Nível 4 */}
                <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      Nível 4 • O Telhado
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">⏸️ Topo da Pirâmide</span>
                  </div>
                  <h3 className="text-xs font-bold text-white">A Obra Completa (Texto e Tipologia)</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <strong>Trilha:</strong> Coesão Referencial (pronomes) → Coesão Sequencial (conjunções) → Semântica e Figuras → Tipologia Textual.
                  </p>
                  <div className="text-[11px] text-emerald-200/90 bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-2">
                    <strong>Linhagem Completa:</strong> Texto <em>Descritivo</em> = abundância de adjetivos e verbos de estado; <em>Dissertativo</em> = orações subordinadas amarradas por conjunções e pronomes.
                  </div>
                </div>
              </div>

              {/* Estratégias Práticas de Rotina */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-slate-950/90 border border-rose-500/25 rounded-2xl p-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-rose-500/15 text-rose-300 border border-rose-500/30 flex-shrink-0">
                    <Crosshair className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white">1. Auditoria Cirúrgica de Erros (Caminho Inverso)</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Ao errar uma questão de interpretação/tipologia, faça o caminho inverso no <strong>Caderno de Erros</strong>: a falha foi na intenção geral do autor (Nível 4), na conexão sintática entre duas frases (Nível 3), no desconhecimento de uma conjunção/pronome (Nível 2) ou em leitura precipitada (Nível 1)? Anote apenas o gatilho exato.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950/90 border border-emerald-500/25 rounded-2xl p-3.5 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex-shrink-0">
                    <Compass className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white">2. Domínio Progressivo de Conectores (Google Keep)</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Separe minutos diários para dominar famílias específicas de <strong>pronomes</strong> e <strong>conjunções</strong> (causais, concessivas, adversativas, conclusivas). Eles são o verdadeiro passaporte entre a Morfologia (Nível 2) e a Interpretação de Textos (Nível 4).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

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

                    {topic.linkMaterial && (
                      <div>
                        <a
                          href={topic.linkMaterial}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 transition shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Abrir Anotação no Google Docs</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Actions (Responsive Grid on Mobile) */}
                  <div className="grid grid-cols-4 gap-1.5 pt-2.5 sm:pt-0 sm:flex sm:items-center sm:gap-1.5 w-full sm:w-auto border-t sm:border-t-0 border-slate-800/80">
                    
                    {/* Schedule for Today */}
                    <button
                      onClick={() => scheduleForToday(topic.id)}
                      className="text-xs bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                      title="Agendar para a fila de estudo de hoje"
                      aria-label={`Agendar ${topic.microtopico} para hoje`}
                    >
                      <span className="text-emerald-400 font-bold">+</span>
                      <span className="text-[11px] sm:text-xs">Hoje</span>
                    </button>

                    {/* Reschedule */}
                    <button
                      onClick={() => rescheduleTopic(topic.id, 2)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                      title="Reagendar para daqui a 2 dias"
                      aria-label={`Reagendar ${topic.microtopico} para daqui a 2 dias`}
                    >
                      <FastForward className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">+2 dias</span>
                    </button>

                    {/* Mark as Mastered */}
                    {!isMastered ? (
                      <button
                        onClick={() => markAsMastered(topic.id)}
                        className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 sm:px-2.5 py-2 sm:py-1.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                        title="Marcar como Dominado"
                        aria-label={`Marcar ${topic.microtopico} como dominado`}
                      >
                        <Award className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="text-[11px] sm:text-xs">Dominar</span>
                      </button>
                    ) : (
                      <div className="text-[11px] text-amber-400 flex items-center justify-center font-medium bg-amber-500/10 rounded-lg border border-amber-500/20 py-2 sm:py-1.5">
                        ⭐ Feito
                      </div>
                    )}

                    {/* Edit Modal */}
                    <button
                      onClick={() => setSelectedTopicForModal(topic)}
                      className="text-xs bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white px-2 sm:px-3 py-2 sm:py-1.5 rounded-lg border border-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex flex-col sm:flex-row items-center justify-center gap-1"
                      aria-label={`Editar anotações e status de ${topic.microtopico}`}
                    >
                      <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs">Editar</span>
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
