import type { Metadata, Viewport } from "next";
import { dictionaries } from "@/content";
import { htmlLang, locales } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { site, siteUrl } from "@/lib/site";
import { geistMono, geistSans } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.jobTitle}`,
    template: `%s · ${site.name}`,
  },
  applicationName: site.name,
  authors: [{ name: site.legalName, url: siteUrl }],
  creator: site.legalName,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0f12",
  colorScheme: "dark",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const { a11y } = dictionaries[locale];

  return (
    <html
      lang={htmlLang[locale]}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-ink font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-fg px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          {a11y.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
