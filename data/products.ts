export interface PackSize {
  id: string;
  type: "tin" | "sachet-box" | "combo";
  label: string;
  netWeightG: number;
  servingSizeG: number;
  servings: number;
  price: number;
  compareAtPrice: number;
  badge?: string;
}

export interface ProductTheme {
  accent: string;
  tint: "lavender" | "soft-coral" | "powder-blue" | "seafoam" | "ivory";
  borderAccent: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  line: string;
  category: "performance-fitness" | "hydration" | "nutrition" | "womens-wellness";
  flavour: string;
  flavourFamily: "fruity" | "floral" | "citrus" | "tropical";
  packSizes: PackSize[];
  tagline: string;
  signOff?: string;
  shortDescription: string;
  longDescription: string;
  benefits: {
    title: string;
    description: string;
  }[];
  benefitChips: string[];
  badges: string[];
  ingredients: string[];
  allergens: string;
  nutritionFacts: {
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    nutrients: {
      name: string;
      amount: string;
      dailyValue?: string;
    }[];
  };
  howToUse: {
    step: string;
    instruction: string;
  }[];
  theme: ProductTheme;
  images: {
    main: string;
    lifestyle?: string;
    alt: string;
  };
  available: boolean;
  status: "launched" | "coming-soon";
  tags: string[];
  seo: {
    title: string;
    description: string;
  };
  faqs: ProductFAQ[];
  // Statutory and regulatory compliance block
  regulatoryNotice: string;
}

