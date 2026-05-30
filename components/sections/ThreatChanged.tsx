"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  Tag,
  ScrollReveal,
  StatCounter,
} from "@/components/ui";
import {
  THREAT_HEADLINE,
  THREAT_BODY,
  THREAT_STATS,
  THREAT_TYPES,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

/** Empty Variants — disables animations for reduced-motion users. */
const none: Variants = {};

export function ThreatChanged() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="threat" dark className="overflow-hidden">
        <Container>
          {/* ── Header block ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.div variants={item}>
              <Kicker>THE THREAT HAS CHANGED</Kicker>
            </motion.div>

            <motion.h2
              variants={shouldReduce ? none : fadeUp}
              className="display-heading font-display text-[var(--color-text-primary)] uppercase"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              {THREAT_HEADLINE}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted text-base md:text-lg leading-relaxed"
              style={{ maxWidth: "52ch" }}
            >
              {THREAT_BODY}
            </motion.p>
          </motion.div>

          {/* ── Stat counters ── */}
          <ScrollReveal
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            delay={0.1}
          >
            {THREAT_STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </ScrollReveal>

          {/* ── Threat taxonomy ── */}
          <ScrollReveal className="mt-16 md:mt-20" delay={0.2}>
            <p className="kicker text-dim mb-6">THREAT TAXONOMY</p>
            <div className="flex flex-wrap gap-4">
              {THREAT_TYPES.map((type) => (
                <div
                  key={type.tag}
                  className="flex flex-col gap-2 min-w-[10rem] flex-1 bg-surface-mid border border-[rgba(255,255,255,0.06)] px-5 py-4"
                  style={{ borderRadius: "2px" }}
                >
                  <Tag variant={type.tag === "KINETIC" ? "red" : "gold"}>
                    {type.tag}
                  </Tag>
                  <span className="font-mono text-sm text-[var(--color-text-primary)] tracking-wide mt-1">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Closing statement ── */}
          <ScrollReveal className="mt-16 md:mt-20" delay={0.1}>
            <p
              className="display-heading font-display uppercase"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)", lineHeight: 1.1 }}
            >
              <span className="text-muted">Traditional air defense wasn&apos;t designed for this.</span>
              {" "}
              <span className="text-gold">XTEND was.</span>
            </p>
          </ScrollReveal>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
