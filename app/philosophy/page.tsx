import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ArrowRight,
  FlaskConical,
  Users,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Philosophy | Science × Wellness × You",
  description:
    "Discover the SOUL THEORY philosophy: evidence-backed formulations, accessible everyday nutrition, and consistency over perfection.",
};

export default function PhilosophyPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
            <Sparkles className="w-3.5 h-3.5 text-sage" />
            <span>The Soul Theory Manifesto</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-ink font-normal leading-[1.12]">
            Wellness was never meant to be complicated.
          </h1>

          <p className="font-script text-3xl sm:text-4xl text-sage-dark pt-1">
            Wellness, rethought.
          </p>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto pt-2">
            We believe taking care of yourself shouldn&apos;t feel like an intimidating prescription, an extreme 30-day punishment, or an unaffordable luxury. It should be a natural, enjoyable part of everyday life.
          </p>
        </div>
      </section>

      {/* Brand Ethos Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 rounded-3xl p-8 sm:p-14 border border-sage/15 shadow-subtle space-y-6">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block">
            Why We Started
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-snug">
            Bridging the gap between pharmaceutical medicine and extreme fitness hype.
          </h2>

          <div className="space-y-4 text-sm text-ink-muted leading-relaxed font-sans">
            <p>
              Walk down any supplement aisle in India and you encounter two extremes. On one side are bleak, clinical pharmaceutical bottles that feel medicinal and unapproachable. On the other side are aggressive, neon-splashed gym powders loaded with artificial sucralose, mysterious proprietary blends, and unrealistic promises of 14-day body transformations.
            </p>
            <p>
              We founded <strong>SOUL THEORY</strong> because modern Indian consumers deserve better. You want products that are rooted in hard biological science, made with clean bioavailable ingredients, packaged with thoughtful aesthetic restraint, and flavoured so deliciously that you genuinely look forward to your daily ritual.
            </p>
            <p className="font-medium text-ink pt-2 italic font-serif text-base">
              &quot;We are not here to sell perfection. We are here to make feeling better a part of everyday life.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* The 4 Philosophy Pillars */}
      {/* ------------------------------------------------------------- */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Our Core Tenets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            The Four Pillars of SOUL THEORY
          </h2>
          <p className="text-sm text-ink-muted">
            The guiding rules behind every formula we research, develop, and manufacture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-lavender/40 border border-lavender-dark/30 space-y-3">
            <span className="font-serif text-3xl text-sage font-bold">01</span>
            <h3 className="font-serif text-2xl text-ink font-normal">
              Science, not hype
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Thoughtful formulations and transparent communication. We never formulate based on fleeting internet fads or unproven celebrity trends. Every ingredient has demonstrated efficacy in peer-reviewed clinical research and is provided at its physiologically effective dosage.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-soft-coral/40 border border-soft-coral-dark/30 space-y-3">
            <span className="font-serif text-3xl text-sage font-bold">02</span>
            <h3 className="font-serif text-2xl text-ink font-normal">
              Wellness for everyone
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Accessible everyday wellness designed equally for women and men. Human physiology shares core biological needs: cellular ATP production, osmotic hydration, and gut microbiome balance. We reject outdated gendered fitness marketing.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-seafoam/40 border border-seafoam-dark/30 space-y-3">
            <span className="font-serif text-3xl text-sage font-bold">03</span>
            <h3 className="font-serif text-2xl text-ink font-normal">
              Made to be enjoyed
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Refreshing botanical flavours, convenient formats, and an uplifting experience. If a health habit tastes chalky, chemical, or unpleasant, it will eventually be abandoned. We treat flavour craft as an essential pillar of long-term adherence.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-3xl bg-powder-blue/40 border border-powder-blue-dark/30 space-y-3">
            <span className="font-serif text-3xl text-sage font-bold">04</span>
            <h3 className="font-serif text-2xl text-ink font-normal">
              Consistency over perfection
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Products that fit smoothly into real, messy modern routines. Life involves late work nights, hectic travel schedules, and missed gym sessions. We focus on forgiving, sustainable micro-habits that you can maintain consistently for years.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Science, Not Hype: Explainer */}
      {/* ------------------------------------------------------------- */}
      <section id="science" className="bg-ivory-dark/50 border-y border-sage/15 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block">
                Evidence-Grounded Formulations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
                How We Formulate: The 3 Purity Tests
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                We believe trust is earned through total ingredient disclosure. We refuse to use proprietary matrices that hide sub-clinical doses under grand names.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Clinical Dosage Verification</h4>
                    <p className="text-xs text-ink-muted">
                      Every scoop of our Creatine provides exactly 5,000mg of 200-mesh monohydrate—the proven clinical benchmark.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">Zero Synthetic Dyes or Bulking Agents</h4>
                    <p className="text-xs text-ink-muted">
                      Colours are derived from organic red beet, spirulina, and butterfly pea flower. We never use cheap maltodextrin fillers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-ink">NABL Lab Certification</h4>
                    <p className="text-xs text-ink-muted">
                      Every manufactured batch is screened for heavy metals, microbial counts, and purity before packaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-sage/15 shadow-subtle space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sage/10 text-sage flex items-center justify-center">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  Our Science Advisory Protocol
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Our formulation team works with certified biochemists and sports nutritionists in Mumbai and Bengaluru to develop formulas strictly compliant with FSSAI regulations.
                </p>
                <div className="p-4 rounded-2xl bg-ivory text-xs text-ink-muted space-y-1 border border-sage/15">
                  <span className="font-semibold text-ink block">Compliance & Purity Standard:</span>
                  <span>FSSAI Regulations (Health Supplements & Nutraceuticals, 2022)</span>
                  <span className="block">GMP Certified Facility • ISO 22000 Quality Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Who We Build For */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Our Community
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Who We Are Building For
          </h2>
          <p className="text-sm text-ink-muted">
            Thoughtful functional nutrition crafted for real modern lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
            <span className="text-xs uppercase font-bold text-sage-dark">Students & Young Pros</span>
            <h4 className="font-serif text-lg text-ink font-normal">Building Healthier Routines</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Navigating long study hours and hectic corporate deadlines without relying on energy drinks or high-sugar coffee.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
            <span className="text-xs uppercase font-bold text-sage-dark">Fitness Enthusiasts</span>
            <h4 className="font-serif text-lg text-ink font-normal">Convenient Daily Nutrition</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Seeking pure, 100% micronised creatine and rapid cellular rehydration without artificial aftertaste.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
            <span className="text-xs uppercase font-bold text-sage-dark">Approachable Wellness</span>
            <h4 className="font-serif text-lg text-ink font-normal">Everyday Well-being</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Clean, gentle nutritional formulas free from the intimidating, hyper-masculine aesthetics of legacy bodybuilding brands.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
            <span className="text-xs uppercase font-bold text-sage-dark">Modern Shoppers</span>
            <h4 className="font-serif text-lg text-ink font-normal">Design & Transparency</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Appreciating premium minimalist packaging, refreshing taste profiles, and honest, accessible pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Team & Founder Placeholder */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sage/15 shadow-subtle text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            Behind the Formulation Lab
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
            {/* TODO(client): Replace with founder background, board of advisors, and laboratory photography */}
            SOUL THEORY was created by a collective of food scientists, endurance runners, and brand designers in Mumbai who were frustrated by the lack of transparent, aesthetic wellness options in India.
          </p>
          <p className="text-[11px] text-ink-faint italic">
            [TODO(client): Insert founder and science advisory team photography and bios prior to media launch]
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Closing Call to Action */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-soft-coral/40 rounded-3xl p-10 sm:p-16 border border-soft-coral-dark/30 max-w-4xl mx-auto space-y-4">
          <span className="font-script text-3xl text-sage-dark block">
            Make feeling good a daily ritual.
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal">
            Ready to rethink your daily wellness?
          </h2>
          <p className="text-sm text-ink-muted max-w-lg mx-auto">
            Experience the difference of ultra-micronised creatine and refreshing multi-mineral hydration.
          </p>
          <div className="pt-2">
            <Link href="/shop">
              <Button variant="primary" size="lg" className="gap-2 shadow-soft">
                Explore All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
