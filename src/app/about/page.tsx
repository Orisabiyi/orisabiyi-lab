import type { Metadata } from "next";
import Image from "next/image";
import { SITE, techStack } from "@/data/constants";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServicesMarquee } from "@/components/services-marquee";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

import image1 from "@/assets/david-pic-1.png";
import image2 from "@/assets/david-pic-2.png";
import image3 from "@/assets/david-pic-3.png";
import image4 from "@/assets/david-pic-4.png";

export const metadata: Metadata = {
  title: "About | Orisabiyi David",
};

export default function AboutPage() {
  return (
    <div className="animate-page-in">
      <section className="px-6 md:px-12 pt-36 pb-16">
        <Reveal>
          <SectionHeader
            label="about."
            href={SITE.portfolio}
            linkText="Portfolio"
          />
        </Reveal>

        <Reveal>
          <p className="text-lg font-normal leading-relaxed text-dim max-w-[640px] mb-14">
            {SITE.aboutLong[0]}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card">
              <Image
                src={image1}
                alt="Creative"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card">
              <Image
                src={image2}
                alt="Working"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-lg font-normal leading-relaxed text-dim max-w-[640px] mb-20">
            {SITE.aboutLong[1]}
          </p>
        </Reveal>
      </section>

      <ServicesMarquee />

      <Reveal>
        <div className="flex justify-center gap-8 md:gap-12 px-6 md:px-12 pb-16 flex-wrap opacity-20">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[13px] font-semibold tracking-widest uppercase text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12 mb-20">
          <div className="rounded-2xl overflow-hidden bg-card">
            <Image
              src={image3}
              alt=""
              width={600}
              height={800}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-card">
            <Image
              src={image4}
              alt=""
              width={600}
              height={800}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </Reveal>

      <FaqSection />
      <Footer />
    </div>
  );
}
