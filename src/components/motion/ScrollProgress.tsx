"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** 2px scroll progress line pinned to the viewport top. Always rendered
    (identical SSR/client output); transform-only and scroll-driven. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[#26A641]"
      style={{ scaleX }}
    />
  );
}
