import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { getCopy } from "@/data/copy";
import { isLocale, locales, profile } from "@/data/profile";
import "../globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  return {
    metadataBase: new URL(profile.site),
    title: copy.metaTitle,
    description: copy.metaDescription,
    authors: [{ name: profile.fullName, url: profile.github }],
    keywords: [
      "Full Stack Developer",
      "Frontend Developer",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "React Native",
      "Mexico",
      "Remote",
    ],
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "profile",
      locale: locale === "es" ? "es_MX" : "en_US",
      url: `/${locale}`,
    },
    twitter: { card: "summary_large_image", title: copy.metaTitle, description: copy.metaDescription },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l === "es" ? "es-MX" : "en-US", `/${l}`]),
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
