import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Sparkles, 
  TrendingUp, 
  AlertCircle,
  Lightbulb,
  Check
} from 'lucide-react';
import { SEVEN_DAY_TIMELINE } from '../../data/campaignData';
import { DayPlan } from '../../types/campaign';

export const ExecutionTimeline7Days: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayPlan>(SEVEN_DAY_TIMELINE[5]); // Default to Day 6 (Scale)

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span>7-DAY CAMPAIGN CONTROL TIMELINE</span>
            </h3>
            <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
              7-Day Execution Blueprint
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            How a growth operator orchestrates research, build, launch, diagnostics, and scaling across 7 days.
          </p>
        </div>

        {/* Core Principle Badge */}
        <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/30 px-3.5 py-1.5 rounded-xl text-xs font-mono text-indigo-200">
          💡 Core Principle: <span className="font-bold text-white">“Don't scale everything. Scale what converts.”</span>
        </div>
      </div>

      {/* Horizontal Day Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {SEVEN_DAY_TIMELINE.map((day) => {
          const isSelected = selectedDay.dayNumber === day.dayNumber;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day)}
              className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-600/15 text-white shadow-lg shadow-indigo-600/10 ring-1 ring-indigo-500'
                  : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-xs font-mono font-bold">DAY {day.dayNumber}</span>
                {day.completed ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Circle className="w-2.5 h-2.5 text-slate-600" />
                )}
              </div>
              <div className="text-[11px] font-bold text-slate-200 truncate">{day.phase}</div>
              <div className="text-[9px] text-slate-500 truncate mt-0.5">{day.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Tactical Detail Card */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden animate-in fade-in duration-300">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800/80 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60 px-2.5 py-0.5 rounded-lg">
                DAY {selectedDay.dayNumber} • {selectedDay.phase}
              </span>
              <span className="text-xs text-slate-400">Tactical Playbook</span>
            </div>
            <h4 className="text-xl font-extrabold text-white tracking-tight mt-2">
              {selectedDay.title}
            </h4>
          </div>

          <div className="text-right sm:self-auto self-start">
            <span className="text-[10px] font-mono text-slate-500 block">KEY OPERATIONAL METRIC</span>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 inline-block mt-0.5">
              {selectedDay.keyMetricToWatch}
            </span>
          </div>
        </div>

        {/* Objective & Growth Principle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs">
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-4">
            <span className="text-slate-400 font-mono text-[10px] uppercase font-semibold block mb-1">
              Objective:
            </span>
            <p className="text-slate-200 leading-relaxed font-sans">{selectedDay.objective}</p>
          </div>

          <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-4">
            <span className="text-indigo-400 font-mono text-[10px] uppercase font-semibold block mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> Growth Operator Principle:
            </span>
            <p className="text-indigo-200/90 leading-relaxed font-sans italic">"{selectedDay.growthPrinciple}"</p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div>
          <span className="text-xs font-mono font-semibold uppercase text-slate-400 block mb-3">
            Execution Checklist & Deliverables:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {selectedDay.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/50 border border-slate-800/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-300"
              >
                <div className="w-4 h-4 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5 text-[10px] font-mono">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
