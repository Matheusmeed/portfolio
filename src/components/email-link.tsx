import { cx } from "@/lib/cx";
import { site } from "@/lib/site";

export function EmailLink({ className }: { className?: string }) {
  return (
    <a
      href={`mailto:${site.email}`}
      className={cx(
        "max-w-full border-b-2 border-accent pb-1 font-mono text-accent wrap-anywhere transition-colors hover:border-accent-hover hover:text-accent-hover",
        className,
      )}
    >
      {site.email}
    </a>
  );
}
