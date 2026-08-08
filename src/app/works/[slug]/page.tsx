import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Footer } from "@/components/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Orisabiyi David` : "Not Found",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="animate-page-in">
      <Link
        href="/works"
        className="inline-flex items-center gap-2 text-sm font-bold hover:text-riso-red transition-colors mb-8"
      >
        <span className="w-6 h-6 border-2 border-ink bg-white shadow-neo-btn flex items-center justify-center text-xs">
          &larr;
        </span>
        Back to Works
      </Link>

      <div className="card-neo !p-0 overflow-hidden mb-8">
        <div className="aspect-video bg-paper">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="card-neo mb-6">
        <h1
          className="font-display font-black leading-[0.9] tracking-[-0.03em] text-[clamp(36px,6vw,80px)] mb-6"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          {project.title}<span className="text-riso-red">.</span>
        </h1>

        <div className="grid grid-cols-3 gap-4 border-t-4 border-ink pt-6 mb-8">
          {[
            { label: "Category", value: project.category },
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
          ].map((meta) => (
            <div key={meta.label}>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                {meta.label}
              </p>
              <p className="text-sm font-semibold">{meta.value}</p>
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg leading-relaxed opacity-75 max-w-[640px] mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-3 py-1.5 border-2 border-ink bg-paper"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-riso-red"
            >
              View Live &rarr;
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-white"
            >
              Source Code &rarr;
            </Link>
          )}
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-black">Screenshots</h3>
          {project.gallery.map((img, i) => (
            <figure key={i} className="card-neo !p-0 overflow-hidden">
              <Image
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}