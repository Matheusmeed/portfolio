import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { Work } from "@/components/home/work";
import { PersonJsonLd } from "@/components/person-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionaries } from "@/content";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = dictionaries[locale];

  return pageMetadata({
    locale,
    path: "/",
    title: meta.title,
    description: meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];

  return (
    <>
      <SiteHeader locale={locale} dict={dict} path="/" isHome />
      <main id="main">
        <Hero dict={dict} />
        <Work locale={locale} dict={dict} />
        <Experience dict={dict} />
        <Skills dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
      <PersonJsonLd />
    </>
  );
}
