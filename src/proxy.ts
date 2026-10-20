import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, type Locale } from "@/lib/i18n";

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * English is served at the root ("/work/..."), Portuguese under "/pt".
 * Internally every page lives in app/[lang], so root URLs are rewritten to "/en/...".
 *
 * On a first visit, a Portuguese browser is sent to "/pt". The language switch
 * links to "/en/..." or "/pt/...", and that choice is saved in a cookie.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (segment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return remember(request, NextResponse.redirect(url), defaultLocale);
  }

  if (isLocale(segment)) {
    return remember(request, NextResponse.next(), segment);
  }

  const preferred = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;

  return preferred === defaultLocale ? NextResponse.rewrite(url) : NextResponse.redirect(url);
}

function remember(request: NextRequest, response: NextResponse, locale: Locale) {
  if (request.cookies.get(localeCookie)?.value !== locale) {
    response.cookies.set(localeCookie, locale, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
  }
  return response;
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (isLocale(saved)) return saved;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().toLowerCase().split(";");
      const quality = params.find((param) => param.trim().startsWith("q="));
      return { tag, q: quality ? Number(quality.trim().slice(2)) : 1 };
    })
    .filter(({ tag, q }) => tag && q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const language = tag.split("-")[0];
    if (isLocale(language)) return language;
  }
  return defaultLocale;
}

export const config = {
  // Skip Next.js internals, files with an extension and generated images.
  matcher: ["/((?!_next|api|apple-icon|.*opengraph-image|.*\\..*).*)"],
};
