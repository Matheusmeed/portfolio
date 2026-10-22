import type { Dictionary } from "@/content";
import { SectionHeading } from "../section-heading";

export function Experience({ dict }: { dict: Dictionary }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-b border-divider">
      <div className="site-container section-y flex flex-col gap-8">
        <SectionHeading id="experience-title" {...dict.sections.experience} />
        <ol className="flex flex-col border-b border-edge">
          {dict.experience.map((item) => (
            <li
              key={item.org}
              className="flex flex-wrap gap-x-10 gap-y-3 border-t border-edge py-7"
            >
              <p className="flex-[0_0_200px] font-mono text-sm text-faint">{item.period}</p>
              <div className="flex flex-[1_1_260px] flex-col gap-1">
                <h3 className="text-xl font-semibold">{item.org}</h3>
                {item.detail && <p className="text-sm text-muted">{item.detail}</p>}
              </div>
              <p className="flex-[2_1_420px] text-muted text-pretty">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
