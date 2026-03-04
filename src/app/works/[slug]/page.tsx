import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} | Orisabiyi David` : "Not Found" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="animate-page-in">
      <section className="px-6 md:px-12 pt-36 pb-16">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-dim hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Works
        </Link>

        <Reveal>
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-card flex items-center justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-full inline-block object-fit"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-black uppercase text-[clamp(36px,6vw,80px)] leading-[0.95] tracking-[-0.03em] text-foreground mb-7">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex gap-10 pb-7 mb-10 border-b border-border">
            {[
              { label: "Category", value: project.category },
              { label: "Year", value: project.year },
              { label: "Role", value: "Design & Development" },
            ].map((meta) => (
              <div key={meta.label} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-muted">
                  {meta.label}
                </span>
                <span className="text-sm text-dim">{meta.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[17px] leading-relaxed text-dim max-w-[640px] mb-10">
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-border text-xs font-medium text-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {project.link && (
          <Reveal delay={300}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-semibold mt-10 hover:scale-[0.97] hover:opacity-85 transition-all"
            >
              View Live Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </Reveal>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <Reveal delay={300}>
            <div className="flex flex-col gap-4 mt-16">
              {project.gallery.map((img, i) => (
                <div key={i} className="w-full rounded-2xl overflow-hidden bg-card">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </section>
      <Footer />
    </div >
  );
}
