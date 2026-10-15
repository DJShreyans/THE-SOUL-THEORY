export interface Category {
  slug: string;
  name: string;
  shortTitle: string;
  tagline: string;
  description: string;
  accentTint: "lavender" | "powder-blue" | "seafoam" | "soft-coral" | "ivory";
  iconName: string;
  launched: boolean;
  comingSoonNote?: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "performance-fitness",
    name: "Performance & Fitness",
    shortTitle: "Performance",
    tagline: "Better energy. Stronger you.",
    description:
      "Creatine and thoughtfully developed fitness essentials designed to power your training routines and daily strength.",
    accentTint: "lavender",
    iconName: "Dumbbell",
    launched: true,
  },
  {
    slug: "hydration",
    name: "Hydration & Daily Nutrition",
    shortTitle: "Hydration",
    tagline: "Hydration. Vitamins. Real fruit flavour.",
    description:
      "Daily electrolyte and essential vitamin combos designed to sustain hydration, cognitive focus, and vitality across busy days.",
    accentTint: "powder-blue",
    iconName: "Droplets",
    launched: true,
  },
  {
    slug: "nutrition",
    name: "Next-Generation Nutrition",
    shortTitle: "Next-Gen Nutrition",
    tagline: "Better gut. Stronger you.",
    description:
      "Functional gut fibre and innovative formats engineered for modern digestion and effortless daily micro-habits.",
    accentTint: "seafoam",
    iconName: "Sparkles",
    launched: false,
    comingSoonNote: "Prebiotic Gut Fibre and functional gels launching shortly. Join the waitlist for priority access.",
  },
  {
    slug: "womens-wellness",
    name: "Everyday & Women's Wellness",
    shortTitle: "Everyday Wellness",
    tagline: "Restore balance. Better you.",
    description:
      "Gentle cyclical balance blends and restorative morning-after resets designed around real modern routines.",
    accentTint: "soft-coral",
    iconName: "HeartPulse",
    launched: false,
    comingSoonNote: "Hormone Balance and Hangover Rescue lines are undergoing final regulatory certification. Register for first-batch alerts.",
  },
];
