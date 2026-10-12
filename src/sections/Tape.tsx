import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const words =[
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Responsive",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]

const stack = ["React", "Next.js", "TypeScript", "TanStack", "Tailwind", "Node.js", "Sentry", "Framer Motion", "MongoDB", "Spring Boot"]

const Strip = ({ items, className, trackClassName, textClassName, iconClassName }: {
  items: string[];
  className?: string;
  trackClassName?: string;
  textClassName?: string;
  iconClassName?: string;
}) => (
  <div className={twMerge(" -mx-4", className)}>
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={twMerge("flex flex-none gap-4 py-3", trackClassName)}>
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {items.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className={twMerge(" text-sm uppercase font-extrabold whitespace-nowrap", textClassName)}>{word}</span>
                <StarIcon aria-hidden className={twMerge(" size-6 -rotate-12", iconClassName)} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  </div>
);

// Two tapes crossing in an X, running in opposite directions.
export const TapeSection = () => {
  return <div className=" relative py-20 lg:py-28 overflow-x-clip">
    <Strip
      items={stack}
      className=" absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-3 bg-gray-800 border-y border-white/10"
      trackClassName=" animate-move-right [animation-duration:40s]"
      textClassName=" text-white/50"
      iconClassName=" text-emerald-300/60"
    />
    <Strip
      items={words}
      className=" relative -rotate-2 bg-gradient-to-r from-emerald-400 to-sky-400 shadow-[0_20px_60px_-15px] shadow-emerald-400/40"
      trackClassName=" animate-move-left"
      textClassName=" text-gray-900"
      iconClassName=" text-gray-900"
    />
  </div>;
};
