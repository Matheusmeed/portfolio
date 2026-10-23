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
          backgroundColor: "#0D0F12",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path
            d="M8.5 22.5v-13l7.5 8.5 7.5-8.5v13"
            fill="none"
            stroke="#FF7A3D"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
