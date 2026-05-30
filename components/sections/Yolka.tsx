"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
  TacticalPlaceholder,
} from "@/components/ui";
import {
  YOLKA_HEADLINE,
  YOLKA_SUB,
  YOLKA_BODY,
  YOLKA_CAPS,
} from "@/lib/content";
import { staggerContainer, staggerItem, fadeUp, scaleIn } from "@/lib/motion";

/** Empty Variants — disables animations for reduced-motion users. */
const none: Variants = {};

export function Yolka() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="yolka" dark className="overflow-hidden">
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
              <Kicker className="mb-0">YOLKA</Kicker>
            </motion.div>
          </motion.div>

          {/* ── Two-column layout: text left, media right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: text + capabilities ── */}
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
                  {YOLKA_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {YOLKA_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {YOLKA_BODY}
                </motion.p>
              </div>

              {/* Capabilities checklist */}
              <motion.div variants={container} className="flex flex-col gap-0">
                <motion.p variants={item} className="kicker text-dim mb-4">
                  CAPABILITIES
                </motion.p>
                <motion.ul variants={container} className="flex flex-col gap-3">
                  {YOLKA_CAPS.map((cap) => (
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
            </motion.div>

            {/* ── RIGHT: media placeholder ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={shouldReduce ? none : scaleIn}
            >
              <TacticalPlaceholder
                label="YOLKA — Vehicle-Deployed C-UAS"
                sublabel="RAPID DEPLOY"
                aspectRatio="16/9"
              />
            </motion.div>

          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
