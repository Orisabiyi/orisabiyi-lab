import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { WorkCard } from "@/components/work-card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Works | Orisabiyi David",
};

export default function WorksPage() {
  return (
    <div className="animate-page-in">
      <section className="px-6 md:px-12 pt-36 pb-16">
        <h1 className="font-black uppercase text-[clamp(56px,11vw,160px)] leading-[0.9] tracking-[-0.04em] text-foreground opacity-0 animate-name-in">
          WORK
        </h1>
        <p className="text-xs font-medium tracking-wider lowercase text-muted mt-5 pb-4 border-b border-border mb-10">
          work 2021 &mdash; 2024
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
