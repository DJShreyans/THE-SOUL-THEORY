# SOUL THEORY — Assumptions & Client Handover Checklist

This document logs all design decisions, catalog data reconciliations, regulatory safeguards, and pending client actions created during the development of the SOUL THEORY production web storefront.

---

## 1. Catalog & Packaging Reconciliations

### 1.1 Brand Name
- **Finding:** Packaging renders alternately show "THE SOUL THEORY" and "SOUL THEORY".
- **Resolution:** As instructed in Section 5.6 and the Brand Brief, the primary brand wordmark is **SOUL THEORY**, with the sub-line **"SCIENCE × WELLNESS × YOU"**.

### 1.2 Servings vs. Net Weight
- **Finding:** Reference renders for 250 g tins state "50 servings", which equals 5 g per serving. However, the combo hydration line indicates a 20 g sachet serving (which yields 12.5 servings from 250 g), and the prebiotic gut fibre indicates a 10 g sachet (yielding 25 servings).
- **Resolution:**
  - Creatine Monohydrate: 250 g = 50 servings @ 5 g per scoop.
  - Hydration + Multivitamin Combo: 250 g tin = 25 servings @ 10 g scoop (or 12 combo single sachets @ 20 g).
  - Prebiotic Gut Fibre: 250 g tin = 25 servings @ 10 g scoop.
  - Marked with `TODO(client): confirm final scoop size, sachet grams, and serving count before production batching`.

### 1.3 Default Availability
- **Finding:** The brief instructs to display only launched or genuinely available products, with initial launch focus on Creatine and Hydration.
- **Resolution:**
  - `available: true` (Status: `launched`):
    - Creatine Monohydrate (Blueberry Cloud, Lychee Rose)
    - Hydration + Multivitamin (Watermelon Lime, Blue Lagoon Citrus, Pink Guava Strawberry)
  - `available: false` (Status: `coming-soon`):
    - Prebiotic Gut Fibre (Honey Peach & Lavender, Strawberry Hibiscus, Valencia Orange)
    - Hangover Rescue (Crisp Tender Coconut, Zesty Lemon Ginger)
    - Hormone Balance (Mixed Berry Blossom & Lavender Chamomile)
  - Coming-soon items display clear badges and "Notify Me" email captures; they cannot be added to cart.

---

## 2. Regulatory & Compliance Safeguards (India)

### 2.1 Health & Product Claims
- All products carry the mandatory statutory statement:
  > *"Dietary supplement. Not for medicinal use. This product is not intended to diagnose, treat, cure, or prevent any disease."*
- Hangover Rescue copy is restricted to "Restore balance, natural hydration and mental refresh" with an explicit **18+ advisory**. No claims of curing intoxication or alcohol-induced illness.
- Hormone Balance copy is strictly framed around nutritional well-being, cyclical comfort, and restorative sleep. No references to PCOS, fertility, or endocrine treatment.
- `TODO(client): Complete FSSAI and legal claim audit with your regulatory counsel.`

### 2.2 Placeholders for Regulatory Numbers
- FSSAI Central License Number: `FSSAI Lic. No. [TODO: Client FSSAI 14-digit number]`
- GSTIN: `GSTIN: [TODO: Client 15-digit GSTIN]`
- Marketer / Manufacturer Address: `Marketed by: Soul Theory Wellness Pvt. Ltd., Mumbai, MH, India [TODO: Full registered address]`
- Customer Grievance Officer: `care@soultheory.in | +91 98765 43210 [TODO: Final contact]`

---

## 3. Financial & Payment Setup

- **Currency:** Indian Rupee (INR, ₹).
- **Taxes:** All displayed consumer prices are GST-inclusive.
- **Free Shipping Threshold:** Set at ₹999 (configurable in `config/site.ts`). Standard shipping is ₹80 for orders under ₹999.
- **Razorpay Integration:** Set to Test Mode using environment variables (`NEXT_PUBLIC_RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`). Real transactions require live production keys.
- **COD (Cash on Delivery):** Supported with a configurable flat fee (default ₹50).

---

## 4. Photography & AI Concept Renders

- The 11 packaging images in `public/images/products/` and `assets/reference/` are AI-generated concept renders.
- The UI uses responsive `next/image` with fallback layouts, blur placeholders, and CSS object positioning.
- `TODO(client): Replace AI renders with studio packshots and transparent cutouts when manufactured.`
