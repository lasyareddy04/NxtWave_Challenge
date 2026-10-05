import React from 'react';
import { 
  IndianRupee, 
  PieChart, 
  TrendingUp, 
  ShieldAlert, 
  ArrowUpRight,
  Wallet,
  Sparkles
} from 'lucide-react';
import { INITIAL_BUDGET } from '../../data/campaignData';

export const BudgetEconomicsCard: React.FC = () => {
  const totalBudget = 2000;
  const targetCAC = (totalBudget / 500).toFixed(2); // ₹4.00

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Wallet className="w-5 h-5 text-indigo-400" />
              <span>BUDGET & UNIT ECONOMICS ARCHITECTURE</span>
            </h3>
            <span className="text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">
              Total Budget: ₹2,000 (INR)
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            "The campaign does NOT depend primarily on paid advertising. Capital is deployed as high-leverage micro-incentives."
          </p>
        </div>

        {/* Target CAC Callout */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-right font-mono self-start sm:self-auto">
          <span className="text-[10px] text-slate-400 block uppercase">Target Unit CAC</span>
          <span className="text-xl font-extrabold text-emerald-400">₹{targetCAC} / reg</span>
          <span className="text-[9px] text-slate-500 block">₹2,000 / 500 Target</span>
        </div>
      </div>

      {/* Budget Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INITIAL_BUDGET.map((b) => {
          const sharePct = Math.round((b.allocatedAmount / totalBudget) * 100);
          return (
            <div 
              key={b.category}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {sharePct}% ALLOCATION
                  </span>
                  <span className="text-base font-black text-white font-mono">
                    ₹{b.allocatedAmount}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-200 mb-1 leading-snug">
                  {b.category}
                </h4>

                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                  {b.purpose}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
                <span className="text-slate-400 font-semibold block mb-0.5">Rationale:</span>
                <span className="leading-tight">{b.rationale}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Capital Allocation Rule */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Dynamic Reallocation Principle:</span>
            <span className="text-slate-400 leading-relaxed">
              “This is an initial allocation. Budget should move toward the channels producing the strongest registration economics on Day 5.”
            </span>
          </div>
        </div>

        <div className="font-mono text-[10px] text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg shrink-0">
          * Simulation model — Zero real spend incurred
        </div>
      </div>

    </div>
  );
};
