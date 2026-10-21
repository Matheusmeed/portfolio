import { Hero } from "@/components/home/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionaries } from "@/content";
import { getLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getLocale();
  const dict = dictionaries[locale];

  return (
    <>
      <SiteHeader locale={locale} dict={dict} path="/" isHome />
      <main id="main">
        <Hero dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
