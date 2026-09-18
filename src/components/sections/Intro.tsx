import { CredentialCard } from "@/components/ui/CredentialCard";
import type { Copy } from "@/data/copy";
import { profile } from "@/data/profile";

export function Intro({ copy }: { copy: Copy }) {
  return (
    <section id="top" className="relative pt-6 lg:pt-16">
      <span aria-hidden className="aura" />

      <h1
        className="rise font-display text-display max-w-[24ch] tracking-[-0.015em] text-balance"
        style={{ ["--d" as string]: "120ms" }}
      >
        {copy.statement}
      </h1>

      <p
        className="rise mt-7 max-w-[58ch] text-[1.05rem] leading-[1.7] text-mist"
        style={{ ["--d" as string]: "240ms" }}
      >
        {copy.intro}
      </p>

      <div
        className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm"
        style={{ ["--d" as string]: "340ms" }}
      >
        <a href={`mailto:${profile.email}`} className="link link-on text-paper">
          {profile.email}
        </a>
        <a
          href={`/${copy.cv.file}`}
          download={copy.cv.saveAs}
          className="link text-mist hover:text-paper"
        >
          {copy.cvLink}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="link text-mist hover:text-paper"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link text-mist hover:text-paper"
        >
          LinkedIn
        </a>
      </div>

      <div className="rise mt-12" style={{ ["--d" as string]: "460ms" }}>
        <CredentialCard copy={copy} />
        <p className="mt-3 text-xs text-mist">{copy.cardHint}</p>
      </div>
    </section>
  );
}
