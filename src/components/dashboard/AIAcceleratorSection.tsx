import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Copy, 
  Check, 
  Zap, 
  Send, 
  Wand2, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';

export const AIAcceleratorSection: React.FC = () => {
  const { showToast, activeSource } = useCampaign();
  
  const [selectedClubType, setSelectedClubType] = useState('Placement Committee');
  const [selectedAngle, setSelectedAngle] = useState('Placement Anxiety & Resume Standout');
  const [copied, setCopied] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const clubVariants: Record<string, Record<string, string>> = {
    'Placement Committee': {
      'Placement Anxiety & Resume Standout': `Attention Final-Year Engineers 📢

Recruiters this placement season are skipping candidates with generic "weather prediction" or "movie recommendation" projects. 

NxtWave is running a dedicated 60-minute practical session:
BUILD YOUR FIRST AI PROJECT IN 60 MINUTES

In 1 hour, build & deploy an AI prototype recruiters can actually test live.
Claim our campus priority pass:
[UNIQUE LINK]`,
      'Hands-on Technical Building': `Placement Notice for Final Years:
Stop just watching tutorials. Technical interviewers want to see how you integrate AI APIs, handle tokens, and deploy.

Join NxtWave's free live sprint: BUILD YOUR FIRST AI PROJECT IN 60 MINUTES.
Code provided. Working demo guaranteed.
Register: [UNIQUE LINK]`,
      'Faculty Approved Capstone Idea': `Final-Year Students:
Need an industry-grade AI project architecture that easily passes company tech rounds and major project panels?

Attend NxtWave's 60-minute build session: [UNIQUE LINK]`
    },
    'Mechanical & Core Engineering Society': {
      'Placement Anxiety & Resume Standout': `Calling all Mechanical / Core Final Years ⚙️🤖

Want to crack high-paying core tech & automation roles? Having an applied Computer Vision / AI defect detection project gives you a massive unfair advantage over standard CAD resumes.

Build your first working AI project in 60 minutes with NxtWave:
[UNIQUE LINK]`,
      'Hands-on Technical Building': `Mechanical & Mechatronics Engineers:
Learn how to train and deploy computer vision models for industrial automation in 60 minutes — zero prior Python mastery required.

Free pass for our department: [UNIQUE LINK]`,
      'Faculty Approved Capstone Idea': `Core Engineering Major Project Idea:
Turn manufacturing inspection into an automated AI pipeline. Build the prototype live in 60 mins: [UNIQUE LINK]`
    },
    'AI/ML & Data Science Club': {
      'Placement Anxiety & Resume Standout': `AI/DS Batch 2025/2026:
Having 'NumPy' and 'Scikit-Learn' on your resume is baseline. To stand out, you need deployed LLM agents and multi-modal apps.

Join NxtWave's 60-min sprint: BUILD YOUR FIRST AI PROJECT IN 60 MINUTES.
Register with our club pass: [UNIQUE LINK]`,
      'Hands-on Technical Building': `Build Beyond Jupyter Notebooks 🚀
Turn your AI experiments into a live web application in 60 minutes.
Free registration: [UNIQUE LINK]`,
      'Faculty Approved Capstone Idea': `Capstone Blueprint:
Deploy RAG pipelines & multimodal agents with live instructor walkthrough: [UNIQUE LINK]`
    },
    'Competitive Coding Society': {
      'Placement Anxiety & Resume Standout': `Final-Year Coders 💻
DSA gets you through the screening test; your AI projects get you through the hiring manager interview.

Build and launch an AI developer tooling bot in 60 minutes with NxtWave:
[UNIQUE LINK]`,
      'Hands-on Technical Building': `Ship code fast:
Connect LLM APIs, build structured output pipelines, and deploy in 60 minutes: [UNIQUE LINK]`,
      'Faculty Approved Capstone Idea': `Automated code review & AST analysis project for your portfolio. Free 60-min build: [UNIQUE LINK]`
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const template = clubVariants[selectedClubType]?.[selectedAngle] || clubVariants['Placement Committee']['Placement Anxiety & Resume Standout'];
      const replaced = template.replace(/\[UNIQUE LINK\]/g, `${window.location.origin}/?source=${activeSource}`);
      setGeneratedOutput(replaced);
      setIsGenerating(false);
      showToast("Generated club-tailored promotional copy!");
    }, 300);
  };

  const handleCopy = () => {
    if (generatedOutput) {
      navigator.clipboard.writeText(generatedOutput);
      setCopied(true);
      showToast("AI-tailored copy copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>AI ACCELERATOR ENGINE (10X VELOCITY)</span>
            </h3>
            <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
              AI as Campaign Multiplier
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            "AI accelerates the campaign rather than becoming a gimmick." Generates copy, adapts to niche clubs, and audits drop-offs.
          </p>
        </div>

        <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-xl">
          System: DISTRIBUTE → CONVERT → MEASURE → LEARN → SCALE
        </div>
      </div>

      {/* 4 Pillars of AI in this Campaign */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {[
          {
            title: "Dynamic Hook Personalization",
            desc: "Adapts student landing page headline based on campus club context (Core Mech vs CS placement)."
          },
          {
            title: "Lightweight Project Diagnostic",
            desc: "Provides instant 5-step project matching before registration to overcome commitment friction."
          },
          {
            title: "Community Copy Customizer",
            desc: "Generates tailored WhatsApp broadcasts for 20+ specialized clubs in seconds rather than hours."
          },
          {
            title: "Drop-Off Diagnostics",
            desc: "Analyzes funnel telemetry to detect drop-off stages and recommend variant reallocations."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
            <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-mono font-bold mb-2">
              0{idx + 1}
            </div>
            <span className="font-bold text-white block mb-1">{item.title}</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Interactive AI Community Copy Customizer */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-indigo-400" />
            <h4 className="text-sm font-bold text-white">
              Interactive AI Community Pitch Tailor
            </h4>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Tailor promo copy for specific student sub-audiences
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Select Target Student Community
            </label>
            <select
              value={selectedClubType}
              onChange={(e) => setSelectedClubType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
            >
              <option value="Placement Committee">Final-Year Placement Committee / Forum</option>
              <option value="Mechanical & Core Engineering Society">Mechanical & Core Engineering Society</option>
              <option value="AI/ML & Data Science Club">AI/ML & Data Science Club</option>
              <option value="Competitive Coding Society">Competitive Coding Society</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Select Psychological Angle
            </label>
            <select
              value={selectedAngle}
              onChange={(e) => setSelectedAngle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
            >
              <option value="Placement Anxiety & Resume Standout">Placement Anxiety & Resume Standout</option>
              <option value="Hands-on Technical Building">Hands-on Technical Building (No Fluff)</option>
              <option value="Faculty Approved Capstone Idea">Faculty Approved Capstone Major Project</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isGenerating ? 'Generating...' : 'Generate Tailored Broadcast with AI'}</span>
          </button>
        </div>

        {/* Output */}
        {generatedOutput && (
          <div className="mt-4 pt-4 border-t border-slate-800 animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-indigo-400 font-semibold uppercase">
                Generated WhatsApp Broadcast (Ready to Share)
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-lg border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 text-xs font-mono text-slate-200 whitespace-pre-line leading-relaxed">
              {generatedOutput}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
