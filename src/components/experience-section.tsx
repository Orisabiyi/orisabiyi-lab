import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Fez Delivery",
    url: "https://fezdelivery.co",
    period: "Jan 2025 — Present",
    description:
      "Leading frontend architecture for a logistics platform serving businesses across Nigeria. Built a route optimization microservice with self-hosted OSRM and traffic-weighted heuristics. Migrated address systems to Google Places SDK.",
  },
  {
    role: "Frontend Engineer",
    company: "eCorpIT (via Pitch Insights Consulting)",
    period: "Jan 2025 — Jan 2026",
    description:
      "Delivered client-facing web applications on contract. Integrated payment gateways (Paystack, OPay, Interswitch) and built reusable component libraries used across multiple projects.",
  },
  {
    role: "Fullstack Developer",
    company: "Freelance & Community",
    period: "2021 — 2024",
    description:
      "Shipped products across e-commerce, fintech, and AI — including a luxury storefront, an AI receipt scanner, and a RAG document chatbot. Founded Common Chronicles, a community for builders and storytellers.",
  },
];

export function ExperienceSection() {
  return (
    <section className="px-5 md:px-12 pb-20">
      <Reveal>
        <SectionHeader label="experience." />
      </Reveal>
      <div className="flex flex-col gap-0">
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-6 border-b border-border">
              <span className="text-xs font-medium text-muted tracking-wide">
                {exp.period}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {exp.role}
                  <span className="text-dim font-normal">
                    {" · "}
                    {exp.url ? (
                      <Link
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </span>
                </h3>
                <p className="text-sm text-dim leading-relaxed mt-2 max-w-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section >
  );
}