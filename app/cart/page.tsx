"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/commerce/pricing";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    appliedPromo,
    applyPromo,
    removePromo,
    isCod,
    setIsCod,
    getCalculations,
  } = useCartStore();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(
    null
  );

  const calc = getCalculations();
  const progressPercent = Math.min(100, (calc.subtotal / calc.freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) setPromoInput("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
          Your Shopping Cart
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted mt-1">
          Review your functional formulations before proceeding to checkout.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-sage/15 shadow-subtle space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl text-ink font-normal">
            Your cart is currently empty
          </h2>
          <p className="text-xs text-ink-muted leading-relaxed">
            Discover our science-led micronised creatine and daily multi-mineral hydration combos.
          </p>
          <div className="pt-2">
            <Link href="/shop">
              <Button variant="primary" size="md" className="gap-2">
                Explore Formulations <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Items List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Free Shipping Bar */}
            <div className="p-4 rounded-2xl bg-sage/10 border border-sage/20 space-y-2">
              <div className="flex items-center justify-between text-xs text-ink">
                {calc.isFreeShipping ? (
                  <span className="flex items-center gap-1.5 font-semibold text-sage-dark">
                    <Sparkles className="w-4 h-4 text-sage" /> Unlocked Free Nationwide Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong>{formatPrice(calc.amountNeededForFreeShipping)}</strong> more to unlock <strong>FREE Shipping</strong>
                  </span>
                )}
                <span className="font-bold text-ink-muted">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-sage h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-3xl bg-white border border-sage/15 shadow-subtle items-center"
                >
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-ivory shrink-0">
                    <Image
                      src={item.image}
                      alt={item.productName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.productSlug}`}
                      className="font-medium text-sm text-ink hover:text-sage transition-colors line-clamp-1"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-xs text-ink-muted">
                      {item.flavour} • {item.packSizeLabel}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-sage/20 rounded-full bg-ivory px-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-ink-muted hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold px-2 min-w-[20px] text-center text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-ink-muted hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-ink-muted hover:text-red-500 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold font-serif text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    {item.compareAtPrice > item.price && (
                      <div className="text-[11px] text-ink-muted line-through">
                        {formatPrice(item.compareAtPrice * item.quantity)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage/15 shadow-subtle space-y-5">
            <h2 className="font-serif text-xl text-ink font-normal pb-3 border-b border-sage/15">
              Order Summary
            </h2>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code (e.g. WELCOME10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="flex-1 px-3.5 py-2 text-xs uppercase rounded-full border border-sage/20 bg-ivory placeholder:normal-case focus:outline-none focus:border-sage"
              />
              <Button type="submit" variant="secondary" size="sm" className="text-xs">
                Apply
              </Button>
            </form>

            {appliedPromo && (
              <div className="flex items-center justify-between text-xs bg-sage/10 text-sage-dark px-3 py-1.5 rounded-full">
                <span className="flex items-center gap-1.5 font-medium">
                  <Tag className="w-3.5 h-3.5" /> Code &quot;{appliedPromo}&quot; Active
                </span>
                <button onClick={removePromo} className="text-xs underline hover:text-ink">
                  Remove
                </button>
              </div>
            )}

            {promoMessage && !appliedPromo && (
              <p className={`text-xs ${promoMessage.isError ? "text-red-600" : "text-sage-dark"}`}>
                {promoMessage.text}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-2 text-xs text-ink-muted pt-2 border-t border-sage/10">
              <div className="flex justify-between">
                <span>Subtotal ({calc.itemCount} items)</span>
                <span className="font-medium text-ink">{formatPrice(calc.subtotal)}</span>
              </div>

              {calc.discount > 0 && (
                <div className="flex justify-between text-sage-dark font-medium">
                  <span>Applied Promo Discount</span>
                  <span>-{formatPrice(calc.discount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Standard Shipping</span>
                <span>
                  {calc.shipping === 0 ? (
                    <span className="text-sage-dark font-bold uppercase">Free</span>
                  ) : (
                    formatPrice(calc.shipping)
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated GST (18% inclusive)</span>
                <span>Included</span>
              </div>

              <div className="flex justify-between text-base font-semibold text-ink pt-3 border-t border-sage/15">
                <span>Total Due</span>
                <span className="font-serif text-xl">{formatPrice(calc.total)}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <div className="pt-2 space-y-3">
              <Link href="/checkout" className="block w-full">
                <Button variant="primary" size="lg" className="w-full gap-2 text-sm font-semibold shadow-soft">
                  Proceed to Checkout • {formatPrice(calc.total)}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-ink-muted">
                <ShieldCheck className="w-4 h-4 text-sage" />
                <span>Encrypted Razorpay Checkout • Pan-India Free Delivery ₹999+</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
