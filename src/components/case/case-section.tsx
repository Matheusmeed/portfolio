import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

/** Heading on the left, content on the right; stacks on small screens. */
export function CaseSection({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-b border-divider">
      <div className="site-container section-y flex flex-wrap gap-x-16 gap-y-6">
        <h2 id={`${id}-title`} className="flex-[1_1_280px] text-h2-sm font-semibold">
          {title}
        </h2>
        <div className="min-w-0 flex-[2_1_560px]">{children}</div>
      </div>
    </section>
  );
}
