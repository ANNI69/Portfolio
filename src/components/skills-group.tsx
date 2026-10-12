"use client";

import { StaggerContainer, StaggerItem } from "./motion/Stagger";

const GROUPS: Array<{ label: string; items: string[] }> = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "Go"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "Flutter", "TailwindCSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Spring Boot", "Django", "Flask", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    label: "Tools & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "Git", "GitHub"],
  },
];

export default function SkillsGroup({ skills }: { skills?: readonly string[] }) {
  // Show curated groups; fall back to raw list only for skills not covered.
  const grouped = new Set(GROUPS.flatMap((g) => g.items.map((s) => s.toLowerCase())));
  const extra = (skills ?? []).filter(
    (s) => !grouped.has(s.toLowerCase())
  );
  const sections = extra.length > 0 ? [...GROUPS, { label: "More", items: [...extra] }] : GROUPS;
  return (
    <StaggerContainer className="border-t border-[#2B2D30]">
      {sections.map((g) => (
        <StaggerItem key={g.label}>
          <div className="border-t border-[#2B2D30] first:border-t-0">
            <p className="flex items-center gap-2.5 border-b border-[#2B2D30] bg-[#141619] px-5 py-2.5 sm:px-8">
              <span aria-hidden className="inline-block h-[7px] w-[7px] bg-[#26A641]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]">
                {g.label}
              </span>
            </p>
            <ul
              aria-label={g.label}
              className="grid grid-cols-2 border-l border-t border-[#2B2D30] bg-[#121315] sm:grid-cols-3 lg:grid-cols-5"
            >
              {g.items.map((s) => (
                <li
                  key={s}
                  className="border-b border-r border-[#2B2D30] px-4 py-3.5 font-mono text-[12px] tracking-wide text-[#969696] transition-colors duration-150 hover:bg-[#1A1C1F] hover:text-[#F5F5F5]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
