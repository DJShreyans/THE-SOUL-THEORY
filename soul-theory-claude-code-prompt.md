# SOUL THEORY: Full Website Build Prompt for Claude Code

> Paste everything below the line into Claude Code, run from an empty project folder.
> **Before you start:** create `assets/reference/` and drop the 13 product images in using the filenames in Section 7. Also copy the Brand & Website Brief PDF in as `assets/reference/brand-brief.pdf`.

---

## 0. ROLE & MISSION

You are a senior full-stack engineer and brand-focused web designer. Build a complete, production-ready e-commerce website for **SOUL THEORY**, an Indian, science-led functional wellness brand (tagline: **"Wellness, rethought."**).

This is not just an online store. It must feel like a recognisable, premium wellness **brand** with a distinctive pastel identity, a credible science voice, and a conversion-optimised shopping flow. Build around the **brand identity**, not around any single product. Products will change; the brand shell must not.

**Working rules**
1. Start with a short written plan (stack, folder structure, phases). Then build, without waiting for approval between phases.
2. Do not ask me questions mid-build. Where information is missing, make a sensible assumption, mark it `TODO(client)` in code, and log it in `ASSUMPTIONS.md`.
3. Build in phases (Section 12). After each phase, run lint, type-check and build, and fix errors before moving on.
4. Never invent regulatory facts: FSSAI numbers, certifications, lab reports, clinical claims, prices or reviews. Use clearly marked placeholders.
5. Read `assets/reference/brand-brief.pdf` and view every image in `assets/reference/` before designing.

---

## 1. BRAND SNAPSHOT

| Item | Detail |
|---|---|
| Brand | SOUL THEORY (wordmark: "SOUL THEORY"; sub-line: "SCIENCE × WELLNESS × YOU") |
| Core tagline | Wellness, rethought. |
| Homepage headline | Make feeling good a daily ritual. |
| Homepage sub-copy | Thoughtfully crafted wellness for the way you live today. Discover functional nutrition designed to bring more intention, enjoyment and consistency to your everyday routine. |
| CTAs | Primary: **Explore Products**. Secondary: **Our Philosophy**. |
| Audience | Ages 18–35: students, young professionals, gym-goers, women seeking approachable wellness. Men and women equally. |
| Positioning | Premium in experience, accessible in price, modern in design, credible in science. |
| Closing line | "We are not here to sell perfection. We are here to make feeling better a part of everyday life." |

**Philosophy pillars (use on the Philosophy page and as a Home section)**
1. **Science, not hype**: thoughtful formulations, transparent communication, evidence-grounded claims.
2. **Wellness for everyone**: accessible everyday wellness for women and men.
3. **Made to be enjoyed**: refreshing flavours, convenient formats, an experience to look forward to.
4. **Consistency over perfection**: products that fit real routines.

**Alternate taglines (use as micro-copy in footer, newsletter, 404, etc.):** Feel good. Live fully. · Better habits. Better you. · Your everyday, elevated. · Science for your everyday self. · More Reps. More You. · More You.

**Voice:** confident, not boastful · science-led, not technical · youthful, not childish · premium, not inaccessible · inclusive, not gender-restricted · emotional, never exaggerated.

**Forbidden in copy:** instant results, guaranteed transformations, disease cures or treatment claims, miracle benefits, before/after promises, fear-based health messaging.

---

## 2. DESIGN SYSTEM

### 2.1 Colour tokens (define as CSS variables and Tailwind theme colours)

| Token | Hex | Use |
|---|---|---|
| `sage` | #72836F | Primary brand colour, headings accents, buttons, icons |
| `ivory` | #F5F3EC | Main page background |
| `lavender` | #EAE6F4 | Section backgrounds, creatine accent |
| `powder-blue` | #E5EEF5 | Section backgrounds, hydration accent |
| `soft-coral` | #F4E2DD | Section backgrounds, women's wellness accent |
| `seafoam` | #DCEBE3 (assumed; brief names it without a hex) | Gradients, panels |
| `ink` | #2B3229 (assumed) | Body text (deep sage-charcoal, never pure black) |

