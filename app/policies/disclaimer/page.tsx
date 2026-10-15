import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Health & Product Disclaimer",
  description:
    "Statutory FSSAI dietary supplement disclaimer and regulatory guidelines for SOUL THEORY products.",
};

export default function DisclaimerPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-8 text-ink">
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
          Statutory Disclosure
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal">
          Health & Product Disclaimer
        </h1>
        <p className="text-xs text-ink-muted mt-1">
          In compliance with the Food Safety and Standards Authority of India (FSSAI).
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/15 shadow-subtle space-y-6 text-sm text-ink-muted leading-relaxed font-sans">
        {/* Prominent Statutory Alert */}
        <div className="p-6 rounded-2xl bg-ivory border border-sage/25 space-y-2 text-ink">
          <div className="flex items-center gap-2 text-xs font-bold text-sage-dark uppercase tracking-wider">
            <AlertCircle className="w-5 h-5 text-sage" /> Mandatory Statutory Notice
          </div>
          <p className="text-xs leading-relaxed font-medium">
            {siteConfig.regulatory.statutoryDisclaimer}
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">1. Not Medicinal Products</h2>
          <p>
            Products manufactured and sold under the SOUL THEORY brand name are classified as <strong>Dietary Supplements / Nutraceuticals</strong> under FSSAI regulations. They are not intended, licensed, or prescribed to diagnose, treat, mitigate, cure, or prevent any physical, metabolic, or psychological disease or pathology.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">2. Professional Medical Advice</h2>
          <p>
            The content, articles, and educational materials provided across the SOUL THEORY website, journal, and social channels are published for general informational and educational purposes only. They do not constitute personal medical advice, diagnosis, or clinical recommendations.
          </p>
          <p>
            You should always consult with your physician, registered dietician, or qualified healthcare professional before beginning any new supplementation, particularly if you:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Are pregnant, planning to become pregnant, or nursing an infant.</li>
            <li>Are taking prescription medicines, blood thinners, or have chronic renal or hepatic conditions.</li>
            <li>Are under 18 years of age.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl text-ink font-normal">3. Allergen & Storage Precautions</h2>
          <p>
            While our creatine and hydration formulas are 100% plant-based, non-GMO, and formulated without gluten or dairy, they are manufactured in licensed GMP facilities that handle ingredients such as milk, soy, and tree nuts. Please inspect the ingredient panel on each jar before consumption.
          </p>
          <p>
            Store jars tightly sealed in a cool, dry place away from direct sunlight and humidity. Keep out of reach of young children.
          </p>
        </section>

        <section className="space-y-2 pt-2 border-t border-sage/15">
          <p className="text-xs text-ink-faint">
            {siteConfig.regulatory.fssaiLicense} • {siteConfig.regulatory.gstin}
          </p>
          <p className="text-xs text-ink-faint">
            Marketed by: {siteConfig.regulatory.companyName}, {siteConfig.regulatory.registeredAddress}
          </p>
        </section>
      </div>
    </div>
  );
}
