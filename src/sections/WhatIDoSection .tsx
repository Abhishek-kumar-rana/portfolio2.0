"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Code2,
  Globe,
  LayoutDashboard,
  Database,
  Cpu,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and animated interfaces using React, Next.js, TailwindCSS, and Framer Motion.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable backend systems with Node.js, Express.js, Spring Boot, authentication, APIs, and databases.",
    icon: Database,
  },
  {
    title: "Full Stack Projects",
    description:
      "Developing complete production-ready web applications with clean architecture and smooth user experience.",
    icon: Globe,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming Figma and design concepts into pixel-perfect interactive interfaces with premium animations.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Integration",
    description:
      "Integrating AI tools and APIs like Gemini/OpenAI into applications for smarter and more interactive experiences.",
    icon: Cpu,
  },
  {
    title: "Creative Web Experiences",
    description:
      "Designing cinematic portfolio sections, parallax effects, scroll animations, and immersive modern websites.",
    icon: Sparkles,
  },
];

export const WhatIDoSection = () => {

    const sectionRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});


  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container">
        <SectionHeader
          title="What I Do"
          eyebrow="Crafting Modern Digital Experiences"
          description="I build scalable, interactive, and visually engaging web applications focused on performance, usability, and premium user experience."
        />

         <motion.div
                style={{
                    x: useTransform(scrollYProgress, [0, 1], [300, -2100]),

                    y: useTransform(scrollYProgress, [0, 1], [100, -100]),

                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                     scale: useTransform(scrollYProgress, [0, 1], [2.2, 0.6]),
                }}
                className="
                    absolute
                    right-0
                    top-20
                    z-50
                    pointer-events-none
                "
                >

                {/* Orbit Container */}
                <div className="relative size-32">

                    {/* Big Star */}
                    <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    >
                    <StarIcon className="size-14 text-emerald-300/40" />
                    </motion.div>

                    {/* Small Orbiting Star */}
                    <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        origin-center
                    "
                    >
                    <div className="translate-x-10 -translate-y-10">
                        <StarIcon className="size-8 text-sky-300/50" />
                    </div>
                    </motion.div>

                </div>
                </motion.div>
        

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="
                  relative
                  overflow-hidden
                  p-8
                  rounded-3xl
                  bg-gray-800/50
                  border border-white/10
                  hover:border-emerald-300/30
                  transition-all
                  duration-500
                  group
                  hover:-translate-y-2
                  sticky
                   
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-emerald-300/5
                    to-sky-400/5
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                />

                {/* Floating Blur */}
                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    size-32
                    rounded-full
                    bg-emerald-300/10
                    blur-3xl
                  "
                />

                {/* Icon */}
                <div
                  className="
                    size-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-300/20
                    to-sky-400/20
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                >
                  <Icon className="size-7 text-emerald-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Number */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-5
                    text-5xl
                    font-bold
                    text-white/[0.04]
                    select-none
                  "
                >
                  0{index + 1}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};