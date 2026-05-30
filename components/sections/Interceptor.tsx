"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  Tag,
  HUDFrame,
} from "@/components/ui";
import {
  INTERCEPTOR_HEADLINE,
  INTERCEPTOR_SUB,
  INTERCEPTOR_BODY,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

/** Empty Variants — disables animations for reduced-motion users. */
const none: Variants = {};

const INTERCEPTOR_HIGHLIGHTS = [
  "HIGH-SPEED ENGAGEMENT",
  "AUTONOMOUS TRACKING",
  "AI-ASSISTED PURSUIT",
] as const;

export function Interceptor() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="interceptor" dark className="overflow-hidden">
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
              <Kicker className="mb-0">XTEND INTERCEPTOR</Kicker>
            </motion.div>
          </motion.div>

          {/* ── Two-column layout: media LEFT, text RIGHT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: media placeholder ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={shouldReduce ? none : scaleIn}
              className="order-2 lg:order-1"
            >
              <HUDFrame size="lg">
                <div
                  className="flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background: "var(--color-surface-mid)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <span className="font-mono text-xs text-dim tracking-widest uppercase">
                    [ XTEND INTERCEPTOR — KINETIC DEFEAT ]
                  </span>
                </div>
              </HUDFrame>
            </motion.div>

            {/* ── RIGHT: text + highlights ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-8 order-1 lg:order-2"
            >
              {/* Headline + sub + body */}
              <div className="flex flex-col gap-4">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {INTERCEPTOR_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {INTERCEPTOR_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {INTERCEPTOR_BODY}
                </motion.p>
              </div>

              {/* Key highlights as Tags */}
              <motion.div variants={container} className="flex flex-col gap-0">
                <motion.p variants={item} className="kicker text-dim mb-4">
                  KEY HIGHLIGHTS
                </motion.p>
                <motion.div variants={container} className="flex flex-wrap gap-3">
                  {INTERCEPTOR_HIGHLIGHTS.map((highlight) => (
                    <motion.div key={highlight} variants={item}>
                      <Tag>{highlight}</Tag>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
