import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Medeiros — Frontend Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh bg-ink font-sans text-fg antialiased">{children}</body>
    </html>
  );
}
