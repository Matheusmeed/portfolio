"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { FRAMES, housePath, markerPath, ticksPath, turntable } from "@/lib/house";

const TICKS = ticksPath();
const TABLE = turntable();
const START_FRAME = 14;
const FRAME_MS = 80;
const PX_PER_FRAME = 4;

type Labels = {
  label: string;
  frame: string;
  valueText: string;
  alt: string;
  caption: string;
};

const wrap = (frame: number) => ((frame % FRAMES) + FRAMES) % FRAMES;

export function SpinDemo({ labels }: { labels: Labels }) {
  const inputId = useId();
  const figureRef = useRef<HTMLElement>(null);
  const dragRef = useRef<{ x: number; frame: number } | null>(null);
  const [frame, setFrame] = useState(START_FRAME);
  const [touched, setTouched] = useState(false);

  // Turns on its own until the visitor takes over.
  // Skipped with reduced motion and paused while off screen.
  useEffect(() => {
    const figure = figureRef.current;
    if (touched || !figure) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    const tick = (time: number) => {
      if (time - last >= FRAME_MS) {
        last = time;
        setFrame((current) => wrap(current + 1));
      }
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(tick);
    });
    observer.observe(figure);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [touched]);

  function startDrag(event: PointerEvent<SVGSVGElement>) {
    setTouched(true);
    dragRef.current = { x: event.clientX, frame };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function drag(event: PointerEvent<SVGSVGElement>) {
    const start = dragRef.current;
    if (!start) return;
    setFrame(wrap(start.frame + Math.round((event.clientX - start.x) / PX_PER_FRAME)));
  }

  function endDrag() {
    dragRef.current = null;
  }

  const counter = String(frame + 1).padStart(3, "0");
  const valueText = labels.valueText
    .replace("{frame}", String(frame + 1))
    .replace("{total}", String(FRAMES));

  return (
    <figure
      ref={figureRef}
      className="flex flex-col gap-4 rounded-[20px] border border-edge bg-surface p-[clamp(1rem,1.7vw,1.5rem)]"
    >
      <svg
        viewBox="0 0 360 280"
        role="img"
        aria-label={labels.alt}
        className="block h-auto w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <ellipse
          cx={TABLE.cx}
          cy={TABLE.cy}
          rx={TABLE.rx}
          ry={TABLE.ry}
          className="fill-ink stroke-edge"
        />
        <path d={TICKS} fill="none" className="stroke-tick" />
        <path
          d={markerPath(frame)}
          fill="none"
          strokeWidth={3}
          strokeLinecap="round"
          className="stroke-accent"
        />
        <path
          d={housePath(frame)}
          fill="none"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-fg"
        />
      </svg>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between gap-3 font-mono text-[13px] tracking-[0.06em] uppercase">
          <label htmlFor={inputId} className="text-muted">
            {labels.label}
          </label>
          <span aria-hidden="true" className="tabular-nums">
            {labels.frame} {counter} / {FRAMES}
          </span>
        </div>
        <input
          id={inputId}
          type="range"
          min={0}
          max={FRAMES - 1}
          step={1}
          value={frame}
          aria-valuetext={valueText}
          onChange={(event) => {
            setTouched(true);
            setFrame(Number(event.target.value));
          }}
          className="h-11 w-full cursor-grab accent-accent"
        />
      </div>
      <figcaption className="text-sm text-faint">{labels.caption}</figcaption>
    </figure>
  );
}
