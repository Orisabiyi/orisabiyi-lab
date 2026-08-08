import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Works | Orisabiyi David",
};

export default function WorksPage() {
  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          Projects<span className="text-riso-red">.</span>
        </h1>
        <p className="text-base md:text-lg opacity-75 max-w-[52ch]">
          Selected work from 2021 to present. Each project shipped to
          production, solving real problems for real users.
        </p>
      </section>

      {/* Divider */}
      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/works/${project.slug}`}
            className="group card-neo !p-0 overflow-hidden block"
          >
            <figure className="aspect-video bg-paper border-b-4 border-ink overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={394}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </figure>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-xl font-black group-hover:text-riso-red transition-colors">
                  {project.title}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 shrink-0 mt-1">
                  {project.year}
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-riso-red mb-3">
                {project.category}
              </p>
              <p className="text-sm opacity-75 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-2.5 py-1 border-2 border-ink bg-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}