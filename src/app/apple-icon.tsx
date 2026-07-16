import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0C",
          borderRadius: 36,
          border: "6px solid #C6A15B",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            color: "#C6A15B",
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: "-3px",
            transform: "skewX(-12deg)",
            lineHeight: 1,
          }}
        >
          GT
        </div>
      </div>
    ),
    { ...size },
  );
}
