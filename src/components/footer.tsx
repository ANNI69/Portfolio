import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#262A2D] bg-[#08090A]">
      <div className="mx-auto flex w-[min(100%-40px,980px)] flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-[#6F7579]" suppressHydrationWarning>
          © {new Date().getFullYear()} {DATA.name}
        </p>
        <nav aria-label="Footer" className="flex items-center gap-4">
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#A3A7AA] hover:text-[#39D353]"
          >
            GitHub
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#A3A7AA] hover:text-[#39D353]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="font-mono text-xs text-[#A3A7AA] hover:text-[#39D353]"
          >
            Email
          </a>
          <Link
            href="/blog"
            className="font-mono text-xs text-[#A3A7AA] hover:text-[#39D353]"
          >
            Blog
          </Link>
        </nav>
        <p className="font-mono text-xs text-[#6F7579]">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
