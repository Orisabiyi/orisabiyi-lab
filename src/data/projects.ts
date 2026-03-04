import sloMuse1 from "@/assets/projects/slo-muse-1.jpg";
import sloMuse2 from "@/assets/projects/slo-muse-2.jpg";
import sloMuse3 from "@/assets/projects/slo-muse-3.jpg";

import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
  image: StaticImageData | string;
  gallery?: StaticImageData[];
}

export const projects: Project[] = [
  {
    slug: "slo-muse",
    title: "Slo Muse",
    category: "E-Commerce",
    year: "2024",
    description: "A luxury e-commerce platform for premium loungewear. Built with Next.js 15, TypeScript, Prisma ORM, and Zustand. Features a full customer storefront and admin dashboard with Uploadthing image management and PWA support.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Zustand", "Uploadthing"],
    link: "https://slomusebrand.com",
    image: sloMuse1,
    gallery: [
      sloMuse1,
      sloMuse2,
      sloMuse3,
    ],
  },
  {
    slug: "syntheos",
    title: "Syntheos",
    category: "AI / Social",
    year: "2024",
    description:
      "Hackathon-winning AI tool that optimizes social media posts for better engagement. Analyzes content using Gemini AI and provides actionable suggestions for content creators and marketers.",
    tags: ["React", "Gemini AI", "Firebase", "Tailwind CSS"],
    link: "https://syntheos.vercel.app",
    image: "https://framerusercontent.com/images/Pl6igXP6A2U3lc1GgSf66XHwWk.png",
  },
  {
    slug: "spendlens",
    title: "SpendLens",
    category: "FinTech",
    year: "2023",
    description: "An AI-powered receipt scanner that extracts and categorizes expenses automatically. Uses computer vision and OCR to parse receipts, providing spending insights and financial tracking.",
    tags: ["AI/ML", "OCR", "Computer Vision", "React"],
    link: "https://spendlenss.vercel.app",
    image: "https://framerusercontent.com/images/KYBjtE4r5mFrdBghaxkUuVzA8w.png",
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    category: "AI / NLP",
    year: "2023",
    description:
      "A RAG-powered chatbot for intelligent document querying. Upload documents and ask questions in natural language to get accurate, context-aware answers with source citations.",
    tags: ["RAG", "LLM", "Vector DB", "NLP"],
    link: "https://askdcs.vercel.app",
    image: "https://framerusercontent.com/images/4fwQ3dWzqL26A6UC8Q6DpdUIwY.png",
  },
];
