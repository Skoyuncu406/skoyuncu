import { NextResponse } from "next/server";

const locales = ["tr", "en"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPublicFile = pathname.match(/\.(.*)$/);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    isPublicFile
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/tr${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
