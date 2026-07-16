"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-padding flex min-h-screen items-center pt-32 pb-20"
    >
      <div className="container-narrow grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1 md:col-span-3"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            Mattia Morlotti
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink-950 dark:text-white sm:text-5xl lg:text-6xl">
            Mattia Morlotti
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            International Business &amp; Finance Student — building toward a
            career in strategy, investing, and company-building.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent dark:bg-white dark:text-ink-950 dark:hover:bg-accent-light dark:hover:text-white"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink-300 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-100 dark:hover:border-accent-light dark:hover:text-accent-light"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 md:col-span-2"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-ink-100 dark:bg-ink-900">
            <Image
              src="/images/hero.jpg"
              alt="Mattia Morlotti"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
