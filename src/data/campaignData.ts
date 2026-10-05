import { 
  CommunityPartner, 
  GrowthExperiment, 
  DayPlan, 
  AIProjectRecommendation, 
  BudgetCategory 
} from '../types/campaign';

export const CAMPAIGN_META = {
  name: "Build Your First AI Project in 60 Minutes",
  organizer: "NxtWave",
  targetAudience: "Final-year engineering students across India",
  goalRegistrations: 500,
  durationDays: 7,
  totalBudgetINR: 2000,
  tagline: "Give your campus everything it needs to fill the workshop.",
  growthPhilosophy: "IDEA → BUILD → LAUNCH → MEASURE → LEARN → SCALE",
  coreCampaignConcept: "BRING AI TO YOUR CAMPUS — Acquire distribution through student community owners rather than 500 isolated individuals.",
  engines: [
    {
      id: "campus_community",
      name: "Campus / Community Partners",
      target: 300,
      sharePct: 60,
      workingAssumption: "20 campus/community partners × 15 registrations each = 300 registrations (Initial Target)",
      description: "Primary distribution engine. Student club leads, AI/ML clubs, placement groups, CRs."
    },
    {
      id: "student_sharing",
      name: "Student-to-Student Sharing",
      target: 100,
      sharePct: 20,
      workingAssumption: "Post-registration peer loop: 500 students × 20% share rate = 100 peer registrations",
      description: "Zero-friction peer sharing with pre-filled WhatsApp message for project partners."
    },
    {
      id: "direct_outreach",
      name: "Targeted Direct Outreach",
      target: 100,
      sharePct: 20,
      workingAssumption: "Direct student outreach across LinkedIn, engineering Telegram channels, alumni networks",
      description: "High-intent direct messaging to final-year students looking for capstone/placement projects."
    }
  ]
};

export const INITIAL_BUDGET: BudgetCategory[] = [
  {
    category: "Community Activation & Micro-Incentives",
    allocatedAmount: 800,
    spentAmount: 0,
    purpose: "Certificates/perks for top community partners reaching 15+ student milestone",
    rationale: "Motivates club leads with zero waste; tied directly to registration thresholds."
  },
  {
    category: "Creative & Message Experiments",
    allocatedAmount: 500,
    spentAmount: 0,
    purpose: "Testing micro-targeted creatives and tailored collateral across student segments",
    rationale: "A/B tests determine highest converting visual format and copy."
  },
  {
    category: "Contingency / Scaling Experiments",
    allocatedAmount: 500,
    spentAmount: 0,
    purpose: "Reserved for Day 6-7 doubling down on the single highest-converting channel",
    rationale: "Core principle: 'Don't scale everything. Scale what converts.'"
  },
  {
    category: "Miscellaneous & Tooling",
    allocatedAmount: 200,
    spentAmount: 0,
    purpose: "Domain routing, tracking webhook endpoints, emergency micro-spends",
    rationale: "Buffer for smooth execution."
  }
];

