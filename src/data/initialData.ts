import { Topic, ErrorItem } from '../types';

export const INITIAL_TOPICS: Topic[] = [
  {
    "id": "science-fis-u01",
    "disciplina": "Física (Módulo 01)",
    "macrotema": "Nível 1: Os Tijolos • Grandezas & Vetores",
    "microtopico": "Grandezas Físicas, Escalares e Vetoriais, Velocidade Média e SI",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/1qBeCkpzaV9URACx927iF0DtzWwylE6n60-AYXSzL8rQ/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Vetores, conversão km/h <-> m/s e circuito fechado.",
    "anotacoes": "Definição de grandezas escalares vs vetoriais, velocidade média escalar vs vetorial, deslocamento Delta x = v * Delta t, fator 3,6 e trajetória fechada com Delta x = 0. NotebookLM 1. Física.",
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "science-fis-u02",
    "disciplina": "Física (Módulo 01)",
    "macrotema": "Nível 2: A Estrutura em Movimento • Cinemática Escalar",
    "microtopico": "Movimento Unidimensional, Cinemática Escalar e Inversão de Sentido",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/1ifKIjIegIXmuT8Drq5mMVk5PVUiG9OA4vx0HYuGe4m4/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Marco zero s(t), Delta s vs distância d, e rapidez média.",
    "anotacoes": "Referencial 1D, deslocamento escalar Delta s vs distância acumulada d, movimento progressivo (v>0) vs retrógrado (v<0), cálculo com inversão de sentido. NotebookLM 1. Física.",
    "prerequisitos": [
      "science-fis-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "science-qui-u01",
    "disciplina": "Química (Módulo 01)",
    "macrotema": "Nível 1: Os Tijolos da Matéria • Átomos e Íons",
    "microtopico": "Origem dos Elementos, Estrutura Atômica Fundamental, Íons e Nuclídeos",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/15moHIySxVyz5mCUVdDuG-envsRHTfBxHEYFtkjCE6uk/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Nucleossíntese estelar, prótons, nêutrons, elétrons e íons.",
    "anotacoes": "Nucleossíntese primordial e estelar (1H, 4He), número atômico Z = p, número de massa A = Z + n, cátions (p > e-), ânions (e- > p), reações químicas vs nucleares. NotebookLM 1. Química.",
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "science-bio-u01",
    "disciplina": "Biologia (Módulo 01)",
    "macrotema": "Nível 2: Das Moléculas à Vida • Bioquímica & Citologia",
    "microtopico": "Bioquímica Celular, Biomoléculas e Estrutura Celular",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Pendente",
    "linkMaterial": "https://gemini.google.com/notebook/12206f4e-2ec3-4d09-9daf-b46ebd304198",
    "faseRecomendada": "⏳ Estrutura pronta no Google Drive (03_Biologia) e NotebookLM. Aguardando anotações no Google Keep.",
    "anotacoes": "Caderno no NotebookLM: 1. Biologia — Bioquímica Celular & Citologia. Repositório 03_Biologia no Google Drive.",
    "prerequisitos": [
      "science-qui-u01"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "math-m01-u01",
    "disciplina": "Matemática (Módulo 01)",
    "macrotema": "Nível 1: Os Tijolos • Aritmética Fundamental",
    "microtopico": "Aritmética e Fundamentos: Números Inteiros, Frações e Decimais",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-20",
    "linkMaterial": "https://docs.google.com/document/d/1LIAv3HLr14nyB5KVnrFRpyQXty7QH08PwdGSOwATIOc/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Manutenção e treino rápido.",
    "anotacoes": "Números inteiros (Z), regras de sinais, frações mistas/impróprias, MMC e alinhamento de decimais. NotebookLM Módulos 01 e 02.",
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "math-m01-u02",
    "disciplina": "Matemática (Módulo 01)",
    "macrotema": "Nível 1: Os Tijolos • Reta Numérica e Valor Absoluto",
    "microtopico": "Reta Numérica, Simetria e Valor Absoluto (|x|)",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-20",
    "linkMaterial": "https://docs.google.com/document/d/19lS9AEIpUv74MFlPYZZT5Dzps9ZOuIQAXO4gYNmUFec/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Interpretação geométrica como distância escalar.",
    "anotacoes": "Reta numérica, números opostos, valor absoluto (|a| >= 0), simetria de distância (|a-b| = |b-a|).",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "math-m02-u01",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Nível 1: Os Tijolos • Potenciação e Notação Científica",
    "microtopico": "Potenciação, Expoentes Inteiros e Notação Científica",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-21",
    "linkMaterial": "https://docs.google.com/document/d/1MHF51MEwNOvtzlGI5U3BHbCCBeNMs7xjQeOTFxjU1_4/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Propriedades de mesma base, a^0=1, expoente negativo.",
    "anotacoes": "Propriedades da potenciação, expoentes inteiros (a^-n = 1/a^n), notação científica normalizada (a * 10^n).",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m02-u02",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Nível 1: Os Tijolos • Radiciação e Expoentes Fracionários",
    "microtopico": "Radiciação, Operação Inversa e Expoentes Fracionários",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-21",
    "linkMaterial": "https://docs.google.com/document/d/1mVhs7iWiJ835k02WPTPPcQDEp3XHz-wRVhjNsVcqAIY/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Equivalência x^(m/n) e simplificação de radicais.",
    "anotacoes": "Cancelamento inverso, expoentes fracionários (raiz n-ésima de x^m = x^(m/n)), produto e quociente de radicais.",
    "prerequisitos": [
      "math-m02-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m02-u03",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Nível 1: Os Tijolos • Sequências e Progressões (PA e PG)",
    "microtopico": "Sequências e Progressões Recursivas (PA, PG e Mistas)",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1bj9vTqqOwrEl7GBerJ2FZAPkVrpFUzcFWtZWEcGjAzI/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Conversão de fórmula recursiva para forma explícita fechada.",
    "anotacoes": "Fórmulas recursivas (termo inicial e passo an = f(an-1)). Diferenciação: PG (multiplicação de razão q) vs PA (adição de r). Forma explícita fechada.",
    "prerequisitos": [
      "math-m02-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m03-u01",
    "disciplina": "Matemática (Módulo 03)",
    "macrotema": "Nível 1: Os Tijolos • Proporcionalidade e Porcentagem",
    "microtopico": "Relações Proporcionais, Regra de Três e Fatores de Porcentagem",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/16xR7U5TzP0_r-M8yZ00M9qVvD3jQ4x5y/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Grandezas diretas e inversas, regra de três simples/composta e porcentagem.",
    "anotacoes": "Propriedade fundamental a*d = b*c, proporcionalidade direta e inversa, regra de três e multiplicadores de porcentagem (1 +- p/100).",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m03-u02",
    "disciplina": "Matemática (Módulo 03)",
    "macrotema": "Nível 1: Os Tijolos • Proporcionalidade e Regra de Três",
    "microtopico": "Regra de Três: Entendendo Regra de Três, Porcentagem e Problemas",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-10-29",
    "faseRecomendada": "🎯 Meta de Hoje (Khan Academy): Introdução à regra de três, cálculo percentual integrado e problemas aplicados.",
    "anotacoes": "Khan Academy: Entendendo regra de três, regra de três e porcentagem, problemas contextualizados. Montagem das colunas e multiplicação cruzada.",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m03-u03",
    "disciplina": "Matemática (Módulo 03)",
    "macrotema": "Nível 1: Os Tijolos • Variação Direta e Inversa (EF08MA12)",
    "microtopico": "Variação Direta e Inversa: Grandezas Proporcionais e Constante k",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-10-30",
    "faseRecomendada": "🎯 Meta da Semana (BNCC EF08MA12): Identificação de grandezas diretas (y = kx) e inversas (y · x = k) em tabelas, gráficos e problemas.",
    "anotacoes": "Khan Academy (BNCC EF08MA12): Variação proporcional direta e inversa, constante k, problemas de abastecimento de combustível e vibração de cordas.",
    "prerequisitos": [
      "math-m03-u02"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m04-u01",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Nível 2: As Peças Algébricas • Polinômios e Distributiva (FOIL)",
    "microtopico": "Introdução à Álgebra, Polinômios, FOIL e Modelo de Áreas",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1dQ2KdXiL9dzZ-cP_W7sTwNaGZCXq6d2WOCtWD4I-0aA/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Monômios, polinômios, comutatividade e produto de Stevin.",
    "anotacoes": "Terminologia polinomial, operações fundamentais, distributiva (FOIL), modelo geométrico de áreas e produto de Stevin (x+a)(x+b).",
    "prerequisitos": [
      "math-m02-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m04-u02",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Nível 2: As Peças Algébricas • Fatoração e Produtos Notáveis",
    "microtopico": "Fatoração, Produtos Notáveis e Método AC por Agrupamento",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1ljZzkwLVBPV4gLwp2CebI2IyukTq2OXD4cCe6Jd7He0/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Fator comum, soma e produto, trinômio quadrado perfeito e método AC de Sal Khan.",
    "anotacoes": "Propriedade do Produto Nulo, diferença de quadrados, fatoração de trinômios do 2º grau e método AC para a != 1.",
    "prerequisitos": [
      "math-m04-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m04-u03",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Nível 2: As Peças Algébricas • Divisão de Polinômios e Teorema do Resto",
    "microtopico": "Divisão de Polinômios pelo Método da Chave e Teorema do Resto",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1CTPEZKw6wh6yfRoCOXkYO_--_HwojmbauKz49ZOXhew/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Divisão euclidiana, prova real e D’Alembert P(-3)=-18.",
    "anotacoes": "Algoritmo euclidiano da chave com ordenação decrescente de graus, critério de parada grau(R) < grau(D) e verificação de D’Alembert.",
    "prerequisitos": [
      "math-m04-u02"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "math-m05-u01",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Nível 3: A Estrutura em Movimento • Equações e Inequações 1º Grau",
    "microtopico": "Equações e Inequações do 1º Grau (SPD, SI e SPI)",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/15EeQHAfV761Om5Z607AJl4cbY2vwIQnv8Cv8V7W02K8/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Classificação de soluções e inequações na reta real.",
    "anotacoes": "Princípio de equivalência, SPD (única), SI (impossível 0x=k), SPI (indeterminada 0x=0) e inversão de desigualdade com negativo.",
    "prerequisitos": [
      "math-m04-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m05-u02",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sistemas de Equações Lineares",
    "microtopico": "Sistemas de Equações: Métodos da Substituição e Adição",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1J_FNHWd6tG-eZnKKvNBnGsiD3D_wu2s2fU4bLh8ATHg/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Sistemas consistentes independentes, dependentes e inconsistentes.",
    "anotacoes": "Método da substituição e adição/eliminação, interpretação gráfica de retas concorrentes, coincidentes e paralelas.",
    "prerequisitos": [
      "math-m05-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m05-u03",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Nível 3: A Estrutura em Movimento • Inclinação (m = dy/dx) e Retas",
    "microtopico": "Equações Lineares, Inclinação (m = dy/dx) e Retas no Plano",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1_adOXQ125mkNZQ-xB1dU9aQqd9IrKSOsAhn-toX2Kek/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Coeficiente angular, forma reduzida y=ax+b e perpendicularismo.",
    "anotacoes": "Taxa de variação m = dy/dx, interceptos x e y, paralelismo m1=m2 e perpendicularismo analítico m1 * m2 = -1.",
    "prerequisitos": [
      "math-m05-u02"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m05-u04",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Nível 3: A Estrutura em Movimento • Funções e Modelos Lineares f(x)",
    "microtopico": "Funções e Modelos Lineares: Notação f(x) e Aplicações Reais",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1RBjXT8g70hChPubdjsAe4Z5WlxyoEQQNVLDlYJ4jWww/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Teste da reta vertical e contraste entre linearidade e aceleração.",
    "anotacoes": "Conceito formal de função f(x), teste da reta vertical, modelagem contextual (tarifas, esvaziamento linear) e restrições de domínio.",
    "prerequisitos": [
      "math-m05-u03"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u01",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Entes Geométricos e Segmentos",
    "microtopico": "Definições Geométricas: Ponto, Reta, Semirreta e Segmentos",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/19bLj-mitcps7oJw-GuLoSlzoL4DYurQJH8tIPC42WA4/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Método axiomático de Euclides e posições relativas.",
    "anotacoes": "Entes primitivos, distinção entre reta, semirreta e segmento, congruência de segmentos, ponto médio e perpendicularidade.",
    "prerequisitos": [
      "math-m01-u02"
    ],
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "math-m06-u02",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Ângulos e Opostos pelo Vértice (OPV)",
    "microtopico": "Estudo dos Ângulos, Relações e Ângulos Opostos pelo Vértice (OPV)",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1a1UDv80agdIzWPIiPl_8cyrTP3RMzBLteVMvE1JMhE0/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Ângulos complementares, suplementares e prova dedutiva de OPV.",
    "anotacoes": "Classificação (agudo, reto, obtuso, raso), ângulos complementares (90°) e suplementares (180°), demonstração de OPV.",
    "prerequisitos": [
      "math-m06-u01",
      "math-m05-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m06-u03",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Área e Perímetro por Decomposição",
    "microtopico": "Área, Perímetro e Métodos de Decomposição de Figuras Planas",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1GYhQZ5rUlcl4-C40msfWUBYk0nLHMWDMLJBeWUQy8Bc/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Equidecomposição de Sal Khan e partição aditiva/subtrativa.",
    "anotacoes": "Grandezas 2D, fórmulas poligonais (triângulos, paralelogramos, trapézios, círculos), partição aditiva e decomposição subtrativa.",
    "prerequisitos": [
      "math-m06-u02",
      "math-m04-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u04",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Volume, Superfície e Escala Cúbica (k³)",
    "microtopico": "Volume, Área de Superfície e Efeito de Escala Cúbica (k³)",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1M1J7LRFVrG0_2SjDl99mTMDdNMqIvLefA1jhcTh8eXw/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Prisma retangular, conversões SI e efeito de escala k³.",
    "anotacoes": "Volume V = c*l*h, área superficial, conversões volumétricas (1 m³ = 1.000 L) e variação proporcional ao cubo (V’ = k³ * V).",
    "prerequisitos": [
      "math-m06-u03",
      "math-m02-u01"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u05",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Paralelogramos e Prova Dedutiva de Losangos",
    "microtopico": "Paralelogramos, Bissetrizes e Prova Dedutiva de Losangos",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1uWfK5enBaIYRux5JGiaNpePYBSbe2hTMBkuAZVEKwxM/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Demonstração dedutiva de Sal Khan e ortogonalidade das diagonais.",
    "anotacoes": "Definições, propriedades de paralelogramos, bissetriz como lugar geométrico, prova de diagonais bissetrizes exclusivas de Losango/Quadrado.",
    "prerequisitos": [
      "math-m06-u02",
      "math-m06-u03"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u06",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Quadriláteros e Polígonos (EF08MA14)",
    "microtopico": "Provas e Ângulos de Quadriláteros e Polígonos Regulares",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-10-31",
    "faseRecomendada": "🎯 Meta do Fim de Semana (EF08MA14): Demonstrações dedutivas de paralelogramos e soma dos ângulos internos de polígonos.",
    "anotacoes": "Khan Academy (BNCC EF08MA14): Provas de lados e ângulos opostos de paralelogramo, diagonais de losangos, soma de ângulos internos de quadrilátero (360°) e polígonos regulares Sn=(n-2)*180°.",
    "prerequisitos": [
      "math-m06-u02"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u07",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Construções Geométricas (EF08MA15)",
    "microtopico": "Construções Geométricas: Mediatrizes, Perpendiculares e Bissetrizes",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-11-01",
    "faseRecomendada": "🎯 Meta do Fim de Semana (EF08MA15): Procedimentos de traçado com régua e compasso para mediatriz, reta perpendicular e bissetriz.",
    "anotacoes": "Khan Academy (BNCC EF08MA15/17): Lugar geométrico da mediatriz (pontos equidistantes dos extremos), perpendicular passando por ponto e bissetriz de um ângulo.",
    "prerequisitos": [
      "math-m06-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "math-m06-u08",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Bissetrizes e Teorema Interno (EF08MA17)",
    "microtopico": "Ângulo da Bissetriz, Ponto Notável Incentro e Teorema da Bissetriz Interna",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-11-02",
    "faseRecomendada": "🎯 Meta da Próxima Semana (EF08MA17): Teorema da bissetriz interna e relação com o incentro (centro da circunferência inscrita).",
    "anotacoes": "Khan Academy (BNCC EF08MA17): Distância entre ponto e reta, incentro como interseção das bissetrizes, circunferência inscrita (r = Área/semiperímetro) e Teorema da Bissetriz Interna.",
    "prerequisitos": [
      "math-m06-u07"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u09",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Mediatrizes e Circuncentro (EF08MA15/17)",
    "microtopico": "Mediatrizes do Triângulo, Circuncentro e Circunraio",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-11-03",
    "faseRecomendada": "🎯 Meta da Próxima Semana (EF08MA15/17): Ponto notável Circuncentro, raio da circunferência circunscrita e casos notáveis.",
    "anotacoes": "Khan Academy (BNCC EF08MA15/17): Ponto de encontro das mediatrizes, circuncentro no ponto médio da hipotenusa no triângulo retângulo, 3 pontos não colineares determinando circunferência e fórmula do circunraio R = abc/(4A).",
    "prerequisitos": [
      "math-m06-u07"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "math-m06-u10",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Nível 4: Espaço e Dedução • Círculo e Circunferência",
    "microtopico": "Elementos Fundamentais do Círculo, Circunferência, Arcos e Cordas",
    "peso": "Matemática Base • Sinergia com Concurso",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "agendadoPara": "2026-11-04",
    "faseRecomendada": "🎯 Meta da Próxima Semana: Domínio dos elementos anatômicos e propriedades de círculos e circunferências.",
    "anotacoes": "Khan Academy: Identificação das partes da circunferência: raio, diâmetro, corda, arco, reta secante e tangente. Relação entre comprimento C = 2*pi*r e área A = pi*r^2.",
    "prerequisitos": [
      "math-m06-u03"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "mba-gov",
    "disciplina": "Governança de Dados",
    "macrotema": "Nível 1: Os Tijolos • Governança e Qualidade de Dados (DAMA-DMBOK)",
    "microtopico": "DAMA-DMBOK, Qualidade de Dados, Metadados e Gestão Estratégica",
    "peso": "MBA (40h) • Sinergia com Concurso",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "faseRecomendada": "⭐ Disciplina do MBA Concluída com Sucesso (40h)! DAMA-DMBOK, Governança e Qualidade de Dados.",
    "anotacoes": "40 horas do MBA em Ciência de Dados concluídas. DAMA-DMBOK, ciclo de vida dos dados, qualidade, linhagem e metadados. Base consolidada para a governança corporativa e concursos.",
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "mba-sql",
    "disciplina": "Linguagem SQL para Data Analytics",
    "macrotema": "Nível 1: Os Tijolos • SQL Analítico e Extração de Dados",
    "microtopico": "SQL Avançado, Consultas Analíticas, Agregações e Otimização",
    "peso": "MBA (40h) • Sinergia com Concurso",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Em Andamento",
    "agendadoPara": "2026-10-23",
    "faseRecomendada": "📘 Disciplina Ativa da Semana do MBA! Acompanhar com leitura do livro.",
    "anotacoes": "Disciplina em curso do MBA. Fortíssima sinergia com o edital do Concurso em Banco de Dados.",
    "prerequisitos": [
      "topic-44"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "livro-db",
    "disciplina": "Leitura Técnica Bibliográfica",
    "macrotema": "Nível 1: Os Tijolos • Fundamentação Teórica de Banco de Dados",
    "microtopico": "Livro: Sistemas de Banco de Dados (Elmasri/Navathe)",
    "peso": "Leitura Recomendada",
    "origem": [
      "Leitura / Livro",
      "MBA",
      "Concurso"
    ],
    "status": "Em Andamento",
    "agendadoPara": "2026-10-23",
    "faseRecomendada": "📖 Bloco de leitura de 20-30 min para fundamentação teórica de SQL.",
    "anotacoes": "Leitura de apoio para a disciplina de SQL do MBA e aprofundamento para questões conceituais.",
    "prerequisitos": [
      "topic-40"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "mba-stat-r",
    "disciplina": "Técnicas Estatísticas: Teoria e Prática",
    "macrotema": "Nível 2: As Peças Analíticas • Estatística e Testes de Hipótese com R",
    "microtopico": "Estatística Descritiva, Inferencial e Testes de Hipótese com R Programming",
    "peso": "MBA (40h) • Exclusivo MBA",
    "origem": [
      "MBA"
    ],
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 2 MBA): Base estatística essencial para Modelagem Preditiva e Machine Learning.",
    "prerequisitos": [
      "math-m03-u01"
    ],
    "tempoEstimadoMinutos": 45,
    "anotacoes": "Ponte para o Nível 3: Sem dominar distribuições e testes de hipótese, algoritmos de Machine Learning viram caixas-pretas decoradas."
  },
  {
    "id": "mba-etl",
    "disciplina": "Integração e Fluxo de Dados (ETL)",
    "macrotema": "Nível 2: As Peças de Engenharia • Pipelines de Dados (ETL/ELT)",
    "microtopico": "Pipelines de Dados, Extração, Transformação e Carga (ETL/ELT)",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer conclusão de SQL Analítico (Nível 1) e Governança.",
    "prerequisitos": [
      "mba-gov",
      "mba-sql"
    ],
    "tempoEstimadoMinutos": 40,
    "anotacoes": "Ponte: Como extrair, transformar e carregar dados limpos para alimentar análises e modelos."
  },
  {
    "id": "mba-spark",
    "disciplina": "Linguagens de Programação para Ciência de Dados",
    "macrotema": "Nível 2: As Peças de Engenharia • Python com Spark e Processamento Distribuído",
    "microtopico": "Python com Spark, PySpark e Processamento Distribuído",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer base de SQL Analítico e Python.",
    "prerequisitos": [
      "mba-sql",
      "topic-56"
    ],
    "tempoEstimadoMinutos": 45,
    "anotacoes": "Escalonamento do SQL e Python para grandes volumes de dados distribuídos (PySpark)."
  },
  {
    "id": "mba-data-analysis",
    "disciplina": "Análise de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Análise Exploratória (EDA) e Storytelling",
    "microtopico": "Análise Exploratória de Dados (EDA), Visualização e Storytelling",
    "peso": "MBA (40h) • Exclusivo MBA",
    "origem": [
      "MBA"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer SQL Analítico e Estatística Descritiva/Inferencial.",
    "prerequisitos": [
      "mba-sql",
      "mba-stat-r"
    ],
    "tempoEstimadoMinutos": 40,
    "anotacoes": "Cruzamento de SQL e Estatística para descobrir padrões reais antes de treinar modelos."
  },
  {
    "id": "mba-pred-models",
    "disciplina": "Análise e Modelagem Preditiva",
    "macrotema": "Nível 3: A Estrutura em Movimento • Modelagem Preditiva e Séries Temporais",
    "microtopico": "Modelagem Preditiva, Séries Temporais e Regressões Avançadas",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Estatística e Análise Exploratória de Dados (EDA).",
    "prerequisitos": [
      "mba-stat-r",
      "mba-data-analysis"
    ],
    "tempoEstimadoMinutos": 45,
    "anotacoes": "Transição da análise descritiva (o que aconteceu) para a preditiva (o que vai acontecer)."
  },
  {
    "id": "mba-ml",
    "disciplina": "Machine Learning",
    "macrotema": "Nível 3: A Estrutura em Movimento • Machine Learning Supervisionado e Não Supervisionado",
    "microtopico": "Algoritmos Supervisionados, Não Supervisionados e Otimização",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Modelagem Preditiva.",
    "prerequisitos": [
      "mba-pred-models"
    ],
    "tempoEstimadoMinutos": 45,
    "anotacoes": "Domínio de árvores, ensemble, clusterização e validação cruzada."
  },
  {
    "id": "mba-analytics-ai",
    "disciplina": "Analytics e Inteligência Artificial (IA)",
    "macrotema": "Nível 4: A Obra Completa • IA Corporativa e Tomada de Decisão",
    "microtopico": "Aplicações Corporativas de IA e Tomada de Decisão Analítica",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide MBA — Requer Machine Learning consolidado.",
    "prerequisitos": [
      "mba-ml"
    ],
    "tempoEstimadoMinutos": 40,
    "anotacoes": "Aplicação estratégica de modelos de IA para decisão executiva."
  },
  {
    "id": "mba-ai-tools",
    "disciplina": "Inteligência Artificial: Conceitos, Ferramentas e Aplicações",
    "macrotema": "Nível 4: A Obra Completa • IA Generativa e Frameworks de Aplicação",
    "microtopico": "IA Generativa, Ferramentas Modernas e Frameworks de Aplicação",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide MBA — Requer base de IA e Machine Learning.",
    "prerequisitos": [
      "mba-analytics-ai"
    ],
    "tempoEstimadoMinutos": 40,
    "anotacoes": "Construção de soluções modernas com LLMs e frameworks corporativos."
  },
  {
    "id": "mba-lgpd",
    "disciplina": "Lei Geral de Proteção de Dados (LGPD)",
    "macrotema": "Nível 4: A Obra Completa • LGPD aplicada à Governança e IA",
    "microtopico": "LGPD aplicada à Governança de Dados, Privacidade e Segurança",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Governança DAMA-DMBOK já dominada!).",
    "prerequisitos": [
      "mba-gov"
    ],
    "tempoEstimadoMinutos": 35,
    "anotacoes": "Conformidade jurídica e técnica sobre o ciclo de vida dos dados governados."
  },
  {
    "id": "topic-4",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 1: Os Tijolos (Fonética e Ortografia)",
    "microtopico": "[Língua Portuguesa • Fonética e Ortografia] Fonética, Divisão Silábica e Sílaba Tônica (Letras vs. Fonemas, Vogal Núcleo, Dígrafos e Encontros)",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "dataEstudo": "2026-09-25",
    "faseRecomendada": "⭐ Conteúdo Dominado! Letras vs Fonemas, Vogal centro da sílaba, Dígrafos, Ditongos/Hiatos e Tonicidade (Oxítona, Paroxítona, Proparoxítona).",
    "anotacoes": "Dominado: Fonemas e Letras (ex: 'am' em tampa = dígrafo, único som) → Encontros Vocálicos (Ditongos/Hiatos) e Consonantais → Separação Silábica → Tonicidade (Oxítona, Paroxítona, Proparoxítona).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "topic-5",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 1: Os Tijolos (Fonética e Ortografia)",
    "microtopico": "[Língua Portuguesa • Fonética e Ortografia] Ortografia Oficial e Regras de Acentuação Gráfica (Oxítonas, Paroxítonas, Proparoxítonas e Hiatos)",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "dataEstudo": "2026-09-25",
    "faseRecomendada": "⭐ Conteúdo Dominado! Ponte para o Nível 2: A ausência de um acento muda o sentido e a classe gramatical (sábia [adjetivo] vs sabia [verbo]).",
    "anotacoes": "Dominado: Regra do Espelho, Proparoxítonas e Hiatos tônicos. Ponte para o Nível 2: O som e a escrita garantem a identidade da palavra (ex: sábia = adjetivo vs sabia = verbo).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-4"
    ],
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "topic-6",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças (Morfologia)",
    "microtopico": "[Língua Portuguesa • Morfologia] Classes de Palavras I: Substantivo, Adjetivo, Artigo e Numeral",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "faseRecomendada": "⭐ Conteúdo Dominado! Os nomes e suas qualidades (base para identificar textos descritivos e funções nominais).",
    "anotacoes": "Dominado: 10 classes (6 variáveis: Substantivo, Artigo, Adjetivo, Numeral, Pronome, Verbo; 4 invariáveis: Advérbio, Preposição, Conjunção, Interjeição). Substantivos (os nomes) e Adjetivos (suas qualidades).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-4"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-8",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças (Morfologia)",
    "microtopico": "[Língua Portuguesa • Morfologia] Classes de Palavras III: Verbos (Tempos, Modos, Vozes e Correlação Verbal)",
    "peso": "Peso 1 (Gerais)",
    "status": "Em Andamento",
    "agendadoPara": "2026-10-26",
    "faseRecomendada": "🎯 Meta Imediata (Nível 2 - Morfologia): O verbo é o motor de qualquer frase (ações, estado, tempos e modos).",
    "anotacoes": "Ponte para o Nível 3: O verbo é o motor da frase. É impossível analisar sujeito, predicado ou transitividade sem antes dominar ações, estados, tempos e modos verbais.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-7",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças (Morfologia)",
    "microtopico": "[Língua Portuguesa • Morfologia] Classes de Palavras II: Pronomes (Classificação e Colocação Pronominal)",
    "peso": "Peso 1 (Gerais)",
    "status": "Em Andamento",
    "agendadoPara": "2026-10-26",
    "faseRecomendada": "🎯 Meta Imediata (Nível 2 - Morfologia): Palavras que substituem os nomes. Entender pronomes relativos (que, o qual) destrava Subordinação e Coesão Referencial.",
    "anotacoes": "Ponte para os Níveis 3 e 4: Entender o que é um pronome relativo (que, o qual) aqui no Nível 2 permite compreender como ele introduz uma nova oração no Nível 3 e evita repetição de palavras na Coesão Referencial (Nível 4).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-9",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças (Morfologia)",
    "microtopico": "[Língua Portuguesa • Morfologia] Classes de Palavras IV: Conjunções Coordenativas e Subordinativas (Valores Semânticos)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 2 - Morfologia): Os conectores de ideias. Passaporte direto entre a Morfologia e a Interpretação de Textos.",
    "anotacoes": "Ponte para o Nível 3: Dominar conjunções e preposições nesta fase é o que impede que a análise sintática e a interpretação pareçam adivinhação. Separar minutos diários para dominar famílias de conectores.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-10",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Termos Essenciais: Sujeito e Predicado",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Passo 1 e 2 da Sintaxe: Achar o Verbo → Identificar Sujeito e Predicado.",
    "anotacoes": "A estrutura em movimento: 1º Achar o Verbo (motor da frase) → 2º Perguntar ao verbo para identificar Sujeito e Predicado.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6",
      "topic-8"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-11",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Termos Integrantes: Objeto Direto/Indireto, Complemento Nominal e Agente da Passiva",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Passo 3 e 4 da Sintaxe: Analisar a Transitividade → Mapear os Complementos.",
    "anotacoes": "Analisar a transitividade (o verbo precisa de complemento?) → Mapear Objeto Direto, Objeto Indireto, Complemento Nominal e Agente da Passiva.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-10"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-12",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Termos Acessórios: Adjunto Adnominal, Adverbial, Aposto e Vocativo",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Termos Essenciais (Sujeito e Predicado).",
    "anotacoes": "Aguardando teoria. Termos que caracterizam, circunstanciam ou explicam os núcleos da oração.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-10"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-13",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Coordenação: Orações Coordenadas Sindéticas e Assindéticas",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Período Composto: Amarração de orações independentes via conjunções coordenativas.",
    "anotacoes": "Aguardando teoria. Aplicação das conjunções aditivas, adversativas, alternativas, conclusivas e explicativas no período composto.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-9",
      "topic-10"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-14",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Subordinação I: Orações Subordinadas Substantivas e Adjetivas",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Como o pronome relativo (que, o qual) e a conjunção integrante introduzem novas orações.",
    "anotacoes": "Aplicação direta dos pronomes relativos (Nível 2) introduzindo orações adjetivas e das funções sintáticas do período simples em forma de oração.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-7",
      "topic-9",
      "topic-11",
      "topic-12"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-15",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe)",
    "microtopico": "[Língua Portuguesa • Sintaxe] Subordinação II: Orações Subordinadas Adverbiais (Causais, Concessivas etc.)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Ponte para o Nível 4: Usar conectores (ex: 'embora') para criar relações lógicas entre frases.",
    "anotacoes": "Ponte para o Nível 4: É aqui que você pega a conjunção 'embora' (aprendida no Nível 2) e usa para criar uma oração subordinada concessiva, gerando a lógica e fluidez do texto longo.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-9",
      "topic-12",
      "topic-13"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-16",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Pontuação)",
    "microtopico": "[Língua Portuguesa • Pontuação] Emprego da Vírgula e Demais Sinais de Pontuação em Texto",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Sintaxe do Período Simples e Composto.",
    "anotacoes": "Aguardando teoria. Pontuação em português é 100% baseada na ordem sintática dos termos e orações.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-11",
      "topic-12",
      "topic-13",
      "topic-14",
      "topic-15"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-17",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Concordância)",
    "microtopico": "[Língua Portuguesa • Concordância] Concordância Verbal (Regras Gerais, Sujeito Composto, Partícula SE, Haver/Fazer)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Verbos, Pronomes e Sintaxe do Período Simples.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-7",
      "topic-8",
      "topic-10",
      "topic-11"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-18",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Concordância)",
    "microtopico": "[Língua Portuguesa • Concordância] Concordância Nominal (Adjetivos, Expressões Especiais)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Sintaxe do Período Simples.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6",
      "topic-10",
      "topic-12"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-19",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Regência)",
    "microtopico": "[Língua Portuguesa • Regência] Regência Verbal e Pronomes Relativos (Verbos Típicos FCC)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Pronomes, Verbos e Termos Integrantes.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-7",
      "topic-8",
      "topic-11"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-20",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Regência)",
    "microtopico": "[Língua Portuguesa • Regência] Regência Nominal e Preposições",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Termos Integrantes (Complemento Nominal).",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6",
      "topic-11"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-21",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Crase)",
    "microtopico": "[Língua Portuguesa • Crase] Crase: Regras Gerais e Casos Proibitivos",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Regência Verbal e Nominal.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-19",
      "topic-20"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-22",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento (Sintaxe • Crase)",
    "microtopico": "[Língua Portuguesa • Crase] Crase: Casos Facultativos e Casos Especiais",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando Regras Gerais de Crase.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-21"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-2",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa (Texto, Coesão e Tipologia)",
    "microtopico": "[Língua Portuguesa • Texto, Coesão e Tipologia] Coesão Textual (Referencial, Sequencial e Marcadores Discursivos)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente (Nível 4 - A Obra Completa) - Requer Pronomes e Conjunções (Nível 2).",
    "anotacoes": "Coesão Referencial (usar pronomes para não repetir palavras) → Coesão Sequencial (usar conjunções para o texto avançar).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-7",
      "topic-9"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-3",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa (Texto, Coesão e Tipologia)",
    "microtopico": "[Língua Portuguesa • Texto, Coesão e Tipologia] Coerência, Semântica e Figuras de Linguagem da Banca FCC",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente (Nível 4 - A Obra Completa) - Requer Coesão e Sintaxe do Período Composto (Nível 3).",
    "anotacoes": "Depende da Coesão Textual e da amarração lógica entre frases construída nas orações coordenadas e subordinadas (Nível 3).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-2",
      "topic-10",
      "topic-13",
      "topic-15"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-1",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa (Texto, Coesão e Tipologia)",
    "microtopico": "[Língua Portuguesa • Texto, Coesão e Tipologia] Tipologia e Gêneros Textuais (Narrativo, Descritivo, Dissertativo/Argumentativo)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pausado (Nível 4 - Topo da Pirâmide): Depende de toda a linhagem anterior (Morfologia, Sintaxe e Coesão).",
    "anotacoes": "A Linhagem Completa: Você só reconhece um texto Descritivo pela abundância de adjetivos (Nível 2) e verbos de estado (Níveis 2 e 3); e só domina um texto Dissertativo-Argumentativo acompanhando as orações subordinadas (Nível 3) amarradas por conjunções conclusivas/adversativas e pronomes (Nível 2).",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-6",
      "topic-8",
      "topic-7",
      "topic-9",
      "topic-10",
      "topic-15",
      "topic-2",
      "topic-3"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-23",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Aritmética e Proporcionalidade",
    "microtopico": "[Matemática e Raciocínio Lógico • Aritmética e Proporcionalidade] Razão, Proporção, Regra de Três Simples e Composta",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22",
    "prerequisitos": [
      "math-m03-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-24",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Porcentagem e Variação Percentual",
    "microtopico": "[Matemática e Raciocínio Lógico • Porcentagem e Variação Percentual] Porcentagem, Variação Percentual e Lucro/Prejuízo",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22",
    "prerequisitos": [
      "topic-23"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-32",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Sequências Lógicas e Associação",
    "microtopico": "[Matemática e Raciocínio Lógico • Sequências Lógicas e Associação] Sequências Numéricas, Figurais e Problemas de Associação Lógica",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22",
    "prerequisitos": [
      "math-m02-u03"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-31",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Conjuntos, Diagramas e Operações (∪, ∩, −)",
    "microtopico": "[Matemática e Raciocínio Lógico • Conjuntos, Diagramas e Operações (∪, ∩, −)] Diagramas Lógicos, Conjuntos e Operações (União, Interseção, Diferença)",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-25",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Análise Combinatória (PFC, Arranjo, Combinação)",
    "microtopico": "[Matemática e Raciocínio Lógico • Análise Combinatória (PFC, Arranjo, Combinação)] Princípio Fundamental da Contagem, Arranjos, Combinações e Permutações",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 2 - RLM): Conjuntos e Proporção já dominados! Base obrigatória para Probabilidade.",
    "anotacoes": "Ponte para Probabilidade: Sem saber contar o total de casos possíveis e favoráveis (Arranjo vs Combinação), é impossível calcular probabilidades.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-23",
      "topic-31"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-26",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Probabilidade Básica, Condicional e Independência",
    "microtopico": "[Matemática e Raciocínio Lógico • Probabilidade Básica, Condicional e Independência] Probabilidade Básica, Condicional e Eventos Independentes",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Análise Combinatória (Nível 2) e Conjuntos (Nível 1).",
    "anotacoes": "A probabilidade une a Contagem (PFC/Combinação) com as operações de Conjuntos (União = OU, Interseção = E).",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-25",
      "topic-31"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-27",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 3: A Estrutura em Movimento • Proposições, Conectivos e Tabela-Verdade",
    "microtopico": "[Matemática e Raciocínio Lógico • Proposições, Conectivos e Tabela-Verdade] Proposições, Conectivos Lógicos e Tabela-Verdade",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 3 - RLM): Conectivos lógicos espelham as operações de Conjuntos já dominadas!",
    "anotacoes": "Ponte: Conjunção (∧) = Interseção; Disjunção (∨) = União; Condicional (→) = Inclusão de conjuntos. Base da lógica formal FCC.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-31"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-28",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 3: A Estrutura em Movimento • Equivalências Lógicas (Contrapositiva e De Morgan)",
    "microtopico": "[Matemática e Raciocínio Lógico • Equivalências Lógicas (Contrapositiva e De Morgan)] Equivalências Lógicas (Contrapositiva, Leis de De Morgan) e Negações",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer domínio de Conectivos e Tabela-Verdade.",
    "anotacoes": "A multiplicação da lógica: transformar \"Se P então Q\" em \"~Q → ~P\" ou \"~P ou Q\" e negar proposições compostas.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-27"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-29",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 3: A Estrutura em Movimento • Tautologia, Contradição e Contingência",
    "microtopico": "[Matemática e Raciocínio Lógico • Tautologia, Contradição e Contingência] Tautologia, Contradição, Contingência e Implicação Lógica",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Tabela-Verdade e Equivalências Lógicas.",
    "anotacoes": "Avaliação estrutural de fórmulas proposicionais completas.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-27",
      "topic-28"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-30",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 4: A Obra Completa • Validade de Argumentos, Silogismos e Dedução",
    "microtopico": "[Matemática e Raciocínio Lógico • Validade de Argumentos, Silogismos e Dedução] Validade de Argumentos, Silogismos e Métodos de Dedução",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de RLM — Requer Equivalências, Implicação e Diagramas.",
    "anotacoes": "O telhado do Raciocínio Lógico: encadear premissas (proposições e quantificadores) para validar conclusões sem cair em falácias da FCC.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "prerequisitos": [
      "topic-28",
      "topic-29",
      "topic-31"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-33",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Lei Orgânica TCE-GO: Natureza e Jurisdição (Arts. 1º a 15)",
    "microtopico": "[Legislação Institucional • Lei Orgânica TCE-GO: Natureza e Jurisdição (Arts. 1º a 15)] TCE-GO: Natureza, Competências Constitucionais e Jurisdição (Arts. 1º a 15)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Legislação): Alicerce institucional do TCE-GO.",
    "anotacoes": "Antes de estudar o rito de julgamento ou sanções, é preciso entender o que é o Tribunal, sua jurisdição e suas competências constitucionais.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-34",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 2: A Função das Peças • Julgamento de Contas e Fiscalização (Arts. 16 a 45)",
    "microtopico": "[Legislação Institucional • Julgamento de Contas e Fiscalização (Arts. 16 a 45)] TCE-GO: Julgamento de Contas e Fiscalização de Atos (Arts. 16 a 45)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Competências e Jurisdição do TCE-GO (Arts. 1º a 15).",
    "anotacoes": "Como o Tribunal exerce na prática as competências definidas no Nível 1 (Tomada e Prestação de Contas, Contas Regulares, Com Ressalva e Irregulares).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-33"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-35",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sanções, Recursos e Organização (Conselheiros e MPC)",
    "microtopico": "[Legislação Institucional • Sanções, Recursos e Organização (Conselheiros e MPC)] TCE-GO: Sanções, Recursos e Organização do Tribunal (Conselheiros e MPC)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Julgamento de Contas e Fiscalização (Arts. 16 a 45).",
    "anotacoes": "Consequências do julgamento (multas, débito, inabilitação) e recursos cabíveis contra as decisões.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-34"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-36",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 4: A Obra Completa • Regimento Interno TCE-GO (Sessões, Plenário e Câmaras)",
    "microtopico": "[Legislação Institucional • Regimento Interno TCE-GO (Sessões, Plenário e Câmaras)] Regimento Interno (Resolução 22/2008): Estrutura, Sessões Plenárias e Câmaras",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer domínio completo da Lei Orgânica do TCE-GO.",
    "anotacoes": "O detalhamento operacional e regimental de tudo o que a Lei Orgânica estabeleceu nos Níveis 1 a 3.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-34",
      "topic-35"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-37",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Estatuto dos Servidores de GO: Provimento, Vacância e Direitos",
    "microtopico": "[Legislação Institucional • Estatuto dos Servidores de GO: Provimento, Vacância e Direitos] Estatuto GO: Provimento, Vacância, Direitos, Vantagens e Licenças",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Estatuto GO): Ingresso e vínculo funcional.",
    "anotacoes": "Ciclo de vida funcional do servidor: como ingressa (nomeação, posse, exercício), direitos e vacância.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-38",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 2: A Estrutura em Movimento • Estatuto GO: Regime Disciplinar e PAD",
    "microtopico": "[Legislação Institucional • Estatuto GO: Regime Disciplinar e PAD] Estatuto GO: Regime Disciplinar, Deveres, Proibições, Penalidades e PAD",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer domínio de Provimento, Direitos e Deveres básicos (Lei 20.756/2020).",
    "anotacoes": "Responsabilização administrativa, penalidades (advertência, suspensão, demissão) e fases do Processo Administrativo Disciplinar (PAD).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-37"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-40",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 1: Os Tijolos • Modelagem Conceitual (MER/DER)",
    "microtopico": "[Banco de Dados • Modelagem Conceitual (MER/DER)] Modelagem Conceitual: Diagrama Entidade-Relacionamento (DER), Entidades, Atributos e Relacionamentos",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "Níveis de abstração (conceitual, lógico, físico). MER/DER: entidades, atributos e cardinalidades (1:1, 1:N, N:N).",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-41",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 1: Os Tijolos • Modelagem Lógica Relacional (PK e FK)",
    "microtopico": "[Banco de Dados • Modelagem Lógica Relacional (PK e FK)] Modelagem Lógica e Transformação DER para Esquema Relacional (Chaves Primárias e Estrangeiras)",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "Chaves e integridade referencial: PK (identificação única), FK (vínculo relacional). Arquiteturas OLTP (alta normalização/escrita rápida) vs. OLAP (dimensional, Star/Snowflake schema).",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-40"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-42",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 1: Os Tijolos • Normalização de Dados (1FN à 4FN / BCFN)",
    "microtopico": "[Banco de Dados • Normalização de Dados (1FN à 4FN / BCFN)] Formas Normais: 1FN, 2FN, 3FN, BCFN e 4FN",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-09-24",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "1FN (atomicidade e sem repetições); 2FN (elimina dependência parcial da PK composta); 3FN (elimina dependência transitiva entre não-chaves); BCFN (todo determinante é chave candidata); 4FN (elimina dependência multivalorada independente).",
    "proximaRevisao": "2026-10-01",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-41"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-43",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 2: A Função das Peças • SQL Básico: DDL e DCL",
    "microtopico": "[Banco de Dados • SQL Básico: DDL e DCL] SQL Básico: DDL (CREATE, ALTER, DROP) e DCL (GRANT, REVOKE)",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "DDL: CREATE (PK, FK, NOT NULL, CHECK, UNIQUE), ALTER, DROP (remove objeto e dados) vs. TRUNCATE (limpa páginas/registros rápido, mantendo schema).",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-41"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-44",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 2: A Função das Peças • SQL DQL/DML: Consultas e Agregações",
    "microtopico": "[Banco de Dados • SQL DQL/DML: Consultas e Agregações] SQL DQL/DML: Consultas Básicas, Filtros, Agrupamentos (GROUP BY, HAVING) e Ordenação",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "DML (INSERT, UPDATE, DELETE com WHERE). DQL: Ordem lógica de execução (FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT); CASE WHEN; COALESCE; funções agregadas.",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-43"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-45",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 2: A Função das Peças • Junções Relacionais (JOINs) e Subconsultas",
    "microtopico": "[Banco de Dados • Junções Relacionais (JOINs) e Subconsultas] Junções Relacionais (INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN) e Subconsultas",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "JOINs: INNER, LEFT, RIGHT, FULL OUTER. Subconsultas (nested queries): escalares, de tabela e correlacionadas (IN, EXISTS). WHERE filtra linhas antes do agrupamento; HAVING filtra pós-agregação.",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-41",
      "topic-44"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-46",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 2: A Função das Peças • Window Functions e CTEs (WITH)",
    "microtopico": "[Banco de Dados • Window Functions e CTEs (WITH)] Window Functions (ROW_NUMBER, RANK, DENSE_RANK, OVER) e CTEs (WITH)",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-10-07",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "CTEs modulares com WITH (inclui WITH RECURSIVE). Window Functions (OVER PARTITION BY... ORDER BY): ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG/LEAD (navegação temporal), somas/médias móveis. Análise temporal (DATE_TRUNC, EXTRACT, MoM/YoY).",
    "proximaRevisao": "2026-10-14",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-45"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-47",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura de SGBDs (Oracle, SQL Server, MySQL)",
    "microtopico": "[Banco de Dados • Arquitetura de SGBDs (Oracle, SQL Server, MySQL)] SGBDs Relacionais de Mercado: Oracle, SQL Server e MySQL (Arquitetura e Características)",
    "peso": "Peso 2 (Específicos)",
    "status": "Teoria Concluída",
    "dataEstudo": "2026-09-24",
    "faseRecomendada": "📖 Teoria pronta! Fazer bateria de questões.",
    "anotacoes": "RDBMS com ACID: Oracle (líder corporativo, alta escalabilidade, RAC, missão crítica); SQL Server (ecossistema MS, Always On, forte integração BI); MySQL (código aberto, leve/web, motor padrão InnoDB com suporte ACID).",
    "proximaRevisao": "2026-10-01",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-43",
      "topic-44"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-39",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Transações ACID, Concorrência e Locks",
    "microtopico": "[Banco de Dados • Transações ACID, Concorrência e Locks] Propriedades ACID, Concorrência e Gerenciamento de Transações",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 3 - Banco de Dados): Modelagem e SQL já concluídos! Momento ideal para estudar Transações ACID.",
    "anotacoes": "Ponte: Com Tabelas, Chaves e DML dominados, agora estuda-se como o SGBD garante Atomicidade, Consistência, Isolamento (Dirty/Phantom Read, MVCC) e Durabilidade.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-44",
      "topic-47"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-48",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Planos de Execução e Índices (B-Tree, Hash, GIN)",
    "microtopico": "[Banco de Dados • Planos de Execução e Índices (B-Tree, Hash, GIN)] Otimização de Consultas: Planos de Execução (EXPLAIN ANALYZE), Índices (B-Tree, Hash, GIN, GiST)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer JOINs, Arquitetura de SGBDs e Transações ACID.",
    "anotacoes": "Como acelerar consultas complexas (JOINs) sem degradar a escrita transacional (ACID).",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-45",
      "topic-47",
      "topic-39"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-49",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 4: A Obra Completa • Bancos NoSQL (Chave-Valor, Documentos e Colunar)",
    "microtopico": "[Banco de Dados • Bancos NoSQL (Chave-Valor, Documentos e Colunar)] Bancos NoSQL: Modelos Chave-Valor (Redis), Documentos (MongoDB) e Colunar",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Modelagem Relacional e Transações ACID (para contrastar com BASE/CAP).",
    "anotacoes": "Entender NoSQL exige contrastar o modelo relacional/ACID com o Teorema CAP, modelo BASE e agregados em Redis/MongoDB.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-41",
      "topic-39"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-50",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 4: A Obra Completa • Bancos Vetoriais, Embeddings, pgvector e HNSW",
    "microtopico": "[Banco de Dados • Bancos Vetoriais, Embeddings, pgvector e HNSW] Bancos Vetoriais e Busca Semântica: Embeddings, pgvector, Índices HNSW e Cosine Similarity",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de Dados — Requer Indexação Avançada e NoSQL.",
    "anotacoes": "Base de armazenamento para sistemas de RAG e IA Generativa: busca por similaridade de cosseno e grafos HNSW.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-48",
      "topic-49"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-51",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 1: Os Tijolos • Lógica de Programação e Complexidade (Big-O)",
    "microtopico": "[Desenvolvimento de Sistemas • Lógica de Programação e Complexidade (Big-O)] Lógica de Programação, Complexidade de Algoritmos (Notação Big-O: Tempo e Espaço)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Desenvolvimento): Fundamento de algoritmos e análise assintótica.",
    "anotacoes": "Os tijolos da computação: controle de fluxo e custo de tempo/memória O(1), O(log n), O(n), O(n log n), O(n²).",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-52",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 1: Os Tijolos • Estruturas de Dados Lineares (Vetores, Listas, Pilhas, Filas)",
    "microtopico": "[Desenvolvimento de Sistemas • Estruturas de Dados Lineares (Vetores, Listas, Pilhas, Filas)] Estruturas Lineares: Vetores, Matrizes, Listas Encadeadas, Pilhas e Filas",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Lógica e Complexidade Big-O.",
    "anotacoes": "LIFO (Pilha) vs FIFO (Fila) e alocação contígua vs encadeada.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-51"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-53",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 1: Os Tijolos • Estruturas Não Lineares (Tabelas Hash, Árvores BST/AVL e Grafos)",
    "microtopico": "[Desenvolvimento de Sistemas • Estruturas Não Lineares (Tabelas Hash, Árvores BST/AVL e Grafos)] Estruturas Não Lineares e Busca: Tabelas Hash, Árvores Binárias (BST, AVL) e Grafos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Estruturas Lineares.",
    "anotacoes": "Ponte para Bancos de Dados e IA: Árvores e Grafos fundamentam índices de SGBD e algoritmos de busca.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-52"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-64",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 1: Os Tijolos • Controle de Versão com Git e Workflows",
    "microtopico": "[Desenvolvimento de Sistemas • Controle de Versão com Git e Workflows] Git: Comandos Fundamentais (commit, branch, merge, rebase, cherry-pick) e Workflows (GitFlow, Trunk-Based)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Lógica Básica — Ferramenta essencial antes de projetos e CI/CD.",
    "anotacoes": "Domínio de commit, branch, merge, rebase, cherry-pick e GitFlow/Trunk-Based.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-51"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-54",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Programação Orientada a Objetos (POO)",
    "microtopico": "[Desenvolvimento de Sistemas • Programação Orientada a Objetos (POO)] Programação Orientada a Objetos: Classes, Objetos, Encapsulamento, Herança, Polimorfismo e Interfaces",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Algoritmos e Estruturas de Dados Lineares.",
    "anotacoes": "Pilares da POO (Abstração, Encapsulamento, Herança, Polimorfismo) — pré-requisito para SOLID e Padrões de Projeto.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-51",
      "topic-52"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-55",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Programação Funcional (Imutabilidade, Map/Filter/Reduce)",
    "microtopico": "[Desenvolvimento de Sistemas • Programação Funcional (Imutabilidade, Map/Filter/Reduce)] Programação Funcional: Funções Puras, Imutabilidade, Lambdas, Map/Filter/Reduce e Closures",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Algoritmos e Estruturas de Dados Lineares.",
    "anotacoes": "Funções puras, alta ordem, closures e transformação declarativa de coleções.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-51",
      "topic-52"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-56",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Python para Desenvolvimento e Asyncio",
    "microtopico": "[Desenvolvimento de Sistemas • Python para Desenvolvimento e Asyncio] Python para Desenvolvimento: Sintaxe, Tipos, Módulos, Manipulação de Dados e Asyncio",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Paradigmas POO e Funcional.",
    "anotacoes": "Aplicação dos paradigmas POO e Funcional na linguagem central de Ciência de Dados e IA.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-54",
      "topic-55"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-57",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Java e TypeScript/JavaScript",
    "microtopico": "[Desenvolvimento de Sistemas • Java e TypeScript/JavaScript] Java e TypeScript/JavaScript: Tipagem, Concorrência e Ecossistema",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Paradigmas POO e Funcional.",
    "anotacoes": "Tipagem estática vs dinâmica, generics, promises/async-await e concorrência na JVM/V8.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-54",
      "topic-55"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-58",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura Web e Protocolo HTTP/HTTPS",
    "microtopico": "[Desenvolvimento de Sistemas • Arquitetura Web e Protocolo HTTP/HTTPS] Arquitetura Web, HTTP/HTTPS, Métodos (GET, POST, PUT, DELETE, PATCH) e Status Codes",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer domínio das Linguagens de Programação.",
    "anotacoes": "Semântica dos verbos HTTP (idempotência de GET, PUT, DELETE vs POST), cabeçalhos e famílias de Status Codes (2xx, 3xx, 4xx, 5xx).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-56",
      "topic-57"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-59",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 3: A Estrutura em Movimento • Construção de APIs RESTful e OpenAPI/Swagger",
    "microtopico": "[Desenvolvimento de Sistemas • Construção de APIs RESTful e OpenAPI/Swagger] Construção de APIs RESTful: Padrões, Paginação, Versionamento e Especificação OpenAPI/Swagger",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Arquitetura Web e HTTP/HTTPS.",
    "anotacoes": "Restrições arquiteturais de Fielding (Stateless, Cacheable, Uniform Interface, HATEOAS), paginação e versionamento.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-58"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-62",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 3: A Estrutura em Movimento • Back-end com Node.js, Event Loop e Middlewares",
    "microtopico": "[Desenvolvimento de Sistemas • Back-end com Node.js, Event Loop e Middlewares] Back-end com Node.js: Event Loop, NPM/Yarn, Criação de Servidores Express e Middlewares",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer TypeScript/JS e APIs RESTful.",
    "anotacoes": "Arquitetura single-thread non-blocking I/O, Event Loop e construção de servidores REST.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-57",
      "topic-59"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-61",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 3: A Estrutura em Movimento • Front-end com React, Hooks e SPA",
    "microtopico": "[Desenvolvimento de Sistemas • Front-end com React, Hooks e SPA] Desenvolvimento Front-end: SPA, React (Componentes, Hooks useState/useEffect, Virtual DOM)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer TypeScript/JS e consumo de APIs REST.",
    "anotacoes": "Componentização, estado e ciclo de vida com Hooks (useState, useEffect) e reconciliação no Virtual DOM.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-57",
      "topic-59"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-60",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 4: A Obra Completa • APIs Modernas: GraphQL e WebSockets",
    "microtopico": "[Desenvolvimento de Sistemas • APIs Modernas: GraphQL e WebSockets] APIs Modernas: GraphQL (Queries, Mutations, Schemas) e Comunicação em Tempo Real (WebSockets)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer domínio de APIs RESTful para comparar arquiteturas.",
    "anotacoes": "Resolução de overfetching/underfetching com GraphQL e comunicação bidirecional full-duplex com WebSockets.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-59"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-63",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 4: A Obra Completa • Segurança em APIs: OAuth 2.0, OIDC e JWT",
    "microtopico": "[Desenvolvimento de Sistemas • Segurança em APIs: OAuth 2.0, OIDC e JWT] Autenticação e Autorização: Protocolos OAuth 2.0, OpenID Connect (OIDC) e Estrutura JWT",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide Web — Requer APIs RESTful e Middlewares de Back-end.",
    "anotacoes": "Delegação de autorização (OAuth 2.0), camada de autenticação (OIDC) e assinatura/validação de tokens stateless (JWT Header.Payload.Signature).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-59",
      "topic-62"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-93",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 1: Os Tijolos • Ciclos de Vida de Software e Métodos Ágeis (Scrum, Kanban, XP)",
    "microtopico": "[Engenharia de Software • Ciclos de Vida de Software e Métodos Ágeis (Scrum, Kanban, XP)] Modelos de Ciclo de Vida: Cascata, Espiral e Métodos Ágeis (Manifesto Ágil, Scrum, Kanban, XP)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Engenharia de Software): Como organizar o trabalho antes de codificar.",
    "anotacoes": "Contraste entre modelos preditivos (Cascata) e iterativos/adaptativos (Scrum: Papéis, Eventos, Artefatos; Kanban: WIP limits; XP: Pair Programming, TDD).",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-94",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 1: Os Tijolos • Engenharia de Requisitos, User Stories e Casos de Uso",
    "microtopico": "[Engenharia de Software • Engenharia de Requisitos, User Stories e Casos de Uso] Requisitos Funcionais e Não Funcionais, Histórias de Usuário, Critérios de Aceite e Casos de Uso",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Ciclos de Vida e Métodos Ágeis.",
    "anotacoes": "Requisitos Funcionais (o que o sistema faz) vs Não Funcionais (desempenho, segurança, disponibilidade) e critérios de aceite (INVEST / Given-When-Then).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-93"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-97",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 2: A Função das Peças • Modelagem UML 2.5 (Diagramas Estruturais e Comportamentais)",
    "microtopico": "[Engenharia de Software • Modelagem UML 2.5 (Diagramas Estruturais e Comportamentais)] Modelagem UML 2.5: Diagramas Estruturais (Classes, Componentes) e Comportamentais (Casos de Uso, Sequência)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Engenharia de Requisitos e POO.",
    "anotacoes": "Ponte entre Requisitos e Código: Diagramas de Classes (Associação, Agregação, Composição, Herança), Sequência e Casos de Uso (include vs extend).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-94",
      "topic-54"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-98",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 2: A Função das Peças • Modelagem de Processos de Negócio (BPMN 2.0)",
    "microtopico": "[Engenharia de Software • Modelagem de Processos de Negócio (BPMN 2.0)] Modelagem e Notação de Processos de Negócio: BPMN 2.0 (Eventos, Atividades, Gateways e Raias)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Engenharia de Requisitos.",
    "anotacoes": "Eventos (Início, Intermediário, Fim), Atividades, Gateways (Exclusivo XOR, Paralelo AND, Inclusivo OR) e Pools/Lanes.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-94"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-95",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 3: A Estrutura em Movimento • Princípios de Design SOLID",
    "microtopico": "[Engenharia de Software • Princípios de Design SOLID] Princípios de Design: SOLID (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer POO e Modelagem de Classes UML.",
    "anotacoes": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation e Dependency Inversion para baixo acoplamento e alta coesão.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-54",
      "topic-97"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-96",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 3: A Estrutura em Movimento • Clean Code (DRY, KISS, YAGNI) e Padrões de Projeto (GoF)",
    "microtopico": "[Engenharia de Software • Clean Code (DRY, KISS, YAGNI) e Padrões de Projeto (GoF)] Princípios de Boas Práticas: DRY, KISS, YAGNI, Clean Code e Padrões de Projeto (GoF)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Princípios SOLID.",
    "anotacoes": "Padrões Criacionais (Singleton, Factory, Builder), Estruturais (Adapter, Facade, Decorator) e Comportamentais (Strategy, Observer, Command).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-95"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-99",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 4: A Obra Completa • Pirâmide de Testes, TDD e Refatoração (Code Smells)",
    "microtopico": "[Engenharia de Software • Pirâmide de Testes, TDD e Refatoração (Code Smells)] Pirâmide de Testes: Testes Unitários, Integração, Sistema e Aceitação; TDD e Refatoração (Code Smells)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de Engenharia — Requer Requisitos e Design/Clean Code.",
    "anotacoes": "Base larga de Testes Unitários rápidos, camada média de Integração e topo de E2E/Aceitação; ciclo Red-Green-Refactor do TDD.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-94",
      "topic-96"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-86",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 1: Os Tijolos • Sistemas Operacionais (Processos, Threads e Memória Virtual)",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Sistemas Operacionais (Processos, Threads e Memória Virtual)] Sistemas Operacionais: Processos, Threads, Gerenciamento de Memória (Paginação, Memória Virtual) e I/O",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Infraestrutura): Fundamento de qualquer servidor ou container.",
    "anotacoes": "Kernel vs User space, escalonamento de processos/threads, paginação e swap.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-87",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 1: Os Tijolos • Administração Linux/Windows Server, Bash e PowerShell",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Administração Linux/Windows Server, Bash e PowerShell] Linux/Unix e Windows Server: Permissões, Comandos Essenciais, Shell Script (Bash) e PowerShell",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Fundamentos de Sistemas Operacionais.",
    "anotacoes": "Permissões POSIX (chmod/chown rwx), gerenciamento de serviços (systemd) e automação via shell.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-86"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-88",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Modelo OSI vs TCP/IP, Endereçamento IP e Roteamento",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Modelo OSI vs TCP/IP, Endereçamento IP e Roteamento] Modelo OSI vs Arquitetura TCP/IP: Camadas, Encapsulamento, Protocolos IP (IPv4, IPv6) e Roteamento",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer base de Sistemas Operacionais.",
    "anotacoes": "As 7 camadas OSI (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação), sub-redes CIDR e roteamento de pacotes.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-86"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-89",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/S, TLS)",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/S, TLS)] Camada de Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/1.1, HTTP/2, HTTPS, TLS/SSL)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Modelo OSI e Camada de Rede (IP).",
    "anotacoes": "Three-way handshake do TCP (SYN, SYN-ACK, ACK), velocidade do UDP e resolução de nomes/criptografia em trânsito (TLS).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-88"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-90",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 3: A Estrutura em Movimento • Switches, Roteadores, VLANs, NAT, Proxy Reverso e Load Balancer",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Switches, Roteadores, VLANs, NAT, Proxy Reverso e Load Balancer] Dispositivos de Rede: Switches, Roteadores, VLANs, NAT, Proxy Reverso e Balanceamento de Carga",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Camadas de Rede, Transporte e Aplicação.",
    "anotacoes": "Domínio de colisão vs domínio de broadcast (VLANs) e distribuição de tráfego em alta disponibilidade.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-88",
      "topic-89"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-91",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 4: A Obra Completa • Computação em Nuvem: IaaS, PaaS, SaaS e Modelos de Implantação",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Computação em Nuvem: IaaS, PaaS, SaaS e Modelos de Implantação] Fundamentos de Cloud: Modelos de Serviço (IaaS, PaaS, SaaS) e Implantação (Pública, Privada, Híbrida)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Administração de Servidores e Infraestrutura de Rede.",
    "anotacoes": "Modelo de Responsabilidade Compartilhada na nuvem: o que é dever do provedor vs dever do cliente em IaaS, PaaS e SaaS.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-87",
      "topic-90"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-92",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 4: A Obra Completa • Arquiteturas Cloud: Serverless, Microserviços, Storage S3 e Elasticidade",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Arquiteturas Cloud: Serverless, Microserviços, Storage S3 e Elasticidade] Arquiteturas em Nuvem: Serverless (FaaS), Microserviços, Storage (Block, Object Storage S3) e Elasticidade",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide Cloud — Requer Fundamentos de Nuvem.",
    "anotacoes": "Diferença entre Block Storage (EBS), File Storage (EFS) e Object Storage (S3), escalabilidade horizontal vs vertical e FaaS.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-91"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-100",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 1: Os Tijolos • Cultura DevOps e Confiabilidade (SRE, SLI, SLO e SLA)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Cultura DevOps e Confiabilidade (SRE, SLI, SLO e SLA)] Fundamentos de DevOps, Site Reliability Engineering (SRE), SLI, SLO e SLA",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Administração de Sistemas e Métodos Ágeis.",
    "anotacoes": "SLI (o indicador medido, ex: latência), SLO (a meta interna da equipe) e SLA (o contrato jurídico com penalidade), além de Error Budget.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-87",
      "topic-93"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-102",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 1: Os Tijolos • Containerização com Docker e Docker Compose",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Containerização com Docker e Docker Compose] Containers com Docker: Dockerfile, Imagens, Containers, Volumes, Redes e Docker Compose",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Administração Linux/Servidores.",
    "anotacoes": "Isolamento via namespaces e cgroups, camadas de imagem no Dockerfile, persistência em Volumes e multi-containers com Compose.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-87"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-101",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 2: A Função das Peças • Pipelines de CI/CD (GitHub Actions e GitLab CI)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Pipelines de CI/CD (GitHub Actions e GitLab CI)] Pipelines de Integração e Entrega Contínua (CI/CD): GitHub Actions e GitLab CI (Triggers, Jobs, Runners e Deploys)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Git, Cultura DevOps e Docker.",
    "anotacoes": "Automação de build, testes, empacotamento de imagem Docker e estratégias de deploy (Blue-Green, Canary, Rolling Update).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-64",
      "topic-100",
      "topic-102"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-104",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 2: A Função das Peças • Infraestrutura como Código (Terraform e Ansible)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Infraestrutura como Código (Terraform e Ansible)] Infraestrutura como Código (IaC): Conceitos, Vantagens e Introdução a Terraform e Ansible",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Computação em Nuvem e Cultura DevOps.",
    "anotacoes": "Provisionamento declarativo e controle de estado (Terraform State) vs gerenciamento de configuração e idempotência (Ansible Playbooks).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-91",
      "topic-100"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-103",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 3: A Estrutura em Movimento • Orquestração com Kubernetes (K8s)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Orquestração com Kubernetes (K8s)] Orquestração com Kubernetes (K8s): Pods, Deployments, Services, Ingress, ConfigMaps e Secrets",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Containers Docker e Infraestrutura de Rede.",
    "anotacoes": "Control Plane vs Worker Nodes, Pods, ReplicaSets, Deployments, Services (ClusterIP, NodePort, LoadBalancer), Ingress, ConfigMaps e Secrets.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-102",
      "topic-90"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-105",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 4: A Obra Completa • Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana)] Pilares da Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana, ELK/OpenSearch)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide DevOps — Requer SRE e Kubernetes.",
    "anotacoes": "Os 3 pilares da Observabilidade aplicados a ambientes distribuídos para monitorar SLIs/SLOs e diagnosticar incidentes.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-100",
      "topic-103"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-79",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 1: Os Tijolos • Princípios CIDA (Confidencialidade, Integridade, Disponibilidade, Autenticidade)",
    "microtopico": "[Segurança da Informação • Princípios CIDA (Confidencialidade, Integridade, Disponibilidade, Autenticidade)] Princípios da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade e Autenticidade (CIDA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Segurança): A tríade CIA + Autenticidade e Não Repúdio.",
    "anotacoes": "Os tijolos da Segurança: toda ferramenta ou norma existe para proteger um ou mais desses 5 princípios.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-81",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 1: Os Tijolos • Criptografia Simétrica, Assimétrica, Hash e Assinatura Digital",
    "microtopico": "[Segurança da Informação • Criptografia Simétrica, Assimétrica, Hash e Assinatura Digital] Criptografia Simétrica (AES), Assimétrica (RSA, Curvas Elípticas), Funções Hash (SHA-256) e Assinatura Digital",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Princípios CIDA.",
    "anotacoes": "Ponte: Simétrica (AES) garante Confidencialidade rápida; Hash (SHA-256) garante Integridade; Assimétrica (RSA/Chave Privada) garante Assinatura/Autenticidade e Não Repúdio.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-79"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-82",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 2: A Função das Peças • Certificação Digital e ICP-Brasil (A1/A3)",
    "microtopico": "[Segurança da Informação • Certificação Digital e ICP-Brasil (A1/A3)] Infraestrutura de Chaves Públicas (ICP-Brasil), Certificados Digitais A1/A3 e Carimbo do Tempo",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Criptografia Assimétrica e Assinatura Digital.",
    "anotacoes": "Cadeia de confiança (AC-Raiz, AC, AR), certificados A1 (software, 1 ano) vs A3 (hardware/token, até 5 anos).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-81"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-80",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 2: A Função das Peças • Gestão de Segurança e Riscos (ISO/IEC 27001 e 27002)",
    "microtopico": "[Segurança da Informação • Gestão de Segurança e Riscos (ISO/IEC 27001 e 27002)] Normas ISO/IEC 27001 e 27002: Controles, Política de Segurança e Gestão de Riscos de TI",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Princípios CIDA.",
    "anotacoes": "SGSI (27001) e catálogo de controles organizacionais, tecnológicos, físicos e de pessoas (27002). Tratamento de riscos: mitigar, transferir, evitar ou aceitar.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-79"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-83",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Defesa de Perímetro (Firewall, IDS/IPS, VPN, WAF, Zero Trust)",
    "microtopico": "[Segurança da Informação • Defesa de Perímetro (Firewall, IDS/IPS, VPN, WAF, Zero Trust)] Mecanismos de Defesa: Firewalls (Stateful, NGFW), IDS/IPS, VPN, WAF e Arquitetura Zero Trust",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Princípios de Segurança e Protocolos/Infraestrutura de Redes.",
    "anotacoes": "Diferença cirúrgica entre IDS (detecta/alerta passivo) vs IPS (bloqueia inline), WAF (Camada 7 HTTP) e Zero Trust (\"nunca confie, sempre verifique\").",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-79",
      "topic-89",
      "topic-90"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-84",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 4: A Obra Completa • Vulnerabilidades Web (OWASP Top 10: SQLi, XSS, Broken Access Control)",
    "microtopico": "[Segurança da Informação • Vulnerabilidades Web (OWASP Top 10: SQLi, XSS, Broken Access Control)] Vulnerabilidades Web: OWASP Top 10 (SQL Injection, XSS, Broken Access Control, CSRF)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Arquitetura Web/HTTP e Princípios de Segurança.",
    "anotacoes": "Como falhas na construção de código web violam os princípios CIDA e como preveni-las (Prepared Statements, sanitização, RBAC/ABAC).",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-58",
      "topic-79"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-85",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 4: A Obra Completa • Práticas de DevSecOps (SAST, DAST e SCA)",
    "microtopico": "[Segurança da Informação • Práticas de DevSecOps (SAST, DAST e SCA)] Práticas de DevSecOps, Análise Estática (SAST), Dinâmica (DAST) e Gestão de Dependências (SCA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de Segurança — Requer OWASP Top 10 e Pipelines CI/CD.",
    "anotacoes": "Shift-Left Security: SAST (código-fonte/caixa-branca), DAST (aplicação em execução/caixa-preta) e SCA (vulnerabilidades em bibliotecas de terceiros).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-84",
      "topic-101"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-65",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 1: Os Tijolos • Estatística Descritiva, Probabilidade e Amostragem",
    "microtopico": "[IA, Ciência de Dados e Automação • Estatística Descritiva, Probabilidade e Amostragem] Estatística Descritiva, Distribuições de Probabilidade e Amostragem para Dados",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Porcentagem e Probabilidade (RLM).",
    "anotacoes": "Média, mediana, variância, desvio-padrão, distribuição normal e técnicas de amostragem.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-24",
      "topic-26"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-66",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 1: Os Tijolos • Manipulação e Limpeza de Dados (Pandas e NumPy)",
    "microtopico": "[IA, Ciência de Dados e Automação • Manipulação e Limpeza de Dados (Pandas e NumPy)] Manipulação e Limpeza de Dados: Pandas, NumPy e Pipelines de Pré-processamento",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Python e Estatística Básica.",
    "anotacoes": "Vetorização com NumPy, DataFrames no Pandas, tratamento de missing values, outliers e encoding.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-56",
      "topic-65"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-67",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 1: Os Tijolos • Arquiteturas de Big Data (DW, Data Lake e Lakehouse)",
    "microtopico": "[IA, Ciência de Dados e Automação • Arquiteturas de Big Data (DW, Data Lake e Lakehouse)] Fundamentos de Big Data: 5 Vs, Arquiteturas de Dados (Data Warehouse, Data Lake, Lakehouse)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer SQL DQL/DML e Processamento de Dados.",
    "anotacoes": "Os 5 Vs do Big Data e a evolução de Data Warehouse (schema-on-write) para Data Lake (schema-on-read) e Lakehouse.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-44",
      "topic-66"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-68",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 2: A Função das Peças • Machine Learning Supervisionado",
    "microtopico": "[IA, Ciência de Dados e Automação • Machine Learning Supervisionado] Aprendizado Supervisionado: Regressão Linear/Logística, Árvores de Decisão, Random Forest e SVM",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Estatística e Pré-processamento de Dados.",
    "anotacoes": "Regressão (Linear) vs Classificação (Logística, Árvores, Random Forest, SVM) e tradeoff Viés-Variância (Underfitting vs Overfitting).",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-65",
      "topic-66"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-69",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 2: A Função das Peças • Machine Learning Não Supervisionado (K-Means, DBSCAN, PCA)",
    "microtopico": "[IA, Ciência de Dados e Automação • Machine Learning Não Supervisionado (K-Means, DBSCAN, PCA)] Aprendizado Não Supervisionado: Clustering (K-Means, DBSCAN) e Redução de Dimensionalidade (PCA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Estatística e Pré-processamento de Dados.",
    "anotacoes": "Agrupamento sem rótulos (centroides vs densidade) e redução de dimensionalidade preservando variância (PCA).",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-65",
      "topic-66"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-70",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Métricas de Avaliação (Matriz de Confusão, F1, ROC/AUC)",
    "microtopico": "[IA, Ciência de Dados e Automação • Métricas de Avaliação (Matriz de Confusão, F1, ROC/AUC)] Métricas de Avaliação: Matriz de Confusão, Acurácia, Precisão, Recall, F1-Score, Curva ROC/AUC",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Aprendizado Supervisionado.",
    "anotacoes": "Quando usar Precisão (evitar Falso Positivo) vs Recall/Sensibilidade (evitar Falso Negativo) e F1-Score em bases desbalanceadas.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-68"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-71",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Deep Learning (MLP, CNN, RNN) e PLN",
    "microtopico": "[IA, Ciência de Dados e Automação • Deep Learning (MLP, CNN, RNN) e PLN] Redes Neurais Artificiais, Deep Learning (MLP, CNN, RNN/LSTM) e Processamento de Linguagem Natural",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Machine Learning Clássico e Métricas.",
    "anotacoes": "Perceptrons multicamadas, backpropagation, funções de ativação (ReLU, Sigmoid, Softmax) e evolução para PLN.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-68",
      "topic-70"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-72",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 4: A Obra Completa • IA Responsável, Viés Algorítmico, XAI e Governança",
    "microtopico": "[IA, Ciência de Dados e Automação • IA Responsável, Viés Algorítmico, XAI e Governança] IA Generativa, Ética, Viés Algorítmico, Explicabilidade (XAI) e LGPD aplicada a Algoritmos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de Ciência de Dados — Requer Avaliação de Modelos e Deep Learning.",
    "anotacoes": "Explicabilidade (SHAP, LIME), mitigação de viés discriminatório e auditoria algorítmica no setor público.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-70",
      "topic-71"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-73",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 1: Os Tijolos • Arquitetura Transformers, Atenção e LLMs",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Arquitetura Transformers, Atenção e LLMs] Arquitetura Transformers, Mecanismo de Atenção, Parâmetros e Janela de Contexto",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Deep Learning e PLN.",
    "anotacoes": "Self-Attention, tokenização, embeddings contextuais, temperatura/top-p e janela de contexto.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-71"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-74",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 2: A Função das Peças • Engenharia de Prompts (Zero/Few-shot, CoT, ReAct)",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Engenharia de Prompts (Zero/Few-shot, CoT, ReAct)] Técnicas de Prompts: Zero-shot, Few-shot, Chain-of-Thought (CoT), ReAct e Estruturação de Saídas (JSON)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer compreensão da Arquitetura de LLMs.",
    "anotacoes": "Guiar o raciocínio do modelo (Chain-of-Thought), alternar pensamento e ação (ReAct) e forçar schemas estruturados (JSON).",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-73"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-75",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura RAG (Chunking, Busca Vetorial, Reranking)",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Arquitetura RAG (Chunking, Busca Vetorial, Reranking)] Retrieval-Augmented Generation (RAG): Chunking, Embeddings, Busca Vetorial, Reranking e Redução de Alucinações",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Bancos Vetoriais (pgvector/HNSW) e Engenharia de Prompts.",
    "anotacoes": "Conexão entre Bancos Vetoriais e LLMs para fundamentar respostas em documentos oficiais e eliminar alucinações.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-50",
      "topic-74"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-76",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sistemas Agentivos (Planejamento, Memória e Tool Use)",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Sistemas Agentivos (Planejamento, Memória e Tool Use)] Ciclo de Vida do Agente: Planejamento, Memória (Short/Long-term), Uso de Ferramentas (Tool Use) e Autocorreção",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Engenharia de Prompts (ReAct) e RAG.",
    "anotacoes": "Quando o LLM deixa de apenas responder texto e passa a planejar, chamar ferramentas externas e se autocorrigir.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-74",
      "topic-75"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-77",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Model Context Protocol (MCP)",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Model Context Protocol (MCP)] Model Context Protocol (MCP): Arquitetura Cliente-Servidor, Tools, Resources, Prompts e Segurança",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Sistemas Agentivos e Tool Use.",
    "anotacoes": "Padronização aberta cliente-servidor (Host, Client, Server) para expor Tools, Resources e Prompts com segurança.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-76"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-78",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Assistentes de Código em CLI/IDE e Engenharia de Contexto",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Assistentes de Código em CLI/IDE e Engenharia de Contexto] Assistentes de Codificação em CLI/IDE: Claude Code, Antigravity CLI, Automação de Tarefas e Engenharia de Contexto",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide Agentiva — Requer Agentes Autônomos e MCP.",
    "anotacoes": "Orquestração de múltiplos subagentes, gerenciamento de janela de contexto e automação segura em engenharia de software.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-76",
      "topic-77"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-108",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 1: Os Tijolos • Governança Corporativa de TI (ABNT NBR ISO/IEC 38500)",
    "microtopico": "[Governança de TI • Governança Corporativa de TI (ABNT NBR ISO/IEC 38500)] Norma ABNT NBR ISO/IEC 38500: Princípios e Modelo de Governança de TI (Avaliar, Dirigir e Monitorar)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Governança de TI): A norma matriz de Governança (Avaliar, Dirigir e Monitorar).",
    "anotacoes": "Ponte para o COBIT: A ISO 38500 define a distinção fundamental entre Governança (EDM: Avaliar, Dirigir, Monitorar — alta direção) e Gestão (execução).",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-106",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 2: A Função das Peças • COBIT 2019 (EDM vs APO, BAI, DSS, MEA)",
    "microtopico": "[Governança de TI • COBIT 2019 (EDM vs APO, BAI, DSS, MEA)] COBIT 2019: Princípios, Sistema de Governança, Objetivos de Governança e Gestão (EDM, APO, BAI, DSS, MEA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer ISO/IEC 38500 (distinção Governança vs Gestão).",
    "anotacoes": "Cascata de objetivos, fatores de desenho e os 5 domínios: Governança (EDM) vs Gestão (APO, BAI, DSS, MEA).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-108"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-107",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 2: A Função das Peças • ITIL v4 (Sistema de Valor de Serviço, 4 Dimensões e Práticas)",
    "microtopico": "[Governança de TI • ITIL v4 (Sistema de Valor de Serviço, 4 Dimensões e Práticas)] ITIL v4: Sistema de Valor de Serviço (SVS), 4 Dimensões, Princípios Orientadores e Práticas Principais (Incidentes, Problemas, Mudanças)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer base de Governança COBIT 2019.",
    "anotacoes": "Cocriação de valor, Cadeia de Valor de Serviço e distinção entre Incidente (interrupção -> restaurar rápido), Problema (causa-raiz) e Mudança.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-106"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-109",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 2: A Função das Peças • Gestão de Projetos (PMBOK 7ª/8ª ed: Domínios e Princípios)",
    "microtopico": "[Governança de TI • Gestão de Projetos (PMBOK 7ª/8ª ed: Domínios e Princípios)] PMBOK: Princípios de Entrega de Projetos, Domínios de Desempenho, Abordagens Preditiva, Híbrida e Adaptativa",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Métodos Ágeis e Governança COBIT.",
    "anotacoes": "Os 12 princípios e 8 domínios de desempenho do PMBOK, entrega de valor vs entrega de escopo e tailoring (preditivo, híbrido e adaptativo).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-93",
      "topic-106"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-110",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • Contratações de TIC (Lei 14.133/2021: ETP, TR e Contratos)",
    "microtopico": "[Governança de TI • Contratações de TIC (Lei 14.133/2021: ETP, TR e Contratos)] Lei nº 14.133/2021 aplicada a TIC: Planejamento da Contratação, ETP, Termo de Referência e Gestão de Contratos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Governança (COBIT) e Gestão de Projetos (PMBOK).",
    "anotacoes": "Fase preparatória das contratações públicas de TI: DOD, Estudo Técnico Preliminar (ETP), Gerenciamento de Riscos, Termo de Referência (TR) e fiscalização.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-106",
      "topic-109"
    ],
    "tempoEstimadoMinutos": 45
  },
  {
    "id": "topic-111",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 4: A Obra Completa • Lei do Governo Digital (Lei 14.129/2021) e Transformação Pública",
    "microtopico": "[Governança de TI • Lei do Governo Digital (Lei 14.129/2021) e Transformação Pública] Lei do Governo Digital (Lei nº 14.129/2021) e Princípios da Eficiência e Transformação Digital no Setor Público",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide de Governança Pública — Requer Contratações de TIC.",
    "anotacoes": "Autosserviço, interoperabilidade, dados abertos, assinatura eletrônica (simples, avançada, qualificada) e laboratório de inovação.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-110"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-112",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 1: Os Tijolos • Marco Civil da Internet (Lei 12.965/2014)",
    "microtopico": "[Legislação Aplicada à TI • Marco Civil da Internet (Lei 12.965/2014)] Marco Civil da Internet: Princípios, Garantias, Direitos dos Usuários, Neutralidade da Rede e Responsabilidade por Danos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Legislação Digital): Princípios da Internet no Brasil.",
    "anotacoes": "Neutralidade da rede, guarda de registros de conexão vs acesso a aplicações e responsabilidade civil de provedores mediante ordem judicial.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-113",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 2: A Função das Peças • LGPD (Lei 13.709/2018): Conceitos, Princípios e Bases Legais",
    "microtopico": "[Legislação Aplicada à TI • LGPD (Lei 13.709/2018): Conceitos, Princípios e Bases Legais] LGPD (Lei nº 13.709/2018): Conceitos (Dado Pessoal, Sensível, Titular, Controlador, Operador, DPO), Princípios e Bases Legais",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Marco Civil da Internet.",
    "anotacoes": "Dado pessoal vs dado sensível vs anonimizado; papéis (Titular, Controlador, Operador, Encarregado/DPO) e as 10 bases legais de tratamento.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-112"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-114",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • LGPD no Setor Público, Direitos dos Titulares, RIPD e ANPD",
    "microtopico": "[Legislação Aplicada à TI • LGPD no Setor Público, Direitos dos Titulares, RIPD e ANPD] LGPD no Setor Público (Tratamento pelo Poder Público), Direitos dos Titulares, Relatório de Impacto (RIPD) e Sanções da ANPD",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Conceitos e Bases Legais da LGPD.",
    "anotacoes": "Regras específicas do Capítulo IV (Poder Público), compartilhamento de dados entre órgãos, Relatório de Impacto (RIPD) e sanções.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-113"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-115",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos Internos de Segurança e PDTI do TCE-GO",
    "microtopico": "[Legislação Aplicada à TI • Normativos Internos de Segurança e PDTI do TCE-GO] Resoluções e Políticas Internas de Segurança da Informação e Plano Diretor de TIC (PDTI) do TCE-GO",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Topo da Pirâmide Normativa — Requer ISO 27001, COBIT e LGPD no Setor Público.",
    "anotacoes": "Aplicação integrada de Segurança da Informação, Governança e Proteção de Dados nas resoluções internas do TCE-GO.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-80",
      "topic-106",
      "topic-114"
    ],
    "tempoEstimadoMinutos": 35
  },
  {
    "id": "topic-116",
    "disciplina": "Língua Inglesa (Leitura Técnica)",
    "macrotema": "Nível 1: Os Tijolos • Vocabulário Técnico de TI e Falsos Cognatos",
    "microtopico": "[Língua Inglesa (Leitura Técnica) • Vocabulário Técnico de TI e Falsos Cognatos] Vocabulário Técnico de TI, Expressões Idiomáticas em Documentação e Falsos Cognatos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - Inglês Técnico): As peças isoladas do vocabulário de TI.",
    "anotacoes": "Falsos cognatos clássicos de provas (actually, comprehensive, eventually, library, policy, realize) e jargões de engenharia.",
    "origem": [
      "Concurso"
    ],
    "tempoEstimadoMinutos": 25
  },
  {
    "id": "topic-117",
    "disciplina": "Língua Inglesa (Leitura Técnica)",
    "macrotema": "Nível 2: A Estrutura em Movimento • Leitura e Interpretação de Documentação e RFCs",
    "microtopico": "[Língua Inglesa (Leitura Técnica) • Leitura e Interpretação de Documentação e RFCs] Leitura e Interpretação de Documentação Técnica Oficial, RFCs, Manuais e Artigos de Engenharia",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Vocabulário Técnico e Falsos Cognatos.",
    "anotacoes": "Técnicas de Skimming (ideia geral) e Scanning (busca localizada) em manuais técnicos e RFCs (MUST, SHOULD, MAY).",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-116"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-118",
    "disciplina": "Língua Inglesa (Leitura Técnica)",
    "macrotema": "Nível 3: A Obra Completa • Compreensão de Especificações de Arquitetura e APIs REST",
    "microtopico": "[Língua Inglesa (Leitura Técnica) • Compreensão de Especificações de Arquitetura e APIs REST] Compreensão e Análise de Especificações Técnicas, Arquiteturas de Software e Documentação de APIs REST",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Leitura de Documentação Técnica e Conceitos de APIs REST.",
    "anotacoes": "Interpretação avançada de changelogs, especificações de segurança, payloads e documentação arquitetural em inglês.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-117",
      "topic-59"
    ],
    "tempoEstimadoMinutos": 30
  },
  {
    "id": "topic-119",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 1: O Esqueleto Discursivo • Metodologia de Estudo de Caso da Banca FCC",
    "microtopico": "[Discursiva / Estudo de Caso • Metodologia de Estudo de Caso da Banca FCC] Estrutura do Estudo de Caso FCC: Introdução ao Problema, Fundamentação Técnica e Proposta de Solução",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Tipologia Dissertativo-Argumentativa (Língua Portuguesa Nível 4).",
    "anotacoes": "Como estruturar os parágrafos exigidos no espelho de correção da FCC sem perder pontos formais ou técnicos.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-1"
    ],
    "tempoEstimadoMinutos": 40
  },
  {
    "id": "topic-120",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • Simulação Discursiva: Banco de Dados, Normalização e Tuning",
    "microtopico": "[Discursiva / Estudo de Caso • Simulação Discursiva: Banco de Dados, Normalização e Tuning] Estudo de Caso Prático: Modelagem Relacional, Normalização ou Otimização de Banco de Dados Público",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Metodologia Discursiva + Normalização e Otimização de Banco de Dados.",
    "anotacoes": "Resolução escrita completa integrando modelagem relacional, formas normais, transações ACID e indexação.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-119",
      "topic-42",
      "topic-48"
    ],
    "tempoEstimadoMinutos": 50
  },
  {
    "id": "topic-121",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • Simulação Discursiva: Microserviços, APIs REST e Arquitetura RAG/IA",
    "microtopico": "[Discursiva / Estudo de Caso • Simulação Discursiva: Microserviços, APIs REST e Arquitetura RAG/IA] Estudo de Caso Prático: Arquitetura de Microserviços, APIs RESTful e Integração com RAG/IA",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Metodologia Discursiva + APIs REST, Arquitetura RAG e Design de Software.",
    "anotacoes": "Resolução escrita integrando engenharia de software moderna, APIs seguras e sistemas de IA generativa com RAG.",
    "origem": [
      "Concurso"
    ],
    "prerequisitos": [
      "topic-119",
      "topic-59",
      "topic-75",
      "topic-96"
    ],
    "tempoEstimadoMinutos": 50
  },
  {
    "id": "topic-122",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • Simulação Discursiva: Incidente de Segurança, LGPD e Contratos de TIC",
    "microtopico": "[Discursiva / Estudo de Caso • Simulação Discursiva: Incidente de Segurança, LGPD e Contratos de TIC] Estudo de Caso Prático: Incidente de Segurança, Conformidade com a LGPD e Fiscalização de Contrato de TIC",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Requer Metodologia Discursiva + ISO 27001, Lei 14.133/2021 e LGPD no Setor Público.",
    "anotacoes": "Resolução escrita integrando resposta a incidentes, responsabilização na LGPD e fiscalização contratual no controle externo.",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "prerequisitos": [
      "topic-119",
      "topic-80",
      "topic-110",
      "topic-114"
    ],
    "tempoEstimadoMinutos": 50
  },
  {
    "id": "cc-101-01",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 1: Os Tijolos • What is Claude Code?",
    "microtopico": "[Claude Code 101 • What is Claude Code?] What is Claude Code? — Fundamentos e Diferenças em relação a Chat AIs",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🟢 Disponível (Nível 1 - What is Claude Code?): Introdução ao paradigma de agentes de codificação e arquitetura agêntica.",
    "anotacoes": "Ponte direta com o Tópico 3 do Edital B02 (Eng. de Software Assistida por IA e Sistemas Agentivos): diferença entre assistentes conversacionais passivos e agentes autônomos de codificação que operam diretamente sobre o repositório, terminal e ferramentas.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469788",
    "tempoEstimadoMinutos": 20,
    "prerequisitos": []
  },
  {
    "id": "cc-101-02",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 1: Os Tijolos • What is Claude Code?",
    "microtopico": "[Claude Code 101 • What is Claude Code?] How Claude Code works — Agentic Loop, Context Window, Tools e Permissões",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⚙️ Nível 1 (What is Claude Code?): Requer What is Claude Code? Entendimento do loop agêntico e ferramentas.",
    "anotacoes": "Arquitetura de agentes cobrada no Edital B02: modelo base, instruções de sistema, janela de contexto, execução de ferramentas (Tool Use) e ciclo percepção → raciocínio → ação → observação com controle de permissões.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469789",
    "tempoEstimadoMinutos": 25,
    "prerequisitos": [
      "cc-101-01"
    ]
  },
  {
    "id": "cc-101-03",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 1: Os Tijolos • Your first prompt",
    "microtopico": "[Claude Code 101 • Your first prompt] Installing Claude Code — Instalação no Terminal, VS Code, JetBrains e Web",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "💻 Nível 1 (Your first prompt): Requer How Claude Code works. Setup prático no ambiente local e IDEs.",
    "anotacoes": "Integração de agentes de codificação com terminais (CLI), IDEs (VS Code, JetBrains) e ambientes de execução remotos/web.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469790",
    "tempoEstimadoMinutos": 20,
    "prerequisitos": [
      "cc-101-02"
    ]
  },
  {
    "id": "cc-101-04",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 1: Os Tijolos • Your first prompt",
    "microtopico": "[Claude Code 101 • Your first prompt] Your first prompt — Approval Mode, Auto-Accept e Plan Mode (Human-in-the-Loop)",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🎯 Nível 1 (Your first prompt): Requer Installing Claude Code. Primeiros prompts, modos de aprovação e planejamento.",
    "anotacoes": "Programação orientada a intenção e supervisão humana (Human-in-the-Loop): diferenças entre modo de aprovação manual, auto-accept e Plan Mode para separação entre planejamento arquitetural e execução.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469791",
    "tempoEstimadoMinutos": 25,
    "prerequisitos": [
      "cc-101-03"
    ]
  },
  {
    "id": "cc-101-05",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 2: A Função das Peças • Daily workflows",
    "microtopico": "[Claude Code 101 • Daily workflows] The explore → plan → code → commit workflow — Ciclo Agentivo de Desenvolvimento",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🔄 Nível 2 (Daily workflows): Requer Your first prompt. Ciclo virtuoso de engenharia agêntica no dia a dia.",
    "anotacoes": "Ciclo agentivo cobrado no Edital B02: exploração seletiva de artefatos do repositório (explore), planejamento e decomposição de tarefas (plan), implementação assistida (code), verificação por testes e geração de commits semânticos (commit).",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469792",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-04"
    ]
  },
  {
    "id": "cc-101-06",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 2: A Função das Peças • Daily workflows",
    "microtopico": "[Claude Code 101 • Daily workflows] Context management — /compact, /clear, /context e Gestão da Janela de Contexto",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🧠 Nível 2 (Daily workflows): Requer The explore → plan → code → commit workflow. Gestão enxuta de memória.",
    "anotacoes": "Tópico explícito do Edital B02: gestão de janela de contexto, sumarização (/compact), limpeza de sessão (/clear), inspeção de consumo de tokens (/context) e prevenção de degradação de contexto (context rot).",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469793",
    "tempoEstimadoMinutos": 25,
    "prerequisitos": [
      "cc-101-05"
    ]
  },
  {
    "id": "cc-101-07",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 2: A Função das Peças • Daily workflows",
    "microtopico": "[Claude Code 101 • Daily workflows] Code review — Revisão Automatizada de Código, Diagnóstico e Boas Práticas",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🔍 Nível 2 (Daily workflows): Requer Context management. Revisão automatizada de código e validação humana.",
    "anotacoes": "Aplicação de IA na revisão de código (Code Review), identificação de bugs, vulnerabilidades, regressões e verificação de aderência às convenções do projeto.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469794",
    "tempoEstimadoMinutos": 25,
    "prerequisitos": [
      "cc-101-06"
    ]
  },
  {
    "id": "cc-101-08",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 3: A Estrutura em Movimento • Customizing Claude Code",
    "microtopico": "[Claude Code 101 • Customizing Claude Code] The CLAUDE.md file — Arquivos de Contexto do Projeto e Memória Persistente",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "📝 Nível 3 (Customizing Claude Code): Requer Code review. Configuração do arquivo de memória e diretrizes de projeto.",
    "anotacoes": "Tópico explícito do Edital B02: engenharia de contexto por meio de arquivos de contexto do projeto (CLAUDE.md), estruturando instruções permanentes, comandos de build/teste, padrões arquiteturais e convenções de código.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469795",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-07"
    ]
  },
  {
    "id": "cc-101-09",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 3: A Estrutura em Movimento • Customizing Claude Code",
    "microtopico": "[Claude Code 101 • Customizing Claude Code] Subagents — Sistemas Multiagentes, Delegação de Tarefas e Isolamento de Contexto",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🤖 Nível 3 (Customizing Claude Code): Requer The CLAUDE.md file. Criação e orquestração de subagentes autônomos.",
    "anotacoes": "Tópico explícito do Edital B02: agentes de codificação e sistemas multiagentes no ciclo de desenvolvimento; delegação para subagentes com janelas de contexto isoladas para pesquisa, revisão ou execução paralela.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469796",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-08"
    ]
  },
  {
    "id": "cc-101-10",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 3: A Estrutura em Movimento • Customizing Claude Code",
    "microtopico": "[Claude Code 101 • Customizing Claude Code] Skills — Habilidades Reutilizáveis e Fluxos de Execução Especializados",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⚡ Nível 3 (Customizing Claude Code): Requer Subagents. Desenvolvimento de skills customizadas.",
    "anotacoes": "Tópico explícito do Edital B02: habilidades reutilizáveis (skills), pacotes de instruções sob demanda, scripts auxiliares e padronização de workflows repetitivos da equipe.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469848",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-09"
    ]
  },
  {
    "id": "cc-101-11",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 3: A Estrutura em Movimento • Customizing Claude Code",
    "microtopico": "[Claude Code 101 • Customizing Claude Code] MCP (Model Context Protocol) — Integração com Ferramentas, Bancos e Serviços Externos",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🔌 Nível 3 (Customizing Claude Code): Requer Skills. Integração com servidores MCP e APIs externas.",
    "anotacoes": "Tópico explícito do Edital B02: protocolos e mecanismos de integração de agentes com ferramentas, repositórios, bancos de dados, terminais, APIs e serviços externos via Model Context Protocol (MCP).",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469797",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-10"
    ]
  },
  {
    "id": "cc-101-12",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 3: A Estrutura em Movimento • Customizing Claude Code",
    "microtopico": "[Claude Code 101 • Customizing Claude Code] Hooks — Controle Determinístico de Formatação, Guardrails, Bloqueio e Notificações",
    "peso": "Peso 2 (Específicos / Prática IA)",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🪝 Nível 3 (Customizing Claude Code): Requer MCP. Implementação de hooks determinísticos pré e pós-execução.",
    "anotacoes": "Governança e segurança em sistemas agentivos: execução determinística de comandos em eventos do ciclo de vida (PreToolUse, PostToolUse, Stop) para validação, linting automático e bloqueio de operações de risco.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469798",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-11"
    ]
  },
  {
    "id": "cc-101-13",
    "disciplina": "Claude Code 101: AI Coding Agents",
    "macrotema": "Nível 4: A Obra Completa • Quiz",
    "microtopico": "[Claude Code 101 • Quiz] Course quiz — Avaliação Global e Certificação Claude Code 101 (Anthropic Academy)",
    "peso": "Certificação / Peso 2",
    "origem": [
      "Claude Code",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "🎓 Nível 4 (Quiz Final): Requer Hooks. Consolidação completa e certificação oficial da Anthropic Academy.",
    "anotacoes": "Avaliação integradora cobrindo todo o ciclo de Engenharia de Software Assistida por IA: arquitetura do Claude Code, fluxo explore-plan-code-commit, gestão de contexto, CLAUDE.md, Subagents, Skills, MCP e Hooks.",
    "linkMaterial": "https://anthropic.skilljar.com/claude-code-101/469849",
    "tempoEstimadoMinutos": 30,
    "prerequisitos": [
      "cc-101-12"
    ]
  },
  {
    "id": "topic-123",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Redação Oficial",
    "microtopico": "[Língua Portuguesa • Redação Oficial] Manual de Redação da Presidência da República: Atributos, Pronomes de Tratamento e Padrão Ofício",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-7",
      "topic-17",
      "topic-18"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Redação Oficial) - Requer Pronomes e Concordância.",
    "anotacoes": "Atributos da redação oficial (clareza, precisão, objetividade, concisão, impessoalidade, formalidade e padronização), emprego dos pronomes de tratamento (Vossa Excelência vs Vossa Senhoria, concordância em 3ª pessoa), fechos (Respeitosamente vs Atenciosamente) e estrutura do Padrão Ofício."
  },
  {
    "id": "topic-124",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 1: Os Tijolos • Ortografia e Acentuação",
    "microtopico": "[Língua Portuguesa • Ortografia e Acentuação] Ortografia Oficial: Emprego de Letras, Uso do Hífen e Homônimos/Parônimos",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-4",
      "topic-5"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Ortografia): Detalhamento atômico de grafia oficial e uso do hífen pelo Novo Acordo Ortográfico.",
    "anotacoes": "Emprego de S/Z, X/CH, G/J, SS/Ç/SC, uso do hífen em compostos e prefixações (regra dos opostos/iguais) e grafia de expressões (por que / porque / por quê / porquê, onde / aonde, mal / mau, senão / se não)."
  },
  {
    "id": "topic-125",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Compreensão e Interpretação de Textos",
    "microtopico": "[Língua Portuguesa • Compreensão e Interpretação de Textos] Compreensão e Interpretação de Textos de Gêneros Variados (Inferência, Pressupostos e Subentendidos)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-1",
      "topic-2",
      "topic-3"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Interpretação FCC) - Requer Coesão, Coerência e Tipologia Textual.",
    "anotacoes": "Distinção entre compreensão (o que está explícito no texto) e interpretação (inferências lógicas autorizadas pelo texto). Pressupostos (marcados linguisticamente) vs subentendidos (insinuações contextuais) e armadilhas de extrapolação/redução da banca FCC."
  },
  {
    "id": "topic-126",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Compreensão e Interpretação de Textos",
    "microtopico": "[Língua Portuguesa • Compreensão e Interpretação de Textos] Relação do Texto com seu Contexto Histórico, Social e Cultural",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-1",
      "topic-125"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Contexto Histórico) - Requer Compreensão e Interpretação de Textos.",
    "anotacoes": "Situar o texto em suas condições de produção e recepção histórico-sociais; marcas epocais, variantes linguísticas históricas e diálogo entre o argumento do autor e o momento histórico retratado."
  },
  {
    "id": "topic-127",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Semântica e Estilística",
    "microtopico": "[Língua Portuguesa • Denotação e Conotação] Sentido Denotativo (Literal/Referencial) e Sentido Conotativo (Figurado/Expressivo)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "🟢 Disponível (Nível 4 - Semântica): Base para Figuras de Linguagem e Interpretação.",
    "anotacoes": "Diferenciação entre denotação (sentido dicionarizado, objetivo, informativo) e conotação (sentido figurado, subjetivo, polissêmico e dependente do contexto), muito cobrada nas questões de interpretação da FCC."
  },
  {
    "id": "topic-128",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Vozes Discursivas",
    "microtopico": "[Língua Portuguesa • Discurso Direto, Indireto e Indireto Livre] Modalidades de Citação do Discurso Alheio e Transposição Discursiva",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-7",
      "topic-8",
      "topic-14"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Discursos) - Requer Verbos, Pronomes e Orações Subordinadas Substantivas.",
    "anotacoes": "Características do discurso direto, indireto e indireto livre (fusão de vozes narrador/personagem). Regras de transposição do discurso direto para o indireto: mudança de tempos verbais (presente -> pretérito imperfeito; pretérito perfeito -> mais-que-perfeito; futuro do presente -> futuro do pretérito), pronomes e advérbios dêiticos (aqui -> ali/lá, hoje -> naquele dia)."
  },
  {
    "id": "topic-129",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Textualidade e Diálogo entre Textos",
    "microtopico": "[Língua Portuguesa • Intertextualidade] Tipos de Intertextualidade: Paráfrase, Paródia, Citação, Alusão e Epígrafe",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-2",
      "topic-3"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Intertextualidade) - Requer Coesão e Coerência.",
    "anotacoes": "Intertextualidade explícita e implícita. Diferença entre paráfrase (reafirma a ideia original com outras palavras) e paródia (subverte/ironiza o texto-fonte), além de alusão, citação direta/indireta e epígrafe."
  },
  {
    "id": "topic-130",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Semântica e Estilística",
    "microtopico": "[Língua Portuguesa • Figuras de Linguagem] Figuras de Palavras, de Pensamento, de Sintaxe/Construção e de Som",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-127"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Figuras de Linguagem) - Requer Denotação e Conotação.",
    "anotacoes": "Foco nas favoritas da FCC: Metáfora vs Comparação, Metonímia, Catacrese, Sinestesia, Antítese vs Paradoxo (Oxímoro), Eufemismo, Ironia, Hipérbole, Prosopopeia (Personificação), Gradação, Elipse/Zeugma, Pleonasmo, Hipérbato e Anáfora."
  },
  {
    "id": "topic-131",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento • Morfossintaxe",
    "microtopico": "[Língua Portuguesa • Morfossintaxe] Análise Morfossintática: Correspondência entre Classes Morfológicas e Funções Sintáticas",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-6",
      "topic-7",
      "topic-8",
      "topic-10",
      "topic-11",
      "topic-12"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 3 - Morfossintaxe) - Requer Classes de Palavras e Termos da Oração.",
    "anotacoes": "Integração entre o que a palavra é (classe morfológica: substantivo, adjetivo, pronome, advérbio) e o papel que desempenha na oração (função sintática: núcleo do sujeito/objeto, adjunto adnominal vs complemento nominal, predicativo, adjunto adverbial)."
  },
  {
    "id": "topic-132",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças • Estrutura e Formação de Palavras",
    "microtopico": "[Língua Portuguesa • Elementos Estruturais das Palavras] Morfemas: Radical, Vogal Temática, Tema, Desinências e Afixos",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-5",
      "topic-6"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Morfologia Lexical): Anatomia interna dos vocábulos.",
    "anotacoes": "Identificação de palavras cognatas (mesmo radical), vogal temática nominal e verbal, tema (radical + VT), desinências nominais (gênero e número) e verbais (modo-temporais e número-pessoais), prefixos, sufixos e vogais/consoantes de ligação."
  },
  {
    "id": "topic-133",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças • Estrutura e Formação de Palavras",
    "microtopico": "[Língua Portuguesa • Processos de Formação de Palavras] Derivação (Prefixal, Sufixal, Parassintética, Regressiva, Imprópria) e Composição (Justaposição e Aglutinação)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-132"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 2 - Formação de Palavras) - Requer Elementos Estruturais das Palavras.",
    "anotacoes": "Diferença crítica entre derivação prefixal e sufixal vs parassintética (acréscimo simultâneo de prefixo e sufixo), derivação regressiva (deverbal: combater -> o combate) e imprópria (mudança de classe gramatical sem alterar a forma), além de composição por justaposição e aglutinação."
  },
  {
    "id": "topic-134",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças • Semântica Lexical",
    "microtopico": "[Língua Portuguesa • Sinonímia e Antonímia] Relações Semânticas: Sinônimos, Antônimos, Polissemia, Homônimos, Parônimos e Hiperonímia",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Semântica Lexical): Equivalência vocabular contextual em provas da FCC.",
    "anotacoes": "Substituição de palavras e expressões no texto sem prejuízo do sentido original (sinonímia contextual), oposição semântica (antonímia), homônimos perfeitos/homógrafos/homófonos, parônimos clássicos (ratificar/retificar, infringir/infligir, iminente/eminente, descrição/discrição) e hiperônimos/hipônimos."
  },
  {
    "id": "topic-135",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças • Flexão Nominal e Verbal",
    "microtopico": "[Língua Portuguesa • Flexão Nominal] Flexão de Gênero, Número e Grau dos Substantivos e Adjetivos (Plural dos Compostos)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-6"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Morfologia): Base obrigatória para Concordância Nominal.",
    "anotacoes": "Substantivos epicenos, sobrecomuns e comuns de dois gêneros; mudança de sentido com mudança de gênero/número; regras de plural dos substantivos e adjetivos compostos (verbo+substantivo, substantivo+substantivo, cor) e grau comparativo/superlativo."
  },
  {
    "id": "topic-136",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 2: A Função das Peças • Flexão Nominal e Verbal",
    "microtopico": "[Língua Portuguesa • Flexão Verbal] Conjugação Verbal: Verbos Regulares, Irregulares, Defectivos, Abundantes e Derivados (Ter, Vir, Pôr, Ver)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-8"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 2 - Flexão Verbal) - Requer Fundamentos de Verbos.",
    "anotacoes": "Conjugação dos verbos derivados de TER, VIR, PÔR e VER (intervir -> interveio, manter -> mantiver, reaver -> reouve, requerer -> requeiro), verbos em -EAR e -IAR (MARIO), particípios regulares e irregulares (verbos abundantes: tinha aceitado vs foi aceito) e verbos defectivos."
  },
  {
    "id": "topic-137",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sintaxe e Vozes Verbais",
    "microtopico": "[Língua Portuguesa • Vozes do Verbo] Voz Ativa, Passiva Analítica, Passiva Sintética (Pronominal), Reflexiva e Transposição de Vozes",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-8",
      "topic-10",
      "topic-11"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 3 - Vozes Verbais) - Requer Verbos, Sujeito e Objeto Direto.",
    "anotacoes": "Reconhecimento e conversão entre Voz Ativa, Voz Passiva Analítica (Ser + Particípio + Agente da Passiva) e Voz Passiva Sintética (VTD/VTDI + partícula apassivadora SE), mantendo rigorosamente o mesmo tempo e modo verbal na transposição (clássico absoluto da FCC)."
  },
  {
    "id": "topic-138",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sintaxe e Articulação Verbal",
    "microtopico": "[Língua Portuguesa • Correlação de Tempos e Modos Verbais] Harmonia Temporal-Modal entre Orações (Padrão FCC)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-8",
      "topic-14",
      "topic-15"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 3 - Correlação Verbal) - Requer Verbos e Orações Subordinadas.",
    "anotacoes": "Pares clássicos de correlação verbal cobrados pela FCC: Futuro do Subjuntivo + Futuro do Presente (Se estudar, passará); Pretérito Imperfeito do Subjuntivo + Futuro do Pretérito do Indicativo (Se estudasse, passaria); Pretérito Mais-que-Perfeito Composto do Subjuntivo + Futuro do Pretérito Composto (Se tivesse estudado, teria passado); Presente do Indicativo + Presente do Subjuntivo (Exijo que faça)."
  },
  {
    "id": "topic-139",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Redação e Reescrita de Frases",
    "microtopico": "[Língua Portuguesa • Redação] Confronto e Reconhecimento de Frases Corretas e Incorretas (Correção Gramatical Padrão FCC)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-16",
      "topic-17",
      "topic-18",
      "topic-19",
      "topic-21",
      "topic-138"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Redação Objetiva) - Requer Pontuação, Concordância, Regência, Crase e Correlação Verbal.",
    "anotacoes": "Treino focado nas questões de 'Está plenamente clara e correta a redação do seguinte comentário' da FCC: checklist rápido de concordância, regência de pronomes relativos (cujo, onde, a que), colocação pronominal, crase, paralelismo sintático e pontuação."
  },
  {
    "id": "topic-140",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Redação e Reescrita de Frases",
    "microtopico": "[Língua Portuguesa • Redação] Organização e Reorganização de Orações e Períodos (Ordem Direta, Deslocamentos, Paralelismo e Ambiguidade)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-13",
      "topic-14",
      "topic-15",
      "topic-16"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Reorganização de Períodos) - Requer Período Composto e Pontuação.",
    "anotacoes": "Reorganização sintática de períodos compostos, inversão da ordem direta (SVC) e deslocamento de adjuntos/orações adverbiais com ajuste obrigatório de pontuação, eliminação de ambiguidades, truncamentos e quebras de paralelismo sintático-semântico."
  },
  {
    "id": "topic-141",
    "disciplina": "Língua Portuguesa",
    "macrotema": "Nível 4: A Obra Completa • Redação e Reescrita de Frases",
    "microtopico": "[Língua Portuguesa • Redação] Equivalência e Transformação de Estruturas (Orações Desenvolvidas vs Reduzidas, Nominalização e Conectivos)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Português Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-9",
      "topic-13",
      "topic-14",
      "topic-15",
      "topic-137"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Pendente (Nível 4 - Transformação de Estruturas) - Requer Conectivos, Subordinação e Vozes Verbais.",
    "anotacoes": "Transformação de orações subordinadas desenvolvidas em reduzidas (de infinitivo, gerúndio ou particípio) e vice-versa; substituição de orações por termos nominais equivalentes (nominalização); permuta entre conectivos mantendo o valor semântico (concessão, causa, condição, finalidade, proporção)."
  },
  {
    "id": "topic-142",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Operações: Adição de Números Inteiros e Racionais (Propriedades e Regras de Sinais)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "math-m01-u01"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "🟢 Disponível (Nível 1 - RLM/Mat): Operação atômica de adição em Z e Q.",
    "anotacoes": "Adição no conjunto dos números inteiros (Z) e racionais (Q na forma fracionária e decimal): comutatividade, associatividade, elemento neutro (0), elemento oposto/simétrico e interpretação de ganhos/perdas e deslocamentos."
  },
  {
    "id": "topic-143",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Operações: Subtração de Números Inteiros e Racionais (Diferença, Oposto e Variação)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-142"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Requer Adição de Números Inteiros e Racionais.",
    "anotacoes": "Subtração como adição com o oposto (a - b = a + (-b)), eliminação de parênteses precedidos de sinal negativo, alinhamento de casas decimais e cálculo de amplitudes/variações térmicas e financeiras."
  },
  {
    "id": "topic-144",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Operações: Multiplicação de Números Inteiros e Racionais (Regra de Sinais e Distributividade)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-142",
      "topic-143"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Requer Adição e Subtração de Inteiros e Racionais.",
    "anotacoes": "Propriedades da multiplicação em Z e Q: regra de sinais dos fatores, elemento neutro (1), elemento absorvente (0), inverso multiplicativo (recíproco em Q), propriedade distributiva e posicionamento da vírgula em produtos decimais."
  },
  {
    "id": "topic-145",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Operações: Divisão de Números Inteiros e Racionais (Divisão Euclidiana, Exata e Decimais)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-144"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Multiplicação de Números Inteiros e Racionais.",
    "anotacoes": "Algoritmo da divisão euclidiana (D = d * q + r, com 0 <= r < |d|), divisão de números racionais (multiplicação pelo inverso do divisor), igualação de casas decimais e geratriz de dízimas periódicas."
  },
  {
    "id": "topic-146",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Operações: Potenciação de Números Inteiros e Racionais (Bases Negativas, Fracionárias e Propriedades)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-144",
      "math-m02-u01"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Multiplicação e Fundamentos de Potenciação.",
    "anotacoes": "Potenciação em Z e Q: diferença crítica entre (-a)^n e -a^n, sinal da potência conforme paridade do expoente, expoente inteiro negativo em bases fracionárias ((a/b)^-n = (b/a)^n) e propriedades operatórias de mesma base e mesmo expoente."
  },
  {
    "id": "topic-147",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Expressões Numéricas: Hierarquia de Operações e Sinais de Associação",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-142",
      "topic-143",
      "topic-144",
      "topic-145",
      "topic-146"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer as 5 Operações em Números Inteiros e Racionais.",
    "anotacoes": "Resolução passo a passo de expressões numéricas em Z e Q: ordem de precedência dos delimitadores (parênteses, colchetes e chaves) e das operações (potenciação/radiciação -> multiplicação/divisão na ordem em que aparecem -> adição/subtração)."
  },
  {
    "id": "topic-148",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Múltiplos e Divisores de Números Naturais: Divisibilidade, Números Primos, Fatoração, MMC e MDC",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-145"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Divisão de Números Inteiros.",
    "anotacoes": "Critérios de divisibilidade (por 2, 3, 4, 5, 6, 8, 9, 10, 11), decomposição em fatores primos (Teorema Fundamental da Aritmética), quantidade de divisores naturais de um número, cálculo e propriedades de MMC (encontros periódicos/ciclos) e MDC (divisão em partes iguais de maior tamanho possível), relação MMC(a,b) * MDC(a,b) = a * b."
  },
  {
    "id": "topic-149",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números Inteiros e Racionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números Inteiros e Racionais] Problemas Envolvendo Números Inteiros, Racionais, Múltiplos e Divisores",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-147",
      "topic-148"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Expressões Numéricas e Múltiplos/Divisores (MMC/MDC).",
    "anotacoes": "Modelagem e interpretação de problemas contextualizados da banca FCC envolvendo operações aritméticas em Z e Q, restos de divisão, simultaneidade de eventos (MMC) e partição máxima sem sobras (MDC)."
  },
  {
    "id": "topic-150",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Frações e Operações com Frações",
    "microtopico": "[Matemática e Raciocínio Lógico • Frações e Operações com Frações] Frações: Conceito Parte-Todo, Classificação, Equivalência, Simplificação e Comparação",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-145",
      "topic-148"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Divisão e Múltiplos/Divisores (MMC/MDC).",
    "anotacoes": "Frações próprias, impróprias, aparentes e números mistos; classes de equivalência, simplificação até a forma irredutível via MDC e comparação/ordenação de frações por redução ao mesmo denominador (MMC)."
  },
  {
    "id": "topic-151",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Frações e Operações com Frações",
    "microtopico": "[Matemática e Raciocínio Lógico • Frações e Operações com Frações] Operações com Frações I: Adição e Subtração de Frações (Mesmo Denominador e Denominadores Diferentes via MMC)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-150"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Conceito, Equivalência e Simplificação de Frações.",
    "anotacoes": "Adição e subtração de frações com denominadores iguais e diferentes (redução ao mesmo denominador via MMC), números mistos e interpretação de partes complementares."
  },
  {
    "id": "topic-152",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Frações e Operações com Frações",
    "microtopico": "[Matemática e Raciocínio Lógico • Frações e Operações com Frações] Operações com Frações II: Multiplicação, Divisão, Potenciação e Problemas de Fração Restante",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-151"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Adição e Subtração de Frações.",
    "anotacoes": "Multiplicação de frações (fração de fração: \"de\" = produto), divisão de frações (multiplicação pelo inverso da segunda), potenciação/radiciação de frações e problemas clássicos da FCC de retiradas sucessivas sobre a fração restante."
  },
  {
    "id": "topic-153",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números e Grandezas Proporcionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números e Grandezas Proporcionais] Razões e Proporções: Propriedades, Escalas e Grandezas Direta e Inversamente Proporcionais",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-23",
      "topic-152"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Proporcionalidade): Detalhamento atômico de Razões e Proporções.",
    "anotacoes": "Razão entre grandezas de mesma espécie e de espécies diferentes (velocidade, densidade, escala), propriedade fundamental das proporções (produto dos meios = produto dos extremos), propriedades da soma/diferença dos antecedentes e consequentes e constante de proporcionalidade (k)."
  },
  {
    "id": "topic-154",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números e Grandezas Proporcionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números e Grandezas Proporcionais] Divisão em Partes Diretamente e Inversamente Proporcionais (e Composta / Regra de Sociedade)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-153"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Razões e Proporções.",
    "anotacoes": "Divisão de uma grandeza em partes diretamente proporcionais, inversamente proporcionais e simultaneamente direta e inversamente proporcionais (uso da constante k) e problemas de divisão societária de lucros/prejuízos."
  },
  {
    "id": "topic-155",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números e Grandezas Proporcionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números e Grandezas Proporcionais] Regra de Três Simples (Direta e Inversa) e Regra de Três Composta",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-153"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Razões e Proporções.",
    "anotacoes": "Análise de setas/proporcionalidade de cada grandeza em relação à incógnita, resolução rápida de regra de três simples direta e inversa e método prático (processo/produto ou causas/efeitos) para regra de três composta."
  },
  {
    "id": "topic-156",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números e Grandezas Proporcionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números e Grandezas Proporcionais] Porcentagem: Razão Centesimal, Taxas Percentuais e Cálculos de Porcentagem",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-24",
      "topic-153"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Razões e Proporções.",
    "anotacoes": "Conversão ágil entre taxa percentual, fração irredutível e número decimal; porcentagem de uma quantidade, porcentagem de porcentagem e cálculo da participação percentual de uma parte sobre o todo."
  },
  {
    "id": "topic-157",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 1: Os Tijolos • Números e Grandezas Proporcionais",
    "microtopico": "[Matemática e Raciocínio Lógico • Números e Grandezas Proporcionais] Problemas Envolvendo Regra de Três Simples, Cálculos de Porcentagem, Acréscimos e Descontos",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-155",
      "topic-156"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Regra de Três e Porcentagem.",
    "anotacoes": "Fatores multiplicativos de acréscimo (1 + i) e desconto (1 - i), aumentos e descontos sucessivos, recomposição ao valor original após variação percentual e resolução de problemas integrados do estilo FCC."
  },
  {
    "id": "topic-158",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Raciocínio Lógico: Relações Arbitrárias",
    "microtopico": "[Matemática e Raciocínio Lógico • Raciocínio Lógico: Relações Arbitrárias] Estrutura Lógica de Relações Arbitrárias entre Pessoas, Lugares, Objetos ou Eventos Fictícios",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-32"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "🟢 Disponível (Nível 2 - RLM): Modelagem matricial de associações lógicas.",
    "anotacoes": "Construção e preenchimento de tabelas/grades de associação lógica para cruzar atributos mutuamente exclusivos (pessoas, cargos, cidades, objetos, cores, horários) por eliminação sistemática."
  },
  {
    "id": "topic-159",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Raciocínio Lógico: Relações Arbitrárias",
    "microtopico": "[Matemática e Raciocínio Lógico • Raciocínio Lógico: Relações Arbitrárias] Dedução de Novas Informações e Avaliação das Condições para Estabelecer a Estrutura das Relações",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-158"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Estrutura Lógica de Relações Arbitrárias.",
    "anotacoes": "Extração de conclusões necessárias a partir de premissas relacionais incompletas, teste de hipóteses (redução ao absurdo) e avaliação de suficiência ou necessidade de condições adicionais para fechar o quadro lógico."
  },
  {
    "id": "topic-160",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Raciocínio Verbal",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-31"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Lógica das Situações): Raciocínio verbal e quantificadores em linguagem natural.",
    "anotacoes": "Interpretação lógica de enunciados em língua natural, analogias verbais, quantificadores universais ('todo', 'nenhum') e existenciais ('algum', 'pelo menos um') e negação de sentenças verbais."
  },
  {
    "id": "topic-161",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Raciocínio Matemático",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-31",
      "topic-149"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Problemas Aritméticos e Conjuntos.",
    "anotacoes": "Problemas lógicos de caráter aritmético: Princípio da Casa dos Pombos (Princípio das Gavetas de Dirichlet — pior caso para garantir repetição), problemas de verdades e mentiras, pesagens, travessias e desafios numéricos da FCC."
  },
  {
    "id": "topic-162",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Raciocínio Sequencial",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-32",
      "topic-148"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Sequências Lógicas e Divisibilidade/Restos.",
    "anotacoes": "Leis de formação em sequências numéricas, alfabéticas, de palavras e figurais; sequências intercaladas, diferenças de 1ª e 2ª ordem e problemas de ciclos/carimbos periódicos resolvidos pelo resto da divisão."
  },
  {
    "id": "topic-163",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Orientação Espacial",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-32"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Lógica das Situações): Raciocínio visuoespacial e direcional.",
    "anotacoes": "Pontos cardeais e colaterais, deslocamentos e giros no plano/malha quadriculada, posicionamento em mesas circulares/filas, planificação de sólidos (dados/cubos), rotações, simetrias e vistas ortogonais."
  },
  {
    "id": "topic-164",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Orientação Temporal",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-148",
      "topic-162"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Raciocínio Sequencial e Divisibilidade.",
    "anotacoes": "Problemas de calendários, dias da semana (aritmética modular de resto por 7), anos bissextos vs comuns, contagem de meses de 30 e 31 dias, fusos horários, relógios e ordenação cronológica de eventos."
  },
  {
    "id": "topic-165",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Formação de Conceitos",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-31",
      "topic-160"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Requer Conjuntos e Raciocínio Verbal.",
    "anotacoes": "Abstração e identificação de propriedades essenciais que definem uma categoria ou conceito lógico a partir de exemplos positivos e negativos, agrupamento taxonômico e regras ocultas de classificação."
  },
  {
    "id": "topic-166",
    "disciplina": "Matemática e Raciocínio Lógico",
    "macrotema": "Nível 2: A Função das Peças • Compreensão e Elaboração da Lógica das Situações",
    "microtopico": "[Matemática e Raciocínio Lógico • Lógica das Situações] Compreensão e Elaboração da Lógica das Situações por Meio de: Discriminação de Elementos",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-162",
      "topic-165"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Requer Raciocínio Sequencial e Formação de Conceitos.",
    "anotacoes": "Comparação analítica de atributos numéricos, verbais ou visuais para distinguir subconjuntos, detectar o elemento intruso (odd one out) e aplicar critérios múltiplos de filtragem e exclusão."
  },
  {
    "id": "topic-167",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Constituição Federal de 1988",
    "microtopico": "[Legislação Institucional • CF/1988] Administração Pública: Disposições Gerais e Servidores Públicos (Arts. 37 a 41 da CF/88)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Base Constitucional): Princípios e regras constitucionais da Administração Pública.",
    "anotacoes": "Princípios expressos (LIMPE), acesso a cargos/empregos públicos, concurso público, acumulação remunerada de cargos, teto remuneratório, improbidade administrativa, responsabilidade civil objetiva do Estado (art. 37, §6º), estabilidade (art. 41) e regime previdenciário (art. 40)."
  },
  {
    "id": "topic-168",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Constituição Federal de 1988",
    "microtopico": "[Legislação Institucional • CF/1988] Fiscalização Contábil, Financeira, Orçamentária, Operacional e Patrimonial (Art. 70 da CF/88)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-167"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Administração Pública na CF/88 (Arts. 37 a 41).",
    "anotacoes": "Dimensões da fiscalização constitucional (COFOP: contábil, financeira, orçamentária, operacional e patrimonial), critérios de análise (legalidade, legitimidade, economicidade, aplicação das subvenções e renúncia de receitas) e dever universal de prestar contas (parágrafo único do art. 70)."
  },
  {
    "id": "topic-169",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Constituição Federal de 1988",
    "microtopico": "[Legislação Institucional • CF/1988] Controle Interno e Controle Externo: Competências dos Tribunais de Contas (Arts. 71 a 75 da CF/88)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-168"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Fiscalização Contábil, Financeira e Orçamentária (Art. 70 da CF/88).",
    "anotacoes": "Competências constitucionais do Controle Externo (parecer prévio nas contas do Chefe do Executivo vs julgamento das contas dos demais administradores; apreciação de atos de pessoal para fins de registro; sustação de atos vs contratos), finalidades e responsabilidade solidária do Controle Interno (art. 74) e simetria nos Estados/TCEs (art. 75)."
  },
  {
    "id": "topic-170",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 1: Os Tijolos • Constituição do Estado de Goiás",
    "microtopico": "[Legislação Institucional • Constituição do Estado de Goiás] Disposições Relativas ao Tribunal de Contas do Estado de Goiás (Arts. 25 a 30 da CE-GO)",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-169"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Controle Externo na CF/88 (Arts. 71 a 75).",
    "anotacoes": "Regras específicas da Constituição do Estado de Goiás sobre o TCE-GO: prazos de parecer prévio, competências perante a ALEGO, composição de 7 Conselheiros (escolha de 4 pela ALEGO e 3 pelo Governador com alternância entre Auditores/Conselheiros Substitutos e membros do MPC), garantias e prerrogativas."
  },
  {
    "id": "topic-171",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 4: A Obra Completa • Regimento Interno TCE-GO",
    "microtopico": "[Legislação Institucional • Regimento Interno TCE-GO] Resolução nº 22/2008 e Alterações: Processos, Fiscalização, Deliberações, Recursos e Incidentes",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-36"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Regimento Interno I (Estrutura, Sessões Plenárias e Câmaras).",
    "anotacoes": "Complemento regimental à Resolução nº 22/2008: instrumentos de fiscalização (levantamento, auditoria, inspeção, acompanhamento, monitoramento), deliberações (Acórdãos, Resoluções, Pareceres Prévios), prazos recursais regimentais, consulta, denúncia e representação."
  },
  {
    "id": "topic-172",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 2: A Função das Peças • Carreira e Pessoal no TCE-GO",
    "microtopico": "[Legislação Institucional • Plano de Cargos, Carreiras e Remuneração] Lei Estadual nº 15.122/2005: Quadro de Pessoal, Ingresso, Desenvolvimento (Progressão/Promoção) e Vencimentos no TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-37"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Estatuto dos Servidores de GO (Lei 20.756/2020 - Provimento e Direitos).",
    "anotacoes": "Estrutura dos cargos efetivos do TCE-GO (Analista de Controle Externo, Técnico de Controle Externo etc.), atribuições, jornada, requisitos de investidura, avaliação de desempenho, progressão funcional, promoção e parcelas remuneratórias na Lei Estadual nº 15.122/2005."
  },
  {
    "id": "topic-173",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 2: A Função das Peças • Ética e Conduta Funcional",
    "microtopico": "[Legislação Institucional • Código de Ética TCE-GO] Código de Ética dos Servidores do Tribunal de Contas do Estado de Goiás: Princípios, Deveres, Vedações e Comissão de Ética",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-38"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Regime Disciplinar do Estatuto GO (Lei 20.756/2020).",
    "anotacoes": "Valores e princípios éticos fundamentais do servidor do TCE-GO, deveres éticos, vedações (conflito de interesses, recebimento de brindes/vantagens, sigilo funcional), composição e competências da Comissão de Ética e rito de apuração ética."
  },
  {
    "id": "topic-174",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 14/2025: Estrutura Organizacional e Respectivas Competências do TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-35",
      "topic-36"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Organização do Tribunal na Lei Orgânica e Regimento Interno.",
    "anotacoes": "Mapeamento da estrutura organizacional atualizada do TCE-GO pela RA nº 14/2025: órgãos colegiados, Presidência, Vice-Presidência, Corregedoria, Ouvidoria, Escola Superior de Controle Externo (ESCOEX), Secretarias (Controle Externo, Administrativa, Geral) e competências de cada unidade."
  },
  {
    "id": "topic-175",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 17/2024: Política de Segurança da Informação (PSI) do TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-33"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "🟢 Disponível (Nível 3 - Resoluções TCE-GO): Altíssima sinergia com Segurança da Informação (Específicos).",
    "anotacoes": "Diretrizes, princípios, objetivos e estrutura de governança da Segurança da Informação no TCE-GO segundo a RA nº 17/2024: Comitê de Segurança, Gestor de Segurança, responsabilidades dos usuários, classificação da informação e gestão de incidentes e ativos."
  },
  {
    "id": "topic-176",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Normativa nº 5/2024: Regulamentação do Tratamento e Proteção de Dados Pessoais no TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-175"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer RA nº 17/2024 (PSI). Forte sinergia com LGPD (Conhecimentos Específicos).",
    "anotacoes": "Aplicação da LGPD no âmbito do TCE-GO pela RN nº 5/2024: papéis de Controlador, Operador e Encarregado (DPO) no Tribunal, hipóteses de tratamento no exercício do controle externo, atendimento aos direitos dos titulares e compartilhamento de dados."
  },
  {
    "id": "topic-177",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 24/2024: Uso de Ferramentas de Inteligência Artificial no TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-175",
      "topic-176"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer PSI (RA 17/2024) e Proteção de Dados (RN 5/2024). Altíssima sinergia com IA (Específicos).",
    "anotacoes": "Princípios e diretrizes da RA nº 24/2024 para adoção, desenvolvimento e uso de soluções de IA e IA Generativa no TCE-GO: supervisão humana obrigatória, proibição de inserção de dados sigilosos/pessoais em ferramentas públicas não homologadas, transparência, mitigação de viés e responsabilidade do usuário."
  },
  {
    "id": "topic-178",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 5/2024: Política de Gestão de Pessoas do TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-172"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "⏳ Requer Plano de Cargos e Carreiras (Lei 15.122/2005).",
    "anotacoes": "Princípios, diretrizes e eixos estratégicos da Política de Gestão de Pessoas do TCE-GO (RA nº 5/2024): gestão por competências, capacitação contínua, qualidade de vida no trabalho, valorização funcional, avaliação de desempenho e sucessão."
  },
  {
    "id": "topic-179",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 19/2024: Política de Comunicação do TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-33"
    ],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "🟢 Disponível (Nível 3 - Resoluções TCE-GO): Diretrizes de comunicação institucional.",
    "anotacoes": "Princípios, objetivos, públicos de interesse e diretrizes da comunicação interna e externa do TCE-GO segundo a RA nº 19/2024: transparência ativa, linguagem simples/cidadã, identidade visual, relacionamento com a imprensa e redes sociais oficiais."
  },
  {
    "id": "topic-180",
    "disciplina": "Legislação Institucional",
    "macrotema": "Nível 3: A Estrutura em Movimento • Políticas e Resoluções Normativas TCE-GO",
    "microtopico": "[Legislação Institucional • Políticas e Resoluções TCE-GO] Resolução Administrativa nº 15/2024: Sistema de Planejamento e Gestão do TCE-GO",
    "peso": "Peso 1 (Gerais)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-174"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Estrutura Organizacional (RA 14/2025).",
    "anotacoes": "Instrumentos e governança do Sistema de Planejamento e Gestão do TCE-GO (RA nº 15/2024): Plano Estratégico Institucional, Plano Diretor de Gestão, Plano Anual de Fiscalização/Diretrizes de Controle Externo, indicadores, metas e instâncias de acompanhamento."
  },
  {
    "id": "topic-181",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 1: Os Tijolos • Ciclos de Vida: Abordagens Iterativa, Incremental e Híbrida",
    "microtopico": "[Engenharia de Software • Modelos de Ciclo de Vida] Abordagens Iterativa, Incremental e Híbrida no Desenvolvimento de Software",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-93"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Ciclos de Vida e Scrum básico — Aprofundamento em Lean, Kanban, XP e combinações de ciclos.",
    "anotacoes": "Distinção conceitual cobrada pela FCC: Desenvolvimento Incremental (entregas funcionais parciais que somam pedaços do produto) vs. Iterativo (refinamento sucessivo por ciclos de feedback/prototipação) vs. Híbrido (combinação de planejamento preditivo de escopo/governança com execução adaptativa ágil, ex: Water-Scrum-Fall)."
  },
  {
    "id": "topic-182",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 1: Os Tijolos • Lean Software Development, Kanban (Métricas de Fluxo) e XP",
    "microtopico": "[Engenharia de Software • Metodologias Ágeis e Lean] Lean Software Development (7 Princípios e Desperdícios), Métricas de Fluxo Kanban e Práticas de XP",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-93",
      "topic-181"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Abordagens Iterativa, Incremental e Híbrida.",
    "anotacoes": "Lean Software Development (Mary e Tom Poppendieck): 7 princípios (Eliminar desperdícios, Amplificar o aprendizado, Decidir o mais tarde possível, Entregar o mais rápido possível, Empoderar a equipe, Construir qualidade intrínseca, Ver o todo) e os 7 desperdícios do software. Kanban: Limites de WIP, Lead Time vs Cycle Time, Throughput, Cumulative Flow Diagram (CFD) e Lei de Little. Práticas de Engenharia do XP (Pair Programming, TDD, Integração Contínua, Propriedade Coletiva, Design Simples)."
  },
  {
    "id": "topic-183",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 1: Os Tijolos • Processo de Engenharia de Requisitos (Elicitação à Gestão)",
    "microtopico": "[Engenharia de Software • Processo de Engenharia de Requisitos (Elicitação à Gestão)] Levantamento, Especificação, Análise, Validação e Gerenciamento de Requisitos (Rastreabilidade e Mudanças)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-94"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Requisitos Funcionais/Não Funcionais e User Stories.",
    "anotacoes": "As 5 macroatividades exigidas no edital: 1) Levantamento/Elicitação (entrevistas, workshops, JAD, prototipação, observação); 2) Especificação (SRS, linguagem natural estruturada); 3) Análise e Negociação (detecção de conflitos, ambiguidades e priorização MoSCoW/Kano); 4) Validação (revisões, inspeções, testes de aceitação); 5) Gerenciamento (Matriz de Rastreabilidade horizontal/vertical e controle de mudanças)."
  },
  {
    "id": "topic-184",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura de Software: Camadas, SOA, Microsserviços e Coesão/Acoplamento",
    "microtopico": "[Engenharia de Software • Arquitetura de Software: Camadas, SOA, Microsserviços e Coesão/Acoplamento] Padrões Arquiteturais: Arquitetura em Camadas, SOA, Microsserviços, Hexagonal/Clean e Coesão vs. Acoplamento",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-95",
      "topic-97"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Princípios SOLID e Modelagem UML.",
    "anotacoes": "Tipos de Coesão (funcional, sequencial, comunicacional vs coincidental) e Acoplamento (de dados, de controle, de conteúdo). Arquitetura em Camadas (isolamento de camadas, camada aberta vs fechada), SOA (ESB, governança centralizada, contratos WSDL/SOAP) vs Microsserviços (bancos descentralizados, API Gateway, Service Discovery, Circuit Breaker, padrão Saga Coreografado/Orquestrado)."
  },
  {
    "id": "topic-185",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura Orientada a Eventos (EDA), Mensageria, CQRS e Event Sourcing",
    "microtopico": "[Engenharia de Software • Arquitetura Orientada a Eventos (EDA), Mensageria, CQRS e Event Sourcing] Arquitetura Orientada a Eventos (EDA): Topologias Broker vs. Mediator, Pub/Sub, Event Streaming, CQRS e Event Sourcing",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-184"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Padrões Arquiteturais e Microsserviços.",
    "anotacoes": "Comunicação assíncrona e desacoplamento temporal. Filas ponto-a-ponto vs Tópicos Pub/Sub (RabbitMQ vs Apache Kafka). Topologia Broker (eventos coreografados) vs Mediator (orquestrador de eventos). Event Sourcing (estado derivado do log imutável de eventos) e CQRS (separação dos modelos de leitura/Query e escrita/Command)."
  },
  {
    "id": "topic-186",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 4: A Obra Completa • Qualidade de Software (Desempenho, Escalabilidade, Disponibilidade, Confiabilidade e Manutenibilidade)",
    "microtopico": "[Engenharia de Software • Qualidade de Software (Desempenho, Escalabilidade, Disponibilidade, Confiabilidade e Manutenibilidade)] Qualidade de Software (ISO/IEC 25010 e Atributos Arquiteturais): Desempenho, Escalabilidade, Disponibilidade, Confiabilidade e Manutenibilidade",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-184",
      "topic-96"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Arquitetura de Software e Clean Code.",
    "anotacoes": "Atributos explícitos do edital: Desempenho (latência, tempo de resposta, throughput); Escalabilidade (vertical/scale-up vs horizontal/scale-out, elasticidade); Disponibilidade (cálculo A = MTBF / (MTBF + MTTR), 'noves' de disponibilidade, eliminação de SPOF); Confiabilidade (maturidade, tolerância a falhas, recuperabilidade); Manutenibilidade (modularidade, reusabilidade, analisabilidade, modificabilidade, testabilidade — ISO/IEC 25010)."
  },
  {
    "id": "topic-187",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 4: A Obra Completa • Testes Funcionais, de Regressão, de Carga, de Estresse e Automação",
    "microtopico": "[Engenharia de Software • Testes Funcionais, de Regressão, de Carga, de Estresse e Automação] Testes de Software: Funcionais (Caixa-Preta), Regressão, Carga, Estresse e Testes Automatizados (Mocks, Stubs, Spies)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-99"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Pirâmide de Testes e TDD.",
    "anotacoes": "Testes Funcionais/Caixa-Preta (Particionamento de Equivalência, Análise de Valor Limite, Tabela de Decisão); Testes de Regressão (garantir que mudanças não quebraram funcionalidades existentes); Testes de Carga (comportamento sob volume esperado/pico) vs Testes de Estresse (além do limite até a falha/ruptura para avaliar recuperação); Automação de Testes e Test Doubles (Dummy, Fake, Stub, Spy, Mock)."
  },
  {
    "id": "topic-188",
    "disciplina": "Engenharia de Software",
    "macrotema": "Nível 4: A Obra Completa • Revisão de Código, Catálogo de Refatoração e Dívida Técnica",
    "microtopico": "[Engenharia de Software • Revisão de Código, Catálogo de Refatoração e Dívida Técnica] Revisão de Código (Code Review e Inspeções), Técnicas de Refatoração e Gestão de Dívida Técnica",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-96",
      "topic-99"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Clean Code, Padrões de Projeto e TDD.",
    "anotacoes": "Revisão de código (peer review assíncrono em PRs, walkthrough, inspeção formal de Fagan, análise estática). Catálogo de Refatoração de Fowler (Extract Method, Move Method, Replace Conditional with Polymorphism) preservando o comportamento externo. Dívida Técnica (metáfora de Ward Cunningham, Quadrante de Fowler: Prudente/Imprudente vs Deliberada/Inadvertida, juros da dívida e amortização contínua)."
  },
  {
    "id": "topic-189",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 1: Os Tijolos • Desenvolvimento Web: HTML5 e CSS3",
    "microtopico": "[Desenvolvimento de Sistemas • Desenvolvimento Web: HTML5 e CSS3] Desenvolvimento Web: HTML5 Semântico, DOM, Acessibilidade (WAI-ARIA) e CSS3 (Box Model, Seletores, Flexbox, Grid e Media Queries)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-51"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Desenvolvimento Web): Base essencial para Front-end com React.",
    "anotacoes": "Tags semânticas do HTML5 (header, nav, main, section, article, aside, footer), atributos de formulários, Web Storage (localStorage vs sessionStorage) e árvore DOM. CSS3: cálculo de especificidade (inline, id, classe/atributo/pseudo-classe, elemento), Box Model (box-sizing: border-box), layout unidimensional (Flexbox) vs bidimensional (CSS Grid) e design responsivo (Media Queries, unidades rem/em/vw/vh)."
  },
  {
    "id": "topic-190",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Programação em Java (Conceitos Básicos)",
    "microtopico": "[Desenvolvimento de Sistemas • Programação em Java (Conceitos Básicos)] Programação em Java: Arquitetura JVM/JDK/JRE, Tipos, Modificadores de Acesso, Collections Framework, Exceções e Streams",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-54",
      "topic-55"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Programação Orientada a Objetos e Funcional.",
    "anotacoes": "Bytecode, ClassLoader e Garbage Collector na JVM. Tipos primitivos vs Wrappers (Autoboxing), String Pool (imutabilidade), igualdade (== vs .equals() e contrato hashCode()). Modificadores (public, protected, default/package-private, private; static, final, abstract). Hierarquia de Exceções (Throwable -> Error vs Exception: Checked vs Unchecked/RuntimeException, try-with-resources). Collections (List/ArrayList, Set/HashSet, Map/HashMap) e Java Streams API."
  },
  {
    "id": "topic-191",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 2: A Função das Peças • Formatos de Intercâmbio de Dados: JSON e XML",
    "microtopico": "[Desenvolvimento de Sistemas • Formatos de Intercâmbio de Dados: JSON e XML] Formatos de Dados: JSON (Sintaxe, Tipos, JSON Schema) e XML (Sintaxe, Namespaces, XSD, DTD, XPath e Parsing DOM/SAX)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-51",
      "topic-52"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Lógica e Estruturas de Dados — Pré-requisito para APIs RESTful e SOA.",
    "anotacoes": "JSON: tipos suportados (string, number, object, array, boolean, null), serialização/desserialização e validação com JSON Schema. XML: documento bem-formado (well-formed: regras sintáticas, tag raiz única, fechamento e aninhamento) vs válido (validado contra DTD ou XML Schema/XSD), Namespaces (xmlns para evitar colisão de nomes), consultas XPath e parsers DOM (em memória/árvore) vs SAX (baseado em eventos/streaming)."
  },
  {
    "id": "topic-192",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 3: A Estrutura em Movimento • Python para Automação e Desenvolvimento Back-end",
    "microtopico": "[Desenvolvimento de Sistemas • Python para Automação e Desenvolvimento Back-end] Python para Automação (Scripts, OS/Pathlib, Subprocess, Regex, Requests) e Back-end (FastAPI, Flask, Django, WSGI/ASGI e ORM)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-56",
      "topic-59"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Python Básico/Asyncio e Arquitetura de APIs RESTful.",
    "anotacoes": "Automação com Python: manipulação de sistema de arquivos (os, pathlib, shutil), execução de processos (subprocess), expressões regulares (re), consumo de APIs (requests/httpx) e ambientes virtuais (venv). Back-end em Python: protocolo síncrono WSGI (Flask, Django) vs assíncrono ASGI (FastAPI, Uvicorn), validação de dados e tipagem com Pydantic, injeção de dependências no FastAPI e mapeamento objeto-relacional com SQLAlchemy."
  },
  {
    "id": "topic-193",
    "disciplina": "Desenvolvimento de Sistemas",
    "macrotema": "Nível 4: A Obra Completa • Gerenciamento de Dependências, Empacotamento e Publicação",
    "microtopico": "[Desenvolvimento de Sistemas • Gerenciamento de Dependências, Empacotamento e Publicação] Gerenciamento de Dependências (SemVer, Lockfiles, NPM, Maven/Gradle, Pip/Poetry), Empacotamento (Bundlers, Artefatos) e Publicação",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-62",
      "topic-190",
      "topic-192"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer domínio dos ecossistemas Node.js, Java e Python.",
    "anotacoes": "Versionamento Semântico (SemVer: MAJOR.MINOR.PATCH, operadores ^ e ~). Resolução de dependências diretas vs transitivas, reprodutibilidade de builds com Lockfiles (package-lock.json, yarn.lock, poetry.lock). Gerenciadores e artefatos por linguagem: Java (Maven pom.xml, Gradle, JAR/WAR), JS/TS (npm/pnpm/yarn, bundlers Vite/Webpack/esbuild, tree-shaking, minificação), Python (pip, poetry, wheels .whl, PyPI) e publicação em repositórios de artefatos (Nexus, Artifactory, npm registry)."
  },
  {
    "id": "topic-194",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 1: Os Tijolos • Programação Baseada em Intenção e Orientada a Linguagem Natural",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Programação Baseada em Intenção e Orientada a Linguagem Natural] Programação Baseada em Intenção (Intent-Based Programming), Desenvolvimento Orientado a Linguagem Natural e Spec-Driven Development",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-73"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Fundamentos de LLMs e Arquitetura Transformers.",
    "anotacoes": "Mudança de paradigma da programação imperativa (como fazer linha a linha) para declarativa baseada em intenção (o que deve ser alcançado, restrições e critérios de aceite). Desenvolvimento orientado a linguagem natural, Spec-Driven Development (especificações executáveis/estruturadas guiando o LLM), decomposição de intenções ambíguas em requisitos verificáveis e papel do engenheiro como arquiteto/revisor."
  },
  {
    "id": "topic-195",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 2: A Função das Peças • Engenharia de Contexto e Gestão de Memória em Agentes",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Engenharia de Contexto e Gestão de Memória em Agentes] Engenharia de Contexto e Gestão de Memória: Curto/Longo Prazo, Arquivos Persistentes (CLAUDE.md), Compactação e Context Rot",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-74",
      "topic-194"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Engenharia de Prompts e Programação por Intenção.",
    "anotacoes": "Diferença entre Engenharia de Prompts (formulação da instrução) e Engenharia de Contexto (curadoria dinâmica de todas as informações na janela de contexto: system prompt, arquivos relevantes, histórico, definições de tools, erros de execução). Gestão de memória: curto prazo (janela ativa) vs longo prazo (arquivos de projeto como CLAUDE.md/regras, memória episódica e semântica). Fenômeno Lost-in-the-Middle / Context Rot, sumarização/compactação (/compact) e isolamento de contexto via subagentes."
  },
  {
    "id": "topic-196",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Ciclo Agentivo de Desenvolvimento, Skills, Tool Use e Self-Healing",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Ciclo Agentivo de Desenvolvimento, Skills, Tool Use e Self-Healing] Ciclo Agentivo: Descoberta de Contexto, Planejamento, Ações em Arquivos/Shell, Verificação Autônoma (Self-Healing), Skills e Tool Use",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-76",
      "topic-195"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Sistemas Agentivos e Engenharia de Contexto.",
    "anotacoes": "Etapas explícitas do edital no ciclo agentivo: 1) Descoberta e coleta de contexto (busca lexical grep/glob, leitura seletiva de arquivos, análise de AST); 2) Planejamento e tomada de decisão (Plan Mode, decomposição de subtarefas); 3) Execução de ações em sistema de arquivos (edição por diff/search-and-replace) e comandos de shell; 4) Verificação autônoma de resultados (execução de testes/linters/typecheck) e autocorreção (self-healing loop). Extensibilidade via Tool Use (Function Calling), Skills modulares sob demanda e Hooks determinísticos."
  },
  {
    "id": "topic-197",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Geração, Revisão, Documentação, Depuração e Testes Assistidos por IA",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Geração, Revisão, Documentação, Depuração e Testes Assistidos por IA] Ciclo de Engenharia Assistido por IA: Geração de Código, Revisão (AI Code Review), Documentação, Depuração e Geração de Testes",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-196",
      "topic-99"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Ciclo Agentivo e Pirâmide de Testes.",
    "anotacoes": "Aplicação prática de agentes no ciclo de engenharia: Geração de código (scaffolding, refatoração assistida, Fill-in-the-Middle); Revisão de código assistida por IA (detecção de bugs lógicos, violações de arquitetura, vulnerabilidades e code smells em PRs); Documentação automatizada (docstrings, ADRs, diagramas Mermaid, OpenAPI); Depuração/Debugging assistido (análise de stack traces, logs e reprodução mínima de bugs); Geração automatizada de testes (unitários, mocks, casos de borda/edge cases e regressão)."
  },
  {
    "id": "topic-198",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Avaliação de Qualidade de Código Gerado por IA, Alucinações e Validação",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Qualidade e Validação em IA] Avaliação de Qualidade de Código Gerado por IA, Alucinações (Pacotes/APIs) e Validação Técnica",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-77",
      "topic-78",
      "topic-197"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Topo da Pirâmide de Engenharia Assistida por IA — Requer Agentes CLI/IDE, MCP e Geração/Revisão de Código.",
    "anotacoes": "Avaliação crítica de código gerado por LLMs: alucinações de APIs/métodos inexistentes, risco de Slopsquatting (alucinação de nomes de pacotes maliciosos), degradação de manutenibilidade (code churn/duplicação) e validação técnica determinística via compiladores, linters, SAST/DAST e suítes de testes."
  },
  {
    "id": "topic-199",
    "disciplina": "Eng. de Software Assistida por IA e Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Segurança, Privacidade, Propriedade Intelectual e Ética em IA no Desenvolvimento",
    "microtopico": "[Eng. de Software Assistida por IA e Sistemas Agentivos • Segurança e Ética em IA] Aspectos de Segurança, Privacidade, Propriedade Intelectual e Ética no Uso de IA no Desenvolvimento de Sistemas",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA",
      "Claude Code"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-198"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Avaliação de Qualidade e Validação de Código Gerado por IA.",
    "anotacoes": "Segurança em agentes de codificação: Prompt Injection indireto em repositórios, vazamento de segredos/credenciais no contexto, execução de comandos destrutivos sem sandboxing. Privacidade (políticas Zero Data Retention, vedação ao envio de dados pessoais/sigilosos para treinamento). Propriedade Intelectual (incompatibilidade de licenças copyleft GPL em trechos regurgitados e titularidade autoral) e responsabilidade técnica humana indelegável (Human-in-the-loop)."
  },
  {
    "id": "topic-200",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 1: Os Tijolos • Plataformas Git (GitHub/GitLab), Pull/Merge Requests e Estratégias de Branching",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Plataformas Git (GitHub/GitLab), Pull/Merge Requests e Estratégias de Branching] Plataformas Baseadas em Git (GitHub e GitLab): Pull Requests / Merge Requests, Revisão de Código, Branch Protection e Workflows",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-64"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Controle de Versão com Git.",
    "anotacoes": "Arquitetura distribuída do Git ( objetos blob, tree, commit, tag) integrada a plataformas de colaboração (GitHub e GitLab). Comparação detalhada de estratégias de branching: Git Flow (main, develop, feature, release, hotfix), GitHub Flow e Trunk-Based Development (commits frequentes na main, short-lived branches e Feature Flags). Governança em Pull Requests (PR) / Merge Requests (MR): revisão por pares, CODEOWNERS, Branch Protection Rules, Status Checks obrigatórios e Merge vs Squash vs Rebase."
  },
  {
    "id": "topic-201",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 2: A Função das Peças • Automação de Pipelines com Jenkins, Build/Testes e GitOps",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Automação de Pipelines com Jenkins, Build/Testes e GitOps] Automação de Pipelines: Jenkins (Jenkinsfile, Declarative vs Scripted, Agents), Automação de Build/Testes e Ferramentas Correlatas (ArgoCD)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-101",
      "topic-200"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer CI/CD (GitHub Actions/GitLab CI) e Plataformas Git.",
    "anotacoes": "Distinção formal entre Continuous Integration (CI: build + testes automatizados a cada commit), Continuous Delivery (CD: artefato pronto para produção, deploy com aprovação manual) e Continuous Deployment (deploy automático em produção). Arquitetura do Jenkins: Controller (Master) e Agents/Nodes, Pipeline as Code com Jenkinsfile (Declarative Pipeline: pipeline, agent, stages, steps, post vs Scripted Pipeline em Groovy) e Shared Libraries. Ferramentas correlatas de entrega contínua e GitOps (ArgoCD, FluxCD)."
  },
  {
    "id": "topic-202",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 2: A Função das Peças • Gestão de Ambientes (Desenvolvimento, Homologação e Produção)",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Gestão de Ambientes (Desenvolvimento, Homologação e Produção)] Ambientes de Desenvolvimento, Homologação (Staging/QA) e Produção: Paridade, Promoção de Artefatos e Gestão de Configurações",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-101",
      "topic-102"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Containers Docker e Pipelines de CI/CD.",
    "anotacoes": "Papel de cada ambiente: Desenvolvimento (Dev/Local, feedback rápido), Teste/QA (testes integrados/automatizados), Homologação/Staging (espelho de produção para validação de aceite, testes de carga e pré-deploy) e Produção (ambiente real de usuários). Metodologia Twelve-Factor App: Factor III (Configuração via variáveis de ambiente/Secrets separada do código) e Factor X (Paridade Dev/Prod). Princípio do Artefato Único e Imutável ('Build Once, Deploy Anywhere') promovido entre ambientes e anonimização de dados sensíveis em Homologação."
  },
  {
    "id": "topic-203",
    "disciplina": "DevOps, Plataforma e Engenharia de Entrega",
    "macrotema": "Nível 4: A Obra Completa • Telemetria, Instrumentação (OpenTelemetry), Correlação de Eventos, Alertas e Indicadores",
    "microtopico": "[DevOps, Plataforma e Engenharia de Entrega • Telemetria, Instrumentação (OpenTelemetry), Correlação de Eventos, Alertas e Indicadores] Observabilidade Avançada: Telemetria, Instrumentação (OpenTelemetry), Correlação de Eventos, Alertas e Indicadores Técnicos (Golden Signals, RED, USE)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-105"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Topo da Pirâmide DevOps — Requer Pilares da Observabilidade (Logs, Métricas e Tracing).",
    "anotacoes": "Instrumentação de código (automática/zero-code vs manual) e padronização com OpenTelemetry (OTel API, SDK, Collector e Context Propagation via W3C Trace Context / TraceID e SpanID). Correlação de eventos entre métricas, logs estruturados (JSON com TraceID) e traces distribuídos. Estratégia de Alertas (Alertmanager, roteamento, deduplicação, agrupamento, silenciamento, alerta baseado em sintoma/SLO burn rate vs causa). Indicadores técnicos de aplicações e infraestrutura: Four Golden Signals do Google SRE (Latência, Tráfego, Erros, Saturação), Método RED (Rate, Errors, Duration para serviços) e Método USE (Utilization, Saturation, Errors para recursos de infraestrutura)."
  },
  {
    "id": "topic-204",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 1: Os Tijolos • Álgebra Relacional (Operadores Fundamentais e Derivados)",
    "microtopico": "[Banco de Dados • Modelo e Álgebra Relacional] Álgebra Relacional: Operadores de Seleção (σ), Projeção (π), Produto (×), União (∪), Diferença (−), Junção (⋈) e Divisão (÷)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-41",
      "topic-42"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Banco de Dados): Modelagem Lógica e Formas Normais já concluídas!",
    "anotacoes": "Álgebra Relacional (linguagem procedural formal): operadores unários de Seleção σ (filtra linhas/tuplas) e Projeção π (filtra colunas/atributos, eliminando duplicatas na teoria de conjuntos), Renomeação ρ; operadores binários de conjuntos União ∪, Diferença − e Interseção ∩ (exigem compatibilidade de união: mesmo grau e domínios compatíveis); Produto Cartesiano ×, Theta-Join e Junção Natural ⋈, e Divisão Relacional ÷ (\"para todos\")."
  },
  {
    "id": "topic-205",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 1: Os Tijolos • Modelagem Física e Desnormalização de Dados",
    "microtopico": "[Banco de Dados • Modelagem e Desnormalização] Modelagem Física de Dados e Desnormalização (Redundância Controlada, Trade-offs de Performance e Aplicações)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-41",
      "topic-42",
      "topic-204"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Formas Normais e Álgebra Relacional.",
    "anotacoes": "Modelagem física (tipos de dados físicos, alocação em armazenamento, índices e particionamento). Desnormalização: introdução intencional de redundância controlada para otimizar performance de leitura (redução de JOINs custosos), trade-offs (maior custo de escrita e risco de anomalias de atualização mitigado por triggers/rotinas) e aplicação em OLAP/Data Warehouses."
  },
  {
    "id": "topic-206",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 2: A Função das Peças • Programação no SGBD: Procedures, Triggers e Views",
    "microtopico": "[Banco de Dados • Programação no SGBD: Procedures, Triggers e Views] Objetos Programáveis: Stored Procedures, Functions (UDFs), Triggers (BEFORE, AFTER, INSTEAD OF) e Views (Simples e Materializadas)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-44",
      "topic-45"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "🟢 Disponível (Nível 2 - Banco de Dados): SQL DQL/DML e JOINs já concluídos!",
    "anotacoes": "Stored Procedures vs Functions (Procedures executam ações/transações e podem ter parâmetros IN/OUT/INOUT; Functions retornam valor obrigatoriamente e podem ser usadas em cláusulas SELECT). Triggers (gatilhos disparados por eventos DML/DDL): tempos BEFORE, AFTER e INSTEAD OF (usado em Views); granularidade FOR EACH ROW (acesso a :OLD e :NEW) vs FOR EACH STATEMENT. Views (visões lógicas dinâmicas para segurança e simplificação, regras de Views atualizáveis) vs Materialized Views (armazenam fisicamente o resultado em disco e exigem REFRESH)."
  },
  {
    "id": "topic-207",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Administração e Otimização de PostgreSQL",
    "microtopico": "[Banco de Dados • Administração e Otimização de PostgreSQL] PostgreSQL: Arquitetura de Memória e Processos, MVCC, VACUUM/Autovacuum, WAL, Particionamento e Otimização (Tuning)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-39",
      "topic-48"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Transações ACID e Planos de Execução/Índices.",
    "anotacoes": "Arquitetura do PostgreSQL: processo Postmaster, Backend Processes, Background Workers (bgwriter, walwriter, checkpointer, autovacuum) e memória (shared_buffers, work_mem, maintenance_work_mem, effective_cache_size). Implementação do MVCC no Postgres (tuplas antigas marcadas com xmin/xmax viram dead tuples), necessidade crítica do VACUUM (recupera espaço e evita Transaction ID Wraparound) vs VACUUM FULL (reescreve tabela com lock exclusivo) e ANALYZE (atualiza estatísticas do pg_statistic para o Query Planner). Write-Ahead Logging (WAL), Tablespaces e Particionamento Declarativo (Range, List, Hash)."
  },
  {
    "id": "topic-208",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Administração e Otimização de Oracle Database",
    "microtopico": "[Banco de Dados • Administração e Otimização de Oracle Database] Oracle Database: Arquitetura de Instância (SGA, PGA, Background Processes) vs. Banco (Datafiles, Redo, Control Files, Tablespaces, Undo) e Tuning",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-47",
      "topic-39",
      "topic-48"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Arquitetura Geral de SGBDs, Transações ACID e Índices.",
    "anotacoes": "Distinção clássica de provas da FCC no Oracle: Instância (Memória SGA + PGA + Processos de Background: DBWn, LGWR, CKPT, SMON, PMON, ARCn) vs Banco de Dados físico (Datafiles, Control Files, Online Redo Log Files) e estrutura lógica (Tablespaces -> Segments -> Extents -> Data Blocks). Componentes da SGA (Database Buffer Cache, Shared Pool, Redo Log Buffer). Consistência de leitura multiversão via Tablespace de UNDO (erro ORA-01555 Snapshot Too Old). Arquitetura Multitenant (CDB e PDBs), diagnóstico e tuning com Cost-Based Optimizer (CBO), AWR, ASH e ADDM."
  },
  {
    "id": "topic-209",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Replicação, Backup, Recuperação e Alta Disponibilidade",
    "microtopico": "[Banco de Dados • Replicação, Backup, Recuperação e Alta Disponibilidade] Replicação (Síncrona/Assíncrona, Física/Lógica), Backup e Recuperação (Full, Incremental, Diferencial, PITR, RPO/RTO) e Alta Disponibilidade",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-39",
      "topic-207",
      "topic-208"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Transações ACID e Administração de PostgreSQL/Oracle.",
    "anotacoes": "Métricas de continuidade: RPO (Recovery Point Objective — perda máxima de dados tolerada no tempo) e RTO (Recovery Time Objective — tempo máximo de indisponibilidade). Tipos de Backup: Completo (Full), Incremental (copia apenas alterações desde o último backup de qualquer tipo — mais rápido para fazer, mais lento para restaurar) vs Diferencial (copia alterações desde o último Full — intermediário); Backup Físico vs Lógico (pg_dump/expdp) e Point-in-Time Recovery (PITR) combinando Base Backup + Archive Logs/WAL. Replicação: Síncrona vs Assíncrona, Streaming/Física vs Lógica, Single-Leader vs Multi-Leader. Alta Disponibilidade: Failover automático, Split-Brain, Patroni/PgBouncer, Oracle RAC e Oracle Data Guard."
  },
  {
    "id": "topic-210",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 4: A Obra Completa • Bancos NoSQL: Famílias de Colunas (Wide-Column) e Grafos",
    "microtopico": "[Banco de Dados • Bancos NoSQL: Famílias de Colunas (Wide-Column) e Grafos] Bancos NoSQL: Modelo de Famílias de Colunas / Wide-Column (Cassandra, HBase) e Modelo Orientado a Grafos (Neo4j, Cypher e Casos de Uso)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-49",
      "topic-53"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer NoSQL (Chave-Valor/Documentos) e Estruturas Não Lineares (Grafos).",
    "anotacoes": "Complemento essencial ao topic-49 para cobrir os 4 modelos NoSQL do edital: 1) Famílias de Colunas / Wide-Column (Apache Cassandra, HBase, Bigtable): armazenamento esparso orientado a famílias de colunas, chave de partição (Partition Key) + chave de clusterização (Clustering Key), arquitetura masterless em anel (Cassandra), altíssima escalabilidade de escrita para séries temporais/telemetria/IoT; 2) Bancos Orientados a Grafos (Neo4j): modelo de Grafo de Propriedades (Labeled Property Graph: Nós/Vértices, Arestas/Relacionamentos direcionados e tipados, Propriedades chave-valor em ambos), travessia em tempo constante por adjacência (Index-Free Adjacency), linguagem Cypher e casos de uso (detecção de fraudes, redes sociais, motores de recomendação e Knowledge Graphs)."
  },
  {
    "id": "topic-211",
    "disciplina": "Banco de Dados",
    "macrotema": "Nível 4: A Obra Completa • Segurança e Governança de Dados em SGBDs",
    "microtopico": "[Banco de Dados • Segurança e Governança de Dados em SGBDs] Segurança de Dados (Controle de Acesso RBAC/DAC/MAC, RLS, Mascaramento, TDE, Auditoria) e Governança de Dados (DAMA-DMBOK)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-43",
      "mba-gov"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer SQL DDL/DCL e Governança de Dados (DAMA-DMBOK).",
    "anotacoes": "Segurança em SGBDs: Autenticação vs Autorização; modelos de controle de acesso Discricionário (DAC: GRANT/REVOKE, WITH GRANT OPTION), Baseado em Papéis (RBAC: Roles) e Obrigatório (MAC/Label Security); segurança em nível de linha e coluna (Row-Level Security - RLS e Virtual Private Database - VPD); Criptografia em repouso (TDE - Transparent Data Encryption) e em trânsito (TLS); Mascaramento Dinâmico e Estático de Dados, Anonimização e Auditoria de Banco de Dados. Governança de Dados: Data Stewardship, Catálogo de Dados, Linhagem (Data Lineage), Dimensões de Qualidade de Dados (Acurácia, Completude, Consistência, Tempestividade, Unicidade, Validade) e Gestão de Metadados."
  },
  {
    "id": "topic-212",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 1: Os Tijolos • Fundamentos da Inteligência Artificial",
    "microtopico": "[IA, Ciência de Dados e Automação • Fundamentos da Inteligência Artificial] Fundamentos de IA: Abordagem Simbólica vs Conexionista, Agentes Racionais, Busca Heurística (A*) e Representação de Conhecimento",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-51"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "🟢 Disponível (Nível 1 - IA): Alicerce conceitual da Inteligência Artificial exigido no início do ponto 6 do edital.",
    "anotacoes": "Evolução da IA, Teste de Turing, agentes racionais (PEAS), algoritmos de busca cega (BFS, DFS) vs informada/heurística (Greedy, A*) e sistemas baseados em conhecimento."
  },
  {
    "id": "topic-213",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 1: Os Tijolos • Coleta, Exploração e Análise Exploratória de Dados (EDA)",
    "microtopico": "[IA, Ciência de Dados e Automação • Coleta, Exploração e Análise Exploratória de Dados (EDA)] Ciclo de Ciência de Dados: Coleta, Exploração, Análise Exploratória de Dados (EDA), Detecção de Outliers e Visualização",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-65",
      "topic-66"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Estatística Descritiva e Manipulação com Pandas/NumPy.",
    "anotacoes": "Fontes e coleta de dados (APIs, dados abertos, logs), análise univariada e multivariada, matriz de correlação (Pearson/Spearman), boxplots (IQR) e tratamento de viés amostral."
  },
  {
    "id": "topic-214",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 2: A Função das Peças • Processamento Distribuído em Big Data (MapReduce e Spark)",
    "microtopico": "[IA, Ciência de Dados e Automação • Processamento Distribuído em Big Data (MapReduce e Spark)] Processamento Distribuído: Paradigma MapReduce, Apache Spark (RDD, DataFrames, Lazy Evaluation) e Volume, Velocidade e Variedade",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-67"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Arquiteturas de Big Data (DW, Data Lake e Lakehouse).",
    "anotacoes": "Processamento batch vs streaming, tolerância a falhas em clusters distribuídos, diferença entre Hadoop MapReduce (disco) e Apache Spark (in-memory, DAG, transformações vs ações)."
  },
  {
    "id": "topic-215",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 2: A Função das Peças • Aprendizado por Reforço (Reinforcement Learning)",
    "microtopico": "[IA, Ciência de Dados e Automação • Aprendizado por Reforço (Reinforcement Learning)] Aprendizado por Reforço: Agente, Ambiente, Estado, Ação, Recompensa, Processo de Decisão de Markov (MDP), Q-Learning e RLHF",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-212",
      "topic-68"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Fundamentos de IA e Aprendizado Supervisionado/Não Supervisionado.",
    "anotacoes": "Diferença entre aprendizado supervisionado, não supervisionado e por reforço; dilema Exploration vs Exploitation (epsilon-greedy), função de valor, política ótima e RLHF em LLMs."
  },
  {
    "id": "topic-216",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Processamento de Linguagem Natural (PLN / NLP)",
    "microtopico": "[IA, Ciência de Dados e Automação • Processamento de Linguagem Natural (PLN / NLP)] Processamento de Linguagem Natural: Tokenização, Stemming, Lemmatization, TF-IDF, Word Embeddings (Word2Vec), NER e Análise de Sentimentos",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-68",
      "topic-71"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Machine Learning e Redes Neurais/Deep Learning.",
    "anotacoes": "Pipeline clássico de PLN (normalização, remoção de stop words, n-grams, Bag-of-Words, TF-IDF) até representações densas (Word2Vec CBOW/Skip-gram) e tarefas de classificação/extração (NER)."
  },
  {
    "id": "topic-217",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 2: A Função das Peças • IA Generativa e Modelos Multimodais",
    "microtopico": "[IA, Ciência de Dados e Automação • IA Generativa e Modelos Multimodais] IA Generativa e Modelos Multimodais: Foundation Models, VLMs (Texto, Imagem, Áudio e Vídeo), Difusão e Fine-Tuning (PEFT/LoRA) vs RAG",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-73"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Arquitetura Transformers e LLMs.",
    "anotacoes": "Conceitos e aplicações de IA generativa, modelos multimodais nativos (visão, áudio, texto), quando usar Prompt Engineering vs RAG vs Fine-Tuning (LoRA/QLoRA) e mitigação de alucinações."
  },
  {
    "id": "topic-218",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 4: A Obra Completa • Aplicações Práticas de IA e Automação de Processos (RPA e IDP)",
    "microtopico": "[IA, Ciência de Dados e Automação • Aplicações Práticas de IA e Automação de Processos (RPA e IDP)] Aplicações de IA em Sistemas de Informação e Automação de Processos: RPA, Processamento Inteligente de Documentos (IDP/OCR) e Hiperautomação",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-75",
      "topic-76",
      "topic-98"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Sistemas Agentivos, RAG e Modelagem de Processos (BPMN).",
    "anotacoes": "Diferença entre RPA tradicional (baseado em regras/interface) e Automação Cognitiva/Hiperautomação (RPA + IA Generativa + IDP/OCR + Agentes) aplicada à auditoria e controle externo."
  },
  {
    "id": "topic-219",
    "disciplina": "IA, Ciência de Dados e Automação",
    "macrotema": "Nível 4: A Obra Completa • Estratégia Brasileira de Inteligência Artificial (EBIA)",
    "microtopico": "[IA, Ciência de Dados e Automação • Estratégia Brasileira de Inteligência Artificial (EBIA)] Estratégia Brasileira de Inteligência Artificial (EBIA): Diretrizes, Eixos Transversais e Eixos Verticais no Setor Público",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-72"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Topo da Pirâmide de Governança de IA — Requer IA Responsável, XAI e LGPD.",
    "anotacoes": "Portaria MCTI nº 4.617/2021 e atualizações (PBIA): 3 eixos transversais (Legislação/regulação/uso ético; Governança de IA; Aspectos internacionais) e 6 eixos verticais (Educação; Força de trabalho; PD&I; Setores produtivos; Poder público; Segurança pública)."
  },
  {
    "id": "topic-220",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 1: Os Tijolos • Classificação da Informação e Ciclo de Vida",
    "microtopico": "[Segurança da Informação • Classificação da Informação e Ciclo de Vida] Classificação da Informação: Critérios de Criticidade, Graus de Sigilo, Rotulagem, Manuseio e Descarte Seguro",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-79"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Princípios da Segurança da Informação (CIDA).",
    "anotacoes": "Ciclo de vida da informação (criação, armazenamento, uso, compartilhamento, arquivamento e destruição/sanitização), diretrizes de classificação e rotulagem de ativos segundo a ISO/IEC 27002."
  },
  {
    "id": "topic-221",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 1: Os Tijolos • Malware, Ransomware, Phishing, Engenharia Social e Antivírus",
    "microtopico": "[Segurança da Informação • Malware, Ransomware, Phishing, Engenharia Social e Antivírus] Ameaças e Códigos Maliciosos: Malware, Vírus, Worms, Trojans, Ransomware, Phishing, Engenharia Social e Antivírus/EDR",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-79"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Princípios da Segurança da Informação (CIDA).",
    "anotacoes": "Diferença entre Vírus (exige hospedeiro/ação) e Worm (autorreplicação autônoma em rede); Trojan, Spyware, Keylogger, Rootkit, Botnets e Ransomware (dupla extorsão). Phishing, Spear Phishing, Whaling, Vishing, Smishing, Baiting e evolução do Antivírus (assinatura/heurística) para EDR/XDR."
  },
  {
    "id": "topic-222",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 2: A Função das Peças • Controle de Acesso e Gestão de Identidades (IAM)",
    "microtopico": "[Segurança da Informação • Controle de Acesso e Gestão de Identidades (IAM)] Controle de Acesso e IAM: Autenticação (MFA, SSO), Autorização (DAC, MAC, RBAC, ABAC), Federação (SAML/OIDC) e PAM",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-79",
      "topic-220"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Princípios CIDA e Classificação da Informação.",
    "anotacoes": "Fases AAA (Identification, Authentication, Authorization, Accounting/Auditing); múltiplos fatores (algo que sabe, tem, é); controle Discricionário (DAC), Mandatório (MAC), Baseado em Papéis (RBAC) e em Atributos (ABAC); Gestão de Acesso Privilegiado (PAM) e Princípio do Menor Privilégio."
  },
  {
    "id": "topic-223",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 2: A Função das Peças • Família ABNT NBR ISO/IEC 27000 e Gestão de Riscos (ISO 27005)",
    "microtopico": "[Segurança da Informação • Família ABNT NBR ISO/IEC 27000 e Gestão de Riscos (ISO 27005)] Família ABNT NBR ISO/IEC 27000: Visão Geral (27000), Gestão de Riscos de Segurança da Informação (27005) e Privacidade (27701)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-80"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer ISO/IEC 27001 e 27002.",
    "anotacoes": "Estrutura da série 27000: ISO 27000 (fundamentos e vocabulário), ISO 27005 (processo de gestão de riscos: contexto, identificação de ativos/ameaças/vulnerabilidades, análise, avaliação e tratamento: modificar/mitigar, reter/aceitar, evitar, compartilhar/transferir) e ISO 27701 (PIMS/LGPD)."
  },
  {
    "id": "topic-224",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Gestão de Vulnerabilidades, Incidentes e Testes de Invasão (Pentest)",
    "microtopico": "[Segurança da Informação • Gestão de Vulnerabilidades, Incidentes e Testes de Invasão (Pentest)] Gestão de Vulnerabilidades (CVE/CVSS), Resposta a Incidentes (NIST SP 800-61 / ISO 27035) e Testes de Invasão (Pentest)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-221",
      "topic-223",
      "topic-83"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Família ISO 27000, Ameaças/Malware e Defesa de Perímetro.",
    "anotacoes": "Ciclo de Resposta a Incidentes (Preparação -> Detecção e Análise -> Contenção, Erradicação e Recuperação -> Atividades Pós-Incidente / Lições Aprendidas); Análise de Vulnerabilidades (passiva/scan) vs Pentest (exploração ativa: Black-box, White-box e Gray-box)."
  },
  {
    "id": "topic-225",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Backup, Continuidade de Negócios e Recuperação de Desastres",
    "microtopico": "[Segurança da Informação • Backup, Continuidade de Negócios e Recuperação de Desastres] Políticas de Backup (Normal/Full, Incremental, Diferencial, Regra 3-2-1), Continuidade de Negócios (PCN, RPO, RTO) e Recuperação de Desastres (PRD)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-80",
      "topic-223"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Gestão de Riscos (ISO 27001/27005).",
    "anotacoes": "Comparação cirúrgica de Backup Full, Incremental (marca archive bit, backup rápido e restore lento) e Diferencial (não limpa archive bit, backup cumulativo e restore em 2 passos); RPO (perda máxima de dados tolerada no tempo) vs RTO (tempo máximo para restabelecer o serviço); Hot Site, Warm Site e Cold Site."
  },
  {
    "id": "topic-226",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura Zero Trust (NIST SP 800-207)",
    "microtopico": "[Segurança da Informação • Arquitetura Zero Trust (NIST SP 800-207)] Conceito e Arquitetura Zero Trust (NIST SP 800-207): Princípios, Microssegmentação, Policy Engine (PE), Policy Administrator (PA) e PEP",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-222",
      "topic-83"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Controle de Acesso (IAM) e Defesa de Perímetro.",
    "anotacoes": "Superação do modelo castelo-e-fosso: 'Nunca confie, sempre verifique', assumir brecha (assume breach), verificação contínua por sessão, microssegmentação de rede e separação entre Plano de Controle (PDP = PE + PA) e Plano de Dados (PEP)."
  },
  {
    "id": "topic-227",
    "disciplina": "Segurança da Informação",
    "macrotema": "Nível 4: A Obra Completa • OWASP Top 10:2025 e Segurança em APIs, Containers e Nuvem",
    "microtopico": "[Segurança da Informação • OWASP Top 10:2025 e Segurança em APIs, Containers e Nuvem] Segurança em Aplicações e Cloud: Atualizações OWASP Top 10:2025, Segurança em APIs, Containers (Docker/K8s) e Ambientes de Nuvem",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-84",
      "topic-85",
      "topic-63",
      "topic-102",
      "topic-91"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Topo da Pirâmide de Segurança — Requer OWASP Web, DevSecOps, Containers e Cloud.",
    "anotacoes": "Destaques OWASP Top 10:2025 (A01 Broken Access Control com SSRF, A02 Security Misconfiguration, A03 Software Supply Chain Failures, A07 Authentication Failures, A10 Mishandling of Exceptional Conditions). Segurança em APIs (BOLA/IDOR, Rate Limiting), Containers (imagens distroless, rootless, scan de imagem, K8s Network Policies/RBAC) e Nuvem (CSPM, CWPP, CASB)."
  },
  {
    "id": "topic-228",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 1: Os Tijolos • Sistemas de Arquivos Windows e Linux",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Sistemas de Arquivos Windows e Linux] Sistemas de Arquivos: Linux (ext4, XFS, Btrfs, Inodes, Hard/Symbolic Links, FHS) e Windows (NTFS, ReFS, FAT32 e Permissões)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-86"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Fundamentos de Sistemas Operacionais (Processos e Memória).",
    "anotacoes": "Journaling em sistemas de arquivos, estrutura de Inodes no Linux, diferença entre Hard Link (mesmo inode) e Soft/Symbolic Link (atalho para caminho), montagem (/etc/fstab), LVM e permissões NTFS vs compartilhamento no Windows."
  },
  {
    "id": "topic-229",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Serviços de Diretório: Active Directory e LDAP",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Serviços de Diretório: Active Directory e LDAP] Serviços de Diretório: Protocolo LDAP (DIT, DN, CN, OU, DC) e Windows Active Directory (AD DS, Florestas, Domínios, OUs, GPOs e FSMO)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-87"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Administração Linux/Windows Server.",
    "anotacoes": "Hierarquia lógica e física do Active Directory (Florestas, Árvores, Domínios, Unidades Organizacionais - OUs, Sites, Controladores de Domínio, Catálogo Global), aplicação de GPOs (Local -> Site -> Domínio -> OU), 5 Mestres de Operações (FSMO) e protocolo LDAP (portas 389 e 636 LDAPS)."
  },
  {
    "id": "topic-230",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Virtualização (Hypervisors Tipo 1 e Tipo 2) vs Containers",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Virtualização (Hypervisors Tipo 1 e Tipo 2) vs Containers] Virtualização de Servidores: Hypervisors Tipo 1 (Bare-Metal: KVM, ESXi, Hyper-V) vs Tipo 2, Máquinas Virtuais vs Containers",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-86",
      "topic-87"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Sistemas Operacionais e Administração de Servidores.",
    "anotacoes": "Virtualização completa vs paravirtualização vs assistida por hardware (VT-x/AMD-V); contraste arquitetural entre Máquinas Virtuais (Guest OS completo sobre Hypervisor) e Containers (compartilhamento do Kernel do Host via namespaces e cgroups)."
  },
  {
    "id": "topic-231",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Protocolos HTTP/3 (QUIC), SMTP, FTP e SSH",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Protocolos HTTP/3 (QUIC), SMTP, FTP e SSH] Protocolos de Aplicação: Evolução HTTP/1.1, HTTP/2 e HTTP/3 (QUIC sobre UDP), SMTP, FTP (Ativo/Passivo, SFTP/FTPS) e SSH",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-89"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Camada de Transporte (TCP/UDP) e DNS/DHCP/HTTPS.",
    "anotacoes": "Eliminação do Head-of-Line Blocking da camada TCP pelo HTTP/3 usando QUIC sobre UDP; envio de e-mail (SMTP porta 25/587) vs recebimento (IMAP 143/993, POP3 110/995); FTP (controle 21, dados 20, ativo vs passivo) e SSH (porta 22, criptografia assimétrica + simétrica e port forwarding)."
  },
  {
    "id": "topic-232",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 3: A Estrutura em Movimento • Noções de Redes Sem Fio (IEEE 802.11 e WPA2/WPA3)",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Noções de Redes Sem Fio (IEEE 802.11 e WPA2/WPA3)] Redes Sem Fio (Wireless): Padrões IEEE 802.11 (Wi-Fi 4, 5, 6, 6E e 7), Frequências (2.4/5/6 GHz), Topologias (BSS/ESS) e Segurança (WPA2/WPA3)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-88",
      "topic-90"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Arquitetura TCP/IP e Dispositivos de Rede.",
    "anotacoes": "Padrões 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6/6E - OFDMA, MU-MIMO) e 802.11be (Wi-Fi 7); CSMA/CA (prevenção de colisão); evolução de segurança WEP -> WPA (TKIP) -> WPA2 (CCMP/AES) -> WPA3 (SAE/Dragonfly) e autenticação corporativa 802.1X (EAP/RADIUS)."
  },
  {
    "id": "topic-233",
    "disciplina": "Sistemas Operacionais, Redes e Nuvem",
    "macrotema": "Nível 4: A Obra Completa • Alta Disponibilidade, Integração Local-Nuvem e Monitoramento de Infraestrutura",
    "microtopico": "[Sistemas Operacionais, Redes e Nuvem • Alta Disponibilidade, Integração Local-Nuvem e Monitoramento de Infraestrutura] Cloud Avançada: Escalabilidade, Alta Disponibilidade (Multi-AZ/Regiões), Integração On-Premises e Nuvem, e Monitoramento de Infraestrutura",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-91",
      "topic-92",
      "topic-229"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Topo da Pirâmide de Infraestrutura — Requer Modelos Cloud (IaaS/PaaS/SaaS), Serverless e AD/LDAP.",
    "anotacoes": "Escalabilidade vertical (scale-up) vs horizontal (scale-out/Auto Scaling); Alta Disponibilidade (Regiões e Zonas de Disponibilidade Multi-AZ) vs Tolerância a Falhas; integração híbrida (VPN Site-to-Site, Direct Connect/ExpressRoute, federação AD Entra ID) e monitoramento de infraestrutura (SNMP, Zabbix, Prometheus, CloudWatch)."
  },
  {
    "id": "topic-234",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 1: Os Tijolos • Alinhamento Estratégico e ISO/IEC 38500:2024",
    "microtopico": "[Governança de TI • Alinhamento Estratégico e ISO/IEC 38500:2024] Alinhamento Estratégico de TI aos Objetivos Institucionais (PETI, BSC) e Atualizações da Norma ISO/IEC 38500:2024",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-108"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer base da ISO/IEC 38500.",
    "anotacoes": "Planejamento Estratégico de TI (PETI) alinhado ao Planejamento Estratégico Institucional (PEI); Balanced Scorecard (BSC) em TI; novidades da ISO/IEC 38500:2024: alinhamento à ISO 37000, modelo EDM (Avaliar, Dirigir, Monitorar) + Engajamento de Stakeholders, geração de valor, sustentabilidade e governança de IA/dados."
  },
  {
    "id": "topic-235",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 2: A Função das Peças • Práticas de Gestão de Serviços e Ativos (ITIL v4)",
    "microtopico": "[Governança de TI • Práticas de Gestão de Serviços e Ativos (ITIL v4)] Gestão de Serviços de TI (ITIL v4): Catálogo de Serviços, Configuração (CMDB/ICs), Portfólio, Ativos de TI (ITAM) e Continuidade de Serviços",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-107"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Requer Fundamentos do ITIL v4 (SVS, 4 Dimensões e Incidentes/Problemas/Mudanças).",
    "anotacoes": "Distinção clássica de prova: Portfólio de Serviços (pipeline + catálogo + aposentados) vs Catálogo de Serviços (apenas serviços ativos/operacionais visíveis ao usuário); Gestão de Ativos de TI - ITAM (valor financeiro/ciclo de vida) vs Gestão de Configuração - CMDB (relações técnicas entre ICs); Continuidade de Serviços de TI (ITSCM)."
  },
  {
    "id": "topic-236",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • PMBOK 8ª Edição e Métodos Ágeis em Projetos de TI",
    "microtopico": "[Governança de TI • PMBOK 8ª Edição e Métodos Ágeis em Projetos de TI] Gestão de Projetos de TI: Fundamentos do PMBOK 8ª Edição (Princípios, Domínios, Grupos de Processos e Foco em Valor) e Práticas Ágeis",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-109",
      "topic-93"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer PMBOK Base e Métodos Ágeis (Scrum/Kanban/XP).",
    "anotacoes": "Evolução para o PMBOK 8ª Edição: integração entre Princípios, Domínios de Desempenho e Grupos de Processos (Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento) com foco em geração de valor e uso de IA; aplicação de Scrum/Kanban em projetos de TI (Product Backlog, Sprint, Velocity, Story Points, Burndown/Burnup)."
  },
  {
    "id": "topic-237",
    "disciplina": "Governança de TI",
    "macrotema": "Nível 4: A Obra Completa • Estratégia Nacional de Governo Digital – ENGD 2024–2027 (Decreto 12.069/2024)",
    "microtopico": "[Governança de TI • Estratégia Nacional de Governo Digital – ENGD 2024–2027 (Decreto 12.069/2024)] Decreto nº 12.069/2024: Estratégia Nacional de Governo Digital (ENGD 2024–2027), Princípios, 6 Pilares, Rede Gov.br e Recomendações",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-111"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Topo da Pirâmide de Governo Digital — Requer Lei nº 14.129/2021 (Lei do Governo Digital).",
    "anotacoes": "Decreto nº 12.069/2024 (ENGD 2024-2027): articulação da Rede Nacional de Governo Digital (Rede Gov.br), elaboração de EGDs pelos entes federados e os eixos estruturantes: Estado centrado no cidadão e inclusivo, integrado/interoperável, inteligente/baseado em dados e IA, confiável/seguro/privacidade, transparente/aberto e eficiente/sustentável."
  },
  {
    "id": "topic-238",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 2: A Função das Peças • Certificação Digital em Sistemas Informatizados (MP 2.200-2 e Lei 14.063)",
    "microtopico": "[Legislação Aplicada à TI • Certificação Digital em Sistemas Informatizados (MP 2.200-2 e Lei 14.063)] Certificação Digital Aplicada a Sistemas Informatizados: MP nº 2.200-2/2001, Lei nº 14.063/2020 (Assinaturas Simples, Avançada e Qualificada)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-82",
      "topic-112"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer ICP-Brasil (Segurança da Informação) e Marco Civil da Internet.",
    "anotacoes": "Validade jurídica de documentos eletrônicos (MP 2.200-2/2001, presunção de veracidade em relação aos signatários) e classificação das assinaturas eletrônicas na interação com o Poder Público (Lei 14.063/2020: Simples, Avançada ex: Gov.br Prata/Ouro e Qualificada com certificado ICP-Brasil)."
  },
  {
    "id": "topic-239",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • Aplicação Técnica da LGPD: Privacy by Design, Anonimização e Pseudonimização",
    "microtopico": "[Legislação Aplicada à TI • Aplicação Técnica da LGPD: Privacy by Design, Anonimização e Pseudonimização] Engenharia de Privacidade na LGPD: Privacy by Design e by Default, Minimização de Dados, Anonimização vs Pseudonimização",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso",
      "MBA"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-113",
      "topic-114"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer Conceitos, Princípios e Bases Legais da LGPD.",
    "anotacoes": "Aplicação técnica da Lei 13.709/2018 (Arts. 5º, 6º, 12, 13 §4º e 46): Privacy by Design (privacidade desde a concepção arquitetural) e by Default (padrão mais restritivo sem ação do usuário); Minimização (coletar apenas o estritamente necessário); diferença crítica entre Dado Anonimizado (irreversível com meios razoáveis -> fora da LGPD) e Dado Pseudonimizado (substituído por identificador/token com tabela de mapeamento separada -> continua sendo dado pessoal sujeito à LGPD!)."
  },
  {
    "id": "topic-240",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • Requisitos de Segurança da Informação em Contratações de TIC",
    "microtopico": "[Legislação Aplicada à TI • Requisitos de Segurança da Informação em Contratações de TIC] Requisitos de Segurança da Informação e Proteção de Dados nas Contratações de Soluções de TIC pelo Poder Público",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-110",
      "topic-80",
      "topic-114"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Requer Contratações de TIC (Lei 14.133/2021), ISO 27001 e LGPD no Setor Público.",
    "anotacoes": "Obrigações de segurança da informação em editais, TRs e contratos de TIC: termos de compromisso e manutenção de sigilo, conformidade com a PSI e LGPD (Controlador vs Operador contratado), gestão de riscos da cadeia de suprimentos, auditoria, transferência de conhecimento e descarte/devolução segura de dados ao término contratual."
  },
  {
    "id": "topic-241",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 3: A Estrutura em Movimento • Lei Complementar Estadual nº 205/2025 (Política de IA de Goiás)",
    "microtopico": "[Legislação Aplicada à TI • Lei Complementar Estadual nº 205/2025 (Política de IA de Goiás)] Lei Complementar Estadual (GO) nº 205, de 19/05/2025: Política Estadual de Fomento à Inovação em IA, Open Source, NEI-IA e Sandbox",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-114",
      "topic-72"
    ],
    "tempoEstimadoMinutos": 40,
    "faseRecomendada": "⏳ Requer LGPD no Setor Público e Governança/Ética em IA.",
    "anotacoes": "Marco legal pioneiro de Goiás (LC 205/2025): diretrizes para uso ético, transparente e seguro de IA; prioridade a modelos e softwares de código aberto (open source) no setor público; criação do NEI-IA (Núcleo de Ética e Inovação em IA na SGG) e do Sandbox Estadual Permanente de IA; direito dos cidadãos à explicação prévia e à revisão humana em decisões automatizadas."
  },
  {
    "id": "topic-242",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos TCE-GO de TI: Resolução Normativa nº 13/2016 (CETI)",
    "microtopico": "[Legislação Aplicada à TI • Normativos TCE-GO de TI] Resolução Normativa nº 13/2016 (Texto Compilado): Comitê Estratégico de Tecnologia da Informação (CETI)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-33",
      "topic-106",
      "topic-108"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Governança Corporativa (ISO 38500 / COBIT) e Lei Orgânica do TCE-GO.",
    "anotacoes": "Resolução Normativa TCE-GO nº 13/2016 (texto compilado): finalidade, composição, atribuições e funcionamento do Comitê Estratégico de Tecnologia da Informação (CETI) no direcionamento estratégico, priorização de investimentos e aprovação de planos de TI no TCE-GO."
  },
  {
    "id": "topic-243",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos TCE-GO de TI: Resolução Administrativa nº 14/2024 (Governança Organizacional)",
    "microtopico": "[Legislação Aplicada à TI • Normativos TCE-GO de TI] Resolução Administrativa nº 14/2024: Política de Governança Organizacional do TCE-GO",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-242",
      "topic-108"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer RN nº 13/2016 (CETI) e Governança Corporativa.",
    "anotacoes": "Resolução Administrativa TCE-GO nº 14/2024: princípios, diretrizes, sistema e instâncias de governança organizacional do TCE-GO, mecanismos de Liderança, Estratégia e Controle, gestão de riscos institucionais e prestação de contas (accountability)."
  },
  {
    "id": "topic-244",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos TCE-GO de TI: Resolução Administrativa nº 17/2024 (PSI)",
    "microtopico": "[Legislação Aplicada à TI • Normativos TCE-GO de TI] Resolução Administrativa nº 17/2024: Política de Segurança da Informação (PSI) Aplicada à TI no TCE-GO",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-243",
      "topic-80"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer RA nº 14/2024 e ISO/IEC 27001/27002.",
    "anotacoes": "Resolução Administrativa TCE-GO nº 17/2024 sob o enfoque técnico de TI: diretrizes da Política de Segurança da Informação (PSI), controles de acesso lógico e físico, gestão de ativos de informação, classificação de sigilo, uso aceitável de recursos computacionais e tratamento de incidentes cibernéticos."
  },
  {
    "id": "topic-245",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos TCE-GO de TI: Resolução Administrativa nº 14/2025 (Estrutura e Competências da DTI)",
    "microtopico": "[Legislação Aplicada à TI • Normativos TCE-GO de TI] Resolução Administrativa nº 14/2025: Estrutura Organizacional e Competências da Diretoria de TI (DTI) do TCE-GO",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-243"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Política de Governança Organizacional (RA nº 14/2024).",
    "anotacoes": "Resolução Administrativa TCE-GO nº 14/2025 aplicada à área de TI: estrutura organizacional detalhada e competências regimentais da Diretoria de Tecnologia da Informação (DTI) e de suas gerências/serviços (sistemas, infraestrutura, dados/IA, suporte e governança de TI)."
  },
  {
    "id": "topic-246",
    "disciplina": "Legislação Aplicada à TI",
    "macrotema": "Nível 4: A Obra Completa • Normativos TCE-GO de TI: PDTI 2025–2026 (OS nº 001/2025-CETI)",
    "microtopico": "[Legislação Aplicada à TI • Normativos TCE-GO de TI] Plano Diretor de Tecnologia da Informação (PDTI) 2025–2026 do TCE-GO (Ordem de Serviço nº 001/2025-CETI)",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-242",
      "topic-244",
      "topic-245",
      "topic-115"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Topo da Pirâmide Normativa de TI do TCE-GO — Requer CETI, PSI e Estrutura da DTI.",
    "anotacoes": "Ordem de Serviço nº 001/2025-CETI (PDTI 2025–2026 do TCE-GO): objetivos estratégicos de TI alinhados ao Plano Estratégico Institucional, metas, indicadores, portfólio de iniciativas/projetos de desenvolvimento, infraestrutura, segurança e IA, plano de gestão de pessoas e orçamento de TIC."
  },
  {
    "id": "topic-247",
    "disciplina": "Língua Inglesa (Leitura Técnica)",
    "macrotema": "Nível 2: A Função das Peças • Estratégias de Leitura (Skimming e Scanning) e Estruturas Gramaticais de TI",
    "microtopico": "[Língua Inglesa (Leitura Técnica) • Estratégias de Leitura (Skimming e Scanning) e Estruturas Gramaticais de TI] Estratégias de Leitura: Identificação da Ideia Principal (Skimming), Localização de Informações Específicas (Scanning), Grupos Nominais e Conectores",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-116"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Requer Vocabulário Técnico de TI e Falsos Cognatos.",
    "anotacoes": "Estratégias exigidas literalmente no edital: Skimming (leitura rápida para captar o tópico central/main idea) vs Scanning (varredura para localizar dados específicos); decodificação de Noun Phrases (grupos nominais longos em inglês técnico, lidos de trás para frente) e conectores argumentativos (however, furthermore, whereas, although, therefore)."
  },
  {
    "id": "topic-248",
    "disciplina": "Língua Inglesa (Leitura Técnica)",
    "macrotema": "Nível 4: A Obra Completa • Compreensão de Textos Científicos, Papers e Documentação Avançada de TI",
    "microtopico": "[Língua Inglesa (Leitura Técnica) • Compreensão de Textos Científicos, Papers e Documentação Avançada de TI] Compreensão de Textos Técnicos e Científicos em Inglês: Artigos Científicos de Computação/IA, Manuais de Software e Inferência Textual",
    "peso": "Peso 2 (Específicos)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-247",
      "topic-117",
      "topic-118"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Topo da Pirâmide de Inglês Técnico — Requer Leitura de RFCs, Estratégias de Leitura e Documentação de APIs.",
    "anotacoes": "Resolução de questões de compreensão e interpretação de artigos científicos (Abstracts, Methodology, Benchmarks de IA/Engenharia de Software, Security Advisories/CVEs e Manuais) no padrão da banca FCC."
  },
  {
    "id": "topic-249",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 1: Os Tijolos • LDI Aula 0: Apresentação do Curso",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 0: Apresentação do Curso] Aula 0 - Apresentação do Curso: Formato da Prova Discursiva, Critérios da Banca e Estratégia de Preparação",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [],
    "tempoEstimadoMinutos": 25,
    "faseRecomendada": "🟢 Disponível (Nível 1 - Os Tijolos): Ponto de partida do LDI da Prova Discursiva.",
    "anotacoes": "Capítulos deste LDI — Aula 0: Apresentação do Curso, regras editalícias da prova discursiva, distribuição da pontuação entre conteúdo técnico e domínio da modalidade escrita e planejamento das rodadas práticas."
  },
  {
    "id": "topic-250",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 1: Os Tijolos • LDI Aula 1: Questão Discursiva + Estudo de Caso",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 1: Questão Discursiva + Estudo de Caso] Questão Discursiva + Estudo de Caso: Diferenças, Anatomia do Enunciado e Comandos da Banca",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-249"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Nível 1 (Os Tijolos): Requer Aula 0 - Apresentação do Curso.",
    "anotacoes": "Capítulos deste LDI — Aula 1 (Parte 1): distinção entre Questão Discursiva expositiva/conceitual e Estudo de Caso situacional; identificação da situação-problema e mapeamento de todos os itens exigidos no espelho de correção."
  },
  {
    "id": "topic-251",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 2: A Função das Peças • LDI Aula 1: Teoria Geral da Produção Textual - Aspectos Estruturais",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 1: Aspectos Estruturais] Aula 1 - Teoria Geral da Produção Textual: Aspectos Estruturais (Projeto de Texto, Introdução, Desenvolvimento por Tópicos e Conclusão)",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-250"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Nível 2 (A Função das Peças): Requer Questão Discursiva + Estudo de Caso.",
    "anotacoes": "Capítulos deste LDI — Aula 1 (Parte 2): Teoria Geral da Produção Textual — Aspectos Estruturais. Construção do esqueleto/projeto de texto, tópico frasal direto, um parágrafo por comando da questão e fechamento objetivo."
  },
  {
    "id": "topic-252",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 2: A Função das Peças • LDI Aula 2: Teoria Geral da Produção Textual - Aspectos de Apresentação do Texto",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 2: Aspectos de Apresentação do Texto] Aula 2 - Teoria Geral da Produção Textual: Aspectos de Apresentação do Texto (Margens, Paragrafação, Translineação, Legibilidade e Rasuras)",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-251"
    ],
    "tempoEstimadoMinutos": 35,
    "faseRecomendada": "⏳ Nível 2 (A Função das Peças): Requer Aula 1 - Aspectos Estruturais.",
    "anotacoes": "Capítulos deste LDI — Aula 2: Teoria Geral da Produção Textual — Aspectos de Apresentação do Texto. Respeito rigoroso às margens, recuo de parágrafo, regras de translineação (separação silábica no fim da linha), caligrafia e como corrigir erro sem perder nota."
  },
  {
    "id": "topic-253",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 3: As Vigas • LDI Aula 3: Aspectos Microestruturais",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 3: Aspectos Microestruturais] Aula 3 - Aspectos Microestruturais: Correção Gramatical, Coesão, Paralelismo Sintático, Pontuação, Crase, Regência e Precisão Vocabular",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso",
      "Português Base"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-252",
      "topic-2"
    ],
    "tempoEstimadoMinutos": 45,
    "faseRecomendada": "⏳ Nível 3 (As Vigas): Requer Aula 2 - Aspectos de Apresentação do Texto e Coesão Textual.",
    "anotacoes": "Capítulos deste LDI — Aula 3: Aspectos Microestruturais. Como blindar o texto contra descontos gramaticais por linha (pontuação, concordância, regência, crase, colocação pronominal, paralelismo e escolha de conectivos inter e intraparágrafos)."
  },
  {
    "id": "topic-254",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 3: As Vigas • LDI Aula 4: Folha de Respostas",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 4: Folha de Respostas] Aula 4 - Folha de Respostas: Estratégia de Rascunho, Controle de Linhas, Transcrição Definitiva e Gestão de Tempo de Prova",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-252",
      "topic-253"
    ],
    "tempoEstimadoMinutos": 30,
    "faseRecomendada": "⏳ Nível 3 (As Vigas): Requer Aula 2 (Apresentação) e Aula 3 (Aspectos Microestruturais).",
    "anotacoes": "Capítulos deste LDI — Aula 4: Folha de Respostas. Dimensionamento de linhas (mínimo e máximo do edital), técnica de rascunho por tópicos-chave para economizar tempo e preenchimento seguro da folha de texto definitivo."
  },
  {
    "id": "topic-255",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • LDI Aula 5: Rodada de Temas (1ª Rodada)",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 5: Rodada de Temas] Aula 5 - Rodada de Temas: 1ª Rodada (Treino Prático de Produção Discursiva e Estudo de Caso)",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-254",
      "topic-119"
    ],
    "tempoEstimadoMinutos": 60,
    "faseRecomendada": "⏳ Nível 4 (A Obra Completa): Requer Aula 4 - Folha de Respostas e Metodologia de Estudo de Caso FCC.",
    "anotacoes": "Capítulos deste LDI — Aula 5 (1ª Rodada): Resolução cronometrada na folha de respostas oficial, autoavaliação pelo espelho de correção (macroestrutura + microestrutura) e revisão de lacunas."
  },
  {
    "id": "topic-256",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • LDI Aula 5: Rodada de Temas (2ª Rodada)",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 5: Rodada de Temas] Aula 5 - Rodada de Temas: 2ª Rodada (Treino Prático de Produção Discursiva e Estudo de Caso)",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-255"
    ],
    "tempoEstimadoMinutos": 60,
    "faseRecomendada": "⏳ Nível 4 (A Obra Completa): Requer 1ª Rodada de Temas.",
    "anotacoes": "Capítulos deste LDI — Aula 5 (2ª Rodada): Prática avançada de questões discursivas e estudos de caso técnicos com foco em adensamento argumentativo, citação de normas/modelos e precisão conceitual."
  },
  {
    "id": "topic-257",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Nível 4: A Obra Completa • LDI Aula 5: Rodada de Temas (3ª Rodada)",
    "microtopico": "[Discursiva / Estudo de Caso • LDI Aula 5: Rodada de Temas] Aula 5 - Rodada de Temas: 3ª Rodada (Treino Prático de Produção Discursiva e Estudo de Caso)",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "origem": [
      "Concurso"
    ],
    "status": "Pendente",
    "prerequisitos": [
      "topic-256"
    ],
    "tempoEstimadoMinutos": 60,
    "faseRecomendada": "⏳ Nível 4 (A Obra Completa): Requer 2ª Rodada de Temas.",
    "anotacoes": "Capítulos deste LDI — Aula 5 (3ª Rodada): Simulação final de prova discursiva em condições reais de tempo e espaço de linhas."
  }
];

