import type { Dictionary } from "@/content";
import { SectionHeading } from "../section-heading";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-b border-divider">
      <div className="site-container section-y flex flex-col gap-8">
        <SectionHeading id="skills-title" {...dict.sections.skills} />
        <ul className="grid grid-fit-240 gap-4">
          {dict.skills.map((group) => (
            <li
              key={group.name}
              className="flex flex-col gap-3.5 rounded-2xl border border-edge bg-surface p-6"
            >
              <h3 className="font-mono text-[13px] tracking-[0.06em] text-accent uppercase">
                {group.name}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
