import AnimatedSection from "./AnimatedSection";

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
    <section id="experience" className="section-padding py-24 sm:py-32">
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            Experience
          </p>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <ol className="relative border-l border-ink-200 dark:border-ink-800">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.08}>
              <li className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent dark:border-ink-950 dark:bg-accent-light" />
                <p className="text-sm font-medium text-ink-400 dark:text-ink-500">
                  {exp.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink-950 dark:text-white">
                  {exp.role}
                </h3>
                <p className="mt-1 text-ink-600 dark:text-ink-300">
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
