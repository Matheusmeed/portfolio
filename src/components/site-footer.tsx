import type { Dictionary } from "@/content";
import { site } from "@/lib/site";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-divider">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-3 py-4 text-[13px] text-faint">
        <p>
          © {site.year} {site.name}
        </p>
        <a href="#top" className="inline-flex min-h-11 items-center transition-colors hover:text-fg">
          {dict.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
