"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

type Props = {
  items: Item[];
  resume: Item;
  labels: { open: string; close: string };
};

const MENU_ICON = "M3 6.5h14M3 13.5h14";
const CLOSE_ICON = "m5 5 10 10M15 5 5 15";

export function MobileMenu({ items, resume, labels }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: globalThis.PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-control transition-colors hover:border-faint md:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
          <path
            d={open ? CLOSE_ICON : MENU_ICON}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        ref={panelRef}
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-b border-divider bg-ink md:hidden"
      >
        <ul className="site-container flex flex-col pt-2 pb-5 text-xl">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={close}
                className="flex min-h-13 items-center border-b border-divider transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={resume.href}
              target="_blank"
              rel="noopener"
              onClick={close}
              className="flex min-h-13 items-center transition-colors hover:text-accent"
            >
              {resume.label}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
