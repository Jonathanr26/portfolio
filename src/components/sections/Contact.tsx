import { Section } from "@/components/ui/Section";
import type { Copy } from "@/data/copy";
import { profile } from "@/data/profile";

export function Contact({ copy }: { copy: Copy }) {
  return (
    <Section id="contact" title={copy.headings.contact} meta={copy.meta.contact}>
      <p className="font-display max-w-[24ch] text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1]">
        {copy.contactAsk}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="link link-on mt-7 inline-block text-lg text-brass sm:text-xl"
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm">
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="link text-mist hover:text-paper"
        >
          {profile.phone}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link text-mist hover:text-paper"
        >
          LinkedIn
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
          href={`/${copy.cv.file}`}
          download={copy.cv.saveAs}
          className="link text-mist hover:text-paper"
        >
          {copy.cvLink}
        </a>
      </div>

      <footer className="mt-20 grid gap-y-4 border-t border-line pt-7 text-xs text-mist sm:grid-cols-[10rem_1fr]">
        <p>{copy.educationLabel}</p>
        <p className="max-w-[60ch]">{copy.education}</p>
        <p className="sm:col-start-2">{copy.builtWith}</p>
      </footer>
    </Section>
  );
}
