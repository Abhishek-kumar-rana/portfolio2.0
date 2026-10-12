// Single source of truth for SEO + navigation data.

const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL || // set automatically by Netlify at build time
  "http://localhost:3000";

export const siteConfig = {
  name: "Abhishek Kumar Rana",
  shortName: "Abhishek Rana",
  role: "Frontend Engineer",
  company: "Adgrid",
  location: "Gurugram, India",
  timeZone: "Asia/Kolkata",
  url: rawUrl.replace(/\/$/, ""),
  title: "Abhishek Kumar Rana - Frontend Engineer | React, Next.js & TypeScript",
  description:
    "Abhishek Kumar Rana is a Frontend Engineer at Adgrid in Gurugram, India, building fast, scalable, component-based web apps with React, Next.js, TypeScript and TanStack.",
  keywords: [
    "Abhishek Kumar Rana",
    "Abhishek Rana",
    "Frontend Engineer",
    "Frontend Developer Gurugram",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "TanStack Query",
    "Full Stack Developer India",
    "Web Developer Portfolio",
    "BIT Sindri",
  ],
  email: "lalanrana01000@gmail.com",
  socials: {
    github: "https://github.com/abhishek-kumar-rana",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-b32a75258/",
    instagram: "https://www.instagram.com/abhishaans",
  },
};

export const navSections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
