export type TestimonialsType = {
    id: string
    name: string
    role: string
    image: string
    quote: string
  }
  
  const testimonials = {
    en: () => import("./en-testimonials.json").then((module) => module.default) as Promise<TestimonialsType[]>,
    es: () => import("./es-testimonials.json").then((module) => module.default) as Promise<TestimonialsType[]>,
    zh: () => import("./zh-testimonials.json").then((module) => module.default) as Promise<TestimonialsType[]>,
  }
  
  export const getTestimonials = async (locale: keyof typeof testimonials) => {
      return testimonials[locale]()
    }
    