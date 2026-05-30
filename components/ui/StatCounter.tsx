"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCounter({ value, label, className = "" }: StatCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="display-heading text-4xl md:text-5xl text-gold"
      >
        {value}
      </motion.div>
      <div className="text-xs text-dim uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}
