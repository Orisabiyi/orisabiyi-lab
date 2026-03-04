export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "slo-muse",
    title: "Slo Muse",
    category: "E-Commerce",
    year: "2024",
    description: "A luxury e-commerce platform for premium loungewear. Built with Next.js 15, TypeScript, Prisma ORM, and Zustand. Features a full customer storefront and admin dashboard with Uploadthing image management and PWA support.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Zustand", "Uploadthing"],
    image: "https://framerusercontent.com/images/z9OqV4u4eNKy1lUREVgOWq7XoA.jpeg",
    gallery: [
      "/projects/slo-muse-1.png",
      "/projects/slo-muse-2.png",
      "/projects/slo-muse-3.png",
    ],
  },
  {
    slug: "orion",
    title: "Orion",
    category: "AI Agent",
    year: "2024",
    description: "A Google Sheets agent powered by Gemini AI with a chat-first interface. Enables natural language database queries, intelligent calculation, and sheet automation with smart API rate limiting.",
    tags: ["Gemini AI", "Google Sheets", "NLP", "Chat UI"],
    image: "https://framerusercontent.com/images/Pl6igXP6A2U3lc1GgSf66XHwWk.png",
  },
  {
    slug: "spendlens",
    title: "SpendLens",
    category: "FinTech",
    year: "2023",
    description: "An AI-powered receipt scanner that extracts and categorizes expenses automatically. Uses computer vision and OCR to parse receipts, providing spending insights and financial tracking.",
    tags: ["AI/ML", "OCR", "Computer Vision", "React"],
    image: "https://framerusercontent.com/images/KYBjtE4r5mFrdBghaxkUuVzA8w.png",
  },
  {
    slug: "documind",
    title: "DocuMind",
    category: "AI/ML",
    year: "2023",
    description: "A RAG-powered chatbot that enables intelligent document querying. Upload documents and ask questions in natural language - get accurate, context-aware answers with source citations.",
    tags: ["RAG", "LLM", "Vector DB", "NLP"],
    image: "https://framerusercontent.com/images/4fwQ3dWzqL26A6UC8Q6DpdUIwY.png",
  },
];
