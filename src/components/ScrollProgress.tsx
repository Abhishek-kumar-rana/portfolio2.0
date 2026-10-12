"use client";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin emerald → sky beam pinned to the top of the viewport.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[6000] bg-gradient-to-r from-emerald-300 to-sky-400 shadow-[0_0_12px] shadow-emerald-300/60"
    />
  );
};
