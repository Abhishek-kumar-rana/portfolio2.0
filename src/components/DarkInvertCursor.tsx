// "use client";

// /**
//  * DarkInvertCursor — Premium futuristic dark inverted glass cursor
//  *
//  * Usage:
//  *   Wrap any section with <SectionWithCursor> OR use the
//  *   <DarkInvertCursor /> component directly inside a `relative` parent
//  *   and call the provided mouse handlers.
//  *
//  * Export summary:
//  *   - DarkInvertCursor          — the raw cursor element (place inside a relative parent)
//  *   - useDarkInvertCursor       — hook that returns refs + handlers + isInside
//  *   - SectionWithCursor         — ready-made wrapper that wires everything up
//  */

// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   AnimatePresence,
// } from "framer-motion";
// import { useRef, useState, useCallback, type ReactNode } from "react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// export interface DarkInvertCursorProps {
//   /** Diameter of the cursor orb in px. Default: 220 */
//   size?: number;
//   /** Spring stiffness for follow lag. Default: 280 */
//   stiffness?: number;
//   /** Spring damping for follow lag. Default: 28 */
//   damping?: number;
//   /** Additional className on the orb wrapper */
//   className?: string;
// }

// // ─── Hook ─────────────────────────────────────────────────────────────────────

// export function useDarkInvertCursor() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [isInside, setIsInside] = useState(false);

//   const rawX = useMotionValue(-500);
//   const rawY = useMotionValue(-500);

//   const x = useSpring(rawX, { stiffness: 280, damping: 28, mass: 0.6 });
//   const y = useSpring(rawY, { stiffness: 280, damping: 28, mass: 0.6 });

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLElement>) => {
//       const rect = sectionRef.current?.getBoundingClientRect();
//       if (!rect) return;
//       rawX.set(e.clientX - rect.left);
//       rawY.set(e.clientY - rect.top);
//     },
//     [rawX, rawY]
//   );

//   const handleMouseEnter = useCallback(() => setIsInside(true), []);
//   const handleMouseLeave = useCallback(() => {
//     setIsInside(false);
//     rawX.set(-500);
//     rawY.set(-500);
//   }, [rawX, rawY]);

//   return {
//     sectionRef,
//     isInside,
//     x,
//     y,
//     handleMouseMove,
//     handleMouseEnter,
//     handleMouseLeave,
//   };
// }

// // ─── Cursor Orb ───────────────────────────────────────────────────────────────

// export function DarkInvertCursor({
//   size = 220,
//   className = "",
//   // stiffness / damping forwarded from outside when using the raw component;
//   // if you use useDarkInvertCursor the spring is already baked in.
//   x,
//   y,
//   isInside,
// }: DarkInvertCursorProps & {
//   x: ReturnType<typeof useSpring>;
//   y: ReturnType<typeof useSpring>;
//   isInside: boolean;
// }) {
//   const half = size / 2;

//   return (
//     <AnimatePresence>
//       {isInside && (
//         <motion.div
//           key="cursor-orb"
//           // Position: centre the orb on the cursor
//           style={{
//             x,
//             y,
//             translateX: `-${half}px`,
//             translateY: `-${half}px`,
//           }}
//           initial={{ scale: 0.35, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.35, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.5 }}
//           className={`
//             absolute top-0 left-0
//             z-[9999]
//             pointer-events-none
//             ${className}
//           `}
//         >
//           {/* ── Outer ring: emerald pulse ── */}
//           <motion.div
//             animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
//             transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
//             style={{ width: size, height: size }}
//             className="
//               absolute inset-0 rounded-full
//               border border-emerald-400/40
//             "
//           />

//           {/* ── Secondary scan-ring ── */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
//             style={{ width: size, height: size }}
//             className="
//               absolute inset-0 rounded-full
//               border border-dashed border-emerald-300/20
//             "
//           />

//           {/* ── Core orb: dark liquid glass with real backdrop invert ── */}
//           <div
//             style={{
//               width: size,
//               height: size,
//               // Real CSS backdrop-filter composition:
//               // 1. invert(1)       — flips underlying pixel colours
//               // 2. hue-rotate(180deg) — re-correct hue so result is NOT cyan-on-yellow
//               // 3. brightness(0.55) — pull it dark so it looks like a dark glass
//               // 4. blur(2px)       — soft lens edge
//               backdropFilter:
//                 "invert(1) hue-rotate(180deg) brightness(0.52) blur(2px)",
//               WebkitBackdropFilter:
//                 "invert(1) hue-rotate(180deg) brightness(0.52) blur(2px)",
//               background:
//                 "radial-gradient(circle at 38% 35%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.82) 100%)",
//               boxShadow:
//                 "0 0 0 1px rgba(52,211,153,0.35), 0 0 40px 4px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
//             }}
//             className="rounded-full overflow-hidden relative"
//           >
//             {/* ── Inner emerald fringe glow (top-left only, keeps it dark) ── */}
//             <div
//               className="
//                 absolute -top-6 -left-6
//                 size-28 rounded-full
//                 bg-emerald-400/8
//                 blur-2xl pointer-events-none
//               "
//             />

//             {/* ── Crosshair / scanner reticle ── */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               {/* horizontal */}
//               <motion.div
//                 animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.25, 0.55, 0.25] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute w-16 h-px bg-emerald-300/60"
//               />
//               {/* vertical */}
//               <motion.div
//                 animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.25, 0.55, 0.25] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.3,
//                 }}
//                 className="absolute h-16 w-px bg-emerald-300/60"
//               />
//               {/* centre dot */}
//               <motion.div
//                 animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.9, 0.4] }}
//                 transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//                 className="size-1.5 rounded-full bg-emerald-300/80"
//               />
//             </div>

//             {/* ── Corner brackets ── */}
//             {[
//               "top-3 left-3 border-t border-l",
//               "top-3 right-3 border-t border-r",
//               "bottom-3 left-3 border-b border-l",
//               "bottom-3 right-3 border-b border-r",
//             ].map((pos, i) => (
//               <div
//                 key={i}
//                 className={`absolute size-4 ${pos} border-emerald-300/45`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // ─── Ready-made section wrapper ───────────────────────────────────────────────

// interface SectionWithCursorProps {
//   children: ReactNode;
//   className?: string;
//   as?: keyof JSX.IntrinsicElements;
//   cursorSize?: number;
// }

// export function SectionWithCursor({
//   children,
//   className = "",
//   as: Tag = "section",
//   cursorSize = 220,
// }: SectionWithCursorProps) {
//   const {
//     sectionRef,
//     isInside,
//     x,
//     y,
//     handleMouseMove,
//     handleMouseEnter,
//     handleMouseLeave,
//   } = useDarkInvertCursor();

//   return (
//     // @ts-expect-error — polymorphic "as" prop
//     <Tag
//       ref={sectionRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onMouseMove={handleMouseMove}
//       className={`relative overflow-hidden ${isInside ? "[cursor:none]" : ""} ${className}`}
//     >
//       <DarkInvertCursor size={cursorSize} x={x} y={y} isInside={isInside} />
//       {children}
//     </Tag>
//   );
// }