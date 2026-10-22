import type { Dictionary } from "@/content";
import { localizePath, type Locale } from "@/lib/i18n";
import { SectionHeading } from "../section-heading";
import { CaseCard } from "./case-card";

export function Work({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-divider">
      <div className="site-container section-y flex flex-col gap-8">
        <SectionHeading id="work-title" {...dict.sections.work} />
        {dict.cases.map((item) => (
          <CaseCard
            key={item.slug}
            item={item}
            href={localizePath(locale, `/work/${item.slug}`)}
            cta={dict.readCase}
          />
        ))}
      </div>
    </section>
  );
}
