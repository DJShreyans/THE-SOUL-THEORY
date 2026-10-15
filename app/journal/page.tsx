"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { ARTICLES } from "@/data/journal";

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Fitness", "Hydration", "Nutrition", "Habits", "Women's Wellness"];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
          Evidence-Based Education
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink">
          The Wellness Journal
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          Straightforward guides on human biochemistry, cellular hydration, and realistic habit design. Zero marketing jargon.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white/80 rounded-2xl p-4 border border-sage/15 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-sage text-ivory font-semibold shadow-subtle"
                  : "bg-ivory text-ink hover:bg-sage/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-full bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage placeholder:text-ink-faint"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white/60 rounded-3xl p-12 text-center border border-sage/15 space-y-3">
          <BookOpen className="w-8 h-8 text-sage mx-auto" />
          <h3 className="font-serif text-xl text-ink">No articles found</h3>
          <p className="text-xs text-ink-muted">
            Try adjusting your search query or category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group bg-white rounded-3xl p-5 border border-sage/15 shadow-subtle hover:shadow-soft hover:border-sage/35 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-ivory mb-4">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-sage-dark text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-sage/15">
                    {article.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-ink-muted">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-normal text-ink group-hover:text-sage transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-sage/10 flex items-center justify-between text-xs">
                <span className="font-medium text-ink-muted">
                  By {article.author.name}
                </span>
                <span className="font-semibold text-sage-dark flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
