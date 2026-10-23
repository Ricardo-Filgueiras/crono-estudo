import { Topic, PedagogicalStatus, RecommendationItem } from '../types';

/**
 * Cria um mapa de busca rápida por ID para o grafo de conceitos.
 */
export const buildTopicMap = (topics: Topic[]): Map<string, Topic> => {
  return new Map(topics.map(t => [t.id, t]));
};

/**
 * Verifica se um conceito é considerado dominado ou concluído pedagogicamente
 * para fins de liberação de dependências.
 */
export const isTopicMasteredOrCompleted = (topic: Topic): boolean => {
  return topic.status === 'Dominado' || topic.status === 'Teoria Concluída';
};

/**
 * Retorna os pré-requisitos de um tópico que ainda NÃO foram dominados/concluídos.
 */
export const getUnmetPrerequisites = (
  topic: Topic, 
  topicMap: Map<string, Topic>
): Topic[] => {
  if (!topic.prerequisitos || topic.prerequisitos.length === 0) {
    return [];
  }

  const unmet: Topic[] = [];
  for (const prereqId of topic.prerequisitos) {
    const prereq = topicMap.get(prereqId);
    if (prereq && !isTopicMasteredOrCompleted(prereq)) {
      unmet.push(prereq);
    }
  }
  return unmet;
};

/**
 * Determina o status pedagógico do conceito no grafo de dependências:
 * - 'Bloqueado': possui pré-requisitos fundamentais ainda pendentes.
 * - 'Disponível': todos os pré-requisitos foram satisfeitos, seguro para aprender.
 * - 'Em Andamento', 'Precisa Revisar', 'Dominado': estados ativos ou consolidados.
 */
export const getPedagogicalStatus = (
  topic: Topic, 
  topicMap: Map<string, Topic>
): PedagogicalStatus => {
  if (topic.status === 'Dominado') return 'Dominado';
  if (topic.status === 'Precisa Revisar') return 'Precisa Revisar';

  const unmet = getUnmetPrerequisites(topic, topicMap);
  if (unmet.length > 0) {
    return 'Bloqueado';
  }

  if (topic.status === 'Em Andamento' || topic.status === 'Em Exercícios') {
    return 'Em Andamento';
  }

  return 'Disponível';
};

/**
 * Retorna se o tópico está livre de bloqueios para estudo.
 */
export const isTopicUnlocked = (topic: Topic, topicMap: Map<string, Topic>): boolean => {
  return getUnmetPrerequisites(topic, topicMap).length === 0;
};

/**
 * Encontra todos os tópicos que dependem diretamente de um determinado conceito.
 */
export const getDirectDependents = (topicId: string, allTopics: Topic[]): Topic[] => {
  return allTopics.filter(t => t.prerequisitos && t.prerequisitos.includes(topicId));
};

/**
 * Calcula o poder de desbloqueio (alcance transitivo) de um conceito no grafo.
 * Indica quantos conceitos futuros dependem dele direta ou indiretamente.
 */
export const getUnlockPower = (topicId: string, allTopics: Topic[]): number => {
  const visited = new Set<string>();
  const queue: string[] = [topicId];

  while (queue.length > 0) {
    const currentId = queue.shift()!;
    const directDependents = getDirectDependents(currentId, allTopics);
    
    for (const dep of directDependents) {
      if (!visited.has(dep.id)) {
        visited.add(dep.id);
        queue.push(dep.id);
      }
    }
  }

  return visited.size;
};

/**
 * Gera a justificativa pedagógica explicável (Princípio de transparência do motor).
 */
