import type { Dictionary } from "@/content";
import { site } from "@/lib/site";
import { primaryButton, secondaryButton, textLink } from "@/lib/styles";
import { SpinDemo } from "../spin-demo";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section aria-labelledby="hero-title" className="border-b border-divider bg-ink bg-blueprint">
      <div className="site-container grid grid-fit-460 items-center gap-14 pt-[clamp(3.5rem,6.7vw,6rem)] pb-[clamp(4rem,7.2vw,6.5rem)]">
        <div className="flex flex-col gap-7">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="text-hero font-semibold text-balance">
            {hero.title}
          </h1>
          <p className="max-w-[34em] text-lead text-muted text-pretty">{hero.lead}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className={`inline-flex ${primaryButton}`}>
              {hero.primary}
            </a>
            <a href={site.resume} download className={`inline-flex ${secondaryButton}`}>
              {hero.secondary}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted">
            <p className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-live" />
              {hero.availability}
            </p>
            <ul className="flex gap-4 text-fg">
              <li>
                <a href={site.linkedin} className={`inline-flex min-h-11 items-center ${textLink}`}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} className={`inline-flex min-h-11 items-center ${textLink}`}>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className={`inline-flex min-h-11 items-center ${textLink}`}
                >
                  {hero.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SpinDemo labels={dict.spin} />
      </div>
    </section>
  );
}
