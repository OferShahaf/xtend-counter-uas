"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Container,
  Kicker,
  CTAButton,
  HUDFrame,
} from "@/components/ui";
import {
  HERO_HEADLINE,
  HERO_SUB,
  HERO_BODY,
  HERO_ECOSYSTEM_SUB,
} from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

/** Empty Variants — used to disable animations for reduced-motion users. */
const none: Variants = {};

function ScrollCue() {
  const shouldReduce = useReducedMotion();
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
      <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-dim">
        Scroll
      </span>
      <motion.div
        animate={shouldReduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-0.5"
        aria-hidden="true"
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60"
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30"
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;
  const headline = shouldReduce ? none : fadeUp;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center grain-overlay overflow-hidden"
    >
      {/* Cinematic dark placeholder background */}
      <div className="absolute inset-0 bg-black" aria-hidden="true">
        {/* Subtle warm-center radial glow — simulates illuminated scene */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(80,60,20,0.18) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* Dark gradient scrim for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-center min-h-screen py-24 md:py-32">
        <HUDFrame size="lg" className="w-full max-w-4xl mx-auto px-8 py-12 md:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Kicker */}
            <motion.div variants={item}>
              <Kicker>Counter-UAS Ecosystem</Kicker>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={headline}
              className="display-heading font-display text-gold uppercase"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", lineHeight: 1.0 }}
            >
              {HERO_HEADLINE}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="font-display text-muted uppercase tracking-widest"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            >
              {HERO_SUB}
            </motion.p>

            {/* Body */}
            <motion.p
              variants={item}
              className="text-[var(--color-text-primary)] font-body"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", maxWidth: "38ch" }}
            >
              {HERO_BODY}
            </motion.p>

            {/* Ecosystem sub */}
            <motion.p
              variants={item}
              className="text-muted font-body text-sm md:text-base leading-relaxed"
              style={{ maxWidth: "52ch" }}
            >
              {HERO_ECOSYSTEM_SUB}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <CTAButton href="#contact" variant="primary">
                Request Demonstration
              </CTAButton>
              <CTAButton href="#download" variant="secondary">
                Download Capability Brief
              </CTAButton>
            </motion.div>
          </motion.div>
        </HUDFrame>
      </Container>

      {/* Animated scroll cue */}
      <ScrollCue />
    </section>
  );
}
