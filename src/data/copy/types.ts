import type { Locale, RepoId, SectionId, StackGroupId } from "@/data/profile";

export type Role = {
  company: string;
  title: string;
  /** Short form for the site, e.g. "2023 — 2026". */
  period: string;
  /** Month precision for the CV, e.g. "Aug 2023 – Jan 2026". */
  cvPeriod: string;
  place: string;
  current?: boolean;
  bullets: string[];
};

export type Build = {
  name: string;
  summary: string;
  scope: string;
  /** Tech names, written as shown. */
  stack: string[];
};

/**
 * Every string that changes with language. Both dictionaries must satisfy this,
 * so a field added to one fails the build until the other catches up.
 */
export type Copy = {
  locale: Locale;
  /** Label shown on the link that leads to the other language. */
  otherLocaleName: string;
  switchLabel: string;

  role: string;
  railTagline: string;
  location: string;
  workMode: string;
  timezone: string;
  availableLabel: string;

  statement: string;
  intro: string;
  cvLink: string;
  cardHint: string;
  cardTurnBack: string;
  cardTurnOver: string;
  cardFields: { email: string; phone: string; linkedin: string; github: string };
  cardLocation: string;
  /** Composed with profile.since, which is the only place the year lives. */
  cardSincePrefix: string;

  nav: Record<SectionId, string>;
  headings: Record<Exclude<SectionId, "top">, string>;
  meta: Record<Exclude<SectionId, "top">, string>;

  experience: Role[];
  builds: Build[];
  stack: Record<StackGroupId, string>;
  repos: Record<RepoId, { label: string; summary: string }>;
  repoLive: string;
  repoSource: string;

  contactAsk: string;
  educationLabel: string;
  education: string;
  builtWith: string;
  skipToContent: string;
  sectionsNavLabel: string;

  metaTitle: string;
  metaDescription: string;

  /** The downloadable CV is generated from this plus the shared data. */
  cv: {
    /** Published at public/<file>. */
    file: string;
    /** Name the browser saves it as. */
    saveAs: string;
    headline: string;
    summary: string;
    languages: string;
    labels: {
      summary: string;
      experience: string;
      skills: string;
      /** Heading over the education and languages rows. */
      background: string;
      education: string;
      languages: string;
    };
  };
};
