import Image from "next/image";
import { projects } from "@/data/projects";
import { SITE } from "@/data/constants";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { WorkCard } from "@/components/work-card";
import { CopyEmail } from "@/components/copy-email";
import { Footer } from "@/components/footer";

import heroImg from "@/assets/david-pic-1.png";
import aboutImg from "@/assets/david-pic-2.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="animate-page-in">
      {/* ===== HERO ===== */}
      <header className="relative min-h-svh flex flex-col justify-between px-5 md:px-12 pt-24 md:pt-32 pb-10 md:pb-16">
        {/* Large avatar top-right */}
        <div className="absolute top-28 md:top-36 right-6 md:right-12 w-[100px] md:w-[clamp(120px,14vw,200px)] h-[100px] md:h-[clamp(120px,14vw,200px)] rounded-full overflow-hidden bg-card opacity-0 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:forwards] z-10">
          <figure className="w-full h-full flex items-center justify-center text-5xl font-extrabold text-foreground/[0.08]">
            <Image
              src={heroImg}
              alt="Avatar"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Massive name */}
        <div className="relative z-[1] mt-4 md:mt-0">
          <h1 className="font-black uppercase text-[clamp(48px,12.5vw,180px)] leading-[0.92] tracking-[-0.04em] text-foreground">
            <span className="block opacity-0 animate-name-in">ORISABIYI</span>
            <span className="block opacity-0 animate-name-in [animation-delay:0.12s]">
              DAVID
              <span className="inline-block w-[clamp(10px,1.5vw,22px)] h-[clamp(10px,1.5vw,22px)] rounded-full bg-foreground ml-1 align-baseline relative -top-[0.08em]" />
            </span>
          </h1>
        </div>

        {/* Bottom: email left, bio right */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 md:gap-10 mt-auto pt-10 md:pt-16 opacity-0 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:forwards]">
          <CopyEmail />
          <p className="max-w-full md:max-w-[520px] text-lg md:text-[clamp(20px,2.8vw,32px)] font-normal leading-[1.4] md:leading-[1.35] text-foreground md:text-justify">
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
          <div className="flex items-center justify-between pb-4 mb-12 border-b border-border">
            <span className="text-xs font-semibold tracking-wider lowercase text-muted">
              about.
            </span>
            <Link
              href="/about"
              className="text-xs font-medium text-foreground px-5 py-2.5 rounded-full border border-border hover:bg-card transition-colors"
            >
              Show More
            </Link>
          </div>
        </Reveal>

        {/* Large justified paragraph */}
        <Reveal>
          <p className="text-xl lg:text-3xl font-normal leading-[1.35] text-foreground lg:w-1/2 mb-10 lg:mb-16">
            {SITE.about[0]}
          </p>
        </Reveal>

        {/* Image + second text side by side */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center">
          <Reveal className="self-end">
            <div className="w-full max-w-[460px] mx-auto md:mx-0 md:ml-auto aspect-[3/4] rounded-none overflow-hidden">
              <Image
                src={aboutImg}
                alt="About"
                width={460}
                height={613}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm md:text-[15px] lg:text-lg font-normal leading-relaxed text-foreground text-justify lg:text-left max-w-[340px] md:mr-auto">
              {SITE.about[1]}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
