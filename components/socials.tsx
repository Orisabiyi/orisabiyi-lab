import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FaMedium } from "react-icons/fa";

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
    icon: FaMedium,
    href: 'https://x.com/DevOrisabiyi',
  }
]

export default function Socials() {
  return (
    <ul className="flex items-center gap-5 w-full">
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
  )
}