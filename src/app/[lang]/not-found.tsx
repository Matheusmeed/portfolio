import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dictionaries } from "@/content";
import { localizePath } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { primaryButton } from "@/lib/styles";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = dictionaries[locale];

  return (
    <>
      <SiteHeader locale={locale} dict={dict} path="/" />
      <main id="main">
        <section aria-labelledby="not-found-title" className="border-b border-divider bg-ink bg-blueprint">
          <div className="site-container flex flex-col items-start gap-6 py-[clamp(5rem,10vw,9rem)]">
            <p className="eyebrow">404</p>
            <h1 id="not-found-title" className="text-page font-semibold text-balance">
              {dict.notFound.title}
            </h1>
            <p className="text-lead text-muted">{dict.notFound.text}</p>
            <Link href={localizePath(locale, "/")} className={`inline-flex ${primaryButton}`}>
              {dict.notFound.cta}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
