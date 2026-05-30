"use client";

import { useState, useEffect } from "react";
import { CTAButton } from "@/components/ui";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Systems", href: "#systems" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "Why XTEND", href: "#why-xtend" },
];

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect y="0" width="22" height="1.5" rx="1" fill="currentColor" />
      <rect y="7" width="22" height="1.5" rx="1" fill="currentColor" />
      <rect y="14" width="22" height="1.5" rx="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line
        x1="1"
        y1="1"
        x2="17"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="17"
        y1="1"
        x2="1"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border-gold)]"
          : "border-b border-transparent",
      ].join(" ")}
      style={{
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left: Wordmark */}
          <a
            href="#hero"
            className="flex flex-col leading-none group"
            aria-label="XTEND Counter-UAS — scroll to top"
          >
            <span
              className="font-display font-bold text-gold uppercase tracking-wider group-hover:text-[var(--color-gold-bright)] transition-colors duration-200"
              style={{ fontSize: "1.5rem", letterSpacing: "0.12em" }}
            >
              XTEND
            </span>
            <span
              className="font-mono text-dim uppercase tracking-[0.2em]"
              style={{ fontSize: "0.55rem" }}
            >
              COUNTER-UAS
            </span>
          </a>

          {/* Center: Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-muted hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <CTAButton
                href="#contact"
                variant="secondary"
                className="px-4 py-2 text-[0.65rem]"
              >
                Contact XTEND
              </CTAButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 text-[var(--color-text-primary)] hover:text-gold transition-colors duration-200"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={[
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        style={{
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted hover:text-gold transition-colors duration-200 py-3 border-b border-[var(--color-border-subtle)] last:border-b-0"
            >
              {label}
            </a>
          ))}
          <div className="pt-4">
            <CTAButton
              href="#contact"
              variant="secondary"
              className="w-full justify-center py-3 text-[0.65rem]"
              onClick={closeMobile}
            >
              Contact XTEND
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
