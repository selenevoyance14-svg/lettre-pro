import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "../blogData";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = blogArticles.find((a) => a.slug === params.slug);
    if (!article) return {};
    return {
        title: `${article.title} — Lettre Pro`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            locale: "fr_FR",
            url: `https://lettre-pro.fr/blog/${article.slug}`,
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
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-800 font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em class="text-gray-500 italic">$1</em>');
}

export default function BlogArticlePage({ params }: Props) {
    const article = blogArticles.find((a) => a.slug === params.slug);
    if (!article) notFound();

    return (
        <>
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
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>📖 {article.readTime} de lecture</span>
                    </div>
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <section className="py-14 sm:py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <article className="space-y-1">
                        {renderMarkdown(article.content)}
                    </article>

                    {/* CTA intégré */}
                    <div className="mt-12 bg-gradient-to-br from-pro-600 to-pro-700 rounded-2xl p-8 text-center text-white">
                        <div className="text-3xl mb-3">{article.icon}</div>
                        <h3 className="font-heading text-xl font-bold mb-2">
                            Pas envie d&apos;écrire vous-même ?
                        </h3>
                        <p className="text-pro-100 text-sm mb-6 max-w-md mx-auto">
                            Notre IA rédige votre lettre personnalisée en quelques minutes, avec les bonnes formulations et références juridiques.
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