export const INITIAL_PARTNERS: CommunityPartner[] = [
  {
    id: "amrita_ai",
    name: "Amrita AI & Robotics Society",
    college: "Amrita Vishwa Vidyapeetham",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 11,
    clicks: 42,
    conversionRate: 26.2,
    status: "LIVE",
    leadContact: "Karthik R. (President)",
    sourceSlug: "campus_amrita_ai"
  },
  {
    id: "vit_codechef",
    name: "VIT CodeChef Campus Chapter",
    college: "VIT Vellore",
    channel: "Discord",
    targetRegistrations: 15,
    actualRegistrations: 14,
    clicks: 58,
    conversionRate: 24.1,
    status: "LIVE",
    leadContact: "Ananya M. (Tech Lead)",
    sourceSlug: "campus_vit_codechef"
  },
  {
    id: "mit_placement",
    name: "MIT Final Year Placement Forum",
    college: "Manipal Institute of Tech",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 9,
    clicks: 34,
    conversionRate: 26.5,
    status: "LIVE",
    leadContact: "Rohan S. (Placement Rep)",
    sourceSlug: "campus_mit_placement"
  },
  {
    id: "srm_genai",
    name: "SRM GenAI & ML Guild",
    college: "SRM IST Chennai",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 12,
    clicks: 48,
    conversionRate: 25.0,
    status: "LIVE",
    leadContact: "Pooja V. (Convenor)",
    sourceSlug: "campus_srm_genai"
  },
  {
    id: "rvce_dev",
    name: "RVCE Developers & AI Community",
    college: "RV College of Engineering",
    channel: "Discord",
    targetRegistrations: 15,
    actualRegistrations: 7,
    clicks: 29,
    conversionRate: 24.1,
    status: "FOLLOW-UP",
    leadContact: "Naveen K. (Secretary)",
    sourceSlug: "campus_rvce_dev"
  },
  {
    id: "bits_opensource",
    name: "BITS Open Source & AI Initiative",
    college: "BITS Pilani",
    channel: "Club Email",
    targetRegistrations: 15,
    actualRegistrations: 8,
    clicks: 31,
    conversionRate: 25.8,
    status: "LIVE",
    leadContact: "Aditya T. (Head)",
    sourceSlug: "campus_bits_opensource"
  },
  {
    id: "pes_cse_cr",
    name: "PES 2025 CSE Class Rep Network",
    college: "PES University Bangalore",
    channel: "Class CR Network",
    targetRegistrations: 15,
    actualRegistrations: 10,
    clicks: 36,
    conversionRate: 27.8,
    status: "LIVE",
    leadContact: "Shreya B. (CR CSE-A)",
    sourceSlug: "campus_pes_cse_cr"
  },
  {
    id: "thapar_coding",
    name: "Thapar Competitive Coding Hub",
    college: "TIET Patiala",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 6,
    clicks: 25,
    conversionRate: 24.0,
    status: "FOLLOW-UP",
    leadContact: "Gaurav S. (Lead)",
    sourceSlug: "campus_thapar_coding"
  },
  {
    id: "kiit_robotics",
    name: "KIIT AI & IoT Society",
    college: "KIIT Bhubaneswar",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 5,
    clicks: 22,
    conversionRate: 22.7,
    status: "INTERESTED",
    leadContact: "Subhashree P. (VP)",
    sourceSlug: "campus_kiit_robotics"
  },
  {
    id: "dtu_ml_circle",
    name: "DTU Machine Learning Circle",
    college: "Delhi Technological University",
    channel: "LinkedIn",
    targetRegistrations: 15,
    actualRegistrations: 8,
    clicks: 33,
    conversionRate: 24.2,
    status: "LIVE",
    leadContact: "Varun J. (Moderator)",
    sourceSlug: "campus_dtu_ml_circle"
  },
  {
    id: "bmsce_placement",
    name: "BMSCE Final Year Career Cell",
    college: "BMS College of Engineering",
    channel: "Class CR Network",
    targetRegistrations: 15,
    actualRegistrations: 7,
    clicks: 28,
    conversionRate: 25.0,
    status: "LIVE",
    leadContact: "Divya N. (Student Coord)",
    sourceSlug: "campus_bmsce_placement"
  },
  {
    id: "cbit_ai_forum",
    name: "CBIT Artificial Intelligence Club",
    college: "CBIT Hyderabad",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 6,
    clicks: 23,
    conversionRate: 26.1,
    status: "FOLLOW-UP",
    leadContact: "Siddharth M.",
    sourceSlug: "campus_cbit_ai_forum"
  },
  {
    id: "vjit_ece_final",
    name: "VJIT ECE Final Year Project Group",
    college: "VJIT Hyderabad",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 4,
    clicks: 18,
    conversionRate: 22.2,
    status: "INTERESTED",
    leadContact: "Harsha V. (Student Lead)",
    sourceSlug: "campus_vjit_ece_final"
  },
  {
    id: "griet_csit",
    name: "GRIET CSIT Innovators Hub",
    college: "GRIET Hyderabad",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 5,
    clicks: 21,
    conversionRate: 23.8,
    status: "LIVE",
    leadContact: "Meghana K.",
    sourceSlug: "campus_griet_csit"
  },
  {
    id: "coep_tech_club",
    name: "COEP MindSpark Tech Cell",
    college: "COEP Pune",
    channel: "Club Email",
    targetRegistrations: 15,
    actualRegistrations: 3,
    clicks: 14,
    conversionRate: 21.4,
    status: "CONTACTED",
    leadContact: "Tanmay B. (Coordinator)",
    sourceSlug: "campus_coep_tech_club"
  },
  {
    id: "pict_acm",
    name: "PICT ACM Student Chapter",
    college: "PICT Pune",
    channel: "Discord",
    targetRegistrations: 15,
    actualRegistrations: 5,
    clicks: 20,
    conversionRate: 25.0,
    status: "LIVE",
    leadContact: "Aarav P. (Webmaster)",
    sourceSlug: "campus_pict_acm"
  },
  {
    id: "vnit_robotics",
    name: "VNIT Robotics & Automation",
    college: "VNIT Nagpur",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 2,
    clicks: 11,
    conversionRate: 18.2,
    status: "CONTACTED",
    leadContact: "Kunal D.",
    sourceSlug: "campus_vnit_robotics"
  },
  {
    id: "msrit_placement",
    name: "MSRIT Placement Champions",
    college: "Ramaiah Institute of Tech",
    channel: "Class CR Network",
    targetRegistrations: 15,
    actualRegistrations: 6,
    clicks: 24,
    conversionRate: 25.0,
    status: "LIVE",
    leadContact: "Rahul G.",
    sourceSlug: "campus_msrit_placement"
  },
  {
    id: "kmit_coding",
    name: "KMIT Finishing School Tech Group",
    college: "KMIT Hyderabad",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 4,
    clicks: 16,
    conversionRate: 25.0,
    status: "FOLLOW-UP",
    leadContact: "Pranav S.",
    sourceSlug: "campus_kmit_coding"
  },
  {
    id: "gitam_hyd_cs",
    name: "GITAM Hyderabad Computing Club",
    college: "GITAM Deemed University",
    channel: "WhatsApp Group",
    targetRegistrations: 15,
    actualRegistrations: 3,
    clicks: 13,
    conversionRate: 23.1,
    status: "NOT STARTED",
    leadContact: "Srija L.",
    sourceSlug: "campus_gitam_hyd_cs"
  }
];

