import { Topic, ErrorItem } from '../types';

export const INITIAL_TOPICS: Topic[] = [
  {
    "id": "science-fis-u01",
    "disciplina": "Física (Módulo 01)",
    "macrotema": "Fundamentos & Cinemática",
    "microtopico": "Grandezas Físicas, Escalares e Vetoriais, Velocidade Média e SI",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/1qBeCkpzaV9URACx927iF0DtzWwylE6n60-AYXSzL8rQ/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Vetores, conversão km/h <-> m/s e circuito fechado.",
    "anotacoes": "Definição de grandezas escalares vs vetoriais, velocidade média escalar vs vetorial, deslocamento Delta x = v * Delta t, fator 3,6 e trajetória fechada com Delta x = 0. NotebookLM 1. Física."
  },
  {
    "id": "science-fis-u02",
    "disciplina": "Física (Módulo 01)",
    "macrotema": "Fundamentos & Cinemática",
    "microtopico": "Movimento Unidimensional, Cinemática Escalar e Inversão de Sentido",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/1ifKIjIegIXmuT8Drq5mMVk5PVUiG9OA4vx0HYuGe4m4/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Marco zero s(t), Delta s vs distância d, e rapidez média.",
    "anotacoes": "Referencial 1D, deslocamento escalar Delta s vs distância acumulada d, movimento progressivo (v>0) vs retrógrado (v<0), cálculo com inversão de sentido. NotebookLM 1. Física."
  },
  {
    "id": "science-qui-u01",
    "disciplina": "Química (Módulo 01)",
    "macrotema": "Matéria & Estrutura Atômica",
    "microtopico": "Origem dos Elementos, Estrutura Atômica Fundamental, Íons e Nuclídeos",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "linkMaterial": "https://docs.google.com/document/d/15moHIySxVyz5mCUVdDuG-envsRHTfBxHEYFtkjCE6uk/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Nucleossíntese estelar, prótons, nêutrons, elétrons e íons.",
    "anotacoes": "Nucleossíntese primordial e estelar (1H, 4He), número atômico Z = p, número de massa A = Z + n, cátions (p > e-), ânions (e- > p), reações químicas vs nucleares. NotebookLM 1. Química."
  },
  {
    "id": "science-bio-u01",
    "disciplina": "Biologia (Módulo 01)",
    "macrotema": "Bioquímica Celular & Citologia",
    "microtopico": "Bioquímica Celular, Biomoléculas e Estrutura Celular",
    "peso": "Ciências da Natureza Base",
    "origem": [
      "Ciências da Natureza"
    ],
    "status": "Pendente",
    "linkMaterial": "https://gemini.google.com/notebook/12206f4e-2ec3-4d09-9daf-b46ebd304198",
    "faseRecomendada": "⏳ Estrutura pronta no Google Drive (03_Biologia) e NotebookLM. Aguardando anotações no Google Keep.",
    "anotacoes": "Caderno no NotebookLM: 1. Biologia — Bioquímica Celular & Citologia. Repositório 03_Biologia no Google Drive."
  },
  {
    "id": "math-m01-u01",
    "disciplina": "Matemática (Módulo 01)",
    "macrotema": "Aritmética Fundamental",
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
    "anotacoes": "Números inteiros (Z), regras de sinais, frações mistas/impróprias, MMC e alinhamento de decimais. NotebookLM Módulos 01 e 02."
  },
  {
    "id": "math-m01-u02",
    "disciplina": "Matemática (Módulo 01)",
    "macrotema": "Aritmética Fundamental",
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
    "anotacoes": "Reta numérica, números opostos, valor absoluto (|a| >= 0), simetria de distância (|a-b| = |b-a|)."
  },
  {
    "id": "math-m02-u01",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Aritmética Avançada",
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
    "anotacoes": "Propriedades da potenciação, expoentes inteiros (a^-n = 1/a^n), notação científica normalizada (a * 10^n)."
  },
  {
    "id": "math-m02-u02",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Aritmética Avançada",
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
    "anotacoes": "Cancelamento inverso, expoentes fracionários (raiz n-ésima de x^m = x^(m/n)), produto e quociente de radicais."
  },
  {
    "id": "math-m02-u03",
    "disciplina": "Matemática (Módulo 02)",
    "macrotema": "Aritmética Avançada",
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
    "anotacoes": "Fórmulas recursivas (termo inicial e passo an = f(an-1)). Diferenciação: PG (multiplicação de razão q) vs PA (adição de r). Forma explícita fechada."
  },
  {
    "id": "math-m03-u01",
    "disciplina": "Matemática (Módulo 03)",
    "macrotema": "Proporcionalidade & Matemática Comercial",
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
    "anotacoes": "Propriedade fundamental a*d = b*c, proporcionalidade direta e inversa, regra de três e multiplicadores de porcentagem (1 +- p/100)."
  },
  {
    "id": "math-m04-u01",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Introdução à Álgebra",
    "microtopico": "Introdução à Álgebra, Polinômios, FOIL e Modelo de Áreas",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1dQ2KdXiL9dzZ-cP_W7sTwNaGZCXq6d2WOCtWD4I-0aA/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Monômios, polinômios, comutatividade e produto de Stevin.",
    "anotacoes": "Terminologia polinomial, operações fundamentais, distributiva (FOIL), modelo geométrico de áreas e produto de Stevin (x+a)(x+b)."
  },
  {
    "id": "math-m04-u02",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Introdução à Álgebra",
    "microtopico": "Fatoração, Produtos Notáveis e Método AC por Agrupamento",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1ljZzkwLVBPV4gLwp2CebI2IyukTq2OXD4cCe6Jd7He0/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Fator comum, soma e produto, trinômio quadrado perfeito e método AC de Sal Khan.",
    "anotacoes": "Propriedade do Produto Nulo, diferença de quadrados, fatoração de trinômios do 2º grau e método AC para a != 1."
  },
  {
    "id": "math-m04-u03",
    "disciplina": "Matemática (Módulo 04)",
    "macrotema": "Introdução à Álgebra",
    "microtopico": "Divisão de Polinômios pelo Método da Chave e Teorema do Resto",
    "peso": "Matemática Base",
    "origem": [
      "Matemática Base"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-22",
    "linkMaterial": "https://docs.google.com/document/d/1CTPEZKw6wh6yfRoCOXkYO_--_HwojmbauKz49ZOXhew/edit",
    "faseRecomendada": "⭐ Dominado no Google Drive! Divisão euclidiana, prova real e D’Alembert P(-3)=-18.",
    "anotacoes": "Algoritmo euclidiano da chave com ordenação decrescente de graus, critério de parada grau(R) < grau(D) e verificação de D’Alembert."
  },
  {
    "id": "math-m05-u01",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Equações, Sistemas & Funções Lineares",
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
    "anotacoes": "Princípio de equivalência, SPD (única), SI (impossível 0x=k), SPI (indeterminada 0x=0) e inversão de desigualdade com negativo."
  },
  {
    "id": "math-m05-u02",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Equações, Sistemas & Funções Lineares",
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
    "anotacoes": "Método da substituição e adição/eliminação, interpretação gráfica de retas concorrentes, coincidentes e paralelas."
  },
  {
    "id": "math-m05-u03",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Equações, Sistemas & Funções Lineares",
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
    "anotacoes": "Taxa de variação m = dy/dx, interceptos x e y, paralelismo m1=m2 e perpendicularismo analítico m1 * m2 = -1."
  },
  {
    "id": "math-m05-u04",
    "disciplina": "Matemática (Módulo 05)",
    "macrotema": "Equações, Sistemas & Funções Lineares",
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
    "anotacoes": "Conceito formal de função f(x), teste da reta vertical, modelagem contextual (tarifas, esvaziamento linear) e restrições de domínio."
  },
  {
    "id": "math-m06-u01",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Geometria Euclidiana",
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
    "anotacoes": "Entes primitivos, distinção entre reta, semirreta e segmento, congruência de segmentos, ponto médio e perpendicularidade."
  },
  {
    "id": "math-m06-u02",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Geometria Euclidiana",
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
    "anotacoes": "Classificação (agudo, reto, obtuso, raso), ângulos complementares (90°) e suplementares (180°), demonstração de OPV."
  },
  {
    "id": "math-m06-u03",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Geometria Euclidiana",
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
    "anotacoes": "Grandezas 2D, fórmulas poligonais (triângulos, paralelogramos, trapézios, círculos), partição aditiva e decomposição subtrativa."
  },
  {
    "id": "math-m06-u04",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Geometria Euclidiana",
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
    "anotacoes": "Volume V = c*l*h, área superficial, conversões volumétricas (1 m³ = 1.000 L) e variação proporcional ao cubo (V’ = k³ * V)."
  },
  {
    "id": "math-m06-u05",
    "disciplina": "Matemática (Módulo 06)",
    "macrotema": "Geometria Euclidiana",
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
    "anotacoes": "Definições, propriedades de paralelogramos, bissetriz como lugar geométrico, prova de diagonais bissetrizes exclusivas de Losango/Quadrado."
  },
  {
    "id": "mba-sql",
    "disciplina": "Linguagem SQL para Data Analytics",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "SQL Avançado, Consultas Analíticas, Agregações e Otimização",
    "peso": "MBA (40h) • Sinergia com Concurso",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Em Andamento",
    "agendadoPara": "2026-10-23",
    "faseRecomendada": "📘 Disciplina Ativa da Semana do MBA! Acompanhar com leitura do livro.",
    "anotacoes": "Disciplina em curso do MBA. Fortíssima sinergia com o edital do Concurso em Banco de Dados."
  },
  {
    "id": "livro-db",
    "disciplina": "Leitura Técnica Bibliográfica",
    "macrotema": "Bibliografia MBA & Concurso",
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
    "anotacoes": "Leitura de apoio para a disciplina de SQL do MBA e aprofundamento para questões conceituais."
  },
  {
    "id": "mba-gov",
    "disciplina": "Governança de Dados",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "DAMA-DMBOK, Qualidade de Dados, Metadados e Gestão Estratégica",
    "peso": "MBA (40h) • Sinergia com Concurso",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Dominado",
    "dataEstudo": "2026-10-23",
    "faseRecomendada": "⭐ Disciplina do MBA Concluída com Sucesso (40h)! DAMA-DMBOK, Governança e Qualidade de Dados.",
    "anotacoes": "40 horas do MBA em Ciência de Dados concluídas. DAMA-DMBOK, ciclo de vida dos dados, qualidade, linhagem e metadados. Base consolidada para a governança corporativa e concursos."
  },
  {
    "id": "mba-spark",
    "disciplina": "Linguagens de Programação para Ciência de Dados",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Python com Spark, PySpark e Processamento Distribuído",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-stat-r",
    "disciplina": "Técnicas Estatísticas: Teoria e Prática",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Estatística Descritiva, Inferencial e Testes de Hipótese com R Programming",
    "peso": "MBA (40h) • Exclusivo MBA",
    "origem": [
      "MBA"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-etl",
    "disciplina": "Integração e Fluxo de Dados (ETL)",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Pipelines de Dados, Extração, Transformação e Carga (ETL/ELT)",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-data-analysis",
    "disciplina": "Análise de Dados",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Análise Exploratória de Dados (EDA), Visualização e Storytelling",
    "peso": "MBA (40h) • Exclusivo MBA",
    "origem": [
      "MBA"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-pred-models",
    "disciplina": "Análise e Modelagem Preditiva",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Modelagem Preditiva, Séries Temporais e Regressões Avançadas",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-ml",
    "disciplina": "Machine Learning",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Algoritmos Supervisionados, Não Supervisionados e Otimização",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-analytics-ai",
    "disciplina": "Analytics e Inteligência Artificial (IA)",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "Aplicações Corporativas de IA e Tomada de Decisão Analítica",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-lgpd",
    "disciplina": "Lei Geral de Proteção de Dados (LGPD)",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "LGPD aplicada à Governança de Dados, Privacidade e Segurança",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
  },
  {
    "id": "mba-ai-tools",
    "disciplina": "Inteligência Artificial: Conceitos, Ferramentas e Aplicações",
    "macrotema": "MBA Ciência de Dados & Analytics",
    "microtopico": "IA Generativa, Ferramentas Modernas e Frameworks de Aplicação",
    "peso": "MBA (40h)",
    "origem": [
      "MBA",
      "Concurso"
    ],
    "status": "Pendente",
    "faseRecomendada": "⏳ Standby (Próximos módulos do MBA)."
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
    "macrotema": "Aritmética e Proporcionalidade",
    "microtopico": "Razão, Proporção, Regra de Três Simples e Composta",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22"
  },
  {
    "id": "topic-24",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Aritmética e Proporcionalidade",
    "microtopico": "Porcentagem, Variação Percentual e Lucro/Prejuízo",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22"
  },
  {
    "id": "topic-25",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Contagem e Probabilidade",
    "microtopico": "Princípio Fundamental da Contagem, Arranjos, Combinações e Permutações",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-26",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Contagem e Probabilidade",
    "microtopico": "Probabilidade Básica, Condicional e Eventos Independentes",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-27",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Lógica Proposicional",
    "microtopico": "Proposições, Conectivos Lógicos e Tabela-Verdade",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-28",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Lógica Proposicional",
    "microtopico": "Equivalências Lógicas (Contrapositiva, Leis de De Morgan) e Negações",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-29",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Lógica Proposicional",
    "microtopico": "Tautologia, Contradição, Contingência e Implicação Lógica",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-30",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Lógica de Argumentação",
    "microtopico": "Validade de Argumentos, Silogismos e Métodos de Dedução",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ]
  },
  {
    "id": "topic-31",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Estruturas Lógicas",
    "microtopico": "Diagramas Lógicos, Conjuntos e Operações (União, Interseção, Diferença)",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22"
  },
  {
    "id": "topic-32",
    "disciplina": "Raciocínio Lógico/Mat.",
    "macrotema": "Lógica Sequencial e Dedutiva",
    "microtopico": "Sequências Numéricas, Figurais e Problemas de Associação Lógica",
    "peso": "Peso 1 (Gerais)",
    "status": "Dominado",
    "faseRecomendada": "⭐ Dominado no Google Drive (Módulo 01/02/03). Fazer apenas manutenção periódica.",
    "anotacoes": "Estudado e registrado no Google Drive (Anotações Módulos 01 a 03). Manutenção e treino pontual.",
    "origem": [
      "Matemática Base",
      "Concurso"
    ],
    "dataEstudo": "2026-10-22"
  },
  {
    "id": "topic-33",
    "disciplina": "Legislação Institucional",
    "macrotema": "Lei Orgânica do TCE-GO (Lei 16.168)",
    "microtopico": "TCE-GO: Natureza, Competências Constitucionais e Jurisdição (Arts. 1º a 15)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-34",
    "disciplina": "Legislação Institucional",
    "macrotema": "Lei Orgânica do TCE-GO (Lei 16.168)",
    "microtopico": "TCE-GO: Julgamento de Contas e Fiscalização de Atos (Arts. 16 a 45)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-35",
    "disciplina": "Legislação Institucional",
    "macrotema": "Lei Orgânica do TCE-GO (Lei 16.168)",
    "microtopico": "TCE-GO: Sanções, Recursos e Organização do Tribunal (Conselheiros e MPC)",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-36",
    "disciplina": "Legislação Institucional",
    "macrotema": "Regimento Interno do TCE-GO",
    "microtopico": "Regimento Interno (Resolução 22/2008): Estrutura, Sessões Plenárias e Câmaras",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-37",
    "disciplina": "Legislação Institucional",
    "macrotema": "Estatuto dos Servidores de GO (Lei 20.756/2020)",
    "microtopico": "Estatuto GO: Provimento, Vacância, Direitos, Vantagens e Licenças",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-38",
    "disciplina": "Legislação Institucional",
    "macrotema": "Estatuto dos Servidores de GO (Lei 20.756/2020)",
    "microtopico": "Estatuto GO: Regime Disciplinar, Deveres, Proibições, Penalidades e PAD",
    "peso": "Peso 1 (Gerais)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-39",
    "disciplina": "Banco de Dados",
    "macrotema": "Fundamentos de Bancos de Dados",
    "microtopico": "Propriedades ACID, Concorrência e Gerenciamento de Transações",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-40",
    "disciplina": "Banco de Dados",
    "macrotema": "Modelagem de Dados",
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
    ]
  },
  {
    "id": "topic-41",
    "disciplina": "Banco de Dados",
    "macrotema": "Modelagem de Dados",
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
    ]
  },
  {
    "id": "topic-42",
    "disciplina": "Banco de Dados",
    "macrotema": "Normalização de Dados",
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
    ]
  },
  {
    "id": "topic-43",
    "disciplina": "Banco de Dados",
    "macrotema": "Linguagem SQL",
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
    ]
  },
  {
    "id": "topic-44",
    "disciplina": "Banco de Dados",
    "macrotema": "Linguagem SQL",
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
    ]
  },
  {
    "id": "topic-45",
    "disciplina": "Banco de Dados",
    "macrotema": "Linguagem SQL Avançado",
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
    ]
  },
  {
    "id": "topic-46",
    "disciplina": "Banco de Dados",
    "macrotema": "Linguagem SQL Avançado",
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
    ]
  },
  {
    "id": "topic-47",
    "disciplina": "Banco de Dados",
    "macrotema": "SGBDs Relacionais e Otimização",
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
    ]
  },
  {
    "id": "topic-48",
    "disciplina": "Banco de Dados",
    "macrotema": "SGBDs Relacionais e Otimização",
    "microtopico": "Otimização de Consultas: Planos de Execução (EXPLAIN ANALYZE), Índices (B-Tree, Hash, GIN, GiST)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-49",
    "disciplina": "Banco de Dados",
    "macrotema": "Bancos NoSQL",
    "microtopico": "Bancos NoSQL: Modelos Chave-Valor (Redis), Documentos (MongoDB) e Colunar",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-50",
    "disciplina": "Banco de Dados",
    "macrotema": "Bancos Vetoriais",
    "microtopico": "Bancos Vetoriais e Busca Semântica: Embeddings, pgvector, Índices HNSW e Cosine Similarity",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-51",
    "disciplina": "Desenvolvimento",
    "macrotema": "Lógica e Algoritmos",
    "microtopico": "Lógica de Programação, Complexidade de Algoritmos (Notação Big-O: Tempo e Espaço)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-52",
    "disciplina": "Desenvolvimento",
    "macrotema": "Estruturas de Dados",
    "microtopico": "Estruturas Lineares: Vetores, Matrizes, Listas Encadeadas, Pilhas e Filas",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-53",
    "disciplina": "Desenvolvimento",
    "macrotema": "Estruturas de Dados",
    "microtopico": "Estruturas Não Lineares e Busca: Tabelas Hash, Árvores Binárias (BST, AVL) e Grafos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-54",
    "disciplina": "Desenvolvimento",
    "macrotema": "Paradigmas de Programação",
    "microtopico": "Programação Orientada a Objetos: Classes, Objetos, Encapsulamento, Herança, Polimorfismo e Interfaces",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-55",
    "disciplina": "Desenvolvimento",
    "macrotema": "Paradigmas de Programação",
    "microtopico": "Programação Funcional: Funções Puras, Imutabilidade, Lambdas, Map/Filter/Reduce e Closures",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-56",
    "disciplina": "Desenvolvimento",
    "macrotema": "Linguagens do Edital",
    "microtopico": "Python para Desenvolvimento: Sintaxe, Tipos, Módulos, Manipulação de Dados e Asyncio",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-57",
    "disciplina": "Desenvolvimento",
    "macrotema": "Linguagens do Edital",
    "microtopico": "Java e TypeScript/JavaScript: Tipagem, Concorrência e Ecossistema",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-58",
    "disciplina": "Desenvolvimento",
    "macrotema": "Desenvolvimento Web & APIs",
    "microtopico": "Arquitetura Web, HTTP/HTTPS, Métodos (GET, POST, PUT, DELETE, PATCH) e Status Codes",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-59",
    "disciplina": "Desenvolvimento",
    "macrotema": "Desenvolvimento Web & APIs",
    "microtopico": "Construção de APIs RESTful: Padrões, Paginação, Versionamento e Especificação OpenAPI/Swagger",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-60",
    "disciplina": "Desenvolvimento",
    "macrotema": "Desenvolvimento Web & APIs",
    "microtopico": "APIs Modernas: GraphQL (Queries, Mutations, Schemas) e Comunicação em Tempo Real (WebSockets)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-61",
    "disciplina": "Desenvolvimento",
    "macrotema": "Front-end & Node.js",
    "microtopico": "Desenvolvimento Front-end: SPA, React (Componentes, Hooks useState/useEffect, Virtual DOM)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-62",
    "disciplina": "Desenvolvimento",
    "macrotema": "Front-end & Node.js",
    "microtopico": "Back-end com Node.js: Event Loop, NPM/Yarn, Criação de Servidores Express e Middlewares",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-63",
    "disciplina": "Desenvolvimento",
    "macrotema": "Segurança em Desenvolvimento",
    "microtopico": "Autenticação e Autorização: Protocolos OAuth 2.0, OpenID Connect (OIDC) e Estrutura JWT",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-64",
    "disciplina": "Desenvolvimento",
    "macrotema": "Controle de Versão",
    "microtopico": "Git: Comandos Fundamentais (commit, branch, merge, rebase, cherry-pick) e Workflows (GitFlow, Trunk-Based)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-65",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Fundamentos de Ciência de Dados",
    "microtopico": "Estatística Descritiva, Distribuições de Probabilidade e Amostragem para Dados",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-66",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Processamento e Análise de Dados",
    "microtopico": "Manipulação e Limpeza de Dados: Pandas, NumPy e Pipelines de Pré-processamento",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-67",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Big Data",
    "microtopico": "Fundamentos de Big Data: 5 Vs, Arquiteturas de Dados (Data Warehouse, Data Lake, Lakehouse)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-68",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Machine Learning Clássico",
    "microtopico": "Aprendizado Supervisionado: Regressão Linear/Logística, Árvores de Decisão, Random Forest e SVM",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-69",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Machine Learning Clássico",
    "microtopico": "Aprendizado Não Supervisionado: Clustering (K-Means, DBSCAN) e Redução de Dimensionalidade (PCA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-70",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Avaliação de Modelos",
    "microtopico": "Métricas de Avaliação: Matriz de Confusão, Acurácia, Precisão, Recall, F1-Score, Curva ROC/AUC",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-71",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "Deep Learning e PLN",
    "microtopico": "Redes Neurais Artificiais, Deep Learning (MLP, CNN, RNN/LSTM) e Processamento de Linguagem Natural",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-72",
    "disciplina": "IA & Ciência de Dados",
    "macrotema": "IA Responsável e Governança",
    "microtopico": "IA Generativa, Ética, Viés Algorítmico, Explicabilidade (XAI) e LGPD aplicada a Algoritmos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-73",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Grandes Modelos de Linguagem (LLMs)",
    "microtopico": "Arquitetura Transformers, Mecanismo de Atenção, Parâmetros e Janela de Contexto",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-74",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Engenharia de Prompts",
    "microtopico": "Técnicas de Prompts: Zero-shot, Few-shot, Chain-of-Thought (CoT), ReAct e Estruturação de Saídas (JSON)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-75",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Arquitetura RAG",
    "microtopico": "Retrieval-Augmented Generation (RAG): Chunking, Embeddings, Busca Vetorial, Reranking e Redução de Alucinações",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-76",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Sistemas Agentivos",
    "microtopico": "Ciclo de Vida do Agente: Planejamento, Memória (Short/Long-term), Uso de Ferramentas (Tool Use) e Autocorreção",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-77",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Protocolos de Conectividade",
    "microtopico": "Model Context Protocol (MCP): Arquitetura Cliente-Servidor, Tools, Resources, Prompts e Segurança",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-78",
    "disciplina": "IA & Sistemas Agentivos",
    "macrotema": "Assistentes de Código e CLI",
    "microtopico": "Assistentes de Codificação em CLI/IDE: Claude Code, Antigravity CLI, Automação de Tarefas e Engenharia de Contexto",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-79",
    "disciplina": "Segurança da Informação",
    "macrotema": "Fundamentos de Segurança",
    "microtopico": "Princípios da Segurança da Informação: Confidencialidade, Integridade, Disponibilidade e Autenticidade (CIDA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-80",
    "disciplina": "Segurança da Informação",
    "macrotema": "Gestão de Segurança e Riscos",
    "microtopico": "Normas ISO/IEC 27001 e 27002: Controles, Política de Segurança e Gestão de Riscos de TI",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-81",
    "disciplina": "Segurança da Informação",
    "macrotema": "Criptografia",
    "microtopico": "Criptografia Simétrica (AES), Assimétrica (RSA, Curvas Elípticas), Funções Hash (SHA-256) e Assinatura Digital",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-82",
    "disciplina": "Segurança da Informação",
    "macrotema": "Certificação Digital",
    "microtopico": "Infraestrutura de Chaves Públicas (ICP-Brasil), Certificados Digitais A1/A3 e Carimbo do Tempo",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-83",
    "disciplina": "Segurança da Informação",
    "macrotema": "Segurança em Redes e Perímetro",
    "microtopico": "Mecanismos de Defesa: Firewalls (Stateful, NGFW), IDS/IPS, VPN, WAF e Arquitetura Zero Trust",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-84",
    "disciplina": "Segurança da Informação",
    "macrotema": "Segurança de Software (DevSecOps)",
    "microtopico": "Vulnerabilidades Web: OWASP Top 10 (SQL Injection, XSS, Broken Access Control, CSRF)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-85",
    "disciplina": "Segurança da Informação",
    "macrotema": "Segurança de Software (DevSecOps)",
    "microtopico": "Práticas de DevSecOps, Análise Estática (SAST), Dinâmica (DAST) e Gestão de Dependências (SCA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-86",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Sistemas Operacionais",
    "microtopico": "Sistemas Operacionais: Processos, Threads, Gerenciamento de Memória (Paginação, Memória Virtual) e I/O",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-87",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Administração e Automação SO",
    "microtopico": "Linux/Unix e Windows Server: Permissões, Comandos Essenciais, Shell Script (Bash) e PowerShell",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-88",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Redes de Computadores",
    "microtopico": "Modelo OSI vs Arquitetura TCP/IP: Camadas, Encapsulamento, Protocolos IP (IPv4, IPv6) e Roteamento",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-89",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Protocolos de Transporte e Aplicação",
    "microtopico": "Camada de Transporte (TCP vs UDP) e Aplicação (DNS, DHCP, HTTP/1.1, HTTP/2, HTTPS, TLS/SSL)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-90",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Infraestrutura de Rede",
    "microtopico": "Dispositivos de Rede: Switches, Roteadores, VLANs, NAT, Proxy Reverso e Balanceamento de Carga",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-91",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Computação em Nuvem",
    "microtopico": "Fundamentos de Cloud: Modelos de Serviço (IaaS, PaaS, SaaS) e Implantação (Pública, Privada, Híbrida)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-92",
    "disciplina": "Redes & Nuvem",
    "macrotema": "Computação em Nuvem",
    "microtopico": "Arquiteturas em Nuvem: Serverless (FaaS), Microserviços, Storage (Block, Object Storage S3) e Elasticidade",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-93",
    "disciplina": "Engenharia de Software",
    "macrotema": "Ciclos de Vida e Métodos Ágeis",
    "microtopico": "Modelos de Ciclo de Vida: Cascata, Espiral e Métodos Ágeis (Manifesto Ágil, Scrum, Kanban, XP)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-94",
    "disciplina": "Engenharia de Software",
    "macrotema": "Engenharia de Requisitos",
    "microtopico": "Requisitos Funcionais e Não Funcionais, Histórias de Usuário, Critérios de Aceite e Casos de Uso",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-95",
    "disciplina": "Engenharia de Software",
    "macrotema": "Arquitetura e Design de Software",
    "microtopico": "Princípios de Design: SOLID (Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-96",
    "disciplina": "Engenharia de Software",
    "macrotema": "Arquitetura e Design de Software",
    "microtopico": "Princípios de Boas Práticas: DRY, KISS, YAGNI, Clean Code e Padrões de Projeto (GoF)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-97",
    "disciplina": "Engenharia de Software",
    "macrotema": "Modelagem de Sistemas",
    "microtopico": "Modelagem UML 2.5: Diagramas Estruturais (Classes, Componentes) e Comportamentais (Casos de Uso, Sequência)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-98",
    "disciplina": "Engenharia de Software",
    "macrotema": "Modelagem de Processos",
    "microtopico": "Modelagem e Notação de Processos de Negócio: BPMN 2.0 (Eventos, Atividades, Gateways e Raias)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-99",
    "disciplina": "Engenharia de Software",
    "macrotema": "Qualidade e Testes de Software",
    "microtopico": "Pirâmide de Testes: Testes Unitários, Integração, Sistema e Aceitação; TDD e Refatoração (Code Smells)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-100",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Cultura DevOps e Confiabilidade",
    "microtopico": "Fundamentos de DevOps, Site Reliability Engineering (SRE), SLI, SLO e SLA",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-101",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "CI/CD e Automação",
    "microtopico": "Pipelines de Integração e Entrega Contínua (CI/CD): GitHub Actions e GitLab CI (Triggers, Jobs, Runners e Deploys)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-102",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Containerização",
    "microtopico": "Containers com Docker: Dockerfile, Imagens, Containers, Volumes, Redes e Docker Compose",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-103",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Orquestração",
    "microtopico": "Orquestração com Kubernetes (K8s): Pods, Deployments, Services, Ingress, ConfigMaps e Secrets",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-104",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Infraestrutura como Código",
    "microtopico": "Infraestrutura como Código (IaC): Conceitos, Vantagens e Introdução a Terraform e Ansible",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-105",
    "disciplina": "DevOps & Infraestrutura",
    "macrotema": "Observabilidade e Monitoramento",
    "microtopico": "Pilares da Observabilidade: Logs, Métricas e Tracing (Prometheus, Grafana, ELK/OpenSearch)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-106",
    "disciplina": "Governança de TI",
    "macrotema": "COBIT 2019",
    "microtopico": "COBIT 2019: Princípios, Sistema de Governança, Objetivos de Governança e Gestão (EDM, APO, BAI, DSS, MEA)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-107",
    "disciplina": "Governança de TI",
    "macrotema": "ITIL v4",
    "microtopico": "ITIL v4: Sistema de Valor de Serviço (SVS), 4 Dimensões, Princípios Orientadores e Práticas Principais (Incidentes, Problemas, Mudanças)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-108",
    "disciplina": "Governança de TI",
    "macrotema": "Governança Corporativa e ISO 38500",
    "microtopico": "Norma ABNT NBR ISO/IEC 38500: Princípios e Modelo de Governança de TI (Avaliar, Dirigir e Monitorar)",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-109",
    "disciplina": "Governança de TI",
    "macrotema": "Gestão de Projetos (PMBOK 8ª/7ª ed)",
    "microtopico": "PMBOK: Princípios de Entrega de Projetos, Domínios de Desempenho, Abordagens Preditiva, Híbrida e Adaptativa",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-110",
    "disciplina": "Governança de TI",
    "macrotema": "Contratações de TIC e Governo Digital",
    "microtopico": "Lei nº 14.133/2021 aplicada a TIC: Planejamento da Contratação, ETP, Termo de Referência e Gestão de Contratos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-111",
    "disciplina": "Governança de TI",
    "macrotema": "Contratações de TIC e Governo Digital",
    "microtopico": "Lei do Governo Digital (Lei nº 14.129/2021) e Princípios da Eficiência e Transformação Digital no Setor Público",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-112",
    "disciplina": "Legislação Aplicada",
    "macrotema": "Marco Civil da Internet (Lei 12.965)",
    "microtopico": "Marco Civil da Internet: Princípios, Garantias, Direitos dos Usuários, Neutralidade da Rede e Responsabilidade por Danos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-113",
    "disciplina": "Legislação Aplicada",
    "macrotema": "Lei Geral de Proteção de Dados (LGPD)",
    "microtopico": "LGPD (Lei nº 13.709/2018): Conceitos (Dado Pessoal, Sensível, Titular, Controlador, Operador, DPO), Princípios e Bases Legais",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-114",
    "disciplina": "Legislação Aplicada",
    "macrotema": "LGPD e Setor Público",
    "microtopico": "LGPD no Setor Público (Tratamento pelo Poder Público), Direitos dos Titulares, Relatório de Impacto (RIPD) e Sanções da ANPD",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
  },
  {
    "id": "topic-115",
    "disciplina": "Legislação Aplicada",
    "macrotema": "Normativos de TIC do TCE-GO",
    "microtopico": "Resoluções e Políticas Internas de Segurança da Informação e Plano Diretor de TIC (PDTI) do TCE-GO",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-116",
    "disciplina": "Inglês Técnico",
    "macrotema": "Vocabulário e Leitura Técnica",
    "microtopico": "Vocabulário Técnico de TI, Expressões Idiomáticas em Documentação e Falsos Cognatos",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-117",
    "disciplina": "Inglês Técnico",
    "macrotema": "Interpretação de Textos de TI",
    "microtopico": "Leitura e Interpretação de Documentação Técnica Oficial, RFCs, Manuais e Artigos de Engenharia",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-118",
    "disciplina": "Inglês Técnico",
    "macrotema": "Especificações e APIs",
    "microtopico": "Compreensão e Análise de Especificações Técnicas, Arquiteturas de Software e Documentação de APIs REST",
    "peso": "Peso 2 (Específicos)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-119",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Metodologia de Resolução FCC",
    "microtopico": "Estrutura do Estudo de Caso FCC: Introdução ao Problema, Fundamentação Técnica e Proposta de Solução",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-120",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Simulação Banco de Dados & SQL",
    "microtopico": "Estudo de Caso Prático: Modelagem Relacional, Normalização ou Otimização de Banco de Dados Público",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-121",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Simulação Engenharia & Arquitetura",
    "microtopico": "Estudo de Caso Prático: Arquitetura de Microserviços, APIs RESTful e Integração com RAG/IA",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso"
    ]
  },
  {
    "id": "topic-122",
    "disciplina": "Discursiva / Estudo de Caso",
    "macrotema": "Simulação Governança & LGPD",
    "microtopico": "Estudo de Caso Prático: Incidente de Segurança, Conformidade com a LGPD e Fiscalização de Contrato de TIC",
    "peso": "Discursiva (Eliminatório/Classificatório)",
    "status": "Pendente",
    "faseRecomendada": "⏳ Pendente - Aguardando estudo.",
    "anotacoes": "Aguardando teoria.",
    "origem": [
      "Concurso",
      "MBA"
    ]
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
