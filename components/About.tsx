import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding border-y border-ink-100 bg-ink-50 py-24 dark:border-ink-800 dark:bg-ink-900/40 sm:py-32"
    >
      <div className="container-narrow max-w-3xl">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            What I Do
          </p>
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
