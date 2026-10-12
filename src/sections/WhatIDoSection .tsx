"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "@/assets/icons/star.svg";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Globe, LayoutDashboard, Database, Cpu, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  { title: "Frontend Development", short: "Frontend", description: "Building responsive, modern, and animated interfaces using React, Next.js, TailwindCSS, and Framer Motion.", icon: Code2, tags: ["React", "Next.js", "Tailwind", "Framer Motion"] },
  { title: "Backend Development", short: "Backend", description: "Creating scalable backend systems with Node.js, Express.js, Spring Boot, authentication, APIs, and databases.", icon: Database, tags: ["Node.js", "Express", "Spring Boot", "Databases"] },
  { title: "Full Stack Projects", short: "Full Stack", description: "Developing complete production-ready web applications with clean architecture and smooth user experience.", icon: Globe, tags: ["Clean Architecture", "Production-ready", "Smooth UX"] },
  { title: "UI/UX Implementation", short: "UI / UX", description: "Transforming Figma and design concepts into pixel-perfect interactive interfaces with premium animations.", icon: LayoutDashboard, tags: ["Figma → Code", "Pixel-perfect", "Motion"] },
  { title: "AI Integration", short: "AI", description: "Integrating AI tools and APIs like Gemini/OpenAI into applications for smarter and more interactive experiences.", icon: Cpu, tags: ["Gemini", "OpenAI", "Chatbots"] },
  { title: "Creative Web Experiences", short: "Creative Web", description: "Designing cinematic portfolio sections, parallax effects, scroll animations, and immersive modern websites.", icon: Sparkles, tags: ["Parallax", "Scroll FX", "Interactions"] },
];

export const WhatIDoSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const starX = useTransform(scrollYProgress, [0, 1], [300, -2100]);
  const starY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const starScale = useTransform(scrollYProgress, [0, 1], [2.2, 0.6]);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Parallax star */}
      <motion.div
        style={{ x: starX, y: starY, rotate: starRotate, scale: starScale }}
        aria-hidden
        className="absolute right-0 top-20 z-0 pointer-events-none"
      >
        <div className="relative size-32">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
            <StarIcon className="size-14 text-emerald-300/40" />
          </motion.div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 origin-center">
            <div className="translate-x-10 -translate-y-10">
              <StarIcon className="size-8 text-sky-300/50" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container relative z-10">
        <SectionHeader
          index={3}
          headingId="services-heading"
          title="Crafting Modern Digital Experiences"
          eyebrow="What I Do"
          description="I build scalable, interactive, and visually engaging web applications focused on performance, usability, and premium user experience."
        />

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">

          {/* ── KINETIC LIST ── */}
          <ol className="border-t border-white/10">
            {services.map((service, index) => {
              const isActive = index === active;
              const ItemIcon = service.icon;
              return (
                <li key={service.title} className="border-b border-white/10">
                  <h3>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-expanded={isActive}
                      className="group w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 text-left"
                    >
                      <span className={twMerge("font-mono text-xs md:text-sm transition-colors", isActive ? "text-emerald-300" : "text-white/30")}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="relative flex-1 min-w-0">
                        <span
                          className={twMerge(
                            "block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-semibold tracking-tight transition-all duration-500",
                            isActive
                              ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text md:translate-x-2"
                              : "text-white/25 group-hover:text-white/60"
                          )}
                        >
                          {service.title}
                        </span>
                      </span>

                      <span
                        className={twMerge(
                          "grid place-items-center size-10 md:size-12 shrink-0 rounded-full border transition-all duration-500",
                          isActive ? "border-emerald-300/60 bg-emerald-300 text-gray-900 rotate-45" : "border-white/15 text-white/40"
                        )}
                      >
                        <ArrowUpRight aria-hidden className="size-5" />
                      </span>
                    </button>
                  </h3>

                  {/* mobile inline detail */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="flex gap-4 pb-6 pl-8">
                          <ItemIcon aria-hidden className="size-6 shrink-0 text-emerald-300 mt-0.5" />
                          <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>

          {/* ── STICKY PREVIEW (desktop) ── */}
          <div className="hidden lg:block sticky top-28">
            <Card className="p-10 min-h-[460px] flex flex-col">
              <div aria-hidden className="absolute -top-20 -right-20 size-72 rounded-full bg-emerald-300/10 blur-3xl -z-10" />

              {/* orbiting icon */}
              <div aria-hidden className="relative size-36 mx-auto grid place-items-center">
                <span className="absolute inset-0 rounded-full border border-dashed border-emerald-300/30 animate-spin [animation-duration:18s]" />
                <span className="absolute inset-5 rounded-full border border-white/10" />
                <span className="absolute inset-0 animate-spin [animation-duration:6s]">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-sky-400 shadow-[0_0_10px] shadow-sky-400" />
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    initial={{ scale: 0.4, opacity: 0, rotate: -40 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.4, opacity: 0, rotate: 40 }}
                    transition={{ duration: 0.35 }}
                    className="grid place-items-center size-16 rounded-2xl bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 shadow-[0_0_40px] shadow-emerald-300/40"
                  >
                    <Icon className="size-8" />
                  </motion.span>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                  className="mt-10 flex-1 flex flex-col"
                >
                  <p className="font-mono text-xs text-emerald-300">
                    {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-serif text-3xl">{current.short}</p>
                  <p className="mt-4 text-white/60 leading-relaxed">{current.description}</p>
                  <ul className="mt-auto pt-8 flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{tag}</li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
