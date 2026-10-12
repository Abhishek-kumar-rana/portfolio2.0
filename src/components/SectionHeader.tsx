export const SectionHeader = ({
  title,
  eyebrow,
  description,
  index,
  headingId,
}: {
  title: string;
  eyebrow: string;
  description: string;
  index?: number;
  headingId?: string;
}) => {
  return (
    <div className="flex flex-col items-center px-4 overflow-hidden">

      {/* Section index — orbit chip */}
      {index !== undefined && (
        <div aria-hidden className="mb-4 pt-2 inline-flex items-center gap-3 text-xs font-mono text-white/40">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-300/60" />
          <span className="relative grid place-items-center size-7 rounded-full border border-white/15">
            <span className="absolute inset-[-4px] rounded-full border border-dashed border-emerald-300/30 animate-spin [animation-duration:12s]" />
            <span className="text-emerald-300">{String(index).padStart(2, "0")}</span>
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-sky-400/60" />
        </div>
      )}

      {/* Top Text */}
      <p className="text-center uppercase font-semibold tracking-[0.25em] bg-gradient-to-r from-emerald-300 to-sky-500 text-transparent bg-clip-text text-xs sm:text-sm md:text-base">
        {title}
      </p>

      {/* Heading */}
      <div className="relative flex items-center justify-center mt-5 w-full py-4">

        {/* Outline Text — decorative only */}
        <div
          aria-hidden
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            font-CollectiveOutline
            text-transparent
            opacity-40
            select-none
            leading-none
            text-center
            break-words

            text-[35px]
            lg:text-[70px]
            px-2
            bottom-6


          "
          style={{
            WebkitTextStroke: "0.5px rgba(56, 191, 248, 0.97)",
          }}
        >
          {eyebrow}
        </div>

        {/* Solid Text */}
        <h2
          id={headingId}
          className="
            relative
            z-10
            font-collectro
            text-white
            leading-none
            text-center
            break-words
            text-[30px]
            lg:text-[50px]
            px-2
          "
        >
          {eyebrow}
        </h2>
      </div>

      {/* Description */}
      <p
        className="
          text-center
          text-sm
          sm:text-base
          md:text-lg
          max-w-md
          text-white/60
          mt-5
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
};
