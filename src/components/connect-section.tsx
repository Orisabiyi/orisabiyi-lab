import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/constants";
import Link from "next/link";

const links = [
  { label: "GitHub", href: SITE.social.GitHub },
  { label: "LinkedIn", href: SITE.social.LinkedIn },
  { label: "Twitter", href: SITE.social.Twitter },
  { label: "Medium", href: SITE.social.Medium },
  { label: "Email", href: `mailto:${SITE.email}` },
];

export function ConnectSection() {
  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
        <ul className="flex flex-col gap-1.5">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section >
  );
}
