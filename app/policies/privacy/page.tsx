import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy (DPDP Aligned)",
  description:
    "Privacy policy of SOUL THEORY, compliant with India's Digital Personal Data Protection Act.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8 text-ink">
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
          Legal & Compliance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">
          Privacy Policy
        </h1>
        <p className="text-xs text-ink-muted mt-1">
          Last updated: October 2026 • Aligned with the Digital Personal Data Protection (DPDP) Act, India.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/15 shadow-subtle space-y-6 text-sm text-ink-muted leading-relaxed font-sans">
        <div className="p-4 rounded-2xl bg-ivory border border-sage/20 text-xs text-ink-muted">
          <strong>Draft Notice:</strong> This document represents a compliant operational draft prepared for storefront readiness.{" "}
          <span className="italic text-amber-800">
            TODO(client): Complete formal legal review with your corporate counsel prior to production commercial launch.
          </span>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">1. Introduction</h2>
          <p>
            Soul Theory Wellness Private Limited (&quot;SOUL THEORY&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the personal data of users (&quot;you&quot;, &quot;your&quot;) visiting our online store. This Privacy Policy details our principles for collecting, processing, storing, and protecting your data in strict conformity with India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023) and the Information Technology Act, 2000.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">2. Personal Data We Collect</h2>
          <p>We process only such personal information as is strictly necessary for fulfilling your orders and refining your shopping experience:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Identity & Contact Data:</strong> Full name, delivery address, postal PIN code, email address, mobile phone number.</li>
            <li><strong>Transactional Data:</strong> Items purchased, order value, payment status (note: all financial card numbers, UPI handles, and CVVs are handled directly by PCI-DSS compliant gateways like Razorpay; we never store card numbers).</li>
            <li><strong>Technical & Analytical Data:</strong> IP address, browser type, device information, and anonymous session telemetry (collected only upon cookie consent).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">3. Lawful Basis & Purposes of Processing</h2>
          <p>We process personal data solely on lawful grounds for the following explicit purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Dispatching products to your Indian pin code via courier partners (Bluedart, Delhivery, Smartr).</li>
            <li>Sending automated tax invoices, order confirmation emails, and OTP verification SMS messages.</li>
            <li>Handling customer service inquiries and replacement dispatches for damaged packaging.</li>
            <li>Sending newsletter communications where explicit opt-in consent was provided (with single-click unsubscribe).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">4. Data Sharing & Third-Party Disclosure</h2>
          <p>
            We never sell, rent, or trade your personal data. We disclose information strictly on a need-to-know basis to verified data processors:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Logistics & Courier Aggregators for doorstep delivery.</li>
            <li>Razorpay Software Private Limited for encrypted payment processing.</li>
            <li>Statutory regulatory bodies where mandated by Indian law or judicial orders.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">5. Grievance Officer & Contact</h2>
          <p>
            In accordance with the DPDP Act and IT Rules, our designated Data Protection Grievance Officer details are:
          </p>
          <div className="p-4 rounded-2xl bg-ivory text-xs text-ink space-y-1 border border-sage/15">
            <p><strong>Grievance Officer:</strong> Priyanshu Jain (Compliance Cell)</p>
            <p><strong>Company:</strong> {siteConfig.regulatory.companyName}</p>
            <p><strong>Address:</strong> {siteConfig.regulatory.registeredAddress}</p>
            <p><strong>Email:</strong> {siteConfig.regulatory.grievanceEmail}</p>
            <p><strong>Phone:</strong> {siteConfig.regulatory.grievancePhone}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
