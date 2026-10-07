import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accents = {
  yellow: { bg: "bg-neo-yellow", text: "text-ink", dot: "rgba(13,13,13,0.14)" },
  red: { bg: "bg-riso-red", text: "text-white", dot: "rgba(255,255,255,0.22)" },
  blue: { bg: "bg-blueprint", text: "text-white", dot: "rgba(255,255,255,0.22)" },
} as const;

interface ProjectCoverProps {
  project: Project;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  size?: "card" | "hero";
}

export function ProjectCover({
  project,
  className,
  imageClassName,
  priority,
  size = "card",
}: ProjectCoverProps) {
  if (project.image) {
    return (
      <div className={cn("aspect-video bg-paper overflow-hidden", className)}>
        <Image
          src={project.image}
          alt={project.title}
          width={size === "hero" ? 1200 : 700}
          height={size === "hero" ? 675 : 394}
          priority={priority}
          className={cn("w-full h-full object-cover", imageClassName)}
        />
      </div>
    );
  }

  const accent = accents[project.accent ?? "yellow"];

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden flex flex-col justify-between",
        size === "hero" ? "aspect-[16/7] md:aspect-[3/1] p-6 md:p-10" : "aspect-video p-6",
        accent.bg,
        accent.text,
        className
      )}
      style={{
        backgroundImage: `radial-gradient(${accent.dot} 1.5px, transparent 1.5px)`,
        backgroundSize: "14px 14px",
      }}
    >
      <span className="self-start px-2 py-0.5 border-2 border-ink bg-white text-ink text-[11px] font-bold uppercase tracking-widest">
        {project.category}
      </span>
      <span
        className={cn(
          "font-display font-black leading-[0.85] tracking-[-0.03em] transition-transform duration-500",
          size === "hero" ? "text-[clamp(48px,9vw,110px)]" : "text-[clamp(44px,7vw,72px)]",
          imageClassName
        )}
        style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
      >
        {project.title}
        <span className={project.accent === "red" ? "text-ink" : "text-riso-red"}>.</span>
      </span>
      <span className="absolute top-6 right-6 w-4 h-4 bg-ink" />
    </div>
  );
}
