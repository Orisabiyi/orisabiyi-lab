import sloMuse1 from "@/assets/projects/slo-muse/slo-muse-1.jpg";
import sloMuse2 from "@/assets/projects/slo-muse/slo-muse-2.jpg";
import sloMuse3 from "@/assets/projects/slo-muse/slo-muse-3.jpg";

import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: string;
  role: string;
  description: string;
  tags: string[];
  image?: StaticImageData;
  accent?: "yellow" | "red" | "blue";
  gallery?: StaticImageData[];
  link?: string;
  linkLabel?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "slo-muse",
    title: "Slō Muse",
    category: "E-Commerce",
    status: "Live client site",
    role: "Full-Stack Engineering",
    description:
      "A custom e-commerce platform for a luxury loungewear brand — not a Shopify theme. Payments run through Paystack with server-side verification and HMAC-SHA512 signed webhooks, so an order is only confirmed once the payment provider says so. Delivery costs are quoted live from the Fez Delivery API for both local and international shipping. The store owner gets real-time Web Push notifications the moment an order is placed or paid, and runs the business from an admin dashboard covering products with image uploads, order status tracking, and a promotions engine with percentage or fixed discounts, collection-scoped codes, expiry dates, and usage caps.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Paystack",
      "Fez API",
      "Web Push",
      "PWA",
    ],
    image: sloMuse1,
    gallery: [sloMuse2, sloMuse3],
    link: "https://slomusebrand.com",
  },
  {
    slug: "syntheos",
    title: "Syntheos",
    category: "AI / Social",
    status: "Hackathon winner",
    role: "Frontend & AI Integration",
    description:
      "Won the TPIA award at the Brainrot jia.seed hackathon, built with a team of three. Paste a draft social post and Syntheos returns an honest score, the specific lines that are weak, and three finished rewrites tuned to the platform you’re posting on. After the hackathon I rebuilt it properly: Gemini now returns schema-validated JSON instead of markdown, so a malformed response degrades into a sparse result instead of a crash; the draft is passed as user content, so a post containing “ignore your instructions” is treated as data; history moved from a single Firestore document to a paginated collection with a one-time migration; and auth runs on a proper loading / signed-in / signed-out state machine. Users can also track score trends per platform.",
    tags: ["React", "Vite", "Gemini", "Firebase", "Firestore", "Google OAuth"],
    accent: "yellow",
    link: "https://devpost.com/software/syntheos",
    linkLabel: "View on Devpost",
  },
  {
    slug: "spendlens",
    title: "SpendLens",
    category: "FinTech",
    status: "Live demo",
    role: "Full-Stack Engineering",
    description:
      "Snap a receipt or invoice and SpendLens extracts the merchant, date, line items, tax, currency, and payment method using Gemini vision, then categorizes the expense automatically. It first classifies the image and rejects anything that isn’t a receipt or invoice, and rates its confidence on every read so faded or damaged receipts don’t pass silently as clean data. Supports batch scanning of several receipts at once, editing and filtering expenses, CSV export, and an analytics dashboard with category breakdowns, top merchants, and spending trends.",
    tags: ["Next.js", "Gemini Vision", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary"],
    accent: "red",
    link: "https://spendlenss.vercel.app",
    github: "https://github.com/Orisabiyi/spendlens",
  },
  {
    slug: "askdocs",
    title: "AskDocs",
    category: "AI / RAG",
    status: "Live demo",
    role: "Full-Stack Engineering & RAG Architecture",
    description:
      "Upload PDFs, Word documents, or text files and ask questions in plain language. Answers stream back with numbered citations pointing to the exact passages they came from, so every claim can be checked. Documents are chunked with overlap, embedded with Gemini, and stored in Pinecone; retrieval is scoped to each user’s own documents and drops low-relevance matches so the model isn’t fed noise. For legal, financial, or compliance questions it also searches the web for current regulations in the user’s location, and keeps what the document says separate from what current law says.",
    tags: ["Next.js", "Gemini", "Pinecone", "PostgreSQL", "Prisma", "NextAuth", "RAG"],
    accent: "blue",
    link: "https://askdcs.vercel.app",
    github: "https://github.com/Orisabiyi/askdocs",
  },
];
