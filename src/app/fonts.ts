import localFont from "next/font/local";

// Geist and Geist Mono (SIL Open Font License, see src/assets/fonts/OFL.txt).

export const geistSans = localFont({
  src: "../assets/fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

// Only used for small labels, so it is not preloaded: the headline font gets the bandwidth first.
export const geistMono = localFont({
  src: "../assets/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});
