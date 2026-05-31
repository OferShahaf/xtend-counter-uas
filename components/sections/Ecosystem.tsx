"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Section,
  Container,
  Kicker,
  GoldDivider,
} from "@/components/ui";
import {
  ECOSYSTEM_HEADLINE,
  ECOSYSTEM_SUB,
} from "@/lib/content";
import { drawPath, staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

/** No-op variants — shows everything immediately for reduced-motion users. */
const none: Variants = {};
const noneVisible: Variants = { hidden: { opacity: 1 }, visible: { opacity: 1 } };

// ─── Diagram layout constants ──────────────────────────────────────────────
const VIEW_W = 500;
const VIEW_H = 300;

const CENTER = { x: 250, y: 150 };

const NODES = [
  {
    id: "cyber",
    x: 80,
    y: 75,
    label: "CYBER DEFEAT",
    sub: "Cyber Defeat",
    color: "var(--color-gold)",
    borderColor: "var(--color-border-gold)",
    tagColor: "var(--color-gold-bright)",
  },
  {
    id: "net",
    x: 420,
    y: 75,
    label: "NET CAPTURE",
    sub: "X-NET · DefendAir · Interceptor",
    color: "var(--color-gold)",
    borderColor: "var(--color-border-gold)",
    tagColor: "var(--color-gold-bright)",
  },
  {
    id: "kinetic",
    x: 250,
    y: 260,
    label: "KINETIC",
    sub: "AI Fast Interceptor",
    color: "var(--color-gold)",
    borderColor: "var(--color-border-gold)",
    tagColor: "var(--color-gold-bright)",
  },
] as const;

// Node box half-dimensions
const NODE_W = 80;
const NODE_H = 28;
// Central node diamond half-size
const CENTER_R = 34;

/** Build an SVG path string from center edge to outer node edge. */
function connectorPath(node: (typeof NODES)[number]): string {
  // We draw straight lines from center to node center;
  // SVG clips won't hide them — we keep it simple M…L
  return `M ${CENTER.x},${CENTER.y} L ${node.x},${node.y}`;
}

// ─── Sub-components ────────────────────────────────────────────────────────

const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function CentralNode({ reduce }: { reduce: boolean }) {
  const d = CENTER_R;
  // Diamond path around CENTER
  const diamond = `M ${CENTER.x},${CENTER.y - d} L ${CENTER.x + d},${CENTER.y} L ${CENTER.x},${CENTER.y + d} L ${CENTER.x - d},${CENTER.y} Z`;

  return (
    <motion.g
      variants={reduce ? noneVisible : pulseVariants}
      initial={reduce ? "hidden" : "initial"}
      animate={reduce ? "visible" : "animate"}
    >
      {/* Glow ring */}
      <path
        d={diamond}
        fill="rgba(192,57,43,0.12)"
        stroke="var(--color-threat-red)"
        strokeWidth="1"
        opacity="0.4"
        transform={`scale(1.22) translate(${CENTER.x * (1 - 1 / 1.22)},${CENTER.y * (1 - 1 / 1.22)})`}
        style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
      />
      {/* Main diamond */}
      <path
        d={diamond}
        fill="rgba(192,57,43,0.18)"
        stroke="var(--color-threat-red)"
        strokeWidth="1.5"
      />
      {/* Label */}
      <text
        x={CENTER.x}
        y={CENTER.y - 6}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9"
        fontFamily="var(--font-mono, monospace)"
        fill="var(--color-threat-red)"
        letterSpacing="0.08em"
        fontWeight="700"
      >
        DRONE
      </text>
      <text
        x={CENTER.x}
        y={CENTER.y + 7}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9"
        fontFamily="var(--font-mono, monospace)"
        fill="var(--color-threat-red)"
        letterSpacing="0.08em"
        fontWeight="700"
      >
        THREAT
      </text>
    </motion.g>
  );
}

interface DefeatNodeProps {
  node: (typeof NODES)[number];
  reduce: boolean;
}

function DefeatNode({ node, reduce }: DefeatNodeProps) {
  return (
    <motion.g variants={reduce ? noneVisible : staggerItem}>
      {/* Box background */}
      <rect
        x={node.x - NODE_W}
        y={node.y - NODE_H}
        width={NODE_W * 2}
        height={NODE_H * 2}
        rx="2"
        fill="var(--color-surface-mid)"
        stroke={node.borderColor}
        strokeWidth="1"
      />
      {/* Top accent line */}
      <line
        x1={node.x - NODE_W}
        y1={node.y - NODE_H}
        x2={node.x - NODE_W + 24}
        y2={node.y - NODE_H}
        stroke={node.tagColor}
        strokeWidth="1.5"
      />
      {/* Main label */}
      <text
        x={node.x}
        y={node.y - 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="9"
        fontFamily="var(--font-mono, monospace)"
        fill={node.color}
        letterSpacing="0.1em"
        fontWeight="700"
      >
        {node.label}
      </text>
      {/* Sub label */}
      <text
        x={node.x}
        y={node.y + 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="7.5"
        fontFamily="var(--font-mono, monospace)"
        fill="var(--color-text-dim)"
        letterSpacing="0.05em"
      >
        {node.sub}
      </text>
    </motion.g>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

export function Ecosystem() {
  const shouldReduce = useReducedMotion();
  const container = shouldReduce ? none : staggerContainer;
  const item = shouldReduce ? none : staggerItem;

  return (
    <>
      <GoldDivider className="my-0" />
      <Section id="ecosystem" dark className="overflow-hidden">
        <Container>
          {/* ── Header block ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.div variants={item}>
              <Kicker>THE XTEND ECOSYSTEM</Kicker>
            </motion.div>

            <motion.h2
              variants={shouldReduce ? none : fadeUp}
              className="display-heading font-display text-[var(--color-text-primary)] uppercase"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              {ECOSYSTEM_HEADLINE}
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted text-base md:text-lg leading-relaxed"
              style={{ maxWidth: "52ch" }}
            >
              {ECOSYSTEM_SUB}
            </motion.p>
          </motion.div>

          {/* ── Architecture diagram ── */}
          <div className="mt-16 md:mt-20 w-full">
            <motion.svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-2xl mx-auto block"
              style={{ height: "auto", maxHeight: "400px" }}
              aria-label="XTEND Counter-UAS ecosystem architecture diagram"
              initial="hidden"
              {...(shouldReduce
                ? { animate: "visible" }
                : { whileInView: "visible", viewport: { once: true, margin: "-60px" } }
              )}
              variants={container}
            >
              {/* ── Background grid lines (subtle) ── */}
              <defs>
                <pattern
                  id="eco-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width={VIEW_W} height={VIEW_H} fill="url(#eco-grid)" />

              {/* ── Connector lines (animated path draw) ── */}
              {NODES.map((node) => (
                <motion.path
                  key={`line-${node.id}`}
                  d={connectorPath(node)}
                  stroke="var(--color-border-gold)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 3"
                  variants={shouldReduce ? noneVisible : drawPath}
                />
              ))}

              {/* ── Defeat option nodes (staggered reveal) ── */}
              {NODES.map((node) => (
                <DefeatNode key={node.id} node={node} reduce={!!shouldReduce} />
              ))}

              {/* ── Central threat node (pulsing) ── */}
              <CentralNode reduce={!!shouldReduce} />
            </motion.svg>

            {/* ── Legend below diagram ── */}
            <motion.div
              initial="hidden"
              {...(shouldReduce
                ? { animate: "visible" }
                : { whileInView: "visible", viewport: { once: true, margin: "-40px" } }
              )}
              variants={container}
              className="mt-8 flex flex-wrap justify-center gap-6"
            >
              <motion.div
                variants={item}
                className="flex items-center gap-2"
              >
                <span
                  className="block w-3 h-3 border border-[var(--color-threat-red)]"
                  style={{
                    background: "rgba(192,57,43,0.18)",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
                <span className="font-mono text-xs text-[var(--color-text-dim)] tracking-widest uppercase">
                  Threat
                </span>
              </motion.div>
              {NODES.map((node) => (
                <motion.div
                  key={`legend-${node.id}`}
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span
                    className="block w-3 h-[2px]"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <span className="font-mono text-xs text-[var(--color-text-dim)] tracking-widest uppercase">
                    {node.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>
      <GoldDivider className="my-0" />
    </>
  );
}
