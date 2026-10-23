import Link from "next/link";
import type { CaseStudy } from "@/content";
import { ArrowLeft } from "../icons";

type Props = {
  item: CaseStudy;
  backHref: string;
  backLabel: string;
};

export function CaseHero({ item, backHref, backLabel }: Props) {
  return (
    <section aria-labelledby="case-title" className="border-b border-divider bg-ink bg-blueprint">
      <div className="site-container flex flex-col gap-7 pt-[clamp(2rem,4.4vw,4rem)] pb-[clamp(3rem,6.7vw,6rem)]">
        <Link
          href={backHref}
          className="inline-flex min-h-11 items-center gap-2 self-start text-[15px] text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </Link>
        <div className="flex max-w-[60rem] flex-col gap-5">
          <p className="eyebrow">Case {item.number}</p>
          <h1 id="case-title" className="text-page font-semibold text-balance">
            {item.title}
          </h1>
          <p className="max-w-[40em] text-lead text-muted text-pretty">{item.intro}</p>
        </div>
        <dl className="grid grid-fit-200 gap-x-6 gap-y-4 border-y border-edge py-6">
          {item.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5">
              <dt className="font-mono text-[13px] tracking-[0.06em] text-faint uppercase">
                {fact.label}
              </dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
