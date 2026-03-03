"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";

interface WorkCardProps {
  project: Project;
  index?: number;
}

export function WorkCard({ project, index = 0 }: WorkCardProps) {
  return (
    <Reveal delay={index * 100}>
      <Link href={`/works/${project.slug}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-card">
          <div className="absolute inset-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 z-[1]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
            <h3 className="text-lg md:text-2xl font-semibold text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="absolute top-5 right-5 z-[3] w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 translate-x-[-6px] translate-y-[6px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