Check that body text and buttons pass WCAG AA contrast on every background. If sage on ivory is too weak for small text, darken the text variant and keep #72836F for large elements and decoration.

### 2.2 Per-product accent colours (taken from the packaging in the reference images)

| Product line / flavour | Tin/box colour | Lid / trim | Section tint |
|---|---|---|---|
| Creatine: Blueberry Cloud | Lavender-to-pink gradient | Lavender lid | lavender |
| Creatine: Lychee Rose | Peach/coral gradient | Coral lid | soft-coral |
| Prebiotic: Honey Peach & Lavender | Soft peach | Gold lid | soft-coral |
| Prebiotic: Strawberry Hibiscus | Dusty rose/berry | Berry lid | soft-coral |
| Prebiotic: Valencia Orange | Apricot orange | Gold lid | soft-coral |
| Hydration: Watermelon Lime | Watermelon red + lime green | Lime lid | seafoam |
| Hydration: Blue Lagoon Citrus | Sky blue | Olive-yellow lid | powder-blue |
| Hydration: Pink Guava Strawberry | Coral-pink | Lime lid | soft-coral |
| Hangover Rescue: Crisp Tender Coconut | Cream/ivory box | n/a | ivory |
| Hangover Rescue: Zesty Lemon Ginger | Butter-yellow box | n/a | ivory |
| Hormone Balance: Mixed Berry Blossom | Rose box | n/a | soft-coral |
| Hormone Balance: Lavender Chamomile | Lavender box | n/a | lavender |

Each product page should adopt its flavour's accent as a subtle tint (hero backdrop, selected-state, badge) while the global frame stays on the core palette. Implement this with a per-product `theme` field in the catalog data.

### 2.3 Typography
- **Display / headings:** an elegant, high-contrast serif that echoes the wordmark (recommend **Fraunces**, or Cormorant Garamond via `next/font`).
- **Body / UI:** a clean geometric or humanist sans (recommend **DM Sans** or Inter).
- Hand-script accent font (very sparingly, e.g. "More Reps. More You.", "More You."): a single casual handwritten Google font. Use only as a sign-off flourish, never for body copy.
- Small-caps / wide letter-spaced uppercase for taglines, as in the packaging ("BETTER GUT. STRONGER YOU.").
- Fluid type scale with `clamp()`; minimum body size 16px.

### 2.4 Graphic language
- Subtle molecular / cellular line patterns (SVG), fluid organic blobs and wave shapes (mirroring the swoosh on the tins), and thin line icons (circle-outlined icons like the packaging badges).
- Soft arch and pedestal shapes, mint/seafoam panels, leaf and fern shadows for atmosphere.
- Generous whitespace, large rounded corners (16–28px), soft long shadows, no harsh borders.
- Motion: gentle fade/slide-ups on scroll, slow parallax on hero product, hover lift on cards. Respect `prefers-reduced-motion`.

### 2.5 Photography and image treatment
- Natural light, fresh ingredients, tactile product shots, lifestyle moments (training, studying, brunch, evening wind-down).
- The 13 reference images are **AI-generated concept renders / mock-ups**. Use them as **placeholders and art-direction references**, and structure image slots so real photography can replace them without code changes. Add `TODO(client): replace with final photography` in the data file.
- Images are 1024×1024 (and one 1254×1254). Use `next/image`, WebP/AVIF, blur placeholders, correct `sizes`, descriptive alt text.

### 2.6 Avoid
Generic pharmaceutical or clinical supplement-store look · neon gym aesthetics · stereotypically feminine beauty-brand look · cluttered banners · dark patterns.

---

## 3. TECH STACK (use unless you have a strong reason otherwise, and document any change)

