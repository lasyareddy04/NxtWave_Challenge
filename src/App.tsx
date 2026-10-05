import React from 'react';
import { CampaignProvider, useCampaign } from './context/CampaignContext';
import { Navbar } from './components/Navbar';
import { StudentLandingPage } from './components/student/StudentLandingPage';
import { CampusPartnerPortal } from './components/partner/CampusPartnerPortal';
import { GrowthControlRoom } from './components/dashboard/GrowthControlRoom';
import { Zap, ShieldCheck, Github, ArrowRight } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentView, setCurrentView } = useCampaign();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Universal Top Navigation */}
      <Navbar />

      {/* Main View Area */}
      <main className="flex-1">
        {currentView === 'student' && <StudentLandingPage />}
        {currentView === 'partner' && <CampusPartnerPortal />}
        {currentView === 'control_room' && <GrowthControlRoom />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-extrabold text-white text-sm tracking-tight">CAMPUS GROWTH ENGINE</span>
                <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
                  Simulation Model
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                A complete campaign operating tool built for the NxtWave Growth Intern Challenge. Designed to acquire 500 final-year registrations in 7 days with ₹2,000 budget.
              </p>
            </div>

            {/* Quick View Navigation Links */}
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <button
                onClick={() => { setCurrentView('student'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  currentView === 'student' ? 'border-indigo-500 bg-indigo-950 text-indigo-200' : 'border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                1. Student Page & AI Hook
              </button>
              <button
                onClick={() => { setCurrentView('partner'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  currentView === 'partner' ? 'border-indigo-500 bg-indigo-950 text-indigo-200' : 'border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                2. Campus Partner Kit
              </button>
              <button
                onClick={() => { setCurrentView('control_room'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  currentView === 'control_room' ? 'border-indigo-500 bg-indigo-950 text-indigo-200' : 'border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                3. Growth Control Room (500 Target)
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3">
            <div>
              <span>Growth Philosophy: IDEA → BUILD → LAUNCH → MEASURE → LEARN → SCALE</span>
            </div>
            <div>
              <span>SIMULATION / DEMO DATA • No real student data fabricated</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CampaignProvider>
      <AppContent />
    </CampaignProvider>
  );
};

export default App;
