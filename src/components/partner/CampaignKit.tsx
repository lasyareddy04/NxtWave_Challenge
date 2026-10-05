import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Linkedin, 
  Mic, 
  Mail, 
  Image as ImageIcon, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';
import { CAMPAIGN_KIT_TEMPLATES } from '../../data/campaignData';
import { useCampaign } from '../../context/CampaignContext';

interface CampaignKitProps {
  partnerSlug: string;
}

export const CampaignKit: React.FC<CampaignKitProps> = ({ partnerSlug }) => {
  const { showToast } = useCampaign();
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'whatsappShort' | 'club' | 'linkedin' | 'email' | 'poster'>('whatsapp');
  const [copied, setCopied] = useState(false);

  const fullTrackingLink = `${window.location.origin}/?source=${partnerSlug}`;

  const getActiveAsset = () => {
    switch (activeTab) {
      case 'whatsapp':
        return {
          title: "WhatsApp Message (Standard)",
          channel: "Class Groups & Club WhatsApp Chats",
          tip: "Post between 9:00 AM – 11:00 AM for peak student view rates.",
          rawText: CAMPAIGN_KIT_TEMPLATES.whatsappLong.text
        };
      case 'whatsappShort':
        return {
          title: "Short WhatsApp / Telegram Message",
          channel: "High-velocity broadcast channels & CR forwards",
          tip: "Ideal for fast 1-line forwards to class groups.",
          rawText: CAMPAIGN_KIT_TEMPLATES.whatsappShort.text
        };
      case 'club':
        return {
          title: "20-Second Spoken Announcement",
          channel: "In-person club meetings & Discord voice calls",
          tip: "Speak directly during opening or closing announcements.",
          rawText: CAMPAIGN_KIT_TEMPLATES.clubAnnouncement.text
        };
      case 'linkedin':
        return {
          title: "LinkedIn Post Template",
          channel: "Personal student feeds & official club pages",
          tip: "Tag 2-3 final year peers to trigger algorithmic reach.",
          rawText: CAMPAIGN_KIT_TEMPLATES.linkedinPost.text
        };
      case 'email':
        return {
          title: "Student-Friendly Email Announcement",
          channel: "Club mailing list or placement email alerts",
          tip: `Subject: ${CAMPAIGN_KIT_TEMPLATES.emailTemplate.subject}`,
          rawText: `Subject: ${CAMPAIGN_KIT_TEMPLATES.emailTemplate.subject}\n\n${CAMPAIGN_KIT_TEMPLATES.emailTemplate.text}`
        };
      case 'poster':
        return {
          title: "Creative Poster Specification",
          channel: "Instagram Stories & WhatsApp Statuses (9:16)",
          tip: "Pair with your custom link in story sticker.",
          rawText: `${CAMPAIGN_KIT_TEMPLATES.posterCreative.headline}\n${CAMPAIGN_KIT_TEMPLATES.posterCreative.subheadline}\nRegister: [UNIQUE LINK]`
        };
    }
  };

  const asset = getActiveAsset();
  const processedText = asset.rawText.replace(/\[UNIQUE LINK\]/g, fullTrackingLink);

  const handleCopy = () => {
    navigator.clipboard.writeText(processedText);
    setCopied(true);
    showToast("Copied promotional asset to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
    { id: 'whatsappShort', label: 'Short Message', icon: Send },
    { id: 'club', label: 'Club Pitch (20s)', icon: Mic },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'poster', label: 'Poster Spec', icon: ImageIcon },
  ];

  return (
    <div id="campaign-kit" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight">
            Turnkey Promotional Kit
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Select a channel below, click copy, and share with your community. No copy drafting required.
          </p>
        </div>

        <div className="text-xs font-mono text-indigo-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
          Link: <span className="font-semibold text-white">?source={partnerSlug}</span>
        </div>
      </div>

      {/* Elegant Channel Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Channel Asset Viewer */}
      <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/60">
          <div>
            <h3 className="text-sm font-bold text-white">{asset.title}</h3>
            <span className="text-[11px] text-slate-400 font-mono">Channel: {asset.channel}</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-sm transition-all self-start sm:self-auto"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Template'}</span>
          </button>
        </div>

        {/* Copy Text Preview Box */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 text-xs font-mono text-slate-200 whitespace-pre-line leading-relaxed select-all max-h-72 overflow-y-auto">
          {processedText}
        </div>

        {/* Best Practice Tip */}
        <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
          <span>💡 <strong>Operator Tip:</strong> {asset.tip}</span>
          <span className="font-mono text-[10px] text-indigo-400">100% Attribution Tagged</span>
        </div>

      </div>

    </div>
  );
};
