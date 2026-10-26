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

      {/* Mapa Dinâmico da Linhagem de Aprendizagem (Nível 1 → Nível 4) para todas as disciplinas */}
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
                Fundação do Prédio: Linhagem de Aprendizagem ({selectedDisciplina !== 'TODAS' ? selectedDisciplina : selectedTag !== 'TODAS' ? selectedTag : 'Visão Geral Multidisciplinar'})
              </h2>
              <p className="text-xs text-slate-300">
                Do micro ao macro (Adição → Multiplicação → Potenciação): nenhum telhado é levantado antes de consolidar os tijolos e as vigas.
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
              {[
                {
                  level: 1,
                  badge: 'Nível 1 • Os Tijolos',
                  title: 'Identidade e Fundamentos (A Adição)',
                  desc: 'Unidades atômicas: Fonética/Ortografia (Português), Aritmética/Conjuntos (Mat/RLM), MER/DER e Formas Normais (BD), Big-O e Estruturas (Dev), CIDA/Criptografia (Segurança), ISO 38500 (Gov).',
                  bridge: 'Garante a leitura correta da peça isolada antes de combiná-la.',
                  border: 'border-amber-500/30',
                  pill: 'text-amber-300 bg-amber-500/15 border-amber-500/30',
                  box: 'text-amber-200/90 bg-amber-950/30 border-amber-500/20',
                },
                {
                  level: 2,
                  badge: 'Nível 2 • As Peças',
                  title: 'A Função das Peças (Vocabulário Operacional)',
                  desc: 'Morfologia: Verbos/Pronomes/Conjunções (Português), Polinômios/Combinatória (Mat/RLM), SQL DDL/DML/JOINs (BD), POO/Funcional/Python (Dev), UML/BPMN (Eng), COBIT/ITIL/PMBOK (Gov).',
                  bridge: 'Dominar o papel de cada peça evita que a próxima etapa pareça adivinhação.',
                  border: 'border-sky-500/40',
                  pill: 'text-sky-300 bg-sky-500/15 border-sky-500/30',
                  box: 'text-sky-200/90 bg-sky-950/30 border-sky-500/20',
                },
                {
                  level: 3,
                  badge: 'Nível 3 • As Vigas',
                  title: 'A Estrutura em Movimento (A Multiplicação)',
                  desc: 'Sintaxe e Período Composto (Português), Equações/Proposições/Equivalências (Mat/RLM), Transações ACID e Índices (BD), HTTP/REST/SOLID (Dev/Eng), K8s/Zero Trust (Infra/Seg), Lei 14.133 e RAG (Gov/IA).',
                  bridge: 'Conecta as peças do Nível 2 em sistemas, orações e arquiteturas vivas.',
                  border: 'border-indigo-500/30',
                  pill: 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30',
                  box: 'text-indigo-200/90 bg-indigo-950/30 border-indigo-500/20',
                },
                {
                  level: 4,
                  badge: 'Nível 4 • O Telhado',
                  title: 'A Obra Completa (A Potenciação)',
                  desc: 'Coesão e Tipologia Textual (Português), Geometria Dedutiva e Argumentos (Mat/RLM), NoSQL e Bancos Vetoriais HNSW (BD), OAuth2/JWT, TDD, DevSecOps, MCP e Estudos de Caso Discursivos FCC.',
                  bridge: 'Topo da pirâmide: aplicação integrada de todos os níveis anteriores em provas de alto nível.',
                  border: 'border-emerald-500/30',
                  pill: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
                  box: 'text-emerald-200/90 bg-emerald-950/30 border-emerald-500/20',
                },
              ].map(card => {
                const levelTopics = filteredTopics.filter(t => t.macrotema.startsWith(`Nível ${card.level}`));
                const doneCount = levelTopics.filter(t => t.status === 'Dominado' || t.status === 'Teoria Concluída').length;
                return (
                  <div key={card.level} className={`bg-slate-950/80 border ${card.border} rounded-2xl p-3.5 space-y-2 flex flex-col justify-between`}>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${card.pill}`}>
                          {card.badge}
                        </span>
                        <span className="text-[11px] text-slate-300 font-semibold">
                          {doneCount}/{levelTopics.length} concluídos
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-white">{card.title}</h3>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className={`text-[11px] border rounded-xl p-2 ${card.box}`}>
                      <strong>Ponte Hierárquica:</strong> {card.bridge}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Estratégias Práticas de Rotina */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-950/90 border border-rose-500/25 rounded-2xl p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-rose-500/15 text-rose-300 border border-rose-500/30 flex-shrink-0">
                  <Crosshair className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">1. Auditoria Cirúrgica de Erros (Caminho Inverso: Nível 4 → Nível 1)</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Ao errar uma questão complexa, faça o caminho inverso no <strong>Caderno de Erros</strong>: a falha foi na visão sistêmica/arquitetura (Nível 4), na regra de conexão/sintaxe/transação (Nível 3), no desconhecimento de uma peça/comando/conector (Nível 2) ou em leitura precipitada do tijolo básico (Nível 1)?
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-emerald-500/25 rounded-2xl p-3.5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex-shrink-0">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">2. Destravamento de Pontes (Do Micro ao Macro)</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Use o filtro <strong>🟢 Prontos para Aprender</strong> acima para focar exclusivamente nas peças de Nível 1 e Nível 2 que já têm seus pré-requisitos cumpridos e que possuem o maior poder de destravamento (<em>Destrava X tópicos</em>).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
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
