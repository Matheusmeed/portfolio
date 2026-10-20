import { cx } from "@/lib/cx";
import { htmlLang, locales, switchLocalePath, type Locale } from "@/lib/i18n";

const names: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  pt: { short: "PT", long: "Português" },
};

type Props = {
  locale: Locale;
  /** Current page without the language prefix. */
  path: string;
  label: string;
};

export function LanguageSwitch({ locale, path, label }: Props) {
  return (
    <ul aria-label={label} className="flex gap-1 rounded-full border border-edge-strong p-[3px]">
      {locales.map((item) => {
        const active = item === locale;
        return (
          <li key={item}>
            {/* A plain link: switching language is a full page load, so <html lang> updates too. */}
            <a
              href={switchLocalePath(item, path)}
              hrefLang={htmlLang[item]}
              lang={htmlLang[item]}
              aria-current={active ? "page" : undefined}
              className={cx(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 font-mono text-[13px] font-medium transition-colors",
                active ? "bg-fg text-ink" : "text-muted hover:text-fg",
              )}
            >
              {names[item].short}
              <span className="sr-only"> · {names[item].long}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
