import React from 'react';
import { 
  Sparkles, 
  FlaskConical, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Zap,
  Sliders
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { GrowthExperiment } from '../../types/campaign';

export const ExperimentCenter: React.FC = () => {
  const { experiments, toggleExperimentVariant } = useCampaign();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-indigo-400" />
              <span>GROWTH EXPERIMENT CENTER</span>
            </h3>
            <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
              A/B Testing Framework
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            "Don't scale everything. Scale what converts." Testing message hooks, onboarding friction, and community enablement.
          </p>
        </div>

        <div className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
          Active Tests: 3 Running • Confidence: 95%
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {experiments.map((exp) => (
          <div 
            key={exp.id}
            className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between transition-all"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                  {exp.id.replace('exp_', 'EXP ').toUpperCase()}
                </span>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                  Winner: Variant {exp.winner}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                {exp.title}
              </h4>

              {/* Hypothesis */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-300 mb-4 leading-relaxed">
                <span className="font-semibold text-slate-200 block mb-0.5 font-mono text-[10px] uppercase text-indigo-400">
                  Hypothesis:
                </span>
                "{exp.hypothesis}"
              </div>

              {/* Variants comparison */}
              <div className="space-y-2 mb-4">
                
                {/* Variant A */}
                <div className={`p-3 rounded-xl border text-xs transition-all ${
                  exp.activeVariant === 'A' 
                    ? 'border-indigo-500 bg-indigo-500/10' 
                    : 'border-slate-800/80 bg-slate-900/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-mono">A</span>
                      <span>{exp.variantA.name}</span>
                    </span>
                    <span className="font-mono font-bold text-slate-300">
                      {exp.variantA.conversionRate}%
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2 truncate">
                    {exp.variantA.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>{exp.variantA.conversions} / {exp.variantA.visitors} regs</span>
                    <button
                      onClick={() => toggleExperimentVariant(exp.id, 'A')}
                      className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                        exp.activeVariant === 'A' 
                          ? 'bg-indigo-600 text-white font-semibold' 
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {exp.activeVariant === 'A' ? 'Active' : 'Deploy A'}
                    </button>
                  </div>
                </div>

                {/* Variant B */}
                <div className={`p-3 rounded-xl border text-xs transition-all ${
                  exp.activeVariant === 'B' 
                    ? 'border-indigo-500 bg-indigo-500/10' 
                    : 'border-slate-800/80 bg-slate-900/50'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-indigo-600 text-[10px] text-white flex items-center justify-center font-mono">B</span>
                      <span>{exp.variantB.name}</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-400">
                      {exp.variantB.conversionRate}% 🚀
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-2 truncate">
                    {exp.variantB.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>{exp.variantB.conversions} / {exp.variantB.visitors} regs</span>
                    <button
                      onClick={() => toggleExperimentVariant(exp.id, 'B')}
                      className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                        exp.activeVariant === 'B' 
                          ? 'bg-indigo-600 text-white font-semibold' 
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {exp.activeVariant === 'B' ? 'Active' : 'Deploy B'}
                    </button>
                  </div>
                </div>

              </div>

              {/* Metric & Decision Rule */}
              <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-slate-800/80">
                <div>
                  <span className="text-slate-500 font-mono text-[10px]">PRIMARY METRIC: </span>
                  <span className="text-slate-300 font-medium">{exp.metric}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono text-[10px]">DECISION RULE: </span>
                  <span className="text-indigo-300">{exp.decisionRule}</span>
                </div>
              </div>
            </div>

            {/* Operator Decision Action */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Statistically Significant
              </span>
              <span className="text-slate-400">Action: Scale B</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
