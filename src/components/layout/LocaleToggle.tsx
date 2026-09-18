import Link from "next/link";
import type { Copy } from "@/data/copy";
import { otherLocale } from "@/data/copy";

/** The language lives in the URL, so the toggle is just a link to the twin page. */
export function LocaleToggle({ copy }: { copy: Copy }) {
  return (
    <Link
      href={`/${otherLocale(copy.locale)}`}
      aria-label={copy.switchLabel}
      className="link text-sm text-mist hover:text-paper"
    >
      {copy.otherLocaleName}
    </Link>
  );
}