export const INITIAL_EXPERIMENTS: GrowthExperiment[] = [
  {
    id: "exp_message",
    title: "Experiment 1: Career/Project Outcome vs Generic AI Messaging",
    hypothesis: "Career/project outcome messaging will convert better than generic AI-learning messaging because final-year students have urgent placement/resume anxiety.",
    variantA: {
      id: "A",
      name: "Generic AI Workshop Hook",
      description: "Build Your First AI Project in 60 Minutes",
      visitors: 640,
      conversions: 115,
      conversionRate: 18.0
    },
    variantB: {
      id: "B",
      name: "Outcome / Placement Driven Hook",
      description: "Don't Graduate Without an AI Project You Can Actually Demo.",
      visitors: 620,
      conversions: 161,
      conversionRate: 26.0
    },
    metric: "Visitor → Registration Conversion Rate",
    decisionRule: "Scale the higher-converting message across all campus kits and partner broadcasts.",
    activeVariant: "B",
    status: "Running",
    winner: "B"
  },
  {
    id: "exp_value_first",
    title: "Experiment 2: Value Before Registration (AI Project Finder Hook)",
    hypothesis: "Giving students a personalized AI project recommendation before asking for registration will reduce commitment resistance and increase conversion.",
    variantA: {
      id: "A",
      name: "Direct Event Registration",
      description: "Standard landing page with immediate form fields (Name, Email, College)",
      visitors: 510,
      conversions: 97,
      conversionRate: 19.0
    },
    variantB: {
      id: "B",
      name: "AI Project Finder Hook First",
      description: "5-question diagnostic → Custom AI project reveal → 'Want to build it? Register Free'",
      visitors: 530,
      conversions: 148,
      conversionRate: 27.9
    },
    metric: "Visitor → Registration Conversion Rate",
    decisionRule: "Scale the stronger onboarding experience across all primary links.",
    activeVariant: "B",
    status: "Running",
    winner: "B"
  },
  {
    id: "exp_community_kit",
    title: "Experiment 3: Turnkey Campus Kit vs Raw Workshop Link",
    hypothesis: "Giving student community owners ready-made copy, images, and trackable links will generate 2x+ more registrations than asking them to independently promote.",
    variantA: {
      id: "A",
      name: "Basic Workshop Link Only",
      description: "Share bare URL with partners without pre-written copy or templates",
      visitors: 320,
      conversions: 42,
      conversionRate: 13.1
    },
    variantB: {
      id: "B",
      name: "Turnkey Campus Growth Kit",
      description: "One-click copy for WhatsApp, LinkedIn, club announcements + attributed source link",
      visitors: 680,
      conversions: 172,
      conversionRate: 25.3
    },
    metric: "Registrations per community & overall volume",
    decisionRule: "Scale the community enablement kit that generates highest registration velocity.",
    activeVariant: "B",
    status: "Running",
    winner: "B"
  }
];

