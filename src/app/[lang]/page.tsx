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
      <main id="main" className="site-container section-y">
        <p className="eyebrow">{dict.hero.eyebrow}</p>
        <h1 className="mt-7 text-hero font-semibold text-balance">{dict.hero.title}</h1>
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
