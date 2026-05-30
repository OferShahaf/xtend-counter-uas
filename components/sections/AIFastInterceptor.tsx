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
} from "@/components/ui";
import {
  AI_INTERCEPTOR_HEADLINE,
  AI_INTERCEPTOR_SUB,
  AI_INTERCEPTOR_BODY,
  AI_INTERCEPTOR_HIGHLIGHTS,
} from "@/lib/content";
import { ASSETS } from "@/lib/assets";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

const none: Variants = {};

export function AIFastInterceptor() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="ai-fast-interceptor" dark className="overflow-hidden">
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
              <Kicker className="mb-0">AI FAST INTERCEPTOR</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag>KINETIC DEFEAT</Tag>
            </motion.div>
          </motion.div>

          {/* ── Two-column: media LEFT, text RIGHT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: media ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={shouldReduce ? none : scaleIn}
              className="order-2 lg:order-1"
            >
              <MediaFrame
                asset={ASSETS.ai_fast_interceptor}
                showHUD
                aspectRatio="16/9"
                objectFit="cover"
              />
            </motion.div>

            {/* ── RIGHT: text + highlights ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
              className="flex flex-col gap-8 order-1 lg:order-2"
            >
              <div className="flex flex-col gap-5">
                <motion.h2
                  variants={shouldReduce ? none : fadeUp}
                  className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                  style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.0 }}
                >
                  {AI_INTERCEPTOR_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {AI_INTERCEPTOR_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {AI_INTERCEPTOR_BODY}
                </motion.p>
              </div>

              {/* Highlights */}
              <motion.div variants={container} className="flex flex-col gap-4">
                <motion.p variants={item} className="kicker text-dim">
                  KEY CAPABILITIES
                </motion.p>
                <motion.div variants={container} className="flex flex-wrap gap-3">
                  {AI_INTERCEPTOR_HIGHLIGHTS.map((h) => (
                    <motion.div key={h} variants={item}>
                      <Tag>{h}</Tag>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Kinetic layer callout */}
              <motion.div
                variants={item}
                className="flex items-start gap-4 px-5 py-4"
                style={{
                  background: "rgba(192,57,43,0.06)",
                  border: "1px solid rgba(192,57,43,0.25)",
                  borderRadius: "2px",
                }}
              >
                <span className="font-mono text-[var(--color-threat-red)] text-base flex-shrink-0" aria-hidden="true">◈</span>
                <p className="font-mono text-xs text-[var(--color-text-dim)] uppercase tracking-widest leading-relaxed">
                  Kinetic defeat layer — engages threats beyond the net-capture envelope, before they reach the protected force.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
