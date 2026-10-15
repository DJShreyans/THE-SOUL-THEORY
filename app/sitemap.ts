import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/shop",
    "/philosophy",
    "/journal",
    "/contact",
    "/track-order",
    "/policies/privacy",
    "/policies/terms",
    "/policies/shipping",
    "/policies/refund",
    "/policies/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/shop" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/shop" ? 0.9 : 0.7,
  }));

  // Categories
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/shop/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Products
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: product.available ? 0.9 : 0.6,
  }));

  // Journal Articles
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...articleRoutes];
}
