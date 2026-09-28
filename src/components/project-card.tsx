"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { viewportOnce } from "./motion/variants";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  featured?: boolean;
  index?: number;
}

const MAX_TAGS = 5;

/**
 * Flat project card with restrained motion:
 * entrance (opacity/y + image clip reveal, staggered) and
 * hover (border, 1.015 image scale, title nudge + arrow slide).
 */
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  links,
  featured = false,
  index = 0,
}: Props) {
  const visible = tags.slice(0, MAX_TAGS);
  const rest = tags.length - visible.length;
  const external = href?.startsWith("http");

  const card = (
    <article
      className={
        featured
          ? "flat-card group flex h-full flex-col overflow-hidden sm:grid sm:grid-cols-2"
          : "flat-card group flex h-full flex-col overflow-hidden"
      }
    >
      {image && (
        <a
          href={href || "#"}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={
            featured
              ? "block overflow-hidden border-b border-[#262A2D] sm:border-b-0 sm:border-r"
              : "block overflow-hidden border-b border-[#262A2D]"
          }
          aria-label={`${title} — open project`}
          tabIndex={-1}
        >
          <span className="block overflow-hidden">
            <Image
              src={image}
              alt={`${title} screenshot`}
              width={featured ? 880 : 640}
              height={featured ? 520 : 360}
              sizes={featured ? "(max-width: 768px) 100vw, 480px" : "(max-width: 640px) 100vw, 460px"}
              className="aspect-[16/9] w-full object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.015]"
            />
          </span>
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] font-semibold leading-snug text-[#F5F5F5]">
            {href ? (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="transition-all duration-200 hover:text-[#39D353] group-hover:translate-x-[3px]"
              >
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                  {title}
                </span>{" "}
                <span
                  aria-hidden
                  className="inline-block text-[#39D353] opacity-0 transition-all duration-200 ease-out group-hover:translate-x-[4px] group-hover:opacity-100"
                >
                  →
                </span>
              </a>
            ) : (
              title
            )}
          </h3>
          {featured && (
            <span className="shrink-0 rounded border border-[#0E4429] bg-[#0E4429]/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#39D353]">
              Featured
            </span>
          )}
        </div>
        <p className="meta-mono mt-1">{dates}</p>
        <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-[#A3A7AA]">
          {description}
        </p>
        {tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
            {visible.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
            {rest > 0 && (
              <li className="tag border-[#0E4429] text-[#39D353]">
                +{rest} more
              </li>
            )}
          </ul>
        )}
        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pt-1">
            {links.map((link, idx) => {
              const isPrimary =
                link.type.toLowerCase().includes("demo") ||
                link.type.toLowerCase().includes("live");
              return (
                <a
                  key={`${link.type}-${idx}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPrimary ? "btn-primary !px-3 !py-1.5 !text-[13px]" : "btn-secondary !px-3 !py-1.5 !text-[13px]"}
                >
                  <span aria-hidden className="inline-flex">{link.icon}</span>
                  {link.type}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );

  const delay = Math.min(index * 0.08, 0.4);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className="h-full"
    >
      <motion.div
        initial={{ clipPath: "inset(8% 8% 8% 8%)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
        className="h-full"
      >
        {card}
      </motion.div>
    </motion.div>
  );
}
