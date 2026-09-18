import { type Locale, locales } from "@/data/profile";
import { en } from "./en";
import { es } from "./es";
import type { Copy } from "./types";

const dictionaries: Record<Locale, Copy> = { en, es };

export const getCopy = (locale: Locale): Copy => dictionaries[locale];

/** The other language, for the toggle. */
export const otherLocale = (locale: Locale): Locale =>
  locales[(locales.indexOf(locale) + 1) % locales.length];

export type { Build, Copy, Role } from "./types";
