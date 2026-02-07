'use client';

import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Socials = dynamic(() => import("./socials"));

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:min-h-[80vh] px-5 md:px-0 md:pt-20 pb-5 md:py-32 container mx-auto font-sora">
      <div className="md:w-[38%] self-end mt-3 md:mt-0 flex flex-col gap-3 md:gap-6 order-1 md:order-0">
        <h2 className="text-xl md:text-3xl 2xl:text-4xl flex flex-col md:gap-2 2xl:gap-4 w-full">
          <span className="font-semibold text-blue-800">
            Hello I&apos;m Orisabiyi David.
          </span>
          <span>
            A{" "}
            <span>
              Software Engineer, Creative thinker and Builder
            </span>
          </span>
          <span>
            Based in{" "}
            <span>Nigeria.</span>
          </span>
        </h2>

        <p className="text-sm md:text-xl mb-2">
          I am Orisabiyi David, a curios builder, thoughtful designer and
          lifelong tinkerer. At{" "}
          <span className="font-semibold">Orisabiyi Lab,</span> I explore the
          edges of software, design and AI.
        </p>
        <Socials />
      </div>

      <figure className="h-32 self-end md:self-center md:w-full md:h-auto md:flex-1 flex items-center justify-center">
        <Image
          src="/images/davd-hero.png"
          alt="Orisabiyi Lab"
          width={600}
          height={600}
          loading="eager"
          preload={true}
          fetchPriority="high"
          className="w-auto h-32 md:w-full md:h-auto block object-cover rounded-full shadow-md md:shadow-none md:rounded-none"
        />
      </figure>
    </header>
  );
}