export const SEVEN_DAY_TIMELINE: DayPlan[] = [
  {
    dayNumber: 1,
    phase: "RESEARCH + MESSAGE",
    title: "Understand the Student & Frame the Irresistible Hook",
    objective: "Define final-year student ICP, isolate placement/capstone anxieties, and write 3 test message hooks.",
    deliverables: [
      "Student ICP Profile: Tier 2/3 engineering colleges, 2025/2026 batch, high placement pressure",
      "Core Pain: 'I took 10 courses on Udemy/YouTube but still have 0 deployed AI projects on my resume'",
      "Formulate 3 message variants: Generic, Project Outcome, Urgency/Placement",
      "Draft Campaign Kit templates for WhatsApp, LinkedIn, and Email"
    ],
    growthPrinciple: "Empathy precedes distribution. If the hook doesn't solve student anxiety, distribution is wasted.",
    keyMetricToWatch: "Qualitative feedback from 5 student test readers",
    completed: true
  },
  {
    dayNumber: 2,
    phase: "BUILD",
    title: "Deploy Conversion Asset & Tracking Architecture",
    objective: "Ship student-facing conversion page, AI project finder hook, campus partner kit, and UTM source tracking.",
    deliverables: [
      "Student Landing Page with high-converting value proposition",
      "Interactive 5-question AI Project Finder hook",
      "Campus Partner Portal with 1-click promotional assets",
      "Source attribution parameter engine (?source=campus_...)",
      "Zero-friction post-registration WhatsApp peer sharing trigger"
    ],
    growthPrinciple: "A landing page is not a website; it is an economic conversion machine.",
    keyMetricToWatch: "Page load speed (<1.2s on mobile) and form submission latency",
    completed: true
  },
  {
    dayNumber: 3,
    phase: "DISTRIBUTION SETUP",
    title: "Seed Partner Pipeline & Pre-populate Links",
    objective: "Onboard 20 community leaders across target colleges, assign unique source links, deliver kits.",
    deliverables: [
      "Identify 25 candidate student clubs (AI, Coding, Placement cells, CRs)",
      "Issue 20 personalized source links (?source=campus_college_club)",
      "Conduct 5-minute onboarding calls / voice notes with 12 club presidents",
      "Schedule simultaneous launch drops across partner WhatsApp groups for Day 4 morning"
    ],
    growthPrinciple: "Distribution is built on mutual incentives. Club leads want engaging, high-credibility events.",
    keyMetricToWatch: "Partner commitment rate (target: 20 active partners committed to 15 regs)",
    completed: true
  },
  {
    dayNumber: 4,
    phase: "LAUNCH",
    title: "Simultaneous Campus Drop & Direct Outreach Kickoff",
    objective: "Ignite Engine 1 (Campus Partners) and Engine 3 (Targeted Direct Outreach) at 10:00 AM.",
    deliverables: [
      "10:00 AM: Broadcast WhatsApp Kit across 20 campus communities",
      "11:30 AM: Post club announcements in student Discord / Telegram servers",
      "2:00 PM: Launch targeted direct outreach to 150 final-year engineers on LinkedIn",
      "First live tracking checks on attribution dashboard"
    ],
    growthPrinciple: "Synchronized launches create organic buzz and peer cross-talk across student groups.",
    keyMetricToWatch: "First-hour clicks and early registration velocity",
    completed: true
  },
  {
    dayNumber: 5,
    phase: "MEASURE",
    title: "Drop-Off Diagnostics & Channel Conversion Audits",
    objective: "Analyze funnel leakages, identify top-performing communities, and isolate underperforming channels.",
    deliverables: [
      "Audit registration funnel: Clicks → Project Finder Starts → Completed Registrations",
      "Classify partners into: ON TRACK (>=8 regs) vs NEEDS ATTENTION (<5 regs)",
      "Evaluate Experiment 1 & 2 conversion differentials",
      "Send custom nudge assets to struggling communities with targeted copy"
    ],
    growthPrinciple: "Data without diagnosis is useless. Identify the leak before spending more energy.",
    keyMetricToWatch: "Conversion rate per community and drop-off at project recommendation stage",
    completed: false
  },
  {
    dayNumber: 6,
    phase: "SCALE",
    title: "Double Down on Winners & Reallocate Budget",
    objective: "Pause low-converting messaging, replicate best-performing community formats, deploy ₹500 scaling fund.",
    deliverables: [
      "Cut Variant A (Generic messaging) and switch 100% traffic to Variant B (Outcome hook)",
      "Replicate the top 3 partner tactics across the 10 middle-tier communities",
      "Deploy ₹500 scaling budget to boost reach in the highest-converting college clusters",
      "Activate student peer-sharing reminders for existing registrants"
    ],
    growthPrinciple: "'Don't scale everything. Scale what converts.' Cut underperformers ruthlessly.",
    keyMetricToWatch: "Marginal cost per additional registration (Target CAC: <= ₹4.00)",
    completed: false
  },
  {
    dayNumber: 7,
    phase: "FINAL PUSH",
    title: "Last 24-Hour Urgency & Peer Loop Acceleration",
    objective: "Drive final surge toward the 500 registration goal using limited-seat urgency and peer sharing.",
    deliverables: [
      "Send '24 Hours Left / Final 60 Seats' copy to all 20 campus WhatsApp groups",
      "Trigger WhatsApp peer-share reminder: 'Tag your final-year project partner'",
      "Conduct live count countdown updates in club channels",
      "Final tally and post-campaign conversion attribution report"
    ],
    growthPrinciple: "Urgency converts procrastinators. Final-year students act fastest under deadlines.",
    keyMetricToWatch: "Final registration count vs 500 target and peer-share viral coefficient",
    completed: false
  }
];

