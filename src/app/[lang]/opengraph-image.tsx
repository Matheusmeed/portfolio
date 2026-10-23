import { dictionaries } from "@/content";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Matheus Medeiros — Frontend Engineer";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = dictionaries[isLocale(lang) ? lang : defaultLocale];

  return renderOgImage({
    eyebrow: hero.eyebrow,
    title: hero.title,
    footer: hero.availability,
    available: true,
  });
}
