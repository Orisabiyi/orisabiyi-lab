import { about } from "@/lib/homepage-content";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="container mx-auto py-10 items-center flex flex-col md:flex-row gap-20 font-sora">
      <figure className="px-10 md:p-0 md:w-1/2 border-2 border-primary rounded-2xl overflow-hidden">
        <Image
          src="/images/david-pic.png"
          // src="/images/me-icon.svg"
          alt="About Me"
          width={1200}
          height={600}
          loading="lazy"
          fetchPriority="low"
          priority={false}
          className="w-full h-auto scale-125 transform translate-y-8 about-img"
        />
      </figure>
      <div className="flex-1 flex flex-col gap-6 px-10 md:p-0">
        <h2 className="text-4xl">
          <span>About</span>
          <span className="font-bold text-primary"> Me</span>
        </h2>
        <p className="text-sm leading-relaxed">
          {about.body.replace(/<br \/>/g, "\n").replace(/<\/?p>/g, "").split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
