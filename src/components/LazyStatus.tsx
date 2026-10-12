"use client";
import { useEffect, useState } from "react";

const TOTAL = 6; // sections behind <LazySection> (incl. the tape)

// Inline status showing how many lazy sections have rendered so far (used in the menu).
// Counts skeleton placeholders ([aria-busy]) still in the DOM.
export const LazyStatus = () => {
  const [pending, setPending] = useState<number | null>(null);

  useEffect(() => {
    const count = () => setPending(document.querySelectorAll("main [aria-busy]").length);
    count();
    const mo = new MutationObserver(count);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  if (pending === null) return null;
  const loaded = TOTAL - pending;
  const done = pending === 0;

  return (
    <div>
      <div role="status" className="inline-flex items-center gap-2.5">
        <span aria-hidden className="relative size-3.5">
          <span className="absolute inset-0 rounded-full border border-white/15" />
          {done ? (
            <span className="absolute inset-[3px] rounded-full bg-emerald-300" />
          ) : (
            <span className="absolute inset-0 animate-spin [animation-duration:1.2s]">
              <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px] shadow-emerald-300" />
            </span>
          )}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 whitespace-nowrap">
          {done ? (
            <>all <span className="text-emerald-300">{TOTAL}</span> sections loaded</>
          ) : (
            <>lazy loaded · <span className="text-emerald-300">{loaded}/{TOTAL}</span></>
          )}
        </span>
      </div>
    </div>
  );
};
