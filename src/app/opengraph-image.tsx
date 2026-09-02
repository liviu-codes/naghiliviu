import { ImageResponse } from "next/og";
import { en } from "@/lib/i18n/en";

export const alt = en.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#34d399",
          }}
        >
          {en.hero.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#fafafa",
          }}
        >
          {en.hero.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            maxWidth: 900,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          {en.hero.subtext}
        </div>
      </div>
    ),
    { ...size }
  );
}
