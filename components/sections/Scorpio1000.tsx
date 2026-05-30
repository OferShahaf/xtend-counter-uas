"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  Tag,
  MediaFrame,
  SpecGrid,
} from "@/components/ui";
import {
  SCORPIO_HEADLINE,
  SCORPIO_SUB,
  SCORPIO_BODY,
  SCORPIO_CAPS,
  SCORPIO_SPECS,
} from "@/lib/content";
import { ASSETS } from "@/lib/assets";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

/** Empty Variants — disables animations for reduced-motion users. */
const none: Variants = {};

const INTERCEPT_STEPS = [
  { label: "ACQUIRE", sub: "Drone detection", gold: false },
  { label: "LOCK", sub: "Targeting", gold: false },
  { label: "LAUNCH", sub: "Net deployment", gold: false },
  { label: "CAPTURE", sub: "Neutralized", gold: true },
] as const;

export function Scorpio1000() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="scorpio-1000" dark className="overflow-hidden">
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
              <Kicker className="mb-0">SCORPIO 1000 X-NET</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag>THE FLAGSHIP PLATFORM</Tag>
            </motion.div>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: text, capabilities, specs ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-8"
            >
              {/* Headline + sub + body */}
              <div className="flex flex-col gap-4">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {SCORPIO_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {SCORPIO_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {SCORPIO_BODY}
                </motion.p>
              </div>

              {/* Capabilities checklist */}
              <motion.div variants={container} className="flex flex-col gap-0">
                <motion.p variants={item} className="kicker text-dim mb-4">
                  CAPABILITIES
                </motion.p>
                <motion.ul variants={container} className="flex flex-col gap-3">
                  {SCORPIO_CAPS.map((cap) => (
                    <motion.li
                      key={cap}
                      variants={item}
                      className="flex items-center gap-3"
                    >
                      {/* Gold check mark */}
                      <span
                        className="flex-shrink-0 w-4 h-4 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                        >
                          <polyline
                            points="2.5,8.5 6.5,12.5 13.5,4.5"
                            stroke="var(--color-gold)"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-mono text-sm text-[var(--color-text-primary)] tracking-wide">
                        {cap}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Specs grid */}
              <motion.div variants={item}>
                <p className="kicker text-dim mb-4">SPECIFICATIONS</p>
                <SpecGrid specs={SCORPIO_SPECS} />
                <p className="font-mono text-[0.6rem] text-dim mt-2 tracking-widest">
                  † Performance figures are indicative; subject to operational conditions.
                </p>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: media + intercept sequence ── */}
            <div className="flex flex-col gap-8">

              {/* Media frame */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduce ? none : scaleIn}
              >
                <MediaFrame
                  asset={ASSETS.scorpio_render}
                  showHUD
                  aspectRatio="16/9"
                  objectFit="cover"
                />
              </motion.div>

              {/* Intercept sequence */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={container}
                className="relative"
              >
                <motion.p variants={item} className="kicker text-dim mb-6">
                  INTERCEPT SEQUENCE
                </motion.p>

                {/* Steps row */}
                <div className="relative flex items-start justify-between gap-0">

                  {/* Horizontal connector line — sits behind the circles */}
                  <div
                    className="absolute left-0 right-0 top-[13px] h-px"
                    style={{ background: "var(--color-border-subtle)" }}
                    aria-hidden="true"
                  />

                  {INTERCEPT_STEPS.map((step, i) => (
                    <motion.div
                      key={step.label}
                      variants={item}
                      className="relative flex flex-col items-center flex-1"
                      style={{ minWidth: 0 }}
                    >
                      {/* Circle indicator */}
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
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Label */}
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

                      {/* Sub-label */}
                      <span className="mt-1 font-mono text-[0.55rem] text-dim tracking-wide text-center leading-snug px-1">
                        {step.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CAPTURE gold glow accent bar */}
                <motion.div
                  variants={shouldReduce ? none : fadeUp}
                  className="mt-6 flex items-center gap-3 px-4 py-3"
                  style={{
                    background: "var(--color-gold-glow)",
                    border: "1px solid var(--color-border-gold)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: "var(--color-gold)",
                      boxShadow: "0 0 6px var(--color-gold)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-gold tracking-widest uppercase">
                    Threat Neutralized — Zero Collateral Damage
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
