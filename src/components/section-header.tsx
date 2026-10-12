"use client";

import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  intro?: string;
  className?: string;
}

/** Editorial section header: numbered mono label, large title, intro. */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <StaggerContainer className={cn("space-y-4", className)}>
      <StaggerItem>
        <p className="ed-label">
          <span className="text-[#6F7579]">{index}</span>
          <span aria-hidden className="mx-2 text-[#3A3D41]">
            /
          </span>
          <span className="text-[#969696]">{label}</span>
        </p>
      </StaggerItem>
      <StaggerItem>
        <h2 className="max-w-[720px] font-display text-[32px] font-bold leading-[1.1] tracking-tight text-[#F5F5F5] sm:text-[40px]">
          {title}
        </h2>
      </StaggerItem>
      {intro && (
        <StaggerItem>
          <p className="max-w-[640px] text-[15px] leading-relaxed text-[#969696]">
            {intro}
          </p>
        </StaggerItem>
      )}
    </StaggerContainer>
  );
}
