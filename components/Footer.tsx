export default function Footer() {
  return (
    <footer className="section-padding bg-ink-950 py-8 dark:bg-black">
      <div className="container-narrow flex flex-col items-center justify-between gap-2 text-sm text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Mattia Morlotti</p>
        <a href="#top" className="hover:text-accent-light">
          Back to top
        </a>
      </div>
    </footer>
  );
}
