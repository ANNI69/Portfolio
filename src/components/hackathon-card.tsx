"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "./motion/variants";

interface Props {
  title: string;
  description: string;
  dates: string;
  location?: string;
  year?: string;
  index?: number;
}

export function HackathonItem({ title, description, dates, location, index = 0 }: Props) {
  return (
    <motion.li
      className="relative pb-8 pl-8 last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.08, 0.4),
      }}
    >
      <span
        aria-hidden
        className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-[#353A3E] bg-[#08090A]"
      />
      <p className="meta-mono">{dates}</p>
      <h3 className="mt-0.5 text-[15.5px] font-semibold text-[#F5F5F5]">
        {title}
      </h3>
      {location && (
        <p className="meta-mono mt-0.5">{location}</p>
      )}
      <p className="mt-1.5 max-w-[640px] text-[14px] leading-relaxed text-[#A3A7AA]">
        {description}
      </p>
    </motion.li>
  );
}
