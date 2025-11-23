"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "About Me", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact Me", href: "#contact-me" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-white/50 backdrop-blur w-full z-40">
        <div className="flex items-center justify-center container mx-auto py-6 px-10 md:px-0 font-sora font-medium text-primary">
          <h1 className="mr-auto text-xl font-semibold">
            <Link href="/">Orisabiyi Lab</Link>
          </h1>

          <ul className="hidden md:flex items-center gap-10 text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <button className="hidden md:flex items-center gap-4 ml-auto bg-primary text-white px-4 py-2 hover:bg-purple-700 transition-colors">
            <span>Resume</span>
            <Download size={20} />
          </button>
          <button className="md:hidden" onClick={handleToggle}>
            {!isOpen ? <Menu size={25} /> : <X size={25} />}
          </button>
        </div>
      </nav>
      {isOpen && <MobileMenu />}
    </>
  );
}

function MobileMenu() {
  return (
    <div className="fixed top-[72px] left-0 bg-white flex flex-col items-center justify-center gap-10 font-sora text-primary md:hidden w-full h-full">
      <ul className="flex flex-col items-center gap-10 text-lg bg-white">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-4 bg-primary text-white px-4 py-2 hover:bg-purple-700 transition-colors">
        <span>Resume</span>
        <Download size={20} />
      </button>
    </div>
  );
}
