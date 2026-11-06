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
          background: "#B6FF3B",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path d="M16 5.5 25.5 26.5h-4.6l-1.9-4.6h-6l-1.9 4.6H6.5zm0 7.6-1.9 5.2h3.8z" fill="#101010" fillRule="evenodd" />
        </svg>
      </div>
    ),
    size,
  );
}
