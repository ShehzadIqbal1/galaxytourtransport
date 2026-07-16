import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** Crisp favicon / Google Search icon — GT mark on onyx. */
export default function Icon() {
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
          borderRadius: "50%",
          border: "14px solid #C6A15B",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 210,
            fontWeight: 900,
            color: "#C6A15B",
            fontFamily: "Arial Black, Arial, sans-serif",
            letterSpacing: "-8px",
            transform: "skewX(-12deg)",
            lineHeight: 1,
            marginTop: "-8px",
          }}
        >
          GT
        </div>
      </div>
    ),
    { ...size },
  );
}