export const AI_PROJECT_RECOMMENDATIONS: AIProjectRecommendation[] = [
  {
    id: "interview_coach",
    title: "AI Interview Coach & Real-Time Feedback System",
    tagline: "Ace technical & behavioral campus placements with instant AI evaluation",
    whyItFits: "You want a standout resume project, are comfortable with coding, and want something directly applicable to final-year placements.",
    difficulty: "Intermediate",
    suggestedStack: "Python + OpenAI / Gemini API + Streamlit / Next.js",
    whatToBuildFirst: "Build a 3-question mock interview flow and generate structured rubrics for student answers within 60 minutes.",
    demoPromptIdea: "Simulate a Senior Google Engineer asking a system design question and grading response depth.",
    suitableBranches: ["CSE", "IT", "AI/DS", "ECE"]
  },
  {
    id: "ats_resume_parser",
    title: "Smart AI Resume Screener & ATS Optimizer",
    tagline: "Reverse-engineer campus hiring ATS bots to boost shortlist rates",
    whyItFits: "Directly solves the #1 student fear: getting filtered out by automated campus hiring systems.",
    difficulty: "Beginner",
    suggestedStack: "Python + PyPDF2 + LLM Embedding API + Gradio",
    whatToBuildFirst: "Parse a student PDF resume, compare against a job description, and output a 0-100 match score with missing keywords.",
    demoPromptIdea: "Analyze my resume for an Associate Software Engineer role and list top 3 red flags.",
    suitableBranches: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"]
  },
  {
    id: "code_reviewer",
    title: "Automated Code Reviewer & Security Auditing Bot",
    tagline: "Find edge-case bugs, security vulnerabilities, and code smells automatically",
    whyItFits: "Demonstrates deep software engineering standards and AI tooling integration to technical interviewers.",
    difficulty: "Intermediate",
    suggestedStack: "Node.js / Python + LangChain + GitHub Webhook / CLI",
    whatToBuildFirst: "Accept a raw code snippet or GitHub repo diff and output a prioritized list of 3 refactoring suggestions.",
    demoPromptIdea: "Identify memory leaks and asynchronous race conditions in this Python/JS function.",
    suitableBranches: ["CSE", "IT", "AI/DS"]
  },
  {
    id: "visual_defect_inspector",
    title: "Multi-Modal Computer Vision Quality Inspector",
    tagline: "Industrial defect detection for manufacturing and IoT systems",
    whyItFits: "Perfect bridge for Core Engineering students (Mechanical/ECE/Civil) wanting high-impact AI skills for smart industries.",
    difficulty: "Advanced",
    suggestedStack: "Python + OpenCV + YOLOv8 / Gemini Vision API + FastAPI",
    whatToBuildFirst: "Upload an image of a circuit board or mechanical gear and highlight structural flaws with bounding boxes.",
    demoPromptIdea: "Inspect soldered circuit pins for bridging or dry joints from camera feed.",
    suitableBranches: ["Mechanical", "ECE", "EEE", "Civil"]
  },
  {
    id: "research_synthesizer",
    title: "AI Research Paper Synthesizer & Capstone Q&A Engine",
    tagline: "Turn 30-page IEEE/ACM papers into digestible project architectures",
    whyItFits: "Solves final-year major project literature survey requirements in minutes instead of weeks.",
    difficulty: "Beginner",
    suggestedStack: "Python + ChromaDB (Vector DB) + Gemini 1.5 Flash + Streamlit",
    whatToBuildFirst: "Upload a PDF research paper and query it with contextual citations and architecture diagrams.",
    demoPromptIdea: "Summarize methodology and extract the baseline benchmark dataset from this paper.",
    suitableBranches: ["CSE", "IT", "AI/DS", "ECE", "Chemical", "BioTech"]
  },
  {
    id: "smart_campus_scheduler",
    title: "Autonomous Placement & Assignment Agent",
    tagline: "Multi-agent coordinator that manages test deadlines and study sprints",
    whyItFits: "Showcases modern AI Agentic workflows (tool use, function calling) to recruiters looking for next-gen AI talent.",
    difficulty: "Advanced",
    suggestedStack: "Python + LangGraph / CrewAI + Google Calendar API",
    whatToBuildFirst: "Input 5 placement test syllabus deadlines and have an AI agent generate daily adaptive revision goals.",
    demoPromptIdea: "Plan a 14-day Data Structures & Algorithms grind schedule with mock test milestones.",
    suitableBranches: ["CSE", "IT", "ECE", "Civil", "Mechanical"]
  }
];

