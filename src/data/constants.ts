export const SITE = {
  name: "Orisabiyi David",
  email: "orisabiyidavid@gmail.com",
  title: "Engineer \u00b7 Builder \u00b7 Creator",
  bio: "Full-stack engineer. I like to understand how things work, break them apart, and build something better. Currently shipping e-commerce platforms, AI tools, and logistics infrastructure \u2014 remote by default, building for the global web.",
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