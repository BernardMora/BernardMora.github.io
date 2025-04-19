import { getDictionary } from "@/lib/i18n/dictionaries";
import { languages } from "@/lib/i18n/languages";
import BlogPage from "@/components/blog-page";
import { getBlogPosts } from "@/lib/i18n/blogPosts";
import { type SupportedLanguages } from "@/lib/i18n/languages";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }));
}

export default async function Blog({
  params,
}: {
  params: { lang: SupportedLanguages };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es" | "zh");
  const blogSlugs = await getBlogPosts(lang);

  return <BlogPage lang={lang} dictionary={dict} blogPosts={blogSlugs} />;
}
