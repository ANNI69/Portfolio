"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SECTIONS = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#hackathons", label: "Hackathons", id: "hackathons" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const RESUME_URL =
  DATA.navbar.find((n) => n.label === "Resume")?.href ?? "#";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="sticky top-0 z-50 border-b border-[#262A2D] bg-[#08090A]"
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-[min(100%-40px,980px)] items-center justify-between transition-[height] duration-200 ease-out",
          scrolled ? "h-12" : "h-14"
        )}
      >
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-[#F5F5F5]"
          aria-label="Aniruddh Nagare — home"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#353A3E] bg-[#0D0F10] text-[12px]">
            AN
          </span>
          <span className="ml-2 hidden sm:inline">aniruddh</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "relative text-[13.5px] text-[#A3A7AA] transition-colors duration-150 hover:text-[#F5F5F5]",
                active === s.id && "text-[#F5F5F5]"
              )}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  aria-hidden
                  layoutId="nav-active-underline"
                  className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-[#26A641]"
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              {active === s.id && (
                <span
                  aria-hidden
                  className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#39D353]"
                />
              )}
            </Link>
          ))}
          <span aria-hidden className="h-4 w-px bg-[#262A2D]" />
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[#A3A7AA] transition-colors hover:text-[#39D353]"
          >
            <DATA.contact.social.GitHub.icon className="size-4" />
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[#A3A7AA] transition-colors hover:text-[#39D353]"
          >
            <DATA.contact.social.LinkedIn.icon className="size-4" />
          </a>
          <Link href="/blog" className="btn-secondary !px-3 !py-1.5 !text-[13px]">
            Blog
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3 !py-1.5 !text-[13px]"
          >
            <FileText className="size-3.5" aria-hidden />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#262A2D] text-[#F5F5F5] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="font-mono text-sm">
            {open ? "×" : "≡"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#262A2D] bg-[#08090A] md:hidden"
          >
            <ul className="mx-auto w-[min(100%-40px,980px)] py-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-[#A3A7AA] hover:bg-[#0D0F10] hover:text-[#F5F5F5]"
                  >
                    {active === s.id && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[#39D353]"
                      />
                    )}
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-[#A3A7AA] hover:bg-[#0D0F10] hover:text-[#F5F5F5]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-[#A3A7AA] hover:bg-[#0D0F10] hover:text-[#F5F5F5]"
                >
                  <FileText className="size-4" aria-hidden />
                  Resume
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
