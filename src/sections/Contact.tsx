"use client";

import { useState, useRef } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import emailjs from "@emailjs/browser";

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

  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl relative overflow-hidden w-full max-w-[90vw] md:max-w-3xl mx-auto lg:max-w-full transition-all duration-500 ease-in-out">
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          />

          {/* Top row */}
          <div className="p-8 flex flex-col md:flex-row gap-8 justify-between items-center relative z-10">
            <div className="inline-flex flex-col gap-2 items-center md:items-start flex-1">
              <h2 className="text-black/70 font-serif text-2xl lg:text-3xl text-center md:text-left">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-gray-950/80 mt-2 text-sm lg:text-base max-w-sm text-center md:text-left">
                Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex-shrink-0 z-10">
              <button
                onClick={handleToggle}
                className="inline-flex items-center justify-center gap-2 mt-2 md:mt-0 px-6 py-3 bg-gray-950 rounded-2xl text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-emerald-400 hover:scale-105 hover:shadow-xl hover:text-black shadow-emerald-600 transform"
              >
                <span>{open ? "Close" : "Contact Me"}</span>
                <ArrowUpRightIcon className={`size-6 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Expandable form */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="mx-8 border-t border-black/10" />

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 p-8 flex flex-col gap-5">
              {/* Name + Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-black/60 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text" name="from_name" required placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 text-gray-950 placeholder:text-gray-950/40 text-sm outline-none focus:ring-2 focus:ring-gray-950/30 transition"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-semibold text-black/60 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email" name="from_email" required placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 text-gray-950 placeholder:text-gray-950/40 text-sm outline-none focus:ring-2 focus:ring-gray-950/30 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-black/60 uppercase tracking-wider">Message</label>
                <textarea
                  name="message" required rows={4} placeholder="Tell me about your project…"
                  className="w-full px-4 py-3 rounded-xl resize-none bg-white/40 backdrop-blur-sm border border-white/60 text-gray-950 placeholder:text-gray-950/40 text-sm outline-none focus:ring-2 focus:ring-gray-950/30 transition"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit" disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 rounded-2xl text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-950 hover:scale-105 hover:shadow-xl shadow-emerald-600 transform disabled:opacity-60 disabled:cursor-not-allowed"
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
                    <>Send Message <ArrowUpRightIcon className="size-5" /></>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-sm font-medium text-gray-950">✅ Message sent! I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-700">❌ Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};