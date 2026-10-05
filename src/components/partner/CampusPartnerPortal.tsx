import React, { useState } from 'react';
import { 
  Target, 
  Copy, 
  Check, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { CampaignKit } from './CampaignKit';

export const CampusPartnerPortal: React.FC = () => {
  const { 
    partners, 
    selectedPartnerForKit, 
    setSelectedPartnerForKit, 
    showToast,
    simulateQuickRegistration
  } = useCampaign();

  const [copiedLink, setCopiedLink] = useState(false);

  const activePartner = partners.find(p => p.sourceSlug === selectedPartnerForKit) || partners[0];
  const fullTrackingLink = `${window.location.origin}/?source=${activePartner.sourceSlug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullTrackingLink);
    setCopiedLink(true);
    showToast("Attributed campaign link copied to clipboard!");
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const progressPct = Math.min(100, Math.round((activePartner.actualRegistrations / activePartner.targetRegistrations) * 100));
  const isTargetMet = activePartner.actualRegistrations >= activePartner.targetRegistrations;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Elegant Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono text-indigo-400 font-semibold tracking-wider uppercase bg-indigo-950/60 border border-indigo-800/60 px-3 py-1 rounded-full">
          Campus Distribution Portal
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          BRING THIS WORKSHOP TO YOUR CAMPUS
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Help 15+ final-year students from your community build their first AI project.
        </p>

        {/* Campus Selector */}
        <div className="mt-5 inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-1.5 text-xs">
          <span className="text-slate-400 pl-2">Community:</span>
          <select
            value={selectedPartnerForKit}
            onChange={(e) => setSelectedPartnerForKit(e.target.value)}
            className="bg-slate-950 text-white font-medium border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs outline-none cursor-pointer"
          >
            {partners.map(p => (
              <option key={p.id} value={p.sourceSlug}>
                {p.name} ({p.college})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Target Progress & Link in 2 Focused Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* 1. Target Progress */}
        <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" /> Community Target
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                isTargetMet ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                activePartner.actualRegistrations >= 7 ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' :
                'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {isTargetMet ? 'GOAL MET' : activePartner.actualRegistrations >= 7 ? 'ON TRACK' : 'NEEDS ATTENTION'}
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">{activePartner.actualRegistrations}</span>
              <span className="text-sm text-slate-400 font-mono">/ 15 registrations</span>
            </div>

            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 mb-2">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${progressPct}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>{activePartner.clicks} Clicks</span>
              <span>{activePartner.conversionRate}% Conversion</span>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono text-[10px]">Demo Data</span>
            <button
              onClick={() => simulateQuickRegistration(activePartner.sourceSlug)}
              className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300"
            >
              +1 Test Registration
            </button>
          </div>
        </div>

        {/* 2. Attributed Link */}
        <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase text-indigo-400 font-semibold">
                YOUR CAMPAIGN LINK
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                Source Attribution
              </span>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-3">
              <p className="text-xs font-mono text-indigo-300 truncate select-all">
                {fullTrackingLink}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Registrations through this link will be attributed directly to your community. No referral codes or tiers needed.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/60">
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied Campaign Link!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Tabbed Campaign Kit */}
      <CampaignKit partnerSlug={activePartner.sourceSlug} />

    </div>
  );
};
