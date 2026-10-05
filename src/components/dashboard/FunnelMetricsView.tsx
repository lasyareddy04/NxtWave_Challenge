import React from 'react';
import { 
  ArrowDown, 
  TrendingUp, 
  Users, 
  MousePointerClick, 
  FileText, 
  CheckCircle2, 
  Share2, 
  UserPlus,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';

export const FunnelMetricsView: React.FC = () => {
  const { funnel, partners } = useCampaign();

  // Funnel stage ratios
  const ctr = Math.round((funnel.clicks / funnel.reach) * 1000) / 10;
  const startRate = Math.round((funnel.registrationStarts / funnel.clicks) * 1000) / 10;
  const completionRate = Math.round((funnel.completedRegistrations / funnel.registrationStarts) * 1000) / 10;
  const overallConversion = Math.round((funnel.completedRegistrations / funnel.clicks) * 1000) / 10;
  const shareRate = Math.round((funnel.shares / funnel.completedRegistrations) * 1000) / 10;
  const viralCoeff = Math.round((funnel.additionalRegistrationsFromSharing / funnel.completedRegistrations) * 100) / 100;

  // Unit economics
  const simulatedSpend = 800; // Community micro-incentives + experiment creative
  const currentCAC = (simulatedSpend / funnel.completedRegistrations).toFixed(2);

  const stages = [
    {
      label: "TOTAL REACH",
      count: funnel.reach.toLocaleString(),
      subtext: "Across 20 college clubs & WhatsApp channels",
      icon: Users,
      color: "text-slate-300",
      bgColor: "bg-slate-800/40",
      dropoff: null
    },
    {
      label: "CLICKS",
      count: funnel.clicks.toLocaleString(),
      subtext: `CTR: ${ctr}% from broadcasts`,
      icon: MousePointerClick,
      color: "text-indigo-400",
      bgColor: "bg-indigo-950/40",
      dropoff: `${100 - ctr}% bounced before clicking`
    },
    {
      label: "REGISTRATION STARTS",
      count: funnel.registrationStarts.toLocaleString(),
      subtext: `${startRate}% clicked 'Find Project' or 'Register'`,
      icon: FileText,
      color: "text-blue-400",
      bgColor: "bg-blue-950/40",
      dropoff: `${100 - startRate}% left landing page without engaging`
    },
    {
      label: "COMPLETED REGISTRATIONS",
      count: funnel.completedRegistrations.toLocaleString(),
      subtext: `${completionRate}% form completion rate`,
      icon: CheckCircle2,
      color: "text-emerald-400",
      bgColor: "bg-emerald-950/40",
      dropoff: `${(100 - completionRate).toFixed(1)}% dropped off inside form/diagnostic`
    },
    {
      label: "PEER SHARES INITIATED",
      count: funnel.shares.toLocaleString(),
      subtext: `${shareRate}% of registrants tapped WhatsApp share`,
      icon: Share2,
      color: "text-teal-400",
      bgColor: "bg-teal-950/40",
      dropoff: `${100 - shareRate}% didn't share with peers`
    },
    {
      label: "ADDITIONAL REGISTRATIONS",
      count: `+${funnel.additionalRegistrationsFromSharing}`,
      subtext: `Viral loop yield (K = ${viralCoeff})`,
      icon: UserPlus,
      color: "text-purple-400",
      bgColor: "bg-purple-950/40",
      dropoff: "Compound organic lift"
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              CAMPAIGN FUNNEL & CONVERSION ARCHITECTURE
            </h3>
            <span className="text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">
              SIMULATION / DEMO DATA
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Tracking visitor drop-offs from community broadcast to peer viral conversion.
          </p>
        </div>

        {/* CAC & Unit Economics Badge */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] text-slate-400 font-mono block">SIMULATED CAC</span>
            <span className="text-sm font-extrabold text-emerald-400 font-mono">₹{currentCAC} / reg</span>
            <span className="text-[9px] text-slate-500 block">Target: ≤ ₹4.00</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] text-slate-400 font-mono block">OVERALL CONV RATE</span>
            <span className="text-sm font-extrabold text-indigo-400 font-mono">{overallConversion}%</span>
            <span className="text-[9px] text-slate-500 block">Clicks → Regs</span>
          </div>
        </div>
      </div>

      {/* Visual Funnel Step Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 pt-2">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div 
              key={stage.label}
              className={`border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between relative ${stage.bgColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${stage.color}`} />
                </div>

                <div className="text-2xl font-black text-white font-mono tracking-tight mt-1">
                  {stage.count}
                </div>

                <span className="text-xs font-bold text-slate-200 block mt-1 leading-snug">
                  {stage.label}
                </span>

                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                  {stage.subtext}
                </p>
              </div>

              {stage.dropoff && (
                <div className="mt-3 pt-2 border-t border-slate-800/60 text-[9px] font-mono text-slate-400 flex items-center gap-1">
                  <span>↳</span>
                  <span className="truncate">{stage.dropoff}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Drop-off Diagnostics Callout (Growth Operator Insight) */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white block">Drop-Off Diagnostic (Day 5 Focus):</span>
            <span className="text-slate-400 leading-relaxed">
              Main friction was form abandonment on question 4 of AI Project Finder. Introducing pre-selected defaults lowered drop-off by 14.2%.
            </span>
          </div>
        </div>

        <div className="font-mono text-[11px] text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-lg shrink-0">
          Source Breakdown: {funnel.campusCommunityRegistrations} Campus + {funnel.additionalRegistrationsFromSharing} Peer + {funnel.directOutreachRegistrations} Direct
        </div>
      </div>

    </div>
  );
};
