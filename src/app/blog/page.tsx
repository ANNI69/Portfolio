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
    <main className="bg-[#08090A] text-[#F5F5F5]">
      <div className="mx-auto w-[min(100%-40px,980px)] py-14">
        <SectionHeader
          index="00"
          label="Blog"
          title="Writing"
          intro="Notes on software development, systems and experiments."
        />
        {sorted.length === 0 ? (
          <p className="mt-8 text-[15px] text-[#A3A7AA]">
            No posts yet.
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flat-card flex items-baseline justify-between gap-4 p-4"
                >
                  <span>
                    <span className="block text-[15px] font-semibold text-[#F5F5F5]">
                      {post.metadata.title}
                    </span>
                    {post.metadata.summary && (
                      <span className="mt-1 block text-[13.5px] text-[#A3A7AA]">
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
