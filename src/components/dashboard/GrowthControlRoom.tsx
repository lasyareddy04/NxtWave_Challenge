import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Share2, 
  Send, 
  Target, 
  FlaskConical, 
  Calendar, 
  Cpu, 
  Clock, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Wallet
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { FunnelMetricsView } from './FunnelMetricsView';
import { CommunityTrackerTable } from './CommunityTrackerTable';
import { ExperimentCenter } from './ExperimentCenter';
import { ExecutionTimeline7Days } from './ExecutionTimeline7Days';
import { BudgetEconomicsCard } from './BudgetEconomicsCard';
import { DirectOutreachSection } from './DirectOutreachSection';
import { AIAcceleratorSection } from './AIAcceleratorSection';

type ControlRoomTab = 'funnel' | 'communities' | 'experiments' | 'timeline' | 'outreach_ai';

export const GrowthControlRoom: React.FC = () => {
  const { 
    funnel, 
    students, 
    simulateQuickRegistration, 
    setCurrentView 
  } = useCampaign();

  const [activeTab, setActiveTab] = useState<ControlRoomTab>('funnel');

  const totalRegistered = funnel.completedRegistrations;
  const progressPct = Math.min(100, Math.round((totalRegistered / 500) * 100));

  const tabs = [
    { id: 'funnel', label: 'Funnel & Unit Economics', icon: BarChart3 },
    { id: 'communities', label: 'Campus Pipeline (20 Clubs)', icon: Users },
    { id: 'experiments', label: 'Growth Experiments', icon: FlaskConical },
    { id: 'timeline', label: '7-Day Execution Plan', icon: Calendar },
    { id: 'outreach_ai', label: 'Direct Outreach & AI', icon: Cpu },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Header Card */}
      <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
              Operating System
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              IDEA → BUILD → LAUNCH → MEASURE → LEARN → SCALE
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            CAMPUS GROWTH CONTROL ROOM
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Growth operator dashboard tracking the 500-student acquisition campaign across 7 days.
          </p>

          {/* Growth Math Summary Pill */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-slate-950 border border-slate-800/80 px-3 py-1 rounded-xl w-fit">
            <span className="text-white font-bold">500 Goal</span>
            <span className="text-slate-500">=</span>
            <span className="text-indigo-400">300 Campus (60%)</span>
            <span className="text-slate-500">+</span>
            <span className="text-emerald-400">100 Peer Sharing (20%)</span>
            <span className="text-slate-500">+</span>
            <span className="text-purple-400">100 Direct (20%)</span>
          </div>
        </div>

        {/* Target Progress & Metrics */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
            <div className="flex justify-between text-xs font-mono mb-1.5">
              <span className="text-slate-400">Campaign Progress:</span>
              <span className="text-white font-bold">{totalRegistered} / 500</span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>{progressPct}% to goal</span>
              <span>Budget: ₹2,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-800/80">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ControlRoomTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Area */}
      <div className="animate-in fade-in duration-200">
        
        {/* Tab 1: Funnel & Economics */}
        {activeTab === 'funnel' && (
          <div className="space-y-6">
            <FunnelMetricsView />
            <BudgetEconomicsCard />
          </div>
        )}

        {/* Tab 2: Campus Communities Table */}
        {activeTab === 'communities' && (
          <CommunityTrackerTable />
        )}

        {/* Tab 3: Experiments */}
        {activeTab === 'experiments' && (
          <ExperimentCenter />
        )}

        {/* Tab 4: 7-Day Timeline */}
        {activeTab === 'timeline' && (
          <ExecutionTimeline7Days />
        )}

        {/* Tab 5: Outreach & AI */}
        {activeTab === 'outreach_ai' && (
          <div className="space-y-6">
            <DirectOutreachSection />
            <AIAcceleratorSection />
          </div>
        )}

      </div>

      {/* Compact Live Feed Drawer */}
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 mb-2">
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Live Telemetry & Registration Audit</span>
          </div>
          <button
            onClick={() => simulateQuickRegistration()}
            className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300"
          >
            +1 Simulate Reg
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {students.slice(0, 3).map((st) => (
            <div key={st.id} className="bg-slate-950/80 border border-slate-800/60 rounded-lg p-2.5 flex items-center justify-between text-[11px]">
              <div>
                <span className="font-medium text-white block">{st.fullName}</span>
                <span className="text-[10px] text-slate-500 truncate block">{st.college}</span>
              </div>
              <span className="font-mono text-[9px] text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                {st.source.replace('campus_', '')}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
