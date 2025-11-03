import Socials from "./socials";

export default function ContactSection() {
  return (
    <section className="flex items-center gap-10 py-10 container mx-auto font-sora">
      <form action="" className="w-1/3 flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="w-full border-2 border-gray-500 px-4 py-2" />
        <input type="email" placeholder="Email" className="w-full border-2 border-gray-500 px-4 py-2" />
        <textarea placeholder="Your website (if exists)" className="w-full border-2 border-gray-500 px-4 py-2 resize-none h-32" />

        <div className="flex items-stretch gap-5">
          <button type="submit" className="w-1/2 bg-black text-white font-semibold">Get In Touch</button>
          <Socials />
        </div>
      </form>

      <div className="flex-1"></div>
    </section>
  );
}
