import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0f1117",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          gap: "32px",
        }}
      >
        {/* Cloud glyph via SVG */}
        <svg
          width="96"
          height="72"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 16H4a4 4 0 0 1-.8-7.92 6 6 0 1 1 11.6 0A4 4 0 0 1 20 16z"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: "700",
            color: "#f1f5f9",
            letterSpacing: "-3px",
            lineHeight: "1",
          }}
        >
          Greyout
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "400",
            color: "#94a3b8",
            letterSpacing: "0.5px",
            textAlign: "center",
          }}
        >
          Grey out your screen. Kill the distraction.
        </div>
      </div>
    ),
    { ...size },
  );
}
