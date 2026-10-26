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
    "microtopico": "Fonética, Divisão Silábica e Sílaba Tônica (Letras vs. Fonemas, Vogal Núcleo, Dígrafos e Encontros)",
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
    "microtopico": "Ortografia Oficial e Regras de Acentuação Gráfica (Oxítonas, Paroxítonas, Proparoxítonas e Hiatos)",
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
    "microtopico": "Classes de Palavras I: Substantivo, Adjetivo, Artigo e Numeral",
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
    "microtopico": "Classes de Palavras III: Verbos (Tempos, Modos, Vozes e Correlação Verbal)",
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
    "microtopico": "Classes de Palavras II: Pronomes (Classificação e Colocação Pronominal)",
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
    "microtopico": "Classes de Palavras IV: Conjunções Coordenativas e Subordinativas (Valores Semânticos)",
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
    "microtopico": "Termos Essenciais: Sujeito e Predicado",
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
    "microtopico": "Termos Integrantes: Objeto Direto/Indireto, Complemento Nominal e Agente da Passiva",
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
    "microtopico": "Termos Acessórios: Adjunto Adnominal, Adverbial, Aposto e Vocativo",
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
    "microtopico": "Coordenação: Orações Coordenadas Sindéticas e Assindéticas",
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
    "microtopico": "Subordinação I: Orações Subordinadas Substantivas e Adjetivas",
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
    "microtopico": "Subordinação II: Orações Subordinadas Adverbiais (Causais, Concessivas etc.)",
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
    "microtopico": "Emprego da Vírgula e Demais Sinais de Pontuação em Texto",
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
    "microtopico": "Concordância Verbal (Regras Gerais, Sujeito Composto, Partícula SE, Haver/Fazer)",
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
    "microtopico": "Concordância Nominal (Adjetivos, Expressões Especiais)",
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
    "microtopico": "Regência Verbal e Pronomes Relativos (Verbos Típicos FCC)",
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
    "microtopico": "Regência Nominal e Preposições",
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
    "microtopico": "Crase: Regras Gerais e Casos Proibitivos",
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
    "microtopico": "Crase: Casos Facultativos e Casos Especiais",
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
    "microtopico": "Coesão Textual (Referencial, Sequencial e Marcadores Discursivos)",
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
    "microtopico": "Coerência, Semântica e Figuras de Linguagem da Banca FCC",
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
    "microtopico": "Tipologia e Gêneros Textuais (Narrativo, Descritivo, Dissertativo/Argumentativo)",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 1: Os Tijolos • Aritmética e Proporcionalidade",
    "microtopico": "Razão, Proporção, Regra de Três Simples e Composta",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 1: Os Tijolos • Porcentagem e Variação Percentual",
    "microtopico": "Porcentagem, Variação Percentual e Lucro/Prejuízo",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 1: Os Tijolos • Sequências Lógicas e Associação",
    "microtopico": "Sequências Numéricas, Figurais e Problemas de Associação Lógica",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 1: Os Tijolos • Conjuntos, Diagramas e Operações (∪, ∩, −)",
    "microtopico": "Diagramas Lógicos, Conjuntos e Operações (União, Interseção, Diferença)",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 2: A Função das Peças • Análise Combinatória (PFC, Arranjo, Combinação)",
    "microtopico": "Princípio Fundamental da Contagem, Arranjos, Combinações e Permutações",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 2: A Função das Peças • Probabilidade Básica, Condicional e Independência",
    "microtopico": "Probabilidade Básica, Condicional e Eventos Independentes",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 3: A Estrutura em Movimento • Proposições, Conectivos e Tabela-Verdade",
    "microtopico": "Proposições, Conectivos Lógicos e Tabela-Verdade",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 3: A Estrutura em Movimento • Equivalências Lógicas (Contrapositiva e De Morgan)",
    "microtopico": "Equivalências Lógicas (Contrapositiva, Leis de De Morgan) e Negações",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 3: A Estrutura em Movimento • Tautologia, Contradição e Contingência",
    "microtopico": "Tautologia, Contradição, Contingência e Implicação Lógica",
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
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Nível 4: A Obra Completa • Validade de Argumentos, Silogismos e Dedução",
    "microtopico": "Validade de Argumentos, Silogismos e Métodos de Dedução",
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
    "microtopico": "TCE-GO: Natureza, Competências Constitucionais e Jurisdição (Arts. 1º a 15)",
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
    "microtopico": "TCE-GO: Julgamento de Contas e Fiscalização de Atos (Arts. 16 a 45)",
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
    "microtopico": "TCE-GO: Sanções, Recursos e Organização do Tribunal (Conselheiros e MPC)",
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
    "microtopico": "Regimento Interno (Resolução 22/2008): Estrutura, Sessões Plenárias e Câmaras",
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
    "microtopico": "Estatuto GO: Provimento, Vacância, Direitos, Vantagens e Licenças",
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
    "microtopico": "Estatuto GO: Regime Disciplinar, Deveres, Proibições, Penalidades e PAD",
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
    "microtopico": "Modelagem Conceitual: Diagrama Entidade-Relacionamento (DER), Entidades, Atributos e Relacionamentos",
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
    "microtopico": "Modelagem Lógica e Transformação DER para Esquema Relacional (Chaves Primárias e Estrangeiras)",
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
    "microtopico": "Formas Normais: 1FN, 2FN, 3FN, BCFN e 4FN",
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
    "microtopico": "SQL Básico: DDL (CREATE, ALTER, DROP) e DCL (GRANT, REVOKE)",
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
    "microtopico": "SQL DQL/DML: Consultas Básicas, Filtros, Agrupamentos (GROUP BY, HAVING) e Ordenação",
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
    "microtopico": "Junções Relacionais (INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN) e Subconsultas",
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
    "microtopico": "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, OVER) e CTEs (WITH)",
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
    "microtopico": "SGBDs Relacionais de Mercado: Oracle, SQL Server e MySQL (Arquitetura e Características)",
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
    "microtopico": "Propriedades ACID, Concorrência e Gerenciamento de Transações",
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
    "microtopico": "Otimização de Consultas: Planos de Execução (EXPLAIN ANALYZE), Índices (B-Tree, Hash, GIN, GiST)",
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
    "microtopico": "Bancos NoSQL: Modelos Chave-Valor (Redis), Documentos (MongoDB) e Colunar",
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
    "microtopico": "Bancos Vetoriais e Busca Semântica: Embeddings, pgvector, Índices HNSW e Cosine Similarity",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 1: Os Tijolos • Lógica de Programação e Complexidade (Big-O)",
    "microtopico": "Lógica de Programação, Complexidade de Algoritmos (Notação Big-O: Tempo e Espaço)",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 1: Os Tijolos • Estruturas de Dados Lineares (Vetores, Listas, Pilhas, Filas)",
    "microtopico": "Estruturas Lineares: Vetores, Matrizes, Listas Encadeadas, Pilhas e Filas",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 1: Os Tijolos • Estruturas Não Lineares (Tabelas Hash, Árvores BST/AVL e Grafos)",
    "microtopico": "Estruturas Não Lineares e Busca: Tabelas Hash, Árvores Binárias (BST, AVL) e Grafos",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 1: Os Tijolos • Controle de Versão com Git e Workflows",
    "microtopico": "Git: Comandos Fundamentais (commit, branch, merge, rebase, cherry-pick) e Workflows (GitFlow, Trunk-Based)",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 2: A Função das Peças • Programação Orientada a Objetos (POO)",
    "microtopico": "Programação Orientada a Objetos: Classes, Objetos, Encapsulamento, Herança, Polimorfismo e Interfaces",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 2: A Função das Peças • Programação Funcional (Imutabilidade, Map/Filter/Reduce)",
    "microtopico": "Programação Funcional: Funções Puras, Imutabilidade, Lambdas, Map/Filter/Reduce e Closures",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 2: A Função das Peças • Python para Desenvolvimento e Asyncio",
    "microtopico": "Python para Desenvolvimento: Sintaxe, Tipos, Módulos, Manipulação de Dados e Asyncio",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 2: A Função das Peças • Java e TypeScript/JavaScript",
    "microtopico": "Java e TypeScript/JavaScript: Tipagem, Concorrência e Ecossistema",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura Web e Protocolo HTTP/HTTPS",
    "microtopico": "Arquitetura Web, HTTP/HTTPS, Métodos (GET, POST, PUT, DELETE, PATCH) e Status Codes",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 3: A Estrutura em Movimento • Construção de APIs RESTful e OpenAPI/Swagger",
    "microtopico": "Construção de APIs RESTful: Padrões, Paginação, Versionamento e Especificação OpenAPI/Swagger",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 3: A Estrutura em Movimento • Back-end com Node.js, Event Loop e Middlewares",
    "microtopico": "Back-end com Node.js: Event Loop, NPM/Yarn, Criação de Servidores Express e Middlewares",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 3: A Estrutura em Movimento • Front-end com React, Hooks e SPA",
    "microtopico": "Desenvolvimento Front-end: SPA, React (Componentes, Hooks useState/useEffect, Virtual DOM)",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 4: A Obra Completa • APIs Modernas: GraphQL e WebSockets",
    "microtopico": "APIs Modernas: GraphQL (Queries, Mutations, Schemas) e Comunicação em Tempo Real (WebSockets)",
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
    "disciplina": "Desenvolvimento",
    "macrotema": "Nível 4: A Obra Completa • Segurança em APIs: OAuth 2.0, OIDC e JWT",
    "microtopico": "Autenticação e Autorização: Protocolos OAuth 2.0, OpenID Connect (OIDC) e Estrutura JWT",
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
    "microtopico": "Modelos de Ciclo de Vida: Cascata, Espiral e Métodos Ágeis (Manifesto Ágil, Scrum, Kanban, XP)",
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
    "microtopico": "Requisitos Funcionais e Não Funcionais, Histórias de Usuário, Critérios de Aceite e Casos de Uso",
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
    "microtopico": "Modelagem UML 2.5: Diagramas Estruturais (Classes, Componentes) e Comportamentais (Casos de Uso, Sequência)",
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
    "microtopico": "Modelagem e Notação de Processos de Negócio: BPMN 2.0 (Eventos, Atividades, Gateways e Raias)",
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
    "microtopico": "Princípios de Design: SOLID (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion)",
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
    "microtopico": "Princípios de Boas Práticas: DRY, KISS, YAGNI, Clean Code e Padrões de Projeto (GoF)",
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
    "microtopico": "Pirâmide de Testes: Testes Unitários, Integração, Sistema e Aceitação; TDD e Refatoração (Code Smells)",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 1: Os Tijolos • Sistemas Operacionais (Processos, Threads e Memória Virtual)",
    "microtopico": "Sistemas Operacionais: Processos, Threads, Gerenciamento de Memória (Paginação, Memória Virtual) e I/O",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 1: Os Tijolos • Administração Linux/Windows Server, Bash e PowerShell",
    "microtopico": "Linux/Unix e Windows Server: Permissões, Comandos Essenciais, Shell Script (Bash) e PowerShell",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Modelo OSI vs TCP/IP, Endereçamento IP e Roteamento",
    "microtopico": "Modelo OSI vs Arquitetura TCP/IP: Camadas, Encapsulamento, Protocolos IP (IPv4, IPv6) e Roteamento",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 2: A Função das Peças • Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/S, TLS)",
    "microtopico": "Camada de Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/1.1, HTTP/2, HTTPS, TLS/SSL)",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 3: A Estrutura em Movimento • Switches, Roteadores, VLANs, NAT, Proxy Reverso e Load Balancer",
    "microtopico": "Dispositivos de Rede: Switches, Roteadores, VLANs, NAT, Proxy Reverso e Balanceamento de Carga",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 4: A Obra Completa • Computação em Nuvem: IaaS, PaaS, SaaS e Modelos de Implantação",
    "microtopico": "Fundamentos de Cloud: Modelos de Serviço (IaaS, PaaS, SaaS) e Implantação (Pública, Privada, Híbrida)",
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
    "disciplina": "Redes & Nuvem",
    "macrotema": "Nível 4: A Obra Completa • Arquiteturas Cloud: Serverless, Microserviços, Storage S3 e Elasticidade",
    "microtopico": "Arquiteturas em Nuvem: Serverless (FaaS), Microserviços, Storage (Block, Object Storage S3) e Elasticidade",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 1: Os Tijolos • Cultura DevOps e Confiabilidade (SRE, SLI, SLO e SLA)",
    "microtopico": "Fundamentos de DevOps, Site Reliability Engineering (SRE), SLI, SLO e SLA",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 1: Os Tijolos • Containerização com Docker e Docker Compose",
    "microtopico": "Containers com Docker: Dockerfile, Imagens, Containers, Volumes, Redes e Docker Compose",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 2: A Função das Peças • Pipelines de CI/CD (GitHub Actions e GitLab CI)",
    "microtopico": "Pipelines de Integração e Entrega Contínua (CI/CD): GitHub Actions e GitLab CI (Triggers, Jobs, Runners e Deploys)",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 2: A Função das Peças • Infraestrutura como Código (Terraform e Ansible)",
    "microtopico": "Infraestrutura como Código (IaC): Conceitos, Vantagens e Introdução a Terraform e Ansible",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 3: A Estrutura em Movimento • Orquestração com Kubernetes (K8s)",
    "microtopico": "Orquestração com Kubernetes (K8s): Pods, Deployments, Services, Ingress, ConfigMaps e Secrets",
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
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Nível 4: A Obra Completa • Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana)",
    "microtopico": "Pilares da Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana, ELK/OpenSearch)",
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
    "microtopico": "Princípios da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade e Autenticidade (CIDA)",
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
    "microtopico": "Criptografia Simétrica (AES), Assimétrica (RSA, Curvas Elípticas), Funções Hash (SHA-256) e Assinatura Digital",
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
    "microtopico": "Infraestrutura de Chaves Públicas (ICP-Brasil), Certificados Digitais A1/A3 e Carimbo do Tempo",
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
    "microtopico": "Normas ISO/IEC 27001 e 27002: Controles, Política de Segurança e Gestão de Riscos de TI",
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
    "microtopico": "Mecanismos de Defesa: Firewalls (Stateful, NGFW), IDS/IPS, VPN, WAF e Arquitetura Zero Trust",
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
    "microtopico": "Vulnerabilidades Web: OWASP Top 10 (SQL Injection, XSS, Broken Access Control, CSRF)",
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
    "microtopico": "Práticas de DevSecOps, Análise Estática (SAST), Dinâmica (DAST) e Gestão de Dependências (SCA)",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 1: Os Tijolos • Estatística Descritiva, Probabilidade e Amostragem",
    "microtopico": "Estatística Descritiva, Distribuições de Probabilidade e Amostragem para Dados",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 1: Os Tijolos • Manipulação e Limpeza de Dados (Pandas e NumPy)",
    "microtopico": "Manipulação e Limpeza de Dados: Pandas, NumPy e Pipelines de Pré-processamento",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 1: Os Tijolos • Arquiteturas de Big Data (DW, Data Lake e Lakehouse)",
    "microtopico": "Fundamentos de Big Data: 5 Vs, Arquiteturas de Dados (Data Warehouse, Data Lake, Lakehouse)",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 2: A Função das Peças • Machine Learning Supervisionado",
    "microtopico": "Aprendizado Supervisionado: Regressão Linear/Logística, Árvores de Decisão, Random Forest e SVM",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 2: A Função das Peças • Machine Learning Não Supervisionado (K-Means, DBSCAN, PCA)",
    "microtopico": "Aprendizado Não Supervisionado: Clustering (K-Means, DBSCAN) e Redução de Dimensionalidade (PCA)",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Métricas de Avaliação (Matriz de Confusão, F1, ROC/AUC)",
    "microtopico": "Métricas de Avaliação: Matriz de Confusão, Acurácia, Precisão, Recall, F1-Score, Curva ROC/AUC",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 3: A Estrutura em Movimento • Deep Learning (MLP, CNN, RNN) e PLN",
    "microtopico": "Redes Neurais Artificiais, Deep Learning (MLP, CNN, RNN/LSTM) e Processamento de Linguagem Natural",
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
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Nível 4: A Obra Completa • IA Responsável, Viés Algorítmico, XAI e Governança",
    "microtopico": "IA Generativa, Ética, Viés Algorítmico, Explicabilidade (XAI) e LGPD aplicada a Algoritmos",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 1: Os Tijolos • Arquitetura Transformers, Atenção e LLMs",
    "microtopico": "Arquitetura Transformers, Mecanismo de Atenção, Parâmetros e Janela de Contexto",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 2: A Função das Peças • Engenharia de Prompts (Zero/Few-shot, CoT, ReAct)",
    "microtopico": "Técnicas de Prompts: Zero-shot, Few-shot, Chain-of-Thought (CoT), ReAct e Estruturação de Saídas (JSON)",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Arquitetura RAG (Chunking, Busca Vetorial, Reranking)",
    "microtopico": "Retrieval-Augmented Generation (RAG): Chunking, Embeddings, Busca Vetorial, Reranking e Redução de Alucinações",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 3: A Estrutura em Movimento • Sistemas Agentivos (Planejamento, Memória e Tool Use)",
    "microtopico": "Ciclo de Vida do Agente: Planejamento, Memória (Short/Long-term), Uso de Ferramentas (Tool Use) e Autocorreção",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Model Context Protocol (MCP)",
    "microtopico": "Model Context Protocol (MCP): Arquitetura Cliente-Servidor, Tools, Resources, Prompts e Segurança",
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
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Nível 4: A Obra Completa • Assistentes de Código em CLI/IDE e Engenharia de Contexto",
    "microtopico": "Assistentes de Codificação em CLI/IDE: Claude Code, Antigravity CLI, Automação de Tarefas e Engenharia de Contexto",
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
    "microtopico": "Norma ABNT NBR ISO/IEC 38500: Princípios e Modelo de Governança de TI (Avaliar, Dirigir e Monitorar)",
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
    "microtopico": "COBIT 2019: Princípios, Sistema de Governança, Objetivos de Governança e Gestão (EDM, APO, BAI, DSS, MEA)",
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
    "microtopico": "ITIL v4: Sistema de Valor de Serviço (SVS), 4 Dimensões, Princípios Orientadores e Práticas Principais (Incidentes, Problemas, Mudanças)",
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
    "microtopico": "PMBOK: Princípios de Entrega de Projetos, Domínios de Desempenho, Abordagens Preditiva, Híbrida e Adaptativa",
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
    "microtopico": "Lei nº 14.133/2021 aplicada a TIC: Planejamento da Contratação, ETP, Termo de Referência e Gestão de Contratos",
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
    "microtopico": "Lei do Governo Digital (Lei nº 14.129/2021) e Princípios da Eficiência e Transformação Digital no Setor Público",
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
    "disciplina": "Legislação Aplicada",
    "macrotema": "Nível 1: Os Tijolos • Marco Civil da Internet (Lei 12.965/2014)",
    "microtopico": "Marco Civil da Internet: Princípios, Garantias, Direitos dos Usuários, Neutralidade da Rede e Responsabilidade por Danos",
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
    "disciplina": "Legislação Aplicada",
    "macrotema": "Nível 2: A Função das Peças • LGPD (Lei 13.709/2018): Conceitos, Princípios e Bases Legais",
    "microtopico": "LGPD (Lei nº 13.709/2018): Conceitos (Dado Pessoal, Sensível, Titular, Controlador, Operador, DPO), Princípios e Bases Legais",
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
    "disciplina": "Legislação Aplicada",
    "macrotema": "Nível 3: A Estrutura em Movimento • LGPD no Setor Público, Direitos dos Titulares, RIPD e ANPD",
    "microtopico": "LGPD no Setor Público (Tratamento pelo Poder Público), Direitos dos Titulares, Relatório de Impacto (RIPD) e Sanções da ANPD",
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
    "disciplina": "Legislação Aplicada",
    "macrotema": "Nível 4: A Obra Completa • Normativos Internos de Segurança e PDTI do TCE-GO",
    "microtopico": "Resoluções e Políticas Internas de Segurança da Informação e Plano Diretor de TIC (PDTI) do TCE-GO",
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
    "disciplina": "Inglês Técnico",
    "macrotema": "Nível 1: Os Tijolos • Vocabulário Técnico de TI e Falsos Cognatos",
    "microtopico": "Vocabulário Técnico de TI, Expressões Idiomáticas em Documentação e Falsos Cognatos",
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
    "disciplina": "Inglês Técnico",
    "macrotema": "Nível 2: A Estrutura em Movimento • Leitura e Interpretação de Documentação e RFCs",
    "microtopico": "Leitura e Interpretação de Documentação Técnica Oficial, RFCs, Manuais e Artigos de Engenharia",
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
    "disciplina": "Inglês Técnico",
    "macrotema": "Nível 3: A Obra Completa • Compreensão de Especificações de Arquitetura e APIs REST",
    "microtopico": "Compreensão e Análise de Especificações Técnicas, Arquiteturas de Software e Documentação de APIs REST",
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
    "microtopico": "Estrutura do Estudo de Caso FCC: Introdução ao Problema, Fundamentação Técnica e Proposta de Solução",
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
    "macrotema": "Nível 2: A Obra Completa • Simulação Discursiva: Banco de Dados, Normalização e Tuning",
    "microtopico": "Estudo de Caso Prático: Modelagem Relacional, Normalização ou Otimização de Banco de Dados Público",
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
    "macrotema": "Nível 2: A Obra Completa • Simulação Discursiva: Microserviços, APIs REST e Arquitetura RAG/IA",
    "microtopico": "Estudo de Caso Prático: Arquitetura de Microserviços, APIs RESTful e Integração com RAG/IA",
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
    "macrotema": "Nível 2: A Obra Completa • Simulação Discursiva: Incidente de Segurança, LGPD e Contratos de TIC",
    "microtopico": "Estudo de Caso Prático: Incidente de Segurança, Conformidade com a LGPD e Fiscalização de Contrato de TIC",
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
