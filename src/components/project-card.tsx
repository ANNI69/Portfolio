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
 * Editorial project entry: hairline rules, grid-aligned content,
 * square images. All titles, descriptions, tags, images and links
 * preserved; entrance motion retained.
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

  const titleBlock = (
    <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-[#F5F5F5]">
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group/link inline transition-colors duration-200 hover:text-[#39D353]"
        >
          {title}{" "}
          <span
            aria-hidden
            className="inline-block text-[#39D353] opacity-0 transition-all duration-200 ease-out group-hover/link:translate-x-[3px] group-hover/link:opacity-100"
          >
            →
          </span>
        </a>
      ) : (
        title
      )}
    </h3>
  );

  const metaBlock = (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <p className="meta-mono">{dates}</p>
        {featured && (
          <span className="border border-[#0E4429] bg-[#0E4429]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#39D353]">
            Featured
          </span>
        )}
      </div>
      <p className="mt-2 max-w-[560px] text-[14px] leading-relaxed text-[#969696]">
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
        <div className="mt-4 flex flex-wrap gap-2">
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
                className={isPrimary ? "btn-primary !px-4 !py-2 !text-[11px]" : "btn-secondary !px-4 !py-2 !text-[11px]"}
              >
                <span aria-hidden className="inline-flex">{link.icon}</span>
                {link.type}
              </a>
            );
          })}
        </div>
      )}
    </>
  );

  const imageBlock = image ? (
    <a
      href={href || "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group/img block overflow-hidden bg-[#101113]"
      aria-label={`${title} — open project`}
      tabIndex={-1}
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        width={featured ? 880 : 640}
        height={featured ? 520 : 360}
        sizes={featured ? "(max-width: 1024px) 100vw, 740px" : "(max-width: 640px) 100vw, 560px"}
        className="aspect-[16/9] w-full object-cover object-top transition-transform duration-200 ease-out group-hover/img:scale-[1.015]"
      />
    </a>
  ) : null;

  const delay = Math.min(index * 0.08, 0.4);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={
        featured
          ? "grid grid-cols-1 gap-6 border-t border-[#2B2D30] px-5 py-8 sm:px-8 lg:grid-cols-12 lg:gap-8"
          : "group flex h-full flex-col bg-[#121315] p-5 transition-colors duration-150 hover:bg-[#16181B] sm:p-6"
      }
    >
      {featured ? (
        <>
          <div className="lg:col-span-7">{imageBlock}</div>
          <div className="lg:col-span-5">
            {titleBlock}
            <div className="mt-1">{metaBlock}</div>
          </div>
        </>
      ) : (
        <>
          {imageBlock}
          <div className="mt-5 flex flex-1 flex-col">
            {titleBlock}
            <div className="mt-1 flex flex-1 flex-col">{metaBlock}</div>
          </div>
        </>
      )}
    </motion.article>
  );
}
