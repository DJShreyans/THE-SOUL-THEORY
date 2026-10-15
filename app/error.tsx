"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-script text-2xl text-sage-dark block">
            A temporary glitch.
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Something went wrong
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            We encountered an unexpected error while preparing this page. Rest assured, our team has been alerted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            className="w-full sm:w-auto gap-2 text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Try Again
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full gap-2 text-xs">
              <Home className="w-3.5 h-3.5" /> Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
