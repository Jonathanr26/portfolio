# Portfolio — Jonathan Rodriguez

Single-page portfolio in English and Spanish. Next.js 16, React 19.3, TypeScript,
Tailwind CSS v4.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm cv         # regenerate the CV PDFs into public/
pnpm check      # data + CV sanity check
```

## Where things live

```
src/
  app/
    globals.css      design tokens and the few custom classes
    [locale]/        layout, page, opengraph-image — one static build per language
  components/
    layout/          Rail (sticky name, nav, availability), LocaleToggle
    sections/        Intro, Work, Builds, Stack, PublicCode, Contact
    ui/              Section, CredentialCard
  data/
    profile.ts       facts that don't change with language
    copy/            en.ts, es.ts, types.ts — every string that does
  hooks/             useActiveSection
scripts/
  cv.mjs             renders the CV PDFs from the data above
  check.mjs          pnpm check
```

**Content lives in `src/data/`, never in the components.** Sections read `copy`
from props; nothing localizable is written inside a component.

## The two languages

`/en` and `/es` are separate statically rendered pages, each with its own `lang`,
metadata, `hreflang` alternates and OG image. Bare `/` redirects to `/en`
(`next.config.ts`). The toggle in the rail is a plain link to the twin page — the
language is URL state, so a shared link keeps the language it was read in.

Where a string goes:

| Kind | File | Examples |
|---|---|---|
| Same in both languages | `src/data/profile.ts` | email, phone, URLs, repo links, tech names |
| Differs by language | `src/data/copy/en.ts`, `copy/es.ts` | headings, prose, job bullets, labels |

Both dictionaries satisfy the `Copy` type in `src/data/copy/types.ts`, so a field
added to one **fails the build** until the other catches up. What types cannot
catch — a job added in English and forgotten in Spanish, or Spanish prose left as
a copy of the English — `pnpm check` catches.

Adding a third language: add it to `locales` in `profile.ts`, add
`src/data/copy/<code>.ts`, register it in `copy/index.ts`. Routing and metadata
follow on their own.

## Design tokens

Every colour and type token is in `@theme` at the top of `src/app/globals.css`.
Change them there and the whole page follows — nothing is hardcoded in components.

| Token | Value | Used for |
|---|---|---|
| `void` | `#070b10` | page background |
| `ink` / `ink-2` | `#0d141b` / `#121c25` | raised surfaces |
| `line` | `#1c2630` | hairlines |
| `paper` | `#eaf0f4` | primary text |
| `mist` | `#8a9ba8` | secondary text |
| `brass` | `#e8b75a` | current role, the ask |
| `signal` | `#5bc8d8` | scope of involvement, focus ring |

Type: Instrument Serif for display, Archivo for everything else, with `tnum`
on so figures line up.

Custom classes (`.link`, `.aura`, `.rise`, `.card-*`) sit inside
`@layer components`. Keep them there — unlayered CSS beats Tailwind utilities,
so moving them out silently breaks things like `text-brass` on a `.link`.

## The CV

`public/cv.pdf` and `public/cv-es.pdf` are **generated**, not hand-made. `pnpm cv`
renders them from `src/data/profile.ts` and the copy dictionaries — the same data
the site reads — so the CV cannot drift from the page. Edit a job bullet once and
both follow.

Edit content, then run `pnpm cv`. Two constraints `pnpm check` enforces:

- **One A4 page per language.** Spanish runs about 4% longer, so it is the binding
  constraint; `9.3pt/1.36` is the largest type that fits both. If you add content
  and the check fails, cut a bullet rather than shrinking the type further.
- **A real text layer, no images.** That is what an ATS parses. Ligatures are
  switched off on purpose: with them on, Helvetica renders `fi` as one glyph and
  "fintech" stops matching a recruiter's search.

Playwright is a devDependency used only by `pnpm cv`. The PDFs are committed, so
`next build` and the deploy never need it. On a fresh machine the script will tell
you to run `pnpm exec playwright install chromium`.

## Before deploying

1. Set the real domain in `profile.site` (`src/data/profile.ts`) — metadata,
   canonical URLs, `hreflang` and JSON-LD all read it from there. It currently
   says `https://jonathanrodriguez.dev`.
2. `pnpm build`, then deploy. Vercel needs no config.

## Notes

- Dark only, by design. No theme toggle.
- No i18n library. Two dictionaries and a `[locale]` segment cover this site;
  `next-intl` earns its place once there are plurals, dates or numbers to format.
- One entrance animation on load; everything else responds to a click or hover.
  `prefers-reduced-motion` turns the entrance off.
- Section metas drop to their own line under `sm`, where longer Spanish strings
  would otherwise push the heading row past the viewport. Verified at 320px.
