export const SITE = {
  name: "Orisabiyi David",
  email: "orisabiyidavid@gmail.com",
  title: "Engineer \u00b7 Builder \u00b7 Creator",
  bio: "Software engineer. I like to understand how things work, break them apart, and build something better. I work on problems where the edge cases are harder than the happy path. Payment systems that fail gracefully, routing engines that handle roads Google hasn\u2019t mapped, and AI pipelines that cite their sources.",
  aboutLong: [
    "I\u2019m Orisabiyi David. I build things that work in production not just in demos. Over 4+ years I\u2019ve shipped a logistics routing engine using self-hosted OSRM with real traffic data and road constraints, built e-commerce platforms end-to-end from storefront to admin dashboard, and won a hackathon building an AI content optimizer in under 48 hours.",
    "I don\u2019t pick the trendy tool \u2014 I pick the right one. I read the business problem before I read the docs. And I ship consistently, whether it\u2019s a payment flow that handles five gateways or a RAG pipeline that actually returns useful answers. I also run Common Chronicles, a community for builders who make things and tell honest stories about it.",
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
    { name: "C#", learning: true },
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