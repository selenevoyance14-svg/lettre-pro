import type { Metadata } from "next";
import { blogArticles } from "./blogData";

export const metadata: Metadata = {
    title: "Blog — Conseils lettres de motivation & lettres officielles | Lettre Pro",
    description: "Guides, modèles et conseils pour rédiger vos lettres de motivation, résiliations, réclamations et mises en demeure. Articles gratuits et pratiques.",
};

export default function BlogPage() {
    return (
        <>
            {/* HEADER */}
            <section className="bg-gradient-to-br from-pro-950 to-pro-800 text-white py-14 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">📚</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
                        Nos guides et conseils
                    </h1>
                    <p className="text-pro-200 text-lg max-w-xl mx-auto">
                        Tout ce qu&apos;il faut savoir pour rédiger vos lettres, défendre vos droits et réussir vos candidatures.
                    </p>
                </div>
            </section>

            {/* ARTICLES */}
            <section className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {blogArticles.map((article) => (
                            <a
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{article.icon}</span>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.tagColor}`}>
                                            {article.tag}
                                        </span>
                                    </div>
                                    <h2 className="font-heading font-bold text-gray-900 text-lg mb-2 group-hover:text-pro-600 transition">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                                    <span>{article.date}</span>
                                    <span>📖 {article.readTime} de lecture</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA vers services payants */}
                    <div className="mt-16 bg-pro-50 rounded-2xl border border-pro-100 p-8 text-center">
                        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                            Pas envie d&apos;écrire vous-même ?
                        </h2>
                        <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                            Notre IA rédige votre lettre personnalisée en quelques minutes. Plus besoin de chercher les bons mots.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a href="/motivation" className="btn-primary">
                                📄 Lettre de motivation — 7€
                            </a>
                            <a href="/officielle" className="btn-secondary">
                                ⚖️ Lettre officielle — 5€
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
