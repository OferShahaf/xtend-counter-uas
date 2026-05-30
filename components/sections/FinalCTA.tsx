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

const CONTACT_ITEMS = [
  { label: "Web", value: "xtend.ai", href: "https://xtend.ai", external: true },
  { label: "Email", value: "info@xtend.ai", href: "mailto:info@xtend.ai", external: false },
] as const;

export function FinalCTA() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <section
        id="contact"
        className="relative bg-surface-deep py-24 md:py-32 overflow-hidden"
      >
        {/* Subtle radial glow */}
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
            className="flex flex-col gap-10 max-w-2xl"
          >
            <div className="flex flex-col gap-6">
              <motion.div variants={item}>
                <Kicker>CONTACT XTEND</Kicker>
              </motion.div>

              <motion.h2
                variants={shouldReduce ? none : fadeUp}
                className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.0 }}
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
            </div>

            {/* Contact directory */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 gap-px bg-[var(--color-border-subtle)]"
              style={{ maxWidth: "28rem", borderRadius: "2px" }}
            >
              {CONTACT_ITEMS.map(({ label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group bg-surface-deep px-6 py-5 flex flex-col gap-1.5 hover:bg-surface-mid transition-colors duration-200"
                >
                  <span className="font-mono text-[0.55rem] text-dim uppercase tracking-[0.2em]">
                    {label}
                  </span>
                  <span className="font-mono text-sm text-gold group-hover:text-[var(--color-gold-bright)] transition-colors duration-200 tracking-wide">
                    {value}
                  </span>
                </a>
              ))}
            </motion.div>

            {/* Export control note */}
            <motion.p
              variants={item}
              className="font-mono text-[0.55rem] text-dim tracking-widest leading-relaxed"
              style={{ maxWidth: "44ch" }}
            >
              Export-controlled technology. Contact XTEND for qualification,
              procurement, and distribution terms.
            </motion.p>
          </motion.div>
        </Container>
      </section>
      <GoldDivider className="my-0" />
    </>
  );
}
