"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      {/* ONLY animate this layer */}
      <motion.div
        initial={{
          x: Math.random() * 3000 - 1500,
          y: Math.random() * 3000 - 1500,
          scale: 0,
          opacity: 0,
          rotate: Math.random() * 720,
        }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
          delay: Math.random(),
        }}
      >
        <div
          className={twMerge(shouldOrbit && "animate-spin")}
          style={{
            animationDuration: orbitDuration,
          }}
        >
          <div
            className="relative flex items-start justify-start"
            style={{
              transform: `rotate(${rotation}deg)`,
              height: `${size}px`,
              width: `${size}px`,
            }}
          >
            <div
              className={twMerge(shouldSpin && "animate-spin")}
              style={{
                animationDuration: spinDuration,
              }}
            >
              <div
                className="inline-flex"
                style={{
                  transform: `rotate(${rotation * -1}deg)`,
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};