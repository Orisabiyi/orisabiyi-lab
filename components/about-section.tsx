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
          I&apos;m Orisabiyi David; a software engineer, designer, and product
          thinker based in Nigeria. I thrive at the intersection of code,
          creativity, and curiosity, building digital experiences that are both
          thoughtful and functional.
          <br />
          <br />
          Since starting my journey in 2015, I&apos;ve
          grown from creating static sites to engineering full-stack
          applications using modern tools like Next.js, TypeScript, NestJS, NodeJS
          TailwindCSS and many more. I care deeply about clean architecture,
          intuitive design, and writing performant, maintainable code.
          <br />
          <br />
          My long-term goal is to contribute to world-class products at a leading
          tech company solving meaningful problems at scale, collaborating
          with brilliant minds, and continuing to grow as a builder and thinker.
          <br />
          <br />
          When I&apos;m not deep in code, I&apos;m exploring design systems, experimenting
          with AI, or sharing my journey on Twitter and GitHub. Orisabiyi Lab is
          where I learn out loud, build boldly, and stay endlessly curious.
        </p>
      </div>
    </section>
  );
}