| Layer | Choice |
|---|---|
| Framework | **Next.js (latest stable, App Router) + TypeScript** |
| Styling | **Tailwind CSS** with the design tokens above, plus `clsx` / `tailwind-merge` |
| Animation | **Framer Motion** (lightweight, reduced-motion aware) |
| State | **Zustand** for cart (persisted to localStorage), React Hook Form + Zod for forms |
| Content | Product catalog as typed local data (`/data/products.ts`) + **MDX** for Journal articles and policy pages |
| Payments | **Razorpay** integration (Indian market: UPI, cards, netbanking, wallets, COD flag). Build in **test mode** with env vars; never hard-code keys |
| Orders / email | API routes for order creation and Razorpay webhook verification; transactional email stub (Resend or Nodemailer) behind an interface |
| Newsletter / contact | API routes with validation, honeypot spam protection and rate limiting; storage behind an adapter (default: JSON file or SQLite in dev) |
| SEO | Next metadata API, `sitemap.ts`, `robots.ts`, JSON-LD (Organization, Product, BreadcrumbList, FAQPage, Article) |
| Quality | ESLint, Prettier, TypeScript strict, Vitest for logic (cart totals, pricing, shipping), Playwright smoke tests for the core purchase flow |
| Deploy | Vercel-ready; include `.env.example` and a deployment README |

Architecture requirement: keep the **commerce layer behind a thin interface** (`/lib/commerce`) so the store can later move to Shopify or another backend without rewriting the UI.

---

## 4. SITE MAP & PAGE REQUIREMENTS

```
/                       Home
/shop                   Shop All (filter + sort)
/shop/[category]        Category pages (performance-fitness, hydration, nutrition, womens-wellness)
/products/[slug]        Product detail
/cart                   Cart (plus slide-over mini-cart everywhere)
/checkout               Checkout
/order-confirmation     Thank-you page
/philosophy             Our Philosophy (also serves as About Us)
/journal                The Wellness Journal (index)
/journal/[slug]         Article
/contact                Contact & Support (+ FAQs)
/faq                    FAQs (may live inside /contact, but keep a route)
/policies/privacy       Privacy Policy
/policies/terms         Terms of Service
/policies/shipping      Shipping Policy
/policies/refund        Refund, Return & Cancellation Policy
/policies/disclaimer    Health & Product Disclaimer
/track-order            Order tracking (simple lookup form)
/404 and /error         Branded not-found and error pages
```

