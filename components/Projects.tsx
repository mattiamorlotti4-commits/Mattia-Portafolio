"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

type Project = {
  id: string;
  title: string;
  summary: string;
  details: string;
  fileUrl?: string;
  fileName?: string;
  fileLabel?: string;
  icon: ReactNode;
};

const DownloadIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />
  </svg>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// target — marketing / positioning
const TargetIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// cart — e-commerce
const CartIcon = (
  <svg {...iconProps}>
    <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20.5 8H6" />
    <circle cx="9.5" cy="20" r="1.25" fill="currentColor" stroke="none" />
    <circle cx="17" cy="20" r="1.25" fill="currentColor" stroke="none" />
  </svg>
);

// bar chart trending up — financial analysis
const ChartIcon = (
  <svg {...iconProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

// Add or remove entries here; the grid and popup adapt automatically.
// fileUrl (optional): link to the original file, shown as a "View original file"
// link inside the popup — drop the file in /public and point fileUrl at it.
const projects: Project[] = [
  {
    id: "dellara",
    title: "Dellara Resorts: Marketing Plan for a Family-First Resort Chain",
    summary:
      "A full marketing plan for a fictional Spanish all-inclusive resort chain, from market sizing to positioning statement.",
    details:
      "Group project (with Alice, CJ, and Lara) building a complete marketing plan for Dellara Resorts, a fictional all-inclusive resort chain in Spain (Málaga, Mallorca, the Canary Islands) built around family travel, positioned in the gap between luxury adults-only resorts and budget family hotels. We worked through the plan end to end: micro and macro environment analysis, a competitor set against Barceló, Meliá, and Iberostar, a full SWOT, and target audience segmentation split between a primary audience (parents with young children and multi-child families) and a secondary one (parents with teens, multigenerational families). The most interesting part for me was the demand estimation: sizing the Spanish family-travel market (roughly 23 million family tourists a year), then modeling Dellara's realistic share of it down to an estimated 46,000 annual bookings and about €57.5 million in potential revenue. We closed with a buyer persona and a positioning statement tying the whole plan together. It was a useful exercise in moving from market research to numbers a business could actually act on.",
    icon: TargetIcon,
    fileUrl: "/projects/dellara-resorts-marketing-plan.pptx",
    fileName: "Dellara Resorts, Marketing Plan.pptx",
    fileLabel: "PowerPoint · 17.6 MB",
  },
  {
    id: "five-guys",
    title: "Five Guys: E-Commerce Strategy",
    summary:
      "An e-commerce strategy for Five Guys, tackling its reliance on third-party delivery and its lack of a loyalty program.",
    details:
      "Group project for my International E-Business course (with Jayden and Daniel), analyzing Five Guys' digital presence and building a new e-commerce strategy for it. We started by mapping where the brand actually stood: a premium fast-casual burger chain with 1,700+ locations, strong in-store customization and quality, but a fairly thin digital ecosystem: ordering split across its own app and third-party platforms like Uber Eats and Deliveroo, with no real loyalty program or personalization behind it. From there we designed a digital-first strategy: an upgraded app with one-click reorder, live order tracking, and saved \"build-your-own\" preferences; a \"Five Guys Rewards\" loyalty program; personalized suggestions based on past orders; and a hybrid delivery model that keeps the third-party platforms but pushes more volume toward direct ordering through app-exclusive offers, protecting margins and first-party customer data. We also built out the marketing side, covering target segments, channels (influencers, paid social, search, push/email), and content strategy. We closed by separating what should stay global (a single app and UX, one loyalty program) from what needs local adaptation (local delivery partners, payment methods, language, pricing).",
    icon: CartIcon,
    fileUrl: "/projects/five-guys-ecommerce-strategy.pdf",
    fileName: "Five Guys, E-Commerce Strategy.pdf",
    fileLabel: "PDF · 19.8 MB",
  },
  {
    id: "ferrari",
    title: "Ferrari: Financial Statement Analysis",
    summary:
      "A financial deep-dive into Ferrari's balance sheet, income statement, and cash flows across FY2023 to FY2024.",
    details:
      "Individual project for my accounting course, analyzing Ferrari N.V.'s financial statements for fiscal years 2023 and 2024. I worked through the balance sheet, income statement, key financial ratios, and cash flow statement to build a full picture of the company's financial health, then paired that with a strengths-and-weaknesses read: exceptional profitability, strong pricing power, and high, stable cash generation on one side, against slightly slower inventory and receivables turnover and a modest uptick in financial leverage on the other. The conclusion was that Ferrari posted strong revenue, profit, and cash flow growth in 2024, with improving liquidity and margins and a genuinely solid balance sheet, while flagging near-term risk from slower expected growth and market uncertainty around its electrification strategy. It was a good exercise in reading past the headline numbers of a company known for its brand rather than its financials, and forming an actual view on whether the fundamentals back that reputation up.",
    icon: ChartIcon,
    fileUrl: "/projects/ferrari-financial-analysis.pdf",
    fileName: "Ferrari, Financial Statement Analysis.pdf",
    fileLabel: "PDF · 2.9 MB",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((p) => p.id === openId) ?? null;

  return (
    <section
      id="projects"
      className="section-padding border-y border-ink-200 bg-ink-100 py-24 dark:border-ink-800 dark:bg-ink-900/40 sm:py-32"
    >
      <div className="container-narrow max-w-4xl">
        <AnimatedSection>
          <Eyebrow>School Projects</Eyebrow>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Things I&apos;ve built and worked on
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            A few academic projects. Click any card for the full story.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <button
                onClick={() => setOpenId(project.id)}
                className="flex h-full w-full flex-col rounded-2xl border border-ink-200/80 bg-white/60 p-6 text-left shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-xl dark:border-ink-800 dark:bg-ink-900/30 dark:ring-white/[0.02] dark:hover:border-accent-light dark:hover:bg-ink-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink-100 text-ink-700 shadow-sm dark:bg-ink-800 dark:text-ink-200">
                  <span className="h-5 w-5">{project.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-500 dark:text-ink-400">
                  {project.summary}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-accent dark:text-accent-light">
                    View details →
                  </span>
                  {project.fileUrl && (
                    <span className="flex items-center gap-1 text-xs text-ink-400 dark:text-ink-500">
                      <span className="h-3.5 w-3.5">{DownloadIcon}</span>
                      File
                    </span>
                  )}
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/50 p-6"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl dark:bg-ink-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200">
                  <span className="h-5 w-5">{open.icon}</span>
                </div>
                <button
                  onClick={() => setOpenId(null)}
                  aria-label="Close"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-500 dark:hover:bg-ink-800 dark:hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-ink-950 dark:text-white">
                {open.title}
              </h3>
              <p className="mt-4 text-ink-600 dark:text-ink-300">{open.details}</p>
              {open.fileUrl && (
                <a
                  href={open.fileUrl}
                  download={open.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/5 p-4 transition-colors hover:border-accent hover:bg-accent/10 dark:border-accent-light/30 dark:bg-accent-light/5 dark:hover:border-accent-light dark:hover:bg-accent-light/10"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white dark:bg-accent-light dark:text-ink-950">
                    <span className="h-5 w-5">{DownloadIcon}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink-950 dark:text-white">
                      Download the original file
                    </span>
                    <span className="block text-xs text-ink-500 dark:text-ink-400">
                      {open.fileLabel ?? "File"}
                    </span>
                  </span>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
