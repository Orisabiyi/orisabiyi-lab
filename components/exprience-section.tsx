const experienceData = [
  {
    role: "Software Engineer",
    company: "eCorpIT (Remote)",
    logo: "",
    duration: "September 2024 - Present",
    description:
      "Led performance improvements across new and legacy web applications, resolving bottlenecks and enhancing responsiveness for real-time data systems. Spearheaded the redesign and development of the company web platform, increasing client traffic by 60% through improved architecture and user experience. Refactored legacy codebases to boost maintainability and performance for financial applications, while implementing full-stack optimization strategies that reduced server load and accelerated transaction environments.",
  },
  {
    role: "Web Engineer",
    company: "Fez Delivery (Hybrid)",
    logo: "",
    duration: "January 2025 - Present",
    description:
      "Developed and maintained responsive user interfaces for web and mobile platforms, including key features like payment processing, order tracking, and customer support. Collaborated with designers and backend engineers to deliver seamless integrations with payment gateways and third-party services. Focused on building accessible and secure UIs, ensuring compliance with privacy standards and usability for diverse users, while optimizing frontend workflows to reduce delivery times.",
  },
  {
    role: "Web Engineer",
    company: "Black Founder Network (Remote)",
    logo: "",
    duration: "March 2025",
    description:
      "Redeveloped the organization's website, modernizing the UI for a more engaging and intuitive user experience. Leveraged InertiaJS within a Laravel stack to streamline frontend and backend integration, enabling seamless page transitions and improved performance. Implemented smooth animations and interactive elements using Framer Motion, enhancing user engagement and visual appeal while adhering to SEO best practices.",
  },
  {
    role: "Fullstack Engineer",
    company: "Global Banking and Finance (Remote)",
    logo: "",
    duration: "August 2024 - December 2024",
    description:
      "Led fullstack development and UI/UX redesign of a high-traffic financial news platform using Next.js, TailwindCSS, and Node.js. Architected micro frontend modules for scalable content delivery and editorial workflows. Implemented advanced SEO best practices, boosting search visibility and driving significant increases in organic traffic. Achieved a 25% increase in user engagement and reduced bounce rate by 15% through design enhancements and performance optimizations.",
  },
  {
    role: "Frontend Developer",
    company: "Selldome (Remote)",
    logo: "",
    duration: "July 2024",
    description:
      "Led the development of the web platform from scratch to launch, improving application performance by 30% and enhancing user engagement through interactive features.",
  },
  {
    role: "Python & Web Development Instructor",
    company: "NIIT Technologies (Onsite)",
    logo: "",
    duration: "May 2024 - Jan 2025",
    description:
      "Conducted hands-on programming exercises to reinforce theoretical knowledge. Provided one-on-one mentorship to students, helping them achieve their goals. Collaborated with the academic team to develop and update course materials.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-5 md:py-32 w-full font-sora bg-gradient-to-b from-[var(--secondary)] via-[var(--primary-1)] to-[var(--secondary)]">
      <div className="2xl:container mx-auto w-full flex items-start justify-center gap-20 relative">
        <h2 className="text-4xl text-white sticky top-10">
          My <span className="font-bold">Experience</span>
        </h2>
        <ul className="flex flex-col gap-6 p-6 md:p-0 relative w-1/2">
          {experienceData.map(
            ({ role, company, duration, description }, index) => (
              <li
                key={index}
                className={`border border-white/20 p-6 ${(index + 1) % 2 === 0
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
                  }`}
                style={{ top: `${(index + 1) * 50}px`, position: 'sticky' }}
              >
                <div className="flex justify-between">
                  <h3 className="text-base md:text-xl font-semibold">{role}</h3>
                  <p className="text-sm block">{duration}</p>
                </div>
                <h4 className="text-md">{company}</h4>
                <p className="text-sm mt-2">{description}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
