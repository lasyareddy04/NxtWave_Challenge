export type AcquisitionChannel = 'campus_community' | 'student_sharing' | 'direct_outreach';

export type CommunityStatus = 'NOT STARTED' | 'CONTACTED' | 'INTERESTED' | 'LIVE' | 'FOLLOW-UP' | 'COMPLETED';

export type PerformanceStatus = 'ON TRACK' | 'NEEDS ATTENTION' | 'EXCEEDING';

export interface CommunityPartner {
  id: string;
  name: string;
  college: string;
  channel: 'WhatsApp Group' | 'Discord' | 'Club Email' | 'LinkedIn' | 'Class CR Network';
  targetRegistrations: number;
  actualRegistrations: number;
  clicks: number;
  conversionRate: number; // percentage
  status: CommunityStatus;
  leadContact: string;
  sourceSlug: string;
}

export interface FunnelData {
  reach: number;
  clicks: number;
  registrationStarts: number;
  completedRegistrations: number;
  shares: number;
  additionalRegistrationsFromSharing: number;
  directOutreachRegistrations: number;
  campusCommunityRegistrations: number;
}

export interface ExperimentVariant {
  id: 'A' | 'B';
  name: string;
  description: string;
  visitors: number;
  conversions: number;
  conversionRate: number;
}

export interface GrowthExperiment {
  id: string;
  title: string;
  hypothesis: string;
  variantA: ExperimentVariant;
  variantB: ExperimentVariant;
  metric: string;
  decisionRule: string;
  activeVariant: 'A' | 'B';
  status: 'Running' | 'Concluded';
  winner?: 'A' | 'B';
}

export interface DayPlan {
  dayNumber: number;
  phase: string;
  title: string;
  objective: string;
  deliverables: string[];
  growthPrinciple: string;
  keyMetricToWatch: string;
  completed?: boolean;
}

export interface AIProjectRecommendation {
  id: string;
  title: string;
  tagline: string;
  whyItFits: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  suggestedStack: string;
  whatToBuildFirst: string;
  demoPromptIdea: string;
  suitableBranches: string[];
}

export interface RegisteredStudent {
  id: string;
  fullName: string;
  email: string;
  college: string;
  branch: string;
  passingYear: string;
  source: string;
  timestamp: string;
  recommendedProject?: string;
  sharedWithPeer?: boolean;
}

export interface BudgetCategory {
  category: string;
  allocatedAmount: number;
  spentAmount: number;
  purpose: string;
  rationale: string;
}
