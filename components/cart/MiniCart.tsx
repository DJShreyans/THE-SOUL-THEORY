"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Sparkles, Tag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/commerce/pricing";
import { Button } from "@/components/ui/Button";

export const MiniCart: React.FC = () => {
  const {
    items,
    isOpen,
    setOpen,
    removeItem,
    updateQuantity,
    appliedPromo,
    applyPromo,
    removePromo,
    getCalculations,
  } = useCartStore();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const calc = getCalculations();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setOpen]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setPromoInput("");
    }
  };

  const progressPercent = Math.min(100, (calc.subtotal / calc.freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping Cart">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-md bg-ivory h-full shadow-2xl flex flex-col z-10 border-l border-sage/15"
          >
            {/* Header */}
            <div className="p-5 border-b border-sage/15 flex items-center justify-between bg-ivory-light">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-2xl font-normal text-ink">Your Daily Ritual</h2>
                <span className="text-xs font-semibold bg-sage/15 text-sage-dark px-2.5 py-0.5 rounded-full">
                  {calc.itemCount} {calc.itemCount === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-ink-muted hover:text-ink hover:bg-sage/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="bg-sage/10 px-5 py-3 border-b border-sage/15">
              <div className="flex items-center justify-between text-xs font-medium text-ink mb-1.5">
                {calc.isFreeShipping ? (
                  <span className="flex items-center gap-1.5 text-sage-dark font-semibold">
                    <Sparkles className="w-4 h-4 text-sage" />
                    Unlocked! Free Nationwide Delivery
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-sage-dark">{formatPrice(calc.amountNeededForFreeShipping)}</strong> more for <strong className="text-sage-dark">FREE Shipping</strong>
                  </span>
                )}
                <span className="text-ink-muted">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full bg-ivory-dark rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="bg-sage h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center text-sage mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl text-ink mb-1">Your cart is empty</h3>
                  <p className="text-sm text-ink-muted max-w-xs mb-6">
                    Elevate your routine with science-backed creatine and cellular hydration.
                  </p>
                  <Button
                    onClick={() => setOpen(false)}
                    variant="primary"
                    size="md"
                    className="gap-2"
                  >
                    <Link href="/shop" className="flex items-center gap-2">
                      Explore Products <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 rounded-2xl bg-white/70 border border-sage/10 shadow-subtle hover:border-sage/25 transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-ivory-dark shrink-0">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <Link
                            href={`/products/${item.productSlug}`}
                            onClick={() => setOpen(false)}
                            className="font-medium text-sm text-ink hover:text-sage transition-colors line-clamp-1"
                          >
                            {item.productName}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-ink-muted hover:text-red-500 transition-colors p-1"
                            aria-label={`Remove ${item.productName}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-ink-muted mt-0.5">
                          {item.flavour} • {item.packSizeLabel}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-sage/20 rounded-full bg-ivory">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-ink-muted hover:text-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-semibold px-2 min-w-[24px] text-center text-ink">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-ink-muted hover:text-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-sm font-semibold text-ink">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          {item.compareAtPrice > item.price && (
                            <div className="text-[11px] text-ink-muted line-through">
                              {formatPrice(item.compareAtPrice * item.quantity)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with Calculations and Checkout */}
            {items.length > 0 && (
              <div className="p-5 border-t border-sage/15 bg-ivory-light space-y-3">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. WELCOME10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full text-xs uppercase px-3 py-2 rounded-full border border-sage/20 bg-white placeholder:normal-case placeholder:text-ink-faint focus:outline-none focus:border-sage"
                    />
                  </div>
                  <Button type="submit" variant="secondary" size="sm" className="shrink-0 text-xs">
                    Apply
                  </Button>
                </form>

                {appliedPromo && (
                  <div className="flex items-center justify-between text-xs bg-sage/10 text-sage-dark px-3 py-1.5 rounded-full">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Tag className="w-3.5 h-3.5" /> Code &quot;{appliedPromo}&quot; Applied
                    </span>
                    <button
                      onClick={removePromo}
                      className="text-xs underline hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {promoMessage && !appliedPromo && (
                  <p className={`text-xs ${promoMessage.isError ? "text-red-600" : "text-sage-dark"}`}>
                    {promoMessage.text}
                  </p>
                )}

                {/* Subtotals */}
                <div className="space-y-1.5 text-xs text-ink-muted pt-2 border-t border-sage/10">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-ink">{formatPrice(calc.subtotal)}</span>
                  </div>

                  {calc.discount > 0 && (
                    <div className="flex justify-between text-sage-dark font-medium">
                      <span>Discount</span>
                      <span>-{formatPrice(calc.discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {calc.shipping === 0 ? (
                        <span className="text-sage-dark font-semibold uppercase">Free</span>
                      ) : (
                        formatPrice(calc.shipping)
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-semibold text-ink pt-2 border-t border-sage/15">
                    <span>Total (incl. GST)</span>
                    <span className="font-serif text-lg">{formatPrice(calc.total)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-2">
                  <Link
                    href="/checkout"
                    onClick={() => setOpen(false)}
                    className="block w-full"
                  >
                    <Button variant="primary" size="lg" className="w-full gap-2 text-sm font-semibold">
                      Proceed to Checkout • {formatPrice(calc.total)}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-ink-muted pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-sage" /> Secure 256-bit Checkout
                    </span>
                    <span>•</span>
                    <span>UPI / Cards / Netbanking / COD</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
