"use client";

import type { Copy } from "@/data/copy";
import { profile, sectionIds } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { LocaleToggle } from "./LocaleToggle";

export function Rail({ copy }: { copy: Copy }) {
  const active = useActiveSection(sectionIds);

  return (
    <header className="pt-8 lg:sticky lg:top-0 lg:max-h-screen lg:pt-16">
      <div className="rise" style={{ ["--d" as string]: "60ms" }}>
        <a href="#top" className="font-display text-4xl leading-[0.9] tracking-tight sm:text-5xl">
          Jonathan
          <br />
          <span className="text-mist">Rodriguez</span>
        </a>
        <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-mist">{copy.railTagline}</p>
      </div>

      <nav
        aria-label={copy.sectionsNavLabel}
        className="rise hidden lg:mt-14 lg:block"
        style={{ ["--d" as string]: "180ms" }}
      >
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm lg:block lg:space-y-2.5">
          {sectionIds.map((id) => {
            const on = active === id;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  className={`group flex items-center gap-2 transition-colors ${
                    on ? "text-paper" : "text-mist hover:text-paper"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`hidden h-px bg-current transition-all duration-500 lg:block ${
                      on ? "w-8 opacity-100" : "w-3 opacity-45 group-hover:w-6"
                    }`}
                  />
                  {copy.nav[id]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rise mt-6 lg:mt-14" style={{ ["--d" as string]: "300ms" }}>
        {profile.available && (
          <p className="flex items-center gap-2 text-sm text-paper">
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-brass motion-safe:animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brass" />
            </span>
            {copy.availableLabel}
          </p>
        )}
        <p className="mt-3 hidden text-sm text-mist lg:block">
          {copy.location}
          <br />
          {copy.workMode}, {copy.timezone}
        </p>
        <div className="mt-4 lg:mt-5">
          <LocaleToggle copy={copy} />
        </div>
      </div>
    </header>
  );
}
