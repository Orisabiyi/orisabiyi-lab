import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/exprience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import SkillSection from "@/components/skills-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header />
      <SkillSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
