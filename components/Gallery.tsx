import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Mattia Morlotti — portrait" },
  { src: "/images/gallery-2.jpg", alt: "Mattia Morlotti at the office" },
  { src: "/images/gallery-3.jpg", alt: "Mattia Morlotti presenting at a CRM masterclass" },
  { src: "/images/gallery-4.jpg", alt: "Mattia Morlotti at a career fair" },
  { src: "/images/gallery-5.jpg", alt: "Mattia Morlotti promoting Telepass at Nous Lab" },
  { src: "/images/gallery-6.jpg", alt: "Mattia Morlotti with a friend" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding border-y border-ink-100 bg-ink-50 py-24 dark:border-ink-800 dark:bg-ink-900/40 sm:py-32"
    >
      <div className="container-narrow">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            Moments
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            A few snapshots
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {photos.map((photo, i) => (
            <AnimatedSection key={photo.src} delay={i * 0.06}>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-ink-100 dark:bg-ink-900">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
