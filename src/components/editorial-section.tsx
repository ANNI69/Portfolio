"use client";

import { Reveal } from "./motion/Reveal";

interface EditorialSectionProps {
  id: string;
  index: string;
  label: string;
  /** Right-aligned microcopy in the label rule, e.g. a count or hint. */
  meta?: string;
  title?: string;
  intro?: string;
  labelledBy?: string;
  children: React.ReactNode;
}

/**
 * ArtCraft-style editorial section: a top rule carrying the numbered
 * label, an optional title block, then the body on the shared grid.
 * Borders connect with neighbours instead of floating as cards.
 */
export default function EditorialSection({
  id,
  index,
  label,
  meta,
  title,
  intro,
  labelledBy,
  children,
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="scroll-mt-20 border-t border-[#2B2D30]"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <p className="ed-label">
          <span className="text-[#6F7579]">{index}</span>
          <span aria-hidden className="mx-2 text-[#3A3D41]">
            /
          </span>
          <span className="text-[#969696]">{label}</span>
        </p>
        {meta && (
          <p className="ed-label hidden sm:block" aria-hidden>
            {meta}
          </p>
        )}
      </div>
      {(title || intro) && (
        <div className="border-t border-[#2B2D30] px-5 py-8 sm:px-8 sm:py-10">
          <Reveal>
            {title && (
              <h2 className="max-w-[720px] font-display text-[30px] font-bold leading-[1.1] tracking-tight text-[#F5F5F5] sm:text-[40px]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-[#969696]">
                {intro}
              </p>
            )}
          </Reveal>
        </div>
      )}
      {children}
    </section>
  );
}
