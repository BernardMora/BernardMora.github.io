"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Atom, BookOpen } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function About({ dictionary }: { dictionary: Dictionary }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {dictionary.about.title}
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-12">
            <p className="text-lg leading-relaxed">
              {dictionary.about.description1}
            </p>
            <p className="text-lg leading-relaxed mt-4">
              {dictionary.about.description2}
            </p>
            <p className="text-lg leading-relaxed mt-4">
              {dictionary.about.description3}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Brain className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {dictionary.about.aiEnthusiast.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dictionary.about.aiEnthusiast.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Code className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {dictionary.about.softwareEngineer.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dictionary.about.softwareEngineer.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Atom className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {dictionary.about.physicsEnthusiast.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dictionary.about.physicsEnthusiast.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <BookOpen className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {dictionary.about.philosophicalThinker.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {dictionary.about.philosophicalThinker.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
