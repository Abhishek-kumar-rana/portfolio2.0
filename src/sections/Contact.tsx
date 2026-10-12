"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/lib/site";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

type Status = "idle" | "sending" | "success" | "error";

export const ContactSection = () => {
  const [open, setOpen]     = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef             = useRef<HTMLFormElement>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    const formData = new FormData(formRef.current);
    const templateParams = {
      from_name:  formData.get("from_name")  as string,
      from_email: formData.get("from_email") as string,
      message:    formData.get("message")    as string,
      sent_at:    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  // Magnetic pull for the round CTA
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15 });
  const y = useSpring(my, { stiffness: 200, damping: 15 });
  const handleMagnet = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const resetMagnet = () => { mx.set(0); my.set(0); };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-emerald-300/60 focus:bg-white/[0.06] transition";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-20 lg:py-32 overflow-x-clip">
      <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[min(700px,100vw)] rounded-full bg-[radial-gradient(closest-side,rgb(52_211_153_/_0.14),transparent)] -z-10" />

      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">

          {/* ── GIANT HEADLINE ── */}
          <div className="flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-white/70">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-large opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to new ideas &amp; collaborations
            </p>
            <h2 id="contact-heading" className="mt-6 font-serif leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Let&apos;s build it.</span>
            </h2>
            <p className="mt-6 text-white/60 text-base md:text-lg max-w-md">
              Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-6 inline-flex items-center gap-2 text-base md:text-xl font-semibold text-white"
            >
              <span className="relative">
                {siteConfig.email}
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-300 to-sky-400 transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <ArrowUpRightIcon aria-hidden className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* ── MAGNETIC ROUND CTA ── */}
          <div className="flex justify-center lg:justify-end lg:pr-8">
            <motion.button
              type="button"
              onClick={handleToggle}
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
              style={{ x, y }}
              aria-expanded={open}
              aria-controls="contact-form"
              className="group relative grid place-items-center size-52 md:size-64 rounded-full"
            >
              <span className="sr-only">{open ? "Close contact form" : "Open contact form"}</span>
              {/* spinning ring text */}
              <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin [animation-duration:18s]">
                <defs>
                  <path id="cta-circle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
                </defs>
                <text className="fill-white/60 text-[13px] uppercase tracking-[0.42em] font-semibold">
                  <textPath href="#cta-circle">Get in touch • Say hello • Let&apos;s talk •</textPath>
                </text>
              </svg>
              <span aria-hidden className="absolute inset-[22%] rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 shadow-[0_0_60px] shadow-emerald-300/40 transition-transform duration-500 group-hover:scale-110" />
              <ArrowUpRightIcon aria-hidden className={`relative size-10 md:size-12 text-gray-900 transition-transform duration-500 ${open ? "rotate-[135deg]" : "group-hover:rotate-45"}`} />
            </motion.button>
          </div>
        </div>

        {/* ── GLASS FORM ── */}
        <div
          id="contact-form"
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "grid-rows-[1fr] opacity-100 visible mt-12" : "grid-rows-[0fr] opacity-0 invisible mt-0"}`}
        >
          <div className="overflow-hidden">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-emerald-300/50 via-white/10 to-sky-400/50">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-0 overflow-hidden rounded-3xl bg-gray-900/90 backdrop-blur-xl p-6 md:p-10 flex flex-col gap-5"
              >
                <div aria-hidden className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
                <p className="font-mono text-xs text-emerald-300">{"// new message"}</p>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="from_name" className="text-xs font-semibold text-white/50 uppercase tracking-wider">Your Name</label>
                    <input id="from_name" type="text" name="from_name" autoComplete="name" required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label htmlFor="from_email" className="text-xs font-semibold text-white/50 uppercase tracking-wider">Your Email</label>
                    <input id="from_email" type="email" name="from_email" autoComplete="email" required placeholder="john@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-white/50 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project…" className={`${inputClass} resize-none`} />
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 h-12 bg-white rounded-xl text-sm font-semibold text-gray-950 transition hover:shadow-[0_0_30px] hover:shadow-emerald-300/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Send Message <ArrowUpRightIcon aria-hidden className="size-4" /></>
                    )}
                  </button>

                  <div aria-live="polite">
                    {status === "success" && (
                      <p className="text-sm font-medium text-emerald-300">✅ Message sent! I&apos;ll get back to you soon.</p>
                    )}
                    {status === "error" && (
                      <p className="text-sm font-medium text-red-400">❌ Something went wrong. Please try again.</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

