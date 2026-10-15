"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Banknote,
} from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/commerce/pricing";
import { Button } from "@/components/ui/Button";

// Common Indian PIN to State/City stub for fast checkout UX
const PIN_MAP: Record<string, { city: string; state: string }> = {
  "400001": { city: "Mumbai", state: "Maharashtra" },
  "400051": { city: "Mumbai", state: "Maharashtra" },
  "110001": { city: "New Delhi", state: "Delhi" },
  "560001": { city: "Bengaluru", state: "Karnataka" },
  "500001": { city: "Hyderabad", state: "Telangana" },
  "600001": { city: "Chennai", state: "Tamil Nadu" },
  "700001": { city: "Kolkata", state: "West Bengal" },
  "411001": { city: "Pune", state: "Maharashtra" },
  "380001": { city: "Ahmedabad", state: "Gujarat" },
  "302001": { city: "Jaipur", state: "Rajasthan" },
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, appliedPromo, isCod, setIsCod, clearCart, getCalculations } = useCartStore();

  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "razorpay" as "razorpay" | "cod",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const calc = getCalculations();

  // Auto-fill city/state if common PIN code
  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pin = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    setFormData((prev) => {
      const match = PIN_MAP[pin];
      return {
        ...prev,
        pincode: pin,
        city: match ? match.city : prev.city,
        state: match ? match.state : prev.state,
      };
    });
  };

  const handlePaymentChange = (method: "razorpay" | "cod") => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
    setIsCod(method === "cod");
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        },
        shippingAddress: {
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          landmark: formData.landmark,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },
        items,
        appliedPromo,
        paymentMethod: formData.paymentMethod,
      };

      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Save order to session storage for confirmation page
        sessionStorage.setItem("last_order_details", JSON.stringify(data.orderData));
        clearCart();
        router.push(`/order-confirmation?order=${data.orderNumber}`);
      } else {
        setErrorMessage(data.error || "Order creation failed. Please verify your address.");
        setIsSubmitting(false);
      }
    } catch {
      setErrorMessage("Network error occurred during payment processing.");
      setIsSubmitting(false);
    }
  };

  if (mounted && items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl text-ink">Your cart is empty</h1>
        <p className="text-xs text-ink-muted">
          Add a functional formulation to proceed to secure checkout.
        </p>
        <Link href="/shop">
          <Button variant="primary" size="md">
            Return to Shop
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl text-ink font-normal">
          Express Checkout
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted mt-1">
          Fast, encrypted guest checkout for delivery across India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form: Details (7 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmitOrder} className="space-y-8">
            {/* Step 1: Contact Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/15 shadow-subtle space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-sage/10">
                <span className="w-6 h-6 rounded-full bg-sage/15 text-sage font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h2 className="font-serif text-lg text-ink font-semibold">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-ink block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Jain"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Email Address (for invoice & dispatch alerts) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Mobile Number (for Courier OTP delivery) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-sage/20 bg-ivory-dark text-xs text-ink-muted">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-xs rounded-r-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/15 shadow-subtle space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-sage/10">
                <span className="w-6 h-6 rounded-full bg-sage/15 text-sage font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h2 className="font-serif text-lg text-ink font-semibold">
                  Delivery Address in India
                </h2>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Postal PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="6 digits"
                      value={formData.pincode}
                      onChange={handlePincodeChange}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink font-mono focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink block mb-1">
                    Flat / House No. / Building / Floor *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 402, Signature Residency"
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Street / Area / Sector
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Linking Road, Bandra West"
                      value={formData.addressLine2}
                      onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Opposite Nature's Basket"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/15 shadow-subtle space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-sage/10">
                <span className="w-6 h-6 rounded-full bg-sage/15 text-sage font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h2 className="font-serif text-lg text-ink font-semibold">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-3">
                {/* Razorpay Option */}
                <label
                  onClick={() => handlePaymentChange("razorpay")}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === "razorpay"
                      ? "bg-sage/10 border-sage shadow-subtle ring-1 ring-sage"
                      : "bg-ivory border-sage/20 hover:border-sage/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "razorpay"}
                      onChange={() => handlePaymentChange("razorpay")}
                      className="text-sage focus:ring-sage"
                    />
                    <div>
                      <span className="text-xs font-bold text-ink block">
                        Online Payment (UPI, Cards, NetBanking, Wallets)
                      </span>
                      <span className="text-[11px] text-ink-muted">
                        Pay securely with Google Pay, PhonePe, Paytm, CRED or Credit/Debit Card.
                      </span>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-sage shrink-0" />
                </label>

                {/* Cash on Delivery Option */}
                <label
                  onClick={() => handlePaymentChange("cod")}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    formData.paymentMethod === "cod"
                      ? "bg-sage/10 border-sage shadow-subtle ring-1 ring-sage"
                      : "bg-ivory border-sage/20 hover:border-sage/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === "cod"}
                      onChange={() => handlePaymentChange("cod")}
                      className="text-sage focus:ring-sage"
                    />
                    <div>
                      <span className="text-xs font-bold text-ink block">
                        Cash on Delivery (COD)
                      </span>
                      <span className="text-[11px] text-ink-muted">
                        Pay upon doorstep arrival. Flat ₹50 courier collection handling fee applies.
                      </span>
                    </div>
                  </div>
                  <Banknote className="w-5 h-5 text-sage shrink-0" />
                </label>
              </div>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errorMessage}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full text-sm font-semibold shadow-soft gap-2"
            >
              <Lock className="w-4 h-4" /> Place Order • {formatPrice(calc.total)}
            </Button>
          </form>
        </div>

        {/* Right Sidebar: Order Review (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-sage/15 shadow-subtle space-y-6">
          <h2 className="font-serif text-xl text-ink font-normal pb-3 border-b border-sage/15">
            Your Order ({calc.itemCount} items)
          </h2>

          {/* Items Preview */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 items-center text-xs">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-ivory shrink-0 border border-sage/10">
                  <Image src={item.image} alt={item.productName} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-ink line-clamp-1">{item.productName}</span>
                  <span className="text-[11px] text-ink-muted block">
                    {item.flavour} • Qty {item.quantity}
                  </span>
                </div>
                <span className="font-semibold font-serif text-ink shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Totals */}
          <div className="pt-4 border-t border-sage/10 space-y-2 text-xs text-ink-muted">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-ink">{formatPrice(calc.subtotal)}</span>
            </div>

            {calc.discount > 0 && (
              <div className="flex justify-between text-sage-dark font-medium">
                <span>Discount ({appliedPromo})</span>
                <span>-{formatPrice(calc.discount)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Nationwide Shipping</span>
              <span>
                {calc.shipping === 0 ? (
                  <span className="text-sage-dark font-bold uppercase">Free</span>
                ) : (
                  formatPrice(calc.shipping)
                )}
              </span>
            </div>

            {formData.paymentMethod === "cod" && (
              <div className="flex justify-between text-ink">
                <span>COD Handling Fee</span>
                <span>{formatPrice(calc.codFee)}</span>
              </div>
            )}

            <div className="flex justify-between text-base font-semibold text-ink pt-3 border-t border-sage/15">
              <span>Total Payable</span>
              <span className="font-serif text-xl">{formatPrice(calc.total)}</span>
            </div>

            <p className="text-[11px] text-ink-faint pt-1">
              Includes 18% GST (Tax Invoice generated upon fulfillment).
            </p>
          </div>

          {/* Security and Trust */}
          <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-2 text-xs text-ink-muted">
            <div className="flex items-center gap-1.5 font-semibold text-ink">
              <ShieldCheck className="w-4 h-4 text-sage" /> Buyer Protection Guarantee
            </div>
            <p className="text-[11px] leading-relaxed">
              If your container arrives broken, cracked or tampered with, email care@soultheory.in within 48 hours for an instant free replacement dispatch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
