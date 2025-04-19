import type { SupportedLanguages } from "@/lib/i18n/languages"

declare module "next" {
  interface PageProps {
    params: {
      lang: SupportedLanguages
      slug?: string
    }
    searchParams?: { [key: string]: string | string[] | undefined }
  }
}
