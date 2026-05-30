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
  TURRET_HEADLINE,
  TURRET_SUB,
  TURRET_BODY,
  TURRET_APPS,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

const none: Variants = {};

export function Turret() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="defendair-turret" dark className="overflow-hidden">
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
              <Kicker className="mb-0">DEFENDAIR TURRET</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag>FIXED SITE</Tag>
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
                    [ DEFENDAIR TURRET — 360° INTERCEPTION ]
                  </span>
                </div>
              </HUDFrame>
            </motion.div>

            {/* ── RIGHT: text + applications ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-8 order-1 lg:order-2"
            >
              <div className="flex flex-col gap-4">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {TURRET_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {TURRET_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {TURRET_BODY}
                </motion.p>
              </div>

              {/* Applications */}
              <motion.div variants={container} className="flex flex-col gap-0">
                <motion.p variants={item} className="kicker text-dim mb-4">
                  APPLICATIONS
                </motion.p>
                <motion.div variants={container} className="flex flex-wrap gap-3">
                  {TURRET_APPS.map((app) => (
                    <motion.div key={app} variants={item}>
                      <Tag>{app}</Tag>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* 360° badge */}
              <motion.div
                variants={item}
                className="flex items-center gap-4 px-5 py-4"
                style={{
                  background: "var(--color-gold-glow)",
                  border: "1px solid var(--color-border-gold)",
                  borderRadius: "2px",
                }}
              >
                <span
                  className="font-display font-bold text-gold"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  360°
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs text-gold uppercase tracking-widest">
                    Persistent Coverage
                  </span>
                  <span className="font-mono text-[0.65rem] text-dim tracking-wide">
                    Always on. Always watching. Zero blind spots.
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
