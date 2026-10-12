import { FileText } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";

const RESUME_URL =
  DATA.navbar.find((n) => n.label === "Resume")?.href ?? "#";

const SITEMAP = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#hackathons", label: "Hackathons" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2B2D30] bg-[#101113]">
      <div className="mx-auto grid w-[min(100%-32px,1280px)] grid-cols-2 gap-px border-x border-[#2B2D30] bg-[#2B2D30] md:grid-cols-12">
        <div className="col-span-2 bg-[#101113] px-5 py-8 sm:px-8 md:col-span-5">
          <Link
            href="/"
            className="inline-flex h-8 w-8 items-center justify-center border border-[#3A3D41] bg-[#121315] font-mono text-[13px] font-bold text-[#F5F5F5]"
            aria-label="Aniruddh Nagare — home"
          >
            AN
          </Link>
          <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-[#969696]">
            {DATA.name} — Software Developer building scalable web and
            backend systems.
          </p>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="meta-mono mt-3 inline-block break-all uppercase tracking-[0.18em] hover:text-[#39D353]"
          >
            {DATA.contact.email}
          </a>
        </div>
        <nav
          aria-label="Sitemap"
          className="bg-[#101113] px-5 py-8 sm:px-8 md:col-span-2"
        >
          <p className="ed-label">Index</p>
          <ul className="mt-4 space-y-2.5">
            {SITEMAP.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-[13.5px] text-[#969696] transition-colors hover:text-[#F5F5F5]"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-label="Social"
          className="bg-[#101113] px-5 py-8 sm:px-8 md:col-span-3"
        >
          <p className="ed-label">Social</p>
          <ul className="mt-4 space-y-2.5">
            {Object.values(DATA.contact.social).map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-[#969696] transition-colors hover:text-[#F5F5F5]"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-label="More"
          className="col-span-2 bg-[#101113] px-5 py-8 sm:px-8 md:col-span-2 md:col-start-auto"
        >
          <p className="ed-label">More</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/blog"
                className="text-[13.5px] text-[#969696] transition-colors hover:text-[#F5F5F5]"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13.5px] text-[#969696] transition-colors hover:text-[#F5F5F5]"
              >
                <FileText className="size-3.5" aria-hidden />
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-[#2B2D30]">
        <div className="mx-auto flex w-[min(100%-32px,1280px)] flex-col gap-1 border-x border-[#2B2D30] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="meta-mono uppercase tracking-[0.18em]" suppressHydrationWarning>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <p className="meta-mono uppercase tracking-[0.18em]">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
