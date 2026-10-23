import type { Metadata } from "next";
import { languageAlternates, localizePath, locales, ogLocale, type Locale } from "./i18n";
import { site } from "./site";

type PageMetadataOptions = {
  locale: Locale;
  /** Path without the language prefix, e.g. "/" or "/work/360-homes". */
  path: string;
  title: string;
  description: string;
  /** Use the title as is, without the "· Matheus Medeiros" suffix. */
  absoluteTitle?: boolean;
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const url = localizePath(locale, path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => ogLocale[item]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
