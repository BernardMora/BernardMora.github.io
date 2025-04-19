"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { EducationType } from "@/lib/i18n/education";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Education({
  dictionary,
  education,
}: {
  dictionary: Dictionary;
  education: EducationType[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const handleDownload = (file, fileName) => {
    // In a real implementation, this would download the file
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {dictionary.education.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.education.subtitle}
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {dictionary.education.academicInstitutions}
          </h3>
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {education.institutions.map((institution, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={institution.image || "/placeholder.svg"}
                      alt={institution.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src={institution.logo || "/placeholder.svg"}
                        alt={`${institution.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {institution.name}
                      </CardTitle>
                      <CardDescription>{institution.period}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{institution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            {dictionary.education.certifications}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {education.certificates.map((certificate, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={certificate.logo || "/placeholder.svg"}
                          alt={`${certificate.organization} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-center text-lg">
                      {certificate.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {certificate.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {certificate.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        handleDownload(
                          certificate.file,
                          `${certificate.name}.pdf`
                        )
                      }
                    >
                      <Download className="mr-2 h-4 w-4" />{" "}
                      {dictionary.education.viewCertificate}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
