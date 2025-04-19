import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Footer({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: Dictionary;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Bernardo<span className="text-primary">Morales</span>
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              {dictionary.footer.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/BernardMora"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/bernardo-morales-ramos-727159263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:berna5869@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bernardo Morales. {dictionary.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
