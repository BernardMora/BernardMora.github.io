import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const locales = ["en", "es", "zh"]
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // If no Accept-Language header is set or it's empty, use defaultLocale
  if (!languages || languages.length === 0) {
    languages = [defaultLocale]
  }

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Skip middleware during static export
  if (process.env.NEXT_PHASE === "phase-export") {
    return
  }

  const pathname = request.nextUrl.pathname

  // Get the base path from the environment or use an empty string
  const basePath = process.env.NODE_ENV === "production" ? "/BernardMoragithubiocopy" : ""

  // Remove the base path from the pathname for locale detection
  const pathnameWithoutBase = pathname.replace(basePath, "")

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathnameWithoutBase.startsWith(`/${locale}/`) || pathnameWithoutBase === `/${locale}`,
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `${basePath}/${locale}${pathnameWithoutBase}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico|img|files|placeholder.svg).*)",
  ],
}
