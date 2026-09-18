/** Facts that do not change with language: contact details, URLs, tech names. */

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const profile = {
  name: "Jonathan Rodriguez",
  fullName: "Jonathan Eduardo Rodriguez Villaseñor",
  cardName: ["Jonathan Eduardo", "Rodriguez Villaseñor"],
  initials: "JR",
  since: 2023,
  available: true,
  email: "jonathanrv106@gmail.com",
  phone: "+52 312 169 1160",
  linkedin: "https://www.linkedin.com/in/jonatharv26/",
  linkedinHandle: "in/jonatharv26",
  github: "https://github.com/Jonathanr26",
  githubHandle: "Jonathanr26",
  site: "https://jonathanrodriguez.dev",
} as const;

export const sectionIds = ["top", "work", "builds", "stack", "code", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];

/** Tech names are the same in both languages, so they live here once. */
export const stackGroups = [
  {
    id: "frontend",
    items: [
      "React", "Next.js", "TypeScript", "JavaScript", "Vue.js",
      "React Native", "Expo", "Zustand", "Redux", "React Hook Form", "Zod",
      "Tailwind CSS", "shadcn/ui", "Material UI", "CSS Modules", "Styled Components",
      "Recharts", "jsPDF", "ExcelJS",
    ],
  },
  {
    id: "backend",
    items: [
      "Node.js", "NestJS", "Express.js", "REST", "GraphQL", "JWT", "Swagger",
      "class-validator", "Passport", "Argon2", "Bull", "Cron", "Rate limiting",
      "Prisma", "TypeORM", "PDFKit", "PHP", "Python",
    ],
  },
  { id: "payments", items: ["Conekta", "Dock", "SPEI", "OTP / TOTP 2FA"] },
  { id: "data", items: ["PostgreSQL", "MongoDB", "MySQL", "MS SQL Server", "Redis"] },
  {
    id: "delivery",
    items: ["Git", "Docker", "GitHub Actions", "Bitbucket Pipelines", "Jest"],
  },
  { id: "rest", items: ["AWS S3", "Google Tag Manager", "GitHub Copilot", "Claude Code"] },
] as const;

export type StackGroupId = (typeof stackGroups)[number]["id"];

const repoList = [
  {
    id: "pomelo_integration",
    repo: "https://github.com/Jonathanr26/pomelo_integration",
    stack: ["JavaScript", "React", "Vite", "Node.js"],
  },
  {
    id: "challenge-kosmos-reactjs",
    repo: "https://github.com/Jonathanr26/challenge-kosmos-reactjs",
    demo: "https://challenge-kosmos-reactjs-sepia.vercel.app/",
    stack: ["JavaScript", "React"],
  },
  {
    id: "dashboard-analytics",
    repo: "https://github.com/Jonathanr26/dashboard-analytics",
    demo: "https://dashboard-analytics-three.vercel.app/",
    stack: ["TypeScript", "React"],
  },
  {
    id: "user-management-dashboard",
    repo: "https://github.com/Jonathanr26/user-management-dashboard",
    stack: ["TypeScript", "React"],
  },
  {
    id: "my-weather-dashboard",
    repo: "https://github.com/Jonathanr26/my-weather-dashboard",
    demo: "https://my-weather-dashboard-ten.vercel.app/",
    stack: ["JavaScript", "React"],
  },
  {
    id: "convert-excel-txt",
    repo: "https://github.com/Jonathanr26/convert-excel-txt",
    demo: "https://jonathanr26.github.io/convert-excel-txt/",
    stack: ["JavaScript"],
  },
] as const;

export type RepoId = (typeof repoList)[number]["id"];

/** Uniform shape so components can read an optional demo without narrowing. */
export type Repo = {
  id: RepoId;
  repo: string;
  demo?: string;
  stack: readonly string[];
};

export const repos: readonly Repo[] = repoList;
