import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { WhatIDoSection } from "@/sections/WhatIDoSection ";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      {/* <TestimonialsSection/> */}
      <WhatIDoSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
