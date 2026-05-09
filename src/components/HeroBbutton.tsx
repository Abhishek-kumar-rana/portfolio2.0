'use client';
import { motion } from 'framer-motion';
 import GithubIcon from '../assets/icons/github.svg';

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
  return (
    <motion.div
      // ✅ small: flex-col center, large: full width with buttons on edges
      className="flex flex-row    items-center  lg:justify-between justify-between w-full   gap-4 px-4 pb-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* ✅ LEFT - Resume button */}
      
      <motion.a
        href="https://github.com/abhishek-kumar-rana"
        target="_blank"
        rel="noopener noreferrer"
      >
       <motion.button
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center border rounded-xl gap-2 bg-white text-gray-900 px-6 h-12 transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.span
          variants={{ hover: { rotate: [0, 10, -10, 0] } }}
          transition={{ duration: 0.6 }}
        >
          <GithubIcon className="size-5" />
        </motion.span>
        <span className="font-semibold">Github</span>
      </motion.button>
      </motion.a>

      {/* ✅ RIGHT - Explore button */}
      <motion.button
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-colors duration-300  "
      >
        <span className="font-semibold">Dhanbad, India</span>
        <motion.span
          variants={{ hover: { y: [0, 5, 0] } }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.span>
      </motion.button>
    </motion.div>
  );
}