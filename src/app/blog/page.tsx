import type { Metadata } from "next";
import { blogPosts } from "@/data/constants";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Orisabiyi David",
};

export default function BlogPage() {
  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          Blog<span className="text-riso-red">.</span>
        </h1>
        <p className="text-base md:text-lg opacity-75 max-w-[52ch]">
          Thoughts on engineering, building products, and lessons from shipping.
        </p>
      </section>

      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      <div className="card-neo">
        {Array.isArray(blogPosts) && blogPosts.length <= 0 ? (
          <p className="text-lg opacity-75">No posts yet. Coming soon.</p>
        ) : (
          <div className="space-y-0">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group block border-b-4 border-ink last:border-b-0 py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg md:text-xl font-black group-hover:text-riso-red transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <span className="text-xs font-bold opacity-60 shrink-0 mt-1">
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}