import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share card in the site's theme: dark base, orbit rings, emerald → sky gradient.
export default function OpengraphImage() {
  const rings = [360, 520, 680, 840];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "#111827",
          color: "white",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {rings.map((r) => (
          <div
            key={r}
            style={{
              position: "absolute",
              width: r,
              height: r,
              right: 220 - r / 2,
              top: 315 - r / 2,
              borderRadius: "50%",
              border: "2px solid rgba(110,231,183,0.12)",
            }}
          />
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#34d399" }} />
          {siteConfig.role} @ {siteConfig.company}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(90deg, #6ee7b7, #38bdf8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 34, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
          Building exceptional user experiences with React, Next.js & TypeScript.
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 24, color: "rgba(255,255,255,0.45)" }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    size
  );
}
