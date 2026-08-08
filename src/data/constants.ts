export const SITE = {
  name: "Orisabiyi David",
  email: "orisabiyidavid@gmail.com",
  title: "Engineer \u00b7 Builder \u00b7 Creator",
  bio: "Full-stack engineer. I like to understand how things work, break them apart, and build something better. Currently shipping e-commerce platforms, AI tools, and logistics infrastructure \u2014 remote by default, building for the global web.",
  aboutLong: [
    "I\u2019m Orisabiyi David \u2014 a software engineer with 4+ years of experience building production web applications across e-commerce, logistics, fintech, and AI. I work primarily with Next.js, TypeScript, and Node.js, and I\u2019ve shipped everything from payment integrations to routing engines to RAG pipelines.",
    "I care about writing maintainable code, building intuitive interfaces, and understanding the business problem before writing a single line. I also run Common Chronicles \u2014 a community for builders, creatives, and storytellers sharing the real stories behind their work.",
  ],
  social: {
    GitHub: "https://github.com/orisabiyi",
    LinkedIn: "https://linkedin.com/in/orisabiyi",
    Twitter: "https://x.com/DevOrisabiyi",
    Medium: "https://medium.com/@Orisabiyidavid",
    Email: "mailto:orisabiyidavid@gmail.com",
  },
} as const;

export const experience = [
  {
    org: "Fez Delivery",
    url: "https://fezdelivery.co",
    role: "Senior Frontend Engineer",
    description:
      "Leading frontend architecture for a logistics platform serving businesses across Nigeria. Built a route optimization microservice with self-hosted OSRM and traffic-weighted heuristics.",
  },
  {
    org: "Common Chronicles",
    url: "https://github.com/common-chronicles",
    role: "Founder & Builder",
    description:
      "A community for builders, creatives, and storytellers who make things and tell real stories. Built the content automation bot (Notion + Discord + Groq AI) and organized community events.",
  },
  {
    org: "Freelance / Contract",
    role: "Fullstack Developer",
    description:
      "Shipped products across e-commerce, fintech, and AI. Integrated 5 payment gateways (Paystack, OPay, Interswitch, Nomba, Stripe), built admin dashboards, and delivered client projects end-to-end.",
  },
] as const;

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