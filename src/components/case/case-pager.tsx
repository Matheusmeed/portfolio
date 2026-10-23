import Link from "next/link";
import type { CaseStudy } from "@/content";
import { ArrowLeft, ArrowRight } from "../icons";

type Props = {
  item: CaseStudy;
  href: string;
  label: string;
  direction: "next" | "previous";
};

export function CasePager({ item, href, label, direction }: Props) {
  const Arrow = direction === "next" ? ArrowRight : ArrowLeft;

  const arrow = (
    <span
      aria-hidden="true"
      className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition-transform motion-safe:group-hover:scale-105"
    >
      <Arrow className="size-6" />
    </span>
  );

  const text = (
    <span className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
      <span className="eyebrow">
        {label} · Case {item.number}
      </span>
      <span className="text-teaser font-semibold text-balance transition-colors group-hover:text-accent">
        {item.title}
      </span>
      <span className="max-w-[40em] text-muted text-pretty">{item.summary}</span>
    </span>
  );

  return (
    <section className="border-b border-divider">
      <div className="site-container py-[clamp(3rem,5.6vw,5rem)]">
        <Link
          href={href}
          className="group flex flex-wrap items-center justify-between gap-x-8 gap-y-5 rounded-[20px] border border-edge bg-surface p-[clamp(1.5rem,2.8vw,2.5rem)] transition-colors hover:border-control"
        >
          {direction === "next" ? (
            <>
              {text}
              {arrow}
            </>
          ) : (
            <>
              {arrow}
              {text}
            </>
          )}
        </Link>
      </div>
    </section>
  );
}
