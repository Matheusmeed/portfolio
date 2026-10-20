import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { pt } from "./pt";
import type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, pt };

/** Case slugs are shared by every language, so URLs only differ by prefix. */
export const caseSlugs = en.cases.map((item) => item.slug);

export type { CaseStudy, Dictionary, Media } from "./types";
