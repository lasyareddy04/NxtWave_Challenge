import React, { useState } from 'react';
import { 
  BarChart3, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  RotateCcw, 
  Users,
  Compass,
  Zap,
  Tag,
  ChevronDown
} from 'lucide-react';
import { useCampaign } from '../context/CampaignContext';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    viewportMode, 
    setViewportMode,
    activeSource,
    setActiveSource,
    simulateQuickRegistration,
    resetAllData,
    toastMessage,
    partners
  } = useCampaign();

  const [showSourceSelector, setShowSourceSelector] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Subtle Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white">CAMPUS GROWTH ENGINE</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
                  Simulation
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                500 Registrations • 7 Days • ₹2,000 Budget
              </p>
            </div>
          </div>

          {/* Clean Segmented View Switcher */}
          <nav className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 shadow-inner">
            <button
              onClick={() => setCurrentView('student')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'student'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Student Page</span>
            </button>

            <button
              onClick={() => setCurrentView('partner')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'partner'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Partner Kit</span>
            </button>

            <button
              onClick={() => setCurrentView('control_room')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentView === 'control_room'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Growth Control Room</span>
            </button>
          </nav>

          {/* Clean Right Actions */}
          <div className="flex items-center gap-2">
            
            {/* Viewport switch if viewing student page */}
            {currentView === 'student' && (
              <div className="hidden lg:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 mr-1">
                <button
                  onClick={() => setViewportMode('desktop')}
                  title="Desktop View"
                  className={`p-1.5 rounded-md ${
                    viewportMode === 'desktop' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  title="Mobile View"
                  className={`p-1.5 rounded-md ${
                    viewportMode === 'mobile' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Quick Attribution Source Trigger */}
            <div className="relative">
              <button
                onClick={() => setShowSourceSelector(!showSourceSelector)}
                title="Attributed UTM Source"
                className="hidden xl:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors"
              >
                <Tag className="w-3 h-3 text-indigo-400" />
                <span className="truncate max-w-[110px]">?source={activeSource.replace('campus_', '')}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {showSourceSelector && (
                <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50">
                  <div className="text-[10px] font-mono text-slate-500 px-2 py-1 uppercase">
                    Select Test Campus
                  </div>
                  <div className="max-h-52 overflow-y-auto space-y-0.5">
                    {partners.slice(0, 6).map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveSource(p.sourceSlug);
                          setShowSourceSelector(false);
                        }}
                        className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                          activeSource === p.sourceSlug
                            ? 'bg-indigo-600/20 text-indigo-300 font-semibold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="truncate">{p.college}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Simulate Registration Button */}
            <button
              onClick={() => simulateQuickRegistration(activeSource)}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
              title="Simulates 1 student registration"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>+1 Reg</span>
            </button>

            {/* Reset button */}
            <button
              onClick={resetAllData}
              title="Reset simulation data"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-indigo-500/40 text-slate-100 text-xs px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};
