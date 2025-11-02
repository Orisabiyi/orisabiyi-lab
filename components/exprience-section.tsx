const experienceData = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    logo: '',
    duration: "Jan 2020 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center gap-10 py-10 w-full font-sora bg-gradient-to-b from-[var(--secondary)] via-[var(--primary-1)] to-[var(--secondary)]"
    >
      <h2 className="text-4xl text-white">
        My <span className="font-bold">Experience</span>
      </h2>
      <ul className="container mx-auto flex flex-col gap-6">
        {
          experienceData.map(({ role, company, duration, description }, index) => (
            <li key={index} className="border border-white/20 p-6 text-white">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{role}</h3>
                <p className="text-sm block">{duration}</p>
              </div>
              <h4 className="text-md">{company}</h4>
              <p className="text-base mt-2">{description}</p>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
