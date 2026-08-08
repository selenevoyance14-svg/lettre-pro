import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lettre-pro.fr";
    const pages = ["", "/modeles", "/motivation", "/officielle", "/blog", "/mentions-legales", "/affiliation-amazon", "/confidentialite"];
    const staticPages = pages.map((path) => ({
        url: `${base}${path}`,
        lastModified: new Date("2026-07-30"),
        changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
        priority: path === "" ? 1 : path === "/modeles" ? .9 : .8,
    }));
    const articles = blogArticles.map((article) => ({
        url: `${base}/blog/${article.slug}`,
        lastModified: new Date("2026-07-30"),
        changeFrequency: "monthly" as const,
        priority: .7,
    }));
    return [...staticPages, ...articles];
}
