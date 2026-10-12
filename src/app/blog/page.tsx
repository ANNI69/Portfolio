import SectionHeader from "@/components/section-header";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sorted = [...posts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <main className="bg-[#101113] text-[#F5F5F5]">
      <div className="ed-frame">
        <div className="border-t border-[#2B2D30] px-5 py-10 sm:px-8">
          <SectionHeader
            index="00"
            label="Blog"
            title="Writing"
            intro="Notes on software development, systems and experiments."
          />
        </div>
        {sorted.length === 0 ? (
          <p className="border-t border-[#2B2D30] px-5 py-8 text-[15px] text-[#969696] sm:px-8">
            No posts yet.
          </p>
        ) : (
          <ul className="border-t border-[#2B2D30]">
            {sorted.map((post) => (
              <li key={post.slug} className="border-t border-[#2B2D30] first:border-t-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-baseline justify-between gap-4 px-5 py-5 transition-colors duration-150 hover:bg-[#1A1C1F] sm:px-8"
                >
                  <span>
                    <span className="block text-[16px] font-semibold tracking-tight text-[#F5F5F5]">
                      {post.metadata.title}
                    </span>
                    {post.metadata.summary && (
                      <span className="mt-1 block text-[13.5px] text-[#969696]">
                        {post.metadata.summary}
                      </span>
                    )}
                  </span>
                  <span className="meta-mono shrink-0" suppressHydrationWarning>
                    {formatDate(post.metadata.publishedAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
