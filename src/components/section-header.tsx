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

/** Section header with label → title → intro stagger on viewport entry. */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <StaggerContainer className={cn("space-y-3", className)}>
      <StaggerItem>
        <p className="section-label">
          <span className="text-[#6F7579]">{index}</span>
          <span aria-hidden className="text-[#353A3E]">
            /
          </span>
          {label}
        </p>
      </StaggerItem>
      <StaggerItem>
        <h2 className="text-[30px] font-bold leading-tight tracking-tight text-[#F5F5F5] sm:text-[34px]">
          {title}
        </h2>
      </StaggerItem>
      {intro && (
        <StaggerItem>
          <p className="max-w-[640px] text-[15px] leading-relaxed text-[#A3A7AA]">
            {intro}
          </p>
        </StaggerItem>
      )}
    </StaggerContainer>
  );
}
