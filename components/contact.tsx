"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Contact({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: dictionary.contact.messageSent,
        description: dictionary.contact.thankYou,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const translations: Record<string, Record<string, string>> = {
    en: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    es: {
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
    },
    zh: {
      email: "电子邮件",
      phone: "电话",
      location: "位置",
    },
  };

  // Function to generate contact info with localized labels
  const getContactInfo = (lang: "en" | "es" | "zh") => {
    const t = translations[lang] || translations.en;
    return [
      {
        icon: <Mail className="h-5 w-5" />,
        label: t.email,
        value: "berna5869@gmail.com",
        link: "mailto:berna5869@gmail.com",
      },
      {
        icon: <Phone className="h-5 w-5" />,
        label: t.phone,
        value: "+52 664 385 8453",
        link: "tel:+526643858453",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: t.location,
        value: "Baja California, Mexico",
        link: null,
      },
    ];
  };

  // Usage
  const contactInfo = getContactInfo(lang);

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/BernardMora",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bernardo-morales-ramos-727159263/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            {dictionary.contact.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{dictionary.contact.contactInfo}</CardTitle>
                  <CardDescription>
                    {dictionary.contact.contactInfoDes}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-0.5 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{item.label}</h4>
                        {item.link ? (
                          <Link
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-3">
                      {dictionary.contact.connectWithMe}
                    </h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                          >
                            {social.icon}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{dictionary.contact.sendMessage}</CardTitle>
                  <CardDescription>
                    {dictionary.contact.sendMessageDes}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          {dictionary.contact.name}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={dictionary.contact.yourName}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {dictionary.contact.email}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={dictionary.contact.yourEmail}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {dictionary.contact.message}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={dictionary.contact.yourMessage}
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? dictionary.contact.sending
                        : dictionary.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
