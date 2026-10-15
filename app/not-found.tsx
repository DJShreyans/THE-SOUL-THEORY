import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-sage" />
        </div>

        <div className="space-y-2">
          <span className="font-script text-2xl text-sage-dark block">
            A small detour in the routine.
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink font-normal">
            Page Not Found (404)
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            The page you are looking for may have been moved, renamed, or is currently undergoing formulation.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-sage/15 text-xs text-ink-muted">
          &quot;Better habits. Better you. Your everyday, elevated.&quot;
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full gap-2 text-xs">
              Back to Home <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
          <Link href="/shop" className="w-full sm:w-auto">
            <Button variant="secondary" size="md" className="w-full text-xs">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
