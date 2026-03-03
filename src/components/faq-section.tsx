"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { faqs } from "@/data/constants";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 pb-20">
      <Reveal>
        <SectionHeader label="FAQs." />
      </Reveal>

      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i * 60}>
          <div
            className="border-b border-border cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex items-center justify-between py-5">
              <span className="text-sm font-medium text-foreground hover:text-dim transition-colors">
                {faq.question}
              </span>
              <div
                className={`w-[26px] h-[26px] rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === i ? "rotate-45 bg-card" : ""
                }`}
              >
                <Plus className="w-2.5 h-2.5" />
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                openIndex === i ? "max-h-[200px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-dim max-w-[560px]">
                {faq.answer}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
