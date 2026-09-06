import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "../blogData";
import { letterTemplates } from "../../modeles/lettersData";

interface Props {
    params: { slug: string };
}

function compactTitle(title: string): string {
    if (title.length <= 62) return title;
    const beforeSeparator = title.split(/\s[:—]\s|:/)[0].trim();
    if (beforeSeparator.length >= 30 && beforeSeparator.length <= 62) return beforeSeparator;
    const shortened = title.replace(/^Comment\s+/i, "").slice(0, 61);
    const lastSpace = shortened.lastIndexOf(" ");
    return `${shortened.slice(0, lastSpace > 42 ? lastSpace : 58).trim()}…`;
}

export async function generateStaticParams() {
    return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = blogArticles.find((a) => a.slug === params.slug);
    if (!article) return {};
    const brandedTitle = `${article.title} | Lettre Pro`;
    return {
        title: { absolute: brandedTitle.length <= 68 ? brandedTitle : compactTitle(article.title) },
        description: article.description,
        alternates: { canonical: `/blog/${article.slug}` },
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            locale: "fr_FR",
            url: `https://lettre-pro.fr/blog/${article.slug}`,
            images: [{ url: "/og.png", width: 1200, height: 630, alt: article.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
            images: ["/og.png"],
        },
    };
}

function renderMarkdown(content: string) {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    function flushTable() {
        if (tableHeaders.length > 0) {
            elements.push(
                <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                {tableHeaders.map((h, i) => (
                                    <th key={i} className="text-left py-2 px-3 font-semibold text-gray-700">{h.trim()}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row, i) => (
                                <tr key={i} className="border-b border-gray-100">
                                    {row.map((cell, j) => (
                                        <td key={j} className="py-2 px-3 text-gray-600">{cell.trim()}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        tableHeaders = [];
        tableRows = [];
        inTable = false;
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Table detection
        if (line.startsWith('|') && line.endsWith('|')) {
            const cells = line.split('|').filter(c => c.trim() !== '');
            if (!inTable) {
                inTable = true;
                tableHeaders = cells;
            } else if (cells.every(c => /^[-:\s]+$/.test(c))) {
                continue; // separator row
            } else {
                tableRows.push(cells);
            }
            continue;
        } else if (inTable) {
            flushTable();
        }

        if (line.startsWith('### ')) {
            elements.push(<h3 key={i} className="font-heading font-bold text-gray-900 text-lg mt-8 mb-3">{line.slice(4)}</h3>);
        } else if (line.startsWith('## ')) {
            elements.push(<h2 key={i} className="font-heading font-bold text-gray-900 text-xl mt-10 mb-4">{line.slice(3)}</h2>);
        } else if (line.startsWith('- ')) {
            elements.push(
                <li key={i} className="text-gray-600 text-sm leading-relaxed ml-4 list-disc"
                    dangerouslySetInnerHTML={{ __html: formatInline(line.slice(2)) }}
                />
            );
        } else if (/^\d+\.\s/.test(line)) {
            elements.push(
                <li key={i} className="text-gray-600 text-sm leading-relaxed ml-4 list-decimal"
                    dangerouslySetInnerHTML={{ __html: formatInline(line.replace(/^\d+\.\s/, '')) }}
                />
            );
        } else if (line.startsWith('⚠️') || line.startsWith('❌') || line.startsWith('✅')) {
            elements.push(
                <p key={i} className="text-gray-700 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatInline(line) }}
                />
            );
        } else if (line.trim() === '') {
            elements.push(<div key={i} className="h-2" />);
        } else {
            elements.push(
                <p key={i} className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatInline(line) }}
                />
            );
        }
    }
    if (inTable) flushTable();

    return elements;
}

function formatInline(text: string): string {
    return text
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_match, label: string, url: string) => {
            const isAmazon = /^https:\/\/(?:www\.)?amazon\.fr\//i.test(url) || /^https:\/\/amzn\.to\//i.test(url);
            const rel = isAmazon ? "sponsored noopener noreferrer" : "noopener noreferrer";
            return `<a href="${url}" target="_blank" rel="${rel}" class="text-pro-700 underline decoration-pro-300 underline-offset-2 hover:text-pro-900">${label}</a>`;
        })
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-800 font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em class="text-gray-500 italic">$1</em>');
}

function frenchDateToIso(date: string): string {
    const months: Record<string, string> = {
        janvier: "01", février: "02", mars: "03", avril: "04", mai: "05", juin: "06",
        juillet: "07", août: "08", septembre: "09", octobre: "10", novembre: "11", décembre: "12",
    };
    const [day, month, year] = date.toLowerCase().split(" ");
    return `${year}-${months[month]}-${day.padStart(2, "0")}`;
}

function normalizeWords(value: string): string[] {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 4 && !["lettre", "modele", "modeles", "guide", "gratuit"].includes(word));
}

function getRelatedModels(title: string, slug: string, ctaHref: string) {
    const articleWords = new Set([...normalizeWords(title), ...normalizeWords(slug)]);
    const preferredCategory = ctaHref === "/motivation" ? "motivation" : ctaHref === "/officielle" ? "officielle" : undefined;
    const ranked = letterTemplates
        .map((template) => {
            const words = normalizeWords(`${template.title} ${template.slug} ${template.tag}`);
            const score = words.reduce((total, word) => total + (articleWords.has(word) ? 1 : 0), 0);
            return { template, score: score + (preferredCategory === template.category ? 0.25 : 0) };
        })
        .sort((a, b) => b.score - a.score || a.template.title.localeCompare(b.template.title, "fr"));
    return ranked.slice(0, 3).map(({ template }) => template);
}

function getOfficialSources(slug: string) {
    const sources = [{ label: "Service-Public.fr", href: "https://www.service-public.fr/" }];
    if (/amende|pv|contestation/.test(slug)) sources.push({ label: "ANTAI", href: "https://www.antai.gouv.fr/" });
    if (/travail|emploi|licenciement|demission|salaire|formation|harcelement|conge/.test(slug)) sources.push({ label: "Code du travail numérique", href: "https://code.travail.gouv.fr/" });
    if (/droit|recours|demeure|litige|reclamation|resiliation|facture|logement|proprietaire|preavis/.test(slug)) sources.push({ label: "Légifrance", href: "https://www.legifrance.gouv.fr/" });
    return sources;
}

export default function BlogArticlePage({ params }: Props) {
    const article = blogArticles.find((a) => a.slug === params.slug);
    if (!article) notFound();

    const relatedModels = getRelatedModels(article.title, article.slug, article.cta.href);
    const relatedArticles = blogArticles.filter((item) => item.slug !== article.slug && item.tag === article.tag).slice(0, 3);
    const officialSources = getOfficialSources(article.slug);

    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `https://lettre-pro.fr/blog/${article.slug}#article`,
                headline: article.title,
                description: article.description,
                image: "https://lettre-pro.fr/og.png",
                datePublished: frenchDateToIso(article.date),
                dateModified: frenchDateToIso(article.updatedAt ?? article.date),
                inLanguage: "fr-FR",
                mainEntityOfPage: { "@id": `https://lettre-pro.fr/blog/${article.slug}` },
                author: { "@id": "https://lettre-pro.fr/a-propos#nathalie-lebrun" },
                publisher: { "@id": "https://lettre-pro.fr/#organization" },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://lettre-pro.fr/" },
                    { "@type": "ListItem", position: 2, name: "Guides", item: "https://lettre-pro.fr/blog" },
                    { "@type": "ListItem", position: 3, name: article.title, item: `https://lettre-pro.fr/blog/${article.slug}` },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            {/* HEADER */}
            <section className="bg-gradient-to-br from-pro-950 to-pro-800 text-white py-14 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-4xl">{article.icon}</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${article.tagColor}`}>
                            {article.tag}
                        </span>
                    </div>
                    <h1 className="font-heading text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                        {article.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-pro-300">
                        <span>Publié le {article.date}</span>
                        <span>·</span>
                        <span>📖 {article.readTime} de lecture</span>
                    </div>
                    {article.updatedAt && <p className="mt-3 text-center text-xs text-pro-200">Vérifié et mis à jour le {article.updatedAt}</p>}
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <section className="py-14 sm:py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <article className="space-y-1">
                        {renderMarkdown(article.content)}
                    </article>

                    <aside className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-600">
                        <strong className="block text-gray-900">Rédaction et vérification</strong>
                        <p className="mt-2">
                            Article rédigé et relu par <Link href="/a-propos" className="font-semibold text-pro-700 underline underline-offset-2">Nathalie Lebrun</Link>. Les informations générales sont vérifiées à la date indiquée ci-dessus. Pour une démarche sensible, contrôlez toujours les règles applicables sur le site officiel concerné ou auprès d’un professionnel.
                        </p>
                        <p className="mt-3">Sources officielles à consulter pour vérifier les règles applicables :</p>
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                            {officialSources.map((source) => (
                                <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-pro-700 underline underline-offset-2">{source.label}</a></li>
                            ))}
                        </ul>
                    </aside>

                    <section className="mt-12" aria-labelledby="modeles-associes">
                        <h2 id="modeles-associes" className="font-heading text-2xl font-bold text-gray-900">Modèles de lettres associés</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {relatedModels.map((template) => (
                                <Link key={template.slug} href={`/modeles/${template.slug}`} className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-pro-700 hover:border-pro-300">
                                    {template.shortTitle} →
                                </Link>
                            ))}
                        </div>
                    </section>

                    {relatedArticles.length > 0 && (
                        <section className="mt-12" aria-labelledby="guides-associes">
                            <h2 id="guides-associes" className="font-heading text-2xl font-bold text-gray-900">Guides complémentaires</h2>
                            <ul className="mt-4 space-y-3">
                                {relatedArticles.map((item) => (
                                    <li key={item.slug}><Link href={`/blog/${item.slug}`} className="font-semibold text-pro-700 underline decoration-pro-200 underline-offset-4">{item.title}</Link></li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {article.content.includes("amazon.fr") && (
                        <aside className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                            <strong>Liens affiliés Amazon :</strong> certains liens de ce guide peuvent nous rapporter une commission, sans coût supplémentaire pour vous. Les recommandations restent sélectionnées pour leur pertinence.
                            {" "}<a href="/affiliation-amazon" className="font-semibold underline underline-offset-2">En savoir plus</a>
                        </aside>
                    )}

                    {/* CTA intégré */}
                    <div className="mt-12 bg-gradient-to-br from-pro-600 to-pro-700 rounded-2xl p-8 text-center text-white">
                        <div className="text-3xl mb-3">{article.icon}</div>
                        <h3 className="font-heading text-xl font-bold mb-2">
                            Utilisez un modèle gratuit
                        </h3>
                        <p className="text-pro-100 text-sm mb-6 max-w-md mx-auto">
                            Copiez un modèle adapté, personnalisez les champs et vérifiez les informations avant l&apos;envoi.
                        </p>
                        <a href={article.cta.href} className="btn-accent text-base">
                            {article.cta.text}
                        </a>
                    </div>

                    {/* Navigation retour */}
                    <div className="mt-8 text-center">
                        <a href="/blog" className="text-sm text-gray-400 hover:text-pro-600 transition">
                            ← Retour aux articles
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
