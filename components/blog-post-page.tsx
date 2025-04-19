"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { type BlogPost } from "@/lib/i18n/blogPosts";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { type SupportedLanguages } from "@/lib/i18n/languages";
import { type BlogPostContent } from "@/lib/i18n/blogPosts";

export default function BlogPostPage({
  blogPost,
  posts,
  lang,
  slug,
  dictionary,
}: {
  blogPost: BlogPost;
  posts: BlogPost[];
  lang: SupportedLanguages;
  slug: string;
  dictionary: Dictionary;
}) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Get related posts if available
    if (blogPost?.relatedPosts) {
      const related = blogPost.relatedPosts
        .map((id) => posts.find((post) => post.id === id))
        .filter((post): post is BlogPost => post !== undefined);
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!blogPost) {
    return (
      <div className="font-sans antialiased">
        <Header lang={lang} dictionary={dictionary} />
        <main className="pt-32 pb-16 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">blogPost not found</h1>
            <Button asChild>
              <Link href={`/${lang}/blog`}>
                <ArrowLeft className="mr-2 h-4 w-4" />{" "}
                {dictionary.blog.backToBlog}
              </Link>
            </Button>
          </div>
        </main>
        <Footer lang={lang} dictionary={dictionary} />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased">
      <Header lang={lang} dictionary={dictionary} />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                href={`/${lang}/blog`}
                className="block text-primary hover:underline mb-2"
              >
                <ArrowLeft className="mr-2 inline h-4 w-4" />{" "}
                {dictionary.blog.backToBlog}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {blogPost.title}
              </h1>
              <Badge className="inline-block mb-6">{blogPost.category}</Badge>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={blogPost.author?.image || "/placeholder.svg"}
                      alt={blogPost.author?.name || "Author"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">
                      {blogPost.author?.name || "Author"}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" /> {blogPost.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> {blogPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="flex gap-2">
                  <Button variant="ghost" size="icon" aria-label="Share">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Bookmark">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Author Bio */}
              <div className="mt-16 p-6 bg-muted rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={blogPost.author?.image || "/placeholder.svg"}
                      alt={blogPost.author?.name || "Author"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      About {blogPost.author?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {blogPost.author?.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <h2 className="text-2xl font-bold mb-8">
                  {dictionary.blog.relatedArticles}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="h-full flex flex-col overflow-hidden group"
                    >
                      <div className="relative overflow-hidden h-40">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>{relatedPost.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="flex-grow p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          <Link href={`/${lang}/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />{" "}
                            {relatedPost.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />{" "}
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
