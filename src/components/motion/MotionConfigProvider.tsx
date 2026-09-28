"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Single source of truth for reduced-motion support.
 * `reducedMotion="user"` makes Framer Motion skip transform/layout
 * animations for users who prefer reduced motion — without changing
 * the rendered tree, so server and client markup always match.
 * (Never branch render output on useReducedMotion: it is null on the
 * server but resolved on the client, which breaks hydration.)
 */
export default function MotionConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
