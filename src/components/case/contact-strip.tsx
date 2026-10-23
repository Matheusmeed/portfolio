import type { Dictionary } from "@/content";
import { site } from "@/lib/site";
import { pillButton } from "@/lib/styles";
import { EmailLink } from "../email-link";

const linkClass = "inline-flex min-h-11 items-center transition-colors hover:text-accent";

/** Short version of the contact section, used at the end of each case. */
export function ContactStrip({ dict }: { dict: Dictionary }) {
  const { contact, sections } = dict;

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="site-container section-y flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <p className="eyebrow">{contact.label}</p>
          <h2 id="contact-title" className="text-cta-sm font-semibold">
            {sections.contact.title}
          </h2>
          <p className="max-w-[32em] text-lead text-muted text-pretty">{contact.text}</p>
        </div>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col items-start gap-4">
          <EmailLink className="text-[clamp(1.125rem,1.8vw,1.625rem)]" />
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
            <li>
              <a href={site.linkedin} className={linkClass}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} className={linkClass}>
                GitHub
              </a>
            </li>
            <li>
              <a href={site.resume} download className={`inline-flex ${pillButton}`}>
                {contact.resume}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
