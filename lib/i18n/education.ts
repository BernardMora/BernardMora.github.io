import "server-only"

export type EducationType = {
    institutions:
        {
            name: string
            logo: string
            image: string
            description: string
            period: string
        }[]
    certifications:
        {
            name: string
            organization: string
            logo?: string
            description: string
            file: string
        }[]
}

const education = {
  en: () => import("./en-education.json").then((module) => module.default) as Promise<EducationType>,
  es: () => import("./es-education.json").then((module) => module.default) as Promise<EducationType>,
  zh: () => import("./zh-education.json").then((module) => module.default) as Promise<EducationType>,
}

export const getEducation = async (locale: keyof typeof education) => {
  return education[locale]()
}

