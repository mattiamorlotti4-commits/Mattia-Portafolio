"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

type Conference = {
  id: string;
  name: string;
  meta: string;
  caption: string;
  photos: string[];
  fileUrl?: string;
  fileName?: string;
  fileLabel?: string;
};

const DownloadIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16" />
  </svg>
);

const conferences: Conference[] = [
  {
    id: "compimun",
    name: "COMPIMUN 2025",
    meta: "NATO Committee, Delegate of Montenegro",
    caption:
      "At COMPIMUN 2025 I represented Montenegro in the NATO committee, writing a full positioning paper on two topics: the Alliance's Arctic strategy on its northern flank, and the role of artificial intelligence in collective defense. Montenegro is a small member state, so most of the work was about finding leverage through law, cooperation, and coalition-building rather than raw power: arguing for a balanced Arctic strategy grounded in UNCLOS and the Arctic Council, and a clear ethical framework, rooted in NATO's own 2021 AI Strategy, for adopting AI in defense without losing human control over it.",
    photos: ["/images/mun/compimun-1.jpg"],
    fileUrl: "/documents/compimun-2025-montenegro-positioning-paper.docx",
    fileName: "COMPIMUN 2025, Montenegro Positioning Paper.docx",
    fileLabel: "Word Document",
  },
  {
    id: "falklands-crisis",
    name: "Falklands War Crisis Committee",
    meta: "British Cabinet, Commander of the British Fleet",
    caption:
      "In a crisis committee I sat in the British Cabinet during the Falklands War, playing the commander of the British fleet. Crisis committees move fast and don't give you a script: you're reacting in real time to updates from the room, defending military and political decisions under pressure, and working with, or against, people playing very different roles around the same table. It's the format that taught me the most about thinking on my feet.",
    photos: ["/images/mun/falklands-crisis-1.jpg"],
  },
  {
    id: "slumun",
    name: "SLUMUN",
    meta: "Organizer, Saint Louis University",
    caption:
      "I helped organize SLUMUN together with my school's debate club: a two-day conference with two committees, a crisis committee and a regular one, built from scratch. Organizing meant seeing the other side of a conference: building committees, writing background guides, and making sure delegates actually had a structure to negotiate inside of. It gave me a much better sense of what makes a conference work, or not, and it was genuinely one of the best experiences I've had in university, part of why I keep coming back to this as a delegate too.",
    photos: ["/images/mun/slumun-1.jpg"],
  },
];

export default function MUN() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const open = conferences.find((c) => c.id === openId) ?? null;

  const openConference = (id: string) => {
    setOpenId(id);
    setPhotoIndex(0);
  };

  return (
    <section
      id="mun"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-amber-500/[0.06] via-transparent to-amber-500/10 py-24 dark:from-amber-400/[0.05] dark:to-amber-400/[0.08] sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-300/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/[0.12] blur-3xl dark:bg-amber-400/[0.08]"
      />
      <div className="container-narrow relative">
        <AnimatedSection>
          <Eyebrow tone="amber">Beyond the Classroom</Eyebrow>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Model United Nations
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            I&apos;ve been doing Model UN for a few years now, drawn to it by
            the same thing that pulls me toward geopolitics: understanding
            how countries actually negotiate, where interests collide, and
            how agreements get built out of disagreement. It&apos;s also
            where I practice skills a classroom doesn&apos;t teach: speaking
            like a diplomat, mediating between opposing positions, organizing
            a committee, and simulating situations that don&apos;t have easy
            answers. A few of the conferences I&apos;ve been part of below,
            more to come as I keep doing them.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-3">
          {conferences.map((conf, i) => (
            <AnimatedSection key={conf.id} delay={i * 0.08}>
              <button
                onClick={() => openConference(conf.id)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-100 shadow-md ring-1 ring-black/[0.03] transition-all hover:shadow-xl hover:ring-2 hover:ring-amber-400/60 dark:bg-ink-900 dark:ring-white/[0.03]"
              >
                <Image
                  src={conf.photos[0]}
                  alt={conf.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 pt-10 text-left">
                  <p className="text-sm font-semibold text-white">
                    {conf.name}
                  </p>
                  <p className="text-xs text-white/70">{conf.meta}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-6"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-ink-900"
            >
              <div className="relative flex max-h-[50vh] w-full items-center justify-center bg-ink-100 dark:bg-ink-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={open.photos[photoIndex]}
                  alt={open.name}
                  className="max-h-[50vh] w-auto max-w-full object-contain"
                />
                <button
                  onClick={() => setOpenId(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  {open.meta}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-ink-950 dark:text-white">
                  {open.name}
                </h3>
                <p className="mt-3 text-ink-600 dark:text-ink-300">
                  {open.caption}
                </p>

                {open.fileUrl && (
                  <a
                    href={open.fileUrl}
                    download={open.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-4 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 transition-colors hover:border-amber-500 hover:bg-amber-500/10 dark:border-amber-400/30 dark:bg-amber-400/5 dark:hover:border-amber-400 dark:hover:bg-amber-400/10"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-white dark:bg-amber-400 dark:text-ink-950">
                      <span className="h-5 w-5">{DownloadIcon}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-ink-950 dark:text-white">
                        Download the positioning paper
                      </span>
                      <span className="block text-xs text-ink-500 dark:text-ink-400">
                        {open.fileLabel ?? "File"}
                      </span>
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
