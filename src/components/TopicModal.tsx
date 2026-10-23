import React, { useState, useEffect } from 'react';
import { useStudy, getTodayDateString, addDaysToDate } from '../context/StudyContext';
import { TopicStatus, LearningEvidence } from '../types';
import { X, CheckCircle, Brain, CheckSquare, Square } from 'lucide-react';

export const TopicModal: React.FC = () => {
  const { selectedTopicForModal, setSelectedTopicForModal, updateTopic, markAsMastered } = useStudy();

  const [status, setStatus] = useState<TopicStatus>('Teoria Concluída');
  const [dataEstudo, setDataEstudo] = useState(getTodayDateString());
  const [acertos, setAcertos] = useState<string>('');
  const [anotacoes, setAnotacoes] = useState('');
  const [proximaRevisao, setProximaRevisao] = useState('');
  const [agendadoPara, setAgendadoPara] = useState('');

  // Evidências de aprendizagem conceitual
  const [evidencias, setEvidencias] = useState<LearningEvidence>({
    reconhecimento: false,
    execucao: false,
    explicacao: false,
    transferencia: false,
    explicacaoPropria: ''
  });

  // ESC key handler to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedTopicForModal) {
        setSelectedTopicForModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTopicForModal, setSelectedTopicForModal]);

  useEffect(() => {
    if (selectedTopicForModal) {
      setStatus(selectedTopicForModal.status === 'Pendente' ? 'Teoria Concluída' : selectedTopicForModal.status);
      setDataEstudo(selectedTopicForModal.dataEstudo || getTodayDateString());
      setAcertos(selectedTopicForModal.acertosExercicios !== undefined ? String(selectedTopicForModal.acertosExercicios) : '');
      setAnotacoes(selectedTopicForModal.anotacoes || '');
      setProximaRevisao(selectedTopicForModal.proximaRevisao || addDaysToDate(getTodayDateString(), 7));
      setAgendadoPara(selectedTopicForModal.agendadoPara || '');
      setEvidencias(selectedTopicForModal.evidencias || {
        reconhecimento: false,
        execucao: false,
        explicacao: false,
        transferencia: false,
        explicacaoPropria: ''
      });
    }
  }, [selectedTopicForModal]);

  if (!selectedTopicForModal) return null;

  const toggleEvidence = (field: keyof Omit<LearningEvidence, 'explicacaoPropria'>) => {
    setEvidencias(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (status === 'Dominado') {
      markAsMastered(selectedTopicForModal.id);
      updateTopic(selectedTopicForModal.id, {
        evidencias,
        anotacoes,
        acertosExercicios: acertos ? parseFloat(acertos) : undefined
      });
      setSelectedTopicForModal(null);
      return;
    }

    updateTopic(selectedTopicForModal.id, {
      status,
      dataEstudo,
      acertosExercicios: acertos ? parseFloat(acertos) : undefined,
      anotacoes,
      evidencias,
      proximaRevisao: proximaRevisao || undefined,
      agendadoPara: agendadoPara || undefined,
      faseRecomendada: status === 'Teoria Concluída' 
        ? '📖 Teoria pronta! Fazer bateria de questões.' 
        : status === 'Em Exercícios'
        ? '📝 Em resolução de questões da FCC.'
        : status === 'Precisa Revisar'
        ? '⚠️ Revisar resumos e pontos de dúvida.'
        : undefined
    });

    setSelectedTopicForModal(null);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-topic-title"
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
          <div>
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              {selectedTopicForModal.disciplina} • {selectedTopicForModal.macrotema}
            </span>
            <h3 id="modal-topic-title" className="text-base font-bold text-white mt-0.5 line-clamp-1">
              {selectedTopicForModal.microtopico}
            </h3>
          </div>
          <button
            onClick={() => setSelectedTopicForModal(null)}
            aria-label="Fechar janela de detalhes do tópico"
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto">
          
          {/* Status */}
          <fieldset>
            <legend className="block text-xs font-semibold text-slate-200 mb-1.5">
              Status do Conceito
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs" role="radiogroup" aria-label="Status do Tópico">
              {(['Pendente', 'Em Andamento', 'Teoria Concluída', 'Em Exercícios', 'Dominado'] as TopicStatus[]).map(st => (
                <button
                  type="button"
                  key={st}
                  role="radio"
                  aria-checked={status === st}
                  onClick={() => setStatus(st)}
                  className={`p-2 rounded-xl font-medium border text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    status === st
                      ? st === 'Dominado'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                        : 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {st === 'Dominado' ? '⭐ Dominado' : st}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Seção Pedagógica: Evidências de Aprendizagem Conceitual */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Brain className="w-4 h-4" aria-hidden="true" />
              <span>Avaliação do Domínio Conceitual (Além da execução)</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => toggleEvidence('reconhecimento')}
                className={`p-2 rounded-xl border flex items-center gap-2 text-left transition ${
                  evidencias.reconhecimento 
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-medium' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {evidencias.reconhecimento ? <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                <span>Reconhecimento da regra</span>
              </button>

              <button
                type="button"
                onClick={() => toggleEvidence('execucao')}
                className={`p-2 rounded-xl border flex items-center gap-2 text-left transition ${
                  evidencias.execucao 
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-medium' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {evidencias.execucao ? <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                <span>Execução de exercícios</span>
              </button>

              <button
                type="button"
                onClick={() => toggleEvidence('explicacao')}
                className={`p-2 rounded-xl border flex items-center gap-2 text-left transition ${
                  evidencias.explicacao 
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-medium' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {evidencias.explicacao ? <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                <span>Explicação do "Porquê"</span>
              </button>

              <button
                type="button"
                onClick={() => toggleEvidence('transferencia')}
                className={`p-2 rounded-xl border flex items-center gap-2 text-left transition ${
                  evidencias.transferencia 
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-medium' 
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                {evidencias.transferencia ? <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                <span>Transferência a problemas novos</span>
              </button>
            </div>

            <div>
              <label htmlFor="topic-explicacao-propria" className="block text-[11px] font-semibold text-slate-300 mb-1">
                Explicação com as próprias palavras (Por que a regra funciona?):
              </label>
              <textarea
                id="topic-explicacao-propria"
                rows={2}
                placeholder="Ex: Funciona porque na multiplicação de bases iguais somamos os expoentes pela expansão dos fatores repetidos..."
                value={evidencias.explicacaoPropria || ''}
                onChange={e => setEvidencias(prev => ({ ...prev, explicacaoPropria: e.target.value }))}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500 resize-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Study Date */}
            <div>
              <label htmlFor="topic-data-estudo" className="block text-xs font-semibold text-slate-200 mb-1">
                Data do Estudo
              </label>
              <input
                id="topic-data-estudo"
                type="date"
                value={dataEstudo}
                onChange={e => setDataEstudo(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500"
              />
            </div>

            {/* Next Spaced Revision (D+7) */}
            <div>
              <label htmlFor="topic-proxima-revisao" className="block text-xs font-semibold text-slate-200 mb-1">
                Próxima Revisão (D+7)
              </label>
              <input
                id="topic-proxima-revisao"
                type="date"
                value={proximaRevisao}
                onChange={e => setProximaRevisao(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Exercise % */}
          <div>
            <label htmlFor="topic-acertos" className="block text-xs font-semibold text-slate-200 mb-1">
              % de Acertos em Exercícios (Opcional)
            </label>
            <div className="relative">
              <input
                id="topic-acertos"
                type="number"
                min="0"
                max="100"
                placeholder="Ex: 85"
                value={acertos}
                onChange={e => setAcertos(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 pr-8 text-xs text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500"
              />
              <span className="absolute right-3 top-2 text-xs text-slate-400" aria-hidden="true">%</span>
            </div>
          </div>

          {/* Anotações & Dificuldades */}
          <div>
            <label htmlFor="topic-anotacoes" className="block text-xs font-semibold text-slate-200 mb-1">
              Anotações, Resumo ou Dificuldade (Pegadinhas da FCC)
            </label>
            <textarea
              id="topic-anotacoes"
              rows={2}
              placeholder="Ex: Pegadinha no uso da crase antes de pronomes de tratamento..."
              value={anotacoes}
              onChange={e => setAnotacoes(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus:border-emerald-500 resize-none font-mono"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedTopicForModal(null)}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition flex items-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              <span>Salvar Registro</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
