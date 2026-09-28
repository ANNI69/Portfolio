"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { viewportOnce } from "./motion/variants";

type Day = { date: string; count: number; level: number };
type ApiResponse = {
  total?: Record<string, number>;
  contributions?: Array<{ date: string; count: number; level: number }>;
};

const USERNAME = "ANNI69";
const DAY_MS = 86_400_000;
// Full-year window like GitHub — a half-year grid is what left the card empty.
const WEEKS = 53;

// Fixed UTC anchor so the server prerender and the client's first render
// produce byte-identical markup. Real "today" weeks are computed
// client-side in an effect after hydration (see below).
const FALLBACK_ANCHOR_MS = Date.UTC(2026, 0, 1);

// Monochrome scale (empty → white), matching the reference style.
const LEVEL_BG = ["#1C1F21", "#2E3235", "#565C60", "#8E9498", "#FFFFFF"];

// Row labels for Sun..Sat week columns.
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function levelFor(count: number): number {
  return count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4;
}

function isoDay(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

// Deterministic per-date pseudo activity (fallback only).
function seedCount(ms: number): number {
  const dt = new Date(ms);
  const seed =
    (dt.getUTCDate() * 7 + dt.getUTCMonth() * 13 + dt.getUTCFullYear()) % 10;
  return seed < 3 ? 0 : seed < 5 ? seed - 2 : seed;
}

interface DayMap {
  get(date: string): Day | undefined;
}

/**
 * Build Sun..Sat-aligned week columns ending at the anchor day.
 * UTC arithmetic only — identical output on server and client,
 * regardless of locale or build time.
 */
function buildWeeks(anchorMs: number, lookup?: DayMap): Day[][] {
  const endDay = Math.floor(anchorMs / DAY_MS);
  const endSunday = endDay - new Date(endDay * DAY_MS).getUTCDay();
  const startSunday = endSunday - (WEEKS - 1) * 7;
  const cols: Day[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const col: Day[] = [];
    for (let d = 0; d < 7; d++) {
      const ms = (startSunday + w * 7 + d) * DAY_MS;
      const date = isoDay(ms);
      const found = lookup?.get(date);
      if (found) {
        col.push(found);
      } else if (lookup) {
        // Live mode: the API omits days without commits — genuinely empty.
        col.push({ date, count: 0, level: 0 });
      } else {
        const count = seedCount(ms);
        col.push({ date, count, level: levelFor(count) });
      }
    }
    cols.push(col);
  }
  return cols;
}

// Deterministic flat fallback so the section never looks empty offline.
function fallbackWeeks(): Day[][] {
  return buildWeeks(FALLBACK_ANCHOR_MS);
}

function currentStreak(weeks: Day[][]): number {
  const flat = weeks.flat();
  let streak = 0;
  for (let i = flat.length - 1; i >= 0; i--) {
    if (flat[i].count > 0) streak++;
    else break;
  }
  return streak;
}

export default function ContributionGraph() {
  const [weeks, setWeeks] = useState<Day[][]>(() => fallbackWeeks());
  const [total, setTotal] = useState<number | null>(null);
  const [live, setLive] = useState(false);
  const [hover, setHover] = useState<Day | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Align the grid to the real current day (post-hydration only,
    // so the server markup and first client render always match).
    setWeeks(buildWeeks(Date.now()));
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: undefined } as RequestInit
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((json: ApiResponse | null) => {
        if (!json || cancelled) return;
        const list = json.contributions ?? [];
        if (list.length === 0) return;
        const byDate = new Map(list.map((c) => [c.date, c]));
        const dates = Array.from(byDate.keys()).sort();
        const last = new Date(dates[dates.length - 1] + "T00:00:00Z").getTime();
        setWeeks(buildWeeks(last, byDate));
        const t = json.total
          ? Object.values(json.total).reduce((a, b) => a + b, 0)
          : list.reduce((a, b) => a + b.count, 0);
        setTotal(t);
        setLive(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const monthLabels = useMemo(() => {
    return weeks.map((col, i) => {
      const m = new Date(col[0].date + "T00:00:00Z").toLocaleString("en", {
        month: "short",
        timeZone: "UTC",
      });
      if (i === 0) return m;
      const pm = new Date(weeks[i - 1][0].date + "T00:00:00Z").toLocaleString(
        "en",
        { month: "short", timeZone: "UTC" }
      );
      return m !== pm ? m : "";
    });
  }, [weeks]);

  const fallbackTotal = useMemo(
    () => weeks.flat().reduce((a, d) => a + d.count, 0),
    [weeks]
  );
  const streak = useMemo(() => currentStreak(weeks), [weeks]);

  return (
    <section aria-labelledby="github-heading">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2
            id="github-heading"
            className="text-[16px] font-semibold text-[#F5F5F5]"
          >
            GitHub Contributions
          </h2>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-1 inline-block font-mono text-xs text-[#A3A7AA] hover:text-[#F5F5F5]"
          >
            View profile →
          </a>
        </div>
        <p className="meta-mono shrink-0 pt-1 text-right">
          {total !== null ? `${total} contributions` : `${fallbackTotal} contributions`}
          {!live && (
            <span className="ml-2 rounded border border-[#262A2D] px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
              offline preview
            </span>
          )}
        </p>
      </div>

      <div
        className="overflow-x-auto pb-1"
        role="img"
        aria-label="GitHub contribution graph: darker squares mean fewer contributions, white means more."
      >
        <div className="min-w-[600px]">
          <div className="mb-[3px] grid auto-cols-fr grid-flow-col gap-[2px]" aria-hidden>
            <span aria-hidden />
            {monthLabels.map((m, i) => (
              <span
                key={i}
                className="overflow-visible whitespace-nowrap font-mono text-[9px] leading-none text-[#6F7579]"
              >
                {m}
              </span>
            ))}
          </div>
          {/* Single fluid grid: day-label column + week columns share
              identical 1fr tracks, so cells stretch to fill the card
              exactly like GitHub — no blank space on the right. */}
          <div className="grid auto-cols-fr grid-flow-col grid-rows-7 gap-[2px]">
            {DAY_LABELS.map((label, i) => (
              <span
                key={`day-${i}`}
                aria-hidden
                className="flex items-center overflow-hidden font-mono text-[9px] leading-none text-[#6F7579]"
              >
                {label}
              </span>
            ))}
            {weeks.map((week, wi) =>
              week.map((day) => {
                const shared = {
                  type: "button" as const,
                  title: `${day.count} contributions on ${day.date}`,
                  "aria-label": `${day.count} contributions on ${day.date}`,
                  onMouseEnter: () => setHover(day),
                  onFocus: () => setHover(day),
                  onMouseLeave: () => setHover(null),
                  onBlur: () => setHover(null),
                  className:
                    "aspect-square w-full rounded-[2px] hover:opacity-70",
                  style: {
                    backgroundColor: LEVEL_BG[day.level] ?? LEVEL_BG[0],
                  },
                };
                // Entrance only: per-column staggered fade/scale, then static.
                // (Reduced motion is handled by MotionConfig — same tree,
                // transforms auto-skipped — so hydration always matches.)
                return (
                  <motion.button
                    key={day.date}
                    {...shared}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                      delay: Math.min(wi * 0.015, 0.5),
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1" aria-hidden>
          <span className="meta-mono mr-1">Less</span>
          {LEVEL_BG.map((c) => (
            <span
              key={c}
              className="h-[12px] w-[12px] rounded-[2px]"
              style={{ backgroundColor: c }}
            />
          ))}
          <span className="meta-mono ml-1">More</span>
        </div>
        <p className="meta-mono" aria-live="polite">
          {hover
            ? `${hover.count} contribution${hover.count === 1 ? "" : "s"} — ${hover.date}`
            : streak > 0
              ? `${streak} day streak`
              : "No streak"}
        </p>
      </div>
    </section>
  );
}
