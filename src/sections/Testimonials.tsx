import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Rahul Verma",
    position: "Classmate, BIT Sindri",
    text: "Abhishek is always the go-to person for help with frontend projects. His dedication and curiosity push everyone around him to do better.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sneha Patel",
    position: "Team Lead, College Project",
    text: "Working with Abhishek was amazing! He turned our rough UI idea into a polished, responsive interface during our final-year hackathon.",
    avatar: memojiAvatar2,
  },
  {
    name: "Professor Sharma",
    position: "Faculty, Computer Science Dept.",
    text: "Abhishek consistently shows great initiative in learning beyond the syllabus. His portfolio is a testament to self-driven learning.",
    avatar: memojiAvatar3,
  },
  {
    name: "Vivek Anand",
    position: "Friend & Coding Partner",
    text: "Whether it’s debugging code at midnight or exploring new tech stacks, Abhishek brings energy and passion to every project we do together.",
    avatar: memojiAvatar4,
  },
  {
    name: "Priya Nair",
    position: "Design Collaborator",
    text: "Abhishek has a great eye for detail and always ensures that the UI is both beautiful and functional. Looking forward to working with him again!",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-24 overflow-hidden">
      <SectionHeader
        title="What Others Say"
        eyebrow="Testimonials from College Journey"
        description="Here’s what my peers, professors, and project teammates say about working with me during my time at BIT Sindri."
      />

      <div className="relative mt-16 z-10">
        <div className="flex gap-5 animate-move-left w-max hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div key={`${testimonial.name}-${idx}`} className="flex-none z-10">
              <Card className="p-5 rounded-3xl bg-gray-800 h-[220px] max-w-xs hover:-rotate-3 transition duration-500 ease-in-out">
                <div className="flex gap-4 items-center mb-4">
                  <div className="size-14 inline-flex flex-shrink-0 bg-gray-700 items-center justify-center rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm font-extralight text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {testimonial.text}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
