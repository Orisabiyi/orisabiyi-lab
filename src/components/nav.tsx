"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-white/90 backdrop-blur-xl">
        <Link
          href="/"
          className="text-base font-extrabold tracking-[1.5px] uppercase text-foreground"
        >
          ORISABIYI
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="grid grid-cols-2 gap-1 p-1 cursor-pointer"
          aria-label="Menu"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-foreground" />
          ))}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/5" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 w-80 max-w-full h-screen bg-background z-[51] shadow-[-4px_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 p-1 cursor-pointer text-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col gap-0 pt-20 px-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[15px] font-medium border-b border-border transition-colors ${
                pathname === href ? "text-foreground" : "text-dim hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
