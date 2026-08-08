import { Reveal } from "@/components/reveal";
import { techStack } from "@/data/constants";
import Link from "next/link";

export function StackPreview() {
  const totalCount = Object.values(techStack).flat().length;

  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <div className="border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
          <p className="text-xs text-muted tracking-wide mb-1">Stack</p>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Programming
          </h3>
          <p className="text-3xl font-black text-foreground">{totalCount}</p>
          <p className="text-xs text-muted mt-0.5 mb-3">
            technologies in active use
          </p>
          <Link
            href="/stack"
            className="text-sm text-accent hover:underline underline-offset-2"
          >
            View Stack →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}