"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { WORLD_MAP_PATH, WORLD_MAP_VIEWBOX } from "./worldMapPath";

// ease-in-out cubic
function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Point = { x: number; y: number };

type Stop = {
  id: string;
  year: string;
  place: string;
  date: string;
  caption: string;
  photo: string;
  pos: Point;
};

// Real positions — calibrated by isolating each country's actual mainland
// shape in the source map (excluding Alaska/Hawaii/Sicily/Sardinia/Balearics
// as separate landmasses) and placing each city proportionally within that
// shape's true lon/lat bounds, so every dot sits exactly on the right spot.
const stops: Stop[] = [
  {
    id: "italy-1",
    year: "Past",
    place: "Italy",
    date: "Home, until Sept 2022",
    caption: "Departing for the adventure that would change my life.",
    photo: "/images/journey-1-italy.jpg",
    pos: { x: 428.2, y: 410.4 },
  },
  {
    id: "wichita",
    year: "2022",
    place: "Wichita, Kansas (USA)",
    date: "September 2022",
    caption:
      "I graduated high school here, and played on the basketball and soccer teams alongside my classes.",
    photo: "/images/journey-2-wichita.jpg",
    pos: { x: 189.8, y: 415.8 },
  },
  {
    id: "italy-2",
    year: "2023",
    place: "Italy",
    date: "June 2023",
    caption:
      "Back home to finish school: I sat the Maturità, the Italian high school exit exam, and graduated a second time.",
    photo: "/images/journey-3-italy-return.jpg",
    pos: { x: 428.2, y: 410.4 },
  },
  {
    id: "saint-louis",
    year: "2024",
    place: "Saint Louis, Missouri (USA)",
    date: "September 2024",
    caption: "My first year of university, right at the start of the International Business program.",
    photo: "/images/journey-4-saint-louis.jpg",
    pos: { x: 206.2, y: 412.5 },
  },
  {
    id: "madrid",
    year: "Present",
    place: "Madrid, Spain",
    date: "September 2025 to Present",
    caption:
      "My second year of university: I moved to the Madrid campus, where I've been living since.",
    photo: "/images/journey-5-madrid.jpg",
    pos: { x: 398.7, y: 424.8 },
  },
];

const STOP_PROGRESS = [0, 35, 50, 75, 100];

// control points for a gentle arc between each pair of stops
const CONTROLS: Point[] = [
  { x: 309.0, y: 363.1 },
  { x: 309.0, y: 473.1 },
  { x: 317.2, y: 366.5 },
  { x: 302.5, y: 378.7 },
];

function bezierPoint(p0: Point, p1: Point, p2: Point, t: number): Point {
  const mt = 1 - t;
  return {
    x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
    y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
  };
}

