import Link from "next/link";
import type { Dictionary } from "@/content";
import { cx } from "@/lib/cx";
import { localizePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pillButton } from "@/lib/styles";
import { LanguageSwitch } from "./language-switch";
import { MobileMenu } from "./mobile-menu";

type Props = {
  locale: Locale;
  dict: Dictionary;
  /** Current page without the language prefix, used by the language switch. */
  path: string;
  /** On the home page, section links scroll in place instead of navigating. */
  isHome?: boolean;
  /** Highlights the section the current page belongs to. */
  current?: "work";
};

export function SiteHeader({ locale, dict, path, isHome = false, current }: Props) {
  const home = localizePath(locale, "/");
  const section = (id: string) => (isHome ? `#${id}` : `${home}#${id}`);

  const links = [
    { href: section("work"), label: dict.nav.work, active: current === "work" },
    { href: section("experience"), label: dict.nav.experience, active: false },
    { href: section("about"), label: dict.nav.about, active: false },
    { href: "#contact", label: dict.nav.contact, active: false },
  ];

  return (
    <header id="top" className="relative border-b border-divider">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-2.5">
        <Link
          href={home}
          className="py-2.5 text-[17px] font-semibold tracking-[-0.01em] transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        <nav
          aria-label={dict.a11y.mainNav}
          className="flex items-center gap-x-[clamp(0.75rem,1.9vw,1.75rem)] text-[15px]"
        >
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cx(
                    "py-3 transition-colors hover:text-accent",
                    link.active ? "text-fg" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitch locale={locale} path={path} label={dict.a11y.language} />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener"
            className={cx(pillButton, "hidden md:inline-flex")}
          >
            {dict.nav.resume}
          </a>
          <MobileMenu
            items={links.map(({ href, label }) => ({ href, label }))}
            resume={{ href: site.resume, label: dict.nav.resume }}
            labels={{ open: dict.a11y.openMenu, close: dict.a11y.closeMenu }}
          />
        </nav>
      </div>
    </header>
  );
}
