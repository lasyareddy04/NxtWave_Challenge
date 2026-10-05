import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CommunityPartner, 
  GrowthExperiment, 
  RegisteredStudent, 
  FunnelData, 
  CommunityStatus 
} from '../types/campaign';
import { 
  INITIAL_PARTNERS, 
  INITIAL_EXPERIMENTS, 
  INITIAL_SIMULATED_STUDENTS 
} from '../data/campaignData';

type ViewMode = 'student' | 'partner' | 'control_room';

interface CampaignContextType {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  viewportMode: 'desktop' | 'mobile';
  setViewportMode: (mode: 'desktop' | 'mobile') => void;
  activeSource: string;
  setActiveSource: (source: string) => void;
  partners: CommunityPartner[];
  setPartners: React.Dispatch<React.SetStateAction<CommunityPartner[]>>;
  experiments: GrowthExperiment[];
  toggleExperimentVariant: (expId: string, variant: 'A' | 'B') => void;
  students: RegisteredStudent[];
  funnel: FunnelData;
  registerStudent: (student: Omit<RegisteredStudent, 'id' | 'timestamp' | 'source'>) => void;
  simulateQuickRegistration: (customSource?: string) => void;
  simulateBatchRegistrations: (partnerId: string, count?: number) => void;
  resetAllData: () => void;
  updatePartnerStatus: (partnerId: string, status: CommunityStatus) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  selectedPartnerForKit: string;
  setSelectedPartnerForKit: (slug: string) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const CampaignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewMode>('student');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeSource, setActiveSource] = useState<string>('campus_amrita_ai');
  const [selectedPartnerForKit, setSelectedPartnerForKit] = useState<string>('campus_amrita_ai');
  const [partners, setPartners] = useState<CommunityPartner[]>(INITIAL_PARTNERS);
  const [experiments, setExperiments] = useState<GrowthExperiment[]>(INITIAL_EXPERIMENTS);
  const [students, setStudents] = useState<RegisteredStudent[]>(INITIAL_SIMULATED_STUDENTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Derive live Funnel Data dynamically
  const campusRegs = partners.reduce((sum, p) => sum + p.actualRegistrations, 0);
  const peerRegs = students.filter(s => s.source.startsWith('peer_share') || s.sharedWithPeer).length * 4; // simulated loop
  const directRegs = students.filter(s => s.source.startsWith('direct_') || s.source === 'direct_outreach').length * 5 + 28;
  const totalCompleted = campusRegs + peerRegs + directRegs;

  const totalClicks = partners.reduce((sum, p) => sum + p.clicks, 0) + 140;
  const registrationStarts = Math.round(totalClicks * 0.72);
  const sharesCount = Math.round(totalCompleted * 0.45);

  const funnel: FunnelData = {
    reach: 3840,
    clicks: totalClicks,
    registrationStarts: registrationStarts,
    completedRegistrations: totalCompleted,
    shares: sharesCount,
    additionalRegistrationsFromSharing: peerRegs,
    directOutreachRegistrations: directRegs,
    campusCommunityRegistrations: campusRegs
  };

  const toggleExperimentVariant = (expId: string, variant: 'A' | 'B') => {
    setExperiments(prev => prev.map(exp => {
      if (exp.id === expId) {
        return { ...exp, activeVariant: variant };
      }
      return exp;
    }));
    showToast(`Experiment updated: active variant is now Variant ${variant}`);
  };

  const updatePartnerStatus = (partnerId: string, status: CommunityStatus) => {
    setPartners(prev => prev.map(p => p.id === partnerId ? { ...p, status } : p));
    showToast(`Updated status for ${partnerId} to ${status}`);
  };

  const registerStudent = (studentData: Omit<RegisteredStudent, 'id' | 'timestamp' | 'source'>) => {
    const newStudent: RegisteredStudent = {
      ...studentData,
      id: `reg_${Date.now()}`,
      timestamp: 'Just now',
      source: activeSource,
      sharedWithPeer: false
    };

    setStudents(prev => [newStudent, ...prev]);

    // Update partner attribution if matching source
    setPartners(prev => prev.map(p => {
      if (p.sourceSlug === activeSource) {
        const newActual = p.actualRegistrations + 1;
        const newClicks = p.clicks + 1;
        return {
          ...p,
          actualRegistrations: newActual,
          clicks: newClicks,
          conversionRate: Math.round((newActual / newClicks) * 1000) / 10
        };
      }
      return p;
    }));

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    showToast(`Registration confirmed for ${newStudent.fullName} (Attributed to: ${activeSource})`);
  };

  const simulateQuickRegistration = (customSource?: string) => {
    const randomColleges = [
      { name: "Amrita Vishwa Vidyapeetham", slug: "campus_amrita_ai" },
      { name: "VIT Vellore", slug: "campus_vit_codechef" },
      { name: "Manipal Institute of Tech", slug: "campus_mit_placement" },
      { name: "SRM IST Chennai", slug: "campus_srm_genai" },
      { name: "PES University", slug: "campus_pes_cse_cr" }
    ];
    const firstNames = ["Aaditya", "Sneha", "Kiran", "Vikram", "Rhea", "Manish", "Tara", "Nikhil"];
    const lastNames = ["Iyer", "Nair", "Patel", "Reddy", "Gupta", "Kulkarni", "Sharma"];
    const branches = ["Computer Science", "Information Tech", "AI & Data Science", "ECE", "Mechanical"];
    const projects = ["AI Interview Coach", "Smart AI Resume Screener", "Automated Code Reviewer", "Visual Defect Inspector"];

    const chosen = randomColleges[Math.floor(Math.random() * randomColleges.length)];
    const targetSource = customSource || chosen.slug;
    const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const newStudent: RegisteredStudent = {
      id: `sim_${Date.now()}`,
      fullName: `${fName} ${lName}`,
      email: `${fName.toLowerCase()}.${lName.toLowerCase()}@${targetSource.split('_')[1] || 'college'}.edu`,
      college: chosen.name,
      branch: branches[Math.floor(Math.random() * branches.length)],
      passingYear: "2025",
      source: targetSource,
      timestamp: "Just now",
      recommendedProject: projects[Math.floor(Math.random() * projects.length)],
      sharedWithPeer: Math.random() > 0.4
    };

    setStudents(prev => [newStudent, ...prev]);

    setPartners(prev => prev.map(p => {
      if (p.sourceSlug === targetSource) {
        const newActual = p.actualRegistrations + 1;
        const newClicks = p.clicks + 2;
        return {
          ...p,
          actualRegistrations: newActual,
          clicks: newClicks,
          conversionRate: Math.round((newActual / newClicks) * 1000) / 10
        };
      }
      return p;
    }));

    showToast(`Simulated 1 student registration via ${targetSource}`);
  };

  const simulateBatchRegistrations = (partnerId: string, count: number = 7) => {
    setPartners(prev => prev.map(p => {
      if (p.id === partnerId || p.sourceSlug === partnerId) {
        const newActual = p.actualRegistrations + count;
        const newClicks = p.clicks + Math.round(count * 3.5);
        return {
          ...p,
          actualRegistrations: newActual,
          clicks: newClicks,
          conversionRate: Math.round((newActual / newClicks) * 1000) / 10,
          status: newActual >= p.targetRegistrations ? 'COMPLETED' : 'LIVE'
        };
      }
      return p;
    }));
    showToast(`Batch added +${count} registrations for ${partnerId}`);
  };

  const resetAllData = () => {
    setPartners(INITIAL_PARTNERS);
    setExperiments(INITIAL_EXPERIMENTS);
    setStudents(INITIAL_SIMULATED_STUDENTS);
    setActiveSource('campus_amrita_ai');
    showToast("Reset all demo data to baseline campaign targets");
  };

  // Sync selected partner slug with activeSource if partner view
  useEffect(() => {
    if (selectedPartnerForKit) {
      setActiveSource(selectedPartnerForKit);
    }
  }, [selectedPartnerForKit]);

  return (
    <CampaignContext.Provider
      value={{
        currentView,
        setCurrentView,
        viewportMode,
        setViewportMode,
        activeSource,
        setActiveSource,
        partners,
        setPartners,
        experiments,
        toggleExperimentVariant,
        students,
        funnel,
        registerStudent,
        simulateQuickRegistration,
        simulateBatchRegistrations,
        resetAllData,
        updatePartnerStatus,
        toastMessage,
        showToast,
        selectedPartnerForKit,
        setSelectedPartnerForKit
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within a CampaignProvider');
  }
  return context;
};
