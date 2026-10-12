"use client";
import { type PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Scroll-linked layer.
// - speed: 0.5 = moves at half the scroll speed, so the background scrolls past behind it
// - grow:  scale reached by the end of `growRange` (1 = no growth)
// - fade:  scroll range over which it fades out
// - see-through: opacity drops toward `minOpacity` while it grows
export const ParallaxHeadline = ({
  children,
  className,
  speed = 0.5,
  grow = 1,
  growRange = [0, 500],
  minOpacity = 1,
  fade = [350, 750],
}: PropsWithChildren<{
  className?: string;
  speed?: number;
  grow?: number;
  growRange?: [number, number];
  minOpacity?: number;
  fade?: [number, number];
}>) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 900 * speed]);
  const scale = useTransform(scrollY, growRange, [1, grow]);
  // Keyframes must be in increasing scroll order; skip the see-through step if it
  // would land after the fade starts (or there is no growth).
  const seeThrough = grow !== 1 && growRange[1] < fade[0];
  const opacity = useTransform(
    scrollY,
    seeThrough ? [0, growRange[1], fade[0], fade[1]] : [0, fade[0], fade[1]],
    seeThrough ? [1, minOpacity, minOpacity, 0] : [1, 1, 0]
  );
  return (
    <motion.div className={className} style={{ y, scale, opacity }}>
      {children}
    </motion.div>
  );
};
