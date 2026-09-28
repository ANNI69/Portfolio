"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  className?: string;
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while deleting */
  deleteSpeed?: number;
  /** ms to hold a completed phrase */
  pause?: number;
  /** "loop" cycles phrases; "once" types the first phrase and stays */
  mode?: "loop" | "once";
  label?: string;
}

/**
 * Premium typing animation with blinking green cursor.
 * Decorative loop is aria-hidden; screen readers get the full phrase list.
 * Fixed min-height reserves one line so typing never shifts layout.
 */
export default function TypingText({
  phrases,
  className,
  typeSpeed = 75,
  deleteSpeed = 45,
  pause = 1500,
  mode = "loop",
  label = "Roles",
}: TypingTextProps) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] ?? "");
      return;
    }
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const run = async () => {
      if (mode === "once") {
        const target = phrases[0] ?? "";
        for (let i = 1; i <= target.length; i++) {
          if (cancelled) return;
          setText(target.slice(0, i));
          await new Promise((r) => {
            timeout = setTimeout(r, typeSpeed);
          });
        }
        if (!cancelled) return;
        return;
      }
      let idx = 0;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const phrase = phrases[idx % phrases.length];
        for (let i = 1; i <= phrase.length; i++) {
          if (cancelled) return;
          setText(phrase.slice(0, i));
          await new Promise((r) => {
            timeout = setTimeout(r, typeSpeed);
          });
        }
        await new Promise((r) => {
          timeout = setTimeout(r, pause);
        });
        if (cancelled) return;
        for (let i = phrase.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setText(phrase.slice(0, i));
          await new Promise((r) => {
            timeout = setTimeout(r, deleteSpeed);
          });
        }
        if (cancelled) return;
        idx++;
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
    // phrases is a static literal at call sites
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <span className={className}>
      <span className="sr-only">
        {label}: {phrases.join(", ")}
      </span>
      <span aria-hidden className="inline-flex min-h-[1.5em] items-baseline">
        <span>{text}</span>
        <span aria-hidden className="motion-cursor text-[#39D353]">
          ▌
        </span>
      </span>
    </span>
  );
}
