import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { StudyProvider, useStudy } from './context/StudyContext';
import { Header } from './components/Header';
import { TodayFocus } from './components/TodayFocus';
import { CurriculumView } from './components/CurriculumView';
import { ReviewQueue } from './components/ReviewQueue';
import { ErrorNotebook } from './components/ErrorNotebook';
import { StatsDashboard } from './components/StatsDashboard';
import { TopicModal } from './components/TopicModal';
import { AuthModal } from './components/AuthModal';
import { BottomNav } from './components/BottomNav';
import { LandingPage } from './components/LandingPage';
import { BookOpen } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const { activeTab } = useStudy();
  const [isGuestMode, setIsGuestMode] = useState(false);

  // Loading state while Supabase checks session
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 animate-pulse mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="text-slate-400 text-xs font-medium tracking-wide">
          Carregando CronoEstudo...
        </div>
      </div>
    );
  }

  // Visitor / Landing Page view when not logged in and not in guest preview
  if (!user && !isGuestMode) {
    return (
      <>
        <LandingPage onContinueAsGuest={() => setIsGuestMode(true)} />
        <AuthModal />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 sm:pb-8">
        {activeTab === 'hoje' && <TodayFocus />}
        {activeTab === 'edital' && <CurriculumView />}
        {activeTab === 'revisoes' && <ReviewQueue />}
        {activeTab === 'erros' && <ErrorNotebook />}
        {activeTab === 'estatisticas' && <StatsDashboard />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 mt-8 sm:mt-12 text-center text-xs text-slate-500 hidden sm:block">
        <p>
          CronoEstudo • Plano Estratégico TCE-GO TI & Matérias Base • Sincronização em Nuvem Supabase
        </p>
      </footer>

      {/* Mobile Ergonomic Bottom Navigation Bar */}
      <BottomNav />

      {/* Global topic editing modal */}
      <TopicModal />

      {/* Supabase Authentication Modal */}
      <AuthModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <StudyProvider>
        <AppContent />
      </StudyProvider>
    </AuthProvider>
  );
};

export default App;
