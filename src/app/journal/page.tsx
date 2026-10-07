import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, Repeat2 } from "lucide-react";
import { getSubstackNotes, getSubstackPosts, SUBSTACK } from "@/lib/substack";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "David's Journal — notes and essays from Substack. Thoughts, philosophical or not, poetic or not.",
  openGraph: {
    title: "Journal | Orisabiyi David",
    description: "Notes and essays from David's Journal on Substack.",
  },
};

// Notes are written as one line per paragraph; collapse the blank lines so
// they read like verse instead of spreading across the card.
const tidy = (body: string) => body.replace(/\n{2,}/g, "\n");

export default async function JournalPage() {
  const [posts, notes] = await Promise.all([getSubstackPosts(), getSubstackNotes()]);
  const mostLovedId =
    notes.length > 1 ? notes.reduce((a, b) => (b.likes > a.likes ? b : a)).id : null;

  return (
    <div className="animate-page-in">
      {/* Header */}
      <section className="mb-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
              Writing &middot; Substack
            </p>
            <h1
              className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,120px)]"
              style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
            >
              Journal<span className="text-riso-red">.</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <span
              className="font-display font-black text-5xl leading-none block"
              style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
            >
              {notes.length + posts.length}
            </span>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-1">
              Entries on Substack
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <p className="text-base md:text-lg opacity-75 max-w-[52ch]">
          Away from the code. Thoughts, philosophical or not, poetic or not.
        </p>
        <Link
          href={SUBSTACK.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neo bg-riso-red shrink-0 self-start sm:self-auto"
        >
          Subscribe on Substack &rarr;
        </Link>
      </div>

      {/* Divider */}
      <div className="relative mb-12">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      {/* Essays (full posts) */}
      {posts.length > 0 && (
        <section className="mb-16">
          <SectionLabel label="Essays" count={posts.length} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {posts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-neo !p-0 overflow-hidden flex flex-col"
              >
                {post.image && (
                  <div className="aspect-video bg-ink overflow-hidden border-b-4 border-ink">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <p className="text-xs font-bold opacity-60 mb-3">
                    {post.date} &middot; {post.readTime}
                  </p>
                  <h2
                    className="font-display font-black text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3 group-hover:text-riso-red transition-colors"
                    style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 72, 'WONK' 1" }}
                  >
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-sm opacity-75 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Notes */}
      {notes.length > 0 && (
        <section className="mb-8">
          <SectionLabel label="Notes" count={notes.length} />
          <div className="columns-1 md:columns-2 gap-4 md:gap-6">
            {notes.map((note) => {
              const loved = note.id === mostLovedId;
              return (
                <Link
                  key={note.id}
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group card-neo !p-6 block break-inside-avoid mb-4 md:mb-6 transition-transform hover:-translate-y-0.5",
                    loved && "!bg-neo-yellow"
                  )}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                      {note.date}
                    </span>
                    {loved && (
                      <span className="px-2 py-0.5 border-2 border-ink bg-riso-red text-white text-[11px] font-bold uppercase tracking-wider">
                        Most loved
                      </span>
                    )}
                  </div>

                  <p className="relative pl-4 border-l-4 border-riso-red whitespace-pre-line leading-relaxed line-clamp-[10]">
                    {tidy(note.body)}
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t-2 border-ink/15 text-sm font-bold">
                    <div className="flex items-center gap-4 opacity-75">
                      <span className="inline-flex items-center gap-1.5">
                        <Heart className="w-4 h-4" /> {note.likes}
                      </span>
                      {note.restacks > 0 && (
                        <span className="inline-flex items-center gap-1.5">
                          <Repeat2 className="w-4 h-4" /> {note.restacks}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 group-hover:text-riso-red transition-colors">
                      Read on Substack <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {posts.length === 0 && notes.length === 0 && (
        <div className="card-neo text-center py-12 mb-8">
          <p className="text-lg font-bold opacity-75 mb-4">
            Nothing here yet. Follow along on Substack.
          </p>
          <Link
            href={SUBSTACK.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo bg-neo-yellow"
          >
            Visit David&rsquo;s Journal &rarr;
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}

function SectionLabel({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-xs font-bold uppercase tracking-widest text-riso-red">{label}</span>
      <div className="flex-1 border-t border-ink/20" />
      <span className="text-xs font-bold uppercase tracking-widest opacity-60">
        {count} {count === 1 ? "Entry" : "Entries"}
      </span>
    </div>
  );
}
