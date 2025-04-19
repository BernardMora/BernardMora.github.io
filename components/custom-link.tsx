"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import Link, { type LinkProps } from "next/link";
import { forwardRef } from "react";

// Get the base path from the environment
const basePath =
  process.env.NODE_ENV === "production" ? "/BernardMoragithubiocopy" : "";

export interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, className, ...props }, ref) => {
    const pathname = usePathname();

    // Function to handle href formatting
    const getFormattedHref = (originalHref: string | URL) => {
      const hrefString = originalHref.toString();

      // If it's an external link or already has the base path, return as is
      if (
        hrefString.startsWith("http") ||
        hrefString.startsWith("#") ||
        hrefString.startsWith("mailto:") ||
        hrefString.startsWith("tel:") ||
        (basePath && hrefString.startsWith(basePath))
      ) {
        return originalHref;
      }

      // Otherwise, return with the base path
      return hrefString;
    };

    return (
      <Link
        href={getFormattedHref(href)}
        className={className}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
