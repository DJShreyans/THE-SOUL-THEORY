"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Leaf,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Clock,
  Heart,
  Share2,
  FileText,
  AlertCircle,
  Star,
} from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/commerce/pricing";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductDetailClientProps {
  product: Product;
  crossSellProducts: Product[];
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
  crossSellProducts,
}) => {
  const router = useRouter();
  const { addItem, setOpen } = useCartStore();

  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("what-it-is");

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const pack = product.packSizes[selectedPackIndex] || product.packSizes[0];

  // Sibling flavours in the same line
  const siblingFlavours = PRODUCTS.filter(
    (p) => p.line === product.line
  );

  const handleAddToCart = () => {
    if (!product.available) return;

    addItem(
      {
        id: `${product.slug}-${pack.id}`,
        productSlug: product.slug,
        productName: product.name,
        line: product.line,
        flavour: product.flavour,
        packSizeId: pack.id,
        packSizeLabel: pack.label,
        price: pack.price,
        compareAtPrice: pack.compareAtPrice,
        netWeightG: pack.netWeightG,
        image: product.images.main,
      },
      quantity
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product.available) return;
    handleAddToCart();
    setOpen(false);
    router.push("/checkout");
  };

  // Dynamic tint classes for the hero section
  const tintClass = {
    lavender: "bg-lavender/30",
    "soft-coral": "bg-soft-coral/30",
    "powder-blue": "bg-powder-blue/30",
    seafoam: "bg-seafoam/30",
    ivory: "bg-ivory",
  }[product.theme.tint];

  return (
    <div className="pb-32 sm:pb-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <nav className="flex items-center gap-2 text-xs text-ink-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-ink capitalize">
            {product.category.replace("-", " ")}
          </Link>
          <span>/</span>
          <span className="text-ink font-medium truncate max-w-[200px]">
            {product.flavour}
          </span>
        </nav>
      </div>

      {/* Hero Product Stage */}
      <section className={`pt-6 pb-16 border-b border-sage/15 ${tintClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Images Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white shadow-soft border border-sage/15">
                <Image
                  src={product.images.main}
                  alt={product.images.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {pack.badge && (
                    <Badge variant="sage" size="md">
                      {pack.badge}
                    </Badge>
                  )}
                  {!product.available && (
                    <Badge variant="warning" size="md">
                      Batch In Verification
                    </Badge>
                  )}
                </div>

                {pack.compareAtPrice > pack.price && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-sage-dark text-xs font-bold px-3 py-1 rounded-full border border-sage/20 shadow-subtle">
                    Save {Math.round(((pack.compareAtPrice - pack.price) / pack.compareAtPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Image Alt Note */}
              <p className="text-[11px] text-ink-faint text-center italic">
                Render shown for packaging visualization. Batch-certified Indian manufacture.
              </p>
            </div>

            {/* Right: Product Purchase Engine */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
                    {product.line}
                  </span>
                  <span className="text-xs text-ink-muted">•</span>
                  <span className="text-xs text-ink-muted">100% Vegan</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
                  {product.name}
                </h1>

                {product.signOff && (
                  <p className="font-script text-2xl text-sage-dark mt-1">
                    {product.signOff}
                  </p>
                )}

                <p className="text-sm text-ink-muted mt-3 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price Row */}
              <div className="p-4 rounded-2xl bg-white/80 border border-sage/15 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-semibold font-serif text-ink">
                      {formatPrice(pack.price)}
                    </span>
                    {pack.compareAtPrice > pack.price && (
                      <span className="text-sm text-ink-muted line-through">
                        {formatPrice(pack.compareAtPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-ink-muted">
                    Inclusive of all taxes (GST 18%) • ₹{Math.round(pack.price / pack.servings)} per serving
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-sage-dark bg-sage/10 px-2.5 py-1 rounded-full">
                    {pack.servings} Servings
                  </span>
                </div>
              </div>

              {/* Flavour Selector (Sibling Variants) */}
              {siblingFlavours.length > 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Select Flavour: <span className="font-normal text-sage-dark">{product.flavour}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {siblingFlavours.map((sibling) => (
                      <Link
                        key={sibling.slug}
                        href={`/products/${sibling.slug}`}
                        className={`text-xs px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                          sibling.slug === product.slug
                            ? "bg-sage text-ivory border-sage font-semibold shadow-subtle"
                            : "bg-white text-ink border-sage/20 hover:border-sage/40"
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: sibling.theme.accent }}
                        />
                        <span>{sibling.flavour}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Pack Size Selector */}
              {product.packSizes.length > 1 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Select Format & Size
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.packSizes.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPackIndex(idx)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          selectedPackIndex === idx
                            ? "bg-white border-sage shadow-subtle ring-1 ring-sage"
                            : "bg-white/60 border-sage/20 hover:border-sage/40"
                        }`}
                      >
                        <div className="text-xs font-semibold text-ink">{p.label}</div>
                        <div className="text-xs text-ink-muted mt-0.5">
                          {formatPrice(p.price)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Action Buttons */}
              <div className="space-y-3 pt-2">
                {product.available ? (
                  <>
                    <div className="flex items-center gap-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-sage/25 rounded-full bg-white px-2 py-1 shadow-inner">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 text-ink-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold px-4 min-w-[32px] text-center text-ink">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 text-ink-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <Button
                        onClick={handleAddToCart}
                        variant={added ? "secondary" : "primary"}
                        size="lg"
                        className="flex-1 gap-2 text-sm font-semibold shadow-soft"
                      >
                        {added ? (
                          <>
                            <Check className="w-4 h-4 text-sage" /> Added to Cart!
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" /> Add to Cart • {formatPrice(pack.price * quantity)}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Buy Now Button */}
                    <Button
                      onClick={handleBuyNow}
                      variant="coral"
                      size="lg"
                      className="w-full text-sm font-semibold shadow-subtle"
                    >
                      Instant Buy Now
                    </Button>
                  </>
                ) : (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                      Under Batch Verification
                    </span>
                    <p className="text-xs text-amber-800">
                      This formulation is undergoing NABL lab certification. Join our priority notification list to be alerted upon dispatch.
                    </p>
                    <Button
                      onClick={() => alert("Thank you! You will be notified when this batch is available.")}
                      variant="outline"
                      size="md"
                      className="border-amber-700/40 text-amber-900 hover:bg-amber-100"
                    >
                      Notify Me at Launch
                    </Button>
                  </div>
                )}
              </div>

              {/* Packaging Badges Row */}
              <div className="pt-4 border-t border-sage/15 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/70 border border-sage/10 text-center text-[11px] font-semibold text-ink"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Information Accordion Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
            Complete Transparency
          </span>
          <h2 className="font-serif text-3xl text-ink font-normal">
            Formula Specifications
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-sage/20 pb-2">
          {[
            { id: "what-it-is", label: "What It Is" },
            { id: "how-to-use", label: "How to Use" },
            { id: "nutrition", label: "Ingredients & Nutrition" },
            { id: "testing", label: "Lab Testing & Quality" },
            { id: "faqs", label: "FAQs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs px-4 py-2.5 rounded-full transition-all whitespace-nowrap font-medium ${
                activeTab === tab.id
                  ? "bg-sage text-ivory font-semibold shadow-subtle"
                  : "text-ink-muted hover:text-ink hover:bg-sage/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: What It Is */}
        {activeTab === "what-it-is" && (
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-sage/15 shadow-subtle">
            <h3 className="font-serif text-xl text-ink">Mechanism of Action</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {product.longDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-sage/10">
              {product.benefits.map((b, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs font-bold text-ink">{b.title}</h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: How to Use */}
        {activeTab === "how-to-use" && (
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-sage/15 shadow-subtle">
            <h3 className="font-serif text-xl text-ink">Daily Ritual Guidelines</h3>
            <div className="space-y-4">
              {product.howToUse.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-ivory border border-sage/15">
                  <div className="w-8 h-8 rounded-full bg-sage/15 text-sage font-serif font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink">{step.step}</h4>
                    <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Nutrition & Ingredients Table */}
        {activeTab === "nutrition" && (
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-sage/15 shadow-subtle">
            <h3 className="font-serif text-xl text-ink">Nutritional Facts Panel</h3>
            <div className="border border-ink/20 rounded-2xl p-5 font-sans space-y-3">
              <div className="border-b-4 border-ink pb-2">
                <span className="text-xl font-bold font-serif text-ink block">
                  Supplement Facts
                </span>
                <span className="text-xs text-ink-muted">
                  Serving Size: {product.nutritionFacts.servingSize} • Servings Per Container: {product.nutritionFacts.servingsPerContainer}
                </span>
              </div>

              <div className="border-b border-ink/20 py-1.5 flex justify-between font-bold text-xs">
                <span>Amount Per Serving</span>
                <span>% Daily Value*</span>
              </div>

              <div className="space-y-1.5 divide-y divide-ink/10 text-xs">
                {product.nutritionFacts.nutrients.map((n, idx) => (
                  <div key={idx} className="flex justify-between pt-1.5">
                    <span className="font-medium text-ink">{n.name}</span>
                    <span className="font-bold text-ink">
                      {n.amount} {n.dailyValue ? `(${n.dailyValue})` : ""}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-ink-muted pt-2 border-t-2 border-ink">
                *Percent Daily Values are based on an average 2,000 calorie diet (ICMR-NIN RDA for Indian adults). †Daily Value not established.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink">
                Full Ingredients List:
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                {product.ingredients.join(", ")}.
              </p>
              <p className="text-xs text-ink-muted">
                <strong>Allergen Notice:</strong> {product.allergens}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Lab Testing & Quality */}
        {activeTab === "testing" && (
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-sage/15 shadow-subtle">
            <h3 className="font-serif text-xl text-ink">Quality Control Protocol</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Every production batch is sent to NABL-accredited analytical laboratories to verify safety parameters prior to distribution:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
                <ShieldCheck className="w-5 h-5 text-sage" />
                <h4 className="text-xs font-bold text-ink">Heavy Metal Screening</h4>
                <p className="text-xs text-ink-muted">
                  Passed tests for Lead, Mercury, Arsenic, and Cadmium below detectable FSSAI safety thresholds.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
                <Leaf className="w-5 h-5 text-sage" />
                <h4 className="text-xs font-bold text-ink">Microbial Safety Analysis</h4>
                <p className="text-xs text-ink-muted">
                  Certified zero Salmonella, E. coli, and fungal pathogens.
                </p>
              </div>
            </div>
            <p className="text-xs text-ink-faint italic">
              {/* TODO(client): Real Certificate of Analysis PDF download link */}
              Request batch analysis CoA by providing your packaging lot number to care@soultheory.in.
            </p>
          </div>
        )}

        {/* Tab 5: FAQs */}
        {activeTab === "faqs" && (
          <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-sage/15 shadow-subtle">
            <h3 className="font-serif text-xl text-ink mb-4">Questions About This Formula</h3>
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
                <h4 className="text-xs font-bold text-ink">{faq.question}</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Mandatory Statutory Regulatory Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 rounded-3xl bg-ivory border border-sage/20 space-y-2 text-ink">
          <div className="flex items-center gap-2 text-xs font-bold text-sage-dark uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-sage" /> Statutory Compliance & Regulatory Statement
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            {siteConfig.regulatory.statutoryDisclaimer}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-ink-faint">
            <div>
              <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight. Keep lid tightly closed.
            </div>
            <div>
              <strong>Shelf Life:</strong> 18 months from manufacturing date (see base of jar for Batch/MFG/EXP).
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Reviews Section: Zero Fake Reviews Policy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white p-8 rounded-3xl border border-sage/15 shadow-subtle text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-ink font-normal">
            Real Customer Reviews
          </h3>
          <p className="text-xs text-ink-muted max-w-md mx-auto leading-relaxed">
            We adhere to a strict zero-fake-reviews policy. Only genuine, verified purchasers from our direct storefront can submit product feedback.
          </p>

          <div className="pt-2">
            <Button
              onClick={() => setShowReviewModal(true)}
              variant="outline"
              size="sm"
            >
              Be the First to Review This Formula
            </Button>
          </div>

          {showReviewModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
              onClick={() => setShowReviewModal(false)}
            >
              <div
                className="bg-ivory rounded-3xl p-6 max-w-md w-full border border-sage/20 shadow-2xl relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="font-serif text-xl text-ink mb-1">
                  Submit a Verified Review
                </h4>
                <p className="text-xs text-ink-muted mb-4">
                  Reviews are authenticated against your registered order number.
                </p>

                {reviewSubmitted ? (
                  <div className="p-4 rounded-2xl bg-sage/15 text-sage-dark text-xs font-semibold text-center">
                    Thank you! Your feedback will be published after verification.
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setReviewSubmitted(true);
                      setTimeout(() => setShowReviewModal(false), 2000);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label className="text-[11px] font-bold uppercase text-ink block mb-1">
                        Order Number (e.g. ST-10023)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ST-XXXXX"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-sage/20 bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-ink block mb-1">
                        Rating (1 to 5 Stars)
                      </label>
                      <select className="w-full px-3 py-2 text-xs rounded-xl border border-sage/20 bg-white">
                        <option value="5">★★★★★ (5/5) Exceptional</option>
                        <option value="4">★★★★☆ (4/5) Very Good</option>
                        <option value="3">★★★☆☆ (3/5) Average</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-ink block mb-1">
                        Your Feedback
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Share your taste, mixability, or routine experience..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-sage/20 bg-white"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="sm" className="w-full">
                      Submit Verified Review
                    </Button>
                  </form>
                )}

                <button
                  onClick={() => setShowReviewModal(false)}
                  className="mt-3 text-xs text-ink-muted hover:text-ink text-center w-full block"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* "Pairs Well With" Cross-Sell Section */}
      {crossSellProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
              Synergistic Ritual
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
              Pairs Well With
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {crossSellProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Sticky Mobile Add-to-Cart Bar */}
      {product.available && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sage/20 p-4 shadow-2xl flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-ink font-serif">
              {formatPrice(pack.price)}
            </div>
            <div className="text-[10px] text-ink-muted">
              {product.flavour}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            variant={added ? "secondary" : "primary"}
            size="md"
            className="flex-1 text-xs font-semibold"
          >
            {added ? "Added!" : "Add to Cart"}
          </Button>
        </div>
      )}
    </div>
  );
};
