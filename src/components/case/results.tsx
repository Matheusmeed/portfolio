import type { CaseStudy } from "@/content";
import { Check } from "../icons";

const card =
  "flex flex-col rounded-2xl border border-edge bg-surface p-[clamp(1.25rem,2.2vw,1.75rem)]";

export function Results({ results }: { results: CaseStudy["results"] }) {
  const { metrics, highlights, summary } = results;

  return (
    <div className="flex flex-col gap-6">
      {metrics && (
        <ul className="grid grid-fit-240 gap-4">
          {metrics.map((metric) => (
            <li key={metric.label} className={`${card} gap-1.5`}>
              <span className="font-mono text-[13px] tracking-[0.06em] text-faint uppercase">
                {metric.prefix}
              </span>
              <span className="font-mono text-metric text-accent">{metric.value}</span>
              <span className="text-[17px]">{metric.label}</span>
            </li>
          ))}
        </ul>
      )}
      {highlights && (
        <ul className="grid grid-fit-240 gap-4">
          {highlights.map((text) => (
            <li key={text} className={`${card} gap-3.5`}>
              <Check className="size-6 text-accent" />
              <p className="text-reading leading-[1.6] text-pretty">{text}</p>
            </li>
          ))}
        </ul>
      )}
      {summary && <p className="text-reading text-soft text-pretty">{summary}</p>}
    </div>
  );
}
