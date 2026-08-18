import avatarImg from "@/assets/david-pic-1.png";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SITE, experience, stats, techStack, } from "@/data/constants";
import { projects } from "@/data/projects";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";

const socials = [
  { label: "GitHub", href: SITE.social.GitHub, icon: Github },
  { label: "LinkedIn", href: SITE.social.LinkedIn, icon: Linkedin },
  { label: "Twitter", href: SITE.social.Twitter, icon: Twitter },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export default function HomePage() {
  const totalTech = Object.values(techStack).flat().length;

  return (
    <div className="animate-page-in">
      <section className="mb-12 md:mb-16">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-10">
          <div className="flex-1 min-w-0">
            <h1
              className="font-display font-black leading-[0.86] tracking-[-0.04em] text-[clamp(56px,12vw,176px)] m-0"
              style={{ fontVariationSettings: "'SOFT' 90, 'opsz' 144, 'WONK' 1" }}
            >
              Orisabiyi
              <br />
              David<span className="text-riso-red">.</span>
            </h1>
            <p className="mt-6 font-semibold tracking-tight text-[clamp(18px,2.2vw,26px)]">
              Engineer{" "}
              <span className="text-riso-red font-bold mx-1">&middot;</span>{" "}
              Builder{" "}
              <span className="text-riso-red font-bold mx-1">&middot;</span>{" "}
              Creator
            </p>
            <p className="mt-4 text-base md:text-lg opacity-75 max-w-[62ch] leading-relaxed">
              {SITE.bio}
            </p>
          </div>
          <figure className="flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
            <Image src={avatarImg} alt="Orisabiyi David" className="w-32 h-32 md:w-40 md:h-40 border-4 border-ink shadow-neo object-cover" />
          </figure>
        </div>
      </section>

      <div className="relative mb-12 md:mb-16">
        <div className="border-t-2 border-ink" />
        <div className="absolute -top-[7px] left-0 w-3 h-3 bg-riso-red border-2 border-ink" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="card-neo !bg-neo-yellow">
          <h3 className="text-2xl font-black mb-4">Connect</h3>
          <ul className="space-y-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-bold"
                >
                  <span className="relative flex-shrink-0 w-10 h-10 border-2 border-ink bg-white shadow-neo-btn flex items-center justify-center transition-all group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 bg-riso-red border border-ink" />
                  </span>
                  <span className="group-hover:underline">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Featured: Common Chronicles ── */}
        <div className="md:col-span-2 card-neo overflow-hidden !p-0">
          <div className="h-2 bg-riso-red border-b-[3px] border-ink" />
          <div className="p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-riso-red mb-2">
              Community
            </p>
            <h3 className="text-2xl font-black mb-1">Common Chronicles</h3>
            <p className="text-lg mb-6 opacity-75">
              A community for builders, creatives, and storytellers who make
              things and tell real stories. Built the content bot, organized
              events, and growing the Discord.
            </p>

            <Link
              href="https://commonchronicles.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-riso-red"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* ── Blog ── */}
        <BlogCard />

        {/* ── Projects Preview ── */}
        < div className="card-neo flex flex-col text-center" >
          <h3 className="text-2xl font-black mb-4">Projects</h3>
          <div className="flex-1 mb-4">
            {projects.slice(0, 3).map((p) => (
              <div key={p.slug} className="mb-3">
                <p className="font-bold leading-tight">{p.title}</p>
                <p className="text-sm opacity-75">{p.category}</p>
              </div>
            ))}
          </div>
          <Link href="/works" className="btn-neo bg-white mx-auto">
            View All Projects
          </Link>
        </div >

        {/* ── Current Roles ── */}
        < div className="md:col-span-3 card-neo" >
          <h3 className="text-2xl font-black mb-6">Current Roles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold mb-1">
                  {'url' in exp && exp.url ? (
                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-bold"
                    >
                      {exp.org}
                    </Link>
                  ) : (
                    exp.org
                  )}
                </h4>
                <p className="font-bold text-sm uppercase tracking-wide opacity-75 mb-3">
                  {exp.role}
                </p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))
            }
          </div >
        </div >

        {/* ── Stats Row: Stack / Projects / Hackathon ── */}
        {
          stats.map((stat, i) => (
            <Link
              key={i}
              href={stat.href}
              className="card-neo flex flex-col justify-center items-center text-center"
            >
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                {stat.label}
              </p>
              <span
                className="font-display font-black text-7xl leading-none mb-2"
                style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
              >
                {stat.number}
              </span>
              <p className="text-sm opacity-75 font-semibold">
                {stat.label}
              </p>
            </Link>
          ))
        }

        {/* ── Stack Preview ── */}
        <div className="card-neo flex flex-col justify-center items-center text-center">
          <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
            Stack
          </p>
          <h3 className="text-2xl font-black mb-4">Programming</h3>
          <span
            className="font-display font-black text-7xl leading-none mb-2"
            style={{ fontVariationSettings: "'SOFT' 80, 'opsz' 144" }}
          >
            {totalTech}
          </span>
          <p className="text-sm opacity-75 font-semibold mb-4">
            technologies in active use
          </p>
          <Link href="/stack" className="btn-neo bg-white">
            View Stack
          </Link>
        </div>
      </div >

      <Footer />
    </div >
  );
}
