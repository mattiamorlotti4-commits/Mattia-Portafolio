"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import Eyebrow from "./Eyebrow";

const EMAIL = "mattiamorlotti4@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/mattia-morlotti";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio contact from ${name || "website visitor"}`;
    const body = `${message}\n\nFrom, ${name}${email ? ` (${email})` : ""}`;

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-accent py-24 dark:bg-accent-dark sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl"
      />
      <div className="container-narrow relative grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <AnimatedSection>
          <Eyebrow tone="white">Contact</Eyebrow>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white/75">
            Open to conversations about business development, corporate
            finance, and strategy roles at startups and scale-ups.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="block text-white underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white underline-offset-4 hover:underline"
            >
              linkedin.com/in/mattia-morlotti
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/75">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/75">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/75">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-white/90"
            >
              Send message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
