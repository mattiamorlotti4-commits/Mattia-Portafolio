"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

type Hobby = {
  id: string;
  name: string;
  meta: string;
  caption: string;
  photos: string[];
};

const hobbies: Hobby[] = [
  {
    id: "skiing",
    name: "Skiing",
    meta: "Every winter since age 3",
    caption:
      "On skis every winter since I was three years old, it's the one sport I've never taken a season off from.",
    photos: [
      "/images/hobbies/sci-1.jpg",
      "/images/hobbies/sci-2.jpg",
      "/images/hobbies/sci-3.jpg",
      "/images/hobbies/sci-4.jpg",
      "/images/hobbies/sci-5.jpg",
    ],
  },
  {
    id: "sailing",
    name: "Sailing",
    meta: "Age 11 to 14",
    caption:
      "I sailed competitively between eleven and fourteen, learning to read wind and water long before I ever thought about business.",
    photos: [
      "/images/hobbies/vela-1.jpg",
      "/images/hobbies/vela-2.jpg",
      "/images/hobbies/vela-3.jpg",
      "/images/hobbies/vela-4.jpg",
      "/images/hobbies/vela-5.jpg",
      "/images/hobbies/vela-6.jpg",
      "/images/hobbies/vela-7.jpg",
    ],
  },
  {
    id: "hockey",
    name: "Ice Hockey",
    meta: "Goalkeeper, age 5 to 8",
    caption:
      "I played as a goalkeeper from when I was five until I was eight, my first real introduction to competitive team sport.",
    photos: [
      "/images/hobbies/hockey-1.jpg",
      "/images/hobbies/hockey-2.jpg",
      "/images/hobbies/hockey-3.jpg",
      "/images/hobbies/hockey-4.jpg",
      "/images/hobbies/hockey-5.jpg",
      "/images/hobbies/hockey-6.jpg",
      "/images/hobbies/hockey-7.jpg",
    ],
  },
  {
    id: "hiking",
    name: "Hiking",
    meta: "Since I was a kid",
    caption:
      "I've been walking mountain trails since I was little, usually with my parents or friends, still my favorite way to clear my head.",
    photos: [
      "/images/hobbies/camminata-1.jpg",
      "/images/hobbies/camminata-2.jpg",
      "/images/hobbies/camminata-3.jpg",
      "/images/hobbies/camminata-4.jpg",
    ],
  },
  {
    id: "climbing",
    name: "Climbing",
    meta: "With my father",
    caption:
      "Something I picked up from my father, and still one of the best excuses to spend a day outdoors together.",
    photos: [
      "/images/hobbies/arrampicata-1.jpg",
      "/images/hobbies/arrampicata-2.jpg",
    ],
  },
];

export default function Hobbies() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const open = hobbies.find((h) => h.id === openId) ?? null;

  const openHobby = (id: string) => {
    setOpenId(id);
    setPhotoIndex(0);
  };

  return (
    <section id="hobbies" className="section-padding py-24 sm:py-32">
      <div className="container-narrow">
        <AnimatedSection>
          <Eyebrow>Outside of Work</Eyebrow>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Hobbies &amp; sports
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            A few things I&apos;ve done for years, on and off the clock.
            Click any card for the story behind it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {hobbies.map((hobby, i) => (
            <AnimatedSection key={hobby.id} delay={i * 0.06}>
              <button
                onClick={() => openHobby(hobby.id)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-100 shadow-md ring-1 ring-black/[0.03] transition-shadow hover:shadow-xl dark:bg-ink-900 dark:ring-white/[0.03]"
              >
                <Image
                  src={hobby.photos[0]}
                  alt={hobby.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 pt-10 text-left">
                  <p className="text-sm font-semibold text-white">
                    {hobby.name}
                  </p>
                  <p className="text-xs text-white/70">{hobby.meta}</p>
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
              className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-ink-900"
            >
              <div className="relative flex max-h-[75vh] w-full items-center justify-center bg-ink-100 dark:bg-ink-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={open.photos[photoIndex]}
                  alt={open.name}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
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

                {open.photos.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setPhotoIndex(
                          (i) => (i - 1 + open.photos.length) % open.photos.length
                        )
                      }
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 18l-6-6 6-6"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setPhotoIndex((i) => (i + 1) % open.photos.length)
                      }
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6l6 6-6 6"
                        />
                      </svg>
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {open.photos.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full ${
                            i === photoIndex ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
                  {open.meta}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-ink-950 dark:text-white">
                  {open.name}
                </h3>
                <p className="mt-3 text-ink-600 dark:text-ink-300">
                  {open.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
