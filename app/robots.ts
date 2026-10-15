import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/order-confirmation", "/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
