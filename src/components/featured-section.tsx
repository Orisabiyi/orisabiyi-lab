import { Reveal } from "@/components/reveal";
import Link from "next/link";

export function FeaturedSection() {
  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <p className="text-xs text-muted tracking-wide mb-3">Community</p>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Common Chronicles
        </h3>
        <p className="text-sm text-dim leading-relaxed max-w-lg mb-4">
          A community for builders, creatives, and storytellers who make things
          and tell real stories. We host events, share knowledge, and build in
          public.
        </p>
        <Link
          href="https://commonchronicles.live/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline underline-offset-2"
        >
          Learn More →
        </Link>
      </Reveal>
    </section >
  );
}