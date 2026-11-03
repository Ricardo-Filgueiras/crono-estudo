import React, { useState, useEffect, useMemo } from 'react';
import { useStudy, getTodayDateString, formatDateBR } from '../context/StudyContext';
import { ErrorItem } from '../types';
import { Plus, Trash2, ShieldAlert, Sparkles, X, Edit3, Search } from 'lucide-react';

export const ErrorNotebook: React.FC = () => {
  const { errors, topics, addError, updateError, deleteError } = useStudy();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingErrorId, setEditingErrorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDisciplina, setFilterDisciplina] = useState('TODAS');

  // Form state
  const [disciplina, setDisciplina] = useState('Língua Portuguesa');
  const [microtopico, setMicrotopico] = useState('');
  const [idQuestao, setIdQuestao] = useState('');
  const [enunciado, setEnunciado] = useState('');
  const [alternativaMarcada, setAlternativaMarcada] = useState('');
  const [gabaritoCorreto, setGabaritoCorreto] = useState('');
  const [classificacaoErro, setClassificacaoErro] = useState('Pegadinha de Enunciado');
  const [licaoAprendida, setLicaoAprendida] = useState('');

  const availableDisciplinas = useMemo(() => {
    const fromTopics = topics.map(t => t.disciplina);
    const fromErrors = errors.map(e => e.disciplina);
    return Array.from(new Set([...fromTopics, ...fromErrors]));
  }, [topics, errors]);

  const filteredErrors = useMemo(() => {
    return errors.filter(err => {
      if (filterDisciplina !== 'TODAS' && err.disciplina !== filterDisciplina) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          err.microtopico.toLowerCase().includes(q) ||
          err.disciplina.toLowerCase().includes(q) ||
          err.licaoAprendida.toLowerCase().includes(q) ||
          err.enunciado.toLowerCase().includes(q) ||
          err.idQuestao.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [errors, filterDisciplina, searchQuery]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showAddModal) {
        setShowAddModal(false);
        setEditingErrorId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAddModal]);

  const openNewErrorModal = () => {
    setEditingErrorId(null);
    setDisciplina('Língua Portuguesa');
    setMicrotopico('');
    setIdQuestao('');
    setEnunciado('');
    setAlternativaMarcada('');
    setGabaritoCorreto('');
    setClassificacaoErro('Pegadinha de Enunciado');
    setLicaoAprendida('');
    setShowAddModal(true);
  };

  const openEditErrorModal = (item: ErrorItem) => {
    setEditingErrorId(item.id);
    setDisciplina(item.disciplina);
    setMicrotopico(item.microtopico);
    setIdQuestao(item.idQuestao);
    setEnunciado(item.enunciado);
    setAlternativaMarcada(item.alternativaMarcada);
    setGabaritoCorreto(item.gabaritoCorreto);
    setClassificacaoErro(item.classificacaoErro);
    setLicaoAprendida(item.licaoAprendida);
    setShowAddModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!microtopico || !licaoAprendida) {
      alert('Preencha pelo menos o microtópico e a lição aprendida.');
      return;
    }

    if (editingErrorId) {
      updateError(editingErrorId, {
        disciplina,
        microtopico,
        idQuestao: idQuestao || 'FCC-QUESTÃO',
        enunciado: enunciado || microtopico,
        alternativaMarcada: alternativaMarcada || 'B',
        gabaritoCorreto: gabaritoCorreto || 'A',
        classificacaoErro,
        licaoAprendida
      });
    } else {
      addError({
        data: getTodayDateString(),
        disciplina,
        microtopico,
        idQuestao: idQuestao || 'FCC-QUESTÃO',
        enunciado: enunciado || microtopico,
        alternativaMarcada: alternativaMarcada || 'B',
        gabaritoCorreto: gabaritoCorreto || 'A',
        classificacaoErro,
        licaoAprendida
      });
    }

    setShowAddModal(false);
    setEditingErrorId(null);
    setMicrotopico('');
    setIdQuestao('');
    setEnunciado('');
    setLicaoAprendida('');
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <section aria-labelledby="error-notebook-heading" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20" aria-hidden="true">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 id="error-notebook-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Caderno de Erros & Pegadinhas da FCC
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Mapeie exatamente onde a banca tentou te enganar para nunca mais errar na hora da prova.
            </p>
          </div>
        </div>

        <button
          onClick={openNewErrorModal}
          aria-label="Registrar nova questão com erro no caderno"
          className="bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-rose-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition flex items-center gap-2 whitespace-nowrap self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          <span>Registrar Questão / Erro</span>
        </button>
      </section>

      {/* Barra de Busca e Filtro por Disciplina */}
      <section aria-label="Busca e filtro do caderno de erros" className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar erro por assunto, código da questão ou lição aprendida..."
            aria-label="Buscar erro no caderno"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>
        <select
          value={filterDisciplina}
          onChange={e => setFilterDisciplina(e.target.value)}
          aria-label="Filtrar erros por disciplina"
          className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
        >
          <option value="TODAS">Todas as Disciplinas ({errors.length})</option>
          {Array.from(new Set(errors.map(e => e.disciplina))).map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </section>

      {/* Protocolo de Auditoria Cirúrgica de Erros (Caminho Inverso) */}
      <section aria-label="Protocolo de Auditoria Cirúrgica de Erros" className="bg-slate-900/90 border border-rose-500/25 rounded-2xl p-4 shadow-md space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xs sm:text-sm font-bold text-rose-300 uppercase tracking-wider">
            🔍 Protocolo de Auditoria Cirúrgica de Erros (Caminho Inverso: Nível 4 → Nível 1)
          </h3>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Anote apenas o gatilho exato do erro</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
            <strong className="text-emerald-300 block mb-0.5">Nível 4 • Obra Completa (Texto)</strong>
            <span className="text-slate-300 text-[11px]">Falha na compreensão da intenção geral do autor ou tipologia textual?</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
            <strong className="text-indigo-300 block mb-0.5">Nível 3 • Vigas (Sintaxe)</strong>
            <span className="text-slate-300 text-[11px]">Falha na conexão lógica entre duas frases, sujeito/verbo ou orações subordinadas?</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
            <strong className="text-sky-300 block mb-0.5">Nível 2 • Peças (Morfologia)</strong>
            <span className="text-slate-300 text-[11px]">Desconhecimento do valor de uma conjunção, pronome relativo ou tempo verbal?</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5">
            <strong className="text-amber-300 block mb-0.5">Nível 1 • Tijolos (Leitura/Som)</strong>
            <span className="text-slate-300 text-[11px]">Leitura precipitada, troca de palavra parecida ou perda de acento diferencial?</span>
          </div>
        </div>
      </section>

      {/* List of mapped errors */}
      <section aria-label="Erros mapeados da FCC" className="space-y-4">
        {filteredErrors.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-300">Nenhum erro encontrado para esse filtro.</p>
          </div>
        ) : (
          filteredErrors.map(item => (
            <article
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    {item.disciplina}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    {item.idQuestao}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {formatDateBR(item.data)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 font-medium">
                    {item.classificacaoErro}
                  </span>
                  <button
                    onClick={() => openEditErrorModal(item)}
                    aria-label={`Editar erro de ${item.microtopico} (${item.idQuestao})`}
                    className="text-slate-400 hover:text-emerald-400 p-1.5 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                    title="Editar erro"
                  >
                    <Edit3 className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => deleteError(item.id)}
                    aria-label={`Excluir erro de ${item.microtopico} (${item.idQuestao})`}
                    className="text-slate-400 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition"
                    title="Excluir item"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {item.microtopico}
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  {item.enunciado}
                </p>
              </div>

              {/* Alternatives comparison */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="bg-rose-950/40 border border-rose-900/50 px-3 py-1.5 rounded-lg text-rose-300">
                  Marcada: <strong>{item.alternativaMarcada}</strong> (Errado)
                </div>
                <div className="bg-emerald-950/40 border border-emerald-900/50 px-3 py-1.5 rounded-lg text-emerald-300">
                  Gabarito FCC: <strong>{item.gabaritoCorreto}</strong> (Correto)
                </div>
              </div>

              {/* Key Lesson */}
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  Lição Aprendida / Justificativa Decisiva:
                </div>
                <p className="text-xs text-slate-200 font-mono leading-relaxed">
                  {item.licaoAprendida}
                </p>
              </div>
            </article>
          ))
        )}
      </section>

      {/* Add Modal */}
      {showAddModal && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-error-title"
        >
          <div className="bg-slate-900 border-t sm:border border-slate-700 rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] sm:max-h-[92vh] flex flex-col overflow-hidden shadow-2xl pb-safe">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <h3 id="modal-error-title" className="text-base font-bold text-white">
                {editingErrorId ? 'Editar Registro de Erro' : 'Registrar Erro no Caderno FCC'}
              </h3>
              <button 
                onClick={() => {
                  setShowAddModal(false);
                  setEditingErrorId(null);
                }}
                aria-label="Fechar janela de registro de erro"
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs overflow-y-auto">
              <div>
                <label htmlFor="err-disciplina" className="block text-slate-200 font-semibold mb-1">Disciplina</label>
                <input
                  id="err-disciplina"
                  list="disciplinas-suggestions"
                  type="text"
                  value={disciplina}
                  onChange={e => setDisciplina(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  placeholder="Ex: Banco de Dados ou Língua Portuguesa"
                />
                <datalist id="disciplinas-suggestions">
                  {availableDisciplinas.map(d => (
                    <option key={d} value={d} />
                  ))}
                </datalist>
              </div>

              <div>
                <label htmlFor="err-microtopico" className="block text-slate-200 font-semibold mb-1">Microtópico / Assunto</label>
                <input
                  id="err-microtopico"
                  type="text"
                  value={microtopico}
                  onChange={e => setMicrotopico(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  placeholder="Ex: Normalização 2FN vs 3FN"
                  required
                />
              </div>

              <div>
                <label htmlFor="err-enunciado" className="block text-slate-200 font-semibold mb-1">Resumo do Enunciado / Contexto (Opcional)</label>
                <input
                  id="err-enunciado"
                  type="text"
                  value={enunciado}
                  onChange={e => setEnunciado(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  placeholder="O que a questão pedia..."
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label htmlFor="err-id-questao" className="block text-slate-200 font-semibold mb-1">Código Questão</label>
                  <input
                    id="err-id-questao"
                    type="text"
                    value={idQuestao}
                    onChange={e => setIdQuestao(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                    placeholder="FCC-2024"
                  />
                </div>
                <div>
                  <label htmlFor="err-resposta-marcada" className="block text-slate-200 font-semibold mb-1">Sua Resposta</label>
                  <select
                    id="err-resposta-marcada"
                    value={alternativaMarcada || 'B'}
                    onChange={e => setAlternativaMarcada(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-rose-300 font-bold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  >
                    {['A', 'B', 'C', 'D', 'E', 'Certo', 'Errado'].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="err-gabarito" className="block text-slate-200 font-semibold mb-1">Gabarito FCC</label>
                  <select
                    id="err-gabarito"
                    value={gabaritoCorreto || 'A'}
                    onChange={e => setGabaritoCorreto(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-emerald-400 font-bold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  >
                    {['A', 'B', 'C', 'D', 'E', 'Certo', 'Errado'].map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="err-classificacao" className="block text-slate-200 font-semibold mb-1">Gatilho / Auditoria Cirúrgica do Erro</label>
                <select
                  id="err-classificacao"
                  value={classificacaoErro}
                  onChange={e => setClassificacaoErro(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                >
                  <optgroup label="Auditoria Cirúrgica (Caminho Inverso Nível 4 → Nível 1)">
                    <option value="Nível 4 (Texto/Tipologia): Falha na intenção geral do autor">Nível 4 (Texto/Tipologia): Falha na intenção geral do autor</option>
                    <option value="Nível 3 (Sintaxe): Falha na conexão lógica entre frases/orações">Nível 3 (Sintaxe): Falha na conexão lógica entre frases/orações</option>
                    <option value="Nível 2 (Morfologia): Desconhecimento de conjunção, pronome ou verbo">Nível 2 (Morfologia): Desconhecimento de conjunção, pronome ou verbo</option>
                    <option value="Nível 1 (Fonética/Escrita): Leitura precipitada ou acentuação">Nível 1 (Fonética/Escrita): Leitura precipitada ou acentuação</option>
                  </optgroup>
                  <optgroup label="Classificações Gerais de Prova">
                    <option value="Pegadinha de Enunciado">Pegadinha de Enunciado</option>
                    <option value="Falta de Memorização de Regra/Exceção">Falta de Memorização de Regra/Exceção</option>
                    <option value="Confusão Conceitual">Confusão Conceitual</option>
                    <option value="Interpretação de Texto">Interpretação de Texto</option>
                    <option value="Desatenção">Desatenção</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="err-licao" className="block text-slate-200 font-semibold mb-1">Lição Aprendida / Justificativa</label>
                <textarea
                  id="err-licao"
                  rows={3}
                  value={licaoAprendida}
                  onChange={e => setLicaoAprendida(e.target.value)}
                  placeholder="Por que a resposta certa é essa e o que lembrar na próxima questão..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500 resize-none"
                  required
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition"
                >
                  Salvar no Caderno
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
