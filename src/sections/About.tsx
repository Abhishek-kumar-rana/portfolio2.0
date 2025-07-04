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
import MapImage from "@/assets/images/map.png"
import SmileEmojie from "@/assets/images/memoji-smile.png"
import Cplusplus from "@/assets/icons/c-plus-plus.svg"
import TypescriptIcon from "@/assets/icons/typescript.svg"
import NextIcon from "@/assets/icons/nextjs.svg"
import TailwindIcon from "@/assets/icons/tailwind.svg"
import NodeIcon from "@/assets/icons/nodejs.svg"
import MongoIcon from "@/assets/icons/mongodb.svg"
import FramerIcon from "@/assets/icons/framer-logo.svg"
import PostmanIcon from "@/assets/icons/postman.svg"
// import ExpressIcon from "@/assets/icons/express.svg"
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItem";
import { useRef } from "react";
import { motion } from "framer-motion";


const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'GITHUB',
    iconType: GithubIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  
  {
    title: 'C++',
    iconType: Cplusplus
  },
  {
    title: 'TypeScript',
    iconType: TypescriptIcon
  },
  {
    title: 'Next.js',
    iconType: NextIcon
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon
  },
  {
    title: 'Node.js',
    iconType: NodeIcon
  },
  {
    title: 'MongoDB',
    iconType: MongoIcon
  }
  ,
  {
    title: 'Framer Motion',
    iconType: FramerIcon
  }
  ,
  {
    title: 'Postman',
    iconType: PostmanIcon
  }
]

const hobbies = [
  {
    title: 'Photography',
    emojie: '📸',
    left: '40%',
    top: '30%'
  },
  {
    title: 'Cricket',
    emojie: '🏏',
    left: '5%',
    top: '63%'
  },
  {
    title: 'Gaming',
    emojie: '🎮',
    left: '5%',
    top: '25%'
  },
  {
    title: 'Music',
    emojie: '🎵',
    left: '50%',
    top: '65%'
  },
  {
    title: 'travelling',
    emojie: '🚂',
    left: '30%',
    top: '50%'
  },
  {
    title: 'Reading',
    emojie: '📚',
    left: '10%',
    top: '0%'
  },
  {
    title: 'Fitness',
    emojie: '🏋🏻‍♂️',
    left: '50%',
    top: '0%'
  },
  {
    title: 'Hiking',
    emojie: '🥾🌲',
    left: '67%',
    top: '50%'
  }

]

export const AboutSection = () => {
  const constraintRef=useRef(null);
  return (
    <div className=" py-20">

      <div className="container">


        <SectionHeader eyebrow="About Me" title="A Glimps Into My World" description="Learn more about who I am, what I do, and what inspires me" />

        <div className=" mt-20 flex flex-col gap-8">

        <div className=" grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          
          <Card className=" h-[320px] md:col-span-2 lg:col-span-1 ">
            
              <CardHeader title="B.I.T Sindri" description="I'm a Computer Science student at BIT Sindri Dhanbad, graduating in 2026."/>
            <div className=" w-36 mx-auto mt-4">

            <Image src={BinsindriImage} alt="Book cover" />
            </div>
          </Card>

          <Card className=" h-[320px] p-0 md:col-span-3 lg:col-span-2">

            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className=" px-6 pt-6" />
            <ToolBoxItems items={toolBoxItems} className=" mt-6 " itemsWrapperclassName=" animate-move-left [animation-duration:20s]"/>
            <ToolBoxItems items={toolBoxItems} className=" mt-6 " itemsWrapperclassName="-translate-x-1/2 animate-move-right"/>
          </Card>
          </div>
          <div className=" grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className=" h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            
            <CardHeader title="Beyond The Code" description="Explore my intrests and hobbies Beyond digital realm." className=" px-6 py-6"/>

            <div className=" relative flex-1 " ref={constraintRef}>
              {hobbies.map(hobby => (
              <motion.div key={hobby.title} className=" inline-flex gap-2 items-center bg-gradient-to-r from-emerald-400 to-sky-400 rounded-3xl px-2 py-1.5 absolute  "
                style={{
                  left: hobby.left,
                  top: hobby.top,
                  
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className=" font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emojie}</span>
                </motion.div>
              ))}
            </div>

          </Card>

          <Card className="group h-[320px] relative p-0 md:col-span-2 lg:col-span-1 ">

            <Image src={MapImage} alt="Map Location" className="  h-full w-full  object-left-top group-hover:scale-150 transition-transform  duration-500 z-30 "/>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  p-2  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2  after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
               <div className="absolute inset-0 -z-20 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
              <div className="absolute inset-0 -z-10 animate-ping [animation-duration:2s] bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
            <Image src={SmileEmojie} alt="Smile"  className=" size-12"/>
            </div>
          </Card>


        </div>
        </div>

      </div>
    </div>
  )
};
