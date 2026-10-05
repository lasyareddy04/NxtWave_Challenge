import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Laptop
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { AIProjectFinder } from './AIProjectFinder';
import { RegistrationModal } from './RegistrationModal';
import { AIProjectRecommendation } from '../../types/campaign';

export const StudentLandingPage: React.FC = () => {
  const { 
    experiments, 
    activeSource, 
    viewportMode, 
    partners 
  } = useCampaign();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<AIProjectRecommendation | null>(null);

  // Experiment 1: Message
  const exp1 = experiments.find(e => e.id === 'exp_message');
  const isOutcomeHeadline = exp1?.activeVariant === 'B';

  const matchedPartner = partners.find(p => p.sourceSlug === activeSource);

  const handleOpenRegistration = (project?: AIProjectRecommendation) => {
    setSelectedProject(project || null);
    setIsModalOpen(true);
  };

  const content = (
    <div className="space-y-16 pb-16">
      
      {/* Subtle College Welcome Banner if from campus partner link */}
      {matchedPartner && (
        <div className="max-w-2xl mx-auto bg-indigo-950/40 border border-indigo-500/20 rounded-xl px-4 py-2 flex items-center justify-between text-xs text-indigo-300">
          <span>Priority campus invitation for <strong>{matchedPartner.college}</strong></span>
          <span className="font-mono text-[10px] text-indigo-400">Pass: {matchedPartner.sourceSlug}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center pt-6 sm:pt-12 max-w-3xl mx-auto px-4">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>For Final-Year Engineering Students</span>
        </div>

        {/* Dynamic Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {isOutcomeHeadline ? (
            <>
              Don't Graduate Without an <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">AI Project</span> You Can Actually Demo.
            </>
          ) : (
            <>
              BUILD YOUR FIRST <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">AI PROJECT</span> IN 60 MINUTES
            </>
          )}
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-lg text-slate-300 font-medium max-w-xl mx-auto mb-8">
          "Don't just learn AI. Build something you can actually show."
        </p>

        {/* 3 Core Outcomes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 w-full sm:w-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Practical AI project idea</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 w-full sm:w-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Working code prototype</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 w-full sm:w-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Live demo for recruiters</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#ai-project-finder"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all"
          >
            <span>Find My AI Project →</span>
          </a>

          <button
            type="button"
            onClick={() => handleOpenRegistration()}
            className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium px-4 py-3 transition-colors"
          >
            Direct Register Free
          </button>
        </div>

      </section>

      {/* AI Project Finder Hook */}
      <section className="max-w-2xl mx-auto px-4">
        <AIProjectFinder onSelectProjectToRegister={handleOpenRegistration} />
      </section>

      {/* Clean 60-Minute Workshop Agenda */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono uppercase text-indigo-400 tracking-wider font-semibold">
              Live Agenda
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              What happens in the 60 minutes?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/70 border border-slate-800/60 rounded-xl p-3.5">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mb-1">00 – 15 MINS</span>
              <h4 className="font-semibold text-white">Deconstruct the Architecture</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Pick a high-signal problem interviewers care about.</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/60 rounded-xl p-3.5">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mb-1">15 – 35 MINS</span>
              <h4 className="font-semibold text-white">Build Prototype Live</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Connect LLM APIs and lightweight UI step-by-step.</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/60 rounded-xl p-3.5">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mb-1">35 – 50 MINS</span>
              <h4 className="font-semibold text-white">Deploy & Test Public URL</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">Get a live link you can put on your resume.</p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/60 rounded-xl p-3.5">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mb-1">50 – 60 MINS</span>
              <h4 className="font-semibold text-white">Tech Interview Q&A</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">How to pitch this project to hiring managers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedProject={selectedProject}
      />

    </div>
  );

  // If mobile preview
  if (viewportMode === 'mobile') {
    return (
      <div className="py-8 flex flex-col items-center justify-center bg-slate-950">
        <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center gap-1.5">
          <Laptop className="w-3.5 h-3.5 text-indigo-400" />
          <span>Mobile Device Simulation</span>
        </div>
        <div className="w-[380px] h-[800px] overflow-y-auto bg-slate-950 border-[5px] border-slate-800 rounded-[40px] shadow-2xl p-4">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {content}
    </div>
  );
};
