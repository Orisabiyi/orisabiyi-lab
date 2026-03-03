import Image from "next/image";
import { projects } from "@/data/projects";
import { SITE } from "@/data/constants";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { WorkCard } from "@/components/work-card";
import { CopyEmail } from "@/components/copy-email";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="animate-page-in">
      {/* ===== HERO ===== */}
      <header className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Large avatar top-right */}
        <div className="absolute top-28 md:top-36 right-6 md:right-12 w-[100px] md:w-[clamp(120px,14vw,200px)] h-[100px] md:h-[clamp(120px,14vw,200px)] rounded-full overflow-hidden bg-card opacity-0 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:forwards] z-10">
          <div className="w-full h-full flex items-center justify-center text-5xl font-extrabold text-foreground/[0.08]">
            OD
          </div>
        </div>

        {/* Massive name */}
        <div className="relative z-[1]">
          <h1 className="font-black uppercase text-[clamp(60px,12.5vw,180px)] leading-[0.92] tracking-[-0.04em] text-foreground">
            <span className="block opacity-0 animate-name-in">ORISABIYI</span>
            <span className="block opacity-0 animate-name-in [animation-delay:0.12s]">
              DAVID
              <span className="inline-block w-[clamp(12px,1.5vw,22px)] h-[clamp(12px,1.5vw,22px)] rounded-full bg-foreground ml-1 align-baseline relative -top-[0.08em]" />
            </span>
          </h1>
        </div>

        {/* Bottom: email left, bio right */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-10 mt-auto pt-16 opacity-0 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:forwards]">
          <CopyEmail />
          <p className="max-w-[520px] text-xl md:text-[clamp(20px,2.8vw,32px)] font-normal leading-[1.35] text-foreground text-justify">
            {SITE.bio}
          </p>
        </div>
      </header>

      {/* ===== WORK ===== */}
      <section className="px-6 md:px-12 pb-20">
        <Reveal>
          <SectionHeader label="work." href="/works" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="px-6 md:px-12 pb-20">
        <Reveal>
          <SectionHeader label="about." href="/about" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            {SITE.about.map((text, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base font-normal leading-relaxed text-dim mt-5 first:mt-0">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-card">
              <Image
                src="https://framerusercontent.com/images/obb3zqFbOI0plXvmcRLAGwYDM.jpeg"
                alt="About"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
