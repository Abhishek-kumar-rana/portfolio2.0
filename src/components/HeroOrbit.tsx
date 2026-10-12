"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Deterministic pseudo-random using integer math only, so server and
// client produce identical values (no hydration mismatch).
const seeded = (seed: number) => {
  let t = (Math.round(seed) + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

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
  const r = (n: number) => seeded(size * 31 + rotation * 7 + n);
  return (
    <div
      aria-hidden
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
          x: Math.round(r(1) * 3000 - 1500),
          y: Math.round(r(2) * 3000 - 1500),
          scale: 0,
          opacity: 0,
          rotate: Math.round(r(3) * 720),
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
          delay: Math.round(r(4) * 100) / 100,
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