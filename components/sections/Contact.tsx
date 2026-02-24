import Section from "@/components/layout/Section";

const LINKS = [
  {
    label: "Email",
    href: "mailto:your@email.com",
    display: "your@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    display: "github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    display: "linkedin.com/in/yourusername",
  },
  // future enhancement area: add Twitter/X, blog, etc.
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mb-12 max-w-lg text-muted">
          I&apos;m always interested in new opportunities, collaborations, and
          conversations about AI engineering.
        </p>

        <div className="mb-12 flex flex-col gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-divider pb-4 transition-all hover:border-muted"
            >
              <span className="font-mono text-xs tracking-wider text-muted/60 uppercase">
                {link.label}
              </span>
              <span className="text-sm text-muted transition-colors group-hover:text-text">
                {link.display}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="group inline-flex items-center gap-3 border border-text px-8 py-3 font-mono text-xs uppercase tracking-widest text-text transition-all hover:bg-text hover:text-bg"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>

        {/* Footer */}
        <div className="mt-24 border-t border-divider pt-8">
          <p className="font-mono text-xs text-muted/60">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </Section>
  );
}