export const PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // 1. CREATINE MONOHYDRATE — BLUEBERRY CLOUD (LAUNCHED)
  // -------------------------------------------------------------
  {
    slug: "creatine-blueberry-cloud",
    name: "Creatine Monohydrate — Blueberry Cloud",
    line: "Creatine Monohydrate",
    category: "performance-fitness",
    flavour: "Blueberry Cloud",
    flavourFamily: "fruity",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (50 Servings)",
        netWeightG: 250,
        servingSizeG: 5,
        servings: 50, // TODO(client): confirm serving size and scoop calibration
        price: 1199,
        compareAtPrice: 1499,
        badge: "Most Popular",
      },
      {
        id: "sachet-30pk",
        type: "sachet-box",
        label: "Single-Serve Box (30 Sachets × 5g)",
        netWeightG: 150,
        servingSizeG: 5,
        servings: 30,
        price: 899,
        compareAtPrice: 1099,
      },
    ],
    tagline: "Better energy. Stronger you.",
    signOff: "More Reps. More You.",
    shortDescription:
      "Ultra-micronised 100% pure creatine monohydrate infused with crisp wild blueberry essence. Formulated for effortless mixability, cellular hydration, and sustained athletic output.",
    longDescription:
      "Engineered to fuel cellular ATP regeneration without the chalky texture or artificial sweetness of conventional supplements. Our Blueberry Cloud Creatine blends smoothly into cold water, pre-workout hydration, or morning smoothies. Every batch is micronised to 200-mesh purity for gentle digestion and maximum bioavailability.",
    benefitChips: [
      "Boosts strength & power",
      "Supports focus & mental clarity",
      "Faster recovery",
    ],
    benefits: [
      {
        title: "Cellular Power & ATP Regeneration",
        description:
          "Replenishes phosphocreatine stores in skeletal muscle tissue to help sustain maximum power output during high-intensity training intervals.",
      },
      {
        title: "Cognitive Endurance",
        description:
          "Emerging clinical evidence links creatine to sustained mental stamina and memory processing during demanding, fatigue-inducing tasks.",
      },
      {
        title: "Lean Muscle Support & Hydration",
        description:
          "Draws cellular water into muscle fibres, fostering protein synthesis and reducing delayed-onset muscle soreness (DOMS).",
      },
    ],
    badges: ["Vegan", "No Added Sugar", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Micronized Creatine Monohydrate (200 mesh)",
      "Natural Wild Blueberry Flavour",
      "Malic Acid",
      "Butterfly Pea Flower Extract (for natural botanical colour)",
      "Stevia Leaf Extract (Rebaudioside A)",
      "Silicon Dioxide (Anti-caking, <1%)",
    ],
    allergens: "Manufactured in a certified GMP facility that also processes milk, soy, and nuts.",
    nutritionFacts: {
      servingSize: "1 level scoop (5g)",
      servingsPerContainer: 50,
      calories: 0,
      nutrients: [
        { name: "Creatine Monohydrate", amount: "5,000 mg", dailyValue: "†" },
        { name: "Total Carbohydrates", amount: "0 g", dailyValue: "0%" },
        { name: "Total Sugars", amount: "0 g", dailyValue: "0%" },
        { name: "Sodium", amount: "0 mg", dailyValue: "0%" },
      ],
    },
    howToUse: [
      {
        step: "Daily Maintenance",
        instruction: "Mix 1 scoop (5g) with 250–350ml of chilled water or your post-workout shake once daily.",
      },
      {
        step: "Consistency",
        instruction: "Take consistently at the same time each day—workout and rest days alike. Hydrate with at least 2.5–3L of water daily.",
      },
    ],
    theme: {
      accent: "#8A84C4",
      tint: "lavender",
      borderAccent: "#C9C0E2",
    },
    images: {
      main: "/images/products/creatine-blueberry-cloud.jpg",
      alt: "SOUL THEORY Creatine Monohydrate in Blueberry Cloud flavor",
    },
    available: true,
    status: "launched",
    tags: ["Creatine", "Strength", "Endurance", "Performance"],
    seo: {
      title: "Creatine Monohydrate Blueberry Cloud | SOUL THEORY",
      description: "Buy ultra-micronized 100% Creatine Monohydrate with refreshing Blueberry Cloud flavor. Zero sugar, vegan, third-party tested. Free India shipping.",
    },
    faqs: [
      {
        question: "Do I need to do a loading phase?",
        answer: "A loading phase is optional. Taking 1 scoop (5g) daily will fully saturate muscle creatine stores within 3 to 4 weeks with minimal stomach sensitivity.",
      },
      {
        question: "Does this creatine cause water retention?",
        answer: "Creatine increases intracellular water retention inside your muscle cells (making them fuller and stronger), not subcutaneous bloating under the skin.",
      },
      {
        question: "When is the best time to consume it?",
        answer: "Timing is secondary to daily consistency. Post-workout with a meal or morning hydration is ideal.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. FSSAI Lic. No. [TODO: Client FSSAI].",
  },

  // -------------------------------------------------------------
  // 2. CREATINE MONOHYDRATE — LYCHEE ROSE (LAUNCHED)
  // -------------------------------------------------------------
  {
    slug: "creatine-lychee-rose",
    name: "Creatine Monohydrate — Lychee Rose",
    line: "Creatine Monohydrate",
    category: "performance-fitness",
    flavour: "Lychee Rose",
    flavourFamily: "floral",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (50 Servings)",
        netWeightG: 250,
        servingSizeG: 5,
        servings: 50,
        price: 1199,
        compareAtPrice: 1499,
        badge: "New Release",
      },
      {
        id: "sachet-30pk",
        type: "sachet-box",
        label: "Single-Serve Box (30 Sachets × 5g)",
        netWeightG: 150,
        servingSizeG: 5,
        servings: 30,
        price: 899,
        compareAtPrice: 1099,
      },
    ],
    tagline: "Better energy. Stronger you.",
    signOff: "More Reps. More You.",
    shortDescription:
      "A delicate, botanical fusion of fragrant tropical lychee and organic Damascus rose petals. 100% micronised creatine for clean athletic performance.",
    longDescription:
      "Created for those who crave a light, refreshing, non-medicinal fitness drink. We paired clinical-grade 200-mesh creatine with subtle floral sweetness, providing the endurance and recovery benefits of creatine without excessive acidity.",
    benefitChips: [
      "Boosts strength & power",
      "Supports focus & mental clarity",
      "Faster recovery",
    ],
    benefits: [
      {
        title: "Explosive Energy Reservoirs",
        description: "Supports fast regeneration of cellular ATP during sprinting, weightlifting, and high-intensity functional training.",
      },
      {
        title: "Clean Botanical Refreshment",
        description: "Naturally flavoured with real fruit extract and subtle floral rosewater notes that make daily supplementation an enjoyable ritual.",
      },
      {
        title: "Zero Digestive Heaviness",
        description: "High-grade micronisation eliminates graininess and clumping, ensuring smooth digestion without stomach cramps.",
      },
    ],
    badges: ["Vegan", "No Added Sugar", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Micronized Creatine Monohydrate (200 mesh)",
      "Natural Lychee Extract",
      "Rose Petal Distillate Powder",
      "Citric Acid",
      "Beetroot Juice Powder (natural colour)",
      "Stevia Leaf Extract",
    ],
    allergens: "Gluten-free, dairy-free, vegan.",
    nutritionFacts: {
      servingSize: "1 scoop (5g)",
      servingsPerContainer: 50,
      calories: 0,
      nutrients: [
        { name: "Creatine Monohydrate", amount: "5,000 mg", dailyValue: "†" },
        { name: "Total Sugars", amount: "0 g", dailyValue: "0%" },
      ],
    },
    howToUse: [
      {
        step: "How to Prepare",
        instruction: "Add 1 level scoop into 300ml of cold water or coconut water. Shake for 15 seconds.",
      },
    ],
    theme: {
      accent: "#E28C81",
      tint: "soft-coral",
      borderAccent: "#F4E2DD",
    },
    images: {
      main: "/images/products/creatine-lychee-rose.jpg",
      alt: "SOUL THEORY Creatine Monohydrate in Lychee Rose flavor",
    },
    available: true,
    status: "launched",
    tags: ["Creatine", "Strength", "Floral", "Performance"],
    seo: {
      title: "Creatine Monohydrate Lychee Rose | SOUL THEORY",
      description: "Experience smooth power with Lychee Rose Creatine Monohydrate. Zero sugar, vegan, 100% pure micronised creatine.",
    },
    faqs: [
      {
        question: "Is this suitable for women?",
        answer: "Yes, absolutely! Creatine is equally safe and beneficial for women, aiding muscle tone, metabolic health, and mental alertness.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. FSSAI Lic. No. [TODO: Client FSSAI].",
  },

  // -------------------------------------------------------------
  // 3. HYDRATION + MULTIVITAMIN — WATERMELON LIME (LAUNCHED)
  // -------------------------------------------------------------
  {
    slug: "hydration-watermelon-lime",
    name: "Hydration + Multivitamin — Watermelon Lime",
    line: "Hydration + Multivitamin Combo",
    category: "hydration",
    flavour: "Watermelon Lime",
    flavourFamily: "fruity",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 899,
        compareAtPrice: 1099,
        badge: "Bestseller",
      },
      {
        id: "sachet-15pk",
        type: "sachet-box",
        label: "On-the-Go Pack (15 Sachets × 10g)",
        netWeightG: 150,
        servingSizeG: 10,
        servings: 15,
        price: 649,
        compareAtPrice: 799,
      },
    ],
    tagline: "Hydration. Vitamins. Real fruit flavour.",
    shortDescription:
      "A clinical ratio of key electrolytes (sodium, potassium, magnesium, chloride) coupled with Vitamin C and daily B-Complex for cellular vitality.",
    longDescription:
      "Water alone is not enough when you are sweating, working long hours, or moving constantly. Watermelon Lime Hydration provides osmotic balance to replenish what is lost, preventing brain fog and muscle cramps with zero artificial dyes.",
    benefitChips: [
      "Electrolytes for hydration",
      "Immune support blend",
      "Energy & vitality",
    ],
    benefits: [
      {
        title: "Osmotic Hydration Ratio",
        description: "Optimal balance of sodium and glucose-free potassium to transport water molecules directly into dehydrated cells.",
      },
      {
        title: "Immune & Metabolic Support",
        description: "Infused with 100% RDA of buffered Vitamin C and bioactive B-complex vitamins (B1, B2, B6, B12) for mitochondrial energy.",
      },
      {
        title: "Zero Artificial Dyes",
        description: "Vibrant ruby-pink hue derived purely from organic watermelon extract and red beet juice.",
      },
    ],
    badges: ["Vegan", "Plant-Based Colours", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Electrolyte Blend (Sodium Chloride, Potassium Citrate, Magnesium Malate)",
      "Vitamin Complex (Vitamin C as Ascorbic Acid, Niacinamide, B6, B12, Folic Acid)",
      "Natural Watermelon & Key Lime Flavour",
      "Red Beetroot Powder",
      "Stevia Leaf Extract",
    ],
    allergens: "Vegan, allergen-free facility.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 5,
      nutrients: [
        { name: "Sodium", amount: "380 mg", dailyValue: "16%" },
        { name: "Potassium", amount: "220 mg", dailyValue: "6%" },
        { name: "Magnesium", amount: "65 mg", dailyValue: "15%" },
        { name: "Vitamin C", amount: "80 mg", dailyValue: "100%" },
        { name: "Vitamin B12", amount: "2.2 mcg", dailyValue: "100%" },
      ],
    },
    howToUse: [
      {
        step: "Mix & Enjoy",
        instruction: "Dissolve 1 scoop in 500ml of cold water. Sip during workouts, mid-afternoon work slumps, or travel.",
      },
    ],
    theme: {
      accent: "#E05D58",
      tint: "seafoam",
      borderAccent: "#DCEBE3",
    },
    images: {
      main: "/images/products/hydration-watermelon-lime.jpg",
      alt: "SOUL THEORY Hydration + Multivitamin in Watermelon Lime",
    },
    available: true,
    status: "launched",
    tags: ["Electrolytes", "Hydration", "Vitamins", "Immunity"],
    seo: {
      title: "Hydration + Multivitamin Watermelon Lime | SOUL THEORY",
      description: "Replenish essential electrolytes, Vitamin C and B-Complex with natural Watermelon Lime hydration mix.",
    },
    faqs: [
      {
        question: "Can I drink this every day even if I don't work out?",
        answer: "Yes! Modern environments with air conditioning, coffee intake, and heat dehydrate us even without intense gym sessions.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. FSSAI Lic. No. [TODO: Client FSSAI].",
  },

  // -------------------------------------------------------------
  // 4. HYDRATION + MULTIVITAMIN — BLUE LAGOON CITRUS (LAUNCHED)
  // -------------------------------------------------------------
  {
    slug: "hydration-blue-lagoon-citrus",
    name: "Hydration + Multivitamin — Blue Lagoon Citrus",
    line: "Hydration + Multivitamin Combo",
    category: "hydration",
    flavour: "Blue Lagoon Citrus",
    flavourFamily: "citrus",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 899,
        compareAtPrice: 1099,
      },
    ],
    tagline: "Hydration. Vitamins. Real fruit flavour.",
    shortDescription:
      "A zesty, ocean-fresh splash of Meyer lemon, Persian lime, and cool mint with complete electrolyte and multivitamin reinforcement.",
    longDescription:
      "Inspired by Mediterranean coastal mornings, Blue Lagoon Citrus combines real citrus peel botanicals with rapid electrolyte delivery. Tinted naturally with blue spirulina, it delivers clean cellular revitalization with zero artificial colours or sugars.",
    benefitChips: [
      "Electrolytes for hydration",
      "Immune support blend",
      "Energy & vitality",
    ],
    benefits: [
      {
        title: "Rapid Fluid Uptake",
        description: "Balanced electrolyte concentration designed for immediate gastric emptying and systemic cellular hydration.",
      },
      {
        title: "All-Day Mental Spark",
        description: "Active B-complex vitamins combat midday cognitive fatigue and support nervous system equilibrium.",
      },
      {
        title: "Blue Spirulina Infusion",
        description: "Rich in phycocyanin, a potent plant antioxidant that shields against oxidative stress.",
      },
    ],
    badges: ["Vegan", "Plant-Based Colours", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Electrolytes (Sodium Chloride, Potassium Citrate, Magnesium Malate)",
      "Multivitamin Blend (Vitamin C, B1, B2, B3, B6, B12)",
      "Blue Spirulina Extract (natural oceanic tint)",
      "Lemon and Lime Juice Powder",
      "Stevia Leaf Extract",
    ],
    allergens: "Vegan, allergen-free facility.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 5,
      nutrients: [
        { name: "Sodium", amount: "380 mg", dailyValue: "16%" },
        { name: "Potassium", amount: "220 mg", dailyValue: "6%" },
        { name: "Magnesium", amount: "65 mg", dailyValue: "15%" },
        { name: "Vitamin C", amount: "80 mg", dailyValue: "100%" },
      ],
    },
    howToUse: [
      {
        step: "How to Enjoy",
        instruction: "Add 1 scoop to 500ml ice-cold water. Shake well and enjoy the electric blue splash.",
      },
    ],
    theme: {
      accent: "#3D899B",
      tint: "powder-blue",
      borderAccent: "#BFD5E7",
    },
    images: {
      main: "/images/products/hydration-blue-lagoon-citrus.jpg",
      alt: "SOUL THEORY Hydration Blue Lagoon Citrus",
    },
    available: true,
    status: "launched",
    tags: ["Hydration", "Citrus", "Vitamins", "Daily"],
    seo: {
      title: "Hydration Blue Lagoon Citrus | SOUL THEORY",
      description: "Crisp lemon-lime hydration powder with blue spirulina, electrolytes and essential daily multivitamins.",
    },
    faqs: [
      {
        question: "Is the blue colour natural?",
        answer: "Yes, 100%! We use organic blue spirulina extract (phycocyanin). No FD&C artificial blue dyes are ever used.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. FSSAI Lic. No. [TODO: Client FSSAI].",
  },

  // -------------------------------------------------------------
  // 5. HYDRATION + MULTIVITAMIN — PINK GUAVA STRAWBERRY (LAUNCHED)
  // -------------------------------------------------------------
  {
    slug: "hydration-pink-guava-strawberry",
    name: "Hydration + Multivitamin — Pink Guava Strawberry",
    line: "Hydration + Multivitamin Combo",
    category: "hydration",
    flavour: "Pink Guava Strawberry",
    flavourFamily: "tropical",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 899,
        compareAtPrice: 1099,
      },
    ],
    tagline: "Hydration. Vitamins. Real fruit flavour.",
    shortDescription:
      "Sun-ripened tropical pink guava balanced with sweet handpicked garden strawberries and clinical hydration electrolytes.",
    longDescription:
      "A tropical wellness elixir that makes drinking your daily fluids an indulgence. Packed with essential bioavailable minerals and daily vitamins, it supports stamina, post-workout recovery, and radiant skin hydration.",
    benefitChips: [
      "Electrolytes for hydration",
      "Immune support blend",
      "Energy & vitality",
    ],
    benefits: [
      {
        title: "Deep Cellular Replenishment",
        description: "Re-establishes fluid balance after endurance activities, humid commutes, or strenuous training.",
      },
      {
        title: "Antioxidant & Skin Hydration",
        description: "Pink guava is naturally abundant in polyphenols and Vitamin C, fostering collagen synthesis and tissue elasticity.",
      },
      {
        title: "Clean Everyday Profile",
        description: "Naturally flavoured and sweetened without bitter aftertaste or blood-sugar spikes.",
      },
    ],
    badges: ["Vegan", "Plant-Based Colours", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Electrolytes (Sodium Chloride, Potassium Citrate, Magnesium Malate)",
      "Pink Guava Extract",
      "Strawberry Essence",
      "Vitamin C & B-Complex",
      "Stevia Leaf Extract",
    ],
    allergens: "Vegan, dairy-free.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 5,
      nutrients: [
        { name: "Sodium", amount: "380 mg", dailyValue: "16%" },
        { name: "Potassium", amount: "220 mg", dailyValue: "6%" },
        { name: "Magnesium", amount: "65 mg", dailyValue: "15%" },
        { name: "Vitamin C", amount: "80 mg", dailyValue: "100%" },
      ],
    },
    howToUse: [
      {
        step: "Mix & Enjoy",
        instruction: "Dissolve 1 scoop in 400–500ml cold water. Best served over crushed ice.",
      },
    ],
    theme: {
      accent: "#E37877",
      tint: "soft-coral",
      borderAccent: "#F4E2DD",
    },
    images: {
      main: "/images/products/hydration-pink-guava-strawberry.jpg",
      alt: "SOUL THEORY Hydration Pink Guava Strawberry",
    },
    available: true,
    status: "launched",
    tags: ["Hydration", "Guava", "Strawberry", "Electrolytes"],
    seo: {
      title: "Hydration Pink Guava Strawberry | SOUL THEORY",
      description: "Tropical Pink Guava Strawberry electrolyte mix with Vitamin C and daily B-complex. Zero artificial dyes.",
    },
    faqs: [
      {
        question: "Can I take this alongside Creatine?",
        answer: "Yes! In fact, mixing 1 scoop of Creatine with 1 scoop of Hydration creates an optimal cell-volumizing training beverage.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. FSSAI Lic. No. [TODO: Client FSSAI].",
  },

  // -------------------------------------------------------------
  // 6. PREBIOTIC GUT FIBRE — HONEY PEACH & LAVENDER (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "prebiotic-honey-peach-lavender",
    name: "Prebiotic Gut Fibre — Honey Peach & Lavender",
    line: "Prebiotic Gut Fibre",
    category: "nutrition",
    flavour: "Honey Peach & Lavender",
    flavourFamily: "floral",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 999,
        compareAtPrice: 1299,
      },
    ],
    tagline: "Better gut. Stronger you.",
    signOff: "More You.",
    shortDescription:
      "100% soluble plant-based prebiotic fibre blend delicately infused with sun-drenched peach and soothing French lavender.",
    longDescription:
      "Engineered to nourish your beneficial gut microbiome without bloating or gas. This gentle prebiotic fibre feeds Bifidobacteria and Lactobacilli to promote smooth daily regularity, nutrient absorption, and gut-barrier integrity.",
    benefitChips: [
      "Digestive balance",
      "Immune support",
      "Strength & vitality",
    ],
    benefits: [
      {
        title: "Targeted Microbiome Nourishment",
        description: "Contains chicory inulin and resistant dextrin that selectively nourish beneficial probiotic flora.",
      },
      {
        title: "Gentle, Non-Bloating Regularity",
        description: "Slowly fermenting dietary fibres designed to promote gentle bowel movements without intestinal distress.",
      },
      {
        title: "Gut-Brain Axis Harmony",
        description: "Over 70% of the body's immune tissue resides in the gut lining; prebiotic health reinforces whole-body resistance.",
      },
    ],
    badges: ["Vegan", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Chicory Root Inulin",
      "Partially Hydrolyzed Guar Gum (PHGG)",
      "Natural Peach Flavour",
      "Culinary Lavender Blossom Extract",
      "Monk Fruit Extract",
    ],
    allergens: "Vegan, gluten-free.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 20,
      nutrients: [
        { name: "Dietary Fibre", amount: "8 g", dailyValue: "28%" },
        { name: "Soluble Fibre", amount: "7.5 g", dailyValue: "†" },
        { name: "Total Sugars", amount: "0.5 g", dailyValue: "0%" },
      ],
    },
    howToUse: [
      {
        step: "Morning Ritual",
        instruction: "Stir 1 scoop into warm or cold water, herbal tea, or yogurt first thing in the morning.",
      },
    ],
    theme: {
      accent: "#E2A176",
      tint: "soft-coral",
      borderAccent: "#F4E2DD",
    },
    images: {
      main: "/images/products/prebiotic-honey-peach-lavender.jpg",
      alt: "SOUL THEORY Prebiotic Gut Fibre Honey Peach and Lavender",
    },
    available: false,
    status: "coming-soon",
    tags: ["Gut Health", "Prebiotics", "Fibre", "Digestion"],
    seo: {
      title: "Prebiotic Gut Fibre Honey Peach & Lavender | SOUL THEORY",
      description: "Nourish your microbiome with soluble prebiotic fiber and soothing peach-lavender infusion. Coming soon.",
    },
    faqs: [
      {
        question: "When will this be available?",
        answer: "This product is in its final formulation verification stage. Register your email to receive first-batch dispatch access.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. Pending FSSAI product clearance.",
  },

  // -------------------------------------------------------------
  // 7. PREBIOTIC GUT FIBRE — STRAWBERRY HIBISCUS (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "prebiotic-strawberry-hibiscus",
    name: "Prebiotic Gut Fibre — Strawberry Hibiscus",
    line: "Prebiotic Gut Fibre",
    category: "nutrition",
    flavour: "Strawberry Hibiscus",
    flavourFamily: "fruity",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 999,
        compareAtPrice: 1299,
      },
    ],
    tagline: "Better gut. Stronger you.",
    signOff: "More You.",
    shortDescription:
      "Tart organic hibiscus calyces blended with wild strawberry and restorative soluble dietary fibre.",
    longDescription:
      "A vibrant ruby-toned prebiotic drink designed to support digestion and antioxidant defenses. Rich in anthocyanins and resistant dextrin, it turns your daily fibre intake into a refreshing tart-sweet iced beverage.",
    benefitChips: [
      "Digestive balance",
      "Immune support",
      "Strength & vitality",
    ],
    benefits: [
      {
        title: "Microbial Diversity",
        description: "Promotes short-chain fatty acid (SCFA) production in the colon for systemic metabolic health.",
      },
      {
        title: "Anthocyanin Polyphenols",
        description: "Hibiscus is naturally loaded with protective bio-flavonoids that combat oxidative stress.",
      },
    ],
    badges: ["Vegan", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Soluble Corn Fibre",
      "Organic Hibiscus Extract",
      "Wild Strawberry Essence",
      "Acacia Gum",
      "Stevia Leaf Extract",
    ],
    allergens: "Vegan.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 20,
      nutrients: [
        { name: "Dietary Fibre", amount: "8 g", dailyValue: "28%" },
      ],
    },
    howToUse: [
      {
        step: "Mix with Cold Water",
        instruction: "Dissolve 1 scoop in cold water. Drink 20 minutes before lunch or dinner.",
      },
    ],
    theme: {
      accent: "#A84755",
      tint: "soft-coral",
      borderAccent: "#F4E2DD",
    },
    images: {
      main: "/images/products/prebiotic-strawberry-hibiscus.jpg",
      alt: "SOUL THEORY Prebiotic Gut Fibre Strawberry Hibiscus",
    },
    available: false,
    status: "coming-soon",
    tags: ["Gut Health", "Fibre", "Hibiscus"],
    seo: {
      title: "Prebiotic Gut Fibre Strawberry Hibiscus | SOUL THEORY",
      description: "Gentle digestive balance with soluble prebiotic fibers and antioxidant hibiscus botanicals.",
    },
    faqs: [
      {
        question: "Can I drink this warm?",
        answer: "Yes, our soluble prebiotics remain heat-stable and can be enjoyed hot like an herbal tea.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. Pending FSSAI clearance.",
  },

  // -------------------------------------------------------------
  // 8. PREBIOTIC GUT FIBRE — VALENCIA ORANGE (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "prebiotic-valencia-orange",
    name: "Prebiotic Gut Fibre — Valencia Orange",
    line: "Prebiotic Gut Fibre",
    category: "nutrition",
    flavour: "Valencia Orange",
    flavourFamily: "citrus",
    packSizes: [
      {
        id: "tin-250g",
        type: "tin",
        label: "250g Jar (25 Servings)",
        netWeightG: 250,
        servingSizeG: 10,
        servings: 25,
        price: 999,
        compareAtPrice: 1299,
      },
    ],
    tagline: "Better gut. Stronger you.",
    signOff: "More You.",
    shortDescription:
      "Bright, sunny Valencia orange citrus notes paired with dual-source plant prebiotics for gentle everyday digestion.",
    longDescription:
      "Crafted with the zest and juice notes of fresh Valencia oranges, this formulation dissolves completely clear with zero grit. An effortless way to achieve your 25g daily recommended dietary fibre threshold.",
    benefitChips: [
      "Digestive balance",
      "Immune support",
      "Strength & vitality",
    ],
    benefits: [
      {
        title: "Clean Satiety & Blood Sugar Balance",
        description: "Soluble fibre slows gastric emptying, assisting in even energy release after meals.",
      },
      {
        title: "Clear Dissolving Formula",
        description: "No thickness or gelatinous sludge—mixes light and clean like freshly squeezed orange water.",
      },
    ],
    badges: ["Vegan", "Non-GMO", "Third-Party Tested"],
    ingredients: [
      "Chicory Root Oligofructose",
      "Valencia Orange Peel Extract",
      "Citric Acid",
      "Beta-Carotene (natural colour)",
      "Stevia Leaf",
    ],
    allergens: "Vegan.",
    nutritionFacts: {
      servingSize: "1 scoop (10g)",
      servingsPerContainer: 25,
      calories: 20,
      nutrients: [
        { name: "Dietary Fibre", amount: "8 g", dailyValue: "28%" },
      ],
    },
    howToUse: [
      {
        step: "Daily Habit",
        instruction: "Add 1 scoop to 300ml cold water alongside breakfast.",
      },
    ],
    theme: {
      accent: "#E8863A",
      tint: "soft-coral",
      borderAccent: "#F4E2DD",
    },
    images: {
      main: "/images/products/prebiotic-valencia-orange.jpg",
      alt: "SOUL THEORY Prebiotic Gut Fibre Valencia Orange",
    },
    available: false,
    status: "coming-soon",
    tags: ["Gut Health", "Citrus", "Fibre"],
    seo: {
      title: "Prebiotic Gut Fibre Valencia Orange | SOUL THEORY",
      description: "Crisp Valencia orange prebiotic fibre to nourish digestion and enhance daily vitality.",
    },
    faqs: [
      {
        question: "Is this safe for diabetics?",
        answer: "Yes, it contains zero added sugar and contributes to low glycemic digestive response.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. Pending FSSAI clearance.",
  },

  // -------------------------------------------------------------
  // 9. HANGOVER RESCUE — CRISP TENDER COCONUT (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "hangover-crisp-tender-coconut",
    name: "Hangover Rescue — Crisp Tender Coconut",
    line: "Hangover Rescue",
    category: "womens-wellness",
    flavour: "Crisp Tender Coconut",
    flavourFamily: "tropical",
    packSizes: [
      {
        id: "box-10pk",
        type: "sachet-box",
        label: "Box of 10 Single-Serve Sachets (10 × 5g)",
        netWeightG: 50,
        servingSizeG: 5,
        servings: 10,
        price: 699,
        compareAtPrice: 899,
      },
    ],
    tagline: "Restore balance. Revive the mind.",
    shortDescription:
      "Pure freeze-dried tender coconut water extract and essential bio-salts formulated to accelerate next-morning rehydration.",
    longDescription:
      "When late nights, celebrations, or intense travel deplete your body, this targeted morning-after reset delivers cellular electrolytes and calming botanicals to help you bounce back without lingering fatigue.",
    benefitChips: [
      "Ultimate hydration",
      "Electrolyte balance",
      "Natural refreshment",
    ],
    benefits: [
      {
        title: "Tender Coconut Electrolyte Matrix",
        description: "Naturally loaded with potassium and isotonic minerals that match physiological body fluids.",
      },
      {
        title: "Gentle Gastric Soothing",
        description: "Formulated without harsh stimulants or synthetic aspirin, providing gentle stomach comfort.",
      },
    ],
    badges: ["Vegan", "No Added Sugar", "Non-GMO", "Third-Party Tested", "18+ Adult Use"],
    ingredients: [
      "Freeze-Dried Tender Coconut Water Powder",
      "Potassium Citrate",
      "Sodium Chloride",
      "Ginger Root Extract",
      "Vitamin B6",
      "Silica",
    ],
    allergens: "Contains coconut.",
    nutritionFacts: {
      servingSize: "1 sachet (5g)",
      servingsPerContainer: 10,
      calories: 12,
      nutrients: [
        { name: "Potassium", amount: "320 mg", dailyValue: "8%" },
        { name: "Sodium", amount: "180 mg", dailyValue: "8%" },
      ],
    },
    howToUse: [
      {
        step: "Morning Reset",
        instruction: "Dissolve 1 sachet in 300ml cold water immediately upon waking. Drink another glass of pure water after.",
      },
    ],
    theme: {
      accent: "#6B7F6A",
      tint: "ivory",
      borderAccent: "#E8E4D8",
    },
    images: {
      main: "/images/products/hangover-crisp-tender-coconut.jpg",
      alt: "SOUL THEORY Hangover Rescue Crisp Tender Coconut",
    },
    available: false,
    status: "coming-soon",
    tags: ["Recovery", "Hydration", "Coconut", "18+"],
    seo: {
      title: "Hangover Rescue Crisp Tender Coconut | SOUL THEORY",
      description: "Restorative next-morning hydration with freeze-dried tender coconut water and bio-salts. Coming soon.",
    },
    faqs: [
      {
        question: "Does this cure or prevent alcohol intoxication?",
        answer: "No. This product supports hydration and mineral replacement only. It does not treat, cure, or prevent alcohol intoxication.",
      },
    ],
    regulatoryNotice: "For adult use (18+) only. Dietary supplement. Not for medicinal use. TODO(client): Complete legal review of name and age-gating.",
  },

  // -------------------------------------------------------------
  // 10. HANGOVER RESCUE — ZESTY LEMON GINGER (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "hangover-zesty-lemon-ginger",
    name: "Hangover Rescue — Zesty Lemon Ginger",
    line: "Hangover Rescue",
    category: "womens-wellness",
    flavour: "Zesty Lemon Ginger",
    flavourFamily: "citrus",
    packSizes: [
      {
        id: "box-10pk",
        type: "sachet-box",
        label: "Box of 10 Single-Serve Sachets (10 × 5g)",
        netWeightG: 50,
        servingSizeG: 5,
        servings: 10,
        price: 699,
        compareAtPrice: 899,
      },
    ],
    tagline: "Restore balance. Revive the mind.",
    shortDescription:
      "Warm therapeutic ginger rhizome extract with crisp lemon citrus for natural nausea relief and mental clarity.",
    longDescription:
      "A soothing digestive reset that cuts through morning lethargy. Combining gingerols with bio-salts and Vitamin C, it calms delicate stomachs while restoring electrolyte balance.",
    benefitChips: [
      "Cellular energy",
      "Digestive ease",
      "Cognitive clarity",
    ],
    benefits: [
      {
        title: "Gingerol Digestive Calming",
        description: "Clinically proven ginger extract helps ease post-evening digestive unease.",
      },
      {
        title: "Brain Fog Clearance",
        description: "Vitamin B-complex and magnesium malate support nervous system recovery.",
      },
    ],
    badges: ["Vegan", "No Added Sugar", "Non-GMO", "Third-Party Tested", "18+ Adult Use"],
    ingredients: [
      "Ginger Rhizome Standardized Extract (5% gingerols)",
      "Lemon Juice Extract",
      "Magnesium Malate",
      "Sodium Chloride",
      "Vitamin B6",
    ],
    allergens: "Vegan.",
    nutritionFacts: {
      servingSize: "1 sachet (5g)",
      servingsPerContainer: 10,
      calories: 8,
      nutrients: [
        { name: "Sodium", amount: "190 mg", dailyValue: "8%" },
        { name: "Magnesium", amount: "50 mg", dailyValue: "12%" },
      ],
    },
    howToUse: [
      {
        step: "Preparation",
        instruction: "Mix 1 sachet into room temperature or warm water to soothe digestive tracts.",
      },
    ],
    theme: {
      accent: "#D4AA3B",
      tint: "ivory",
      borderAccent: "#E8E4D8",
    },
    images: {
      main: "/images/products/hangover-zesty-lemon-ginger.jpg",
      alt: "SOUL THEORY Hangover Rescue Zesty Lemon Ginger",
    },
    available: false,
    status: "coming-soon",
    tags: ["Recovery", "Ginger", "Lemon", "18+"],
    seo: {
      title: "Hangover Rescue Zesty Lemon Ginger | SOUL THEORY",
      description: "Soothe morning digestion and revive mental focus with therapeutic ginger and lemon electrolytes.",
    },
    faqs: [
      {
        question: "Can I take this before sleeping?",
        answer: "Yes, taking one sachet with 350ml water before sleep helps replenish fluids early.",
      },
    ],
    regulatoryNotice: "For adult use (18+) only. Dietary supplement. Not for medicinal use. TODO(client): Complete legal review of name and age-gating.",
  },

  // -------------------------------------------------------------
  // 11. HORMONE BALANCE DUO (COMING SOON)
  // -------------------------------------------------------------
  {
    slug: "hormone-balance-duo",
    name: "Everyday & Women's Balance Duo",
    line: "Everyday & Women's Balance",
    category: "womens-wellness",
    flavour: "Mixed Berry Blossom & Lavender Chamomile",
    flavourFamily: "floral",
    packSizes: [
      {
        id: "box-20pk",
        type: "sachet-box",
        label: "Dual-Formula Box (20 Sachets × 10g)",
        netWeightG: 200,
        servingSizeG: 10,
        servings: 20,
        price: 1299,
        compareAtPrice: 1599,
        badge: "Dual-Box Protocol",
      },
    ],
    tagline: "Better balance. Stronger you.",
    shortDescription:
      "A dual-protocol nutritional blend: daytime Mixed Berry Blossom for vitality and evening Lavender Chamomile for restorative rest.",
    longDescription:
      "Thoughtfully formulated around everyday nutritional needs and natural cyclical rhythms. Free from synthetic hormones, this botanical blend pairs calming chamomile, gentle magnesium glycinate, and red raspberry leaf to promote inner equilibrium throughout the month.",
    benefitChips: [
      "Menstrual comfort",
      "Stress & relaxation",
      "Restorative sleep support",
    ],
    benefits: [
      {
        title: "Cyclical Equilibrium",
        description: "Red raspberry leaf and chasteberry fruit extract provide time-tested nutritional comfort.",
      },
      {
        title: "Evening Wind-Down & Sleep",
        description: "Magnesium glycinate and calming chamomile prepare mind and body for deep restorative REM cycles.",
      },
      {
        title: "Antioxidant Radiance",
        description: "Wild berry polyphenols protect against oxidative inflammation that impacts skin clarity.",
      },
    ],
    badges: ["Vegan", "Non-GMO", "Third-Party Tested", "Gentle Botanicals"],
    ingredients: [
      "Day Formula: Red Raspberry Leaf Extract, Chasteberry (Vitex), Wild Berry Flavours, Stevia.",
      "Night Formula: Magnesium Glycinate, German Chamomile Extract, French Lavender, L-Theanine.",
    ],
    allergens: "Vegan, soy-free, gluten-free.",
    nutritionFacts: {
      servingSize: "1 sachet (10g)",
      servingsPerContainer: 20,
      calories: 10,
      nutrients: [
        { name: "Magnesium (as Glycinate)", amount: "200 mg", dailyValue: "48%" },
        { name: "L-Theanine", amount: "100 mg", dailyValue: "†" },
      ],
    },
    howToUse: [
      {
        step: "Day Sachet (Berry)",
        instruction: "Mix with 250ml water around noon for smooth daily energy.",
      },
      {
        step: "Night Sachet (Lavender)",
        instruction: "Mix with 250ml warm water 45 minutes before sleep for gentle unwinding.",
      },
    ],
    theme: {
      accent: "#9C6E82",
      tint: "lavender",
      borderAccent: "#EAE6F4",
    },
    images: {
      main: "/images/products/hormone-balance-duo.jpg",
      alt: "SOUL THEORY Everyday and Womens Balance Duo",
    },
    available: false,
    status: "coming-soon",
    tags: ["Women's Health", "Hormone Balance", "Sleep", "Magnesium"],
    seo: {
      title: "Everyday & Women's Balance Duo | SOUL THEORY",
      description: "Dual-formula botanical drink for cyclical comfort and restorative evening calm. Gentle, clean, vegan.",
    },
    faqs: [
      {
        question: "Does this contain synthetic hormones?",
        answer: "No. This formula contains zero hormones. It is a 100% plant-based dietary supplement utilizing gentle herbs, magnesium, and amino acids.",
      },
      {
        question: "Can I take this while pregnant or breastfeeding?",
        answer: "Please consult with your obstetrician or qualified healthcare professional before taking any new supplement while pregnant or nursing.",
      },
    ],
    regulatoryNotice: "Dietary supplement. Not for medicinal use. Not intended to diagnose, treat, or cure PCOS or any hormone condition. TODO(client): Complete legal and FSSAI review of claims.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getLaunchedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.available);
}

export function getComingSoonProducts(): Product[] {
  return PRODUCTS.filter((p) => !p.available);
}
