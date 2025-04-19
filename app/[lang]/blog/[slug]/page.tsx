import { getDictionary } from "@/lib/i18n/dictionaries";
import { languages } from "@/lib/i18n/languages";
import BlogPostPage from "@/components/blog-post-page";
import {
  getBlogPosts,
  getBlogPostBySlug,
  getBlogPostContents,
} from "@/lib/i18n/blogPosts";
import { type SupportedLanguages } from "@/lib/i18n/languages";

export default async function BlogPost({
  params,
}: {
  params: { lang: SupportedLanguages; slug: string };
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const blogPosts = await getBlogPosts(lang);
  let blogPost = await getBlogPostBySlug(slug, blogPosts);

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
