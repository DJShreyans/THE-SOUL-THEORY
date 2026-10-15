import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Clock,
  Dumbbell,
  Droplets,
  HeartPulse,
  Award,
  FlaskConical,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, getLaunchedProducts } from "@/data/products";
import { ARTICLES } from "@/data/journal";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const launchedProducts = getLaunchedProducts();
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20 overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-6 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Soft Organic Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-lavender/50 via-seafoam/40 to-soft-coral/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sage/20 text-xs font-semibold text-sage-dark shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span>{siteConfig.tagline}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ink tracking-tight leading-[1.08]">
              {siteConfig.homepageHeadline}
            </h1>

            <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {siteConfig.homepageSubcopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link href="/shop" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 shadow-soft">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/philosophy" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Our Philosophy
                </Button>
              </Link>
            </div>

            {/* Micro Quote */}
            <p className="text-xs text-ink-faint pt-2 italic font-serif">
              &quot;We are not here to sell perfection. We are here to make feeling better a part of everyday life.&quot;
            </p>
          </div>

          {/* Right Hero Product Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Arch Pedestal */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[36px] bg-gradient-to-b from-lavender via-white/80 to-soft-coral/50 p-4 shadow-hover border border-white/60 flex flex-col justify-between">
              {/* Top Pill */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-bold tracking-wider uppercase text-sage-dark bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-sage/15">
                  Cellular Hydration & Strength
                </span>
                <span className="text-xs font-serif text-ink-muted">200-Mesh Pure</span>
              </div>

              {/* Main Product Render */}
              <div className="relative w-full h-[75%] my-auto">
                <Image
                  src="/images/products/creatine-blueberry-cloud.jpg"
                  alt="SOUL THEORY Creatine Monohydrate Blueberry Cloud"
                  fill
                  priority
                  className="object-cover rounded-2xl shadow-subtle hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              {/* Bottom Micro Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-sage/15 flex items-center justify-between z-10 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold text-ink-muted block">
                    Now Batched
                  </span>
                  <span className="text-xs font-semibold text-ink">
                    Blueberry Cloud Creatine
                  </span>
                </div>
                <Link
                  href="/products/creatine-blueberry-cloud"
                  className="text-xs font-semibold text-sage-dark hover:underline flex items-center gap-1"
                >
                  View <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TRUST STRIP */}
      {/* ------------------------------------------------------------- */}
      <section className="border-y border-sage/15 bg-white/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-2.5 text-ink">
              <Leaf className="w-5 h-5 text-sage" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                100% Plant-Based & Vegan
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-ink">
              <ShieldCheck className="w-5 h-5 text-sage" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Third-Party NABL Tested
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-ink">
              <CheckCircle2 className="w-5 h-5 text-sage" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Zero Added Sugars
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-ink">
              <Award className="w-5 h-5 text-sage" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Non-GMO Formulations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SHOP BY CATEGORY TILES */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Explore the Universe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Shop by Category
          </h2>
          <p className="text-sm text-ink-muted">
            Four functional pillars designed to fit the modern routine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const tintClasses = {
              lavender: "bg-lavender/60 border-lavender-dark/40 hover:bg-lavender",
              "powder-blue": "bg-powder-blue/60 border-powder-blue-dark/40 hover:bg-powder-blue",
              seafoam: "bg-seafoam/60 border-seafoam-dark/40 hover:bg-seafoam",
              "soft-coral": "bg-soft-coral/60 border-soft-coral-dark/40 hover:bg-soft-coral",
              ivory: "bg-ivory border-sage/20",
            };

            return (
              <div
                key={cat.slug}
                className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  tintClasses[cat.accentTint]
                } shadow-subtle hover:shadow-soft`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-serif font-bold text-ink-muted">
                      {cat.shortTitle}
                    </span>
                    {!cat.launched && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-normal text-ink mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div>
                  {cat.launched ? (
                    <Link
                      href={`/shop/${cat.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-dark hover:underline"
                    >
                      Shop Products <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-[11px] text-ink-muted italic">
                        {cat.comingSoonNote}
                      </p>
                      <Link
                        href={`/shop/${cat.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:underline"
                      >
                        Join Waitlist <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. FEATURED PRODUCTS (LAUNCHED) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
              Initial Formulations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Featured Daily Rituals
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              100% micronised creatine and multi-mineral hydration combos ready for immediate dispatch.
            </p>
          </div>
          <Link href="/shop" className="shrink-0">
            <Button variant="outline" size="sm" className="gap-1.5">
              View All Formulas <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {launchedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. BRAND STORY & PHILOSOPHY TEASER (4 PILLARS) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-ivory-dark/40 border-y border-sage/15 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="font-script text-3xl text-sage-dark block">
                Wellness, rethought.
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight">
                Built around intention, enjoyment, and science.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                We believe wellness should not feel like an intimidating prescription or an expensive chore. We create thoughtful functional nutrition designed to bring more consistency to your everyday life.
              </p>
              <div className="pt-2">
                <Link href="/philosophy">
                  <Button variant="primary" size="md" className="gap-2">
                    Read Our Philosophy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
                <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-serif font-bold text-sm">
                  01
                </div>
                <h4 className="font-serif text-lg text-ink font-normal">
                  Science, not hype
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Thoughtful formulations and transparent communication, with claims strictly grounded in peer-reviewed clinical evidence.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
                <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-serif font-bold text-sm">
                  02
                </div>
                <h4 className="font-serif text-lg text-ink font-normal">
                  Wellness for everyone
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Accessible everyday wellness designed equally for women and men, free from hyper-gendered fitness stereotypes.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
                <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-serif font-bold text-sm">
                  03
                </div>
                <h4 className="font-serif text-lg text-ink font-normal">
                  Made to be enjoyed
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Refreshing botanical flavours, convenient formats, and a clean sensory experience people genuinely look forward to.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-2">
                <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center font-serif font-bold text-sm">
                  04
                </div>
                <h4 className="font-serif text-lg text-ink font-normal">
                  Consistency over perfection
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Products that fit smoothly into real-world routines, making everyday self-care effortless to maintain for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. MADE TO BE ENJOYED: FLAVOUR SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="font-script text-2xl text-sage-dark block">
            Pure Botanical Taste
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Made to be Enjoyed
          </h2>
          <p className="text-sm text-ink-muted">
            Naturally flavoured with real fruit essences, wild flowers, and plant-based colours. Never artificial dyes or synthetic sweetness.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-5 rounded-3xl bg-lavender/50 border border-lavender-dark/30 text-center space-y-2 sm:space-y-3">
            <div className="relative w-full h-32 sm:h-44 rounded-2xl overflow-hidden bg-white/60">
              <Image
                src="/images/products/creatine-blueberry-cloud.jpg"
                alt="Blueberry Cloud"
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-sage-dark block">Creatine</span>
              <h4 className="font-serif text-sm sm:text-base text-ink font-normal truncate">Blueberry Cloud</h4>
              <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 line-clamp-1">Wild blueberries & lavender</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-3xl bg-soft-coral/50 border border-soft-coral-dark/30 text-center space-y-2 sm:space-y-3">
            <div className="relative w-full h-32 sm:h-44 rounded-2xl overflow-hidden bg-white/60">
              <Image
                src="/images/products/creatine-lychee-rose.jpg"
                alt="Lychee Rose"
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-sage-dark block">Creatine</span>
              <h4 className="font-serif text-sm sm:text-base text-ink font-normal truncate">Lychee Rose</h4>
              <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 line-clamp-1">Tropical lychee & Damascus rose</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-3xl bg-seafoam/50 border border-seafoam-dark/30 text-center space-y-2 sm:space-y-3">
            <div className="relative w-full h-32 sm:h-44 rounded-2xl overflow-hidden bg-white/60">
              <Image
                src="/images/products/hydration-watermelon-lime.jpg"
                alt="Watermelon Lime"
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-sage-dark block">Hydration</span>
              <h4 className="font-serif text-sm sm:text-base text-ink font-normal truncate">Watermelon Lime</h4>
              <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 line-clamp-1">Crisp melon with key lime</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-3xl bg-powder-blue/50 border border-powder-blue-dark/30 text-center space-y-2 sm:space-y-3">
            <div className="relative w-full h-32 sm:h-44 rounded-2xl overflow-hidden bg-white/60">
              <Image
                src="/images/products/hydration-blue-lagoon-citrus.jpg"
                alt="Blue Lagoon Citrus"
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-sage-dark block">Hydration</span>
              <h4 className="font-serif text-sm sm:text-base text-ink font-normal truncate">Blue Lagoon Citrus</h4>
              <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 line-clamp-1">Meyer lemon & blue spirulina</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. RITUAL SECTION: "YOUR EVERYDAY, ELEVATED" */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-white border-y border-sage/15 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
              Daily Integration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              Your Everyday, Elevated
            </h2>
            <p className="text-sm text-ink-muted">
              How our functional formulations integrate smoothly across your morning, workout, and evening hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1: Morning Reset */}
            <div className="p-8 rounded-3xl bg-ivory border border-sage/15 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-muted">
                  07:30 AM • Morning
                </span>
                <Clock className="w-4 h-4 text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Hydration & Vitamins
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Replenish electrolytes lost overnight. One scoop of Watermelon Lime or Blue Lagoon Citrus in 500ml cold water wakes up your nervous system and supports cellular hydration.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-dark">
                Recommended: Hydration + Multivitamin
              </div>
            </div>

            {/* Step 2: Training Power */}
            <div className="p-8 rounded-3xl bg-lavender/40 border border-lavender-dark/30 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-muted">
                  05:30 PM • Workout
                </span>
                <Dumbbell className="w-4 h-4 text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Cellular Strength & ATP
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Take 5g of 200-mesh Creatine Monohydrate (Blueberry Cloud or Lychee Rose) pre- or post-workout to saturate phosphocreatine stores and accelerate muscle recovery.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-dark">
                Recommended: Creatine Monohydrate
              </div>
            </div>

            {/* Step 3: Evening Calm */}
            <div className="p-8 rounded-3xl bg-soft-coral/40 border border-soft-coral-dark/30 space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-ink-muted">
                  09:30 PM • Evening
                </span>
                <HeartPulse className="w-4 h-4 text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-ink font-normal">
                Microbiome & Balance
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Sip a gentle warm prebiotic fibre or soothing chamomile-lavender botanical infusion to support microbiome fermentation and prepare for restful, restorative sleep.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-sage-dark">
                Upcoming: Prebiotic Fibre & Balance Duo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. SCIENCE WITHOUT THE JARGON */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Our Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
            Science Without the Jargon
          </h2>
          <p className="text-sm text-ink-muted">
            Rigorous formulation practices made completely transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sage/10 text-sage flex items-center justify-center">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-ink">
              Bioavailable Forms Only
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              We exclusively select ingredients in the forms your body can actually absorb—from 200-mesh micronised creatine to chelated magnesium malate and buffered bio-salts.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sage/10 text-sage flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-ink">
              Third-Party Batch Testing
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Every production lot is screened by independent NABL-accredited labs for heavy metals, microbial safety, and label claim potency. Zero compromises.
            </p>
            <p className="text-[10px] text-ink-faint italic">
              {/* TODO(client): link to real downloadable PDF lab certificates */}
              Batch Certificates available upon request.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-sage/15 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sage/10 text-sage flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-normal text-ink">
              100% Label Transparency
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              No proprietary matrices or hidden blends. We state the exact milligram content of every single active ingredient right on the container.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. JOURNAL PREVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block mb-1">
              Evidence & Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
              The Wellness Journal
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              Straightforward, science-led articles on human physiology, hydration, and realistic habit architecture.
            </p>
          </div>
          <Link href="/journal" className="shrink-0">
            <Button variant="outline" size="sm" className="gap-1.5">
              Read All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group p-5 rounded-3xl bg-white border border-sage/15 shadow-subtle hover:shadow-soft hover:border-sage/35 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-ivory mb-4">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-sage-dark text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-sage/15">
                    {article.category}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs text-ink-muted">{article.readingTime}</span>
                  <h3 className="font-serif text-lg font-normal text-ink group-hover:text-sage transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-ink-muted line-clamp-2 mt-1">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-sage/10 flex items-center justify-between text-xs font-semibold text-sage-dark">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
