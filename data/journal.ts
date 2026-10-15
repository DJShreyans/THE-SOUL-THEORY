export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: "Fitness" | "Hydration" | "Nutrition" | "Habits" | "Women's Wellness";
  readingTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  relatedProductSlugs: string[];
  content: string; // Structured markdown-style content
  nutritionistReviewStatus: string;
}

export const ARTICLES: JournalArticle[] = [
  {
    slug: "creatine-101-science-and-myths",
    title: "Creatine 101: What It Is, Who It’s For, and Why Myths Persist",
    category: "Fitness",
    readingTime: "5 min read",
    publishedAt: "October 10, 2026",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Lead Formulation Scientist",
      avatar: "/images/journal/author-ananya.jpg",
    },
    coverImage: "/images/products/creatine-blueberry-cloud.jpg",
    relatedProductSlugs: ["creatine-blueberry-cloud", "creatine-lychee-rose"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "Creatine is among the most clinically researched ergogenic aids in sports science. Here is the straightforward biochemical reality behind cellular energy, muscle hydration, and cognitive performance.",
    content: `
## The Biochemistry of ATP: How Your Muscles Actually Power Up

Every physical movement—from lifting a kettlebell to sprinting for a metro train—is powered by adenosine triphosphate (ATP). The problem is that skeletal muscle can only store enough ATP for roughly 2 to 3 seconds of high-intensity effort.

When ATP loses one of its phosphate groups to release energy, it degrades into adenosine diphosphate (ADP). To fire again, ADP must urgently find another high-energy phosphate molecule. This is where phosphocreatine steps in.

By supplementing with pure creatine monohydrate, you increase cellular phosphocreatine reserves in muscle tissue by 20% to 40%. The result? Rapid ADP-to-ATP recycling, allowing you to sustain explosive power, complete additional reps, and recover between sets significantly faster.

## Debunking the Three Big Myths

### Myth 1: Creatine causes puffy bloating and weight gain
The water retention associated with creatine occurs *inside* the muscle cells (intracellular hydration), not beneath the skin (subcutaneous water). Intracellular water increases cellular volume, triggering protein synthesis and creating a firmer, fuller muscle appearance.

### Myth 2: It is only useful for male bodybuilders
Creatine is not gender-specific. Women naturally store 70% to 80% lower endogenous creatine levels than men and consume fewer dietary animal proteins on average. Clinical studies indicate that women who supplement with creatine experience marked improvements in strength, lean tissue preservation, and bone density without unwanted bulk.

### Myth 3: You need an intense 20-gram loading phase
While a loading phase (20g daily for 5–7 days) saturates muscle tissue slightly faster, it can occasionally cause digestive sensitivity. Taking a steady maintenance dosage of 3–5g daily achieves the exact same muscular saturation within 28 days with zero stomach distress.

## Emerging Research: Creatine for the Brain

Skeletal muscle isn't the only tissue that demands rapid ATP turnover. The human brain accounts for approximately 20% of your body's total energy expenditure. Neuroimaging trials show that creatine supplementation supports cognitive stamina, working memory, and focus—especially during periods of sleep deprivation or mental fatigue.

*Disclaimer: This article is for educational purposes only and is not medical advice. Consult a healthcare practitioner before starting any new dietary supplement.*
    `,
  },
  {
    slug: "why-electrolytes-matter-beyond-the-gym",
    title: "Why Electrolytes Matter Far Beyond the Gym",
    category: "Hydration",
    readingTime: "4 min read",
    publishedAt: "October 06, 2026",
    author: {
      name: "Rohan Varma",
      role: "Head of Sports Nutrition",
      avatar: "/images/journal/author-rohan.jpg",
    },
    coverImage: "/images/products/hydration-watermelon-lime.jpg",
    relatedProductSlugs: ["hydration-watermelon-lime", "hydration-blue-lagoon-citrus"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "Ever drank 3 litres of plain water and still felt sluggish, lightheaded, or plagued by an afternoon headache? Here is why water alone isn't enough for true cellular hydration.",
    content: `
## The Osmotic Balance Equation

We have all heard the standard advice: "Drink 8 to 10 glasses of water a day." Yet thousands of people diligently carry giant water bottles everywhere and still suffer from afternoon fatigue, brain fog, and muscle tension.

The biological truth is simple: **hydration is not merely the volume of water you drink, but the mineral balance that allows water to enter your cells.**

Your cells maintain an electrochemical gradient across their membranes. This electrical potential governs muscle contractions, nerve transmissions, cardiac rhythm, and fluid uptake. The drivers of this pump are essential electrolytes: Sodium ($Na^+$), Potassium ($K^+$), Magnesium ($Mg^{2+}$), and Chloride ($Cl^-$).

## The Dilution Trap: When Too Much Plain Water Backfires

When you drink excessive plain filtered water throughout a hot Indian afternoon without replenishing essential bio-salts, your blood plasma sodium concentration drops. The kidneys respond by eliminating fluids rapidly to preserve electrolyte concentration—meaning you spend all day running to the restroom while your cells remain thirsty.

Symptoms of mild electrolyte imbalance include:
- Dull midday headaches not resolved by caffeine
- Afternoon lethargy and lack of focus
- Involuntary muscle twitches or calf cramps
- Craving salty snacks at 4 PM

## The Synergy of Vitamins with Bio-Salts

When formulating SOUL THEORY Hydration, we deliberately combined clinical electrolyte ratios with antioxidant Vitamin C and methylated B-vitamins. 

Electrolytes open the cellular transport gates, while Vitamin C shields cell membranes from oxidative stress, and B-vitamins facilitate the conversion of cellular nutrients into active ATP.

Hydration isn't an isolated post-marathon drink. It is an everyday cognitive and physiological baseline.
    `,
  },
  {
    slug: "prebiotic-fibre-explained-simply",
    title: "Prebiotic Fibre, Explained Simply: Nourishing Your Inner Ecosystem",
    category: "Nutrition",
    readingTime: "6 min read",
    publishedAt: "September 28, 2026",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Lead Formulation Scientist",
      avatar: "/images/journal/author-ananya.jpg",
    },
    coverImage: "/images/products/prebiotic-honey-peach-lavender.jpg",
    relatedProductSlugs: ["prebiotic-honey-peach-lavender", "prebiotic-valencia-orange"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "Probiotics get all the marketing headlines, but without prebiotics, beneficial bacteria cannot survive. Discover how soluble fibre fuels your gut-brain axis.",
    content: `
## Probiotics vs. Prebiotics: The Garden Analogy

Think of your gastrointestinal microbiome as an ancient, intricate botanical garden containing over 100 trillion living microorganisms. 

- **Probiotics** are the live beneficial seeds you plant into the soil.
- **Prebiotics** are the rich compost, sunlight, and organic nourishment required for those seeds to take root and flourish.

If you swallow billions of live probiotic bacteria every morning without supplying them with indigestible prebiotic soluble fibre, the majority will pass straight through your digestive tract without establishing stable colonies.

## Short-Chain Fatty Acids: The True Miracles of Fermentation

When soluble fibres like chicory inulin and partially hydrolyzed guar gum reach your large intestine intact, your resident *Bifidobacterium* and *Lactobacillus* species ferment them. This fermentation generates crucial postbiotic byproducts called **Short-Chain Fatty Acids (SCFAs)**, predominantly:

1. **Butyrate:** The primary fuel source for colonocytes (the cells lining your gut wall), essential for sealing tight junctions and preventing intestinal permeability.
2. **Acetate:** Enters the bloodstream to regulate cholesterol metabolism and peripheral tissue energy.
3. **Propionate:** Travels to the liver to help regulate gluconeogenesis and satiety hormones.

## The Gut-Brain Connection

Did you know that over 90% of your body's serotonin receptors and 70% of your immune system cells are situated along the mucosal lining of your gut?

When beneficial bacteria thrive on clean prebiotic nutrition, inflammatory cytokines decrease and vagus nerve signalling improves, supporting balanced moods, clearer skin, and robust daily vitality.
    `,
  },
  {
    slug: "building-a-hydration-habit-that-sticks",
    title: "Building a Hydration Habit That Sticks: The Science of Daily Consistency",
    category: "Habits",
    readingTime: "4 min read",
    publishedAt: "September 19, 2026",
    author: {
      name: "Rohan Varma",
      role: "Head of Sports Nutrition",
      avatar: "/images/journal/author-rohan.jpg",
    },
    coverImage: "/images/products/hydration-pink-guava-strawberry.jpg",
    relatedProductSlugs: ["hydration-pink-guava-strawberry", "hydration-watermelon-lime"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "Willpower is an unreliable engine for health. Learn how habit stacking, visual cues, and flavour anticipation turn hydration into a seamless daily ritual.",
    content: `
## Why Willpower Fails Health Goals

Most wellness advice sounds like an authoritarian chore: "Track every millilitre," "Force yourself to drink 4 litres," "Push through the bland taste."

Behavioural psychology consistently proves that routines driven solely by grit and discipline decay within three weeks. Lasting health habits rely on three neurochemical pillars: **an immediate environmental cue, low friction to start, and an immediate sensory reward.**

## The Three-Step Ritual Framework

### 1. Habit Stacking (The Anchor)
Never create a habit in a vacuum. Tie your new hydration action to an unbreakable existing anchor in your morning schedule.
- *Example:* "Right after I turn off my morning alarm and step into the kitchen, I will pour 400ml of cold water into my glass."

### 2. Eliminating Friction
If your supplements are tucked away in a closed cupboard, hidden behind pantry spices, your brain's basal ganglia will choose the path of least resistance. Keep your aesthetic SOUL THEORY jar directly on your desk, kitchen island, or gym bag where it catches the morning light.

### 3. Sensory Anticipation
Our taste buds and olfactory receptors trigger dopamine release before we even take our first sip. When a health drink tastes like fresh crushed watermelon and lime or subtle pink guava, hydration transitions from a medicinal chore into an enjoyable sensory pause during a hectic day.
    `,
  },
  {
    slug: "consistency-over-perfection-realistic-routines",
    title: "Consistency Over Perfection: Why Realistic Routines Win Every Time",
    category: "Habits",
    readingTime: "5 min read",
    publishedAt: "September 12, 2026",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Lead Formulation Scientist",
      avatar: "/images/journal/author-ananya.jpg",
    },
    coverImage: "/images/products/creatine-lychee-rose.jpg",
    relatedProductSlugs: ["creatine-blueberry-cloud", "hydration-watermelon-lime"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "The wellness industry thrives on 30-day detoxes and extreme transformations. At SOUL THEORY, we believe the 80% habit maintained for five years beats the 100% plan abandoned in two weeks.",
    content: `
## The Toxic Myth of the 'Clean Reset'

Modern wellness culture is obsessed with extremes: 5 AM cold plunges, 14-supplement morning protocols, zero-carb deprivations, and grueling two-hour training splits.

Yet research on behavioral sustainability reveals that extreme regimens suffer an 85% abandonment rate within the first month. When people inevitably miss one workout or eat a slice of cake at a friend's birthday, the 'all-or-nothing' cognitive distortion triggers total surrender.

## The Power of the Minimal Effective Dose

In pharmacology and exercise science, the **Minimal Effective Dose (MED)** is the smallest amount of an intervention that produces the desired biological adaptation.

You don't need a 2-hour workout to trigger muscular adaptation—25 minutes of progressive resistance training three times weekly yields 80% of peak physical longevity benefits.

Similarly, you don't need an unpronounceable cocktail of 20 experimental herbs. What produces compound health over decades are basic, non-negotiable foundations:
- Sufficient pure water and electrolytes
- 1.6g of protein per kg of bodyweight
- Clinically validated creatine monohydrate
- 25g to 30g of prebiotic dietary fibre
- Consistent 7 to 8 hours of sleep

## "We are not here to sell perfection"

Our brand mantra is simple: **Wellness, rethought.** We design our products to fit into real lives—the student pulling late study sessions, the corporate professional navigating back-to-back client calls, the parent balancing family and fitness.

Make feeling good a daily ritual, celebrate small wins, and let consistency compound.
    `,
  },
  {
    slug: "reading-a-supplement-label-like-a-pro",
    title: "Reading a Supplement Label Like a Pro: Transparency, Dosages, and Fillers",
    category: "Nutrition",
    readingTime: "6 min read",
    publishedAt: "September 02, 2026",
    author: {
      name: "Rohan Varma",
      role: "Head of Sports Nutrition",
      avatar: "/images/journal/author-rohan.jpg",
    },
    coverImage: "/images/products/hydration-blue-lagoon-citrus.jpg",
    relatedProductSlugs: ["creatine-blueberry-cloud", "hydration-blue-lagoon-citrus"],
    nutritionistReviewStatus: "TODO(client): review by a qualified nutritionist before final launch",
    excerpt:
      "Proprietary blends, fairy dusting, and hidden artificial sugars—how to read Indian supplement labels with a critical eye and protect your wallet.",
    content: `
## The 'Proprietary Blend' Loophole

Have you ever picked up a supplement bottle and seen a bold header titled *"Ultra Power Performance Matrix: 5,000mg"*, followed by a list of 12 impressive-sounding ingredients with zero individual milligram disclosures?

This is commonly known in the supplement trade as 'fairy dusting'. A manufacturer might include 4,800mg of inexpensive maltodextrin or creatine, while sprinkling 10mg of expensive adaptogens or amino acids—just enough to legally list them on the front of the packaging, but vastly below any clinically effective dosage.

**Rule 1: Never purchase a supplement that conceals individual active ingredient weights behind a proprietary blend.**

## Beware the Maltodextrin Bulking Agents

Examine the *Other Ingredients* section at the very bottom of the label. In many powdered drink mixes in India, up to 40% of the scoop weight consists of:
- Maltodextrin (a carbohydrate with a glycemic index higher than table sugar)
- Artificial red dyes (Allura Red AC / Red 40)
- Artificial blue dyes (Brilliant Blue FCF)
- Titanium dioxide (E171 whitening agent)

At SOUL THEORY, our powders are bulk-free. Every milligram of scoop weight is dedicated to either active ergogenic compounds, mineral bio-salts, or natural botanical fruit flavourings.

## Verification: NABL Third-Party Lab Testing

In India, an FSSAI license is the fundamental statutory entry requirement, but premium brands go further by subjecting production batches to NABL-accredited third-party laboratory verification.

Always look for:
- Batch-specific Certificates of Analysis (CoA)
- Heavy metal screening (Lead, Mercury, Cadmium, Arsenic)
- Free of banned microbial pathogens (Salmonella, E. coli)

Demand transparency from the brands you put into your body.
    `,
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): JournalArticle[] {
  return ARTICLES.filter((a) => a.category === category);
}
