import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/blogData";
import { letterTemplates } from "./modeles/lettersData";

const frenchMonths: Record<string, string> = {
    janvier: "01", février: "02", mars: "03", avril: "04", mai: "05", juin: "06",
    juillet: "07", août: "08", septembre: "09", octobre: "10", novembre: "11", décembre: "12",
};

function frenchDateToIso(date: string): string {
    const [day, month, year] = date.toLowerCase().split(" ");
    return `${year}-${frenchMonths[month]}-${day.padStart(2, "0")}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://lettre-pro.fr";
    const pages = ["", "/modeles", "/motivation", "/officielle", "/blog", "/a-propos", "/contact", "/mentions-legales", "/affiliation-amazon", "/confidentialite", "/cgv"];
    const staticPages = pages.map((path) => ({
        url: `${base}${path}`,
        changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
        priority: path === "" ? 1 : path === "/modeles" ? .9 : .8,
    }));
    const articles = blogArticles.map((article) => ({
        url: `${base}/blog/${article.slug}`,
        lastModified: new Date(frenchDateToIso(article.updatedAt ?? article.date)),
        changeFrequency: "monthly" as const,
        priority: .7,
    }));
    const templates = letterTemplates.map((template) => ({
        url: `${base}/modeles/${template.slug}`,
        lastModified: new Date(frenchDateToIso(template.updatedAt)),
        changeFrequency: "monthly" as const,
        priority: .85,
    }));
    return [...staticPages, ...templates, ...articles];
}
