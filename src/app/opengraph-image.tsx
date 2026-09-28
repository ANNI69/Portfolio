import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          padding: 80,
          background: "#08090A",
          color: "#F5F5F5",
          fontFamily: "sans-serif",
          border: "4px solid #262A2D",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            color: "#6F7579",
          }}
        >
          <div
            style={{
              width: 48,
              height: 8,
              background: "#26A641",
              borderRadius: 4,
            }}
          />
          ANIRUDDH NAGARE
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24 }}>
          Software Developer
        </div>
        <div style={{ fontSize: 28, color: "#A3A7AA", marginTop: 16 }}>
          Scalable web · Backend systems · AI applications
        </div>
      </div>
    ),
    { ...size }
  );
}
