"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, X } from "lucide-react";
import CustomLink from "./custom-link";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Header({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = (file, fileName) => {
    // In a real implementation, this would download the file
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { href: `/` + lang + `#about`, label: dictionary.navigation.about },
    {
      href: `/` + lang + `#projects`,
      label: dictionary.navigation.projects,
    },
    { href: `/` + lang + `#skills`, label: dictionary.navigation.skills },
    {
      href: `/` + lang + `#education`,
      label: dictionary.navigation.education,
    },
    { href: `/` + lang + `#blog`, label: dictionary.navigation.blog },
    {
      href: `/` + lang + `#testimonials`,
      label: dictionary.navigation.testimonials,
    },
    { href: `/` + lang + `#contact`, label: dictionary.navigation.contact },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <CustomLink href={`/${lang}`} className="text-xl font-bold">
          Bernardo<span className="text-primary">Morales</span>
        </CustomLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <CustomLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </CustomLink>
          ))}
          <Button
            onClick={() =>
              handleDownload("/files/Resume_English.pdf", "Bernardo_Resume.pdf")
            }
            variant="outline"
          >
            {dictionary.navigation.resume}
          </Button>
          <LanguageSwitcher lang={lang} />
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <LanguageSwitcher lang={lang} />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <CustomLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </CustomLink>
            ))}
            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full"
            >
              {dictionary.navigation.resume}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
