"use client";

import ScanLine from "./ScanLine";

/**
 * Layered hero background (all decorative, aria-hidden):
 * 1. black base (section bg)  2. faint technical grid (slow drift)
 * 3. outline geometry (very slow float)  4. occasional green scan
 * Hidden extras on mobile to keep motion cheap.
 */
export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layer 2 — technical grid */}
      <div className="motion-grid absolute inset-0 opacity-[0.5]" />
      {/* Layer 3 — outline geometry */}
      <div className="absolute -right-16 top-10 hidden h-56 w-56 rounded-full border border-[#262A2D] opacity-60 motion-float-slow md:block" />
      <div className="absolute -left-10 bottom-6 hidden h-36 w-36 border border-[#262A2D] opacity-50 motion-float-slower md:block" />
      <div className="absolute right-40 bottom-16 hidden h-10 w-10 rotate-45 border border-[#262A2D] opacity-50 motion-float-slow lg:block" />
      {/* Layer 4 — occasional green scan */}
      <ScanLine duration={7} className="opacity-60" />
    </div>
  );
}
