"use client";

import { SITE } from "@/data/constants";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const socials = [
  { label: "GitHub", href: SITE.social.GitHub, icon: Github },
  { label: "LinkedIn", href: SITE.social.LinkedIn, icon: Linkedin },
  { label: "Twitter", href: SITE.social.Twitter, icon: Twitter },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export default function ContactPage() {
  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          Contact<span className="text-riso-red">.</span>
        </h1>
        <p className="text-base md:text-lg opacity-75 max-w-[52ch]">
          Got an interesting project or opportunity? Let&apos;s talk.
        </p>
      </section>

      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Contact form */}
        <div className="md:col-span-2 card-neo">
          <h3 className="text-2xl font-black mb-6">Send a Message</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow resize-none"
            />
            <button className="btn-neo bg-riso-red cursor-pointer">
              Send Message &rarr;
            </button>
          </div>
        </div>

        {/* Connect sidebar */}
        <div className="card-neo !bg-neo-yellow">
          <h3 className="text-2xl font-black mb-4">Connect</h3>
          <ul className="space-y-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-bold"
                >
                  <span className="relative flex-shrink-0 w-10 h-10 border-2 border-ink bg-white shadow-neo-btn flex items-center justify-center transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 bg-riso-red border border-ink" />
                  </span>
                  <span className="group-hover:underline">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t-2 border-ink mt-6 pt-4">
            <p className="text-sm font-bold opacity-75">
              Or email me directly:
            </p>
            <Link
              href={`mailto:${SITE.email}`}
              className="text-sm font-bold hover:text-riso-red transition-colors break-all"
            >
              {SITE.email}
            </Link>
          </div>

          <div className="border-t-2 border-ink mt-6 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-500 border-2 border-ink" />
              <span className="text-sm font-bold">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}