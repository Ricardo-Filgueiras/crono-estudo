import React from 'react';
import { StudyProvider, useStudy } from './context/StudyContext';
import { Header } from './components/Header';
import { TodayFocus } from './components/TodayFocus';
import { CurriculumView } from './components/CurriculumView';
import { ReviewQueue } from './components/ReviewQueue';
import { ErrorNotebook } from './components/ErrorNotebook';
import { StatsDashboard } from './components/StatsDashboard';
import { TopicModal } from './components/TopicModal';

const AppContent: React.FC = () => {
  const { activeTab } = useStudy();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'hoje' && <TodayFocus />}
        {activeTab === 'edital' && <CurriculumView />}
        {activeTab === 'revisoes' && <ReviewQueue />}
        {activeTab === 'erros' && <ErrorNotebook />}
        {activeTab === 'estatisticas' && <StatsDashboard />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 mt-12 text-center text-xs text-slate-500">
        <p>
          CronoEstudo • Plano Estratégico TCE-GO TI & Matérias Base • Armazenamento Local 100% Gratuito e Seguro
        </p>
      </footer>

      {/* Global topic editing modal */}
      <TopicModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StudyProvider>
      <AppContent />
    </StudyProvider>
  );
};

export default App;
