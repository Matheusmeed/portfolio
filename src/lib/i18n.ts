export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie the proxy uses to remember the language a visitor picked. */
export const localeCookie = "NEXT_LOCALE";

export const htmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Public URL of a page. English lives at the root, other languages under a prefix. */
export function localizePath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Link used by the language switch. It always carries the prefix, so the proxy
 * can save the choice before redirecting to the public URL.
 */
export function switchLocalePath(locale: Locale, path = "/"): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function languageAlternates(path: string) {
  return {
    en: localizePath("en", path),
    "pt-BR": localizePath("pt", path),
    "x-default": localizePath(defaultLocale, path),
  };
}
