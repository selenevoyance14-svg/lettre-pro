import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LetterEditor from "../../components/LetterEditor";
import { getLetterTemplate, letterTemplates } from "../lettersData";

interface Props { params: { slug: string } }

export function generateStaticParams() {
    return letterTemplates.map((template) => ({ slug: template.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const template = getLetterTemplate(params.slug);
    if (!template) return {};
    return {
        title: template.title,
        description: template.description,
        alternates: { canonical: `/modeles/${template.slug}` },
        openGraph: {
            title: template.title,
            description: template.description,
            url: `https://lettre-pro.fr/modeles/${template.slug}`,
            type: "article",
            locale: "fr_FR",
        },
    };
}

export default function LetterTemplatePage({ params }: Props) {
    const template = getLetterTemplate(params.slug);
    if (!template) notFound();

    const related = letterTemplates
        .filter((item) => item.slug !== template.slug)
        .sort((a, b) => Number(b.tag === template.tag) - Number(a.tag === template.tag))
        .slice(0, 3);

    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: template.title,
        description: template.description,
        inLanguage: "fr-FR",
        dateModified: "2026-08-16",
        step: [
            { "@type": "HowToStep", name: "Personnaliser", text: "Remplacez les passages entre crochets par vos informations." },
            { "@type": "HowToStep", name: "Vérifier", text: "Relisez les faits, dates, références et coordonnées." },
            { "@type": "HowToStep", name: "Envoyer", text: "Copiez, téléchargez ou imprimez la lettre puis choisissez le mode d’envoi adapté." },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <header className="bg-gradient-to-br from-pro-950 to-pro-800 py-14 text-white sm:py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-pro-200">
                        <Link href="/">Accueil</Link> <span aria-hidden="true">›</span> <Link href="/modeles">Modèles</Link> <span aria-hidden="true">›</span> <span>{template.shortTitle}</span>
                    </nav>
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">{template.tag} · gratuit</span>
                    <h1 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-5xl">{template.title}</h1>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-pro-100 sm:text-lg">{template.intro}</p>
                    <p className="mt-4 text-xs text-pro-300">Mis à jour le {template.updatedAt} · Sans inscription</p>
                </div>
            </header>

            <section className="py-12 sm:py-16">
                <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
                    <LetterEditor initialContent={template.content} title={template.shortTitle} />
                    <aside className="space-y-5">
                        <div className="rounded-2xl border border-pro-100 bg-pro-50 p-5">
                            <h2 className="font-heading font-bold text-gray-900">Avant l’envoi</h2>
                            <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                {template.checklist.map((item) => <li key={item} className="flex gap-2"><span className="font-bold text-accent-600">✓</span><span>{item}</span></li>)}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                            <strong className="block mb-2">Information importante</strong>
                            Ce modèle est informatif. Pour une démarche officielle, vérifiez les délais, la procédure et les textes applicables à votre situation.
                        </div>
                        {template.relatedGuide && <Link href={template.relatedGuide} className="block rounded-2xl border border-gray-200 bg-white p-5 text-sm font-semibold text-pro-700 hover:border-pro-300">{template.relatedGuideLabel} →</Link>}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-relaxed text-gray-600">
                            <strong className="block text-gray-900">Modèle relu par la rédaction</strong>
                            <p className="mt-2">Publié par Nathalie Lebrun. Consultez notre <Link href="/a-propos" className="font-semibold text-pro-700 underline underline-offset-2">méthode éditoriale</Link> ou signalez une correction.</p>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-gray-50 py-12">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <h2 className="font-heading text-2xl font-bold text-gray-900">Modèles proches</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {related.map((item) => <Link key={item.slug} href={`/modeles/${item.slug}`} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-pro-300"><span className="text-xs font-bold uppercase text-pro-600">{item.tag}</span><h3 className="mt-2 font-heading font-bold text-gray-900">{item.shortTitle}</h3><p className="mt-2 text-sm text-gray-500">Ouvrir le modèle →</p></Link>)}
                    </div>
                </div>
            </section>
        </>
    );
}
