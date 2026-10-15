"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CATEGORIES } from "@/data/categories";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent bot reject
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Welcome to the ritual. Check your inbox soon!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-ivory-dark/60 border-t border-sage/20 pt-16 pb-12 text-ink">
      {/* Top Banner: Newsletter "More You." */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-soft-coral/70 rounded-3xl p-8 sm:p-12 border border-soft-coral-dark/30 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-script text-2xl text-sage-dark block mb-1">
              More You.
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              Science for your everyday self.
            </h3>
            <p className="text-sm text-ink-muted mt-2">
              Receive formulation breakthroughs, no-nonsense habit breakdowns, and early access to upcoming product batches.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-md">
            {/* Honeypot field for bot suppression */}
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
            />

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="flex-1 px-4 py-3 rounded-full bg-white border border-sage/20 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-sage shadow-inner"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-6 py-3 rounded-full bg-sage text-ivory text-sm font-semibold hover:bg-sage-dark transition-all shrink-0 flex items-center justify-center gap-2 shadow-subtle"
              >
                {status === "loading" ? "Joining..." : status === "success" ? "Subscribed" : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {message && (
              <p
                className={`text-xs mt-2 text-center md:text-left ${
                  status === "success" ? "text-sage-dark font-medium" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <p className="text-[11px] text-ink-muted mt-2 text-center md:text-left">
              Zero spam. Unsubscribe with 1 click anytime. Aligned with DPDP privacy principles.
            </p>
          </form>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-sage/15">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-widest text-ink font-semibold">
                {siteConfig.wordmark}
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-ink-muted uppercase font-sans">
                {siteConfig.subline}
              </span>
            </Link>

            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              &quot;We are not here to sell perfection. We are here to make feeling better a part of everyday life.&quot;
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-bold text-ink block mb-1">
                Customer Care & Concierge
              </span>
              <p className="text-xs text-ink-muted">{siteConfig.contact.hours}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs font-medium text-sage-dark hover:underline block mt-1"
              >
                {siteConfig.contact.email}
              </a>
              <span className="text-xs text-ink-muted block mt-0.5">
                {siteConfig.contact.phone}
              </span>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-ink">
              Shop Formulas
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <Link href="/shop" className="hover:text-sage transition-colors">
                  Shop All Products
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/shop/${cat.slug}`} className="hover:text-sage transition-colors flex items-center justify-between">
                    <span>{cat.shortTitle}</span>
                    {!cat.launched && (
                      <span className="text-[9px] text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded font-medium">Soon</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Philosophy Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-ink">
              Brand & Science
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <Link href="/philosophy" className="hover:text-sage transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/philosophy#pillars" className="hover:text-sage transition-colors">
                  The Four Pillars
                </Link>
              </li>
              <li>
                <Link href="/philosophy#science" className="hover:text-sage transition-colors">
                  Science, Not Hype
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-sage transition-colors">
                  The Wellness Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-ink">
              Support & Help
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <Link href="/track-order" className="hover:text-sage transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/contact#faqs" className="hover:text-sage transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping" className="hover:text-sage transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/policies/refund" className="hover:text-sage transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Regulatory Column */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-ink">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <Link href="/policies/privacy" className="hover:text-sage transition-colors">
                  Privacy Policy (DPDP)
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="hover:text-sage transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/disclaimer" className="hover:text-sage transition-colors">
                  Health & Product Disclaimer
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-[11px] font-mono text-ink-muted block">
                  {siteConfig.regulatory.fssaiLicense}
                </span>
                <span className="text-[11px] font-mono text-ink-muted block mt-0.5">
                  {siteConfig.regulatory.gstin}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Statutory Block */}
        <div className="pt-8 pb-6 border-b border-sage/15 space-y-3">
          <div className="bg-ivory p-4 rounded-2xl border border-sage/15 text-[11px] text-ink-muted leading-relaxed">
            <p className="font-semibold text-ink mb-1">
              Statutory Regulatory Compliance Notice (FSSAI Regulations, India):
            </p>
            <p>{siteConfig.regulatory.statutoryDisclaimer}</p>
            <p className="mt-2 text-[10px]">
              Marketed by: {siteConfig.regulatory.companyName}, {siteConfig.regulatory.registeredAddress}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Wellness, rethought.
          </div>

          {/* Payment Trust Icons */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-ink-muted">Accepted in India:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                UPI
              </span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                GooglePay
              </span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                PhonePe
              </span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                Cards
              </span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                NetBanking
              </span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-bold border border-sage/20 text-ink">
                COD
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
