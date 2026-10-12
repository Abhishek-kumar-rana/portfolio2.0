"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import StackoverflowImage from "@/assets/images/Stackoverflow.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import QuickInvoice from "@/assets/images/QuickInvoice.png"
import ChatFlow from "@/assets/images/ChatFlow.png"
import grainImage from "@/assets/images/grain.jpg"


const portfolioProjects = [
  {
    name: "StackOverflow Clone",
    company: "NULLCLASS",
    year: "2024",
    title: "Full Stack Web Development Internship",
    results: [
      { title: "Built a full-featured Stack Overflow clone" },
      { title: "Implemented push notifications across all devices" },
      { title: "Implemented an AI chatbot using the Gemini API" },
    ],
    tags: ["Full Stack", "Gemini API", "Push Notifications"],
    link: "https://stack-overflow-abhishek.netlify.app/",
    image: StackoverflowImage,
  },
  {
    name: "QuickInvoice",
    company: "Project",
    year: "2025",
    title: "QuickInvoice - Invoice Generator Web App",
    results: [
      { title: "Developed a full-stack invoice generator with real-time preview, PDF export, and multiple responsive invoice templates." },
      { title: "Designed REST APIs with Spring Boot and integrated PostgreSQL (Neon) for persistent invoice storage." },
      { title: "Added Clerk-based authentication and Cloudinary for secure document/image storage and scalable backend architecture." },
    ],
    tags: ["Spring Boot", "PostgreSQL", "Clerk", "Cloudinary", "REST APIs"],
    link: "https://quick-invoice-01.vercel.app",
    image: QuickInvoice,
  },
  {
    name: "ChatFlow",
    company: "Project",
    year: "2024",
    title: "ChatFlow - Real-Time Messaging App",
    results: [
      { title: "Real-time chat app using MERN and Socket.IO with instant messaging, typing indicators, and online/offline status." },
      { title: "Implemented secure JWT authentication (HTTP-only cookies) and scalable REST APIs using Node.js and Express.js." },
      { title: "Integrated Cloudinary for media uploads; built responsive React UI with message reactions and emoji picker." },
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    link: "https://chatappclient-caqg.onrender.com",
    image: ChatFlow,
  },

];

const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const GAP = 16;          // lg:gap-4
const OPEN_GROW = 6;     // flex-grow of the open panel (closed panels grow 1)

export const ProjectsSection = () => {
  const [active, setActive] = useState(0);
  const [isLg, setIsLg] = useState(false);
  const [openWidth, setOpenWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>();

  // Measure the final width of an open panel so its content is laid out at that
  // width from the start - the panel only reveals it, the text never re-wraps.
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const mq = window.matchMedia("(min-width: 1200px)");
    const measure = () => {
      setIsLg(mq.matches);
      const n = portfolioProjects.length;
      const free = row.clientWidth - GAP * (n - 1);
      setOpenWidth(Math.floor((free * OPEN_GROW) / (OPEN_GROW + n - 1)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(row);
    mq.addEventListener("change", measure);
    return () => { ro.disconnect(); mq.removeEventListener("change", measure); };
  }, []);

  // Small hover-intent delay so skimming across panels doesn't make them flicker.
  const openSoon = (index: number) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(index), 140);
  };
  const cancelOpen = () => clearTimeout(hoverTimer.current);
  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  return <section id="projects" aria-labelledby="projects-heading" className=" py-16 lg:py-24">
    <div className="container">
      <SectionHeader
        index={2}
        headingId="projects-heading"
        title="Real-World Results"
        eyebrow="Projects"
        description="See how I transformed concepts into engaging digital experiences."
      />

      <p aria-hidden className=" hidden lg:block mt-12 text-center text-xs uppercase tracking-[0.3em] text-white/30">
        Hover a panel to open it
      </p>

      <div ref={rowRef} className=" mt-10 lg:mt-6 flex flex-col lg:flex-row gap-6 lg:gap-4 lg:h-[640px]">
        {portfolioProjects.map((project, index) => {
          const isActive = index === active;
          const hiddenOnDesktop = isLg && !isActive;
          const number = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.title}
              aria-labelledby={`project-${index}`}
              onMouseEnter={() => openSoon(index)}
              onMouseLeave={cancelOpen}
              data-spotlight
              style={{ "--open-w": `${openWidth}px` } as React.CSSProperties}
              className={twMerge(
                " group relative z-0 overflow-hidden rounded-3xl bg-gray-800 outline outline-2 -outline-offset-2 outline-white/10 transition-[flex-grow,outline-color] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:min-w-0 lg:basis-0 will-change-[flex-grow]",
                isActive ? "lg:grow-[6] lg:outline-emerald-300/30" : "lg:grow hover:outline-white/25"
              )}
            >
              <div aria-hidden className=" absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />

              {/* ── COLLAPSED (desktop only) - cross-fades, never unmounts ── */}
              <button
                type="button"
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                tabIndex={isActive ? -1 : 0}
                aria-hidden={isActive}
                aria-label={`Open project ${number}: ${project.name}`}
                className={twMerge(
                  " absolute inset-0 hidden lg:flex flex-col items-center justify-between py-8 text-left transition-opacity",
                  isActive ? "opacity-0 pointer-events-none duration-200" : "opacity-100 duration-500 delay-300"
                )}
              >
                <Image src={project.image} alt="" fill sizes="200px" className=" -z-10 object-cover object-left-top opacity-[0.12] grayscale transition-opacity duration-500 group-hover:opacity-25" />
                <span className=" font-serif text-5xl text-outline">{number}</span>
                <span className=" [writing-mode:vertical-rl] rotate-180 font-serif text-3xl whitespace-nowrap text-white/80 group-hover:text-white transition-colors">
                  {project.name}
                </span>
                <span className=" grid place-items-center size-10 rounded-full border border-white/15 text-white/60 group-hover:border-emerald-300/50 group-hover:text-emerald-300 transition-colors">
                  <ArrowUpRight aria-hidden className=" size-4 rotate-45" />
                </span>
              </button>

              {/* ── EXPANDED - fixed at the final open width on desktop ── */}
              <div
                aria-hidden={hiddenOnDesktop}
                className={twMerge(
                  " p-6 md:p-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[var(--open-w)] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-10 lg:items-center transition-opacity",
                  isActive ? "lg:opacity-100 duration-500 delay-200" : "lg:opacity-0 lg:pointer-events-none duration-150"
                )}
              >
                <div
                  className={twMerge(
                    " flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "lg:translate-y-0 delay-200" : "lg:translate-y-3"
                  )}
                >
                  <div className=" flex items-center gap-4">
                    <span className=" font-serif text-5xl lg:text-6xl text-outline leading-none">{number}</span>
                    <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 uppercase tracking-widest text-xs md:text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h3 id={`project-${index}`} className=" font-serif text-2xl md:text-3xl mt-4">{project.title}</h3>
                  <ul className=" flex flex-col mt-5 gap-3">
                    {project.results.map(result => (
                      <li key={result.title} className=" flex text-white/55 gap-2 text-sm">
                        <CheckCircleIcon aria-hidden className=" size-5 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Tech stack" className=" flex flex-wrap gap-2 mt-5">
                    {project.tags.map(tag => (
                      <li key={tag} className=" rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{tag}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={hiddenOnDesktop ? -1 : 0}
                    aria-label={`Visit live site: ${project.title}`}
                    className=" group/btn self-start inline-flex gap-2 bg-white text-gray-950 h-12 rounded-xl font-semibold items-center mt-7 px-6 transition-shadow hover:shadow-[0_0_30px] hover:shadow-emerald-300/30"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight aria-hidden className=" size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

                {/* browser frame */}
                <div
                  className={twMerge(
                    " mt-8 lg:mt-0 rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl shadow-black/50 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "lg:translate-x-0 delay-300" : "lg:translate-x-8"
                  )}
                >
                  <div className=" flex items-center gap-2 px-4 h-9 border-b border-white/10 bg-gray-900">
                    <span className=" size-2.5 rounded-full bg-red-400/70" />
                    <span className=" size-2.5 rounded-full bg-yellow-400/70" />
                    <span className=" size-2.5 rounded-full bg-emerald-400/70" />
                    <span className=" ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-white/50">
                      🔒 {hostOf(project.link)}
                    </span>
                  </div>
                  <div className=" relative aspect-[16/10]">
                    <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes="(min-width: 1200px) 560px, 90vw" className=" object-cover object-left-top" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>;
};
