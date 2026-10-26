export type TopicStatus = 
  | 'Pendente' 
  | 'Em Andamento' 
  | 'Teoria Concluída' 
  | 'Em Exercícios' 
  | 'Precisa Revisar' 
  | 'Dominado';

export type StudyContextTag = 'MBA' | 'Concurso' | 'Matemática Base' | 'Português Base' | 'Ciências da Natureza' | 'Leitura / Livro';

/**
 * Evidências de aprendizagem multidimensional (Especificação Pedagógica Sec. 5)
 */
export interface LearningEvidence {
  reconhecimento?: boolean;    // Identifica o conceito ou regra
  execucao?: boolean;          // Aplica o procedimento corretamente
  explicacao?: boolean;        // Justifica o "porquê" o procedimento funciona
  transferencia?: boolean;     // Aplica em problemas inéditos/diferentes
  retencao?: boolean;          // Demonstra fixação após intervalo
  explicacaoPropria?: string;  // Justificativa conceitual nas palavras do estudante
}

export interface Topic {
  id: string;
  disciplina: string;
  macrotema: string;
  microtopico: string;
  peso?: string;
  origem: StudyContextTag[]; // Tags de origem: ['MBA'], ['Concurso'], ['Matemática Base'], etc.
  status: TopicStatus;
  dataEstudo?: string; // YYYY-MM-DD
  acertosExercicios?: number; // %
  faseRecomendada?: string;
  anotacoes?: string;
  proximaRevisao?: string; // YYYY-MM-DD
  agendadoPara?: string; // YYYY-MM-DD
  prioridade?: 'baixa' | 'media' | 'alta';
  linkMaterial?: string; // Google Drive / Keep / Livro

  // === GRAFO DE DEPENDÊNCIAS CONCEITUAIS (FASE 1) ===
  prerequisitos?: string[];           // IDs dos tópicos necessários antes deste
  tempoEstimadoMinutos?: number;      // Tempo estimado de dedicação (ex: 20, 30, 45)
  tempoEstudadoMinutos?: number;      // Tempo real acumulado no cronômetro (minutos)
  tempoEstudadoSegundos?: number;     // Tempo real acumulado no cronômetro (segundos exatos)
  evidencias?: LearningEvidence;      // Evidências qualitativas de domínio
  justificativaRecomendacao?: string; // Motivo transparente pelo qual foi indicado pelo motor
}

export interface EnglishHabitDay {
  done: boolean;
  atEnd: boolean;
  minutesStudied?: number;
  secondsStudied?: number;
  completedAt?: string;
}

export interface ActiveTimerTarget {
  type: 'topic' | 'english';
  id: string; // topic.id or 'english-YYYY-MM-DD'
  title: string;
  dateStr?: string;
  estimatedMinutes?: number;
}

export type PedagogicalStatus = 
  | 'Bloqueado'     // Faltam pré-requisitos fundamentais a serem dominados
  | 'Disponível'    // Pré-requisitos satisfeitos, pronto para estudo
  | 'Em Andamento'  // Estudo iniciado
  | 'Dominado'      // Conceito consolidado
  | 'Precisa Revisar'; // Na fila de revisão espaçada ativa

export interface RecommendationItem {
  topic: Topic;
  status: PedagogicalStatus;
  unmetPrerequisites: Topic[];
  unlockCount: number;         // Quantos tópicos futuros este conceito desbloqueia
  explanation: string;         // Explicação pedagógica transparente
}

export interface ErrorItem {
  id: string;
  data: string;
  disciplina: string;
  microtopico: string;
  idQuestao: string;
  enunciado: string;
  alternativaMarcada: string;
  gabaritoCorreto: string;
  classificacaoErro: string;
  licaoAprendida: string;
  prerequisitoRelacionado?: string; // Investigação de lacuna (Fase 1)
}

export type ActiveTab = 'hoje' | 'edital' | 'revisoes' | 'erros' | 'estatisticas';
