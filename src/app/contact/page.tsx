"use client";

import { useState } from "react";
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

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}>
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

          {status === "sent" ?
            <div className="border-4 border-ink bg-neo-yellow p-6 text-center">
              <h4 className="text-xl font-black mb-2">Message Sent!</h4>
              <p className="text-sm opacity-75 mb-4">
                Thanks for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-neo bg-white cursor-pointer">
                Send Another &rarr;
              </button>
            </div>
            : <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-ink bg-paper text-sm font-medium placeholder:opacity-50 outline-none focus:shadow-neo-btn transition-shadow resize-none"
              />

              {status === "error" && (
                <div className="border-2 border-riso-red bg-riso-red/10 px-4 py-3">
                  <p className="text-sm font-bold text-riso-red">{errorMsg}</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className={`btn-neo bg-riso-red cursor-pointer ${status === "sending" ? "opacity-60 pointer-events-none" : ""
                  }`}>
                {status === "sending" ? "Sending..." : "Send Message \u2192"}
              </button>
            </div>
          }
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
                  className="group flex items-center gap-3 font-bold">
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
              className="text-sm font-bold hover:text-riso-red transition-colors break-all">
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
