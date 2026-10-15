"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, Bell, ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/commerce/pricing";
import { useCartStore } from "@/lib/cart-store";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addItem } = useCartStore();
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const pack = product.packSizes[selectedPackIndex] || product.packSizes[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.available) return;

    addItem({
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
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotified(true);
    setTimeout(() => {
      setShowNotifyModal(false);
      setNotified(false);
      setNotifyEmail("");
    }, 2000);
  };

  return (
    <div className="group relative bg-white/80 rounded-3xl p-4 border border-sage/15 shadow-subtle hover:shadow-soft hover:border-sage/35 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with Badges */}
        <Link href={`/products/${product.slug}`} className="block relative aspect-square rounded-2xl overflow-hidden bg-ivory mb-4">
          <Image
            src={product.images.main}
            alt={product.images.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {pack.badge && (
              <Badge variant="sage" size="sm" className="font-semibold shadow-sm">
                {pack.badge}
              </Badge>
            )}
            {!product.available && (
              <Badge variant="warning" size="sm" className="font-semibold shadow-sm">
                Coming Soon
              </Badge>
            )}
          </div>

          {/* Discount Percentage Badge */}
          {pack.compareAtPrice > pack.price && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-sage-dark text-[10px] font-bold px-2 py-0.5 rounded-full border border-sage/20 shadow-sm">
              Save {Math.round(((pack.compareAtPrice - pack.price) / pack.compareAtPrice) * 100)}%
            </div>
          )}
        </Link>

        {/* Product Meta */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-ink-muted">
            <span>{product.line}</span>
            <span className="font-medium text-sage-dark">{product.flavour}</span>
          </div>

          <Link href={`/products/${product.slug}`} className="block group-hover:text-sage transition-colors">
            <h3 className="font-serif text-lg font-normal text-ink line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Benefit Chips */}
          <div className="flex flex-wrap gap-1 pt-1 pb-2">
            {product.benefitChips.slice(0, 2).map((chip, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-ivory border border-sage/15 text-ink-muted"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing and Action */}
      <div className="pt-3 border-t border-sage/10 space-y-3">
        {/* Pack Size Selector if multiple */}
        {product.packSizes.length > 1 && (
          <div className="flex gap-1.5">
            {product.packSizes.map((p, idx) => (
              <button
                key={p.id}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPackIndex(idx);
                }}
                className={`text-[11px] px-3 py-1.5 rounded-full border transition-all min-h-[36px] inline-flex items-center ${
                  selectedPackIndex === idx
                    ? "bg-sage/15 border-sage text-sage-dark font-medium"
                    : "bg-white/60 border-sage/20 text-ink-muted hover:border-sage/40"
                }`}
              >
                {p.type === "tin" ? "Jar" : "Box"} ({p.servings}s)
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold text-ink font-serif">
                {formatPrice(pack.price)}
              </span>
              {pack.compareAtPrice > pack.price && (
                <span className="text-xs text-ink-muted line-through">
                  {formatPrice(pack.compareAtPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-ink-muted block">
              ₹{Math.round(pack.price / pack.servings)} / serving
            </span>
          </div>

          {product.available ? (
            <Button
              onClick={handleAddToCart}
              variant={added ? "secondary" : "primary"}
              size="sm"
              className="gap-1 px-4 text-xs shrink-0"
              aria-label={`Add ${product.name} to cart`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5 text-sage" /> Added
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" /> Add to Cart
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault();
                setShowNotifyModal(true);
              }}
              variant="outline"
              size="sm"
              className="gap-1 px-3 text-xs shrink-0 border-amber-600/40 text-amber-800 hover:bg-amber-50"
            >
              <Bell className="w-3.5 h-3.5" /> Notify Me
            </Button>
          )}
        </div>
      </div>

      {/* Notify Me Modal for Coming Soon Products */}
      {showNotifyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
          onClick={() => setShowNotifyModal(false)}
        >
          <div
            className="bg-ivory rounded-3xl p-6 max-w-sm w-full border border-sage/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                Priority Waitlist
              </span>
              <h4 className="font-serif text-xl text-ink font-normal">
                {product.name}
              </h4>
              <p className="text-xs text-ink-muted">
                Be the first to know when our initial production run is batched and certified.
              </p>
            </div>

            {notified ? (
              <div className="p-4 rounded-2xl bg-sage/15 text-center text-sage-dark text-xs font-semibold">
                You&apos;re on the list! We&apos;ll notify you at priority dispatch.
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-full border border-sage/20 bg-white focus:outline-none focus:border-sage"
                />
                <Button type="submit" variant="primary" size="sm" className="w-full">
                  Notify Me First
                </Button>
              </form>
            )}

            <button
              onClick={() => setShowNotifyModal(false)}
              className="mt-3 text-xs text-ink-muted hover:text-ink text-center w-full block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
