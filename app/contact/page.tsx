"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  ChevronDown,
  Send,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { FAQS } from "@/data/faqs";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    topic: "general",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<string | null>("prod-1");
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>("All");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          orderNumber: "",
          topic: "general",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to submit. Please check your inputs.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out on WhatsApp.");
    }
  };

  const faqCategories = ["All", "Products", "Ordering", "Shipping", "Returns", "Safety & Usage"];

  const filteredFaqs =
    selectedFaqCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === selectedFaqCategory);

  // FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Direct Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink">
            Contact & Support
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            Have questions about scoop calibration, shipment status, or wholesale inquiries? Our Mumbai customer care team is here to assist.
          </p>
        </div>

        {/* Contact Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-sage/15 shadow-subtle space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-ink font-normal">
                Send Us a Message
              </h2>
              <p className="text-xs text-ink-muted mt-1">
                We respond within 24 business hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-sage/15 text-sage-dark text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-sage mx-auto" />
                <h3 className="font-serif text-lg font-semibold">Message Delivered</h3>
                <p className="text-xs text-ink-muted">{statusMessage}</p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="primary"
                  size="sm"
                  className="mt-3"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="bot_field"
                  tabIndex={-1}
                  className="hidden"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Jain"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Order Number (if applicable)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ST-10024"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink block mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                  >
                    <option value="general">General Brand Inquiry</option>
                    <option value="orders">Existing Order & Shipping Status</option>
                    <option value="formulation">Ingredient & Nutritional Science</option>
                    <option value="wholesale">Retail & Wholesale Distribution</option>
                    <option value="partnerships">Brand Partnerships & Press</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can our formulation or fulfillment team help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                  />
                </div>

                {statusMessage && status === "error" && (
                  <p className="text-xs text-red-600">{statusMessage}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={status === "loading"}
                  className="w-full gap-2 text-xs font-semibold"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info */}
            <div className="bg-ivory rounded-3xl p-8 border border-sage/20 shadow-subtle space-y-6">
              <h3 className="font-serif text-2xl text-ink font-normal">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-ink block">Email Support</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-sage-dark font-medium hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-ink block">Telephone Desk</span>
                    <span className="text-xs text-ink-muted">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-ink block">Concierge Hours</span>
                    <span className="text-xs text-ink-muted">{siteConfig.contact.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-ink block">Registered Office</span>
                    <span className="text-xs text-ink-muted leading-relaxed">
                      {siteConfig.regulatory.registeredAddress}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-4 border-t border-sage/15">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span className="text-xs font-semibold text-ink">
                      Instant WhatsApp Concierge
                    </span>
                  </div>
                  <span className="text-xs text-[#25D366] font-bold group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>
              </div>
            </div>

            {/* Order Tracking Teaser Card */}
            <div className="bg-white rounded-3xl p-6 border border-sage/15 shadow-subtle space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sage-dark block">
                Looking for your package?
              </span>
              <h4 className="font-serif text-lg text-ink font-normal">
                Real-Time Courier Tracking
              </h4>
              <p className="text-xs text-ink-muted">
                Track your shipment status with Bluedart, Delhivery, or Smartr across all Indian pin codes.
              </p>
              <div className="pt-2">
                <Link href="/track-order">
                  <Button variant="outline" size="sm" className="text-xs">
                    Track Your Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FAQs SECTION */}
        {/* ------------------------------------------------------------- */}
        <section id="faqs" className="pt-12 border-t border-sage/20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Common Inquiries
            </h2>
            <p className="text-sm text-ink-muted">
              Everything you need to know about our formulations, ordering, pan-India shipping, and hygiene standards.
            </p>
          </div>

          {/* FAQ Category Pills */}
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  selectedFaqCategory === cat
                    ? "bg-sage text-ivory font-semibold shadow-subtle"
                    : "bg-white text-ink border border-sage/20 hover:bg-sage/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-sage/15 overflow-hidden transition-all shadow-subtle"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base text-ink font-normal hover:text-sage transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-sage shrink-0 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-sage/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
