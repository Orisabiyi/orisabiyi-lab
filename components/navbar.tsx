import { Download } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact Me', href: '#contact-me' },
]

export default function Navbar() {
  return (
    <nav className="flex items-center container mx-auto w-full py-6 font-sora font-medium text-primary">
      <h1 className="mr-auto text-lg">Orisabiyi Lab</h1>

      <ul className="flex items-center gap-10 text-base">
        {
          navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))
        }
      </ul>

      <button className="flex items-center gap-4 ml-auto bg-primary text-white px-4 py-2 hover:bg-purple-700 transition-colors">
        <span>Resume</span>
        <Download size={20} />
      </button>
    </nav>
  )
}