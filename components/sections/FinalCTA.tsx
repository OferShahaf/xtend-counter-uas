"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Container,
  Kicker,
  GoldDivider,
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
    <>
      <GoldDivider className="my-0" />
      <section
        id="contact"
        className="relative bg-surface-deep py-24 md:py-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,162,74,0.05) 0%, rgba(0,0,0,0) 70%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-8 max-w-xl"
          >
            <motion.div variants={item}>
              <Kicker>CONTACT XTEND</Kicker>
            </motion.div>

            <motion.h2
              variants={shouldReduce ? none : fadeUp}
              className="display-heading font-display text-[var(--color-text-primary)] uppercase"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", lineHeight: 1.0 }}
            >
              {FINAL_CTA_HEADLINE}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted text-base leading-relaxed"
              style={{ maxWidth: "48ch" }}
            >
              {FINAL_CTA_BODY}
            </motion.p>

            {/* Single web link + CTA */}
            <motion.div variants={item} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.55rem] text-dim uppercase tracking-[0.2em]">Web</span>
                <a
                  href="https://xtend.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-gold hover:text-[var(--color-gold-bright)] transition-colors duration-200 tracking-wide"
                >
                  xtend.me
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://xtend.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-200 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-glow)]"
                  style={{ borderRadius: "2px" }}
                >
                  Contact XTEND
                </a>
              </div>
            </motion.div>

            <motion.p
              variants={item}
              className="font-mono text-[0.55rem] text-dim tracking-widest leading-relaxed"
              style={{ maxWidth: "44ch" }}
            >
              Export-controlled technology. Contact XTEND for qualification and distribution terms.
            </motion.p>
          </motion.div>
        </Container>
      </section>
      <GoldDivider className="my-0" />
    </>
  );
}
