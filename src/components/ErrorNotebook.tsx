import React, { useState, useEffect } from 'react';
import { useStudy, getTodayDateString } from '../context/StudyContext';
import { Plus, Trash2, ShieldAlert, Sparkles, X } from 'lucide-react';

export const ErrorNotebook: React.FC = () => {
  const { errors, addError, deleteError } = useStudy();
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state
  const [disciplina, setDisciplina] = useState('Língua Portuguesa');
  const [microtopico, setMicrotopico] = useState('');
  const [idQuestao, setIdQuestao] = useState('');
  const [enunciado, setEnunciado] = useState('');
  const [alternativaMarcada, setAlternativaMarcada] = useState('');
  const [gabaritoCorreto, setGabaritoCorreto] = useState('');
  const [classificacaoErro, setClassificacaoErro] = useState('Pegadinha de Enunciado');
  const [licaoAprendida, setLicaoAprendida] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showAddModal) {
        setShowAddModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAddModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!microtopico || !licaoAprendida) {
      alert('Preencha pelo menos o microtópico e a lição aprendida.');
      return;
    }

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

    setShowAddModal(false);
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
          onClick={() => setShowAddModal(true)}
          aria-label="Registrar nova questão com erro no caderno"
          className="bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-rose-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition flex items-center gap-2 whitespace-nowrap self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          <span>Registrar Questão / Erro</span>
        </button>
      </section>

      {/* List of mapped errors */}
      <section aria-label="Erros mapeados da FCC" className="space-y-4">
        {errors.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-300">Nenhum erro registrado ainda no caderno.</p>
          </div>
        ) : (
          errors.map(item => (
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
                    {item.data}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 font-medium">
                    {item.classificacaoErro}
                  </span>
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
              <h3 id="modal-error-title" className="text-base font-bold text-white">Registrar Erro no Caderno FCC</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                aria-label="Fechar janela de registro de erro"
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
              <div>
                <label htmlFor="err-disciplina" className="block text-slate-200 font-semibold mb-1">Disciplina</label>
                <input
                  id="err-disciplina"
                  type="text"
                  value={disciplina}
                  onChange={e => setDisciplina(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                  placeholder="Ex: Banco de Dados ou Português"
                />
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
                  <input
                    id="err-resposta-marcada"
                    type="text"
                    value={alternativaMarcada}
                    onChange={e => setAlternativaMarcada(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white uppercase text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                    placeholder="B"
                  />
                </div>
                <div>
                  <label htmlFor="err-gabarito" className="block text-slate-200 font-semibold mb-1">Gabarito FCC</label>
                  <input
                    id="err-gabarito"
                    type="text"
                    value={gabaritoCorreto}
                    onChange={e => setGabaritoCorreto(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white uppercase text-center font-bold text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                    placeholder="D"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="err-classificacao" className="block text-slate-200 font-semibold mb-1">Tipo de Erro</label>
                <select
                  id="err-classificacao"
                  value={classificacaoErro}
                  onChange={e => setClassificacaoErro(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus:border-rose-500"
                >
                  <option value="Pegadinha de Enunciado">Pegadinha de Enunciado</option>
                  <option value="Falta de Memorização de Regra/Exceção">Falta de Memorização de Regra/Exceção</option>
                  <option value="Confusão Conceitual">Confusão Conceitual</option>
                  <option value="Interpretação de Texto">Interpretação de Texto</option>
                  <option value="Desatenção">Desatenção</option>
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
