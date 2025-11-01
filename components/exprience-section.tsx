const experienceData = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the front end of the company's main product using React and TypeScript.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the front end of the company's main product using React and TypeScript.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the front end of the company's main product using React and TypeScript.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the front end of the company's main product using React and TypeScript.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center gap-10 py-10 w-full h-screen font-sora bg-gradient-to-b from-[var(--secondary)] via-[var(--primary-1)] to-[var(--secondary)]"
    >
      <h2 className="text-4xl text-white">
        My <span className="font-bold">Experience</span>
      </h2>
    </section>
  );
}
