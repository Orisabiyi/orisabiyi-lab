import sloMuse1 from "@/assets/projects/slo-muse-1.jpg";
import sloMuse2 from "@/assets/projects/slo-muse-2.jpg";
import sloMuse3 from "@/assets/projects/slo-muse-3.jpg";

import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  image: StaticImageData | string;
  gallery?: StaticImageData[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "slo-muse",
    title: "Slo Muse",
    category: "E-Commerce",
    year: "2024",
    role: "Fullstack Engineering",
    description:
      "A premium loungewear brand needed a full e-commerce presence — storefront, admin dashboard, and payment processing. I built the entire platform from scratch with Next.js 15 and Prisma, integrated OPay for payments, Uploadthing for image management, and added PWA support with push notifications. The admin dashboard lets the team manage products, orders, and promotions independently.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Zustand", "Uploadthing"],
    image: sloMuse1,
    link: "https://slomusebrand.com",
  },
  {
    slug: "syntheos",
    title: "Syntheos",
    category: "AI / Social",
    role: "Frontend & AI Integration",
    year: "2024",
    description:
      "Built at the Brainrot Jia.Seed Hackathon — and won. Syntheos analyzes social media posts using Gemini AI and gives content creators actionable suggestions to improve engagement. I handled OAuth integration, Firebase user data persistence, and prompt optimization for the AI feedback loop. The tool processes posts in real-time and returns structured improvement recommendations.",
    tags: ["React", "Gemini AI", "Firebase", "Tailwind CSS"],
    image: '',
    link: "https://github.com/Orisabiyi/syntheos",
  },
  {
    slug: "spendlens",
    title: "SpendLens",
    category: "FinTech",
    year: "2023",
    description:
      "Most expense trackers require manual input. SpendLens lets you snap a photo of any receipt and automatically extracts line items, totals, and categories using Gemini Vision. Built the OCR pipeline, expense categorization logic, and a dashboard that surfaces spending patterns over time.",
    tags: ["Next.js", "Gemini Vision", "OCR", "Neon", "Prisma"],
    role: "Fullstack Engineering",
    image: '',
    link: "",
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    category: "AI / NLP",
    year: "2023",
    description:
      "A RAG-powered chatbot that lets you upload documents and ask questions in plain English. I built the ingestion pipeline (PDF parsing, chunking, embedding via LangChain), vector storage with Pinecone, and a retrieval system that returns answers with source citations. Used as a case study in my Claude Ambassador application.",
    tags: ["Next.js", "LangChain", "Pinecone", "Gemini", "PostgreSQL"],
    role: "Fullstack Engineering & RAG Pipeline",
    image: '',
    link: "",
  },
];
