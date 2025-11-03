import Image from "next/image";
import Socials from "./socials";


export default function Header() {
  return <header className="flex h-[90vh] 2xl:h-[80vh] py-10 container mx-auto font-sora">
    <div className="w-[38%] self-end flex flex-col items-start gap-5">
      <h2 className="text-3xl 2xl:text-4xl flex flex-col gap-2 2xl:gap-4 w-full">
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

      <p className="text-xl">
        I am Orisabiyi David, a curios builder, thoughtful designer and
        lifelong tinkerer. At <span className="font-semibold">Orisabiyi Lab,</span> I explore the
        edges of software, design and AI.
      </p>
      <Socials />
    </div>

    <figure className="flex-1">
      <Image
        src="/images/hero-icon-banner.svg"
        alt="Orisabiyi Lab"
        width={600}
        height={600}
        className="w-full h-full inline-block object-cover"
      />
    </figure>
  </header>
}