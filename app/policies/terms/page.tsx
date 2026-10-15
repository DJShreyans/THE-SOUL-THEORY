import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing purchases and usage of SOUL THEORY.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8 text-ink">
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
          Legal & Compliance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">
          Terms of Service
        </h1>
        <p className="text-xs text-ink-muted mt-1">
          Last updated: October 2026 • Jurisdiction: Mumbai, Maharashtra, India.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/15 shadow-subtle space-y-6 text-sm text-ink-muted leading-relaxed font-sans">
        <div className="p-4 rounded-2xl bg-ivory border border-sage/20 text-xs text-ink-muted">
          <strong>Draft Notice:</strong> Operational draft terms.{" "}
          <span className="italic text-amber-800">
            TODO(client): Review with your corporate counsel.
          </span>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">1. General Overview</h2>
          <p>
            This website is operated by {siteConfig.regulatory.companyName}. By visiting our site and/or purchasing from us, you engage in our &quot;Service&quot; and agree to be bound by the following terms and conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">2. Online Store Terms & Age Representation</h2>
          <p>
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state of residence (18 years in India). Products such as our Hangover Rescue line carry an explicit 18+ adult advisory notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">3. Product Descriptions & Pricing</h2>
          <p>
            Prices for our products are quoted in Indian Rupees (INR, ₹) and are inclusive of Goods and Services Tax (GST) at statutory rates. We reserve the right at any time to modify or discontinue products without prior notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">4. Dietary Supplement Disclaimer</h2>
          <p>
            All formulations sold on this website are categorized as Health Supplements / Nutraceuticals under FSSAI regulations. Products are not medicines and are not intended to diagnose, treat, cure, or prevent any illness. Always consult a licensed medical practitioner before introducing new nutritional regimens.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising out of your purchases shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
          </p>
        </section>
      </div>
    </div>
  );
}
