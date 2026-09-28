"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import HeroBackground from "./motion/HeroBackground";
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
 * Hero with premium startup-style entrance:
 * status → greeting → name (staggered lines) → typing role →
 * description → actions → meta. Technical grid + outline + scan behind.
 * Reduced motion is handled globally via MotionConfig — the tree below
 * is identical on server and client, so hydration always matches.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative overflow-hidden py-14 sm:py-20"
    >
      <HeroBackground />
      <div className="relative flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[620px]">
          <Enter delay={0.2} y={12}>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#262A2D] bg-[#0D0F10] px-3 py-1 font-mono text-[11.5px] text-[#A3A7AA]">
              <PulseDot />
              <span className="sr-only">Status: </span>
              Open to interesting engineering work
            </p>
          </Enter>

          <Enter delay={0.3} y={16}>
            <p className="meta-mono mt-6 uppercase tracking-widest">
              Hi, I&apos;m
            </p>
          </Enter>

          <h1
            id="hero-name"
            className="mt-1 text-[44px] font-bold leading-[1.05] tracking-tight sm:text-[60px]"
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
            <p className="mt-4 min-h-[1.75rem] text-[17px] font-medium leading-snug text-[#F5F5F5]">
              <TypingText phrases={ROLES} label="Roles" />
            </p>
          </Enter>

          <Enter delay={0.7} y={16}>
            <p className="mt-3 max-w-[560px] text-[14.5px] leading-relaxed text-[#A3A7AA]">
              Full-stack, backend, cloud and AI-powered applications — Java,
              Spring Boot, React, Next.js, Node.js, TypeScript, MongoDB,
              Docker, Kubernetes and AWS.
            </p>
          </Enter>

          <Enter delay={0.8} y={16}>
            <div className="mt-6 flex flex-wrap gap-2.5">
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
              className="mt-5 font-mono text-[12px] text-[#6F7579]"
            >
              <TypingText
                phrases={["> shipping production code"]}
                mode="once"
                typeSpeed={55}
                label="Terminal detail"
              />
            </p>
            <p className="meta-mono mt-2">
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
          </Enter>
        </div>

        <div className="shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          >
            <Avatar className="size-28 rounded-full border border-[#353A3E] bg-[#0D0F10] transition-colors duration-200 hover:border-[#454B50] sm:size-36">
              <AvatarImage
                alt={`Portrait of ${DATA.name}`}
                src={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback className="bg-[#0D0F10] text-[#F5F5F5]">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <p className="meta-mono mt-3 text-center">
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
      </div>
      <Enter delay={1.0} y={8}>
        <p className="meta-mono mt-10" aria-hidden>
          Scroll to explore ↓
        </p>
      </Enter>
    </section>
  );
}