export const INITIAL_ERRORS: ErrorItem[] = [
  {
    "id": "err-1",
    "data": "2026-09-25",
    "disciplina": "Língua Portuguesa",
    "microtopico": "Regras de Acentuação Gráfica",
    "idQuestao": "FCC-2024-Q1234",
    "enunciado": "Acentuação de 'ideia' e 'herói' pela mesma regra do ditongo aberto",
    "alternativaMarcada": "B",
    "gabaritoCorreto": "D",
    "classificacaoErro": "Falta de Memorização de Regra/Exceção",
    "licaoAprendida": "Pelo Acordo Ortográfico, ditongos abertos ÉI/ÓI só mantêm acento em oxítonas (herói) e monossílabos; paroxítonas (ideia, colmeia) perderam o acento."
  },
  {
    "id": "err-2",
    "data": "2026-09-24",
    "disciplina": "Banco de Dados",
    "microtopico": "SQL Básico (DDL vs DML)",
    "idQuestao": "FCC-2023-Q5678",
    "enunciado": "Comando TRUNCATE classificado como DML",
    "alternativaMarcada": "C",
    "gabaritoCorreto": "A",
    "classificacaoErro": "Pegadinha de Enunciado",
    "licaoAprendida": "A FCC considera TRUNCATE TABLE como comando DDL (opera sobre o schema/desaloca páginas sem registrar linha a linha no log de transações), diferente de DELETE que é DML."
  }
];
