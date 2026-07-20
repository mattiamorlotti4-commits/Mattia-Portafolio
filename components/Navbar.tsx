"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#story", label: "Story" },
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#skills", label: "Skills" },
  { href: "/wallet-tracker", label: "Tools" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200/80 bg-ink-50/80 shadow-sm shadow-ink-950/[0.02] backdrop-blur-md dark:border-ink-800/80 dark:bg-ink-950/80">
      <div className="container-narrow section-padding flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-ink-900 dark:text-ink-50"
        >
          Mattia Morlotti
        </a>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-ink-600 transition-colors hover:text-accent dark:text-ink-400 dark:hover:text-accent-light"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-ink-600 transition-colors hover:text-accent dark:text-ink-400 dark:hover:text-accent-light"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden whitespace-nowrap text-sm font-medium text-ink-900 underline-offset-4 hover:underline dark:text-ink-50 sm:inline"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
