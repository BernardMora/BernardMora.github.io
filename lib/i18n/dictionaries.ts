import "server-only"

export type Dictionary = {
  navigation: {
    about: string
    projects: string
    skills: string
    education: string
    blog: string
    testimonials: string
    contact: string
    resume: string
  }
  hero: {
    greeting: string
    roles: string[]
    description: string
    viewWork: string
    getInTouch: string
  }
  about: {
    title: string
    subtitle: string
    description1: string
    description2: string
    description3: string
    aiEnthusiast: {
      title: string
      description: string
    }
    softwareEngineer: {
      title: string
      description: string
    }
    physicsEnthusiast: {
      title: string
      description: string
    }
    philosophicalThinker: {
      title: string
      description: string
    }
  }
  projects: {
    title: string
    subtitle: string
    all: string
    web: string
    ai: string
    data: string
    games: string
    learnMore: string
    technologies: string
    details: string
    github: string
    liveDemo: string
    privateProject: string
  }
  skills: {
    title: string
    subtitle: string
    programming: string
    pythonStack: string
    web: string
    databases: string
    languages: string
  }
  education: {
    title: string
    subtitle: string
    academicInstitutions: string
    certifications: string
    viewCertificate: string
  }
  blog: {
    title: string
    subtitle: string
    readMore: string
    viewAllPosts: string
    searchPlaceholder: string
    noPostsFound: string
    tryAdjusting: string
    clearFilters: string
    featuredPosts: string
    relatedArticles: string
    backToHome: string
    backToBlog: string
  }
  testimonials: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    contactInfo: string
    contactInfoDes: string
    connectWithMe: string
    sendMessage: string
    sendMessageDes: string
    messageSent: string
    thankYou: string
    name: string
    email: string
    message: string
    yourName: string
    yourEmail: string
    yourMessage: string
    sending: string
    send: string
  }
  footer: {
    description: string
    rights: string
  }
}

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default) as Promise<Dictionary>,
  es: () => import("./es.json").then((module) => module.default) as Promise<Dictionary>,
  zh: () => import("./zh.json").then((module) => module.default) as Promise<Dictionary>,
}

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]()
}

