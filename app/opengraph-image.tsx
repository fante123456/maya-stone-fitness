import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Maya Stone Fitness: Stronger body, clearer mind, better lifestyle. Personal trainer in Manchester.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101010",
          color: "#F8F8F8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "#B6FF3B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 32 32">
              <path d="M7 23V9.5h3.4L16 17l5.6-7.5H25V23h-3.6v-7.6L16 22.4l-5.4-7V23z" fill="#101010" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: 2 }}>MAYA STONE FITNESS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, textTransform: "uppercase" }}>
            Stronger body, clearer mind,
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", marginTop: 8 }}>
            <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, textTransform: "uppercase" }}>
              better lifestyle
            </div>
            <div style={{ height: 14, background: "#B6FF3B", borderRadius: 8, marginTop: 10 }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#A8A8A8" }}>
          <span>Personal Trainer in Manchester</span>
          <span style={{ color: "#3ABEFF" }}>Strength · Online · Lifestyle</span>
        </div>
      </div>
    ),
    size,
  );
}
