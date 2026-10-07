import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { getSubstackNotes, SUBSTACK } from "@/lib/substack";

export async function JournalCard() {
  const notes = await getSubstackNotes();
  const featured = notes.length > 0 ? notes.reduce((a, b) => (b.likes > a.likes ? b : a)) : null;
  const latest = notes.filter((n) => n.id !== featured?.id).slice(0, 3);

  return (
    <section className="md:col-span-3 card-neo !p-0 overflow-hidden grid md:grid-cols-5">
      {/* Intro panel */}
      <div
        className="md:col-span-2 bg-riso-red text-white p-6 md:p-8 flex flex-col justify-between gap-8 border-b-4 md:border-b-0 md:border-r-4 border-ink"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      >
        <div>
          <span className="inline-block px-2 py-0.5 border-2 border-ink bg-white text-ink text-[11px] font-bold uppercase tracking-widest mb-5">
            Journal &middot; Substack
          </span>
          <h3
            className="font-display font-black text-4xl md:text-5xl leading-[0.9] tracking-tight mb-4"
            style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
          >
            Away from the code<span className="text-ink">.</span>
          </h3>
          <p className="text-base leading-relaxed opacity-90 max-w-[40ch]">
            Thoughts, philosophical or not, poetic or not. Notes on meaning, success, and the Nigerian
            dream.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/journal" className="btn-neo bg-neo-yellow text-ink">
            Read the Journal &rarr;
          </Link>
          <Link
            href={SUBSTACK.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo bg-white text-ink"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Notes panel */}
      <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
        {featured ? (
          <>
            <Link
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-0.5 border-2 border-ink bg-neo-yellow text-[11px] font-bold uppercase tracking-wider">
                  Most loved
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold opacity-75">
                  <Heart className="w-4 h-4" /> {featured.likes}
                </span>
              </div>
              <blockquote
                className="font-display italic text-xl md:text-2xl leading-snug line-clamp-5 group-hover:text-riso-red transition-colors"
                style={{ fontVariationSettings: "'SOFT' 60, 'opsz' 72" }}
              >
                &ldquo;{featured.body.replace(/\s*\n+\s*/g, " ")}&rdquo;
              </blockquote>
            </Link>

            {latest.length > 0 && (
              <div className="mt-auto">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
                  Latest notes
                </p>
                <ul>
                  {latest.map((note) => (
                    <li key={note.id} className="border-t-2 border-ink/15">
                      <Link
                        href={note.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-3"
                      >
                        <span className="text-xs font-bold opacity-60 shrink-0 w-12">{note.date}</span>
                        <span className="flex-1 min-w-0 truncate font-semibold group-hover:text-riso-red transition-colors">
                          {note.body.split("\n")[0]}
                        </span>
                        <ArrowUpRight className="w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm opacity-75 my-auto">
            New notes are on their way. Follow along on Substack.
          </p>
        )}
      </div>
    </section>
  );
}
