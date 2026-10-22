import Image from "next/image";
import type { Media } from "@/content";
import { cx } from "@/lib/cx";

type Props = {
  media: Media;
  /** Passed to next/image so the browser picks the right file size. */
  sizes: string;
  className?: string;
};

export function MediaFrame({ media, sizes, className }: Props) {
  if (media.type === "image") {
    return (
      <div className={cx("relative overflow-hidden bg-sunken", className)}>
        <Image src={media.src} alt={media.alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className={cx("relative overflow-hidden bg-sunken", className)}>
        <video
          src={media.src}
          poster={media.poster}
          aria-label={media.label}
          controls
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cx("flex items-center justify-center bg-stripes p-8", className)}>
      <p className="max-w-[24em] text-center font-mono text-[13px] leading-relaxed text-faint">
        {media.label}
      </p>
    </div>
  );
}
