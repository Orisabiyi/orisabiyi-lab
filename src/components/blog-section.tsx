import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/data/constants";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <p className="text-xs text-muted tracking-wide mb-3">Writing</p>
        <h3 className="text-lg font-semibold text-foreground mb-4">Blog</h3>
        <p className="text-sm text-dim mb-6">
          Thoughts on engineering, building products, and lessons from shipping.
        </p>
      </Reveal>
      <div className="flex flex-col gap-0">
        {blogPosts.map((post, i) => (
          <Reveal key={i} delay={i * 60}>
            <Link
              href={post.href}
              className="group flex items-center justify-between py-4 border-b border-border">
              <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </span>
              <span className="text-xs text-muted shrink-0 ml-4">
                {post.date}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <Link
          href="/blog"
          className="inline-block text-sm text-accent hover:underline underline-offset-2 mt-4">
          View All Posts →
        </Link>
      </Reveal>
    </section>
  );
}
