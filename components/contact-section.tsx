import Link from "next/link";
import Socials from "./socials";

export default function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-5 md:py-10 container mx-auto font-sora">
      <form action="" className="md:w-1/3 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-2 border-gray-500 px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-2 border-gray-500 px-4 py-2"
        />
        <textarea
          placeholder="Your website (if exists)"
          className="w-full border-2 border-gray-500 px-4 py-2 resize-none h-32"
        />

        <div className="flex items-stretch gap-5">
          <button
            type="submit"
            className="w-1/2 bg-black text-white font-semibold">
            Get In Touch
          </button>
          <Socials />
        </div>
      </form>

      <div className="md:flex-1 space-y-2 md:space-y-4 px-10 md:px-0">
        <h2 className="flex flex-col text-3xl md:text-4xl font-bold">
          <span>Let&apos;s <span className="text-primary">talk</span> for</span>
          <span>Something <span className="text-primary">special</span></span>
        </h2>
        <p className="text-sm md:text-base w-4/5">
          I care about creating experiences that feel good to use. Intuitive,
          engaging and memorable. Whether it&apos;s through design, code or
          experimentation, I&apos;m always looking for ways to make digital
          interactions more meaningful and human centered
        </p>

        <div className="space-y-1">
          <h3 className="text-lg md:text-2xl">
            <Link href='mailto:orisabiyidavid@gmail.com'>orisabiyidavid@gmail.com</Link>
          </h3>
          <p className="text-base md:text-xl">
            <Link href='tel:+2349166331550'>+234 916 6331 550</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
