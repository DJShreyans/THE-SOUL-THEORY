import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  User,
} from "lucide-react";
import { ARTICLES, getArticleBySlug } from "@/data/journal";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { siteConfig } from "@/config/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: `${article.title} | ${siteConfig.name} Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related products
  const relatedProducts = PRODUCTS.filter((p) =>
    article.relatedProductSlugs.includes(p.slug)
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: `${siteConfig.url}${article.coverImage}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/brand/soul-theory-logo.jpg`,
      },
    },
    description: article.excerpt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pb-24">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-xs text-ink-muted">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <Link href="/journal" className="hover:text-ink">
              Journal
            </Link>
            <span>/</span>
            <span className="text-ink font-medium truncate max-w-[240px]">
              {article.title}
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-ink-muted">•</span>
            <span className="flex items-center gap-1 text-xs text-ink-muted">
              <Clock className="w-3.5 h-3.5" /> {article.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-[1.18]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans pt-1">
            {article.excerpt}
          </p>

          {/* Author Card */}
          <div className="pt-4 border-t border-sage/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/15 text-sage flex items-center justify-center font-serif font-bold text-sm">
                <User className="w-5 h-5 text-sage" />
              </div>
              <div>
                <span className="text-xs font-bold text-ink block">
                  {article.author.name}
                </span>
                <span className="text-[11px] text-ink-muted">
                  {article.author.role} • {article.publishedAt}
                </span>
              </div>
            </div>

            <div className="text-xs text-ink-muted italic">
              Evidence-based review
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-soft border border-sage/15 bg-ivory">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-ink leading-relaxed font-sans">
          <div className="prose prose-sage max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-ink-light">
            {article.content.split("\n\n").map((paragraph, idx) => {
              const text = paragraph.trim();
              if (text.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="font-serif text-2xl sm:text-3xl font-normal text-ink pt-6 pb-1 border-b border-sage/15"
                  >
                    {text.replace("## ", "")}
                  </h2>
                );
              }
              if (text.startsWith("### ")) {
                return (
                  <h3 key={idx} className="font-serif text-xl font-normal text-ink pt-4">
                    {text.replace("### ", "")}
                  </h3>
                );
              }
              if (text.startsWith("- ")) {
                const listItems = text.split("\n- ");
                return (
                  <ul key={idx} className="space-y-1.5 list-disc pl-5 text-sm text-ink-muted">
                    {listItems.map((li, lidx) => (
                      <li key={lidx}>{li.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (text.startsWith("1. ")) {
                const listItems = text.split("\n");
                return (
                  <ol key={idx} className="space-y-2 list-decimal pl-5 text-sm text-ink-muted">
                    {listItems.map((li, lidx) => (
                      <li key={lidx}>{li.replace(/^\d+\.\s*/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {text}
                </p>
              );
            })}
          </div>

          {/* Nutritionist Review Disclaimer Notice */}
          <div className="mt-12 p-5 rounded-2xl bg-ivory border border-sage/20 text-xs text-ink-muted space-y-1">
            <span className="font-semibold text-ink flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sage" /> Editorial & Scientific Standards:
            </span>
            <p>
              This educational guide is grounded in published peer-reviewed nutrition science and does not constitute individual medical diagnosis or treatment advice. Consult your physician prior to supplementation.
            </p>
            <p className="text-[10px] text-ink-faint italic pt-1">
              {article.nutritionistReviewStatus}
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-sage/20 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block">
                  Mentioned in this article
                </span>
                <h3 className="font-serif text-2xl text-ink font-normal">
                  Complementary Formulations
                </h3>
              </div>
              <Link href="/shop" className="text-xs font-semibold text-sage-dark hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
