import type { Metadata } from "next";
import Link from "next/link";
import { letterTemplates } from "./lettersData";

export const metadata: Metadata = {
    title: "Modèles de lettres gratuits",
    description: "Bibliothèque de modèles gratuits : motivation, résiliation, réclamation, mise en demeure, contestation, banque et logement.",
    alternates: { canonical: "/modeles" },
};

const popularSlugs = [
    "lettre-demission-cdi",
    "lettre-preavis-logement-1-mois",
    "lettre-resiliation-assurance-habitation",
    "lettre-motivation-candidature-spontanee",
];

const collections = [
    { title: "Emploi & candidature", icon: "✦", tags: ["Emploi", "Études", "Reconversion"], text: "Postuler, quitter un poste ou faire évoluer son parcours." },
    { title: "Logement", icon: "⌂", tags: ["Logement"], text: "Donner son préavis ou demander une intervention au bailleur." },
    { title: "Résiliation & assurance", icon: "↗", tags: ["Résiliation", "Assurance"], text: "Mettre fin à un contrat avec une demande datée et traçable." },
    { title: "Réclamation & contestation", icon: "§", tags: ["Litige", "Contestation", "Banque"], text: "Exposer les faits, joindre les preuves et demander une solution." },
];

export default function ModelesPage() {
    const popular = popularSlugs
        .map((slug) => letterTemplates.find((template) => template.slug === slug))
        .filter((template): template is (typeof letterTemplates)[number] => Boolean(template));

    return (
        <>
            <header className="lp-hero !py-16 sm:!py-20">
                <div className="lp-shell grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                    <div>
                        <span className="lp-eyebrow">Bibliothèque gratuite · sans compte</span>
                        <h1 className="!max-w-4xl">Le bon modèle pour <em>passer à l’action.</em></h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
                            Choisissez votre situation, personnalisez les passages entre crochets, puis copiez, téléchargez ou imprimez votre lettre.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 rounded-2xl border border-pro-100 bg-white/80 p-4 shadow-sm backdrop-blur">
                        <div className="min-w-28 rounded-xl bg-pro-50 p-4 text-center"><strong className="block text-3xl text-pro-700">{letterTemplates.length}</strong><span className="text-xs font-semibold text-gray-500">modèles</span></div>
                        <div className="min-w-28 rounded-xl bg-emerald-50 p-4 text-center"><strong className="block text-3xl text-emerald-700">0 €</strong><span className="text-xs font-semibold text-gray-500">sans inscription</span></div>
                    </div>
                </div>
            </header>

            <section className="border-b border-gray-100 bg-white py-12 sm:py-16">
                <div className="lp-shell">
                    <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div><span className="lp-eyebrow">Les plus demandés</span><h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">Commencez par l’essentiel.</h2></div>
                        <span className="text-sm text-gray-500">Prêts à personnaliser en quelques minutes</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {popular.map((template, index) => (
                            <Link href={`/modeles/${template.slug}`} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-pro-300 hover:shadow-lg" key={template.slug}>
                                <span className="absolute right-4 top-3 font-heading text-5xl font-bold text-pro-50">0{index + 1}</span>
                                <span className="relative text-xs font-extrabold uppercase tracking-wider text-pro-600">{template.tag}</span>
                                <h3 className="relative mt-6 font-heading text-xl font-bold leading-tight text-gray-900 group-hover:text-pro-700">{template.shortTitle}</h3>
                                <span className="relative mt-7 block text-sm font-bold text-pro-700">Personnaliser →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lp-section bg-[#fbfaf6]">
                <div className="lp-shell">
                    <div className="lp-heading">
                        <div><span className="lp-eyebrow">Toutes les situations</span><h2>Choisissez votre démarche.</h2></div>
                        <p>Chaque page propose un texte original, les informations à vérifier et un éditeur gratuit utilisable immédiatement.</p>
                    </div>
                    <div className="space-y-10">
                        {collections.map((collection) => {
                            const templates = letterTemplates.filter((template) => collection.tags.includes(template.tag));
                            return (
                                <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8" key={collection.title}>
                                    <div className="mb-6 flex items-start gap-4 border-b border-gray-100 pb-5">
                                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pro-50 text-2xl text-pro-700">{collection.icon}</span>
                                        <div><h2 className="font-heading text-2xl font-bold text-gray-900">{collection.title}</h2><p className="mt-1 text-sm text-gray-500">{collection.text}</p></div>
                                        <span className="ml-auto hidden rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500 sm:block">{templates.length} modèles</span>
                                    </div>
                                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                        {templates.map((template) => (
                                            <Link key={template.slug} href={`/modeles/${template.slug}`} className="group rounded-xl border border-gray-100 bg-gray-50/70 p-5 transition hover:border-pro-200 hover:bg-pro-50">
                                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-pro-600">{template.tag}</span>
                                                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-gray-900 group-hover:text-pro-700">{template.shortTitle}</h3>
                                                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">{template.description}</p>
                                                <b className="mt-4 block text-xs text-pro-700">Ouvrir le modèle →</b>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="lp-section lp-section-alt">
                <div className="lp-shell max-w-3xl text-center">
                    <span className="lp-eyebrow">Besoin de contexte ?</span>
                    <h2 className="font-heading text-4xl font-bold my-4">Consultez nos guides avant l’envoi.</h2>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Délais, justificatifs, recommandé avec accusé de réception et formulations : les articles Lettre Pro vous aident à sécuriser votre démarche.
                    </p>
                    <Link href="/blog" className="lp-button lp-button-primary">Voir les guides pratiques →</Link>
                </div>
            </section>
        </>
    );
}
