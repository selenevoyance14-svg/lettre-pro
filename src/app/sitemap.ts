import { toIsoDate } from "./lib/dates";
import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/blogData";
import { letterTemplates } from "./modeles/lettersData";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lettre-pro.fr";
    const pages = ["", "/modeles", "/motivation", "/officielle", "/blog", "/mentions-legales", "/affiliation", "/affiliation-amazon", "/confidentialite", "/cgv", "/a-propos", "/contact"];
    const staticPages = pages.map((path) => ({
        url: `${base}${path}`,
        lastModified: new Date(["", "/modeles", "/motivation", "/officielle", "/blog"].includes(path) ? "2026-11-10" : ["/a-propos", "/contact"].includes(path) ? "2026-11-06" : "2026-10-14"),
        changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
        priority: path === "" ? 1 : path === "/modeles" ? .9 : .8,
    }));
    const articles = blogArticles.map((article) => ({
        url: `${base}/blog/${article.slug}`,
        lastModified: new Date(article.updatedAt || article.publishedAt || toIsoDate(article.date)),
        changeFrequency: "monthly" as const,
        priority: .7,
    }));
    const templates = letterTemplates.map((template) => ({
        url: `${base}/modeles/${template.slug}`,
        lastModified: new Date(toIsoDate(template.updatedAt)),
        changeFrequency: "monthly" as const,
        priority: .85,
    }));
    return [...staticPages, ...templates, ...articles];
}
