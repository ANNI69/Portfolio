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
      className="grid grid-cols-1 gap-2 border-t border-[#2B2D30] px-5 py-6 first:border-t-0 sm:px-8 md:grid-cols-12 md:gap-6"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.08, 0.4),
      }}
    >
      <p className="meta-mono md:col-span-4">{dates}</p>
      <div className="md:col-span-8">
        <h3 className="text-[16px] font-semibold tracking-tight text-[#F5F5F5]">
          {title}
        </h3>
        {location && (
          <p className="meta-mono mt-0.5">{location}</p>
        )}
        <p className="mt-1.5 max-w-[640px] text-[14px] leading-relaxed text-[#969696]">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
