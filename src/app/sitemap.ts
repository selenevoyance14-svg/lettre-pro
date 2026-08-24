import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/blogData";
import { letterTemplates } from "./modeles/lettersData";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lettre-pro.fr";
    const pages = ["", "/modeles", "/motivation", "/officielle", "/blog", "/a-propos", "/mentions-legales", "/affiliation-amazon", "/confidentialite", "/cgv"];
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
    const templates = letterTemplates.map((template) => ({
        url: `${base}/modeles/${template.slug}`,
        lastModified: new Date("2026-08-14"),
        changeFrequency: "monthly" as const,
        priority: .85,
    }));
    return [...staticPages, ...templates, ...articles];
}
