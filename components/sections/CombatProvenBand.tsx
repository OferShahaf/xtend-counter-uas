"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Container,
  Kicker,
  GoldDivider,
  MediaFrame,
} from "@/components/ui";
import { TAGLINE } from "@/lib/content";
import { ASSETS } from "@/lib/assets";
import { staggerContainer, staggerItem, scaleIn } from "@/lib/motion";

/** Empty Variants — disables animations for reduced-motion users. */
const none: Variants = {};

export function CombatProvenBand() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;
  const scale = shouldReduce ? none : scaleIn;

  return (
    <>
      <GoldDivider className="my-0" />
      <section
        id="combat-proven"
        className="relative bg-surface-deep py-16 overflow-hidden"
        aria-labelledby="combat-proven-heading"
      >
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
          >
            {/* Text column */}
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <motion.div variants={item}>
                <Kicker>Combat Proven</Kicker>
              </motion.div>

              <motion.h2
                id="combat-proven-heading"
                variants={item}
                className="display-heading font-display text-[var(--color-text-primary)] uppercase"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  lineHeight: 1.05,
                }}
              >
                {TAGLINE}
              </motion.h2>

              <motion.p
                variants={item}
                className="text-muted text-sm md:text-base leading-relaxed"
                style={{ maxWidth: "42ch" }}
              >
                Validated in live operations. XTEND systems have been deployed
                by military forces, tested under real-world conditions, and
                proven against the full spectrum of modern drone threats.
              </motion.p>
            </div>

            {/* Image thumbnails */}
            <motion.div
              variants={item}
              className="flex flex-row gap-4 flex-shrink-0"
            >
              <motion.div variants={scale} className="w-40 md:w-52">
                <MediaFrame
                  asset={ASSETS.combat_proven_1}
                  showHUD
                  aspectRatio="4/3"
                  className="w-full"
                />
              </motion.div>
              <motion.div variants={scale} className="w-40 md:w-52">
                <MediaFrame
                  asset={ASSETS.combat_proven_2}
                  showHUD
                  aspectRatio="4/3"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      <GoldDivider className="my-0" />
    </>
  );
}
