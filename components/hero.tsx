"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Hero({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.07]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {dictionary.hero.greeting}
            </h1>
            <div className="h-16 mt-4 text-2xl md:text-3xl font-medium text-primary">
              <TypewriterComponent
                options={{
                  strings: dictionary.hero.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              {dictionary.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  {dictionary.hero.viewWork}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">{dictionary.hero.getInTouch}</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://github.com/BernardMora"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bernardo-morales-ramos-727159263/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:berna5869@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-2xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/img/bernardo.png"
                  alt="Bernardo Morales"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-background rounded-full p-2 shadow-lg">
                <Image
                  src="/img/wave-hello.gif?height=60&width=60"
                  alt="Wave"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
