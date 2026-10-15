"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Check, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export const ConsentBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!siteConfig.features.enableConsentBanner) return;
    const consent = localStorage.getItem("soul_theory_cookie_consent");
    if (!consent) {
      // Delay prompt slightly so page loads gracefully
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem("soul_theory_cookie_consent", accepted ? "accepted" : "rejected");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-ivory rounded-3xl p-5 shadow-2xl border border-sage/20 text-ink"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-full bg-sage/10 text-sage shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-ink">Your Privacy Matters</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                In compliance with India&apos;s Digital Personal Data Protection (DPDP) Act, we use essential cookies to maintain your shopping bag and anonymous metrics to refine our formulas.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-sage/10 flex items-center justify-between gap-3">
            <Link
              href="/policies/privacy"
              className="text-xs text-ink-muted hover:text-sage underline"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleChoice(false)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-sage/20 text-ink hover:bg-sage/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => handleChoice(true)}
                className="text-xs font-semibold px-4 py-1.5 rounded-full bg-sage text-ivory hover:bg-sage-dark transition-colors shadow-subtle"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
