export default function Footer() {
  return (
    <footer className="section-padding border-t border-ink-100 py-8 dark:border-ink-800">
      <div className="container-narrow flex flex-col items-center justify-between gap-2 text-sm text-ink-400 sm:flex-row dark:text-ink-500">
        <p>© {new Date().getFullYear()} Mattia Morlotti</p>
        <a href="#top" className="hover:text-accent dark:hover:text-accent-light">
          Back to top
        </a>
      </div>
    </footer>
  );
}
