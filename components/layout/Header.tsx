"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { SearchModal } from "./SearchModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { toggleCart, getCalculations } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = mounted ? getCalculations().itemCount : 0;
  const featuredProduct = PRODUCTS[0]; // Blueberry Cloud

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Announcement Bar */}
        {siteConfig.announcement.enabled && (
          <div className="bg-sage text-ivory text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
            <span>{siteConfig.announcement.message}</span>
            <Link
              href={siteConfig.announcement.link || "/shop"}
              className="underline hover:opacity-80 transition-opacity font-semibold ml-1"
            >
              Shop Now
            </Link>
          </div>
        )}

        {/* Main Header Bar */}
        <div
          className={`w-full transition-all duration-200 border-b ${
            isScrolled
              ? "bg-ivory/95 backdrop-blur-md shadow-subtle border-sage/15 py-3"
              : "bg-ivory/80 backdrop-blur-sm border-transparent py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {/* Shop All with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link
                  href="/shop"
                  className={`text-sm font-medium tracking-wide flex items-center gap-1 transition-colors py-2 ${
                    pathname.startsWith("/shop") ? "text-sage-dark font-semibold" : "text-ink hover:text-sage"
                  }`}
                >
                  Shop
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 w-[580px] z-50"
                    >
                      <div className="bg-ivory rounded-3xl p-6 shadow-2xl border border-sage/20 grid grid-cols-5 gap-6">
                        {/* Categories List (3 cols) */}
                        <div className="col-span-3 space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-sage/10">
                            <span className="text-xs uppercase font-bold tracking-wider text-ink-muted">
                              Categories
                            </span>
                            <Link
                              href="/shop"
                              onClick={() => setMegaMenuOpen(false)}
                              className="text-xs font-semibold text-sage hover:underline flex items-center gap-1"
                            >
                              Shop All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="space-y-2">
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/shop/${cat.slug}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="block p-2.5 rounded-2xl hover:bg-white/80 transition-all border border-transparent hover:border-sage/15 group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-ink group-hover:text-sage transition-colors">
                                    {cat.name}
                                  </span>
                                  {!cat.launched && (
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                                      Soon
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-ink-muted line-clamp-1 mt-0.5">
                                  {cat.tagline}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Featured Product Preview (2 cols) */}
                        <div className="col-span-2 bg-lavender/40 rounded-2xl p-4 flex flex-col justify-between border border-lavender-dark/30">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-sage-dark bg-white/80 px-2 py-0.5 rounded-full">
                              Featured Formula
                            </span>
                            <h4 className="font-serif text-sm font-normal text-ink mt-2">
                              {featuredProduct.name}
                            </h4>
                            <p className="text-xs text-ink-muted mt-1">
                              Ultra-micronised creatine monohydrate.
                            </p>
                          </div>

                          <div className="relative w-full h-28 my-2 rounded-xl overflow-hidden bg-white/50">
                            <Image
                              src={featuredProduct.images.main}
                              alt={featuredProduct.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <Link
                            href={`/products/${featuredProduct.slug}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="text-xs font-semibold text-ink hover:text-sage flex items-center gap-1"
                          >
                            Explore details <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/philosophy"
                className={`text-sm font-medium tracking-wide transition-colors py-2 ${
                  pathname === "/philosophy" ? "text-sage-dark font-semibold" : "text-ink hover:text-sage"
                }`}
              >
                Our Philosophy
              </Link>

              <Link
                href="/journal"
                className={`text-sm font-medium tracking-wide transition-colors py-2 ${
                  pathname.startsWith("/journal") ? "text-sage-dark font-semibold" : "text-ink hover:text-sage"
                }`}
              >
                Journal
              </Link>

              <Link
                href="/contact"
                className={`text-sm font-medium tracking-wide transition-colors py-2 ${
                  pathname === "/contact" ? "text-sage-dark font-semibold" : "text-ink hover:text-sage"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Center: Brand Wordmark and Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex flex-col items-center group text-center">
                <span className="font-serif text-2xl sm:text-3xl tracking-widest text-ink group-hover:text-sage transition-colors font-medium">
                  {siteConfig.wordmark}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-ink-muted uppercase font-sans -mt-0.5">
                  {siteConfig.subline}
                </span>
              </Link>
            </div>

            {/* Right: Actions (Search, Cart, Mobile Toggle) */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 rounded-full text-ink hover:text-sage hover:bg-sage/10 transition-colors"
                aria-label="Search products and journal"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={toggleCart}
                className="relative p-2.5 rounded-full text-ink hover:text-sage hover:bg-sage/10 transition-colors"
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-sage text-ivory text-[10px] font-bold flex items-center justify-center animate-scale-in">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full text-ink hover:text-sage hover:bg-sage/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-ivory border-b border-sage/20 overflow-hidden shadow-xl"
            >
              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-ink-muted">
                    Shop Categories
                  </span>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <Link
                      href="/shop"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 rounded-2xl bg-white border border-sage/15 text-sm font-semibold text-ink flex items-center justify-between"
                    >
                      <span>Shop All Products</span>
                      <ArrowRight className="w-4 h-4 text-sage" />
                    </Link>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/shop/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 rounded-2xl bg-white/70 border border-sage/10 text-sm font-medium text-ink flex items-center justify-between"
                      >
                        <div>
                          <div>{cat.name}</div>
                          <div className="text-xs text-ink-muted">{cat.tagline}</div>
                        </div>
                        {!cat.launched && (
                          <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                            Soon
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-sage/15 space-y-3">
                  <Link
                    href="/philosophy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-serif text-ink hover:text-sage"
                  >
                    Our Philosophy
                  </Link>
                  <Link
                    href="/journal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-serif text-ink hover:text-sage"
                  >
                    The Wellness Journal
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-serif text-ink hover:text-sage"
                  >
                    Contact & FAQs
                  </Link>
                  <Link
                    href="/track-order"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-serif text-ink hover:text-sage"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </>
  );
};
