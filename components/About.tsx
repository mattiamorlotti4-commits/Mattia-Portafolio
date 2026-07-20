import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden border-y border-ink-200 bg-gradient-to-br from-accent/[0.07] via-ink-100 to-accent/10 py-24 dark:border-ink-800 dark:from-accent-light/[0.05] dark:via-ink-900/40 dark:to-accent-light/[0.08] sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-3xl dark:bg-accent-light/[0.1]"
      />
      <div className="container-narrow relative max-w-3xl">
        <AnimatedSection>
          <Eyebrow>What I Do</Eyebrow>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Focused on strategy, finance, and building things that last
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              I&apos;m currently a Business Controlling Intern at Mitsubishi
              Electric Europe, where I work on management reporting, KPI
              tracking, and cross-functional planning cycles, turning sales,
              cost, and operational data into insights leadership can act on.
              It sits on top of a B.S. in International Business &amp;
              Economics at Saint Louis University&apos;s Chaifetz School of
              Business (GPA 3.9/4.0), with a technical foundation in Excel
              (Microsoft Office Specialist certified) and Power BI.
            </p>
            <p>
              What I&apos;m looking for next is a business development,
              corporate finance, or strategy role, ideally inside a startup
              or scale-up, close to founders and decision-makers rather than
              several layers removed from them.
            </p>
            <p>
              Outside of formal roles, I follow markets and investing
              closely, and I&apos;m generally drawn to how companies get
              built, funded, and scaled.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
