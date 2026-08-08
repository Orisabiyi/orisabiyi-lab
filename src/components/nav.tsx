"use client";

import { useState } from "react";
import Link from "next/link";

const primaryLinks = [
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/stack", label: "Stack" },
];

const alsoLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b-4 border-ink bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center gap-6">
          <Link
            href="/"
            className="font-display font-black text-xl md:text-2xl leading-none hover:text-riso-red transition-colors"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 48, 'WONK' 1" }}
          >
            Orisabiyi David
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-baseline gap-6">
            {primaryLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-semibold hover:text-riso-red transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden px-3 py-2 border-2 border-ink bg-neo-yellow font-bold text-xl leading-none cursor-pointer"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col mt-4 pb-2 md:hidden">
            {primaryLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-semibold py-2 border-b border-ink/20"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 pb-1 text-xs uppercase tracking-widest font-bold opacity-60">
              Also
            </div>
            {alsoLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 1