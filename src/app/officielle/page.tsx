import type { Metadata } from "next";
import Link from "next/link";
import { getLettersByCategory } from "../modeles/lettersData";

export const metadata: Metadata = {
    title: "Modèles de lettres officielles gratuits",
    description: "Modèles gratuits de résiliation, réclamation, mise en demeure et contestation à personnaliser en ligne.",
    alternates: { canonical: "/officielle" },
};

const topics = ["📱 Résiliation", "📦 Réclamation", "🏥 Litige assurance", "⚖️ Mise en demeure", "🚗 Contestation de PV", "🏦 Litige bancaire", "🏠 Propriétaire"];

export default function OfficiellePage() {
    const modeles = getLettersByCategory("officielle");

    return (
        <>
            <header className="bg-gradient-to-br from-pro-950 to-pro-800 py-14 text-white sm:py-20">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <div className="mb-6 text-5xl">⚖️</div>
                    <h1 className="mb-4 font-heading text-3xl font-bold sm:text-5xl">
                        Modèles de lettres officielles gratuits
                        <span className="mt-2 block text-2xl font-normal text-pro-200 sm:text-3xl">Prêts à personnaliser</span>
                    </h1>
                    <p className="mx-auto max-w-xl text-base text-pro-200 sm:text-lg">
                        Résiliation, réclamation, mise en demeure ou contestation : choisissez un modèle, adaptez les faits et vérifiez la procédure avant l’envoi.
                    </p>
                </div>
            </header>

            <section className="border-b border-pro-100 bg-pro-50 py-8" aria-label="Types de lettres officielles">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        {topics.map((topic) => <span key={topic} className="rounded-full border border-pro-200 bg-white px-3 py-1 font-medium text-pro-700">{topic}</span>)}
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {modeles.map((modele) => (
                            <Link key={modele.slug} href={`/modeles/${modele.slug}`} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <span className="badge-free text-xs">{modele.tag}</span>
                                <h2 className="mt-4 font-heading text-xl font-bold text-gray-900 group-hover:text-pro-700">{modele.shortTitle}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-gray-500">{modele.description}</p>
                                <b className="mt-6 block text-sm text-pro-700">Personnaliser ce modèle →</b>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-gray-50 py-14">
                <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-gray-600">
                    <h2 className="font-heading text-2xl font-bold text-gray-900">Bien utiliser un modèle de lettre officielle</h2>
                    <p className="mt-4">
                        Commencez par vérifier votre contrat, l’avis reçu ou la procédure indiquée par l’organisme concerné. Une lettre utile
                        présente les faits dans l’ordre, mentionne les références du dossier, formule une demande précise et liste les pièces jointes.
                        Conservez une copie du courrier et choisissez un mode d’envoi permettant de dater la réception lorsque le délai est important.
                    </p>
                    <p className="mt-4">
                        Les modèles proposés sont généraux : un délai, un justificatif ou un destinataire peut varier selon votre situation.
                        Consultez la source officielle compétente et, en cas d’enjeu financier ou contentieux important, demandez conseil à un professionnel.
                    </p>

                    <h2 className="mt-10 font-heading text-2xl font-bold text-gray-900">Guides pratiques par démarche</h2>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/blog/lettre-resiliation-droits-modeles" className="btn-secondary text-sm">Guide résiliation</Link>
                        <Link href="/blog/contester-amende-guide-complet" className="btn-secondary text-sm">Contester une amende</Link>
                        <Link href="/blog/mise-en-demeure-quand-comment" className="btn-secondary text-sm">Mise en demeure</Link>
                        <Link href="/blog/lettre-reclamation-faire-valoir-droits" className="btn-secondary text-sm">Réclamation</Link>
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <Link href="/modeles" className="btn-primary">Voir tous nos modèles gratuits →</Link>
                </div>
            </section>
        </>
    );
}
