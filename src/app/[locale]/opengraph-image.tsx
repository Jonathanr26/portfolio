import { ImageResponse } from "next/og";
import { getCopy } from "@/data/copy";
import { defaultLocale, isLocale, locales, profile } from "@/data/profile";

// Without this the image route is rendered on demand, so a social crawler pays
// for the first render. One PNG per locale is prerendered at build time instead.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// The role title is the same in both languages, so one alt string covers both.
export const alt = `${profile.name}, Full Stack Developer`;

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const copy = getCopy(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(1000px 600px at 15% 10%, #16222c 0%, #0b1016 55%, #070b10 100%)",
          color: "#eaf0f4",
          fontSize: 32,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8a9ba8" }}>
          <span>{profile.name}</span>
          <span>{copy.cardLocation}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 940 }}>{copy.statement}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#e8b75a" }}>
            <span style={{ width: 56, height: 2, background: "#e8b75a" }} />
            <span>{copy.role}</span>
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#8a9ba8" }}>
          React / Next.js / TypeScript / NestJS / React Native
        </div>
      </div>
    ),
    size,
  );
}
