import { Reveal } from "@/components/reveal";
import { experience } from "@/data/constants";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="px-5 md:px-12 pb-16">
      <Reveal>
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Current Roles
        </h3>
      </Reveal>
      <div className="flex flex-col gap-8">
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 80}>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {"url" in exp && exp.url ?
                  <Link
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-2">
                    {exp.org}
                  </Link>
                  : exp.org}
              </h4>
              <p className="text-sm text-dim mt-0.5">{exp.role}</p>
              <p className="text-sm text-dim leading-relaxed mt-2 max-w-lg">
                {exp.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
