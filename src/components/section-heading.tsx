import { cx } from "@/lib/cx";

type Props = {
  id: string;
  label: string;
  title: string;
  className?: string;
};

export function SectionHeading({ id, label, title, className }: Props) {
  return (
    <div className={cx("flex flex-col gap-2.5", className)}>
      <p className="eyebrow">{label}</p>
      <h2 id={id} className="text-h2 font-semibold">
        {title}
      </h2>
    </div>
  );
}
