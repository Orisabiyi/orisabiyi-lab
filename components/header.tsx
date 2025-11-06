import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Socials = dynamic(() => import("./socials"));


export default function Header() {
  return <header className="flex flex-col md:flex-row md:h-[90vh] 2xl:h-[80vh] pt-20 pb-5 md:py-10 md:pt-22 container mx-auto font-sora">
    <div className="md:w-[38%] p-10 md:p-0 self-end flex flex-col items-start gap-3 md:gap-5 order-1 md:order-0">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl flex flex-col gap-1 md:gap-2 2xl:gap-4 w-full">
        <span className="font-semibold text-primary">
          Hello I&apos;m Orisabiyi David.
        </span>
        <span>
          A{" "}
          <span className="text-primary font-semibold">
            Software Engineer, Creative thinker and Builder
          </span>
        </span>
        <span>
          Based in{" "}
          <span className="font-semibold text-primary">Nigeria.</span>
        </span>
      </h2>

      <p className="text-base md:text-xl">
        I am Orisabiyi David, a curios builder, thoughtful designer and
        lifelong tinkerer. At <span className="font-semibold">Orisabiyi Lab,</span> I explore the
        edges of software, design and AI.
      </p>
      <Socials />
    </div>

    <figure className="w-full md:flex-1 flex items-center justify-center">
      <Image
        src="/images/hero-icon-banner.svg"
        alt="Orisabiyi Lab"
        width={600}
        height={600}
        loading="eager"
        fetchPriority="high"
        priority={true}
        className="w-full h-full block object-cover"
      />
    </figure>
  </header>
}