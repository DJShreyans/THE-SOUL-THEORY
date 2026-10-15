"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Package,
  Truck,
  Mail,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { formatPrice } from "@/lib/commerce/pricing";
import { Button } from "@/components/ui/Button";

interface StoredOrder {
  orderNumber: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    addressLine1: string;
    addressLine2?: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    id: string;
    productName: string;
    flavour: string;
    packSizeLabel: string;
    price: number;
    quantity: number;
  }>;
  calculations: {
    total: number;
  };
  paymentMethod: string;
  paymentStatus: string;
  createdAt: string;
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get("order");

  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("last_order_details");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setOrder(parsed);
      } catch (e) {
        console.error("Failed to parse order", e);
      }
    }
  }, []);

  const orderNum = order?.orderNumber || orderParam || "ST-202610-8941";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-10">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-sage/15 text-sage flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-sage" />
        </div>
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark block">
          Order Confirmed
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-ink font-normal">
          Thank you for choosing SOUL THEORY
        </h1>
        <p className="text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
          Your daily wellness ritual is on its way. A confirmation receipt has been sent to{" "}
          <strong>{order?.customer?.email || "your registered email"}</strong>.
        </p>
      </div>

      {/* Order Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage/15 shadow-subtle space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sage/15 gap-4">
          <div>
            <span className="text-xs text-ink-muted uppercase tracking-wider font-semibold">
              Order Reference
            </span>
            <div className="text-xl font-mono font-bold text-ink mt-0.5">
              {orderNum}
            </div>
          </div>
          <div className="text-sm font-semibold text-sage-dark bg-sage/10 px-3 py-1.5 rounded-full inline-block">
            {order?.paymentMethod === "cod" ? "Cash on Delivery" : "Paid Securely (Test Mode)"}
          </div>
        </div>

        {/* What Happens Next Timeline */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-ink font-normal">
            What Happens Next
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
              <Package className="w-5 h-5 text-sage" />
              <h4 className="text-xs font-bold text-ink">1. Batch Packing</h4>
              <p className="text-xs text-ink-muted">
                Our clean Mumbai fulfillment center verifies batch seal integrity within 24 business hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
              <Truck className="w-5 h-5 text-sage" />
              <h4 className="text-xs font-bold text-ink">2. Express Transit</h4>
              <p className="text-xs text-ink-muted">
                Dispatched with Bluedart or Delhivery with SMS and WhatsApp milestone notifications.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ivory border border-sage/15 space-y-1">
              <Mail className="w-5 h-5 text-sage" />
              <h4 className="text-xs font-bold text-ink">3. Delivery & Ritual</h4>
              <p className="text-xs text-ink-muted">
                Arrives at your door in 2–4 business days. Ready to elevate your daily routine.
              </p>
            </div>
          </div>
        </div>

        {/* Customer & Shipping Summary */}
        {order && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-sage/15 text-xs text-ink-muted">
            <div>
              <span className="font-bold text-ink block uppercase tracking-wider text-[11px] mb-1">
                Delivering To:
              </span>
              <p className="font-medium text-ink">{order.customer.fullName}</p>
              <p>{order.shippingAddress.addressLine1}</p>
              {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} — {order.shippingAddress.pincode}
              </p>
              <p className="mt-1">Phone: +91 {order.customer.phone}</p>
            </div>

            <div>
              <span className="font-bold text-ink block uppercase tracking-wider text-[11px] mb-1">
                Order Total:
              </span>
              <div className="text-lg font-serif font-semibold text-ink">
                {formatPrice(order.calculations.total)}
              </div>
              <p className="mt-1">Includes 18% GST and all applicable shipping fees.</p>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-sage/15">
          <Link href="/track-order" className="w-full sm:w-auto">
            <Button variant="outline" size="md" className="w-full text-xs">
              Track Order Status
            </Button>
          </Link>

          <Link href="/shop" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full text-xs gap-1.5">
              Continue Shopping <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-sage border-t-transparent rounded-full mx-auto" />
          <p className="text-xs text-ink-muted mt-3">Loading confirmation...</p>
        </div>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  );
}
