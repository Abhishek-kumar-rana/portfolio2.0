"use client";
import dynamic from "next/dynamic";
import { LazySection } from "@/components/LazySection";
import { SectionSkeleton } from "@/components/Shimmer";

// Each section is its own JS chunk, fetched only when it nears the viewport.
// The same shimmer skeleton covers both "not yet in view" and "chunk loading".
const ExperienceSection = dynamic(() => import("./Experience").then((m) => m.ExperienceSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="experience" />,
});
const ProjectsSection = dynamic(() => import("./Projects").then((m) => m.ProjectsSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="projects" />,
});
const TapeSection = dynamic(() => import("./Tape").then((m) => m.TapeSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="tape" />,
});
const WhatIDoSection = dynamic(() => import("./WhatIDoSection ").then((m) => m.WhatIDoSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="services" />,
});
const AboutSection = dynamic(() => import("./About").then((m) => m.AboutSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="about" />,
});
const ContactSection = dynamic(() => import("./Contact").then((m) => m.ContactSection), {
  ssr: false,
  loading: () => <SectionSkeleton variant="contact" />,
});

export const LazySections = () => (
  <>
    <LazySection id="experience" variant="experience"><ExperienceSection /></LazySection>
    <LazySection id="projects" variant="projects"><ProjectsSection /></LazySection>
    <LazySection variant="tape"><TapeSection /></LazySection>
    <LazySection id="services" variant="services"><WhatIDoSection /></LazySection>
    <LazySection id="about" variant="about"><AboutSection /></LazySection>
    <LazySection id="contact" variant="contact"><ContactSection /></LazySection>
  </>
);
