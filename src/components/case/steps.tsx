import type { CaseStudy } from "@/content";
import { InlineCode } from "../inline-code";

export function Steps({ steps }: { steps: CaseStudy["steps"] }) {
  return (
    <ol className="flex flex-col border-b border-edge">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-5 border-t border-edge py-6">
          <span aria-hidden="true" className="pt-0.75 font-mono text-sm text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <h3 className="text-xl leading-snug font-semibold tracking-[-0.01em]">{step.title}</h3>
            <p className="text-step text-soft text-pretty">
              <InlineCode text={step.body} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
