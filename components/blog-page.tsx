"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Calendar, Clock, Search } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { BlogPost } from "@/lib/i18n/blogPosts";

export default function BlogPage({
  lang,
  dictionary,
  blogPosts,
}: {
  lang: string;
  dictionary: Dictionary;
  blogPosts: BlogPost[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get all unique categories
  const allCategories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {dictionary.blog.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {dictionary.blog.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">
                {dictionary.blog.featuredPosts}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * post.id }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden group">
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="default">Featured</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-xs">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="p-0 h-auto" asChild>
                          <Link
                            href={`/${lang}/blog/${post.slug}`}
                            className="flex items-center text-primary font-medium"
                          >
                            {dictionary.blog.readMore}{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={dictionary.blog.searchPlaceholder}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Tabs defaultValue="All" className="w-full md:w-auto">
                <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:flex">
                  {allCategories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* All Posts */}
            <motion.div
              ref={ref}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeIn}>
                    <Card className="h-full flex flex-col overflow-hidden group">
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>{post.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-xs">
                          <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="p-0 h-auto" asChild>
                          <Link
                            href={`/${lang}/blog/${post.slug}`}
                            className="flex items-center text-primary font-medium"
                          >
                            {dictionary.blog.readMore}{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-medium mb-2">
                    {dictionary.blog.noPostsFound}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {dictionary.blog.tryAdjusting}
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                  >
                    {dictionary.blog.clearFilters}
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Back to Home */}
            <div className="mt-16 text-center">
              <Button variant="outline" asChild>
                <Link href={`/${lang}`} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />{" "}
                  {dictionary.blog.backToHome}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  );
}
