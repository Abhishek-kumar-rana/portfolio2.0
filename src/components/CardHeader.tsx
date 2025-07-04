import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className
}: {
  title: string;
  description: string
  className?: string
}) => {
  return (
    <div>

      <div className={twMerge(className," flex flex-col")}>
        <div className=" inline-flex gap-2 items-center" >
          <StarIcon className=" size-9 text-emerald-400" />
          <h3 className=" font-serif text-3xl">{title}</h3>
        </div>
        <p className=" text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
      </div>


    </div>
  )
}