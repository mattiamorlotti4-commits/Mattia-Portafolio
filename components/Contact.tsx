"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const EMAIL = "mattiamorlotti4@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/mattia-morlotti";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio contact from ${name || "website visitor"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-padding py-24 sm:py-32">
      <div className="container-narrow grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            Contact
          </p>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            Open to conversations about business development, corporate
            finance, and strategy roles at startups and scale-ups.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="block text-ink-900 underline-offset-4 hover:text-accent hover:underline dark:text-ink-100 dark:hover:text-accent-light"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ink-900 underline-offset-4 hover:text-accent hover:underline dark:text-ink-100 dark:hover:text-accent-light"
            >
              linkedin.com/in/mattia-morlotti
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-3 text-ink-900 outline-none transition-colors focus:border-accent dark:border-ink-700 dark:text-ink-100 dark:focus:border-accent-light"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-ink-200 bg-transparent px-4 py-3 text-ink-900 outline-none transition-colors focus:border-accent dark:border-ink-700 dark:text-ink-100 dark:focus:border-accent-light"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-ink-200 bg-transparent px-4 py-3 text-ink-900 outline-none transition-colors focus:border-accent dark:border-ink-700 dark:text-ink-100 dark:focus:border-accent-light"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent dark:bg-white dark:text-ink-950 dark:hover:bg-accent-light dark:hover:text-white"
            >
              Send message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
