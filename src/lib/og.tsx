import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { housePath, markerPath, ticksPath, turntable } from "./house";

export const ogSize = { width: 1200, height: 630 };

const FRAME = 14;

async function loadFonts() {
  const dir = join(process.cwd(), "src/assets/fonts");
  const [sans, mono] = await Promise.all([
    readFile(join(dir, "Geist-SemiBold.ttf")),
    readFile(join(dir, "GeistMono-Regular.ttf")),
  ]);
  return [
    { name: "Geist", data: sans, weight: 600 as const, style: "normal" as const },
    { name: "Geist Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

type OgImageOptions = {
  eyebrow: string;
  title: string;
  footer: string;
  /** Green "available" dot instead of the accent dot. */
  available?: boolean;
};

/** Social preview in the site's style: headline on the left, the wireframe house on the right. */
export async function renderOgImage({ eyebrow, title, footer, available = false }: OgImageOptions) {
  const table = turntable();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 72,
          backgroundColor: "#0D0F12",
          backgroundImage:
            "linear-gradient(#14171C 1px, transparent 1px), linear-gradient(90deg, #14171C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#ECEEF1",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#8A9099",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 720,
              fontSize: title.length > 34 ? 66 : 78,
              lineHeight: 1.04,
              letterSpacing: -2.5,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#A0A6AF" }}>
            <div
              style={{
                width: 12,
                height: 12,
                marginRight: 14,
                borderRadius: 999,
                backgroundColor: available ? "#3DDC97" : "#FF7A3D",
              }}
            />
            {footer}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: 340 }}>
          <svg width="340" height="264" viewBox="0 0 360 280">
            <ellipse
              cx={table.cx}
              cy={table.cy}
              rx={table.rx}
              ry={table.ry}
              fill="#0D0F12"
              stroke="#232830"
            />
            <path d={ticksPath()} fill="none" stroke="#3A404A" />
            <path
              d={markerPath(FRAME)}
              fill="none"
              stroke="#FF7A3D"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <path
              d={housePath(FRAME)}
              fill="none"
              stroke="#ECEEF1"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await loadFonts() },
  );
}
