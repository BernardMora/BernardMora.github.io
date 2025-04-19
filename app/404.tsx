"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/custom-link";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Try to redirect to the default locale
    router.push("/en");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        The page you are looking for does not exist.
      </p>
      <Button asChild>
        <CustomLink href="/en">Go to Homepage</CustomLink>
      </Button>
    </div>
  );
}
