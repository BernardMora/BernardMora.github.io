import fs from "fs";
import path from "path";

export type BlogPost = {
    id: number
    filename: string
    title: string
    excerpt: string
    image: string
    date: string
    readTime: string
    category: string
    slug: string
    content: string
    featured: boolean
    author: {
      name: string
      image: string
      bio: string
    }
    relatedPosts: number[]
    }

export type BlogPostContent = {
    id: number
    title: string
    content: string
}

const blogPosts = {
    en: () => import("../blogPosts/en/en-blogPosts.json").then((module) => module.default) as Promise<BlogPost[]>,
    es: () => import("../blogPosts/es/es-blogPosts.json").then((module) => module.default) as Promise<BlogPost[]>,
    zh: () => import("../blogPosts/zh/zh-blogPosts.json").then((module) => module.default) as Promise<BlogPost[]>,
    }
  
  export const getBlogPosts = async (locale: keyof typeof blogPosts) => {
      return blogPosts[locale]()
    }

  export const getBlogPostBySlug = async (slug: string, posts: BlogPost[]) => {
      return posts.find((post) => post.slug === slug)
    }


  export async function getBlogPostContents(filename: string, lang: string): Promise<string> {
    const post = await import(`../blogPosts/${lang}/${filename}.json`);
    return post.content;
  }
