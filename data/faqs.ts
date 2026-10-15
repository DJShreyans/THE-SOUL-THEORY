export interface FAQItem {
  id: string;
  category: "Products" | "Ordering" | "Shipping" | "Returns" | "Safety & Usage";
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  // Products
  {
    id: "prod-1",
    category: "Products",
    question: "What makes SOUL THEORY different from conventional supplements?",
    answer:
      "Most supplement brands either look like clinical pharmaceuticals or extreme bodybuilder nutrition loaded with artificial sweeteners. SOUL THEORY is designed around modern life: clean, transparent science, subtle natural flavours, gentle digestion, and products that fit seamlessly into daily rituals.",
  },
  {
    id: "prod-2",
    category: "Products",
    question: "Are your products 100% vegan and non-GMO?",
    answer:
      "Yes. Every product in our initial catalogue is strictly 100% plant-based, non-GMO, and free from animal-derived gelatin or stabilizers. We use plant extracts like beetroot, butterfly pea, and spirulina for colour.",
  },
  {
    id: "prod-3",
    category: "Products",
    question: "Do you use artificial sugars or sucralose?",
    answer:
      "No. We sweeten our formulas using natural Reb-A Stevia leaf extract and real fruit powders. We avoid maltodextrin, high fructose corn syrup, and harsh artificial sweeteners.",
  },
  {
    id: "prod-4",
    category: "Products",
    question: "How are your products tested for purity and heavy metals?",
    answer:
      "Every manufacturing batch undergoes third-party NABL-accredited laboratory verification for microbial purity, potency verification, and heavy metal screening (lead, arsenic, cadmium, mercury). Certificates of Analysis are available upon customer request.",
  },

  // Ordering & Payment
  {
    id: "ord-1",
    category: "Ordering",
    question: "What payment methods do you accept in India?",
    answer:
      "We accept all major Indian payment methods through our secure Razorpay gateway: UPI (Google Pay, PhonePe, Paytm, CRED), Credit & Debit cards (Visa, Mastercard, RuPay), Netbanking across 50+ Indian banks, Wallets, and Cash on Delivery (COD).",
  },
  {
    id: "ord-2",
    category: "Ordering",
    question: "Is Cash on Delivery (COD) available for my pin code?",
    answer:
      "COD is available across 19,000+ Indian postal pin codes for orders up to ₹3,000. A nominal ₹50 handling charge applies to COD orders to account for courier cash collection fees.",
  },
  {
    id: "ord-3",
    category: "Ordering",
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "Orders can be modified or cancelled within 2 hours of placement by emailing care@soultheory.in or contacting our WhatsApp support line, provided the dispatch label has not yet been generated.",
  },

  // Shipping
  {
    id: "ship-1",
    category: "Shipping",
    question: "How much does shipping cost, and how do I get Free Shipping?",
    answer:
      "Shipping is completely free nationwide on all prepaid and COD orders of ₹999 or more. For orders below ₹999, a flat shipping fee of ₹80 is applied at checkout.",
  },
  {
    id: "ship-2",
    category: "Shipping",
    question: "How long will delivery take?",
    answer:
      "We dispatch orders within 24 business hours from our Mumbai fulfillment center. Metro cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune) typically receive deliveries in 2–4 business days. Other regions take 4–6 business days.",
  },
  {
    id: "ship-3",
    category: "Shipping",
    question: "How do I track my shipment?",
    answer:
      "As soon as your package is dispatched, we send an SMS and email with your AWB tracking link from our courier partners (Bluedart, Delhivery, Smartr). You can also look up status directly on our Track Order page.",
  },

  // Returns & Refunds
  {
    id: "ret-1",
    category: "Returns",
    question: "What is your return and refund policy?",
    answer:
      "Because functional wellness products are consumable nutritional supplements, we cannot accept returns of opened jars for hygiene and consumer safety. However, if your order arrives damaged, broken, defective, or incorrect, please notify us within 48 hours of delivery with photos, and we will issue an immediate free replacement or 100% refund.",
  },
  {
    id: "ret-2",
    category: "Returns",
    question: "How are refunds processed?",
    answer:
      "Approved refunds are credited back to your original payment method (bank account, UPI, or card) within 5–7 business days. For COD orders, our support team will request your UPI ID or bank NEFT details.",
  },

  // Safety & Usage
  {
    id: "saf-1",
    category: "Safety & Usage",
    question: "Can I take Creatine and Hydration together?",
    answer:
      "Yes, absolutely. Creatine and electrolytes complement each other synergistically. Creatine draws water into your muscle cells to support cellular volume, while electrolytes maintain osmotic balance and neural signaling. Many of our team members mix 1 scoop of each in their morning gym shaker.",
  },
  {
    id: "saf-2",
    category: "Safety & Usage",
    question: "Are your products safe for pregnant or nursing mothers?",
    answer:
      "As with any dietary supplement, if you are pregnant, nursing, taking prescription medication, or have a chronic medical condition, you should always consult your obstetrician or qualified physician before introducing new botanical or nutritional products.",
  },
  {
    id: "saf-3",
    category: "Safety & Usage",
    question: "Are your products approved by FSSAI?",
    answer:
      "All SOUL THEORY formulations are manufactured in compliance with FSSAI (Food Safety and Standards Authority of India) dietary supplement regulations and produced in ISO 22000 and GMP-certified manufacturing units.",
  },
];
