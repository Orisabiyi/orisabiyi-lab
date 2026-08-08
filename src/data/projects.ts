import sloMuse1 from "@/assets/projects/slo-muse/slo-muse-1.jpg";

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
      "Built a production e-commerce platform from scratch for a luxury loungewear brand \u2014 not a Shopify theme, a full custom system. Designed the inventory layer with optimistic locking to prevent overselling during concurrent checkout sessions. Integrated OPay with idempotent webhook handlers and automatic retry logic for failed payment notifications. The admin dashboard supports real-time order tracking, bulk product management, and role-based access. Achieved sub-2s LCP on throttled 3G connections through aggressive ISR caching, optimized image pipelines, and edge-first rendering.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "OPay",
      "PWA",
    ],
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
      "Hackathon-winning AI tool built in under 48 hours at the Brainrot Jia.Seed Hackathon. Syntheos ingests social media posts and runs them through a multi-stage Gemini AI pipeline \u2014 content analysis, audience targeting, and engagement scoring \u2014 then returns structured, actionable optimization suggestions in real-time. Designed the prompt chaining architecture to minimize hallucination and keep recommendations grounded in platform-specific best practices. Handled OAuth flows, Firebase session persistence, and streaming responses for instant feedback.",
    tags: [
      "React",
      "Gemini AI",
      "Firebase",
      "Prompt Engineering",
      "OAuth",
    ],
    image: "",
    github: "https://github.com/Orisabiyi/syntheos",
  },
  {
    slug: "spendlens",
    title: "SpendLens",
    category: "FinTech",
    year: "2023",
    role: "Fullstack Engineering",
    description:
      "Most expense trackers require manual input \u2014 SpendLens eliminates that entirely. Point your camera at any receipt and the system extracts line items, totals, tax, and merchant data using a Gemini Vision OCR pipeline with custom post-processing to handle crumpled receipts, faded ink, and non-standard formats. Built an expense categorization engine that learns from user corrections over time. The analytics dashboard surfaces spending patterns, category breakdowns, and anomaly detection across custom date ranges with server-side aggregation for fast queries on large datasets.",
    tags: [
      "Next.js",
      "Gemini Vision",
      "OCR Pipeline",
      "Neon",
      "Prisma",
      "Analytics",
    ],
    image: "",
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    category: "AI / NLP",
    year: "2023",
    role: "Fullstack Engineering & RAG Architecture",
    description:
      "A retrieval-augmented generation system that lets users query uploaded documents in natural language and get accurate, cited answers \u2014 not hallucinated summaries. Built the full ingestion pipeline: PDF parsing with layout-aware chunking, semantic embedding via LangChain, and vector storage in Pinecone with metadata filtering. The retrieval layer uses hybrid search (dense + sparse) with reranking to surface the most relevant chunks before passing them to the LLM. Every response includes source citations with page numbers so users can verify answers against the original document. Designed the system to handle documents up to 200 pages without degrading response quality.",
    tags: [
      "Next.js",
      "LangChain",
      "Pinecone",
      "Gemini",
      "PostgreSQL",
      "RAG",
      "Vector Search",
    ],
    image: "",
  },
];