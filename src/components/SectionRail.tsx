"use client";
import { navSections } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { twMerge } from "tailwind-merge";

const ids: string[] = navSections.map((s) => s.id);

// Desktop-only vertical navigator. The active stop gets a spinning
// orbit ring — the same motif as the hero rings.
export const SectionRail = () => {
  const active = useActiveSection(ids);
  const activeIndex = ids.indexOf(active);

  return (
    <nav
      aria-label="Section navigation"
      className={twMerge("group/rail hidden min-[1400px]:flex fixed right-8 top-1/2 -translate-y-1/2 z-[4000] flex-col items-end gap-5 transition-opacity duration-500", active === "home" && "opacity-0 pointer-events-none")}
    >
      {/* track */}
      <div aria-hidden className="absolute right-[7px] top-2 bottom-2 w-px bg-white/10" />
      <div
        aria-hidden
        className="absolute right-[7px] top-2 w-px bg-gradient-to-b from-emerald-300 to-sky-400 transition-[height] duration-500"
        style={{ height: `calc(${(activeIndex / (ids.length - 1)) * 100}% - 8px)` }}
      />

      {navSections.map((section, index) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center gap-3"
          >
            <span
              className={twMerge(
                "text-xs uppercase tracking-[0.2em] whitespace-nowrap rounded-full bg-gray-900/80 backdrop-blur px-2 py-0.5 transition-all duration-300 translate-x-2 opacity-0 group-hover/rail:opacity-100 group-hover/rail:translate-x-0 text-white/60 group-hover:text-white",
                isActive && "text-white"
              )}
            >
              <span className="text-emerald-300 mr-2 font-mono">{String(index + 1).padStart(2, "0")}</span>
              {section.label}
            </span>

            <span className="relative grid place-items-center size-[15px]">
              {isActive && (
                <span className="absolute -inset-1.5 rounded-full border border-dashed border-emerald-300/70 animate-spin [animation-duration:6s]" />
              )}
              <span
                className={twMerge(
                  "size-[7px] rounded-full bg-white/30 transition-all duration-300 group-hover:bg-white",
                  isActive && "size-[9px] bg-emerald-300 shadow-[0_0_12px] shadow-emerald-300"
                )}
              />
            </span>
          </a>
        );
      })}
    </nav>
  );
};