### 4.1 Home
Sections in order:
1. **Hero:** headline "Make feeling good a daily ritual.", sub-copy, two CTAs, large hero product composition (use the Blueberry Cloud creatine render or a hand-built composition of several tins on pastel arches), animated fluid background, small trust strip beneath.
2. **Trust strip:** icon row: Vegan · Non-GMO · Third-party tested · No added sugar (where applicable). Only claim what the catalog data supports per product.
3. **Shop by category:** 4 tiles (Performance & Fitness, Hydration & Daily Nutrition, Next-Generation Nutrition, Everyday & Women's Wellness). Tiles for categories with no launched products show a "Coming soon" state and an email-capture instead of a product link.
4. **Featured products:** carousel of launched products with flavour swatches, benefits and quick-add.
5. **Brand story / philosophy teaser:** the 4 pillars with the molecular-line graphic and a CTA to /philosophy.
6. **"Made to be enjoyed" flavour showcase:** horizontally scrolling flavour cards with real-fruit imagery from the renders.
7. **Ritual section:** "Your everyday, elevated": a morning / workout / evening timeline showing where each product fits (illustrative, no medical claims).
8. **Science without the jargon:** 3 short cards on formulation approach, third-party testing, transparent labels (with `TODO(client)` for real lab-report links).
9. **Journal preview:** 3 latest articles.
10. **Newsletter signup:** "More You." with a soft-coral panel.
11. **Footer.**

### 4.2 Shop All
- Product cards: image (hover swaps to sachet/alt shot), name, flavour, pack size, price, 2–3 benefit chips, flavour swatch dots, Add-to-cart.
- Filters: category, flavour family (fruity, floral, citrus, tropical), dietary (vegan, no added sugar), format (tin, sachet box). Sort: featured, price asc/desc, newest.
- Empty and loading states; URL-synced filters; mobile filter drawer.
- Shows **only products where `available: true`**. Coming-soon items appear only in a clearly labelled "Coming soon" row with a notify-me form.

### 4.3 Product detail page (PDP)
- Image gallery (tin, sachet, lifestyle, ingredient close-up), zoom, swipe on mobile.
- Flavour selector (linked variants, accent colour changes), pack-size selector (tin vs sachet box where applicable), quantity, price, savings badge, Add to Cart + Buy Now.
- **Benefit icons row** as on packaging, using only approved claims.
- Tabs / accordions: What it is · How to use · Ingredients & nutrition facts (table) · Lab testing & quality · Allergen info · FAQs.
- "Pairs well with" cross-sell, recently viewed, sticky mobile add-to-cart bar.
- Reviews section: build the UI and data model, **but ship with zero fake reviews**; show "Be the first to review" until real data exists.
- Mandatory regulatory block on every PDP: dietary-supplement statement, "not intended to diagnose, treat, cure or prevent any disease", storage and shelf-life placeholders, FSSAI licence placeholder, manufacturer / marketer address placeholder.
- Product JSON-LD with offers, availability, brand.

### 4.4 Our Philosophy (About Us)
Brand story, the 4 pillars, "Science, not hype" explainer (how claims are grounded), quality and testing process (placeholders for real documents), who we build for, the founder/team section (`TODO(client)`), the vision ("recognised Indian wellness brand…"), closing line and CTA.

### 4.5 The Wellness Journal
- Index with category filter (Nutrition, Hydration, Fitness, Habits, Women's Wellness) and search.
- MDX articles with reading time, author, related products, share buttons, table of contents, Article JSON-LD.
- Seed with **6 well-written, evidence-aware articles** (400–700 words each), e.g.: *Creatine 101: what it is and who it's for* · *Why electrolytes matter beyond the gym* · *Prebiotic fibre, explained simply* · *Building a hydration habit that sticks* · *Consistency over perfection: a realistic routine* · *Reading a supplement label like a pro*. No disease claims; include "talk to a qualified professional" notes where relevant; mark `TODO(client): review by a qualified nutritionist` in front-matter.

### 4.6 Contact & Support
Contact form (name, email, phone, topic, message, order number optional) · support email / phone / hours placeholders · WhatsApp click-to-chat button placeholder · FAQ accordion grouped by (Products, Ordering, Shipping, Returns, Safety & usage) · links to all policies · social links placeholder. Include FAQPage JSON-LD.

### 4.7 Cart, Checkout, Confirmation
- Slide-over mini-cart plus full cart page; quantity edit; promo-code field (data-driven, a couple of dummy codes); free-shipping progress bar (threshold in config); subtotal / GST-inclusive note / shipping / total.
- Checkout: single-page, guest checkout first; contact → shipping address (India-specific: PIN code with state auto-fill stub, phone validation) → shipping method → payment (Razorpay). Order summary visible; trust badges; inline validation.
- Confirmation page with order summary, next steps, and email stub.
- Prices in INR (₹), tax-inclusive display, configurable in `/config/site.ts`.

### 4.8 Footer & Global
Footer: logo, tagline, link columns (Shop, Brand, Support, Legal), newsletter, social icons, payment icons, FSSAI licence number placeholder, GSTIN placeholder, registered address placeholder, "© SOUL THEORY" and the dietary-supplement disclaimer.
Global: announcement bar (configurable), sticky header with mega-menu for Shop (categories + featured product), search overlay, cart badge, cookie/consent banner (DPDP-aware), WhatsApp float button (configurable, off by default).

---

## 5. PRODUCT CATALOG (implement as typed data in `/data/products.ts`)

Schema (suggested): `slug, name, line, category, flavour, flavourFamily, packSizes[{type, netWeightG, servingSizeG, servings, price, compareAtPrice}], tagline, shortDescription, longDescription, benefits[], badges[], ingredients, nutritionFacts, howToUse, theme{accent, tint}, images{tin, sachet, lifestyle[]}, available, status('launched'|'coming-soon'), tags, seo{title, description}`.

> **Default availability:** The brief says to display *only launched or genuinely available* products and names **creatine, hydration and innovative formats** as the initial focus. Therefore set `available: true` for **Creatine** and **Hydration + Multivitamin** lines, and `available: false` / `status: 'coming-soon'` for **Prebiotic Gut Fibre**, **Hangover Rescue** and **Hormone Balance**. Make this one flag per product so the client can flip it without code changes. Document this in README.

### 5.1 Creatine Monohydrate (category: Performance & Fitness) · tagline "Better energy. Stronger you."
- Common: 100% creatine monohydrate · dietary supplement · tin 250 g · sachet 5 g single serve · packaging claims: Strength | Endurance | Recovery · benefit chips: Boosts strength & power, Supports focus & mental clarity, Faster recovery · badges: Vegan, No added sugar, Non-GMO, Third-party tested · "Naturally & artificially flavoured" · sign-off: "More Reps. More You."
- **Blueberry Cloud**: lavender/pink gradient tin, lavender lid; imagery: blueberries, lavender-tinted drink.
- **Lychee Rose**: peach/coral tin, coral lid; imagery: lychee, rose petals, green tea leaves.

### 5.2 Hydration + Multivitamin Combo (category: Hydration & Daily Nutrition) · tagline "Hydration. Vitamins. Real fruit flavour."
- Common: tin 250 g · sachet 20 g single-serve combo pack · electrolytes + vitamin C + B-complex (exact amounts `TODO(client)`) · benefit chips: Electrolytes for hydration, Immune support, Energy & vitality · badge: Plant-based colours · "Naturally & artificially flavoured".
- **Watermelon Lime**: red tin, lime lid, splash illustration.
- **Blue Lagoon Citrus**: sky-blue tin, olive-yellow lid; lemon, lime, mint.
- **Pink Guava Strawberry**: coral-pink tin, lime lid; guava and strawberry.

### 5.3 Prebiotic Gut Fibre (category: Everyday Wellness / Next-Gen Nutrition) · tagline "Better gut. Stronger you."
- Common: 100% prebiotic gut fibre · dietary supplement · tin 250 g · sachet 10 g single serve · packaging claims: Digestive balance, Immune support, Strength & vitality · badges: Vegan, Non-GMO, Third-party tested · sign-off "More You."
- **Honey Peach & Lavender** (peach tin, gold lid) · **Strawberry Hibiscus** (rose tin) · **Valencia Orange** (apricot tin, gold lid).

### 5.4 Hangover Rescue (category: Everyday Wellness) · tagline "Restore balance. Revive the mind."
- Box of 5 g single-serve sachets (count per box `TODO(client)`) · badges: Vegan, No added sugar, Non-GMO, Third-party tested.
- **Crisp Tender Coconut**: ultimate hydration, electrolyte balance, natural refreshment. **Zesty Lemon Ginger**: cellular energy, digestive ease, cognitive clarity.
- ⚠ Regulatory-sensitive naming and claims. Add a `TODO(client): legal review of product name, claims and age-gating` and an 18+ notice on the PDP. Keep copy to "supports hydration and a refreshing reset"; never imply it prevents or cures intoxication or hangovers.

### 5.5 Hormone Balance (category: Everyday & Women's Wellness) · tagline "Better balance. Stronger you."
- 10 g single-serve sachets in a box · badges: Vegan, Non-GMO, Third-party tested.
- **Mixed Berry Blossom** (menstrual comfort, stress & relaxation, skin health) · **Lavender Chamomile** (calm & relax, sleep support, cyclical balance).
- ⚠ Highest regulatory sensitivity. Phrase as general wellness support only, no hormone-disorder, fertility, PCOS or treatment claims, and add `TODO(client): FSSAI / legal review of every claim`.

### 5.6 Data issues to flag, not silently fix
The reference renders contain inconsistencies. Handle as follows and list them in `ASSUMPTIONS.md`:
- **Servings vs weight:** tins show "250 g (50 servings)" (and one render shows "90"), yet sachet sizes are 5 g / 10 g / 20 g. 250 g ÷ 5 g = 50 ✔, but 250 g ÷ 10 g = 25 and 250 g ÷ 20 g ≈ 12. Use `servings` as a data field with `TODO(client): confirm serving size and count`. Do **not** print unverified serving counts on the live site where they don't reconcile.
- **Illegible / garbled label text** in the renders (e.g. electrolyte amounts, "Pure & Clean" badge, ingredient lines): do not copy; use placeholders.
- **Brand name:** some renders say "THE SOUL THEORY", others "SOUL THEORY". Use **SOUL THEORY** (per the brief).
- Packaging claims such as "Boosts strength & power", "Supports focus & mental clarity" and gut / hormone / hangover claims need regulatory review. Implement them as data so they can be edited centrally.

---

## 6. COMPLIANCE & TRUST (India)

- Display on site and PDPs: FSSAI licence no. (placeholder), manufacturer / marketer details, "Dietary supplement; not a medicine", "Not for medical use; consult a qualified practitioner if pregnant, nursing, on medication or under 18" (as applicable), storage instructions, best-before placeholder.
- Pages for Privacy (aligned with India's DPDP Act principles), Terms, Shipping, Refund / Return / Cancellation, Disclaimer. Write sensible, clearly-marked **draft** policies with `TODO(client): legal review before launch`.
- Consent-aware analytics (GA4 loader behind consent, env-driven), no tracking before consent.
- Accessibility: WCAG 2.2 AA, full keyboard navigation, visible focus states, semantic landmarks, skip link, alt text, form labels and error announcements.

---

## 7. ASSETS: reference image map

Expect these files in `assets/reference/` (rename or copy to `/public/images/products/...` and generate optimised variants). If a filename differs, inspect the image and map it by content.

| Suggested filename | Content |
|---|---|
| `creatine-blueberry-cloud.jpg` | Creatine Monohydrate, Blueberry Cloud |
| `creatine-lychee-rose.jpg` | Creatine Monohydrate, Lychee Rose |
| `prebiotic-honey-peach-lavender.jpg` | Prebiotic Gut Fibre, Honey Peach & Lavender |
| `prebiotic-strawberry-hibiscus.jpg` | Prebiotic Gut Fibre, Strawberry Hibiscus |
| `prebiotic-valencia-orange.jpg` | Prebiotic Gut Fibre, Valencia Orange |
| `hydration-watermelon-lime.jpg` | Hydration + Multivitamin, Watermelon Lime |
| `hydration-blue-lagoon-citrus.jpg` | Hydration + Multivitamin, Blue Lagoon Citrus |
| `hydration-pink-guava-strawberry.jpg` | Hydration + Multivitamin, Pink Guava Strawberry |
| `hangover-crisp-tender-coconut.jpg` | Hangover Rescue, Crisp Tender Coconut |
| `hangover-zesty-lemon-ginger.jpg` | Hangover Rescue, Zesty Lemon Ginger |
| `hormone-balance-duo.jpg` | Hormone Balance: Mixed Berry Blossom and Lavender Chamomile |
| `brand-brief.pdf` | Brand & Website Brief |

Because each render already contains baked-in text and taglines, **use them as full-bleed lifestyle / hero images**, and build the real product UI (names, prices, badges) in HTML so it stays editable and accessible. Where a clean product cut-out is needed, crop sensibly with CSS `object-position`, or leave an obvious slot for client-supplied transparent PNGs (`/public/images/products/{slug}/tin.png`, `sachet.png`).

---

## 8. SEO, PERFORMANCE & ANALYTICS

- Unique `title` / `description` / Open Graph / Twitter cards per page; canonical URLs; `sitemap.xml`; `robots.txt`; clean slugs.
- Targets: Lighthouse **≥ 90** on Performance, **≥ 95** on Accessibility, Best Practices and SEO (mobile). LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
- Fonts via `next/font` (self-hosted, `display: swap`); images via `next/image`; lazy-load below the fold; minimal client JS (prefer Server Components); no layout shift on carousels.
- Event tracking scaffold (view_item, add_to_cart, begin_checkout, purchase) behind consent.

---

## 9. MOBILE-FIRST REQUIREMENTS

Design at 375 px first, then scale up to tablet and desktop (1280+). Thumb-reachable primary actions, sticky add-to-cart on PDP, full-screen mobile menu, swipeable carousels, tap targets ≥ 44 px, no horizontal scroll at any width, tested at 360 / 390 / 768 / 1024 / 1440.

---

## 10. CODE STRUCTURE (suggested)

```
/app                      routes (App Router), layouts, metadata
/components/ui            buttons, inputs, accordions, badges, modals
/components/sections      home sections, footer, header
/components/product       cards, gallery, selectors
/content/journal          MDX articles
/content/policies         MDX policy pages
/data                     products.ts, faqs.ts, categories.ts, nav.ts
/config                   site.ts (brand, contact, shipping thresholds, currency, flags)
/lib                      commerce interface, pricing, validation (zod), razorpay, seo, analytics
/public/images            optimised assets
/tests                    vitest + playwright
ASSUMPTIONS.md            every assumption and TODO(client) listed
README.md                 setup, env vars, how to edit products / flip availability / add articles / deploy
```

Keep components small and typed; centralise copy and brand strings; no hard-coded colours outside tokens.

---

## 11. DEFINITION OF DONE (verify and report at the end)

- [ ] All pages in Section 4 exist, are responsive, and are linked from navigation / footer
- [ ] Only `available: true` products are purchasable; coming-soon products are clearly separated
- [ ] Add to cart → mini-cart → checkout → Razorpay **test-mode** payment → confirmation works end to end
- [ ] Cart persists across reloads; totals are correct (unit-tested)
- [ ] No fake reviews, certifications, lab reports, statistics or clinical claims anywhere
- [ ] Every health-related claim lives in editable data and carries the supplement disclaimer
- [ ] Lighthouse and accessibility targets met (include scores)
- [ ] `npm run lint`, `npm run build`, `npm test` all pass; Playwright smoke test passes
- [ ] `.env.example`, `README.md` and `ASSUMPTIONS.md` complete
- [ ] Final summary: what was built, what is placeholder, and the **TODO(client) checklist** I must complete before launch (real prices, FSSAI / GSTIN, legal review, final photography, lab reports, nutrition facts, Razorpay live keys, domain, analytics IDs)

---

## 12. BUILD PHASES

1. **Foundation:** project setup, tokens, fonts, layout shell (header, footer, mega-menu, mini-cart), UI primitives, `config/site.ts`.
2. **Data & commerce core:** catalog data, cart store, pricing / shipping logic, tests.
3. **Core pages:** Home, Shop All, category pages, PDP with all states.
4. **Brand pages:** Philosophy, Journal (index + 6 articles), Contact / FAQ.
5. **Checkout:** cart page, checkout form, Razorpay test-mode, API routes, confirmation, order tracking.
6. **Legal & compliance:** policy pages, disclaimers, consent banner, 404 / error pages.
7. **Polish:** motion, SEO / JSON-LD, performance and accessibility pass, responsive QA, Playwright smoke test.
8. **Handover:** README, ASSUMPTIONS.md, TODO(client) checklist, final report.

**Begin now with your plan, then execute Phase 1.**
