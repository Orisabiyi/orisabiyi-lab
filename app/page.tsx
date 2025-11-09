import AboutSection from "@/components/about-section";
import OrisabiyiAI from "@/components/ai/main";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/exprience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import SkillSection from "@/components/skills-section";
import Script from "next/script";


export const revalidate = 3600;

export default async function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Orisabiyi David",
    url: "https://orisabiyi-lab.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/orisabiyi/",
      "https://github.com/Orisabiyi",
      "https://twitter.com/DevOrisabiyi",
    ],
    jobTitle: "Software Engineer, Designer, Full-Stack Developer",
  }

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <Header />
      <SkillSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <OrisabiyiAI />
    </>
  );
}
