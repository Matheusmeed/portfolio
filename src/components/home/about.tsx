import type { Dictionary } from "@/content";
import { SectionHeading } from "../section-heading";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-divider">
      <div className="site-container section-y flex flex-wrap gap-x-16 gap-y-8">
        <SectionHeading id="about-title" className="flex-[1_1_280px]" {...dict.sections.about} />
        <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-5 text-reading text-soft">
          {dict.about.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
