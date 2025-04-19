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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Project } from "@/lib/i18n/projects";

export default function Projects({
  dictionary,
  projects,
}: {
  dictionary: Dictionary;
  projects: Project[];
}) {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {dictionary.projects.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.projects.subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-4 md:grid-cols-5 w-full">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              {dictionary.projects.all}
            </TabsTrigger>
            <TabsTrigger value="web" onClick={() => setFilter("web")}>
              {dictionary.projects.web}
            </TabsTrigger>
            <TabsTrigger value="ai" onClick={() => setFilter("ai")}>
              {dictionary.projects.ai}
            </TabsTrigger>
            <TabsTrigger value="data" onClick={() => setFilter("data")}>
              {dictionary.projects.data}
            </TabsTrigger>
            <TabsTrigger
              value="game"
              onClick={() => setFilter("game")}
              className="hidden md:block"
            >
              {dictionary.projects.games}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        {dictionary.projects.learnMore}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="relative h-64 w-full mb-6">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">
                              {dictionary.projects.technologies}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-1">
                              {dictionary.projects.details}
                            </h4>
                            <p>{project.details}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                          {project.github && (
                            <Button asChild variant="outline" size="sm">
                              <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" /> GitHub
                              </Link>
                            </Button>
                          )}
                          {project.link && (
                            <Button asChild size="sm">
                              <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />{" "}
                                {dictionary.projects.liveDemo}
                              </Link>
                            </Button>
                          )}
                          {project.isPrivate && (
                            <Badge variant="outline">
                              {dictionary.projects.privateProject}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                    {project.link && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
