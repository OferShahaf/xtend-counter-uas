"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  Tag,
  TacticalPlaceholder,
  ScrollReveal,
} from "@/components/ui";
import {
  SENTRYCS_HEADLINE,
  SENTRYCS_SUB,
  SENTRYCS_BODY,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

const none: Variants = {};

const CYBER_STEPS = [
  { label: "DETECT", sub: "Passive RF scanning", step: "01", gold: false },
  { label: "IDENTIFY", sub: "Protocol analysis", step: "02", gold: false },
  { label: "LOCATE", sub: "Pilot geolocation", step: "03", gold: false },
  { label: "MITIGATE", sub: "Controlled defeat", step: "04", gold: true },
] as const;

export function Sentrycs() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="sentrycs" dark className="overflow-hidden">
        <Container>
          {/* ── Pre-heading kicker row ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <motion.div variants={item}>
              <Kicker className="mb-0">SENTRYCS</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag variant="gold">CYBER DEFEAT</Tag>
            </motion.div>
          </motion.div>

          {/* ── Two-column layout: text LEFT, visual RIGHT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: text ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {SENTRYCS_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {SENTRYCS_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {SENTRYCS_BODY}
                </motion.p>
              </div>

              {/* Invisible defeat callout */}
              <motion.div
                variants={item}
                className="flex items-start gap-4 px-5 py-4"
                style={{
                  background: "var(--color-gold-glow)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "2px",
                }}
              >
                <span
                  className="flex-shrink-0 font-mono text-gold text-lg"
                  aria-hidden="true"
                >
                  ◈
                </span>
                <p className="font-mono text-xs text-gold uppercase tracking-widest leading-relaxed">
                  Not every threat requires destruction — sometimes the
                  smartest interception is invisible.
                </p>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: cyber defeat sequence ── */}
            <div className="flex flex-col gap-8">
              {/* HUD visual */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduce ? none : scaleIn}
              >
                <TacticalPlaceholder
                  label="Sentrycs — RF Spectrum Analysis"
                  sublabel="CYBER DEFEAT"
                  aspectRatio="16/9"
                />
              </motion.div>

              {/* Cyber defeat sequence */}
              <ScrollReveal delay={0.1}>
                <p className="kicker text-dim mb-6">CYBER DEFEAT SEQUENCE</p>
                <div className="relative flex items-start justify-between gap-0">
                  <div
                    className="absolute left-0 right-0 top-[13px] h-px"
                    style={{ background: "var(--color-border-subtle)" }}
                    aria-hidden="true"
                  />
                  {CYBER_STEPS.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={shouldReduce ? none : {
                        hidden: { opacity: 0, y: 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      className="relative flex flex-col items-center flex-1"
                      style={{ minWidth: 0 }}
                    >
                      <div
                        className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: step.gold
                            ? "var(--color-gold)"
                            : "var(--color-surface-deep)",
                          border: `1.5px solid ${step.gold ? "var(--color-gold)" : "var(--color-border-subtle)"}`,
                          boxShadow: step.gold
                            ? "0 0 12px var(--color-gold-glow), 0 0 24px var(--color-gold-glow)"
                            : "none",
                        }}
                      >
                        <span
                          className="font-mono text-[0.6rem] font-bold"
                          style={{
                            color: step.gold
                              ? "var(--color-surface-deep)"
                              : "var(--color-text-dim)",
                          }}
                        >
                          {step.step}
                        </span>
                      </div>
                      <span
                        className="mt-3 font-mono text-[0.65rem] font-bold tracking-widest uppercase"
                        style={{
                          color: step.gold
                            ? "var(--color-gold-bright)"
                            : "var(--color-text-primary)",
                        }}
                      >
                        {step.label}
                      </span>
                      <span className="mt-1 font-mono text-[0.55rem] text-dim tracking-wide text-center leading-snug px-1">
                        {step.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
