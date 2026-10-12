import type { Metadata, Viewport } from "next";
import "./globals.css";

import {Inter, Calistoga} from "next/font/google"
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/lib/site";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Spotlight } from "@/components/Spotlight";
import { SectionRail } from "@/components/SectionRail";
import { AnchorScroll } from "@/components/AnchorScroll";
import grainImage from "@/assets/images/grain.jpg";

const inter=Inter({subsets:["latin"],variable:"--font-sans",display:"swap"});
const calistoga=Calistoga({subsets:["latin"],variable:"--font-serif",weight:["400"],display:"swap"});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "/",
    siteName: `${siteConfig.name} - Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    firstName: "Abhishek",
    lastName: "Rana",
    username: "abhishek-kumar-rana",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#111827",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.role,
      worksFor: { "@type": "Organization", name: siteConfig.company },
      alumniOf: { "@type": "CollegeOrUniversity", name: "BIT Sindri" },
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      knowsAbout: ["React", "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "Node.js", "Sentry", "Web Performance"],
      sameAs: Object.values(siteConfig.socials),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} - Portfolio`,
      inLanguage: "en-IN",
      author: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth relative">
      <body className={twMerge(inter.variable,calistoga.variable, "  bg-gray-900 text-white antialiased font-sans")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* One grain layer for the whole page, so sections blend with no seams */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollProgress />
        <Spotlight />
        <SectionRail />
        <AnchorScroll />
        {children}
      </body>
    </html>
  );
}
