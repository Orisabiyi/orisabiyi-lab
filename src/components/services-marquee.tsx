import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/data/constants";

export function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <section className="pb-20 overflow-hidden">
      <div className="px-6 md:px-12">
        <Reveal>
          <SectionHeader label="services." />
        </Reveal>
      </div>
      <div className="overflow-hidden py-5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-8 whitespace-nowrap text-xl md:text-3xl lg:text-[40px] font-bold uppercase text-muted hover:text-foreground transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
