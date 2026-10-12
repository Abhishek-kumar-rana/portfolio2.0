"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import AdgridLogo from "@/assets/images/adgrid-logo.png"
import NullclassLogo from "@/assets/images/nullclass-logo.png"

const experiences = [
  {
    company: "Adgrid",
    location: "Gurugram, India",
    period: "June 2026 – Present",
    startDate: "2026-06",
    current: true,
    role: "Frontend Engineer",
    tagline: "The Architect of Vision",
    logo: AdgridLogo,
    highlights: [
      { title: "Building scalable, component-based UIs with React & Next.js" },
      { title: "Type-safe, maintainable code with TypeScript" },
      { title: "Fast, reliable data fetching with TanStack Query" },
      { title: "Error tracking & performance monitoring with Sentry" },
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Zod",
      "Axios",
      "Sentry",
      "REST APIs",
      "Git",
    ],
  },
  {
    company: "NullClass EduTech Pvt. Ltd.",
    location: "Remote",
    period: "2024 · 2 months",
    startDate: "2024",
    current: false,
    role: "MERN Stack Developer Intern",
    tagline: "Learning by Building",
    logo: NullclassLogo,
    highlights: [
      { title: "Built a full-featured Stack Overflow clone on the MERN stack" },
      { title: "Implemented push notifications across all devices" },
      { title: "Integrated an AI chatbot using the Gemini API" },
      { title: "Learned full-stack workflows in a remote team" },
    ],
    skills: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Gemini API", "REST APIs", "Git"],
  },
];

export const ExperienceSection = () => {
  return <section id="experience" aria-labelledby="experience-heading" className=" py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        index={1}
        headingId="experience-heading"
        title="Where I've Worked"
        eyebrow="Experience"
        description="The teams I've built with and the impact I've delivered."
      />

      <div className=" md:mt-20 mt-12 flex flex-col gap-8 max-w-4xl mx-auto">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className=" p-6 md:p-10">
              <article aria-label={`${exp.role} at ${exp.company}`}>

                {/* HEADER */}
                <div className=" flex flex-col gap-5 md:flex-row md:items-center">
                  <div className=" grid place-items-center shrink-0 h-16 w-32">
                    <Image src={exp.logo} alt={`${exp.company} logo`} className=" w-full h-auto" />
                  </div>

                  <div className=" flex-1">
                    <h3 className=" font-serif text-2xl md:text-3xl">{exp.role}</h3>
                    <p className=" mt-1 text-sm md:text-base text-white/60">
                      <span className=" font-semibold text-white">{exp.company}</span> · {exp.location}
                    </p>
                  </div>

                  <div className=" flex flex-wrap items-center md:flex-col md:items-end gap-3 md:gap-2">
                    <span className=" inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70">
                      <time dateTime={exp.startDate}>{exp.period}</time>
                    </span>
                    {exp.current && (
                      <span className=" inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                        <span aria-hidden className=" size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Currently working
                      </span>
                    )}
                  </div>
                </div>

                <hr className=" border-t border-white/10 my-6 md:my-8" />

                {/* BODY */}
                <p className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase tracking-widest text-xs md:text-sm font-semibold">
                  {exp.tagline}
                </p>
                <ul className=" mt-4 flex flex-col gap-3">
                  {exp.highlights.map((h) => (
                    <li key={h.title} className=" flex gap-3 text-white/70 text-sm md:text-base">
                      <CheckCircleIcon aria-hidden className=" size-5 shrink-0 text-emerald-300 mt-0.5" />
                      <span>{h.title}</span>
                    </li>
                  ))}
                </ul>

                {/* SKILLS */}
                <ul aria-label="Tech stack" className=" flex flex-wrap gap-2 mt-8">
                  {exp.skills.map((skill) => (
                    <li key={skill} className=" rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs md:text-sm text-white/70">
                      {skill}
                    </li>
                  ))}
                </ul>

              </article>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>;
};
