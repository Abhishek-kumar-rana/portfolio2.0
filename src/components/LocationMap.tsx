"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SmileEmojie from "@/assets/images/memoji-smile.png";
import { gurugramRoads, gurugramPlaces } from "@/lib/gurugramMap";

// Region of the 1000×1000 OSM plane that the card shows (square crop).
const VIEW = { x: 250, y: 150, size: 700 };
// Floor size in px and its 3D tilt. Labels are projected with the same maths.
const FLOOR = 400;
const TILT_X = 52; // deg
const TILT_Z = -32; // deg
const PERSPECTIVE = 900;

const labels: { key: keyof typeof gurugramPlaces; text: string }[] = [
  { key: "Cyber City", text: "Cyber City" },
  { key: "IFFCO Chowk", text: "IFFCO Chowk" },
  { key: "Millennium City Centre", text: "Millennium City" },
  { key: "Golf Course Rd", text: "Golf Course Rd" },
  { key: "Rajiv Chowk", text: "Rajiv Chowk · NH 48" },
];

// Project a point on the OSM plane through rotateX(TILT_X) rotateZ(TILT_Z) + perspective,
// returning screen offset (px) from the floor's centre.
const project = ([px, py]: readonly number[]) => {
  const x = ((px - VIEW.x) / VIEW.size - 0.5) * FLOOR;
  const y = ((py - VIEW.y) / VIEW.size - 0.5) * FLOOR;
  const z = (TILT_Z * Math.PI) / 180;
  const a = (TILT_X * Math.PI) / 180;
  const x1 = x * Math.cos(z) - y * Math.sin(z);
  const y1 = x * Math.sin(z) + y * Math.cos(z);
  const y2 = y1 * Math.cos(a);
  const z2 = y1 * Math.sin(a);
  const s = PERSPECTIVE / (PERSPECTIVE - z2);
  return { left: x1 * s, top: y2 * s };
};

const useIndiaTime = () => {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

export const LocationMap = () => {
  const time = useIndiaTime();
  const pin = project(gurugramPlaces.pin);

  return (
    <div role="img" aria-label="Map of Gurugram, Haryana, India, with a pin on Sector 15" className="group absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_45%,rgb(52_211_153/0.12),transparent_65%)]" />

      {/* Scene: floor + upright labels share one centre, so projected labels line up */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-105"
        style={{ width: FLOOR, height: FLOOR, perspective: PERSPECTIVE }}
      >
        {/* ── tilted floor with the real road network ── */}
        <div className="absolute inset-0" style={{ transform: `rotateX(${TILT_X}deg) rotateZ(${TILT_Z}deg)` }}>
          <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gray-900/70 [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
          <svg viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.size} ${VIEW.size}`} className="absolute inset-0 size-full overflow-visible" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={gurugramRoads.secondary} stroke="rgb(255 255 255 / 0.13)" strokeWidth={2.2} />
            <path d={gurugramRoads.primary} stroke="rgb(255 255 255 / 0.3)" strokeWidth={3.2} />
            <path d={gurugramRoads.trunk} stroke="rgb(56 189 248 / 0.75)" strokeWidth={4} />
            <path d={gurugramRoads.expressway} stroke="rgb(52 211 153 / 0.35)" strokeWidth={12} />
            <path d={gurugramRoads.expressway} stroke="rgb(110 231 183)" strokeWidth={4.5} />
            {/* ground pulse under the pin */}
            <circle cx={gurugramPlaces.pin[0]} cy={gurugramPlaces.pin[1]} r={26} fill="rgb(110 231 183 / 0.25)" />
            <circle cx={gurugramPlaces.pin[0]} cy={gurugramPlaces.pin[1]} r={26} stroke="rgb(110 231 183 / 0.7)" strokeWidth={3}>
              <animate attributeName="r" values="26;70" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            {labels.map(({ key }) => (
              <circle key={key} cx={gurugramPlaces[key][0]} cy={gurugramPlaces[key][1]} r={6} fill="white" opacity={0.85} />
            ))}
          </svg>
        </div>

        {/* ── upright labels at projected positions ── */}
        {labels.map(({ key, text }) => {
          const p = project(gurugramPlaces[key]);
          return (
            <span
              key={key}
              className="absolute -translate-x-1/2 -translate-y-[130%] whitespace-nowrap rounded-md bg-gray-950/70 px-1.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm"
              style={{ left: `calc(50% + ${p.left}px)`, top: `calc(50% + ${p.top}px)` }}
            >
              {text}
            </span>
          );
        })}

        {/* ── Sector 15 pin ── */}
        <div
          className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center"
          style={{ left: `calc(50% + ${pin.left}px)`, top: `calc(50% + ${pin.top}px)` }}
        >
          <span className="mb-1 whitespace-nowrap rounded-full bg-emerald-300 px-2 py-0.5 text-[10px] font-bold text-gray-900">Sector 15</span>
          <div className="rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 p-1 shadow-[0_8px_24px] shadow-emerald-400/40">
            <Image src={SmileEmojie} alt="" className="size-9 rounded-full" />
          </div>
          <span className="h-5 w-0.5 bg-gradient-to-b from-sky-400 to-emerald-300" />
        </div>
      </div>

      {/* ── info bar ── */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-gray-900/85 backdrop-blur px-4 py-2.5">
        <div className="leading-tight min-w-0">
          <p className="text-sm font-semibold text-white truncate">Sector 15, Gurugram</p>
          <p className="text-[11px] text-white/50">Haryana, India · Current base</p>
        </div>
        <div className="text-right leading-tight shrink-0">
          <p className="font-mono text-sm text-emerald-300">{time ?? "--:--"}</p>
          <p className="text-[11px] text-white/40">IST · UTC+5:30</p>
        </div>
      </div>
      <p className="absolute left-4 top-3 text-[9px] text-white/30">© OpenStreetMap</p>
    </div>
  );
};