export const CAMPAIGN_KIT_TEMPLATES = {
  whatsappLong: {
    title: "WhatsApp Message (Standard)",
    target: "WhatsApp Class Groups / Club Groups",
    text: `Final-year engineering students 👋

What if you could go from ‘I want to learn AI’ to an actual AI project in 60 minutes?

NxtWave is running:

BUILD YOUR FIRST AI PROJECT IN 60 MINUTES

A free online workshop for engineering students who want to build something they can actually show.

Register here:
[UNIQUE LINK]`
  },
  whatsappShort: {
    title: "Short WhatsApp Message (High-Urgency)",
    target: "Fast-moving student groups / Telegram",
    text: `Final-year engineers:

Want to build your first AI project instead of watching another AI webinar?

Join NxtWave’s free:

BUILD YOUR FIRST AI PROJECT IN 60 MINUTES

Register:
[UNIQUE LINK]`
  },
  clubAnnouncement: {
    title: "20-Second Spoken Club Announcement",
    target: "Offline club meeting / Discord voice pitch / Class CR shoutout",
    text: `"Hey everyone, quick heads up for all final years! If you're building your resume for placements or looking for a working capstone project, NxtWave is hosting a free 60-minute practical workshop where we'll literally code and launch our first AI prototype live — no boring theory, just something you can actually demo. Check the link in our group to register with our campus pass: [UNIQUE LINK]"`
  },
  linkedinPost: {
    title: "LinkedIn Post Template",
    target: "Student LinkedIn feeds / Club pages",
    text: `Most engineering students have "Machine Learning" listed on their resume, but struggle when interviewers ask: "Can you demo your project live?"

To bridge this gap, our campus community has partnered with NxtWave to host:

🚀 BUILD YOUR FIRST AI PROJECT IN 60 MINUTES

What you'll walk away with:
✓ A clear, practical AI project idea tailored to your branch
✓ A working code prototype built live in 60 minutes
✓ An actual demo you can show recruiters in placement rounds

Zero prior ML experience required. 100% practical.

Reserve your free campus pass here:
👉 [UNIQUE LINK]

#ArtificialIntelligence #Engineering #Placements2025 #StudentDevelopers #BuildInPublic`
  },
  emailTemplate: {
    title: "Student-Friendly Email Announcement",
    target: "Club member email broadcast / Placement mailing list",
    subject: "Build your first AI project in 60 minutes",
    text: `Hey [Student Name],

Most final-year engineering students know they need AI on their resume, but don't know where to start or how to turn theory into something recruiters can actually test.

NxtWave is running an intensive, hands-on workshop:

BUILD YOUR FIRST AI PROJECT IN 60 MINUTES
A free practical workshop for final-year engineering students who want to build something real.

In 60 minutes, you will:
1. Start with a practical AI project idea suited to your skills
2. Turn that idea into a functioning prototype live
3. Leave with working code you can demo in interviews

👉 Claim your free campus seat here:
[UNIQUE LINK]

See you there,
Campus Placement & Tech Community Team`
  },
  posterCreative: {
    title: "Poster & Creative Asset Specification",
    headline: "BUILD YOUR FIRST AI PROJECT IN 60 MINUTES",
    subheadline: "Don't just learn AI. Build something you can actually show.",
    badge: "FREE 60-MIN LIVE WORKSHOP | FINAL-YEAR SPECIAL",
    bullets: [
      "Code & deploy a live AI project in 60 minutes",
      "Stand out in 2025/2026 campus placements",
      "Interactive 1:1 project match diagnostic"
    ],
    ctaText: "SCAN QR OR CLICK [UNIQUE LINK]"
  }
};

