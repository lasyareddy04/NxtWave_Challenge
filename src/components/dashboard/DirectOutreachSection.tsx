import React, { useState } from 'react';
import { 
  Send, 
  Linkedin, 
  MessageSquare, 
  Copy, 
  Check, 
  Target, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { DIRECT_OUTREACH_TEMPLATES } from '../../data/campaignData';
import { useCampaign } from '../../context/CampaignContext';

export const DirectOutreachSection: React.FC = () => {
  const { showToast } = useCampaign();
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const directTrackingLink = `${window.location.origin}/?source=direct_outreach`;

  const handleCopy = (text: string, idx: number, channel: string) => {
    const processed = text.replace(/\[UNIQUE LINK\]/g, directTrackingLink);
    navigator.clipboard.writeText(processed);
    setCopiedIdx(idx);
    showToast(`Copied ${channel} template to clipboard!`);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Send className="w-5 h-5 text-purple-400" />
              <span>ENGINE 3: TARGETED DIRECT OUTREACH</span>
            </h3>
            <span className="text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">
              Target: 100 Registrations
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Reaching high-intent final-year students via LinkedIn, CR networks, and placement preparation groups.
          </p>
        </div>

        <div className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
          Channel Mix: LinkedIn (40) • Telegram/Discord (35) • CR DMs (25)
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DIRECT_OUTREACH_TEMPLATES.map((tpl, idx) => {
          const processed = tpl.text.replace(/\[UNIQUE LINK\]/g, directTrackingLink);
          return (
            <div 
              key={idx}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{tpl.channel}</span>
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono">Target: {tpl.recipient}</span>
                  </div>

                  <button
                    onClick={() => handleCopy(tpl.text, idx, tpl.channel)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="Copy template"
                  >
                    {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
                  {processed}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                <span>Attributed Source:</span>
                <span className="text-purple-300">?source=direct_outreach</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulation Banner Notice */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-mono text-[11px] text-amber-300">
          ⚠️ SIMULATION PROTOCOL: Do not pretend these messages were actually sent. Demonstrates operational outreach architecture.
        </span>
        <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
          Conversion Expectation: 15-20% from targeted 1:1 DMs
        </span>
      </div>

    </div>
  );
};
