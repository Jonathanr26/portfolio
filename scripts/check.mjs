// Smallest thing that fails if the content data rots or the two languages drift.
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const src = (f) => readFileSync(new URL(`../src/${f}`, import.meta.url), "utf8");
const profile = src("data/profile.ts");
const en = src("data/copy/en.ts");
const es = src("data/copy/es.ts");

// Contact details must stay real and reachable.
const email = profile.match(/email:\s*"([^"]+)"/)[1];
assert.match(email, /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i, `bad email: ${email}`);
assert.match(profile.match(/linkedin:\s*"([^"]+)"/)[1], /^https:\/\/www\.linkedin\.com\/in\//);
assert.match(profile.match(/github:\s*"([^"]+)"/)[1], /^https:\/\/github\.com\/[\w-]+$/);

// Every public repo needs a well-formed source link.
const repoUrls = [...profile.matchAll(/repo:\s*"([^"]+)"/g)].map((m) => m[1]);
assert.ok(repoUrls.length > 0, "no public repos listed");
for (const u of repoUrls) {
  assert.match(u, /^https:\/\/github\.com\/[\w-]+\/[\w.-]+$/, `bad repo url: ${u}`);
}

// Rail nav ids must match the sections the page actually renders inside <main>.
const page = src("app/[locale]/page.tsx");
const navIds = profile
  .match(/sectionIds = \[([^\]]+)\]/)[1]
  .match(/"[^"]+"/g)
  .map((s) => s.replaceAll('"', ""));
const main = page.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1];
const rendered = [...main.matchAll(/<(\w+) copy=/g)].map((m) => m[1]);
assert.equal(
  navIds.length,
  rendered.length,
  `nav has ${navIds.length} ids but the page renders ${rendered.length} sections`,
);

// The two dictionaries must stay in step. TypeScript catches missing fields;
// it cannot catch a job added to one language and forgotten in the other.
const count = (dict, key) => [...dict.matchAll(new RegExp(key, "g"))].length;
for (const [key, label] of [
  ["\\bcompany:", "experience entries"],
  ["\\bscope:", "builds"],
]) {
  const a = count(en, key);
  const b = count(es, key);
  assert.equal(a, b, `en has ${a} ${label}, es has ${b} — one language is behind`);
}

// Catch prose that was copied over and never translated.
const field = (dict, key) => dict.match(new RegExp(`${key}:\\s*\\n?\\s*"([^"]+)"`))?.[1];
for (const key of ["statement", "intro", "contactAsk", "railTagline"]) {
  const a = field(en, key);
  const b = field(es, key);
  assert.ok(a && b, `missing ${key} in one dictionary`);
  assert.notEqual(b, a, `${key} is identical in both languages — es was never translated`);
}

// The CV each language links to must exist, be one page, and carry a text layer
// an ATS can read. Regenerate with `pnpm cv`.
const cvFiles = [...(en + es).matchAll(/file:\s*"([^"]+\.pdf)"/g)].map((m) => m[1]);
assert.equal(cvFiles.length, 2, `expected 2 CV files, found ${cvFiles.length}`);
for (const f of cvFiles) {
  const url = new URL(`../public/${f}`, import.meta.url);
  assert.ok(existsSync(url), `public/${f} is missing — run pnpm cv`);
  const pdf = readFileSync(url, "latin1");
  const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  assert.equal(pages, 1, `public/${f} is ${pages} pages — it must fit on one`);
  assert.ok(!/\/Subtype\s*\/Image/.test(pdf), `public/${f} contains an image; an ATS needs text`);
  assert.match(pdf, /\/BaseFont/, `public/${f} has no embedded font, so it has no text layer`);
}

console.log(
  `check ok: ${email} | ${repoUrls.length} repos | ${navIds.length} sections | ${count(en, "\\bcompany:")} roles | ${cvFiles.join(" + ")} | en+es in step`,
);
