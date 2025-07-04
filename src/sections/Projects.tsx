
import StackoverflowImage from "@/assets/images/Stackoverflow.png";
import BookStoreImage from "@/assets/images/Bookstore.png";
import TodoImage from "@/assets/images/todo.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "NULLCLASS",
    year: "2024",
    title: "Full Stack Web Development Internship",
    results: [
      { title: "Created clone website of Stack OverFlow with all features" },
      { title: "Implemented push notification for every devices" },
      { title: "Implementes AI-chat-Bot using Gemini-api" },
    ],
    link: "https://stack-overflow-abhishek.netlify.app/",
    image: StackoverflowImage,
  },
  {
    company: "Project",
    year: "2024",
    title: "BookStore Ecommerce Website",
    results: [
      { title: "User log-In/sign-Up features" },
      { title: "Implemented a light/Dark theme" },
      { title: "Fetching api from backend using expressJS and mongoDB " },
    ],
    link: "https://book-store-gilt-nine.vercel.app/",
    image: BookStoreImage,
  },
  {
    company: "Project",
    year: "2023",
    title: "Todo App with React.JS",
    results: [
      { title: "Crud Operation " },
      { title: "Flexible" },
      { title: "Used React.JS for UI" },
    ],
    link: "https://todo-app-lime-three.vercel.app/",
    image: TodoImage,
  },
];

export const ProjectsSection = () => {
  return <section className=" pb-16 lg:py-24">
     <div className="container">
      <SectionHeader 
        title="Real-World Results"
        eyebrow="Featured Projects & Experiences"
        description="See how I transformed concepts into engaging datails experiences."
      />
      
      <div className=" flex flex-col md:mt-20 mt-10 gap-20">
        {
          portfolioProjects.map((project,projectIndex)=>(
            <div key={projectIndex} className="sticky top-16" style={{
              top: `calc(4rem + ${projectIndex * 40}px)`
            }}>
              <Card key={project.title} className=" px-8 pt-8 lg:pt-16 pb-0 lg:px-20 "> 
            

             
            <div className=" lg:grid grid-cols-2 lg:gap-16">
              <div className=" lg:pb-16">
                <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span >{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              
              <h3 className=" font-serif text-2xl md:text-4xl md:mt-5 mt-2">{project.title}</h3>
              <hr  className=" border-t-2 border-white/20 mt-4 md:mt-5"/>
              <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                {project.results.map(result=>(
                  
                  <li key={result.title} className="flex text-white/50 gap-2 text-sm md:text-base">
                    <CheckCircleIcon className=" size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="inline-flex flex-row gap-2 bg-white text-gray-950 justify-center h-12 rounded-xl font-semibold items-center w-full mt-8 md:w-auto px-6">
                  <span>Visit Live Site</span>
                  <ArrowUpRight className=" size-4"/>
                </button>
              </a>
              
              </div>
              <div className=" relative">

              <Image src={project.image} alt={project.title} className=" mt-8 -mb-4 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
            </Card>
            </div>
          ))
        }
      </div>
     </div>
  </section>;
};