export const generateRecommendationExplanation = (
  topic: Topic,
  topicMap: Map<string, Topic>,
  allTopics: Topic[]
): string => {
  const unlockCount = getUnlockPower(topic.id, allTopics);
  const prereqCount = topic.prerequisitos ? topic.prerequisitos.length : 0;

  if (prereqCount === 0 && unlockCount > 0) {
    return `Fundamento-chave: Não possui pré-requisitos e desbloqueia ${unlockCount} conceito${unlockCount > 1 ? 's posteriores' : ' posterior'}.`;
  }

  if (prereqCount > 0) {
    const prereqNames = topic.prerequisitos!
      .map(id => topicMap.get(id)?.microtopico)
      .filter(Boolean)
      .slice(0, 2)
      .join(', ');

    if (unlockCount > 0) {
      return `Base consolidada (${prereqNames}). Avanço seguro que destrava mais ${unlockCount} tópico${unlockCount > 1 ? 's' : ''}.`;
    }
    return `Base necessária dominada (${prereqNames}). Conteúdo liberado para aprendizado com alicerces sólidos.`;
  }

  if (topic.peso && topic.peso.includes('Peso 2')) {
    return `Conteúdo de alta relevância estratégica (Peso 2) pronto para assimilação.`;
  }

  return `Conteúdo disponível e alinhado ao seu plano de estudos.`;
};

/**
 * Motor de recomendação inteligente:
 * 1. Filtra apenas conteúdos não concluídos que estejam pedagogicamente desbloqueados.
 * 2. Prioriza conceitos fundamentais que possuem maior poder de desbloqueio.
 * 3. Considera o tempo disponível estimado.
 */
export const recommendNextSteps = (
  topics: Topic[],
  options: { maxItems?: number; availableMinutes?: number } = {}
): RecommendationItem[] => {
  const { maxItems = 3, availableMinutes } = options;
  const topicMap = buildTopicMap(topics);

  // Considerar apenas tópicos não dominados e não concluídos
  const activeTopics = topics.filter(t => !isTopicMasteredOrCompleted(t));

  const eligibleItems: RecommendationItem[] = [];

  for (const topic of activeTopics) {
    const unmet = getUnmetPrerequisites(topic, topicMap);
    const status = getPedagogicalStatus(topic, topicMap);
    const unlockCount = getUnlockPower(topic.id, topics);
    const explanation = generateRecommendationExplanation(topic, topicMap, topics);

    eligibleItems.push({
      topic,
      status,
      unmetPrerequisites: unmet,
      unlockCount,
      explanation
    });
  }

  // Filtrar apenas os que estão 'Disponível' ou 'Em Andamento' (NÃO bloqueados)
  const availableCandidates = eligibleItems.filter(item => item.status === 'Disponível' || item.status === 'Em Andamento');

  // Ordenação por relevância pedagógica:
  // 1. Tópicos que estão 'Em Andamento' têm prioridade para evitar alternância excessiva.
  // 2. Tópicos com maior poder de desbloqueio (fundamentos que destravam mais conteúdos).
  // 3. Tópicos com Peso 2 / Alta relevância.
  availableCandidates.sort((a, b) => {
    if (a.status === 'Em Andamento' && b.status !== 'Em Andamento') return -1;
    if (b.status === 'Em Andamento' && a.status !== 'Em Andamento') return 1;

    // Maior poder de desbloqueio primeiro
    if (b.unlockCount !== a.unlockCount) {
      return b.unlockCount - a.unlockCount;
    }

    // Se tiver Peso 2
    const aIsP2 = a.topic.peso?.includes('Peso 2') ? 1 : 0;
    const bIsP2 = b.topic.peso?.includes('Peso 2') ? 1 : 0;
    if (bIsP2 !== aIsP2) {
      return bIsP2 - aIsP2;
    }

    return 0;
  });

  // Se houver restrição de tempo disponível
  if (availableMinutes && availableMinutes > 0) {
    let accumulatedTime = 0;
    const timeSelected: RecommendationItem[] = [];

    for (const item of availableCandidates) {
      const estimated = item.topic.tempoEstimadoMinutos || 25;
      if (accumulatedTime + estimated <= availableMinutes || timeSelected.length === 0) {
        timeSelected.push(item);
        accumulatedTime += estimated;
      }
      if (timeSelected.length >= maxItems) break;
    }

    return timeSelected;
  }

  return availableCandidates.slice(0, maxItems);
};
