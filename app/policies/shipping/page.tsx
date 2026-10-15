import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/commerce/pricing";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "Pan-India shipping rates, free shipping thresholds, and delivery timelines for SOUL THEORY orders.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8 text-ink">
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
          Fulfillment & Logistics
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">
          Shipping & Delivery Policy
        </h1>
        <p className="text-xs text-ink-muted mt-1">
          Effective across all serviceable postal PIN codes in India.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/15 shadow-subtle space-y-6 text-sm text-ink-muted leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">1. Free Shipping Threshold & Standard Rates</h2>
          <p>
            We take pride in making functional nutrition accessible. We offer <strong>Free Nationwide Shipping</strong> on all prepaid and COD orders of <strong>{formatPrice(siteConfig.shipping.freeThreshold)}</strong> or more.
          </p>
          <p>
            For orders with a subtotal below {formatPrice(siteConfig.shipping.freeThreshold)}, a flat nominal shipping fee of <strong>{formatPrice(siteConfig.shipping.standardFee)}</strong> is applied at checkout to cover courier packaging and handling.
          </p>
          <p>
            Cash on Delivery (COD) orders incur a flat <strong>{formatPrice(siteConfig.shipping.codFee)}</strong> courier cash handling fee, which is displayed transparently at checkout.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">2. Order Processing & Dispatch Timelines</h2>
          <p>
            All orders placed before 2:00 PM IST on business days (Monday through Saturday) are packed and dispatched on the same day from our Mumbai fulfillment center. Orders placed after 2:00 PM or on Sundays and national holidays are dispatched on the next business day.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">3. Estimated Delivery Times</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>Mumbai & MMR:</strong> 24–48 hours.</li>
            <li><strong>Tier 1 Metro Cities (Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad):</strong> 2–4 business days.</li>
            <li><strong>Rest of India (Tier 2 & 3 Towns):</strong> 4–6 business days.</li>
            <li><strong>Special Transit Areas (North East & J&K):</strong> 6–8 business days.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">4. Courier Partners & Live Tracking</h2>
          <p>
            We ship exclusively via tier-1 express air and surface couriers including <strong>Bluedart, Delhivery, and Smartr Logistics</strong>. Once dispatched, you will receive an automated SMS and email containing your live Air Waybill (AWB) tracking link. You can also track your status directly at <a href="/track-order" className="text-sage-dark underline">soultheory.in/track-order</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
