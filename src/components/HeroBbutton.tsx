'use client';
import { motion } from 'framer-motion';
 import GithubIcon from '../assets/icons/github.svg';
import { HiMapPin } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { Float3D } from './Hero3D';

// Live local time in Gurugram - rendered after mount to avoid hydration mismatch.
const useIndiaTime = () => {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedButtons() {
  const time = useIndiaTime();
  return (
    <motion.div
      // ✅ small: flex-col center, large: full width with buttons on edges
      className="flex flex-row items-center md:items-end justify-between w-full gap-4 pb-2 md:pb-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* ✅ LEFT - github button */}
      
      <Float3D tilt={16} drift={4} lag={1.2}>
      <motion.a
        href="https://github.com/abhishek-kumar-rana"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abhishek's GitHub profile"
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center border rounded-xl gap-2 bg-white text-gray-900 px-4 sm:px-6 h-10 sm:h-12 text-sm sm:text-base whitespace-nowrap transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.span
          variants={{ hover: { rotate: [0, 10, -10, 0] } }}
          transition={{ duration: 0.6 }}
        >
          <GithubIcon aria-hidden className="size-5" />
        </motion.span>
        <span className="font-semibold">Github</span>
      </motion.a>
      </Float3D>

      {/* ✅ RIGHT - location chip */}
      <div className="md:mb-6">
      <Float3D tilt={16} drift={-4} lag={1.9}>
      <motion.div
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 border border-white/15 px-3 h-10 sm:h-12 text-sm sm:text-base whitespace-nowrap rounded-xl transition-colors duration-300  "
      >
        <motion.span
          variants={{ hover: { y: [0, -3, 0] } }}
          transition={{ duration: 0.6 }}
        >
          <HiMapPin aria-hidden className="size-4 sm:size-5 text-white" />
        </motion.span>
        {/* keep font italic */}
        <span className="italic">Gurugram, India</span>
        {time && (
          <span className="hidden md:inline font-mono text-xs text-white/50 border-l border-white/15 pl-2" title="Local time (IST)">
            {time} IST
          </span>
        )}
      </motion.div>
      </Float3D>
      </div>
    </motion.div>
  );
}