import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { LazySections } from "@/sections/LazySections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection/>
        {/* Below-the-fold sections render on approach, with shimmer placeholders */}
        <LazySections/>
      </main>
      <Footer/>
    </>
  );
}
