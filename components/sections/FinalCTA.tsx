"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Container,
  Kicker,
  CTAButton,
  HUDFrame,
} from "@/components/ui";
import {
  FINAL_CTA_HEADLINE,
  FINAL_CTA_BODY,
} from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const none: Variants = {};

export function FinalCTA() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <section
      id="contact"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,74,0.07) 0%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="flex flex-col items-center gap-8 max-w-3xl mx-auto"
        >
          <motion.div variants={item}>
            <Kicker>BUILD YOUR CAPABILITY</Kicker>
          </motion.div>

          <motion.h2
            variants={shouldReduce ? none : fadeUp}
            className="display-heading font-display text-[var(--color-text-primary)] uppercase"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.0 }}
          >
            {FINAL_CTA_HEADLINE}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-muted text-base md:text-lg leading-relaxed"
            style={{ maxWidth: "52ch" }}
          >
            {FINAL_CTA_BODY}
          </motion.p>

          <motion.div variants={item} className="w-full max-w-xl">
            <HUDFrame size="lg" className="px-8 py-8">
              <div className="flex flex-col gap-6">
                <p className="font-mono text-[0.65rem] text-dim uppercase tracking-[0.2em] text-center">
                  Request a Demonstration or Capability Brief
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="mailto:info@xtend.ai?subject=Demonstration Request" variant="primary">
                    Request Demonstration
                  </CTAButton>
                  <CTAButton href="mailto:info@xtend.ai?subject=Capability Brief Request" variant="secondary">
                    Download Brief
                  </CTAButton>
                </div>

                <div
                  className="h-px"
                  style={{ background: "var(--color-border-subtle)" }}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                  {[
                    { label: "Email", value: "info@xtend.ai", href: "mailto:info@xtend.ai" },
                    { label: "Web", value: "xtend.ai", href: "https://xtend.ai" },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <span className="font-mono text-[0.55rem] text-dim uppercase tracking-[0.2em]">
                        {label}
                      </span>
                      <a
                        href={href}
                        target={label === "Web" ? "_blank" : undefined}
                        rel={label === "Web" ? "noopener noreferrer" : undefined}
                        className="font-mono text-xs text-gold hover:text-[var(--color-gold-bright)] transition-colors duration-200 tracking-wide"
                      >
                        {value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </HUDFrame>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
