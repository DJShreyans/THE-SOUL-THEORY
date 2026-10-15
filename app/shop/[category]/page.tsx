import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Bell, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { siteConfig } from "@/config/site";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} | ${siteConfig.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);
  const launched = products.filter((p) => p.available);
  const comingSoon = products.filter((p) => !p.available);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-ink-muted">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        <span>/</span>
        <span className="text-ink font-medium">{category.name}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="bg-white/80 rounded-3xl p-8 sm:p-12 border border-sage/15 shadow-subtle space-y-3 relative overflow-hidden">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
              Category Pillar
            </span>
            {!category.launched && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-ink">
            {category.name}
          </h1>
          <p className="font-script text-2xl text-sage-dark">
            {category.tagline}
          </p>
          <p className="text-sm text-ink-muted leading-relaxed pt-1">
            {category.description}
          </p>
        </div>
      </div>

      {/* Available Products */}
      {launched.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-ink font-normal">
            Ready to Dispatch ({launched.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {launched.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Coming Soon Section */}
      {comingSoon.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-sage/15">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 mb-2">
              <Bell className="w-3.5 h-3.5" /> Stability & Formulation Verification
            </span>
            <h2 className="font-serif text-2xl text-ink font-normal">
              Upcoming In This Category
            </h2>
            <p className="text-xs text-ink-muted mt-1 leading-relaxed">
              These products will be made purchasable once full batch lab analysis is completed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoon.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
