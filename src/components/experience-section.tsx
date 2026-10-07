import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/constants";
import { cn } from "@/lib/utils";

interface ExperienceSectionProps {
  className?: string;
  showResume?: boolean;
}

export function ExperienceSection({ className, showResume = false }: ExperienceSectionProps) {
  return (
    <section className={cn("card-neo !p-0 overflow-hidden", className)}>
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 p-6 md:p-8 bg-neo-yellow border-b-4 border-ink">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-riso-red mb-2">
            Experience
          </p>
          <h3
            className="font-display font-black text-3xl md:text-5xl leading-none tracking-tight"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144, 'WONK' 1" }}
          >
            Where I&rsquo;ve Shipped<span className="text-riso-red">.</span>
          </h3>
        </div>
        {showResume && (
          <a
            href="/resume.pdf"
            download="Orisabiyi_David_CV.pdf"
            className="btn-neo bg-white shrink-0 self-start sm:self-auto"
          >
            Download CV &darr;
          </a>
        )}
      </header>

      <ol>
        {experience.map((exp, i) => (
          <li
            key={exp.org}
            className="group grid grid-cols-[2.75rem_1fr] md:grid-cols-[4.5rem_1fr] gap-4 md:gap-6 p-6 md:p-8 border-t-2 border-ink first:border-t-0 transition-colors hover:bg-paper"
          >
            <span
              aria-hidden
              className="font-display font-black text-4xl md:text-6xl leading-none text-ink/15 transition-colors group-hover:text-riso-red"
              style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
                <h4 className="text-xl md:text-2xl font-black leading-tight">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {exp.org}
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    exp.org
                  )}
                </h4>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 border-ink bg-riso-red text-white text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Now
                  </span>
                )}
              </div>

              <p className="font-bold text-sm uppercase tracking-wide opacity-75 mb-3">
                {exp.role}
                {exp.type && <span className="whitespace-nowrap"> &middot; {exp.type}</span>}
                {exp.client && (
                  <span className="normal-case tracking-normal font-semibold">
                    {" "}&middot; client: {exp.client}
                  </span>
                )}
              </p>

              <p className="text-sm md:text-base leading-relaxed max-w-[70ch] mb-4">
                {exp.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="px-3 py-1 border-2 border-ink bg-white shadow-neo-btn text-sm font-bold"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
