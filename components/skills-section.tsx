import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoPython, IoLogoSass } from "react-icons/io5";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiFastify } from "react-icons/si";

const skills = [
  {
    icon: FaGitAlt,
    name: 'Git',
  },
  {
    icon: IoLogoJavascript,
    name: 'Javascript',
  },
  {
    icon: IoLogoSass,
    name: 'Sass/Scss',
  },
  {
    icon: RiNextjsFill,
    name: 'NextJS',
  },
  {
    icon: RiReactjsFill,
    name: 'ReactJS',
  },
  {
    icon: FaNodeJs,
    name: 'NodeJS',
  },
  {
    icon: SiExpress,
    name: 'ExpressJS',
  },
  {
    icon: SiFastify,
    name: 'Fastify',
  },
  {
    icon: IoLogoPython,
    name: 'Python',
  }
]

export default function SkillSection() {
  return (
    <section id="skills" className="flex flex-col items-center gap-10 py-5 md:py-32 w-full container mx-auto font-sora">
      <h2 className="text-4xl font-medium">My <span className="text-primary font-bold">Skills</span></h2>

      <ul className="grid grid-cols-2 md:grid-cols-5 gap-5 md:h-96 w-full px-10 md:p-0">
        {
          skills.map(({ icon: Icon, name }) => (
            <li key={name} className="w-full border-2 border-gray-400 flex flex-col items-center justify-center gap-1 md:gap-2 text-primary hover:border-0 hover:bg-primary hover:text-white transition-colors delay-75 p-4 md:p-0">
              <Icon className="text-4xl md:text-6xl" />
              <span className="text-lg md:text-2xl">{name}</span>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
