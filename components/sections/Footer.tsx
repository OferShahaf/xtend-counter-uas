import { GoldDivider, CTAButton } from "@/components/ui";

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Systems", href: "#systems" },
  { label: "DefendAir Personal", href: "#defend-air-personal" },
  { label: "SCORPIO 1000", href: "#scorpio-1000" },
  { label: "Sentrycs", href: "#sentrycs" },
  { label: "Why XTEND", href: "#why-xtend" },
];

export function Footer() {
  return (
    <footer
      className="w-full bg-surface-deep"
      aria-label="Site footer"
    >
      <GoldDivider className="my-0" />

      {/* Main footer content */}
      <div className="mx-auto px-6 md:px-12 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-gold uppercase tracking-wider"
                style={{ fontSize: "1.6rem", letterSpacing: "0.12em" }}
              >
                XTEND
              </span>
              <span
                className="font-mono text-dim uppercase tracking-[0.2em]"
                style={{ fontSize: "0.55rem" }}
              >
                COUNTER-UAS
              </span>
            </div>

            <p
              className="font-mono text-gold uppercase tracking-widest"
              style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
            >
              Combat Proven. Portable. Mission Ready.
            </p>

            <p className="text-muted text-sm leading-relaxed" style={{ maxWidth: "34ch" }}>
              XTEND delivers a complete layered Counter-UAS ecosystem — proven
              in live operations by military forces worldwide, scalable from
              individual soldier to national infrastructure protection.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3
              className="font-mono text-[var(--color-text-dim)] uppercase tracking-[0.2em]"
              style={{ fontSize: "0.6rem" }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-5">
            <h3
              className="font-mono text-[var(--color-text-dim)] uppercase tracking-[0.2em]"
              style={{ fontSize: "0.6rem" }}
            >
              Contact
            </h3>

            <div className="flex flex-col gap-3">
              <p
                className="font-display text-[var(--color-text-primary)] uppercase tracking-wide"
                style={{ fontSize: "1rem" }}
              >
                Contact XTEND
              </p>

              <a
                href="https://xtend.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.72rem] tracking-[0.1em] text-muted hover:text-gold transition-colors duration-200"
              >
                xtend.ai
              </a>

              <a
                href="mailto:info@xtend.ai"
                className="font-mono text-[0.72rem] tracking-[0.1em] text-muted hover:text-gold transition-colors duration-200"
              >
                info@xtend.ai
              </a>
            </div>

            <div className="pt-2">
              <CTAButton
                href="#contact"
                variant="secondary"
                className="px-5 py-2.5 text-[0.65rem]"
              >
                Schedule a Briefing
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-[var(--color-border-subtle)]"
      >
        <div className="mx-auto px-6 md:px-12 max-w-7xl py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-mono text-dim" style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}>
            © {new Date().getFullYear()} XTEND Robotics. All rights reserved.
          </p>
          <p
            className="font-mono text-dim"
            style={{ fontSize: "0.58rem", letterSpacing: "0.1em" }}
          >
            Export-controlled information. Distribution subject to applicable regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
