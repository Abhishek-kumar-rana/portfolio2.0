"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollCounter, setScrollCounter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollCounter((prev) => prev + 1);
        if (scrollCounter > 5) setShowHeader(false);
      } else {
        setScrollCounter(0);
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollCounter]);

  return (
    <div
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-[5000] transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex gap-1 px-4 py-1 sm:px-4 sm:py-3 border border-white/15 rounded-full bg-white/10 backdrop-blur-2xl shadow-white/10  md:text-base max-w-[90vw]">
        <span className="uppercase font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-600 text-transparent bg-clip-text text-center whitespace-nowrap">
          Hello, I&apos;m Abhishek Kumar Rana
        </span>
      </div>
    </div>
  );
};


{/* <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70">Contact</a> */}