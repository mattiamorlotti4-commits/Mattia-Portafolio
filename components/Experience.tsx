import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

const experiences = [
  {
    company: "Mitsubishi Electric Europe B.V.",
    location: "Italy",
    role: "Business Controlling Intern",
    period: "June 2026–Present",
  },
  {
    company: "Zero Gravity Solutions",
    location: "San Diego, CA",
    role: "Operations Assistant",
    period: "Summer 2025",
  },
  {
    company: "DSM Masonry",
    location: "Remote",
    role: "Tax and Payroll Assistant",
    period: "Summer 2024",
  },
  {
    company: "With You S.r.l.",
    location: "Milan",
    role: "Technical Operations Assistant",
    period: "Jan–Jun 2024",
  },
  {
    company: "Nous Lab S.r.l.",
    location: "Milan",
    role: "Sales & Customer Engagement Promoter",
    period: "Summer 2023",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden bg-ink-950 py-24 dark:bg-black sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-light/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-light/[0.08] blur-3xl"
      />
      <div className="container-narrow relative max-w-3xl">
        <AnimatedSection>
          <Eyebrow tone="white">Experience</Eyebrow>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent-light/60 via-white/15 to-transparent"
          />
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.08}>
              <li className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-accent-light shadow-[0_0_0_4px_rgba(45,85,134,0.25)] dark:border-black" />
                <p className="text-sm font-medium text-white/40">
                  {exp.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="mt-1 text-white/70">
                  {exp.company} &middot; {exp.location}
                </p>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}
