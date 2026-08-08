import type { Metadata } from "next";
import { getMediumPosts } from "@/lib/medium";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software engineering, building products, AI systems, and lessons from shipping production applications. Published on Medium.",
  openGraph: {
    title: "Blog | Orisabiyi David",
    description:
      "Writing on software engineering, building products, AI systems, and lessons from shipping production applications.",
  },
};

export default async function BlogPage() {
  const posts = await getMediumPosts();
  const featured = posts[0] ?? null;
  const archivePosts = posts.slice(1);

  const grouped: Record<string, typeof archivePosts> = {};
  for (const post of archivePosts) {
    const year = post.rawDate.getFullYear().toString();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(post);
  }
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="animate-page-in">
      {/* Header */}
      <section className="mb-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
              Writing
            </p>
            <h1
              className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,120px)]"
              style={{
                fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1",
              }}>
              Blog<span className="text-riso-red">.</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <span
              className="font-display font-black text-5xl leading-none block"
              style={{
                fontVariationSettings: "'SOFT' 80, 'opsz' 144",
              }}>
              {posts.length}
            </span>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-1">
              Posts on Medium
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative mb-12">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      {/* Featured latest post */}
      {featured && (
        <Link
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-neo !p-0 overflow-hidden block mb-16">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            {featured.image && (
              <div className="md:w-[45%] shrink-0 bg-ink overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full min-h-[240px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-riso-red">
                  Latest
                </span>
                <span className="text-xs font-bold opacity-60">
                  &middot; {featured.date}
                </span>
                <span className="text-xs font-bold opacity-60">
                  &middot; {featured.readTime}
                </span>
              </div>

              <h2
                className="font-display font-black text-2xl md:text-4xl leading-[0.95] tracking-tight mb-4 group-hover:text-riso-red transition-colors"
                style={{
                  fontVariationSettings: "'SOFT' 60, 'opsz' 72, 'WONK' 1",
                }}>
                {featured.title}
              </h2>

              {featured.description && (
                <p className="text-sm opacity-75 leading-relaxed mb-5 max-w-md">
                  {featured.description}...
                </p>
              )}

              {featured.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {featured.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs font-bold px-2.5 py-1 border-2 border-ink">
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      )}

      {/* Archive */}
      {archivePosts.length > 0 && (
        <>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">
              Archive
            </span>
            <div className="flex-1 border-t border-ink/20" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">
              {archivePosts.length} Earlier{" "}
              {archivePosts.length === 1 ? "Entry" : "Entries"}
            </span>
          </div>

          {years.map((year) => (
            <div key={year} className="mb-12">
              <div className="flex items-start gap-6 md:gap-10">
                {/* Year label */}
                <div className="shrink-0 w-[100px] md:w-[140px]">
                  <span
                    className="font-display font-black text-5xl md:text-7xl leading-none text-ink/20 block"
                    style={{
                      fontVariationSettings: "'SOFT' 80, 'opsz' 144",
                    }}>
                    {year}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-1">
                    {grouped[year].length}{" "}
                    {grouped[year].length === 1 ? "Post" : "Posts"}
                  </p>
                </div>

                {/* Posts list */}
                <div className="flex-1 min-w-0">
                  {grouped[year].map((post, i) => (
                    <Link
                      key={i}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-5 border-b border-ink/20 first:pt-0 last:border-b-0">
                      <div className="flex items-start gap-4 md:gap-6">
                        {/* Date */}
                        <span className="text-xs font-bold opacity-60 shrink-0 w-12 mt-0.5">
                          {post.date}
                        </span>

                        {/* Title + description */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base leading-tight group-hover:underline group-hover:text-riso-red transition-colors">
                            {post.title}
                          </h3>
                          {post.description && (
                            <p className="text-sm opacity-75 mt-1 leading-relaxed line-clamp-2">
                              {post.description}
                            </p>
                          )}
                        </div>

                        {/* Read time */}
                        <span className="text-xs font-bold opacity-60 shrink-0 mt-0.5 hidden md:block">
                          {post.readTime.replace(" READ", "")}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {posts.length <= 0 && (
        <div className="card-neo text-center py-12">
          <p className="text-lg font-bold opacity-75 mb-4">
            No posts yet. Coming soon.
          </p>
          <Link
            href="https://medium.com/@Orisabiyidavid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo bg-neo-yellow">
            Follow on Medium &rarr;
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
