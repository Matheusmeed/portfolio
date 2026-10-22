import Link from "next/link";
import type { CaseStudy } from "@/content";
import { ArrowRight } from "../icons";
import { MediaFrame } from "../media-frame";

type Props = {
  item: CaseStudy;
  href: string;
  cta: string;
};

export function CaseCard({ item, href, cta }: Props) {
  return (
    <article className="grid grid-fit-480 overflow-hidden rounded-[20px] border border-edge bg-surface">
      <MediaFrame
        media={item.media}
        sizes="(min-width: 1100px) 568px, 100vw"
        className="min-h-[clamp(15rem,26vw,23.75rem)]"
      />
      <div className="flex flex-col gap-5.5 p-[clamp(1.5rem,2.8vw,2.5rem)]">
        <p className="eyebrow tracking-[0.06em]">
          Case {item.number} · {item.client}
        </p>
        <h3 className="text-h3 font-semibold text-balance">{item.title}</h3>
        <p className="text-muted text-pretty">{item.summary}</p>
        <dl className="grid grid-fit-130 gap-5 border-y border-edge py-5">
          {item.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-1">
              <dt className="text-[13px] text-muted">{stat.label}</dt>
              <dd className="font-mono text-stat">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-edge-strong px-3 py-1.5 text-[13px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {cta}
          <span className="sr-only">: {item.title}</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
