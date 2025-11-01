import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/orisabiyi_lab',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/DevOrisabiyi',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/orisabiyi',
  },
  {
    name: 'TikTok',
    icon: Linkedin,
    href: 'https://linkedin.com/in/orisabiyi',
  }
]

export default function Header() {
  return <header className="flex h-[80vh] pt-10 container mx-auto font-sora">
    <div className="w-[38%] self-end flex flex-col items-start gap-5">
      <h2 className="text-4xl flex flex-col gap-4 w-full">
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

      <ul className="flex items-center gap-5">
        {
          socialIcons.map(({ name, icon: Icon, href }) => (
            <li key={name} className="bg-primary p-3">
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
              >
                <Icon size={22} className="text-white transition-colors" />
              </Link>
            </li>
          ))
        }
      </ul>
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