"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeIn, fadeUp, scaleIn, viewportOnce } from "./variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li";
}

/**
 * Viewport-triggered fade-up reveal. Fires once, static afterwards.
 * Reduced motion is handled globally via MotionConfig (transforms are
 * skipped, opacity fades remain) — no render branching here, so SSR
 * and hydration output always match.
 */
export function Reveal({ children, className, delay = 0, y = 30 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className, delay = 0 }: Omit<RevealProps, "y" | "as">) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, className, delay = 0 }: Omit<RevealProps, "y" | "as">) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0 }: Omit<RevealProps, "y" | "as">) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
