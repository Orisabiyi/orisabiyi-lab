"use client";

import { Reveal } from "@/components/reveal";
import { CopyEmail } from "@/components/copy-email";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="animate-page-in">
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-36 pb-16">
        <h1 className="font-black uppercase text-[clamp(48px,10vw,140px)] leading-[0.92] tracking-[-0.04em] text-foreground mb-9 opacity-0 animate-name-in">
          SHOOT A<br />REQUEST
        </h1>

        <Reveal>
          <CopyEmail className="mb-7" />
        </Reveal>

        <Reveal delay={80}>
          <div className="max-w-[560px] flex flex-col gap-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-neutral-400 placeholder:text-muted"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-neutral-400 placeholder:text-muted"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-neutral-400 placeholder:text-muted"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="bg-transparent border border-border rounded-xl px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-neutral-400 placeholder:text-muted resize-none"
            />
            <button className="inline-flex items-center justify-center gap-2 bg-foreground text-background rounded-full px-9 py-3.5 text-sm font-semibold w-fit mt-2 hover:scale-[0.97] hover:opacity-85 transition-all cursor-pointer">
              Send It!
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
