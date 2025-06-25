# AnswerAI Take-Home Assignment — Data Visualization Platform

## 1️ Setup Instructions

### Clone the repository:

```bash
git clone https://github.com/Harjap1996/answerAi_takeHome
cd answerAi_takeHome
```

### Local Development Instructions:

1️. Install dependencies:

```bash
npm install
```

2️. Create your local environment file and copy firebase credentials:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

The app will run at:

```bash
http://localhost:5173
```

## 2 Features Implemented

- Firebase Authentication (Google OAuth & Email/Password)

- Full authentication flow with protected routes

- Global user state managed via React Context

Full Redux Toolkit integration for global state management (variables, charts)

- Responsive UI with TailwindCSS

- Fully dynamic Variable Panel with hover tooltips and category grouping

- Recharts-powered graph visualizations with fully custom tick rendering

- Smooth transitions and slideover variable editor

- Professional file structure and modular component architecture

## 3️ Technical Decisions & Trade-offs

- Vite + React 18 + Typescript: Modern setup, fast builds, full type safety.

- Redux Toolkit: Chosen for scalable global state management of variables and charts.

- Firebase Auth: Simplifies backend authentication without building custom servers.

- TailwindCSS: Used for rapid pixel-perfect UI implementation matching provided Figma designs.

- Recharts: Lightweight chart library with solid customization options.

- Transition handling: Pure Tailwind transitions instead of extra libraries for smoother lightweight animations.

### Trade-offs:

- Firebase API keys are included as environment variables for ease of reviewer setup; real production deployments would handle secrets more securely.

- The hover delay for tooltips was manually implemented without external tooltip libraries to maintain full control.

- Variable description panel logic was built entirely custom for full Figma fidelity.

## 4️ Known Limitations

- No real backend API integration for fetching dynamic variable data (all handled in Redux for now).

- Firebase Authentication is client-only; no additional backend user verification.

- Chart data is hardcoded in Redux slice — can be easily extended to support API-driven data loading.

- No unit tests provided as part of the assessment submission.

- Very basic error handling for authentication forms.

## 5️ Time Spent

Planning & Architecture Setup: 2 hours

Firebase Authentication Setup: 30 min

Redux Toolkit Integration: 30 min

Variable Panel : 1 hour

UI Build (Sidebar, Topbar, Chart, KPI panels): 2 hours

Responsive Layout & Tailwind Fine-tuning: 1 hour

Final Cleanup & Refactor: 1 hour

Total: 8 hours

## 6 Tech Stack

Tech            Purpose

Vite            Build tool

React 18        Frontend framework

Redux Toolkit   Global state management

TailwindCSS     Styling

Firebase        Authentication

Typescript      Type safety

Recharts        Data visualizations
