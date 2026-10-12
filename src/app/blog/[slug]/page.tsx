import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post;
  try {
    post = await getPost(params.slug);
  } catch {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post;
  try {
    post = await getPost(params.slug);
  } catch {
    notFound();
  }

  return (
    <main className="bg-[#101113] text-[#F5F5F5]">
      <div className="ed-frame">
        <div className="mx-auto w-[min(100%-40px,760px)] px-5 py-14 sm:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/opengraph-image`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <Link
          href="/blog"
          className="font-mono text-xs text-[#969696] hover:text-[#39D353]"
        >
          ← All posts
        </Link>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight sm:text-[38px]">
          {post.metadata.title}
        </h1>
        <p className="meta-mono mt-2" suppressHydrationWarning>
          {formatDate(post.metadata.publishedAt)}
        </p>
        <article
          className="prose prose-invert mt-8 max-w-none prose-pre:border prose-pre:border-[#2B2D30]"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
        </div>
      </div>
    </main>
  );
}
