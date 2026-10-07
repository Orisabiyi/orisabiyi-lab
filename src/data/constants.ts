export const SITE = {
  name: "Orisabiyi David",
  email: "orisabiyidavid@gmail.com",
  title: "Engineer \u00b7 Builder \u00b7 Creator",
  bio: "Software engineer in Lagos. I like to understand how things work, break them apart, and build something better. I do my best work where the edge cases are harder than the happy path: payment flows that fail gracefully, a routing engine tuned for how Lagos traffic actually moves, and AI pipelines that cite their sources instead of guessing.",
  aboutLong: [
    "I'm Orisabiyi David, a full-stack software engineer based in Lagos. For 4+ years I've built software that has to hold up in production, not just in demos. At Fez Delivery I built a route optimization engine on self-hosted OSRM because standard map data didn't reflect how Lagos traffic actually moves, and an address flow that cut order abandonment by 30%. Before that, I shipped platforms serving 2M+ users and brought API responses down from 10 seconds to under one.",
    "I read the business problem before I read the docs, and I only reach for the off-the-shelf answer when it actually fits. That's taken me from payment integrations across multiple gateways to RAG pipelines that cite their sources, and to a hackathon-winning AI tool built in under 48 hours.",
    "Outside work, I run Common Chronicles, a community for builders who make things and tell honest stories about them. I write about production engineering on Medium and about everything else in my Journal. I'm open to remote roles worldwide.",
  ],
  social: {
    GitHub: "https://github.com/orisabiyi",
    LinkedIn: "https://linkedin.com/in/orisabiyi",
    Twitter: "https://x.com/DevOrisabiyi",
    Medium: "https://medium.com/@Orisabiyidavid",
    Email: "mailto:orisabiyidavid@gmail.com",
  },
} as const;

export type Experience = {
  org: string;
  url?: string;
  role: string;
  type?: string;
  client?: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    org: "Fez Delivery",
    url: "https://fezdelivery.co",
    role: "Senior Software Engineer",
    type: "Full-time",
    current: true,
    description:
      "Logistics platform serving businesses across Nigeria. Built a route optimization microservice on self-hosted OSRM tuned for Lagos traffic, a multi-layer address system, and payment integrations across consumer and B2B products.",
    highlights: ["−30% order abandonment", "2× monthly orders", "+20–25% team velocity"],
  },
  {
    org: "eCorpIT",
    role: "Full-Stack Engineer",
    type: "Full-time",
    description:
      "Shipped products across finance, healthcare, and payments in a lean team, owning frontend, backend services, and deployment.",
    highlights: ["2M+ users", "API 10s → <1s", "−80% page load", "~50% lower dev costs"],
  },
  {
    org: "Pitch Insight Consulting",
    client: "Black Founder Network",
    role: "Software Engineer / Consultant",
    description:
      "Rebuilt the Black Founder Network platform from new Figma designs in Laravel and InertiaJS, with full accessibility and multi-language support.",
    highlights: ["Ground-up rebuild", "WCAG compliant", "Multi-language"],
  },
  {
    org: "Global Banking and Finance",
    role: "Full-Stack Engineer",
    type: "Contract",
    description:
      "Rebuilt a high-traffic financial news platform, migrating it from WordPress to Next.js, Node.js, Sanity CMS, and MongoDB.",
    highlights: ["Zero content loss", "+25% engagement", "−15% bounce rate", "99% Lighthouse"],
  },
];

export const stats = [
  { number: "4+", label: "Years Shipping", href: "/about" },
  { number: "10+", label: "Projects Delivered", href: "/works" },
  { number: "5", label: "Payment Gateways", href: "/works" },
  { number: "1", label: "Hackathon Won", href: "/works/syntheos" },
] as const;

export const techStack = {
  "Programming Languages": [
    { name: "TypeScript", active: true },
    { name: "JavaScript", active: true },
    { name: "Python", active: true },
    { name: "C#", active: true },
  ],
  "Frameworks & Libraries": [
    { name: "Next.js", active: true },
    { name: "React", active: true },
    { name: "React Native", active: true },
    { name: "Node.js", active: true },
    { name: "Fastify", active: true },
    { name: "Express", active: true },
    { name: "Hono", active: true },
    { name: "Framer Motion", active: true },
    { name: "Tailwind CSS", active: true },
  ],
  "Databases & ORMs": [
    { name: "PostgreSQL", active: true },
    { name: "MongoDB", active: true },
    { name: "Prisma", active: true },
    { name: "Drizzle", active: true },
    { name: "Neon", active: true },
  ],
  "AI & ML": [
    { name: "Gemini", active: true },
    { name: "LangChain", active: true },
    { name: "Pinecone", active: true },
    { name: "Groq", active: true },
    { name: "RAG Pipelines", active: true },
  ],
  "Cloud & Infrastructure": [
    { name: "Vercel", active: true },
    { name: "Cloudflare Workers", active: true },
    { name: "Docker", active: true },
    { name: "Oracle Cloud", active: true },
    { name: "GitHub Actions", active: true },
  ],
  "Payments": [
    { name: "Paystack", active: true },
    { name: "OPay", active: true },
    { name: "Interswitch", active: true },
    { name: "Nomba", active: true },
    { name: "Stripe", active: true },
  ],
} as const;

export const blogPosts = [
  {
    title: "How I Built a Route Optimization Engine for Lagos Traffic",
    date: "Coming soon",
    href: "#",
    emoji: "",
  },
  {
    title: "Winning a Hackathon with Syntheos: Lessons on Shipping Fast",
    date: "Coming soon",
    href: "#",
    emoji: "",
  },
  {
    title: "Integrating 5 Payment Gateways Across Africa: What I Learned",
    date: "Coming soon",
    href: "#",
    emoji: "",
  },
] as const;