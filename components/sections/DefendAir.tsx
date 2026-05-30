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
  ScrollReveal,
} from "@/components/ui";
import {
  DEFENDAIR_HEADLINE,
  DEFENDAIR_SUB,
  DEFENDAIR_MISSION,
  DEFENDAIR_BODY,
  DEFENDAIR_ROLES,
  DEFENDAIR_DEFEAT,
  DEFENDAIR_SPECS,
} from "@/lib/content";
import { ASSETS } from "@/lib/assets";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

const none: Variants = {};

export function DefendAir() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="defend-air-personal" dark className="overflow-hidden">
        <Container>

          {/* ── Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <motion.div variants={item}>
              <Kicker className="mb-0">DEFENDAIR PERSONAL</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag variant="gold">LAST LINE OF DEFENCE</Tag>
            </motion.div>
          </motion.div>

          {/* ── Main two-column ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: narrative + roles + defeat mechanism ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-10"
            >
              {/* Headline block */}
              <div className="flex flex-col gap-4">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {DEFENDAIR_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {DEFENDAIR_SUB}
                </motion.p>

                {/* Mission statement — the defining sentence */}
                <motion.p
                  variants={item}
                  className="text-[var(--color-text-primary)] font-body text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {DEFENDAIR_MISSION}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted font-body text-sm md:text-base leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {DEFENDAIR_BODY}
                </motion.p>
              </div>

              {/* Who deploys this — operator roles */}
              <motion.div variants={container}>
                <motion.p variants={item} className="kicker text-dim mb-5">
                  WHO DEPLOYS THIS
                </motion.p>
                <motion.div
                  variants={container}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border-subtle)]"
                  style={{ borderRadius: "2px" }}
                >
                  {DEFENDAIR_ROLES.map((r) => (
                    <motion.div
                      key={r.role}
                      variants={item}
                      className="bg-surface-deep px-5 py-4 flex flex-col gap-2"
                    >
                      <span className="font-mono text-[0.65rem] text-gold uppercase tracking-[0.15em]">
                        {r.role}
                      </span>
                      <span className="font-body text-sm text-muted leading-relaxed">
                        {r.context}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Defeat mechanism */}
              <motion.div variants={container}>
                <motion.p variants={item} className="kicker text-dim mb-5">
                  DEFEAT MECHANISM
                </motion.p>
                <motion.div variants={container} className="flex flex-col gap-3">
                  {DEFENDAIR_DEFEAT.map((d) => (
                    <motion.div
                      key={d.label}
                      variants={item}
                      className="flex gap-4 items-start"
                    >
                      <span
                        className="flex-shrink-0 font-mono text-[0.6rem] text-gold uppercase tracking-[0.15em] pt-0.5 whitespace-nowrap"
                        style={{ minWidth: "9rem" }}
                      >
                        {d.label}
                      </span>
                      <span className="font-body text-sm text-muted leading-relaxed">
                        {d.detail}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: image + specs ── */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduce ? none : scaleIn}
              >
                <MediaFrame
                  asset={ASSETS.defendair_personal}
                  showHUD
                  aspectRatio="4/3"
                  objectFit="contain"
                />
              </motion.div>

              {/* Operational parameters */}
              <ScrollReveal delay={0.1}>
                <p className="kicker text-dim mb-4">OPERATIONAL PARAMETERS</p>
                <SpecGrid specs={DEFENDAIR_SPECS} />
                <p className="font-mono text-[0.6rem] text-dim mt-2 tracking-widest">
                  † Performance figures subject to operational conditions and configuration.
                </p>
              </ScrollReveal>

              {/* Ecosystem positioning */}
              <ScrollReveal delay={0.15}>
                <div
                  className="flex items-start gap-4 px-5 py-4"
                  style={{
                    background: "var(--color-gold-glow)",
                    border: "1px solid var(--color-border-gold)",
                    borderRadius: "2px",
                  }}
                >
                  <span className="font-mono text-gold text-base flex-shrink-0" aria-hidden="true">◈</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[0.6rem] text-gold uppercase tracking-[0.2em]">
                      Layered Defence Role
                    </span>
                    <p className="font-body text-sm text-muted leading-relaxed">
                      The final protective layer in the XTEND ecosystem.
                      When detection, tracking, and standoff intercept have been executed —
                      the operator is the last defence between the threat and its objective.
                    </p>
                  </div>
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
