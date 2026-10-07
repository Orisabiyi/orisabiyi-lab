import type { Metadata } from "next";
import { SITE, techStack } from "@/data/constants";
import { Footer } from "@/components/footer";
import { ExperienceSection } from "@/components/experience-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer with 4+ years shipping production web applications. Currently a Senior Software Engineer building logistics infrastructure. Open to remote opportunities worldwide.",
  openGraph: {
    title: "About | Orisabiyi David",
    description:
      "Software engineer with 4+ years shipping production web applications. Open to remote opportunities worldwide.",
  },
};

export default function AboutPage() {
  const totalTech = Object.values(techStack).flat().length;

  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          About<span className="text-riso-red">.</span>
        </h1>
      </section>

      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      {/* Bio card */}
      <div className="card-neo mb-6">
        {SITE.aboutLong.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base md:text-lg leading-relaxed opacity-75 mb-4 last:mb-0 max-w-[640px]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Resume download */}
      <div className="card-neo !bg-neo-yellow mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-black mb-1">Resume</h3>
            <p className="text-sm opacity-75">
              Download my CV for a full overview of my experience and skills.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Orisabiyi_David_CV.pdf"
            className="btn-neo bg-white shrink-0"
          >
            Download CV &darr;
          </a>
        </div>
      </div>

      <ExperienceSection className="mb-6" />

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="card-neo flex flex-col items-center text-center">
          <span
            className="font-display font-black text-6xl leading-none mb-2"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
          >
            {totalTech}
          </span>
          <p className="text-sm font-semibold opacity-75">Technologies in use</p>
        </div>
        <div className="card-neo flex flex-col items-center text-center">
          <span
            className="font-display font-black text-6xl leading-none mb-2"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
          >
            4+
          </span>
          <p className="text-sm font-semibold opacity-75">Years shipping</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}