export const DIRECT_OUTREACH_TEMPLATES = [
  {
    channel: "LinkedIn Direct Message",
    recipient: "Final-Year Student / Placement Aspirant",
    text: `Hey [First Name], noticed you're in final year at [College]. 

Are you looking to add an AI project to your resume before campus placement season kicks in?

NxtWave is doing a free 60-min live session where students build and demo a working AI prototype:
[UNIQUE LINK]

Thought it might be helpful for your technical interview prep!`
  },
  {
    channel: "Class Representative (CR) WhatsApp DM",
    recipient: "Final Year Class Representative",
    text: `Hi [Name], reaching out from the campus tech initiative. We’ve secured free priority access for [Branch] final years for NxtWave's "Build Your First AI Project in 60 Minutes" workshop.

Would you mind dropping this quick link into the official class group so students looking for placement/capstone projects don't miss out?

[UNIQUE LINK]`
  },
  {
    channel: "Telegram / Discord Community Post",
    recipient: "Engineering Job & Placement Prep Groups",
    text: `🚨 Final-Year Placement Alert:

Recruiters are filtering out resumes with generic projects. NxtWave is hosting a free hands-on 60-minute build session:

"BUILD YOUR FIRST AI PROJECT IN 60 MINUTES"
• Zero fluff, 100% live building
• Walk away with a demo-ready prototype

Free pass link: [UNIQUE LINK]`
  }
];

