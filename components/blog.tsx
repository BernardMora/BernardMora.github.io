"use client";

import { useRef } from "react";
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
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { BlogPost } from "@/lib/i18n/blogPosts";

import React from "react";

export default function Blog({
  blogs,
  dictionary,
  lang,
}: {
  blogs: BlogPost[] | null; // Allow for null or undefined
  dictionary: Dictionary;
  lang: "en" | "es" | "zh";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Ensure blogs is an array
  const displayedPosts = Array.isArray(blogs) ? blogs.slice(0, 3) : [];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{dictionary.blog.title}</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.blog.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedPosts.map((post, index) => (
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
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href={`/${lang}/blog`}>{dictionary.blog.viewAllPosts}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
