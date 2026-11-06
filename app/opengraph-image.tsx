import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Accro Temple : coaching sportif avec Hassane Yahya à Saint-Lô";
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
              <path d="M16 5.5 25.5 26.5h-4.6l-1.9-4.6h-6l-1.9 4.6H6.5zm0 7.6-1.9 5.2h3.8z" fill="#101010" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: 2 }}>ACCRO TEMPLE · COACHING</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1, textTransform: "uppercase" }}>
            Tu es bien plus
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", marginTop: 8 }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1, textTransform: "uppercase" }}>
              capable que tu ne le penses
            </div>
            <div style={{ height: 14, background: "#B6FF3B", borderRadius: 8, marginTop: 10 }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#A8A8A8" }}>
          <span>Coach sportif à Saint-Lô · Hassane Yahya</span>
          <span style={{ color: "#3ABEFF" }}>Projet d&apos;entraînement</span>
        </div>
      </div>
    ),
    size,
  );
}
