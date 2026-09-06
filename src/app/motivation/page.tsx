import type { Metadata } from "next";
import Link from "next/link";
import { getLettersByCategory } from "../modeles/lettersData";

export const metadata: Metadata = {
    title: "Modèles de lettres de motivation gratuits",
    description: "Choisissez un modèle gratuit de lettre de motivation pour un CDI, un stage, une alternance ou une reconversion, puis personnalisez-le en ligne.",
    alternates: { canonical: "/motivation" },
};

export default function MotivationPage() {
    const modeles = getLettersByCategory("motivation");
    return (
        <>
            {/* HEADER */}
            <section className="bg-gradient-to-br from-pro-950 to-pro-800 text-white py-14 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">📄</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
                        Lettre de motivation gratuite
                        <span className="block text-pro-200 text-2xl sm:text-3xl mt-2 font-normal">Modèles prêts à personnaliser</span>
                    </h1>
                    <p className="text-pro-200 text-base sm:text-lg max-w-xl mx-auto">
                        Copiez nos modèles de lettres de motivation, personnalisez les champs entre crochets et envoyez-les. Service 100 % gratuit, sans inscription.
                    </p>
                </div>
            </section>

            {/* MODELES */}
            <section className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid gap-6 md:grid-cols-3">
                        {modeles.map((m) => (
                            <Link key={m.slug} href={`/modeles/${m.slug}`} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <span className="badge-free text-xs">{m.tag}</span>
                                <h2 className="mt-4 font-heading text-xl font-bold text-gray-900 group-hover:text-pro-700">{m.shortTitle}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-gray-500">{m.description}</p>
                                <b className="mt-6 block text-sm text-pro-700">Personnaliser ce modèle →</b>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSEILS */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-heading text-2xl font-bold text-gray-900 text-center mb-10">
                        Conseils pour une lettre de motivation efficace
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: "Personnalisez chaque lettre", desc: "Mentionnez le nom de l’entreprise, le poste et un élément précis de l’offre. Une lettre générique convainc rarement." },
                            { title: "Restez concis", desc: "Tenez sur une page et allez à l’essentiel avec des paragraphes courts, lisibles et directement liés au poste." },
                            { title: "Montrez, ne dites pas", desc: "Au lieu d’écrire seulement « je suis motivé », donnez un exemple concret de réalisation et son résultat." },
                            { title: "Proposez un échange", desc: "Terminez en indiquant clairement votre disponibilité pour un entretien, sans formulation insistante." },
                        ].map((c, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <a href="/blog/lettre-motivation-qui-se-demarque" className="text-sm font-medium text-pro-600 hover:text-pro-700 transition">
                            Lire notre guide complet sur la lettre de motivation →
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-white py-14">
                <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-gray-600 sm:px-6">
                    <h2 className="font-heading text-2xl font-bold text-gray-900">Comment choisir votre modèle de lettre de motivation ?</h2>
                    <p className="mt-4">
                        Sélectionnez le modèle qui correspond à votre situation : réponse à une offre de CDI, candidature spontanée,
                        recherche de stage ou d’alternance, Parcoursup ou reconversion professionnelle. Le texte proposé sert de structure ;
                        il doit toujours être adapté au poste, à l’entreprise et à votre expérience.
                    </p>
                    <p className="mt-4">
                        Remplacez chaque passage entre crochets, supprimez les phrases qui ne correspondent pas à votre parcours et ajoutez
                        une réalisation concrète. Vérifiez ensuite le nom du destinataire, l’intitulé exact du poste, vos coordonnées et
                        l’orthographe avant de copier ou télécharger la lettre.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/blog/5-erreurs-lettre-motivation" className="font-semibold text-pro-700 underline underline-offset-4">Les erreurs à éviter</Link>
                        <Link href="/blog/candidature-spontanee-reussir-2026" className="font-semibold text-pro-700 underline underline-offset-4">Réussir une candidature spontanée</Link>
                        <Link href="/blog/stage-alternance-reussir-candidature" className="font-semibold text-pro-700 underline underline-offset-4">Stage et alternance</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <a href="/modeles" className="btn-primary">
                        Voir tous nos modèles gratuits →
                    </a>
                </div>
            </section>
        </>
    );
}
