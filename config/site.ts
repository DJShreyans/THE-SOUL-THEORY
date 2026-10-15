export interface SiteConfig {
  name: string;
  wordmark: string;
  subline: string;
  tagline: string;
  homepageHeadline: string;
  homepageSubcopy: string;
  url: string;
  currency: {
    code: string;
    symbol: string;
  };
  shipping: {
    freeThreshold: number;
    standardFee: number;
    codFee: number;
  };
  regulatory: {
    fssaiLicense: string;
    gstin: string;
    companyName: string;
    registeredAddress: string;
    grievanceEmail: string;
    grievancePhone: string;
    statutoryDisclaimer: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    hours: string;
    address: string;
  };
  features: {
    enableRazorpay: boolean;
    enableCod: boolean;
    enableWhatsappFloat: boolean;
    enableConsentBanner: boolean;
  };
  announcement: {
    enabled: boolean;
    message: string;
    link?: string;
  };
  links: {
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "SOUL THEORY",
  wordmark: "SOUL THEORY",
  subline: "SCIENCE × WELLNESS × YOU",
  tagline: "Wellness, rethought.",
  homepageHeadline: "Make feeling good a daily ritual.",
  homepageSubcopy:
    "Thoughtfully crafted wellness for the way you live today. Discover functional nutrition designed to bring more intention, enjoyment and consistency to your everyday routine.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://soultheory.in",
  currency: {
    code: "INR",
    symbol: "₹",
  },
  shipping: {
    freeThreshold: 999,
    standardFee: 80,
    codFee: 50,
  },
  regulatory: {
    // TODO(client): Replace with actual FSSAI Central License number
    fssaiLicense: "FSSAI Lic. No. 10024999000123 (Placeholder)",
    // TODO(client): Replace with registered GSTIN
    gstin: "27AABCS1234F1Z5 (Placeholder)",
    companyName: "Soul Theory Wellness Private Limited",
    registeredAddress:
      "Unit 402, Signature Towers, Bandra Kurla Complex, Mumbai, MH 400051, India",
    grievanceEmail: "care@soultheory.in",
    grievancePhone: "+91 (022) 6890-4100",
    statutoryDisclaimer:
      "Dietary supplement. Not for medicinal use. These statements have not been evaluated by the Food Safety and Standards Authority of India (FSSAI). This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use if pregnant, nursing, taking medication, or under 18 years of age.",
  },
  contact: {
    email: "care@soultheory.in",
    phone: "+91 (022) 6890-4100",
    whatsappNumber: "+919876543210",
    hours: "Monday – Saturday: 9:30 AM to 6:30 PM IST",
    address: "Bandra Kurla Complex, Mumbai 400051, India",
  },
  features: {
    enableRazorpay: true,
    enableCod: true,
    enableWhatsappFloat: true,
    enableConsentBanner: true,
  },
  announcement: {
    enabled: true,
    message: "Welcome to SOUL THEORY • Free nationwide shipping on orders over ₹999 • All natural flavours",
    link: "/shop",
  },
  links: {
    instagram: "https://instagram.com/soultheorywellness",
    twitter: "https://twitter.com/soultheoryin",
    linkedin: "https://linkedin.com/company/soultheory",
  },
};
