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
    <StaggerContainer className="border-t border-[#2B2D30]">
      {items.map((e) => (
        <StaggerItem key={e.school}>
          <div className="grid grid-cols-1 gap-3 border-t border-[#2B2D30] px-5 py-6 first:border-t-0 sm:px-8 md:grid-cols-12 md:gap-6">
            <p className="meta-mono md:col-span-4">
              {e.start} — {e.end}
            </p>
            <div className="flex items-start gap-4 md:col-span-8">
              {e.logoUrl && (
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border border-[#2B2D30] bg-[#101113]">
                  <Image
                    src={e.logoUrl}
                    alt={`${e.school} logo`}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </span>
              )}
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold tracking-tight text-[#F5F5F5]">
                  {e.href ? (
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#39D353]"
                    >
                      {e.school}
                    </a>
                  ) : (
                    e.school
                  )}
                </h3>
                <p className="mt-0.5 text-[14px] text-[#969696]">{e.degree}</p>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
