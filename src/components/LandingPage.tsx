import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  Calendar, 
  RotateCcw, 
  AlertCircle, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Cloud, 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface LandingPageProps {
  onContinueAsGuest?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onContinueAsGuest }) => {
  const { openAuthModal } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">CronoEstudo</span>
              <span className="ml-2 text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                TCE-GO TI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onContinueAsGuest && (
              <button
                onClick={onContinueAsGuest}
                className="hidden sm:inline-flex text-xs font-medium text-slate-400 hover:text-white px-3 py-2 rounded-lg transition"
              >
                Explorar como Convidado
              </button>
            )}
            <button
              onClick={openAuthModal}
              className="text-xs font-semibold px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white transition"
            >
              Entrar
            </button>
            <button
              onClick={openAuthModal}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-600/20 transition flex items-center gap-1.5"
            >
              <span>Criar Conta Grátis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Glow ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Ciclo Estratégico de Estudos Baseado em Evidências</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Domine o Edital do seu Concurso com <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Clareza e Alta Retenção</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Elimine a ansiedade de não saber o que estudar hoje. Organize tópicos teóricos, revisões espaçadas automatizadas e o seu caderno de erros da banca FCC em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={openAuthModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Começar Agora Gratuitamente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {onContinueAsGuest && (
              <button
                onClick={onContinueAsGuest}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-700 hover:border-slate-600 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition"
              >
                Testar sem Cadastro
              </button>
            )}
          </div>

          {/* Social Proof / Security Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Edital TCE-GO TI pré-cadastrado</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-cyan-400" />
              <span>Sincronização em nuvem via Supabase</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Gratuito & Seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Construído para concurseiros que buscam aprovação real
            </h2>
            <p className="text-sm text-slate-400">
              Cada funcionalidade foi desenhada para combater a curva do esquecimento e dar clareza diária ao candidato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Foco de Hoje</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Visualização limpa com o que você realmente precisa estudar hoje, sem se desesperar com os 80+ tópicos do edital de uma vez.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center mb-5">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Revisões Espaçadas</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Algoritmo inteligente de repetição espaçada (D+7 e subsequentes) para garantir que você não esqueça os tópicos vistos há semanas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center mb-5">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Caderno de Erros</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mapeie exatamente por que errou cada questão: falta de teoria, pegadinha de banca ou distração. Transforme falhas em acertos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Métricas e Progresso</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Acompanhe a sua porcentagem de edital vencido, tópicos dominados, tempo total dedicado e taxa de acertos em questões.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Como funciona em 3 passos simples
            </h2>
            <p className="text-sm text-slate-400">
              Praticidade desde o primeiro minuto, sem necessidade de planilhas complexas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="text-base font-bold text-white mb-2">Edital Estruturado</h4>
              <p className="text-xs text-slate-400">
                Seu cronograma já vem pré-configurado com as disciplinas de Português, RLM e Conhecimentos Específicos de TI.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="text-base font-bold text-white mb-2">Estudo com Timer Integrado</h4>
              <p className="text-xs text-slate-400">
                Execute suas sessões de estudo com cronômetro, registre horas líquidas e marque os tópicos vencidos.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h4 className="text-base font-bold text-white mb-2">Revisão e Nuvem</h4>
              <p className="text-xs text-slate-400">
                O sistema agenda sua revisão automaticamente e salva tudo no Supabase para você acessar pelo PC ou celular.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Pronto para acelerar sua aprovação?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
              Crie sua conta gratuita em menos de 30 segundos e comece a estudar com estratégia agora mesmo.
            </p>
            <button
              onClick={openAuthModal}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Criar Minha Conta Grátis</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span className="text-slate-400 font-semibold">CronoEstudo</span>
            <span>• TCE-GO TI & Matérias Base</span>
          </div>
          <p>© 2026 CronoEstudo. Desenvolvido para Concursos Públicos de Alta Performance.</p>
        </div>
      </footer>
    </div>
  );
};
