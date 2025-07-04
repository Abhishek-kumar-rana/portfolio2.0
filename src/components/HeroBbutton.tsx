'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
      className="flex flex-col items-center mt-8 gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Button 2: Resume */}
      <motion.button
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center border rounded-xl gap-2 bg-white text-gray-900 px-6 h-12 transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.span
          variants={{
            hover: { rotate: [0, 10, -10, 0] },
          }}
          transition={{ duration: 0.6 }}
        >
          ↓📁
        </motion.span>
        <span className="font-semibold">Resume/CV</span>
      </motion.button>

      {/* Button 1: Explore */}
      <motion.button
        variants={item}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition-colors duration-300 hover:bg-white hover:text-black"
      >
        <span className="font-semibold">Explore My Work</span>
        <motion.span
          variants={{
            hover: { y: [0, 5, 0] },
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
