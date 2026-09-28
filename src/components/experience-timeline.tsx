"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportOnce } from "./motion/variants";

interface ExperienceItem {
  company: string;
  href?: string;
  title: string;
  location?: string;
  logoUrl?: string;
  start: string;
  end?: string;
  description?: string;
  badges?: readonly string[];
  active?: boolean;
}

/**
 * Timeline draws top→bottom on entry, then nodes appear sequentially.
 * Transform/opacity only; static when reduced motion is preferred.
 */
export default function ExperienceTimeline({
  items,
}: {
  items: readonly ExperienceItem[];
}) {
  return (
    <div className="relative">
      {/* track */}
      <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-[#262A2D]" />
      {/* draw line */}
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 w-px origin-top bg-[#26A641]"
        style={{ height: "100%" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <ol>
        {items.map((job, i) => {
          const period = `${job.start} — ${job.end ?? "Present"}`;
          const isActive = !job.end || job.end.toLowerCase() === "present";
          const inner = (
            <>
              <span
                aria-hidden
                className={
                  isActive
                    ? "absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#08090A] bg-[#39D353]"
                    : "absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-[#353A3E] bg-[#08090A]"
                }
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="meta-mono">{period}</p>
                {job.location && (
                  <p className="meta-mono hidden sm:block">{job.location}</p>
                )}
              </div>
              <div className="mt-1 flex items-center gap-3">
                {job.logoUrl && (
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#262A2D] bg-[#0D0F10]">
                    <Image
                      src={job.logoUrl}
                      alt=""
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </span>
                )}
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug text-[#F5F5F5]">
                    {job.href ? (
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#39D353]"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="text-[14px] text-[#A3A7AA]">{job.title}</p>
                </div>
              </div>
              {job.description && (
                <p className="mt-2 max-w-[640px] text-[14.5px] leading-relaxed text-[#A3A7AA]">
                  {job.description}
                </p>
              )}
              {job.badges && job.badges.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {job.badges.map((b) => (
                    <span key={b} className="tag">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </>
          );
          return (
            <motion.li
              key={job.company}
              className="relative pb-10 pl-8 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25 + i * 0.14,
              }}
            >
              {inner}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
