import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

const skills = [
  "Excel (Microsoft Office Specialist certified)",
  "Power BI",
  "PowerPoint",
  "Financial Analysis",
  "Market Research",
  "Cross-Cultural Communication",
];

const languages = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Spanish", level: "Conversational" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-24 sm:py-32">
      <div className="container-narrow max-w-4xl">
        <AnimatedSection>
          <Eyebrow>Skills</Eyebrow>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Tools &amp; capabilities
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-ink-200/70 bg-white/50 px-5 py-4 text-ink-800 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900/30 dark:text-ink-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <h3 className="mb-6 text-lg font-semibold text-ink-950 dark:text-white">
            Languages
          </h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="rounded-full border border-ink-200/70 bg-white/50 px-5 py-2.5 text-sm text-ink-700 shadow-sm backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/30 dark:text-ink-300"
              >
                <span className="font-medium text-ink-950 dark:text-white">
                  {lang.name}
                </span>{" "}
                &middot; {lang.level}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
