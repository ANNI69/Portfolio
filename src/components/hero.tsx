"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/data/resume";
import PulseDot from "./motion/PulseDot";
import TypingText from "./motion/TypingText";

const ROLES = [
  "Software Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const RESUME_URL =
  DATA.navbar.find((n) => n.label === "Resume")?.href ?? "#";

function Enter({
  children,
  delay,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Editorial opening spread: numbered label rule, large left-aligned
 * headline, portrait cell on the grid, and a bordered metadata strip.
 * Entrance + typing preserved; decorative layers removed.
 */
export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-name">
      <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <p className="ed-label">
          <span className="text-[#6F7579]">01</span>
          <span aria-hidden className="mx-2 text-[#3A3D41]">
            /
          </span>
          <span className="text-[#969696]">Introduction</span>
        </p>
        <p className="ed-label hidden items-center gap-2 sm:flex" aria-hidden={false}>
          <PulseDot />
          <span className="sr-only">Status: </span>
          Open to interesting engineering work
        </p>
      </div>

      <div className="grid grid-cols-1 border-t border-[#2B2D30] lg:grid-cols-12">
        <div className="px-5 py-10 sm:px-8 sm:py-14 lg:col-span-8">
          <Enter delay={0.3} y={16}>
            <p className="meta-mono uppercase tracking-widest">
              Hi, I&apos;m
            </p>
          </Enter>

          <h1
            id="hero-name"
            className="mt-2 font-display text-[clamp(2.75rem,7vw,4.75rem)] font-bold leading-[1.02] tracking-tight"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            >
              ANIRUDDH
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            >
              NAGARE
            </motion.span>
          </h1>

          <Enter delay={0.55} y={16}>
            <p className="mt-5 min-h-[1.75rem] text-[19px] font-medium leading-snug text-[#F5F5F5] sm:text-[22px]">
              <TypingText phrases={ROLES} label="Roles" />
            </p>
          </Enter>

          <Enter delay={0.7} y={16}>
            <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#969696]">
              Full-stack, backend, cloud and AI-powered applications — Java,
              Spring Boot, React, Next.js, Node.js, TypeScript, MongoDB,
              Docker, Kubernetes and AWS.
            </p>
          </Enter>

          <Enter delay={0.8} y={16}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <DATA.contact.social.GitHub.icon className="size-4" />
                GitHub
              </a>
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <DATA.contact.social.LinkedIn.icon className="size-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${DATA.contact.email}`}
                className="btn-secondary"
              >
                Email
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText className="size-4" aria-hidden />
                Resume
              </a>
            </div>
          </Enter>

          <Enter delay={0.9} y={12}>
            <p
              aria-hidden
              className="mt-8 font-mono text-[12px] text-[#6F7579]"
            >
              <TypingText
                phrases={["> shipping production code"]}
                mode="once"
                typeSpeed={55}
                label="Terminal detail"
              />
            </p>
          </Enter>
        </div>

        <div className="border-t border-[#2B2D30] px-5 py-10 sm:px-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:py-14">
          <Enter delay={0.5} y={12} className="h-full">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="ed-label">Portrait</p>
                <div className="mt-4 border border-[#2B2D30]">
                  <Image
                    alt={`Portrait of ${DATA.name}`}
                    src={DATA.avatarUrl}
                    width={640}
                    height={800}
                    className="block h-auto w-full"
                  />
                </div>
                <p className="meta-mono mt-3">
                  <a
                    href={`https://github.com/ANNI69`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-[#39D353]"
                  >
                    @ANNI69
                  </a>
                </p>
              </div>
              <p className="meta-mono">
                {DATA.location} ·{" "}
                <a
                  className="link-underline underline-offset-4 hover:text-[#39D353]"
                  href={DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Based in India
                </a>
              </p>
            </div>
          </Enter>
        </div>
      </div>

      <div className="ed-cells grid-cols-2 lg:grid-cols-4" role="presentation">
        <div className="px-5 py-3 sm:px-8">
          <p className="ed-label">Based</p>
          <p className="mt-1 text-[13px] text-[#F5F5F5]">{DATA.location}</p>
        </div>
        <div className="px-5 py-3 sm:px-8">
          <p className="ed-label">Status</p>
          <p className="mt-1 text-[13px] text-[#F5F5F5]">
            Open to interesting engineering work
          </p>
        </div>
        <div className="px-5 py-3 sm:px-8">
          <p className="ed-label">Focus</p>
          <p className="mt-1 text-[13px] text-[#F5F5F5]">
            Systems · Backend · AI
          </p>
        </div>
        <div className="px-5 py-3 sm:px-8">
          <p className="ed-label">Index</p>
          <p className="meta-mono mt-1" aria-hidden>
            Scroll to explore ↓
          </p>
        </div>
      </div>
    </section>
  );
}
