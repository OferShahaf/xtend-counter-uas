"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  ScrollReveal,
} from "@/components/ui";
import {
  WHY_HEADLINE,
  WHY_COMPARISON,
  SCENARIOS,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const none: Variants = {};

function CheckIcon({ filled }: { filled: boolean }) {
  if (filled) {
    return (
      <span className="flex items-center justify-center w-5 h-5" aria-label="Yes">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <circle cx="10" cy="10" r="9" fill="rgba(201,162,74,0.15)" stroke="var(--color-gold)" strokeWidth="1" />
          <polyline
            points="5.5,10.5 8.5,13.5 14.5,7.5"
            stroke="var(--color-gold)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center w-5 h-5" aria-label="No">
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="7" y1="10" x2="13" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function WhyXtend() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="why-xtend" dark className="overflow-hidden">
        <Container>
          {/* ── Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.div variants={item}>
              <Kicker>WHY XTEND</Kicker>
            </motion.div>

            <motion.h2
              variants={shouldReduce ? none : fadeUp}
              className="display-heading font-display text-[var(--color-text-primary)] uppercase"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              {WHY_HEADLINE}
            </motion.h2>
          </motion.div>

          {/* ── Comparison table ── */}
          <ScrollReveal className="mt-16 md:mt-20" delay={0.1}>
            <div className="w-full overflow-x-auto">
              <table className="w-full max-w-2xl" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th className="text-left pb-4 pr-8" style={{ width: "60%" }}>
                      <span className="font-mono text-[0.6rem] text-dim uppercase tracking-[0.2em]">
                        CAPABILITY
                      </span>
                    </th>
                    <th className="text-center pb-4 px-6" style={{ width: "20%" }}>
                      <span className="font-mono text-[0.6rem] text-gold uppercase tracking-[0.2em]">
                        XTEND
                      </span>
                    </th>
                    <th className="text-center pb-4 px-6" style={{ width: "20%" }}>
                      <span className="font-mono text-[0.6rem] text-dim uppercase tracking-[0.2em]">
                        TRADITIONAL
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {WHY_COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderTop: "1px solid var(--color-border-subtle)",
                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                      }}
                    >
                      <td className="py-4 pr-8">
                        <span className="font-mono text-sm text-[var(--color-text-primary)] tracking-wide">
                          {row.feature}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <CheckIcon filled={row.xtend} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <CheckIcon filled={row.traditional} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ── Deployment Scenarios ── */}
          <ScrollReveal className="mt-20 md:mt-28" delay={0.1}>
            <p className="kicker text-dim mb-8" id="scenarios">DEPLOYMENT SCENARIOS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-subtle)]"
              style={{ borderRadius: "2px" }}>
              {SCENARIOS.map((scenario) => (
                <div
                  key={scenario.title}
                  className="bg-surface-deep p-5 flex flex-col gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-bold text-[var(--color-text-primary)] uppercase tracking-wide"
                      style={{ fontSize: "0.95rem" }}>
                      {scenario.title}
                    </span>
                    <span className="font-mono text-[0.6rem] text-dim uppercase tracking-widest">
                      THREAT
                    </span>
                    <span className="font-mono text-xs text-muted tracking-wide">
                      {scenario.threat}
                    </span>
                  </div>

                  <div
                    className="h-px"
                    style={{ background: "var(--color-border-subtle)" }}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[0.6rem] text-dim uppercase tracking-widest">
                      RESPONSE
                    </span>
                    <span className="font-mono text-xs text-gold tracking-wide">
                      {scenario.response}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 mt-auto pt-2">
                    <span className="font-mono text-[0.6rem] text-dim uppercase tracking-widest">
                      OUTCOME
                    </span>
                    <span className="font-mono text-[0.7rem] text-[var(--color-text-primary)] tracking-wide">
                      {scenario.outcome}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
