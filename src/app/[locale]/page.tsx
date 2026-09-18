import { notFound } from "next/navigation";
import { Rail } from "@/components/layout/Rail";
import { Builds } from "@/components/sections/Builds";
import { Contact } from "@/components/sections/Contact";
import { Intro } from "@/components/sections/Intro";
import { PublicCode } from "@/components/sections/PublicCode";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { getCopy } from "@/data/copy";
import { isLocale, profile } from "@/data/profile";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: copy.role,
    description: copy.metaDescription,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: `${profile.site}/${locale}`,
    sameAs: [profile.github, profile.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Colima", addressCountry: "MX" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad de Colima" },
    knowsAbout: ["React", "Next.js", "TypeScript", "NestJS", "React Native", "PostgreSQL"],
  };

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:text-void"
      >
        {copy.skipToContent}
      </a>

      <div className="mx-auto w-full max-w-[76rem] px-6 pb-24 sm:px-10 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-x-20 lg:px-12">
        <Rail copy={copy} />
        <main className="pb-10">
          <Intro copy={copy} />
          <Work copy={copy} />
          <Builds copy={copy} />
          <Stack copy={copy} />
          <PublicCode copy={copy} />
          <Contact copy={copy} />
        </main>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
