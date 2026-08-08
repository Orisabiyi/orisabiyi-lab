import { getMediumPosts } from "@/lib/medium";
import Link from "next/link";

export async function BlogCard() {
  const posts = await getMediumPosts();
  const displayPosts = posts.slice(0, 3);
  const hasPosts = displayPosts.length > 0;

  return (
    <div className="md:col-span-2 card-neo">
      <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
        Writing
      </p>
      <h3 className="text-2xl font-black mb-1">Blog</h3>
      <p className="text-lg mb-6 opacity-75">
        Thoughts on engineering, building products, and lessons from shipping.
      </p>

      <div className="space-y-3 mb-6">
        {hasPosts ? (
          displayPosts.map((post, i) => (
            <div key={i} className="border-l-4 border-ink pl-4">
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:underline leading-tight block"
              >
                {post.title}
              </Link>
              <p className="text-sm opacity-75 mt-1">{post.date}</p>
            </div>
          ))
        ) : (
          <p className="text-sm opacity-75">No posts yet. Coming soon.</p>
        )}
      </div>

      <Link
        href="/blog"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-neo bg-white"
      >
        View All Posts &rarr;
      </Link>
    </div>
  );
}