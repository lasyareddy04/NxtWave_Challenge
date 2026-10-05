Read 
Completed with input: {
  "path": "C:\\Users\\lasya reddy vundela\\Desktop\\nxtwave\\src\\App.tsx"
}

Read 
Completed with input: {
  "path": "C:\\Users\\lasya reddy vundela\\Desktop\\nxtwave\\src\\data\\campaignData.ts"
}

Read 
Completed with input: {
  "path": "C:\\Users\\lasya reddy vundela\\Desktop\\nxtwave\\package.json"
}

Read 
Completed with input: {
  "path": "C:\\Users\\lasya reddy vundela\\Desktop\\nxtwave\\src\\components\\dashboard\\GrowthControlRoom.tsx"
}

Read 
Completed with input: {
  "path": "C:\\Users\\lasya reddy vundela\\Desktop\\nxtwave\\src\\context\\CampaignContext.tsx"
}

Search for `localStorage|sessionStorage|useState|AIProjectFinder|simulateQuickRegistratio...`

Here’s a `README.md` draft for the **whole challenge and project**. It describes the challenge goals and what this app demonstrates. Copy the content into a file named `README.md` in the repository root.

```markdown
# Campus Growth Engine

A campaign planning and simulation dashboard for the NxtWave Growth Intern Challenge.

The challenge: design a practical plan to reach **500 final-year student registrations in 7 days** with a **₹2,000 budget**. This app brings the student-facing experience, campus partner toolkit, and campaign tracking dashboard together in one interactive demo.

- **Live app:** https://campus-growth-engine.vercel.app
- **GitHub repository:** https://github.com/lasyareddy04/NxtWave_Challenge

## Challenge goals

- Reach 500 final-year student registrations in one week.
- Keep the campaign budget within ₹2,000.
- Combine campus communities, peer sharing, and direct outreach.
- Give students a useful reason to register: find an AI project idea they can build and demonstrate.
- Track the campaign funnel, execution timeline, experiments, and budget assumptions.

The sample acquisition plan allocates the 500-registration target as follows:

| Channel | Target | Share |
| --- | ---: | ---: |
| Campus communities | 300 | 60% |
| Peer sharing | 100 | 20% |
| Direct outreach | 100 | 20% |
| **Total** | **500** | **100%** |

## What’s in the app

### 1. Student page

A landing page for final-year engineering students, featuring an interactive project-finder flow, a registration call to action, and a preview of the proposed session.

### 2. Campus partner kit

A portal with campaign material intended to help campus partners promote the initiative within their communities.

### 3. Growth control room

A dashboard for exploring the campaign plan, including:

- Registration funnel and budget economics
- Campus community pipeline
- Growth experiments
- Seven-day execution timeline
- Direct outreach and AI-related campaign ideas
- Simulated registration activity and campaign progress

The app is an interactive **simulation/demo**. Registration and dashboard figures are not connected to a live campaign or real student database.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- Canvas Confetti

## Run locally

### Requirements

- Node.js
- npm

### Install and start

```bash
npm install
npm run dev
```

Vite will print a local URL in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The production-ready files are generated in the `dist/` directory.

### Preview the production build

```bash
npm run preview
```

## Deployment

The app is deployed on Vercel:

https://campus-growth-engine.vercel.app

To deploy from your own Vercel account, import the GitHub repository and configure it as a Vite project:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

## Project structure

```text
src/
  components/
    dashboard/   Campaign dashboard sections
    partner/     Campus partner portal
    student/     Student landing and project-finder experience
  context/       Shared campaign state
  data/          Demo campaign data
  types/         TypeScript types
  App.tsx        Main app views and navigation
  main.tsx       Application entry point
```

## Note

This project is a challenge prototype. It demonstrates a campaign strategy and interactive interface; it does not process real registrations, send outreach, or provide a production analytics backend.
```