function bezierAngle(p0: Point, p1: Point, p2: Point, t: number): number {
  const mt = 1 - t;
  const dx = 2 * mt * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
  const dy = 2 * mt * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function getPlaneState(progress: number) {
  const p = Math.min(100, Math.max(0, progress));

  for (let i = 0; i < STOP_PROGRESS.length - 1; i++) {
    const start = STOP_PROGRESS[i];
    const end = STOP_PROGRESS[i + 1];
    if (p <= end || i === STOP_PROGRESS.length - 2) {
      const t = end === start ? 1 : Math.min(1, Math.max(0, (p - start) / (end - start)));
      const point = bezierPoint(stops[i].pos, CONTROLS[i], stops[i + 1].pos, t);
      const angle = bezierAngle(stops[i].pos, CONTROLS[i], stops[i + 1].pos, t);
      return { point, angle };
    }
  }
  return { point: stops[0].pos, angle: 0 };
}

export default function Journey() {
  const [progress, setProgress] = useState(0);

  const { point, angle } = useMemo(() => getPlaneState(progress), [progress]);
  const activeIndex = useMemo(() => {
    let active = 0;
    for (let i = 0; i < STOP_PROGRESS.length; i++) {
      if (progress >= STOP_PROGRESS[i]) active = i;
    }
    return active;
  }, [progress]);
  const active = stops[activeIndex];

  const rafRef = useRef<number | null>(null);

  // moderate-speed manual tween (1.8s, ease-in-out) driving the plane between stops
  const goToStop = (i: number) => {
    const from = progress;
    const to = STOP_PROGRESS[i];
    const duration = 1800;
    const start = performance.now();

    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(from + (to - from) * ease(t));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  return (
    <section id="journey" className="section-padding py-24 sm:py-32">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            My Journey So Far
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Map — same row as the photo, so you see the plane move and the story side by side */}
          <AnimatedSection className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white dark:border-ink-800 dark:bg-ink-950">
              <svg viewBox={WORLD_MAP_VIEWBOX} className="h-auto w-full" aria-hidden="true">
                {/* real world coastlines — thin outline only, no fill */}
                <path
                  d={WORLD_MAP_PATH}
                  fill="none"
                  className="stroke-ink-300 dark:stroke-ink-600"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />

                {/* flight path, drawn as the concatenation of all bezier segments */}
                <path
                  d={`M${stops[0].pos.x},${stops[0].pos.y} Q${CONTROLS[0].x},${CONTROLS[0].y} ${stops[1].pos.x},${stops[1].pos.y} Q${CONTROLS[1].x},${CONTROLS[1].y} ${stops[2].pos.x},${stops[2].pos.y} Q${CONTROLS[2].x},${CONTROLS[2].y} ${stops[3].pos.x},${stops[3].pos.y} Q${CONTROLS[3].x},${CONTROLS[3].y} ${stops[4].pos.x},${stops[4].pos.y}`}
                  fill="none"
                  className="stroke-accent/60 dark:stroke-accent-light/60"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* stop markers */}
                {stops.map((stop, i) => (
                  <g key={stop.id + i} className="cursor-pointer" onClick={() => goToStop(i)}>
                    {activeIndex === i && (
                      <circle cx={stop.pos.x} cy={stop.pos.y} r="6" className="fill-accent/20 dark:fill-accent-light/20">
                        <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={stop.pos.x}
                      cy={stop.pos.y}
                      r="4"
                      className={
                        activeIndex === i
                          ? "fill-accent dark:fill-accent-light"
                          : "fill-ink-400 dark:fill-ink-600"
                      }
                    />
                  </g>
                ))}

                {/* plane — position & rotation computed directly from the bezier path,
                    so it always points in the exact direction of travel; kept small so
                    it doesn't obscure the (geographically close) route lines */}
                <g transform={`translate(${point.x},${point.y}) rotate(${angle})`}>
                  <circle r="9" className="fill-white/85 dark:fill-ink-950/85" />
                  <g className="text-accent dark:text-accent-light" fill="currentColor" transform="scale(0.85)">
                    {/* solid airplane silhouette, matching the reference icon, nose along +x at rotate(0) */}
                    <path d="M20,0 L10,-3 L4,-4 L-1,-17 L-6,-5 L-9,-5 L-13,-8 L-15,-3 L-19,-4 L-15,0 L-19,4 L-15,3 L-13,8 L-9,5 L-6,5 L-1,17 L4,4 L10,3 Z" />
                  </g>
                </g>
              </svg>
            </div>

            {/* stops — always visible on one row, click any to fly there */}
            <div className="mt-6 flex flex-nowrap justify-between gap-2 sm:justify-start sm:gap-3">
              {stops.map((stop, i) => (
                <button
                  key={stop.id + i}
                  onClick={() => goToStop(i)}
                  className={`flex-1 rounded-full border px-2 py-2 text-center text-xs font-medium transition-colors sm:flex-none sm:px-4 sm:text-sm ${
                    activeIndex === i
                      ? "border-accent bg-accent text-white dark:border-accent-light dark:bg-accent-light dark:text-ink-950"
                      : "border-ink-200 text-ink-600 hover:border-accent hover:text-accent dark:border-ink-700 dark:text-ink-300 dark:hover:border-accent-light dark:hover:text-accent-light"
                  }`}
                >
                  {stop.year}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* caption card — big photo, same row as the map */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-100 dark:bg-ink-900">
                  <Image
                    src={active.photo}
                    alt={active.place}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
                  {active.date}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-ink-950 dark:text-white">
                  {active.place}
                </h3>
                <p className="mt-3 text-ink-600 dark:text-ink-300">{active.caption}</p>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
