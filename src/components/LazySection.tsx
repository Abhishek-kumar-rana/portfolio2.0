"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SectionSkeleton, type SkeletonVariant } from "./Shimmer";

/**
 * Renders `children` only once the placeholder comes within `margin` of the
 * viewport; until then a section-shaped shimmer skeleton holds the space.
 * The placeholder carries the section's id so nav links (#projects…) still work.
 * Once rendered, a section stays rendered.
 */
export const LazySection = ({
  id,
  variant,
  children,
  margin = "600px 0px",
}: {
  id?: string;
  variant: SkeletonVariant;
  children: ReactNode;
  margin?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A hash link straight to this section (e.g. /#contact) should render it at once.
    if (id && window.location.hash === `#${id}`) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id, margin]);

  if (visible) return <>{children}</>;

  return (
    <div ref={ref} id={id} aria-busy="true" aria-label="Loading section">
      <SectionSkeleton variant={variant} />
    </div>
  );
};
