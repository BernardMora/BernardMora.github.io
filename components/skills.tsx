"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LanguageItem = {
  name: string;
  icon: string;
};

const getLanguages = (lang: string): LanguageItem[] => {
  switch (lang) {
    case "es":
      return [
        { name: "Español (Nativo)", icon: "/img/skills/mexico.png" },
        { name: "Inglés (Avanzado)", icon: "/img/skills/usa.png" },
        { name: "Chino (Aprendiendo)", icon: "/img/skills/china.png" },
      ];
    case "zh":
      return [
        { name: "西班牙语（母语）", icon: "/img/skills/mexico.png" },
        { name: "英语（高级）", icon: "/img/skills/usa.png" },
        { name: "中文（正在学习）", icon: "/img/skills/china.png" },
      ];
    case "en":
    default:
      return [
        { name: "Spanish (Native)", icon: "/img/skills/mexico.png" },
        { name: "English (Advanced)", icon: "/img/skills/usa.png" },
        { name: "Chinese (Currently Learning)", icon: "/img/skills/china.png" },
      ];
  }
};

export default function Skills({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const programmingLanguages = [
    { name: "Python", icon: "/img/skills/python.png" },
    { name: "JavaScript", icon: "/img/skills/javascript.png" },
    { name: "HTML", icon: "/img/skills/html.png" },
    { name: "CSS", icon: "/img/skills/css.png" },
    { name: "C/C++", icon: "/img/skills/c++.png" },
    { name: "Java", icon: "/img/skills/java.png" },
  ];

  const pythonStack = [
    { name: "Flask", icon: "/img/skills/flask.png" },
    { name: "NumPy", icon: "/img/skills/numpy.svg" },
    { name: "Pandas", icon: "/img/skills/pandas.png" },
    { name: "TensorFlow", icon: "/img/skills/tensorflow.png" },
    { name: "PyTorch", icon: "/img/skills/pytorch.png" },
    { name: "scikit-learn", icon: "/img/skills/scikit-learn.png" },
    { name: "Matplotlib", icon: "/img/skills/matplotlib.png" },
    { name: "Seaborn", icon: "/img/skills/seaborn.svg" },
  ];

  const webTechnologies = [
    { name: "React", icon: "/img/skills/react.png" },
    { name: "Next.js", icon: "/img/skills/nextjs.webp" },
    { name: "Tailwind CSS", icon: "/img/skills/tailwind.png" },
    { name: "Bootstrap", icon: "/img/skills/bootstrap.png" },
    { name: "Node.js", icon: "/img/skills/nodejs.png" },
    { name: "Git", icon: "/img/skills/github.png" },
  ];

  const databases = [
    { name: "PostgreSQL", icon: "/img/skills/postgres.png" },
    { name: "MySQL", icon: "/img/skills/mysql.png" },
    { name: "Firebase", icon: "/img/skills/firebase.png" },
  ];

  const languages = getLanguages(lang);

  const renderSkills = (skills) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-16 h-16 mb-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-center font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{dictionary.skills.title}</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="flex overflow-x-auto whitespace-nowrap md:grid md:grid-cols-5 w-full mb-8 gap-2">
              <TabsTrigger value="programming">
                {dictionary.skills.programming}
              </TabsTrigger>
              <TabsTrigger value="python">
                {dictionary.skills.pythonStack}
              </TabsTrigger>
              <TabsTrigger value="web">{dictionary.skills.web}</TabsTrigger>
              <TabsTrigger value="databases">
                {dictionary.skills.databases}
              </TabsTrigger>
              <TabsTrigger value="languages">
                {dictionary.skills.languages}
              </TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="pt-6">
                <TabsContent value="programming" className="mt-0">
                  {renderSkills(programmingLanguages)}
                </TabsContent>

                <TabsContent value="python" className="mt-0">
                  {renderSkills(pythonStack)}
                </TabsContent>

                <TabsContent value="web" className="mt-0">
                  {renderSkills(webTechnologies)}
                </TabsContent>

                <TabsContent value="databases" className="mt-0">
                  {renderSkills(databases)}
                </TabsContent>

                <TabsContent value="languages" className="mt-0">
                  {renderSkills(languages)}
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
