"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WalletTrackerFab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/wallet-tracker"
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105 dark:bg-accent-light dark:text-ink-950 dark:shadow-accent-light/20"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18" />
          <circle cx="16.5" cy="14.5" r="1.25" fill="currentColor" stroke="none" />
        </svg>
        <span className="hidden sm:inline">Explore my tool</span>
      </Link>
    </motion.div>
  );
}
