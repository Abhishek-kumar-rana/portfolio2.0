"use client";
import { useEffect } from "react";

// In-page links (#projects, #contact…) can land off-target when lazy sections
// above the target render and change height mid-scroll. This scrolls to the
// target and keeps re-aligning until the layout settles.
export const AnchorScroll = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      if (!id || !document.getElementById(id)) return;

      e.preventDefault();
      history.pushState(null, "", `#${id}`);

      const align = (behavior: ScrollBehavior) =>
        document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });

      align("smooth");
      // Re-align while sections above the target finish rendering.
      [500, 1100, 1800].forEach((t) => setTimeout(() => {
        const el = document.getElementById(id);
        if (el && Math.abs(el.getBoundingClientRect().top - 88) > 24) align("smooth");
      }, t));
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};
