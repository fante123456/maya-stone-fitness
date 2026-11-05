import { ImageResponse } from "next/og";

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
          <path d="M7 23V9.5h3.4L16 17l5.6-7.5H25V23h-3.6v-7.6L16 22.4l-5.4-7V23z" fill="#101010" />
        </svg>
      </div>
    ),
    size,
  );
}
