import { getDictionary } from "@/lib/i18n/dictionaries";
import BlogPostPage from "@/components/blog-post-page";
import {
  getBlogPosts,
  getBlogPostBySlug,
  getBlogPostContents,
} from "@/lib/i18n/blogPosts";
import type { SupportedLanguages } from "@/lib/i18n/languages";

// Use the correct Next.js page props type
export default async function BlogPost({
  params,
}: {
  params: {
    lang: SupportedLanguages;
    slug: string;
  };
}) {
  const { lang, slug } = params;

  const dict = await getDictionary(lang);
  const blogPosts = await getBlogPosts(lang);
  const blogPost = await getBlogPostBySlug(slug, blogPosts);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  blogPost.content = await getBlogPostContents(blogPost.filename, lang);

  return (
    <BlogPostPage
      blogPost={blogPost}
      posts={blogPosts}
      lang={lang}
      slug={slug}
      dictionary={dict}
    />
  );
}

export async function generateStaticParams() {
  const languages = ["en", "es", "zh"] as const;
  const paths = [];

  for (const lang of languages) {
    const posts = await getBlogPosts(lang);
    const langPaths = posts.map((post) => ({
      lang,
      slug: post.slug,
    }));
    paths.push(...langPaths);
  }

  return paths;
}
