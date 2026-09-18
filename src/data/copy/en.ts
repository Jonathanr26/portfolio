import type { Copy } from "./types";

export const en: Copy = {
  locale: "en",
  otherLocaleName: "Español",
  switchLabel: "Read this page in Spanish",

  role: "Full Stack Developer",
  railTagline: "Full Stack Developer. Frontend-leaning, and comfortable in the API underneath.",
  location: "Colima, Mexico",
  workMode: "Remote",
  timezone: "GMT-6",
  availableLabel: "Open to remote roles",

  statement: "I build the dashboards people run a business from.",
  intro:
    "Three years on the admin core of production systems: corporate cards and SPEI transfers, commissions, school records, internal approvals. The hard parts repeat — role-based access over data nobody should see by accident, auth that holds up, dense tables that stay fast. Deepest in fintech, but the engineering travels. Next.js and TypeScript on the front, NestJS and Postgres behind it.",
  cvLink: "Download CV",
  cardHint: "Click the card for my details.",
  cardTurnBack: "Turn back",
  cardTurnOver: "Turn the card over to see contact details",
  cardFields: { email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub" },
  cardLocation: "Colima, Mexico / Remote",
  cardSincePrefix: "Since",

  nav: {
    top: "Intro",
    work: "Work",
    builds: "Builds",
    stack: "Stack",
    code: "Public code",
    contact: "Contact",
  },
  headings: {
    work: "Work",
    builds: "Builds",
    stack: "Stack",
    code: "Public code",
    contact: "Contact",
  },
  meta: {
    work: "3 roles since 2023",
    builds: "Client work, names withheld",
    stack: "Daily drivers first",
    code: "Smaller things, openly readable",
    contact: "Remote, GMT-6",
  },

  experience: [
    {
      company: "Confidential client",
      title: "Full Stack Developer",
      cvPeriod: "Jan 2026 – Present",
      period: "2026 — Now",
      place: "Remote",
      current: true,
      bullets: [
        "Built a B2B fintech dashboard from zero in Next.js 15 (corporate cards, SPEI transfers, commissions, reporting) and worked on its React Native (Expo) app for real-time movements and transfers.",
        "Secured it with JWT in HttpOnly cookies, middleware route guards, silent session renewal and role-based access control.",
        "Contributed to the NestJS backend (Clean Architecture / DDD): refresh-token auth, user and role management, Dock gateway integration, OTP and TOTP 2FA, webhooks, PDF reports.",
        "Shipped the full frontend of a commissions platform in Next.js 16 and React 19 — admin, client, beneficiary, movement and schema modules on Zustand.",
        "Built the card subscription and tokenization flow for recurring charges across two products, and a compliance platform with separate portals for the internal team and the client.",
        "Covered that backend with Jest unit tests across use cases, services, repositories and auth guards.",
      ],
    },
    {
      company: "The Rocket Code",
      title: "Full Stack Developer",
      cvPeriod: "Aug 2023 – Jan 2026",
      period: "2023 — 2026",
      place: "Remote",
      bullets: [
        "Built and maintained Next.js dashboards for corporate credit card platforms: user management, transaction history, card controls.",
        "Integrated the complete transaction flow against Dock APIs and SPEI.",
        "Raised Lighthouse performance by over 60% by fixing LCP and CLS.",
        "Set up CI/CD on Bitbucket Pipelines for automated deploys.",
        "Refactored frontend codebases toward reusable components and better accessibility.",
      ],
    },
    {
      company: "Peña Colorada",
      title: "Software Engineer",
      cvPeriod: "Jan 2023 – Jun 2023",
      period: "2023",
      place: "Colima, Mexico",
      bullets: [
        "Built an internal IT service request system with automated approval workflows.",
        "Designed the backend API on Express.js and MS SQL Server.",
        "Gathered and validated requirements directly with non-technical stakeholders.",
      ],
    },
  ],

  builds: [
    {
      name: "Corporate card platform",
      summary:
        "Companies issue cards, move money over SPEI and pull their own reports out to PDF and Excel. Role-based views keep finance, admins and employees out of each other's data. The mobile app carries the same account, with movements and transfers in real time.",
      scope: "Architecture, the whole web frontend, mobile feature work, part of the API",
      stack: ["Next.js 15", "CSS Modules", "Zustand", "React Native", "Expo", "NestJS", "PostgreSQL", "Redis", "AWS S3"],
    },
    {
      name: "Commissions platform",
      summary:
        "Calculates and tracks commissions across admins, clients and beneficiaries, with configurable schemas per agreement and a full movement history.",
      scope: "Full frontend, from zero",
      stack: ["Next.js 16", "React 19", "Tailwind v4", "Zustand"],
    },
    {
      name: "School management platform",
      summary:
        "Multi-tenant system with separate portals for administrators, teachers and families. A teacher can belong to several groups and sections, an N:M relation the data model resolves instead of the screens. Subscriptions are charged to a saved, tokenized card.",
      scope: "Frontend and backend, data model, subscription and tokenization flow",
      stack: ["Next.js 16", "React 19", "shadcn/ui", "NestJS 11", "Prisma", "PostgreSQL"],
    },
    {
      name: "Compliance platform",
      summary:
        "Two audiences on one backend: the team doing the work, and the client following it. Each side sees only what its role allows, and the backend is covered by unit tests.",
      scope: "Frontend for both portals, subscription and tokenization flow, part of the backend",
      stack: ["Next.js 16", "React 19", "Zustand", "NestJS 11", "Prisma", "PostgreSQL", "Redis"],
    },
    {
      name: "Access and identity portal",
      summary:
        "Single entry point for authentication: OTP and TOTP second factor, blocked-account handling and temporary password flows.",
      scope: "Frontend plus backend support",
      stack: ["Next.js", "NestJS 11", "Redis", "MongoDB", "PostgreSQL"],
    },
  ],

  stack: {
    frontend: "Frontend",
    backend: "Backend and APIs",
    payments: "Payments",
    data: "Data",
    delivery: "Delivery and testing",
    rest: "Everything else",
  },

  repos: {
    pomelo_integration: {
      label: "Pomelo card API integration",
      summary:
        "Front and back against Pomelo's card-issuing API: register a user, then issue a card for them. React and Vite on one side, a Node API holding the credentials on the other.",
    },
    "challenge-kosmos-reactjs": {
      label: "Drag and resize canvas",
      summary:
        "Components that drag and resize inside a bounded parent, with eight-point selection, guide lines while dragging, and a different image fitted per component.",
    },
    "dashboard-analytics": {
      label: "Analytics dashboard",
      summary: "Charting and metrics layout exercise, deployed on Vercel.",
    },
    "user-management-dashboard": {
      label: "User management",
      summary: "CRUD, roles and table state handled in TypeScript.",
    },
    "my-weather-dashboard": {
      label: "Weather dashboard",
      summary: "Consumes a public API and renders forecast state.",
    },
    "convert-excel-txt": {
      label: "Excel to text converter",
      summary: "Browser-only file conversion, no server involved.",
    },
  },
  repoLive: "Live",
  repoSource: "Source",

  contactAsk: "Hiring for a frontend or full stack seat? Write to me.",
  educationLabel: "Education",
  education:
    "B.Eng. Software Engineering, University of Colima, 2019 — 2023. Professional License (SEP).",
  builtWith: "Built with Next.js and Tailwind. Spanish native, working English.",
  skipToContent: "Skip to content",
  sectionsNavLabel: "Sections",

  metaTitle: "Jonathan Rodriguez — Full Stack Developer",
  metaDescription:
    "Full Stack Developer, frontend-leaning. Three years building the admin core of production systems across fintech, enterprise SaaS and education, with Next.js, TypeScript and NestJS. Colima, Mexico, remote.",

  cv: {
    file: "cv.pdf",
    saveAs: "Jonathan-Rodriguez-CV.pdf",
    headline: "Full Stack Developer / React / Next.js / TypeScript / Node.js / NestJS",
    summary:
      "Full Stack Developer with 3+ years building scalable web and mobile applications across fintech, enterprise SaaS and education platforms. Full-cycle delivery, from architecture and frontend through backend API design and mobile apps. Strong focus on clean architecture, role-based security and reusable component design. Experienced in agile teams, CI/CD pipelines and AI-assisted development.",
    languages: "Spanish (native), English (working)",
    labels: {
      summary: "Professional summary",
      experience: "Work experience",
      skills: "Technical skills",
      background: "Education and languages",
      education: "Education",
      languages: "Languages",
    },
  },
};
