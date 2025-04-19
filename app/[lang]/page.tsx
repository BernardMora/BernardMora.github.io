import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Blog from "@/components/blog";
import Testimonials from "@/components/testimonials";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getProjects } from "@/lib/i18n/projects";
import { getEducation } from "@/lib/i18n/education";
import { getTestimonials } from "@/lib/i18n/testimonials";
import { getBlogPosts } from "@/lib/i18n/blogPosts";
import { type SupportedLanguages } from "@/lib/i18n/languages";
import * as React from "react";

export default async function Home({
  params,
}: {
  params: { lang: SupportedLanguages };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const projects = await getProjects(lang);
  const education = await getEducation(lang);
  const testimonials = await getTestimonials(lang);
  const blogSlugs = await getBlogPosts(lang);

  return (
    <div className="font-sans antialiased">
      <Header lang={lang} dictionary={dict} />
      <main>
        <Hero lang={lang} dictionary={dict} />
        <About dictionary={dict} />
        <Projects lang={lang} dictionary={dict} projects={projects} />
        <Skills lang={lang} dictionary={dict} />
        <Education education={education} dictionary={dict} />
        <Blog lang={lang} blogs={blogSlugs} dictionary={dict} />
        <Testimonials testimonials={testimonials} dictionary={dict} />
        <Contact lang={lang} dictionary={dict} />
      </main>
      <Footer lang={lang} dictionary={dict} />
    </div>
  );
}
