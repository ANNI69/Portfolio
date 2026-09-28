"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, staggerItemX, viewportOnce } from "./variants";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Stagger orchestrator — children must be <StaggerItem>. */
export function StaggerContainer({ children, className, delay = 0 }: ContainerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  axis?: "y" | "x";
}

/** Stagger child — fade/slide in sequence. */
export function StaggerItem({ children, className, axis = "y" }: ItemProps) {
  return (
    <motion.div
      className={className}
      variants={axis === "y" ? staggerItem : staggerItemX}
    >
      {children}
    </motion.div>
  );
}
