import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { AIProjectRecommendation, RegisteredStudent } from '../../types/campaign';
import { PeerSharingSuccess } from './PeerSharingSuccess';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProject?: AIProjectRecommendation | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedProject 
}) => {
  const { registerStudent, activeSource, partners } = useCampaign();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: 'Amrita Vishwa Vidyapeetham',
    branch: 'Computer Science',
    passingYear: '2027'
  });

  const [registeredStudent, setRegisteredStudent] = useState<RegisteredStudent | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid college or personal email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const studentRecord: Omit<RegisteredStudent, 'id' | 'timestamp' | 'source'> = {
      fullName: formData.fullName,
      email: formData.email,
      college: formData.college,
      branch: formData.branch,
      passingYear: formData.passingYear,
      recommendedProject: preselectedProject?.title,
      sharedWithPeer: false
    };

    registerStudent(studentRecord);

    setRegisteredStudent({
      ...studentRecord,
      id: `reg_${Date.now()}`,
      timestamp: 'Just now',
      source: activeSource
    });
  };

  const handleCloseAndReset = () => {
    setRegisteredStudent(null);
    setFormData({
      fullName: '',
      email: '',
      college: 'Amrita Vishwa Vidyapeetham',
      branch: 'Computer Science',
      passingYear: '2027'
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={handleCloseAndReset}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {registeredStudent ? (
          <PeerSharingSuccess student={registeredStudent} onClose={handleCloseAndReset} />
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold uppercase">
                  100% Free Live Workshop
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Pass
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Claim Your Workshop Seat
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Build your first AI prototype in 60 minutes with live instructor guidance.
              </p>
            </div>

            {/* Selected Project banner if coming from AI Hook */}
            {preselectedProject && (
              <div className="bg-indigo-950/50 border border-indigo-500/30 rounded-xl p-3 text-xs flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-indigo-300 uppercase font-mono font-medium block">
                    Your Selected Project Track
                  </span>
                  <span className="font-semibold text-white">{preselectedProject.title}</span>
                </div>
                <span className="text-[10px] bg-indigo-900/80 text-indigo-300 font-mono px-2 py-1 rounded">
                  {preselectedProject.difficulty}
                </span>
              </div>
            )}

            {/* Source Attribution indicator */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-xl px-3.5 py-2 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-indigo-400" /> Attribution:
              </span>
              <span className="text-indigo-300 font-medium">?source={activeSource}</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
                {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  College or Personal Email *
                </label>
                <input
                  type="email"
                  placeholder="name@college.edu or name@gmail.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
                {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    College / University
                  </label>
                  <select
                    value={formData.college}
                    onChange={e => setFormData({ ...formData, college: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    {partners.map(p => (
                      <option key={p.id} value={p.college}>{p.college}</option>
                    ))}
                    <option value="Other Engineering College">Other Engineering College</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Engineering Branch
                  </label>
                  <select
                    value={formData.branch}
                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="Computer Science">Computer Science (CSE)</option>
                    <option value="Information Tech">Information Technology (IT)</option>
                    <option value="AI & Data Science">AI & Data Science (AIDS)</option>
                    <option value="Electronics & Comm">Electronics & Comm (ECE)</option>
                    <option value="Electrical (EEE)">Electrical & Electronics (EEE)</option>
                    <option value="Mechanical">Mechanical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Other">Other Branch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Passing Out Year
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['2027 (Final Year)', '2028 (Pre-Final)'].map(year => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setFormData({ ...formData, passingYear: year.split(' ')[0] })}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all ${
                        formData.passingYear === year.split(' ')[0]
                          ? 'border-indigo-500 bg-indigo-500/10 text-white ring-1 ring-indigo-500'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-xl shadow-indigo-600/30 transition-all transform active:scale-95"
              >
                <span>Confirm My Free Seat →</span>
              </button>

              <p className="text-[10px] text-center text-slate-500">
                🔒 No credit card required • Instant access link sent upon registration
              </p>
            </form>

          </div>
        )}
      </div>
    </div>
  );
};