export const INITIAL_SIMULATED_STUDENTS = [
  {
    id: "reg_001",
    fullName: "Kavya Menon",
    email: "kavya.m@amrita.edu",
    college: "Amrita Vishwa Vidyapeetham",
    branch: "Computer Science",
    passingYear: "2025",
    source: "campus_amrita_ai",
    timestamp: "10 mins ago",
    recommendedProject: "AI Interview Coach",
    sharedWithPeer: true
  },
  {
    id: "reg_002",
    fullName: "Arjun Sharma",
    email: "arjun.sharma@vit.ac.in",
    college: "VIT Vellore",
    branch: "Information Technology",
    passingYear: "2025",
    source: "campus_vit_codechef",
    timestamp: "24 mins ago",
    recommendedProject: "Smart AI Resume Screener",
    sharedWithPeer: true
  },
  {
    id: "reg_003",
    fullName: "Neha Reddy",
    email: "neha.reddy@manipal.edu",
    college: "Manipal Institute of Tech",
    branch: "Electronics & Communication",
    passingYear: "2025",
    source: "campus_mit_placement",
    timestamp: "45 mins ago",
    recommendedProject: "Multi-Modal Visual Inspector",
    sharedWithPeer: false
  },
  {
    id: "reg_004",
    fullName: "Rohit Verma",
    email: "rohit.v@pes.edu",
    college: "PES University",
    branch: "Computer Science",
    passingYear: "2025",
    source: "campus_pes_cse_cr",
    timestamp: "1 hour ago",
    recommendedProject: "Automated Code Reviewer",
    sharedWithPeer: true
  },
  {
    id: "reg_005",
    fullName: "Pooja Krishnan",
    email: "pooja.k@srmist.edu.in",
    college: "SRM IST Chennai",
    branch: "AI & Data Science",
    passingYear: "2026",
    source: "campus_srm_genai",
    timestamp: "1 hour ago",
    recommendedProject: "AI Research Paper Synthesizer",
    sharedWithPeer: false
  },
  {
    id: "reg_006",
    fullName: "Deepak Choudhary",
    email: "deepak.c@dtu.ac.in",
    college: "Delhi Technological University",
    branch: "Mechanical Engineering",
    passingYear: "2025",
    source: "direct_linkedin_outreach",
    timestamp: "2 hours ago",
    recommendedProject: "Multi-Modal Visual Inspector",
    sharedWithPeer: true
  },
  {
    id: "reg_007",
    fullName: "Sneha Patil",
    email: "sneha.p@rvce.edu.in",
    college: "RV College of Engineering",
    branch: "Information Science",
    passingYear: "2025",
    source: "campus_rvce_dev",
    timestamp: "2 hours ago",
    recommendedProject: "AI Interview Coach",
    sharedWithPeer: true
  }
];
