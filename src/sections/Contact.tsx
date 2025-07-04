import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 p-8 rounded-3xl text-center flex flex-col md:flex-row gap-8 justify-between items-center relative overflow-hidden w-full max-w-[90vw] md:max-w-3xl mx-auto lg:max-w-full">
          {/* background grain layer */}
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          ></div>

          {/* Text Content */}
          <div className="inline-flex flex-col gap-2 items-center md:items-start flex-1">
            <h2 className="text-black/70 font-serif text-2xl lg:text-3xl text-center md:text-left">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-gray-950/80 mt-2 text-sm lg:text-base max-w-sm text-center md:text-left">
              Whether you have a project in mind or just want to say hello, I’d love to hear from you.
            </p>
          </div>

          {/* Button with hover working */}
          <div className="flex-shrink-0 z-10 ">
            <button className="inline-flex items-center justify-center gap-2 mt-2 md:mt-0 px-6 py-3 bg-gray-950 rounded-2xl text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-emerald-400 hover:scale-105 hover:shadow-xl transform shadow-emerald-600 hover:text-black ">
              <span>Contact Me</span>
              <ArrowUpRightIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
