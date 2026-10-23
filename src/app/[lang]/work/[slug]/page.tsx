import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseHero } from "@/components/case/case-hero";
import { CasePager } from "@/components/case/case-pager";
import { CaseSection } from "@/components/case/case-section";
import { ContactStrip } from "@/components/case/contact-strip";
import { Results } from "@/components/case/results";
import { Steps } from "@/components/case/steps";
import { MediaFrame } from "@/components/media-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseSlugs, dictionaries } from "@/content";
import { localizePath } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/metadata";

type Props = PageProps<"/[lang]/work/[slug]">;

// Only the cases listed in the content exist; any other slug is a 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const item = dictionaries[locale].cases.find((entry) => entry.slug === slug);
  if (!item) return {};

  return pageMetadata({
    locale,
    path: `/work/${slug}`,
    title: item.title,
    description: item.summary,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = dictionaries[locale];

  const index = dict.cases.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const item = dict.cases[index];
  const home = localizePath(locale, "/");
  const hasNext = index < dict.cases.length - 1;
  const sibling = dict.cases[hasNext ? index + 1 : index - 1];

  return (
    <>
      <SiteHeader locale={locale} dict={dict} path={`/work/${slug}`} current="work" />
      <main id="main">
        <CaseHero item={item} backHref={`${home}#work`} backLabel={dict.casePage.back} />

        <section aria-label={dict.casePage.media} className="border-b border-divider">
          <div className="site-container py-[clamp(2rem,4.4vw,4rem)]">
            <MediaFrame
              media={item.media}
              sizes="(min-width: 1200px) 1136px, 100vw"
              className="aspect-video min-h-55 rounded-[20px] border border-edge"
            />
          </div>
        </section>

        <CaseSection id="challenge" title={dict.casePage.challenge}>
          <div className="flex flex-col gap-5 text-reading text-soft">
            {item.challenge.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="what-i-did" title={dict.casePage.steps}>
          <Steps steps={item.steps} />
        </CaseSection>

        <CaseSection id="results" title={dict.casePage.results}>
          <Results results={item.results} />
        </CaseSection>

        {sibling && (
          <CasePager
            item={sibling}
            href={localizePath(locale, `/work/${sibling.slug}`)}
            label={hasNext ? dict.casePage.next : dict.casePage.previous}
            direction={hasNext ? "next" : "previous"}
          />
        )}

        <ContactStrip dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
