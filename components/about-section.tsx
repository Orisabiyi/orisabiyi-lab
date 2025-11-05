import { about } from "@/lib/homepage-content";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="container mx-auto py-10 items-center flex gap-20 font-sora">
      <figure className="w-1/2">
        <Image
          src="/images/me-icon.svg"
          alt="About Me"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </figure>
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl">
          <span>About</span>
          <span className="font-bold text-primary"> Me</span>
        </h2>
        <p className="text-lg leading-relaxed">
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
