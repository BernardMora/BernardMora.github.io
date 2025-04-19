export type Project = {
  id: string
  title: string
  description: string
  details: string
  tags: string[]
  category: string
  image?: string
  github?: string
  link?: string
  isPrivate?: boolean
}

const projects = {
  en: () => import("./en-projects.json").then((module) => module.default) as Promise<Project[]>,
  es: () => import("./es-projects.json").then((module) => module.default) as Promise<Project[]>,
  zh: () => import("./zh-projects.json").then((module) => module.default) as Promise<Project[]>,
}

export const getProjects = async (locale: keyof typeof projects) => {
    return projects[locale]()
  }
  