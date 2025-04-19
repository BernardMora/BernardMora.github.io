import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { languages } from "@/lib/i18n/languages";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bernardo Morales | Software Engineer",
  icons: {
    icon: "/img/tree.png",
    shortcut: "/img/tree.png",
    apple: "/img/tree.png",
  },
  description:
    "Personal portfolio of Bernardo Morales - Software Engineer and Student",
  generator: "v0.dev",
};
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang: lang.code }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = await params;
  // const dict = await getDictionary(params.lang as "en" | "es" | "zh");

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Force CSS to be included in static export */}
        <link rel="stylesheet" href="/_next/static/css/app/layout.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
