import { Fragment } from "react";

/** Renders text where `backticks` mark inline code. */
export function InlineCode({ text }: { text: string }) {
  return text.split("`").map((part, index) =>
    index % 2 === 1 ? (
      <code
        key={index}
        className="rounded-md bg-code px-1.5 py-px font-mono text-[0.88em] text-fg"
      >
        {part}
      </code>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}
