"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";

interface EducationItem {
  school: string;
  href?: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
}

export default function EducationList({
  items,
}: {
  items: readonly EducationItem[];
}) {
  return (
    <StaggerContainer className="space-y-3">
      {items.map((e) => (
        <StaggerItem key={e.school}>
          <div className="flat-card flex items-center gap-4 p-4">
            {e.logoUrl && (
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-[#262A2D] bg-[#08090A]">
                <Image
                  src={e.logoUrl}
                  alt={`${e.school} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-semibold text-[#F5F5F5]">
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#39D353]"
                  >
                    {e.school}
                  </a>
                ) : (
                  e.school
                )}
              </h3>
              <p className="truncate text-[13.5px] text-[#A3A7AA]">{e.degree}</p>
            </div>
            <p className="meta-mono shrink-0">
              {e.start} — {e.end}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
