"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BinsindriImage from "@/assets/images/BItsindri.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ComputerEmojie from "@/assets/images/memoji-computer.png"
import Cplusplus from "@/assets/icons/c-plus-plus.svg"
import TypescriptIcon from "@/assets/icons/typescript.svg"
import NextIcon from "@/assets/icons/nextjs.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import NodeIcon from "@/assets/icons/nodejs.svg"
import MongoIcon from "@/assets/icons/mongodb.svg"
import FramerIcon from "@/assets/icons/framer-logo.svg"
import PostmanIcon from "@/assets/icons/postman.svg"
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItem";
import { TechIcon } from "@/components/TechIcon";
import { LocationMap } from "@/components/LocationMap";
import { useRef } from "react";
import { motion } from "framer-motion";


const toolBoxItems = [
  { title: 'React', iconType: ReactIcon },
  { title: 'Next.js', iconType: NextIcon },
  { title: 'TypeScript', iconType: TypescriptIcon },
  { title: 'Tailwind CSS', iconType: TailwindIcon },
  { title: 'JavaScript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'GitHub', iconType: GithubIcon },
  { title: 'C++', iconType: Cplusplus },
  { title: 'Node.js', iconType: NodeIcon },
  { title: 'MongoDB', iconType: MongoIcon },
  { title: 'Framer Motion', iconType: FramerIcon },
  { title: 'Postman', iconType: PostmanIcon },
]

const innerRing = toolBoxItems.slice(0, 5);
const outerRing = toolBoxItems.slice(5);

const hobbies = [
  { title: 'Photography', emojie: '📸', left: '4%', top: '12%' },
  { title: 'Cricket', emojie: '🏏', left: '22%', top: '58%' },
  { title: 'Gaming', emojie: '🎮', left: '30%', top: '14%' },
  { title: 'Music', emojie: '🎵', left: '46%', top: '50%' },
  { title: 'Travelling', emojie: '🚂', left: '55%', top: '8%' },
  { title: 'Reading', emojie: '📚', left: '3%', top: '62%' },
  { title: 'Fitness', emojie: '🏋🏻‍♂️', left: '70%', top: '58%' },
  { title: 'Hiking', emojie: '🌲', left: '80%', top: '16%' },
]

// Code window content: [text, colour] tokens per line
const K = "text-sky-300", S = "text-emerald-300", P = "text-white/80", C = "text-white/30", F = "text-yellow-200";
const codeLines: [string, string][][] = [
  [["// abhishek.ts - hello there 👋", C]],
  [["const ", K], ["abhishek", F], [" = {", P]],
  [["  name: ", P], ['"Abhishek Kumar Rana"', S], [",", P]],
  [["  role: ", P], ['"Frontend Engineer"', S], [",", P]],
  [["  company: ", P], ['"Adgrid"', S], [",", P]],
  [["  based: ", P], ['"Gurugram, India"', S], [",", P]],
  [["  education: ", P], ['"B.Tech CSE · BIT Sindri \'26"', S], [",", P]],
  [["  stack: [", P], ['"React"', S], [", ", P], ['"Next.js"', S], [",", P]],
  [["          ", P], ['"TypeScript"', S], [", ", P], ['"TanStack"', S], ["],", P]],
  [["  openTo: ", P], ['"interesting ideas"', S], [",", P]],
  [["};", P]],
  [["", P]],
  [["abhishek", F], [".", P], ["build", K], ["(", P], ['"something amazing"', S], [");", P]],
];

const Orbit = ({ items, radius, duration, reverse }: { items: typeof toolBoxItems; radius: number; duration: number; reverse?: boolean }) => (
  <div
    aria-hidden
    className=" absolute inset-0 animate-spin"
    style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
  >
    {items.map((item, i) => {
      const angle = (360 / items.length) * i;
      return (
        <div
          key={item.title}
          className=" absolute left-1/2 top-1/2"
          style={{ transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)` }}
        >
          {/* counter-spin keeps icons upright */}
          <div
            className=" -translate-x-1/2 -translate-y-1/2 animate-spin"
            style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "normal" : "reverse" }}
          >
            <div title={item.title} className=" grid place-items-center size-12 rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur [&_svg]:size-7">
              <TechIcon component={item.iconType} />
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export const AboutSection = () => {
  const constraintRef=useRef(null);
  return (
    <section id="about" aria-labelledby="about-heading" className=" py-16 lg:py-24">

      <div className="container">

        <SectionHeader index={4} headingId="about-heading" eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />

        <div className=" mt-16 lg:mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* ── CODE WINDOW ── */}
          <Card className=" p-0 md:col-span-2 lg:col-span-2 flex flex-col">
            <div className=" flex items-center gap-2 px-5 h-11 border-b border-white/10 bg-gray-900/50">
              <span className=" size-3 rounded-full bg-red-400/70" />
              <span className=" size-3 rounded-full bg-yellow-400/70" />
              <span className=" size-3 rounded-full bg-emerald-400/70" />
              <span className=" ml-3 rounded-md bg-white/5 px-3 py-0.5 font-mono text-xs text-white/60">abhishek.ts</span>
              <span className=" ml-auto font-mono text-[10px] uppercase tracking-widest text-white/30">TypeScript</span>
            </div>
            <motion.pre
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ show: { transition: { staggerChildren: 0.09 } } }}
              className=" flex-1 overflow-x-auto no-scrollbar p-4 md:p-7 font-mono text-[10.5px] sm:text-xs md:text-sm leading-7"
            >
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  className=" flex"
                >
                  <span aria-hidden className=" w-6 md:w-8 shrink-0 select-none text-right pr-3 md:pr-4 text-white/20">{i + 1}</span>
                  <code className=" whitespace-pre">
                    {line.map(([text, color], j) => <span key={j} className={color}>{text}</span>)}
                    {i === codeLines.length - 1 && <span aria-hidden className=" ml-0.5 inline-block w-2 h-4 align-middle bg-emerald-300 animate-pulse" />}
                  </code>
                </motion.div>
              ))}
            </motion.pre>
          </Card>

          {/* ── TOOLBOX ORBIT ── */}
          <Card className=" p-0 flex flex-col lg:row-span-2 min-h-[520px]">
            <CardHeader title="My Toolbox" description="The technologies and tools I use to craft exceptional digital experiences." className=" px-6 pt-6" />
            <div className=" relative flex-1 min-h-[340px] grid place-items-center">
              <div className=" relative size-[300px] scale-[0.82] md:scale-100">
                <div aria-hidden className=" absolute inset-[70px] rounded-full border border-dashed border-emerald-300/20" />
                <div aria-hidden className=" absolute inset-0 rounded-full border border-white/10" />
                <div aria-hidden className=" absolute inset-[110px] rounded-full bg-emerald-300/20 blur-2xl" />
                <Image src={ComputerEmojie} alt="" className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20" />
                <Orbit items={innerRing} radius={80} duration={26} />
                <Orbit items={outerRing} radius={150} duration={40} reverse />
              </div>
            </div>
            <ul className=" sr-only">
              {toolBoxItems.map((item) => <li key={item.title}>{item.title}</li>)}
            </ul>
            <ToolBoxItems items={toolBoxItems} className=" mb-6" itemsWrapperclassName=" animate-move-left [animation-duration:30s]"/>
          </Card>

          {/* ── EDUCATION ── */}
          <Card className=" h-[320px]">
            <CardHeader title="B.I.T Sindri" description="I earned my B.Tech in Computer Science from BIT Sindri, Dhanbad - Class of 2026."/>
            <div className=" w-32 mx-auto mt-4">
              <Image src={BinsindriImage} alt="BIT Sindri emblem" sizes="128px" />
            </div>
          </Card>

          {/* ── MAP ── */}
          <Card className="h-[320px] relative p-0">
            <LocationMap />
          </Card>

          {/* ── HOBBIES ── */}
          <Card className=" min-h-[320px] p-0 flex flex-col md:col-span-2 lg:col-span-3">
            <div className=" flex flex-col md:flex-row md:items-end md:justify-between gap-2 px-6 pt-6">
              <CardHeader title="Beyond The Code" description="Explore my interests and hobbies beyond the digital realm."/>
              <p aria-hidden className=" hidden md:block text-xs uppercase tracking-[0.25em] text-white/30">Drag them around ✦</p>
            </div>

            <div className=" relative flex-1 m-4 mt-3 rounded-2xl border border-dashed border-white/10 flex flex-wrap content-start gap-2 p-3 md:block md:p-0" ref={constraintRef}>
              {hobbies.map(hobby => (
              <motion.div key={hobby.title} className=" inline-flex gap-2 items-center bg-gradient-to-r from-emerald-400 to-sky-400 rounded-3xl px-3 py-1.5 md:absolute cursor-grab active:cursor-grabbing shadow-lg shadow-emerald-400/10 text-sm md:text-base"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                whileDrag={{ scale: 1.1, rotate: -4 }}
                >
                  <span className=" font-medium text-gray-950 whitespace-nowrap">{hobby.title}</span>
                  <span aria-hidden>{hobby.emojie}</span>
                </motion.div>
              ))}
            </div>
          </Card>

        </div>

      </div>
    </section>
  )
};
