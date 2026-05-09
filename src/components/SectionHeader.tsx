export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center px-4 overflow-hidden">
      
      {/* Top Text */}
      <p className="text-center uppercase font-semibold tracking-[0.25em] bg-gradient-to-r from-emerald-300 to-sky-500 text-transparent bg-clip-text text-xs sm:text-sm md:text-base">
        {title}
      </p>

      {/* Heading */}
      <div className="relative flex items-center justify-center mt-5 w-full py-4">
        
        {/* Outline Text */}
        <h1
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
        </h1>

        {/* Solid Text */}
        <h2
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