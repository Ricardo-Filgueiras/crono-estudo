# CronoEstudo • TCE-GO TI & Matérias Base

Aplicativo inteligente para gerenciamento de estudos para o concurso **TCE-GO (Analista de TI)** com foco em **Língua Portuguesa**, **Raciocínio Lógico / Matemática** e **Conhecimentos Específicos**, sem sobrecarga e sem estresse.

---

## 🚀 Funcionalidades Principais

1. 🎯 **Foco de Hoje (Anti-paralisia):**
   - Visualize exatamente o que está programado para o seu dia.
   - Gerador de missão automática baseado no seu tempo disponível (30m, 1h, 2h+).
   - Alternância inteligente entre matérias base e conhecimentos específicos (ciclo de estudos).

2. ⏩ **Mover para Frente (Reagendamento sem Culpa):**
   - Dia corrido ou cansativo? Basta 1 clique (*"Adiar para amanhã"*, *"+2 dias"* ou *"+7 dias"*).
   - O aplicativo reorganiza a fila automaticamente sem acumular dívidas na mente.

3. 🎓 **Marcar como Dominado:**
   - Já domina crase, concordância ou normalização 1FN?
   - Marque com 1 clique. O assunto sai do ciclo de estudos ativos e conta como progresso concluído.

4. ⏱️ **Timer / Modo Foco Integrado:**
   - Pomodoro clássico de 25m, bloco aprofundado de 45m e pausa rápida de 5m embutidos na tela.

5. 📚 **Edital Verticalizado Completo (122 Microtópicos Atômicos):**
   - Todos os 122 tópicos da sua planilha oficial já cadastrados.
   - Filtros instantâneos por disciplina, peso no edital (Peso 1 vs Peso 2) e status.
   - Busca em tempo real por palavras-chave, conceitos e resumos.

6. 🔄 **Revisão Espaçada Ativa (D+7 / D+15):**
   - Alerta de tópicos prontos para revisão para vencer a curva do esquecimento.
   - Revisões rápidas de 5 minutos direto nos pontos-chave e anotações.

7. 📕 **Caderno de Erros FCC:**
   - Mapeamento de pegadinhas, erros conceituais e lições aprendidas das questões da banca FCC.

8. 💾 **Armazenamento 100% Gratuito & Backup:**
   - Dados salvos localmente no navegador (LocalStorage).
   - Exportação e importação de Backup em formato JSON com 1 clique (custo R$ 0,00).

---

## 💻 Como Rodar no Computador (Local)

1. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

2. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Abra o link gerado no navegador (ex: \`http://localhost:5173\`).

---

## 🌐 Como Colocar no Ar de Graça (Orçamento R$ 0,00)

### Opção 1: Vercel (Recomendada - 2 minutos)
1. Suba o código para o seu repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e conecte com sua conta GitHub.
3. Clique em **"Add New Project"** e selecione o repositório \`crono-estudo\`.
4. Clique em **Deploy**. Você receberá um link gratuito HTTPS que funciona tanto no PC quanto no celular.

### Opção 2: GitHub Pages
1. Crie uma action simples de build do Vite para o GitHub Pages.
2. O site ficará disponível gratuitamente no seu domínio \`https://<usuario>.github.io/crono-estudo\`.
