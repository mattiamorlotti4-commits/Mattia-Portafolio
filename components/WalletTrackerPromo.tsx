import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function WalletTrackerPromo() {
  return (
    <section className="section-padding py-24 sm:py-32">
      <div className="container-narrow max-w-4xl">
        <AnimatedSection>
          <div className="flex flex-col items-start gap-8 rounded-2xl border border-ink-200 bg-ink-50 p-8 dark:border-ink-800 dark:bg-ink-900/40 sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white dark:bg-accent-light dark:text-ink-950">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18" />
                <circle cx="16.5" cy="14.5" r="1.25" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
                A free tool I built
              </p>
              <h2 className="text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">
                Wallet Tracker
              </h2>
              <p className="mt-2 max-w-xl text-ink-600 dark:text-ink-300">
                Track your spending, set monthly budgets, and see where your
                money actually goes, free to use, right in your browser.
              </p>
            </div>
            <Link
              href="/wallet-tracker"
              className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent dark:bg-white dark:text-ink-950 dark:hover:bg-accent-light dark:hover:text-white"
            >
              Open Wallet Tracker →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
