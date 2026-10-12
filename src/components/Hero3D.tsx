"use client";
import { createContext, useContext, useEffect, useRef, type PropsWithChildren } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

// Raw pointer position over the hero, normalised to -0.5 … 0.5.
const PointerContext = createContext<{ x: MotionValue<number>; y: MotionValue<number> } | null>(null);

export const HeroScene = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set((e.clientX - r.left) / r.width - 0.5);
      y.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  return (
    <PointerContext.Provider value={{ x, y }}>
      <div ref={ref} className={className}>{children}</div>
    </PointerContext.Provider>
  );
};

/**
 * Wraps one hero element and gives it its own independent 3D motion:
 * - tilt:   max rotation in degrees toward the cursor
 * - drift:  max translation in px (negative = moves against the cursor)
 * - lag:    spring softness; higher = trails further behind the cursor
 */
export const Float3D = ({
  children,
  className,
  tilt = 8,
  drift = 0,
  lag = 1,
  perspective = 900,
}: PropsWithChildren<{ className?: string; tilt?: number; drift?: number; lag?: number; perspective?: number }>) => {
  const ctx = useContext(PointerContext);
  if (!ctx) throw new Error("Float3D must be used inside <HeroScene>");

  const spring = { stiffness: 110 / lag, damping: 16 + lag * 4, mass: 0.5 * lag };
  const sx = useSpring(ctx.x, spring);
  const sy = useSpring(ctx.y, spring);

  const rotateY = useTransform(sx, (v) => v * tilt * 2);
  const rotateX = useTransform(sy, (v) => -v * tilt * 2);
  const x = useTransform(sx, (v) => v * drift * 2);
  const y = useTransform(sy, (v) => v * drift * 2);

  return (
    <motion.div className={className} style={{ rotateX, rotateY, x, y, transformPerspective: perspective }}>
      {children}
    </motion.div>
  );
};
