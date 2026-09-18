/**
 * Renders the CV to public/ as PDF, from the same data the site reads, so the two
 * can never drift. Chromium prints a real text layer, which is what an ATS parses.
 *
 * Usage: pnpm cv
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { en } from "../src/data/copy/en.ts";
import { es } from "../src/data/copy/es.ts";
import { profile, stackGroups } from "../src/data/profile.ts";

// Playwright is a devDependency used only here. The generated PDFs are committed,
// so `next build` and the deploy never need it.
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("pnpm cv needs Playwright. Run: pnpm exec playwright install chromium");
  process.exit(1);
}

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));

const escape = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

export function html(copy) {
  const contact = [
    `<a href="mailto:${profile.email}">${profile.email}</a>`,
    escape(profile.phone),
    `<a href="${profile.linkedin}">${profile.linkedinHandle}</a>`,
    `<a href="${profile.github}">github.com/${profile.githubHandle}</a>`,
    `${escape(copy.location)} &middot; ${escape(copy.workMode)}`,
  ].join('<span class="sep">|</span>');

  const roles = copy.experience
    .map(
      (r) => `
      <article class="role">
        <h3>${escape(r.title)}<span class="at">, ${escape(r.company)}</span></h3>
        <p class="when">${escape(r.cvPeriod)} &middot; ${escape(r.place)}</p>
        <ul>${r.bullets.map((b) => `<li>${escape(b)}</li>`).join("")}</ul>
      </article>`,
    )
    .join("");

  const skills = stackGroups
    .map(
      (g) => `
      <div class="skill">
        <dt>${escape(copy.stack[g.id])}</dt>
        <dd>${g.items.map(escape).join(", ")}</dd>
      </div>`,
    )
    .join("");

  return `<!doctype html>
<html lang="${copy.locale}">
<meta charset="utf-8">
<title>${escape(copy.cv.saveAs)}</title>
<style>
  @page { size: A4; margin: 11mm 14mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    /* Largest size that still fits one A4 page in BOTH languages. Spanish runs about
       4% longer, so it is the binding constraint. Re-solve this by sweeping sizes
       against real PDF page counts when content grows; pnpm check enforces it. */
    font: 9.2pt/1.34 "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #15181c;
    -webkit-print-color-adjust: exact;
    /* An fi ligature makes "fintech" and "confidencial" unsearchable once an ATS
       reads the text layer, so ligatures stay off in the CV. */
    font-variant-ligatures: none;
    -webkit-font-feature-settings: "liga" 0, "clig" 0;
  }
  a { color: #15181c; text-decoration: none; }
  h1 { margin: 0; font-size: 21pt; font-weight: 600; letter-spacing: -0.01em; }
  .headline { margin: 3pt 0 0; font-size: 9.4pt; color: #55606b; }
  .contact { margin: 7pt 0 0; font-size: 8.6pt; color: #3d464f; }
  .sep { padding: 0 5pt; color: #b3bcc4; }
  header { border-bottom: 1.2pt solid #15181c; padding-bottom: 8pt; }
  section { margin-top: 10pt; break-inside: avoid; }
  h2 {
    margin: 0 0 7pt;
    font-size: 8.4pt;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #15181c;
    border-bottom: 0.5pt solid #ccd3d9;
    padding-bottom: 3pt;
  }
  p.summary { margin: 0; }
  .role { margin-bottom: 8pt; break-inside: avoid; }
  .role:last-child { margin-bottom: 0; }
  .role h3 { margin: 0; font-size: 10.2pt; font-weight: 600; }
  .role h3 .at { font-weight: 400; }
  .when { margin: 1pt 0 4pt; font-size: 8.4pt; color: #6b7681; }
  .role ul { margin: 0; padding-left: 11pt; }
  .role li { margin-bottom: 2.2pt; }
  dl { margin: 0; display: grid; grid-template-columns: 37mm 1fr; row-gap: 3pt; }
  .skill { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; }
  dt { font-weight: 600; }
  dd { margin: 0; }
</style>
<body>
  <header>
    <h1>${escape(profile.fullName)}</h1>
    <p class="headline">${escape(copy.cv.headline)}</p>
    <p class="contact">${contact}</p>
  </header>

  <section>
    <h2>${escape(copy.cv.labels.summary)}</h2>
    <p class="summary">${escape(copy.cv.summary)}</p>
  </section>

  <section>
    <h2>${escape(copy.cv.labels.experience)}</h2>
    ${roles}
  </section>

  <section>
    <h2>${escape(copy.cv.labels.skills)}</h2>
    <dl>${skills}</dl>
  </section>

  <section>
    <h2>${escape(copy.cv.labels.background)}</h2>
    <dl>
      <div class="skill">
        <dt>${escape(copy.cv.labels.education)}</dt>
        <dd>${escape(copy.education)}</dd>
      </div>
      <div class="skill">
        <dt>${escape(copy.cv.labels.languages)}</dt>
        <dd>${escape(copy.cv.languages)}</dd>
      </div>
    </dl>
  </section>
</body>
</html>`;
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const copy of [en, es]) {
    await page.setContent(html(copy), { waitUntil: "load" });
    const pdf = await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true });
    writeFileSync(out(copy.cv.file), pdf);
    console.log(`wrote public/${copy.cv.file}  ${(pdf.length / 1024).toFixed(0)} KB`);
  }

  await browser.close();
}

if (import.meta.main) await main();
