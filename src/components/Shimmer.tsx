import { twMerge } from "tailwind-merge";

// One shimmering placeholder block (sweep animation lives in globals.css).
export const Bone = ({ className }: { className?: string }) => (
  <div className={twMerge("shimmer rounded-xl", className)} />
);

const HeaderBones = () => (
  <div className="flex flex-col items-center gap-4">
    <Bone className="size-8 rounded-full" />
    <Bone className="h-3 w-48" />
    <Bone className="h-10 w-64 md:w-80 rounded-2xl" />
    <Bone className="h-3 w-72 max-w-full" />
    <Bone className="h-3 w-56" />
  </div>
);

export type SkeletonVariant = "experience" | "projects" | "tape" | "services" | "about" | "contact";

const labels: Record<SkeletonVariant, string> = {
  experience: "experience",
  projects: "projects",
  tape: "",
  services: "services",
  about: "about",
  contact: "contact",
};

// Minimal "loading" marker: an orbiting dot + mono label, floated over the skeleton.
const LoadingTag = ({ label }: { label: string }) => (
  <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex justify-center">
    <div role="status" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-gray-900/80 backdrop-blur px-4 py-2">
      <span aria-hidden className="relative size-4">
        <span className="absolute inset-0 rounded-full border border-white/15" />
        <span className="absolute inset-0 animate-spin [animation-duration:1.2s]">
          <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px] shadow-emerald-300" />
        </span>
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
        loading <span className="text-emerald-300">{label}</span>
        <span className="inline-block w-4 text-left animate-pulse">…</span>
      </span>
    </div>
  </div>
);

// Section-shaped skeletons so the page keeps its layout while content loads.
export const SectionSkeleton = ({ variant }: { variant: SkeletonVariant }) => (
  <div className="relative">
    {labels[variant] && <LoadingTag label={labels[variant]} />}
    <SkeletonBody variant={variant} />
  </div>
);

const SkeletonBody = ({ variant }: { variant: SkeletonVariant }) => {
  if (variant === "tape") {
    return (
      <div className="py-20 lg:py-28 overflow-hidden">
        <Bone className="h-12 w-[110%] -ml-[5%] -rotate-2 rounded-none" />
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className="container py-20 lg:py-32 flex flex-col lg:flex-row lg:items-center gap-12">
        <div className="flex-1 flex flex-col gap-5">
          <Bone className="h-8 w-64 rounded-full" />
          <Bone className="h-16 md:h-24 w-full max-w-xl rounded-2xl" />
          <Bone className="h-16 md:h-24 w-4/5 max-w-lg rounded-2xl" />
          <Bone className="h-4 w-72 max-w-full" />
        </div>
        <Bone className="size-52 md:size-64 rounded-full mx-auto lg:mx-0" />
      </div>
    );
  }

  return (
    <div className="container py-16 lg:py-24">
      <HeaderBones />
      <div className="mt-12 md:mt-20">
        {variant === "experience" && <Bone className="h-[420px] max-w-4xl mx-auto rounded-3xl" />}

        {variant === "projects" && (
          <div className="flex flex-col lg:flex-row gap-4 lg:h-[640px]">
            <Bone className="h-[520px] lg:h-auto lg:flex-[6] rounded-3xl" />
            <Bone className="hidden lg:block lg:flex-1 rounded-3xl" />
            <Bone className="hidden lg:block lg:flex-1 rounded-3xl" />
          </div>
        )}

        {variant === "services" && (
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16">
            <div className="flex flex-col gap-4">
              {Array.from({ length: 6 }, (_, i) => <Bone key={i} className="h-16 md:h-20" />)}
            </div>
            <Bone className="hidden lg:block h-[460px] rounded-3xl" />
          </div>
        )}

        {variant === "about" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Bone className="h-[400px] md:col-span-2 rounded-3xl" />
            <Bone className="h-[520px] lg:row-span-2 rounded-3xl" />
            <Bone className="h-[320px] rounded-3xl" />
            <Bone className="h-[320px] rounded-3xl" />
            <Bone className="h-[320px] md:col-span-2 lg:col-span-3 rounded-3xl" />
          </div>
        )}
      </div>
    </div>
  );
};
