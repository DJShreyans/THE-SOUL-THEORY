# SOUL THEORY — Production Web Storefront

> **"Wellness, rethought."**  
> *Science × Wellness × You*

This repository contains the complete, production-ready e-commerce platform and brand home for **SOUL THEORY**, an Indian, science-led functional wellness brand.

Built around a distinctive pastel visual identity (sage, ivory, lavender, seafoam, soft coral, and powder blue), a credible science voice, and a conversion-optimized Indian shopping flow with UPI, cards, netbanking, and COD support.

---

## 1. Quick Start

### Prerequisites
- Node.js `v18.17` or higher (tested on Node `v24.8.0`)
- npm `v9+` or pnpm

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run unit tests (cart calculations, shipping thresholds, promo codes)
npm test

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 + TypeScript (Strict) |
| **Styling** | Tailwind CSS with custom brand tokens + clsx + tailwind-merge |
| **Animation** | Framer Motion (reduced-motion aware transitions, drawer slide-overs) |
| **State** | Zustand (persistent localStorage cart + slide-over mini-cart) |
| **Validation** | Zod (checkout, newsletter honeypots, contact forms) |
| **Typography** | Next/Font Google (Fraunces serif display, DM Sans body, Caveat script flourish) |
| **Payments** | Razorpay integration ready (UPI, cards, netbanking, wallets, COD) |
| **SEO & Schema** | Dynamic `sitemap.xml`, `robots.txt`, JSON-LD (Organization, Product, BreadcrumbList, FAQPage, Article) |
| **Quality** | Vitest for pricing & cart calculation logic |

---

## 3. Brand Design System

### 3.1 Core Color Tokens

| Token | Hex | Role |
|---|---|---|
| `sage` | `#72836F` | Primary brand accent, headings, buttons, icons |
| `ivory` | `#F5F3EC` | Main page background |
| `lavender` | `#EAE6F4` | Section backgrounds, Creatine Blueberry accent |
| `powder-blue` | `#E5EEF5` | Section backgrounds, Hydration Blue Lagoon accent |
| `soft-coral` | `#F4E2DD` | Section backgrounds, Lychee Rose & Women's wellness accent |
| `seafoam` | `#DCEBE3` | Hydration Watermelon Lime accent, panels |
| `ink` | `#2B3229` | Deep sage-charcoal body copy (never pure black) |

All body copy and interactive buttons meet WCAG 2.2 AA contrast standards.

---

## 4. How to Manage the Catalog

All product definitions live in a typed, single-source-of-truth file:  
[`/data/products.ts`](file:///c:/Users/jainp/OneDrive/Desktop/THE%20SOUL%20THEORY/data/products.ts).

### 4.1 Flipping Product Availability (Launch vs. Coming Soon)
In `/data/products.ts`, each product contains an `available` boolean and a `status` field:

```typescript
// To launch a product for immediate cart purchase:
available: true,
status: "launched",

// To place a product into coming-soon / priority waitlist state:
available: false,
status: "coming-soon",
```

- When `available: true`, users can select pack sizes, add to cart, and checkout.
- When `available: false`, the product shows "Coming Soon" badges and an interactive "Notify Me" waitlist capture form.

---

## 5. Directory Structure

```
├── app/
│   ├── layout.tsx                # Root layout with fonts, metadata, Organization JSON-LD
│   ├── page.tsx                  # 11-section brand homepage
│   ├── shop/
│   │   ├── page.tsx              # Shop all with filters, sorting, launched & coming-soon grids
│   │   └── [category]/page.tsx   # Category pillar pages
│   ├── products/
│   │   └── [slug]/               # PDP with variant selector, nutrition facts, regulatory notice
│   ├── cart/page.tsx             # Full cart review page with promo codes
│   ├── checkout/page.tsx         # Single-page Indian checkout (PIN auto-fill, UPI, COD)
│   ├── order-confirmation/       # Thank you page with order reference and timeline
│   ├── track-order/page.tsx      # AWB lookup and shipment milestone tracking
│   ├── philosophy/page.tsx       # Brand manifesto, 4 pillars, formulation standards
│   ├── journal/                  # The Wellness Journal (6 seed articles)
│   ├── contact/page.tsx          # Support form, concierge channels, grouped FAQs
│   ├── policies/                 # Privacy (DPDP), Terms, Shipping, Refund, Disclaimer
│   ├── sitemap.ts & robots.ts    # SEO generation
│   ├── not-found.tsx & error.tsx # Branded error pages
│   └── api/                      # Orders, contact, and newsletter endpoints
├── components/
│   ├── layout/                   # Header, Footer, Mega-menu, SearchModal, ConsentBanner
│   ├── product/                  # ProductCard with pack selector and quick-add
│   ├── cart/                     # MiniCart slide-over drawer
│   └── ui/                       # Button, Badge
├── config/
│   └── site.ts                   # Site constants, shipping thresholds, regulatory numbers
├── data/
│   ├── products.ts               # Complete product catalogue (11 products)
│   ├── categories.ts             # 4 category definitions
│   ├── journal.ts                # 6 evidence-based articles
│   └── faqs.ts                   # Grouped FAQ questions & answers
├── lib/
│   ├── cart-store.ts             # Zustand cart store with localStorage persistence
│   └── commerce/                 # Thin commerce layer (pricing, promo codes, types)
├── public/images/                # Product packaging renders and brand logo
├── tests/                        # Vitest unit test suite
├── ASSUMPTIONS.md                # Data reconciliation & regulatory checklist
└── README.md                     # Documentation
```

---

## 6. Pre-Launch Client Handover Checklist

Before switching from staging to live commercial production, complete the items documented in [`ASSUMPTIONS.md`](file:///c:/Users/jainp/OneDrive/Desktop/THE%20SOUL%20THEORY/ASSUMPTIONS.md):

- [ ] **FSSAI License:** Replace placeholder in `config/site.ts` with your active 14-digit central license.
- [ ] **GSTIN:** Insert your registered 15-digit GSTIN number.
- [ ] **Razorpay Live Credentials:** Swap `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` with live production keys in `.env.local` / Vercel.
- [ ] **Serving Counts:** Reconcile final scoop sizes and packaging net weights (see section 1.2 in `ASSUMPTIONS.md`).
- [ ] **Legal Review:** Have counsel audit the draft privacy policy, disclaimer, and product claims.
- [ ] **Studio Photography:** Replace concept AI renders in `/public/images/products/` with final studio packshots.
- [ ] **Nutritionist Review:** Confirm journal article front-matter with your lead nutritionist.
