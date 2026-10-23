import type { MetadataRoute } from "next";
import { caseSlugs } from "@/content";
import { htmlLang, localizePath, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const absolute = (path: string) => new URL(path, siteUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...caseSlugs.map((slug) => `/work/${slug}`)];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absolute(localizePath(locale, path)),
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [htmlLang[item], absolute(localizePath(item, path))]),
        ),
      },
    })),
  );
}
