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
    <StaggerContainer className="space-y-5">
      {sections.map((g) => (
        <StaggerItem key={g.label}>
          <h3 className="meta-mono mb-2 uppercase tracking-wider">
            {g.label}
          </h3>
          <ul className="flex flex-wrap gap-1.5" aria-label={g.label}>
            {g.items.map((s) => (
              <li
                key={s}
                className="tag transition-all duration-150 hover:scale-[1.03] hover:border-[#39D353] hover:text-[#F5F5F5]"
              >
                {s}
              </li>
            ))}
          </ul>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
