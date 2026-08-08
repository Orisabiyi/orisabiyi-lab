import { Reveal } from "@/components/reveal";
import { stats } from "@/data/constants";
import Link from "next/link";

const statCards = [
  { ...stats[0], label2: "Years Shipping", href: "/about" },
  { ...stats[1], label2: "Projects Delivered", href: "/works" },
  { ...stats[2], label2: "Payment Gateways", href: "/works" },
  { ...stats[3], label2: "Hackathon Won", href: "/works/syntheos" },
];

export function StatsGrid() {
  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {statCards.map((stat, i) => (
            <Link
              key={i}
              href={stat.href}
              className="group border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <span className="block text-2xl md:text-3xl font-black text-foreground tracking-tight">
                {stat.number}
              </span>
              <span className="block text-xs text-muted mt-1.5 group-hover:text-accent transition-colors">
                {stat.label}
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}