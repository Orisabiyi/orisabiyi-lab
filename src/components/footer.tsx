import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/data/constants";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-20 pb-10 border-t border-border">
      <Reveal>
        <p className="text-xl md:text-2xl lg:text-[32px] font-semibold leading-snug max-w-[540px] mb-7 text-foreground">
          Curious about what we can create together? Let&apos;s bring something
          extraordinary to life!
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3 rounded-full text-[13px] font-semibold hover:scale-[0.97] hover:opacity-85 transition-all mb-14"
        >
          Get in Touch
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </Reveal>

      <div className="flex flex-col md:flex-row justify-between md:items-end pt-7 border-t border-border gap-7">
        <div>
          <div className="flex gap-5">
            {Object.entries(SITE.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-dim hover:text-foreground transition-colors capitalize"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-dim mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
            Available For Work
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-xs text-muted">
            <a href={`mailto:${SITE.email}`} className="text-dim hover:text-foreground transition-colors">
              {SITE.email}
            </a>
          </p>
          <p className="text-xs text-muted mt-1.5">
            All rights reserved, Orisabiyi Lab &copy;{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
