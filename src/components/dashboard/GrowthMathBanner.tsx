import React from 'react';
import { Target, Users, Share2, Send, ArrowRight, Sparkles } from 'lucide-react';
import { CAMPAIGN_META } from '../../data/campaignData';

export const GrowthMathBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Background ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Philosophy Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth Architecture & Economics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            CAMPAIGN GROWTH MATH
          </h2>
        </div>

        {/* Growth Philosophy Pill Sequence */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono bg-slate-950/80 border border-slate-800 p-1.5 rounded-xl">
          {['IDEA', 'BUILD', 'LAUNCH', 'MEASURE', 'LEARN', 'SCALE'].map((step, idx) => (
            <React.Fragment key={step}>
              <span className={`px-2 py-0.5 rounded font-semibold ${
                idx === 3 || idx === 4 ? 'bg-indigo-600 text-white' : 'text-slate-300'
              }`}>
                {step}
              </span>
              {idx < 5 && <span className="text-slate-600">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Growth Equation */}
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 text-center">
          
          {/* Target Grand Total */}
          <div className="md:col-span-2 bg-slate-950/90 border border-indigo-500/40 rounded-2xl p-5 shadow-lg">
            <span className="text-xs font-mono uppercase text-indigo-400 font-semibold block">
              CAMPAIGN GOAL
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              500
            </div>
            <span className="text-xs text-slate-300 font-medium block mt-1">
              Final-Year Registrations
            </span>
            <span className="text-[10px] text-slate-500 font-mono block mt-2">
              7 Days • ₹2,000 Budget
            </span>
          </div>

          {/* Equal sign */}
          <div className="hidden md:flex items-center justify-center text-3xl font-extrabold text-indigo-400 font-mono">
            =
          </div>

          {/* 3 Engines Grid */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Engine 1 */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center relative group hover:border-indigo-500/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-2">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">300</div>
              <span className="text-xs font-bold text-slate-200 block mt-0.5">Campus Partners</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                20 clubs × 15 regs
              </p>
              <div className="mt-2 text-[10px] font-mono text-indigo-300 bg-indigo-950/60 rounded px-1.5 py-0.5">
                60% Share
              </div>
            </div>

            {/* Engine 2 */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center relative group hover:border-emerald-500/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-2">
                <Share2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">100</div>
              <span className="text-xs font-bold text-slate-200 block mt-0.5">Student Sharing</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                Peer WhatsApp loop
              </p>
              <div className="mt-2 text-[10px] font-mono text-emerald-300 bg-emerald-950/60 rounded px-1.5 py-0.5">
                20% Share
              </div>
            </div>

            {/* Engine 3 */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center relative group hover:border-purple-500/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-2">
                <Send className="w-3.5 h-3.5" />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">100</div>
              <span className="text-xs font-bold text-slate-200 block mt-0.5">Direct Outreach</span>
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                LinkedIn & Telegram
              </p>
              <div className="mt-2 text-[10px] font-mono text-purple-300 bg-purple-950/60 rounded px-1.5 py-0.5">
                20% Share
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Critical Growth Operator Note */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          <span className="font-sans font-medium text-slate-300">
            “Initial campaign targets. Validate and reallocate based on performance.”
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Target CAC: ₹4.00 per completed registration (₹2,000 / 500)
        </div>
      </div>

    </div>
  );
};
