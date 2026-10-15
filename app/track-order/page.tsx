"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [searched, setSearched] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    setSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-sage-dark">
          Pan-India Tracking
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink">
          Track Your Shipment
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          Enter your SOUL THEORY order reference (e.g. ST-202610-8941) and contact details to check current dispatch milestones.
        </p>
      </div>

      {/* Lookup Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage/15 shadow-subtle max-w-2xl mx-auto">
        <form onSubmit={handleTrackSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink block mb-1">
              Order Reference Number *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ST-202610-8941"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs font-mono uppercase rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-ink block mb-1">
              Registered Email or 10-Digit Mobile Number *
            </label>
            <input
              type="text"
              required
              placeholder="Email or phone used at checkout"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-ivory border border-sage/20 text-ink focus:outline-none focus:border-sage"
            />
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full gap-2 text-xs">
            <Search className="w-4 h-4" /> Check Shipment Status
          </Button>
        </form>
      </div>

      {/* Simulated Tracking Result */}
      {searched && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sage/15 shadow-subtle max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-sage/15 gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-sage-dark block">
                Active Shipment
              </span>
              <h2 className="font-serif text-xl text-ink font-semibold mt-0.5">
                {orderQuery.toUpperCase()}
              </h2>
            </div>
            <div className="text-xs font-medium text-ink-muted">
              Carrier: <strong>Bluedart Express</strong> (AWB: 8847192031)
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="space-y-6 relative pl-6 border-l-2 border-sage/30 ml-3">
            <div className="relative">
              <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sage ring-4 ring-white" />
              <h3 className="text-xs font-bold text-ink">In Transit to Regional Hub</h3>
              <p className="text-[11px] text-ink-muted">
                Departed Mumbai Sorting Facility • Expected delivery in 48 hours
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sage/60 ring-4 ring-white" />
              <h3 className="text-xs font-bold text-ink">Dispatched from Fulfillment Center</h3>
              <p className="text-[11px] text-ink-muted">
                Package sealed and handed over to courier partner.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sage/60 ring-4 ring-white" />
              <h3 className="text-xs font-bold text-ink">Order Verified & Batched</h3>
              <p className="text-[11px] text-ink-muted">
                Quality seal inspected and tax invoice generated.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-sage/15 flex items-center justify-between text-xs text-ink-muted">
            <span>Need assistance with delivery?</span>
            <Link href="/contact" className="text-sage-dark font-semibold hover:underline">
              Contact Concierge →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
