"use client";

import { useRef, useState, type PointerEvent } from "react";
import type { Copy } from "@/data/copy";
import { profile } from "@/data/profile";

export function CredentialCard({ copy }: { copy: Copy }) {
  const stage = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const contacts = [
    { label: copy.cardFields.email, value: profile.email, href: `mailto:${profile.email}` },
    {
      label: copy.cardFields.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { label: copy.cardFields.linkedin, value: profile.linkedinHandle, href: profile.linkedin },
    { label: copy.cardFields.github, value: profile.githubHandle, href: profile.github },
  ];

  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    const el = stage.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 11}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--sheen", "1");
  };

  const rest = () => {
    const el = stage.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--sheen", "0");
  };

  const flip = (next: boolean) => {
    rest();
    setFlipped(next);
  };

  return (
    <div
      ref={stage}
      className="card-stage"
      onPointerMove={tilt}
      onPointerLeave={rest}
      style={{ ["--flip" as string]: flipped ? "180deg" : "0deg" }}
    >
      <div className="card-inner">
        {/* Front */}
        <div className="card-face card-front" inert={flipped}>
          <div className="card-sheen" />
          <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <span className="font-display text-2xl leading-none text-paper">
                {profile.initials}
              </span>
              <Contactless />
            </div>

            <Chip />

            <div className="space-y-3">
              <p className="text-[0.95rem] font-medium tracking-[0.14em] uppercase sm:text-base">
                <span className="block text-paper">{profile.cardName[0]}</span>
                <span className="block text-mist">{profile.cardName[1]}</span>
              </p>
              <div className="flex items-end justify-between gap-4 text-[0.6rem] tracking-[0.18em] text-mist uppercase">
                <span>{copy.cardLocation}</span>
                <span className="text-brass">
                  {copy.cardSincePrefix} {profile.since}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => flip(true)}
            className="absolute inset-0 cursor-pointer rounded-[1.15rem]"
          >
            <span className="sr-only">{copy.cardTurnOver}</span>
          </button>
        </div>

        {/* Back */}
        <div className="card-face card-back" inert={!flipped}>
          <div className="card-sheen" />
          <div className="relative flex h-full flex-col">
            <div className="mt-5 h-9 w-full bg-[#05080c] sm:mt-6 sm:h-10" />
            <div className="flex flex-1 flex-col justify-between gap-3 p-5 pt-4 sm:p-6 sm:pt-5">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {contacts.map((c) => (
                  <li key={c.label} className="min-w-0">
                    <span className="block text-[0.58rem] tracking-[0.16em] text-mist uppercase">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="link block truncate text-[0.8rem] text-paper"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between gap-4 border-t border-line pt-3">
                <span className="font-display text-lg text-brass italic">{profile.name}</span>
                <button
                  type="button"
                  onClick={() => flip(false)}
                  className="cursor-pointer text-[0.62rem] tracking-[0.16em] text-mist uppercase transition-colors hover:text-paper"
                >
                  {copy.cardTurnBack}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <svg width="44" height="34" viewBox="0 0 44 34" aria-hidden className="drop-shadow-sm">
      <defs>
        <linearGradient id="chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0cf8d" />
          <stop offset="48%" stopColor="#c9983c" />
          <stop offset="100%" stopColor="#8e6a22" />
        </linearGradient>
      </defs>
      <rect width="44" height="34" rx="5" fill="url(#chip)" />
      <g stroke="#6b4f18" strokeWidth="1" opacity="0.65">
        <path d="M0 11h13M31 11h13M0 23h13M31 23h13M22 0v5M22 29v5" />
        <rect x="13" y="5" width="18" height="24" rx="3" fill="none" />
      </g>
    </svg>
  );
}

function Contactless() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
      <g fill="none" stroke="#8a9ba8" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 3a13 13 0 0 1 0 16" opacity="0.4" />
        <path d="M7 6a8.5 8.5 0 0 1 0 10" opacity="0.6" />
        <path d="M12 8.5a4.5 4.5 0 0 1 0 5" opacity="0.85" />
      </g>
    </svg>
  );
}
