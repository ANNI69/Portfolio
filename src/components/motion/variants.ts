import type { Variants } from "framer-motion";
import { motionDuration, motionEase, motionStagger } from "./tokens";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.medium, ease: motionEase.standard },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDuration.normal, ease: motionEase.standard },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionDuration.medium, ease: motionEase.standard },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: motionStagger.normal },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.medium, ease: motionEase.standard },
  },
};

export const staggerItemX: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: motionDuration.normal, ease: motionEase.standard },
  },
};

export const viewportOnce = { once: true, amount: 0.15 } as const;
