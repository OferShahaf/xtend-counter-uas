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
  DEFENDAIR_HEADLINE,
  DEFENDAIR_SUB,
  DEFENDAIR_BODY,
  DEFENDAIR_CAPS,
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
          {/* ── Pre-heading kicker row ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <motion.div variants={item}>
              <Kicker className="mb-0">DEFENDAIR PERSONAL</Kicker>
            </motion.div>
            <motion.div variants={item}>
              <Tag variant="gold">SOLDIER-CARRIED</Tag>
            </motion.div>
          </motion.div>

          {/* ── Two-column layout: media RIGHT, text LEFT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── LEFT: text, capabilities, specs ── */}
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
                  {DEFENDAIR_HEADLINE}
                </motion.h2>

                <motion.p
                  variants={item}
                  className="font-mono text-gold tracking-widest text-sm uppercase"
                >
                  {DEFENDAIR_SUB}
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-muted text-base md:text-lg leading-relaxed"
                  style={{ maxWidth: "48ch" }}
                >
                  {DEFENDAIR_BODY}
                </motion.p>
              </div>

              {/* Capabilities checklist */}
              <motion.div variants={container} className="flex flex-col gap-0">
                <motion.p variants={item} className="kicker text-dim mb-4">
                  CAPABILITIES
                </motion.p>
                <motion.ul variants={container} className="flex flex-col gap-3">
                  {DEFENDAIR_CAPS.map((cap) => (
                    <motion.li
                      key={cap}
                      variants={item}
                      className="flex items-center gap-3"
                    >
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
                <SpecGrid specs={DEFENDAIR_SPECS} />
                <p className="font-mono text-[0.6rem] text-dim mt-2 tracking-widest">
                  † Performance figures are indicative; subject to operational conditions.
                </p>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: media ── */}
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
              />
            </motion.div>
          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
