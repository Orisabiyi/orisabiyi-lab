import type { Metadata } from "next";
import { techStack } from "@/data/constants";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Technologies in active production use — TypeScript, Next.js, Node.js, PostgreSQL, Prisma, LangChain, Pinecone, Cloudflare Workers, and more.",
  openGraph: {
    title: "Stack | Orisabiyi David",
    description:
      "Technologies in active production use — TypeScript, Next.js, Node.js, PostgreSQL, Prisma, LangChain, and more.",
  },
};
export default function StackPage() {
  const totalTech = Object.values(techStack).flat().length;

  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <h1
          className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(48px,10vw,140px)] mb-4"
          style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
        >
          Stack<span className="text-riso-red">.</span>
        </h1>
        <p className="text-base md:text-lg opacity-75 max-w-[52ch]">
          <span
            className="font-display font-black text-3xl mr-2"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
          >
            {totalTech}
          </span>
          technologies in active use across production projects.
        </p>
      </section>

      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      {/* Legend */}
      <div className="card-neo !bg-neo-yellow mb-6">
        <h3 className="text-sm font-black mb-2">Legend</h3>
        <div className="flex gap-6 text-sm font-semibold">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-ink bg-white" />
            Actively using
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-ink bg-blueprint" />
            Learning
          </span>
        </div>
      </div>

      {/* Stack categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="card-neo">
            <h2 className="text-xl font-black mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => {
                const isLearning = "learning" in item && item.learning;
                return (
                  <span
                    key={item.name}
                    className={`text-sm font-bold px-3 py-1.5 border-2 border-ink ${isLearning
                      ? "bg-blueprint text-white"
                      : "bg-paper"
                      }`}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}