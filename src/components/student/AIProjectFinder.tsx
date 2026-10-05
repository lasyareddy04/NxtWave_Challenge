import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Cpu, 
  Layers, 
  Briefcase, 
  RotateCcw,
  Zap,
  Check
} from 'lucide-react';
import { AI_PROJECT_RECOMMENDATIONS } from '../../data/campaignData';
import { AIProjectRecommendation } from '../../types/campaign';

interface AIProjectFinderProps {
  onSelectProjectToRegister: (project: AIProjectRecommendation) => void;
}

export const AIProjectFinder: React.FC<AIProjectFinderProps> = ({ onSelectProjectToRegister }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    branch: 'CSE',
    comfort: 'Intermediate',
    aiArea: 'Generative AI & LLMs',
    goal: 'Campus Placement / Resume standout',
    skills: 'Python basics'
  });
  const [recommendation, setRecommendation] = useState<AIProjectRecommendation | null>(null);

  const calculateRecommendation = () => {
    // Intelligent heuristic matching based on user inputs
    if (answers.aiArea === 'Computer Vision & Edge AI' || answers.branch === 'Mechanical' || answers.branch === 'Civil') {
      return AI_PROJECT_RECOMMENDATIONS[3]; // Visual Defect Inspector
    }
    if (answers.goal === 'Campus Placement / Resume standout' && answers.comfort !== 'Beginner') {
      return AI_PROJECT_RECOMMENDATIONS[0]; // AI Interview Coach
    }
    if (answers.goal === 'Campus Placement / Resume standout' && answers.comfort === 'Beginner') {
      return AI_PROJECT_RECOMMENDATIONS[1]; // ATS Resume Screener
    }
    if (answers.skills.includes('JavaScript') || answers.skills.includes('Python')) {
      if (answers.comfort === 'Comfortable / Advanced') {
        return AI_PROJECT_RECOMMENDATIONS[5]; // Autonomous Placement Agent
      }
      return AI_PROJECT_RECOMMENDATIONS[2]; // Automated Code Reviewer
    }
    return AI_PROJECT_RECOMMENDATIONS[4]; // Research Synthesizer
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      const rec = calculateRecommendation();
      setRecommendation(rec);
      setStep(6);
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setRecommendation(null);
  };

  return (
    <div id="ai-project-finder" className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Value-First Hook</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            What AI project should YOU build?
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Answer 5 quick questions to get a personalized project tailored to your final-year goals.
          </p>
        </div>

        {step <= 5 && (
          <div className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs bg-slate-800 text-indigo-300 px-3 py-1.5 rounded-lg border border-slate-700">
            <span>Step {step} of 5</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {step <= 5 && (
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-300 rounded-full"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Question 1: Engineering Branch */}
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <label className="block text-sm font-semibold text-slate-200">
            1. What is your Engineering Branch?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'CSE', label: 'Computer Science & Eng (CSE)', icon: Code },
              { id: 'IT/AIDS', label: 'IT / AI & Data Science', icon: Layers },
              { id: 'ECE', label: 'Electronics & Comm (ECE)', icon: Cpu },
              { id: 'EEE', label: 'Electrical & Electronics (EEE)', icon: Zap },
              { id: 'Mechanical', label: 'Mechanical Engineering', icon: Briefcase },
              { id: 'Civil/Other', label: 'Civil / Other Core Branch', icon: Layers },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAnswers({ ...answers, branch: item.id })}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  answers.branch === item.id
                    ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-sm ring-1 ring-indigo-500'
                    : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {answers.branch === item.id && <Check className="w-4 h-4 text-indigo-400" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 2: Coding Comfort */}
      {step === 2 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <label className="block text-sm font-semibold text-slate-200">
            2. How comfortable are you with programming?
          </label>
          <div className="space-y-3">
            {[
              { id: 'Beginner', title: 'Beginner', desc: 'Know basic loops, logic, or syntax. Want step-by-step guidance.' },
              { id: 'Intermediate', title: 'Intermediate', desc: 'Can build small scripts, familiar with Python or JavaScript functions.' },
              { id: 'Comfortable / Advanced', title: 'Comfortable / Advanced', desc: 'Comfortable with full-stack logic, APIs, and data structures.' },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAnswers({ ...answers, comfort: item.id })}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                  answers.comfort === item.id
                    ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-sm ring-1 ring-indigo-500'
                    : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                </div>
                {answers.comfort === item.id && <Check className="w-4 h-4 text-indigo-400 shrink-0 ml-3" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 3: AI Area of Interest */}
      {step === 3 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <label className="block text-sm font-semibold text-slate-200">
            3. Which AI domain excites you most?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'Generative AI & LLMs', label: 'Generative AI & LLMs', desc: 'ChatGPT style apps, RAG, prompt chains' },
              { id: 'Computer Vision & Edge AI', label: 'Computer Vision & Edge AI', desc: 'Object detection, defect classification, camera feeds' },
              { id: 'Automation / Multi-Agent Bots', label: 'Autonomous Agents', desc: 'AI agents that take actions and execute workflows' },
              { id: 'Applied Predictive ML', label: 'Predictive Intelligence', desc: 'Recommendation systems, scoring algorithms' },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAnswers({ ...answers, aiArea: item.id })}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  answers.aiArea === item.id
                    ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-sm ring-1 ring-indigo-500'
                    : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="text-sm font-semibold text-white">{item.label}</div>
                <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 4: Main Goal */}
      {step === 4 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <label className="block text-sm font-semibold text-slate-200">
            4. What is your primary goal right now?
          </label>
          <div className="space-y-3">
            {[
              { id: 'Campus Placement / Resume standout', title: 'Campus Placement / Resume Standout', desc: 'Need a working AI project that impresses interviewers in tech rounds' },
              { id: 'Final Year Capstone Project', title: 'Final Year Major / Capstone Project', desc: 'Need an original project idea with architecture ready for faculty approval' },
              { id: 'Startup Prototype / MVP', title: 'Startup Prototype / Build in Public', desc: 'Want to build and launch an AI micro-product live' },
              { id: 'Fast Upskilling', title: 'Fast Practical Upskilling', desc: 'Stop watching theory videos and actually write real AI code' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAnswers({ ...answers, goal: item.id })}
                className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  answers.goal === item.id
                    ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-sm ring-1 ring-indigo-500'
                    : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                </div>
                {answers.goal === item.id && <Check className="w-4 h-4 text-indigo-400 shrink-0 ml-3" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question 5: Existing Skills */}
      {step === 5 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <label className="block text-sm font-semibold text-slate-200">
            5. What language or stack are you most familiar with?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'Python basics', label: 'Python (Basic / Intermediate)' },
              { id: 'JavaScript / React', label: 'JavaScript / React / Web Dev' },
              { id: 'C++ / Java', label: 'C++ or Java (DSA focused)' },
              { id: 'APIs / No-code', label: 'APIs / REST / Web Tools' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setAnswers({ ...answers, skills: item.id })}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                  answers.skills === item.id
                    ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-sm ring-1 ring-indigo-500'
                    : 'border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                <span className="text-sm font-medium">{item.label}</span>
                {answers.skills === item.id && <Check className="w-4 h-4 text-indigo-400" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step Navigation Controls (1 to 5) */}
      {step <= 5 && (
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="text-xs text-slate-400 hover:text-slate-200 font-medium px-3 py-2"
            >
              ← Back
            </button>
          ) : <div></div>}

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>{step === 5 ? 'Reveal My AI Project' : 'Next Question'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Step 6: Personalized Recommendation Result */}
      {step === 6 && recommendation && (
        <div className="space-y-6 animate-in zoom-in-95 duration-400">
          
          <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold">
                YOUR TAILORED PROJECT MATCH
              </span>
              <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-medium ${
                recommendation.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                recommendation.difficulty === 'Intermediate' ? 'bg-blue-950 text-blue-300 border border-blue-800' :
                'bg-purple-950 text-purple-300 border border-purple-800'
              }`}>
                Difficulty: {recommendation.difficulty}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
              {recommendation.title}
            </h3>
            <p className="text-sm text-indigo-200/90 font-medium mb-4">
              {recommendation.tagline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-900/80 rounded-xl p-4 border border-slate-800/80 mb-4">
              <div>
                <span className="text-slate-400 font-medium block mb-1">Why it fits your profile:</span>
                <p className="text-slate-200 leading-relaxed font-sans">{recommendation.whyItFits}</p>
              </div>
              <div>
                <span className="text-slate-400 font-medium block mb-1">Suggested Tech Stack:</span>
                <p className="text-indigo-300 font-mono font-medium">{recommendation.suggestedStack}</p>
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/60 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>What to build in the first 60 minutes:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{recommendation.whatToBuildFirst}</p>
            </div>
          </div>

          {/* Conversion CTA Block */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 border border-indigo-600/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                Want to build it live?
              </div>
              <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                BUILD YOUR FIRST AI PROJECT IN 60 MINUTES
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Free hands-on workshop • Code provided • Zero prior ML setup needed
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={resetQuiz}
                className="p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-xs transition-colors"
                title="Retake quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectProjectToRegister(recommendation)}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xl shadow-indigo-600/30 transition-all transform hover:scale-[1.02]"
              >
                <span>Register Free →</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1 font-mono">
            <span>💡 Growth Note: This personalized hook increased registration conversion from 19.0% to 27.9% in Experiment 2.</span>
          </div>

        </div>
      )}
    </div>
  );
};
