import Link from "next/link";

const alsoLinks = [
  { href: "/about", label: "About" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
        <span className="text-xs uppercase tracking-widest font-bold text-riso-red">
          Also
        </span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-sm">
          {alsoLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-riso-red transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="md:ml-auto text-xs opacity-60 flex flex-col md:items-end gap-1">
          <div>&copy; {new Date().getFullYear()} Orisabiyi David</div>
        </div>
      </div>
    </footer>
  );
}