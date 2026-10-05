import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Users, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { RegisteredStudent } from '../../types/campaign';

interface PeerSharingSuccessProps {
  student: RegisteredStudent;
  onClose: () => void;
}

export const PeerSharingSuccess: React.FC<PeerSharingSuccessProps> = ({ student, onClose }) => {
  const { activeSource, showToast } = useCampaign();
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Peer share link with attributed source param
  const peerShareSource = `peer_share_${student.fullName.toLowerCase().replace(/\s+/g, '_')}`;
  const shareLink = `${window.location.origin}/?source=${peerShareSource}`;

  const shareText = `I just registered for NxtWave’s Build Your First AI Project in 60 Minutes workshop.

If you're a final-year engineering student, you can join too:

${shareLink}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    showToast("Share text copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    setShared(true);
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
    showToast("Triggered WhatsApp peer share!");
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
      
      {/* Celebration Header */}
      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/10">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div>
        <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono px-3 py-1 rounded-full font-medium">
          REGISTRATION CONFIRMED
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
          You're in! 🎉
        </h3>
        <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
          We’ve reserved your free seat, <strong className="text-white">{student.fullName}</strong>. Check <span className="text-indigo-300 font-mono text-xs">{student.email}</span> for calendar invite and workshop prep.
        </p>
      </div>

      {/* Recommended project pill if selected */}
      {student.recommendedProject && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 max-w-md mx-auto text-xs text-slate-300 flex items-center justify-between">
          <span className="text-slate-400">Your Workshop Focus:</span>
          <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            {student.recommendedProject}
          </span>
        </div>
      )}

      {/* Peer Sharing Engine Card (Part 9) */}
      <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 max-w-lg mx-auto text-left shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          <Users className="w-3.5 h-3.5 text-indigo-400" />
          <span>Student-to-Student Sharing Engine</span>
        </div>

        <h4 className="text-lg font-bold text-white tracking-tight">
          Know someone who still needs an AI project?
        </h4>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          AI projects are built faster with a project partner. Invite a friend or project teammate so you can build and debug together in the session.
        </p>

        {/* Share Copy Preview */}
        <div className="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 font-mono relative">
          <p className="whitespace-pre-line text-[11px] leading-relaxed select-all">
            {shareText}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppShare}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Share with a Project Partner</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium py-3 px-4 rounded-xl transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Growth Philosophy Note */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
          <span>Engine 2 Target: 100 Registrations</span>
          <span className="font-mono text-indigo-400">Zero-friction peer loop</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={onClose}
          className="text-xs text-slate-400 hover:text-slate-200 underline font-medium"
        >
          Close & Return to Home
        </button>
      </div>

    </div>
  );
};
