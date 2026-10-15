"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ARTICLES } from "@/data/journal";
import { formatPrice } from "@/lib/commerce/pricing";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.flavour.toLowerCase().includes(cleanQuery) ||
          p.shortDescription.toLowerCase().includes(cleanQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchingArticles = cleanQuery
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.excerpt.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Search site"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            className="relative w-full max-w-2xl bg-ivory rounded-3xl shadow-2xl border border-sage/20 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-6 py-4 border-b border-sage/15 bg-white">
              <Search className="w-5 h-5 text-sage mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search creatine, hydration flavours, electrolytes, or articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-base bg-transparent text-ink placeholder:text-ink-faint focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-ink-muted hover:text-ink mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-ivory-dark text-ink-muted hover:text-ink"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
              {!cleanQuery ? (
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-wider text-ink-faint font-semibold">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Creatine Monohydrate", "Watermelon Lime", "Electrolytes", "Blueberry Cloud", "Prebiotics", "Consistency"].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setQuery(item)}
                          className="text-xs px-3 py-1.5 rounded-full bg-white border border-sage/20 text-ink hover:bg-sage/10 transition-colors"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {matchingProducts.length === 0 && matchingArticles.length === 0 ? (
                    <div className="py-12 text-center text-ink-muted">
                      <p className="text-base font-serif mb-1">No results found for &quot;{query}&quot;</p>
                      <p className="text-xs">Try searching for &quot;creatine&quot;, &quot;hydration&quot;, or &quot;electrolytes&quot;.</p>
                    </div>
                  ) : (
                    <>
                      {matchingProducts.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xs uppercase tracking-wider text-ink-muted font-bold flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-sage" /> Products ({matchingProducts.length})
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {matchingProducts.map((product) => (
                              <Link
                                key={product.slug}
                                href={`/products/${product.slug}`}
                                onClick={onClose}
                                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-sage/15 hover:border-sage/40 transition-all group"
                              >
                                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-ivory shrink-0">
                                  <Image
                                    src={product.images.main}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-ink truncate group-hover:text-sage transition-colors">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-ink-muted">{product.flavour}</p>
                                  <div className="text-xs font-semibold text-ink mt-0.5">
                                    {formatPrice(product.packSizes[0].price)}
                                    {!product.available && (
                                      <span className="ml-2 text-[10px] text-amber-700 font-normal">Coming soon</span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {matchingArticles.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xs uppercase tracking-wider text-ink-muted font-bold flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-sage" /> Journal Articles ({matchingArticles.length})
                            </h3>
                          </div>
                          <div className="space-y-2">
                            {matchingArticles.map((article) => (
                              <Link
                                key={article.slug}
                                href={`/journal/${article.slug}`}
                                onClick={onClose}
                                className="block p-3 rounded-2xl bg-white border border-sage/15 hover:border-sage/40 transition-all group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] uppercase font-semibold text-sage-dark bg-sage/10 px-2 py-0.5 rounded-full">
                                    {article.category}
                                  </span>
                                  <span className="text-xs text-ink-muted">{article.readingTime}</span>
                                </div>
                                <h4 className="text-sm font-medium text-ink mt-1.5 group-hover:text-sage transition-colors">
                                  {article.title}
                                </h4>
                                <p className="text-xs text-ink-muted line-clamp-1 mt-0.5">{article.excerpt}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-ivory-light border-t border-sage/15 flex items-center justify-between text-xs text-ink-muted">
              <span>Press ESC to close</span>
              <Link href="/shop" onClick={onClose} className="text-sage font-medium hover:underline flex items-center gap-1">
                View all products <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
