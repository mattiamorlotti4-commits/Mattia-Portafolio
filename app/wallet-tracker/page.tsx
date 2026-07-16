import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wallet Tracker — Mattia Morlotti",
  description:
    "A free budgeting tool to track your spending, set budgets, and analyze your expenses.",
};

export default function WalletTrackerPage() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-ink-950">
      <header className="flex flex-shrink-0 items-center justify-between border-b border-ink-100 px-4 py-3 dark:border-ink-800 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-ink-600 transition-colors hover:text-accent dark:text-ink-300 dark:hover:text-accent-light"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Back to site
          </Link>
          <span className="hidden h-4 w-px bg-ink-200 dark:bg-ink-700 sm:block" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-ink-950 dark:text-white">
              Wallet Tracker
            </p>
            <p className="text-xs text-ink-500 dark:text-ink-400">
              A budgeting tool by Mattia Morlotti
            </p>
          </div>
        </div>
        <p className="text-xs text-ink-400 dark:text-ink-500">
          Your data stays in this browser — nothing is sent anywhere.
        </p>
      </header>

      <iframe
        src="/tools/wallet-tracker.html"
        title="Wallet Tracker"
        className="w-full flex-1 border-0"
      />
    </div>
  );
}
