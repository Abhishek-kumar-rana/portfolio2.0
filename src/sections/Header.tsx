"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { navSections, siteConfig } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { LazyStatus } from "@/components/LazyStatus";

const ids: string[] = navSections.map((s) => s.id);
const ease = [0.76, 0, 0.24, 1] as const;

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedinIn },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
];

const useIndiaTime = () => {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: siteConfig.timeZone });
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const time = useIndiaTime();

  // Glass backing behind the name fades in with scroll so it stays readable.
  const { scrollY } = useScroll();
  const plateAlpha = useTransform(scrollY, [0, 200], [0, 0.55]);
  const plateBlur = useTransform(scrollY, [0, 200], [0, 12]);
  const plateBorder = useTransform(scrollY, [0, 200], [0, 0.1]);
  const plateBg = useMotionTemplate`rgb(17 24 39 / ${plateAlpha})`;
  const plateFilter = useMotionTemplate`blur(${plateBlur}px)`;
  const plateOutline = useMotionTemplate`rgb(255 255 255 / ${plateBorder})`;

  // While the menu is open: keep the page still without hiding its scrollbar
  // (block wheel / touch / scroll keys instead of overflow:hidden), and close on Escape.
  useEffect(() => {
    if (!open) return;
    const block = (e: Event) => e.preventDefault();
    const scrollKeys = new Set([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"]);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (scrollKeys.has(e.key)) e.preventDefault();
    };
    // Pause everything under the opaque overlay so the menu animates on a quiet page.
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    const hideTimer = setTimeout(() => {
      main?.style.setProperty("visibility", "hidden");
      footer?.style.setProperty("visibility", "hidden");
    }, 320);
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(hideTimer);
      main?.style.removeProperty("visibility");
      footer?.style.removeProperty("visibility");
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-[5000] pointer-events-none">
      <div className="container flex items-start justify-between pt-4 md:pt-6">

        {/* ── TOP-LEFT: logo + name ── */}
        <motion.a
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Abhishek Rana - back to top"
          style={{ background: plateBg, backdropFilter: plateFilter, WebkitBackdropFilter: plateFilter, borderColor: plateOutline }}
          className="group pointer-events-auto flex items-center gap-3 rounded-2xl border p-1.5 pr-4"
        >
          <span className="grid place-items-center size-10 rounded-xl bg-gradient-to-br from-emerald-300 to-sky-400 font-serif text-base text-gray-900 shadow-[0_0_20px] shadow-emerald-300/30 transition-transform duration-300 group-hover:-rotate-6">
            AR
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-white">Abhishek Rana</span>
            <span className="block text-xs text-white/50">Frontend Engineer</span>
          </span>
        </motion.a>

        {/* ── TOP-RIGHT: round menu button ── */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="pointer-events-auto relative grid place-items-center size-12 rounded-2xl rounded-tr-[4px] bg-emerald-400 text-gray-900 transition-colors hover:bg-emerald-300"
        >
          {open
            ? <HiXMark aria-hidden className="size-6" />
            : <HiBars3BottomRight aria-hidden className="size-6" />}
        </button>
      </div>

      {/* ── FULL-SCREEN OVERLAY MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto fixed inset-0 -z-10 bg-gray-950 overflow-hidden will-change-[opacity]"
          >
            {/* glows, clipped to the screen so they can't cause sideways scroll */}
            <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-[radial-gradient(closest-side,rgb(52_211_153/0.15),transparent)]" />
              <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[radial-gradient(closest-side,rgb(56_189_248/0.12),transparent)]" />
            </div>

            <div className="container relative h-full flex flex-col justify-between pt-[max(6rem,12vh)] pb-[max(1.5rem,4vh)]">
              <nav aria-label="Primary">
                <ul className="flex flex-col">
                  {navSections.map((section, index) => {
                    const isActive = active === section.id;
                    return (
                      <motion.li
                        key={section.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease, delay: 0.25 + index * 0.06 }}
                        className="border-b border-white/10"
                      >
                        <a
                          href={`#${section.id}`}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "true" : undefined}
                          className="group flex items-baseline gap-4 md:gap-8 py-[min(1rem,1.4vh)]"
                        >
                          <span className={twMerge("font-mono text-xs md:text-sm w-8", isActive ? "text-emerald-300" : "text-white/30")}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={twMerge(
                              "font-serif text-[clamp(1.6rem,min(7vh,9vw),4.5rem)] leading-none transition-all duration-500 group-hover:translate-x-4",
                              isActive
                                ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
                                : "text-white/40 group-hover:text-white"
                            )}
                          >
                            {section.label}
                          </span>
                          {isActive && <span className="hidden md:inline ml-auto self-center text-xs uppercase tracking-[0.3em] text-emerald-300">You are here</span>}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-[3vh] flex flex-col md:flex-row md:items-end justify-between gap-[2vh] md:gap-6 text-sm"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Get in touch</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg md:text-2xl font-semibold text-white hover:text-emerald-300 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer me" aria-label={label}
                      className="grid place-items-center size-11 rounded-full border border-white/15 text-white/70 hover:border-emerald-300/50 hover:text-emerald-300 transition-colors">
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:items-end">
                  <p className="text-white/50">
                    {siteConfig.location}{time && <span className="ml-2 font-mono text-white/70">{time} IST</span>}
                  </p>
                  <LazyStatus />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
