import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "./i18n/locales";

// "/" is the language picker. Visitors who already picked a language (saved
// by LocaleLink) go straight to it.
export function proxy(request: NextRequest) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return NextResponse.redirect(new URL(`/${saved}`, request.url));
}

export const config = {
  matcher: "/",
};
