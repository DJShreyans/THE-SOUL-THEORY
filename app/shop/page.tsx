"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Filter, X, SlidersHorizontal, ArrowUpDown, Sparkles, Bell } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFlavourFamily, setSelectedFlavourFamily] = useState<string>("all");
  const [selectedDietary, setSelectedDietary] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available launched products
  const launchedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.available);
  }, []);

  // Coming soon products
  const comingSoonProducts = useMemo(() => {
    return PRODUCTS.filter((p) => !p.available);
  }, []);

  // Filtered launched products
  const filteredLaunchedProducts = useMemo(() => {
    let list = [...launchedProducts];

    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedFlavourFamily !== "all") {
      list = list.filter((p) => p.flavourFamily === selectedFlavourFamily);
    }

    if (selectedDietary !== "all") {
      list = list.filter((p) => p.badges.includes(selectedDietary));
    }

    // Sort
    if (selectedSort === "price-asc") {
      list.sort((a, b) => a.packSizes[0].price - b.packSizes[0].price);
    } else if (selectedSort === "price-desc") {
      list.sort((a, b) => b.packSizes[0].price - a.packSizes[0].price);
    }

    return list;
  }, [launchedProducts, selectedCategory, selectedFlavourFamily, selectedDietary, selectedSort]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedFlavourFamily("all");
    setSelectedDietary("all");
    setSelectedSort("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedFlavourFamily !== "all" ||
    selectedDietary !== "all";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
          The Full Catalogue
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink">
          Shop All Formulations
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          Functional nutrition engineered for modern lives. Explore our ultra-micronised creatine monohydrate and electrolyte multivitamin hydration blends.
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-sage/15 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Desktop Category Tabs */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-2xl">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
              selectedCategory === "all"
                ? "bg-sage text-ivory font-semibold shadow-subtle"
                : "bg-ivory text-ink hover:bg-sage/10"
            }`}
          >
            All Formulations
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.slug
                  ? "bg-sage text-ivory font-semibold shadow-subtle"
                  : "bg-ivory text-ink hover:bg-sage/10"
              }`}
            >
              <span>{cat.shortTitle}</span>
              {!cat.launched && (
                <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-medium">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Filter Trigger & Quick Swiper */}
        <div className="lg:hidden w-full space-y-2.5">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-sage/20 bg-ivory text-ink w-full justify-center min-h-[44px] shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4 text-sage" />
            <span>Filters & Sort</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-sage" />
            )}
          </button>

          {/* Quick Category Swiper */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full py-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap min-h-[36px] ${
                selectedCategory === "all"
                  ? "bg-sage text-ivory font-semibold shadow-subtle"
                  : "bg-white text-ink border border-sage/20"
              }`}
            >
              All Formulations
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1 min-h-[36px] ${
                  selectedCategory === cat.slug
                    ? "bg-sage text-ivory font-semibold shadow-subtle"
                    : "bg-white text-ink border border-sage/20"
                }`}
              >
                <span>{cat.shortTitle}</span>
                {!cat.launched && (
                  <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-medium">
                    Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Secondary Filters & Sort Dropdowns */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Flavour Family */}
          <select
            value={selectedFlavourFamily}
            onChange={(e) => setSelectedFlavourFamily(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-full bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
          >
            <option value="all">All Flavours</option>
            <option value="fruity">Fruity</option>
            <option value="citrus">Citrus</option>
            <option value="floral">Floral</option>
            <option value="tropical">Tropical</option>
          </select>

          {/* Dietary */}
          <select
            value={selectedDietary}
            onChange={(e) => setSelectedDietary(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-full bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
          >
            <option value="all">All Dietary</option>
            <option value="Vegan">100% Vegan</option>
            <option value="No Added Sugar">No Added Sugar</option>
            <option value="Non-GMO">Non-GMO</option>
          </select>

          {/* Sort */}
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-full bg-ivory border border-sage/20 text-ink font-medium focus:outline-none focus:border-sage"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-ink-muted hover:text-ink underline ml-1"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer / Dropdown */}
      {mobileFilterOpen && (
        <div className="lg:hidden p-5 rounded-2xl bg-white border border-sage/20 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-ink">Filters</h3>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="text-xs text-ink-muted hover:text-ink"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-ink-muted block mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-ivory border border-sage/20 text-ink"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name} {!cat.launched ? "(Coming Soon)" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-muted block mb-1">
                Flavour Family
              </label>
              <select
                value={selectedFlavourFamily}
                onChange={(e) => setSelectedFlavourFamily(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-ivory border border-sage/20 text-ink"
              >
                <option value="all">All Flavours</option>
                <option value="fruity">Fruity</option>
                <option value="citrus">Citrus</option>
                <option value="floral">Floral</option>
                <option value="tropical">Tropical</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-muted block mb-1">
                Sort Order
              </label>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full text-xs p-2 rounded-xl bg-ivory border border-sage/20 text-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={clearFilters}
                variant="secondary"
                size="sm"
                className="flex-1 text-xs"
              >
                Reset All
              </Button>
              <Button
                onClick={() => setMobileFilterOpen(false)}
                variant="primary"
                size="sm"
                className="flex-1 text-xs"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid: Available Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl text-ink font-normal">
            Ready to Dispatch ({filteredLaunchedProducts.length})
          </h2>
          <span className="text-xs text-ink-muted">
            All prices inclusive of 18% GST • Free shipping over ₹999
          </span>
        </div>

        {filteredLaunchedProducts.length === 0 ? (
          <div className="bg-white/60 rounded-3xl p-12 text-center border border-sage/15 space-y-3">
            <Sparkles className="w-8 h-8 text-sage mx-auto" />
            <h3 className="font-serif text-xl text-ink">No products match your filter</h3>
            <p className="text-xs text-ink-muted max-w-sm mx-auto">
              Try adjusting your category or flavour filter to explore our active formulations.
            </p>
            <Button onClick={clearFilters} variant="secondary" size="sm">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLaunchedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Separator Section: Coming Soon to the Routine */}
      <div className="pt-16 border-t border-sage/20 space-y-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
            <Bell className="w-3.5 h-3.5" /> Upcoming Batch Certifications
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
            Coming Soon to the Routine
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
            In compliance with our brand policy, products currently undergoing stability verification or FSSAI registration are not available for purchase. You can register for priority alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
