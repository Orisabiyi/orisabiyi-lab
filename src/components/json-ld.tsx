import { SITE } from "@/data/constants";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Orisabiyi David",
    url: "https://orisabiyi-lab.vercel.app",
    email: SITE.email,
    jobTitle: "Software Engineer",
    description:
      "Software engineer with 4+ years of experience shipping production web applications across e-commerce, logistics, fintech, and AI.",
    sameAs: [
      SITE.social.GitHub,
      SITE.social.LinkedIn,
      SITE.social.Twitter,
      SITE.social.Medium,
    ],
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "AI/ML",
      "RAG Pipelines",
      "LangChain",
      "E-Commerce",
      "Logistics",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Orisabiyi David",
    url: "https://orisabiyi-lab.vercel.app",
    description:
      "Portfolio of Orisabiyi David — Software Engineer specializing in e-commerce, logistics, fintech, and AI systems.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}