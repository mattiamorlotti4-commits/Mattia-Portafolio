import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

export default function Story() {
  return (
    <section id="story" className="section-padding py-24 sm:py-32">
      <div className="container-narrow grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <AnimatedSection>
          <Eyebrow>My Story</Eyebrow>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Beyond the resume
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              I grew up in Italy, and even back in high school I found myself
              paying more attention to economics and international markets
              than to almost anything else on the syllabus: how companies
              actually worked, how they competed across borders. That
              curiosity is what eventually led me to Saint Louis
              University&apos;s International Business program on its Madrid
              campus: I wanted the practical, career-driven approach of an
              American business degree, without giving up a European base to
              build from. Sitting in classrooms with people from a dozen
              different countries turned out to be its own education, and it
              pushed me to sharpen the technical skills the program promised,
              and to get comfortable moving between very different ways of
              thinking.
            </p>
            <p>
              What genuinely pulls me in is understanding how companies grow,
              the mix of strategy, data, and the relationships they build
              with customers that actually moves the needle. That&apos;s why
              business development, consulting, and corporate finance all
              interest me, each for slightly different reasons. Outside of
              coursework, I follow financial markets and geopolitics closely,
              mostly because I like connecting what I&apos;m studying in
              class to what&apos;s actually happening in the world in real
              time.
            </p>
            <p>
              If there&apos;s something that sets me apart, it&apos;s less
              about what I already know and more about how I handle something
              new: I try to look past whatever task is directly in front of
              me, understand the context around it, and find a way to
              improve or learn something extra along the way. I&apos;ve
              deliberately taken on very different kinds of roles (business
              controlling, sales promotion, operations) on purpose, because
              switching contexts quickly and knowing how to talk to very
              different people is a skill in its own right, not just a side
              effect of moving around.
            </p>
            <p className="border-l-2 border-accent pl-4 italic text-ink-800 dark:border-accent-light dark:text-ink-200">
              I&apos;ve never thought of myself as the person who already
              knows everything, just the one who learns the fastest. Every
              time I step into a new environment, my approach is the same:
              understand first, contribute second, and leave things a little
              better than I found them.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl bg-accent/15 dark:bg-accent-light/15"
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink-100 shadow-2xl shadow-ink-950/10 dark:bg-ink-900 dark:shadow-black/30">
              <Image
                src="/images/story.jpg"
                alt="Mattia Morlotti, personal story"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
