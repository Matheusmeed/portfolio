import type { Dictionary } from "@/content";
import { site } from "@/lib/site";
import { pillButton } from "@/lib/styles";
import { EmailLink } from "../email-link";

const linkClass = "inline-flex min-h-11 items-center wrap-anywhere transition-colors hover:text-accent";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact, sections } = dict;

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="site-container flex flex-col gap-7 pt-[clamp(4.5rem,7.8vw,7rem)] pb-[clamp(3.5rem,6.7vw,6rem)]">
        <p className="eyebrow">{sections.contact.label}</p>
        <h2 id="contact-title" className="text-cta font-semibold">
          {sections.contact.title}
        </h2>
        <p className="max-w-[36em] text-lead text-muted text-pretty">{contact.text}</p>
        <EmailLink className="self-start text-[clamp(1.125rem,2.1vw,1.875rem)]" />
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-3 text-[15px]">
          <li>
            <a href={site.linkedin} className={linkClass}>
              linkedin.com/in/matheus-medeiros-da-silva
            </a>
          </li>
          <li>
            <a href={site.github} className={linkClass}>
              github.com/Matheusmeed
            </a>
          </li>
          <li className="text-muted">{contact.location}</li>
          <li>
            <a href={site.resume} download className={`inline-flex ${pillButton}`}>
              {contact.resume}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
