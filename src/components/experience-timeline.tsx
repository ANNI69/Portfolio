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
 * Editorial work rows: dates + location metadata on the left,
 * company and description on the right, separated by hairline rules.
 * All content, links and order preserved.
 */
export default function ExperienceTimeline({
  items,
}: {
  items: readonly ExperienceItem[];
}) {
  return (
    <ol className="border-t border-[#2B2D30]">
      {items.map((job, i) => {
        const period = `${job.start} — ${job.end ?? "Present"}`;
        const isActive = !job.end || job.end.toLowerCase() === "present";
        return (
          <motion.li
            key={job.company}
            className="grid grid-cols-1 gap-4 border-t border-[#2B2D30] px-5 py-7 first:border-t-0 sm:px-8 md:grid-cols-12 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(i * 0.1, 0.3),
            }}
          >
            <div className="md:col-span-4">
              <p className="meta-mono">{period}</p>
              {job.location && (
                <p className="meta-mono mt-1">{job.location}</p>
              )}
              {isActive && (
                <p className="mt-2 inline-block border border-[#0E4429] bg-[#0E4429]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#39D353]">
                  Current
                </p>
              )}
            </div>
            <div className="md:col-span-8">
              <div className="flex items-start gap-4">
                {job.logoUrl && (
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border border-[#2B2D30] bg-[#101113]">
                    <Image
                      src={job.logoUrl}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-[#F5F5F5]">
                    {job.href ? (
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#39D353]"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[#969696]">
                    {job.title}
                  </p>
                </div>
              </div>
              {job.description && (
                <p className="mt-3 max-w-[640px] text-[14.5px] leading-relaxed text-[#969696]">
                  {job.description}
                </p>
              )}
              {job.badges && job.badges.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.badges.map((b) => (
                    <span key={b} className="tag">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
