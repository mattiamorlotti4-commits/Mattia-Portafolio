import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "white";
}) {
  return (
    <span
      className={
        tone === "white"
          ? "mb-4 inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
          : "mb-4 inline-flex items-center rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent dark:bg-accent-light/10 dark:text-accent-light"
      }
    >
      {children}
    </span>
  );
}
