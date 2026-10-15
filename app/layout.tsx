import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MiniCart } from "@/components/cart/MiniCart";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.homepageSubcopy,
  keywords: [
    "creatine monohydrate",
    "electrolytes India",
    "science-backed wellness",
    "hydration multivitamin",
    "prebiotic gut fibre",
    "functional nutrition",
    "clean supplements India",
  ],
  authors: [{ name: "SOUL THEORY Wellness" }],
  creator: "SOUL THEORY",
  publisher: "SOUL THEORY",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.homepageSubcopy,
    images: [
      {
        url: "/images/products/creatine-blueberry-cloud.jpg",
        width: 1024,
        height: 1024,
        alt: "SOUL THEORY Functional Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.homepageSubcopy,
    images: ["/images/products/creatine-blueberry-cloud.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/soul-theory-logo.jpg`,
    description: siteConfig.homepageSubcopy,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.regulatory.registeredAddress,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Support",
      email: siteConfig.contact.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-ivory text-ink selection:bg-sage selection:text-ivory">
        {/* Skip to Main Content Link for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sage text-ivory rounded-full text-xs font-semibold shadow-xl"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <MiniCart />
        <ConsentBanner />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
