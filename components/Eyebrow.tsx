import type { ReactNode } from "react";

const toneClasses = {
  accent:
    "bg-accent/10 text-accent dark:bg-accent-light/10 dark:text-accent-light",
  white: "bg-white/15 text-white",
  amber: "bg-yellow-500/15 text-yellow-700 dark:bg-yellow-400/15 dark:text-yellow-300",
};

export default function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "white" | "amber";
}) {
  return (
    <span
      className={`mb-4 inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
