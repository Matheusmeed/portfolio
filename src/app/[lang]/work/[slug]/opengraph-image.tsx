import { caseSlugs, dictionaries } from "@/content";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = "Case study by Matheus Medeiros";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.flatMap((lang) => caseSlugs.map((slug) => ({ lang, slug })));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const { cases } = dictionaries[isLocale(lang) ? lang : defaultLocale];
  const item = cases.find((entry) => entry.slug === slug) ?? cases[0];

  return renderOgImage({
    eyebrow: `Case ${item.number} · ${item.client}`,
    title: item.title,
    footer: `${site.name} · ${site.jobTitle}`,
  });
}
