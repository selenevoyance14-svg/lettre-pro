import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "À propos et méthode éditoriale",
    description: "Qui rédige Lettre Pro, comment les modèles sont préparés et comment signaler une correction.",
    alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
    return (
        <>
            <header className="lp-hero !py-16">
                <div className="lp-shell max-w-3xl">
                    <span className="lp-eyebrow">À propos de Lettre Pro</span>
                    <h1 className="!max-w-3xl">Des modèles utiles, <em>à adapter avec soin.</em></h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
                        Lettre Pro aide à préparer un premier brouillon de courrier sans inscription ni paiement.
                    </p>
                </div>
            </header>

            <section className="lp-section lp-section-alt">
                <div className="lp-shell max-w-3xl space-y-10 text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Qui publie le site ?</h2>
                        <p className="mt-3">
                            Lettre Pro est édité par Nathalie Lebrun, entrepreneure individuelle et directrice de la publication. Le projet est né d’un constat simple : face à une candidature, une résiliation ou une réclamation, la page blanche complique souvent une démarche déjà stressante.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Notre méthode éditoriale</h2>
                        <ul className="mt-4 list-disc space-y-3 pl-6">
                            <li>Chaque modèle est rédigé pour une situation précise et comporte des champs clairement identifiables.</li>
                            <li>Les points à vérifier avant l’envoi sont affichés à côté du modèle.</li>
                            <li>Les guides sont relus et datés ; les références officielles sont privilégiées lorsqu’une règle ou un délai est mentionné.</li>
                            <li>Les contenus sont corrigés lorsqu’une information devient obsolète ou qu’un lecteur nous signale une erreur.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Ce que nos modèles ne remplacent pas</h2>
                        <p className="mt-3">
                            Nos textes sont des exemples généraux, pas des consultations juridiques. Les délais, justificatifs et recours peuvent dépendre du contrat, de la date et de la situation personnelle. En cas d’enjeu financier, professionnel ou contentieux important, demandez l’avis d’un professionnel qualifié.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-pro-100 bg-pro-50 p-6">
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Une correction à proposer ?</h2>
                        <p className="mt-3">
                            Indiquez l’adresse de la page et le passage concerné à <a href="mailto:contact@lettre-pro.fr" className="font-semibold text-pro-700 underline underline-offset-2">contact@lettre-pro.fr</a>. Nous examinerons le signalement et mettrons le contenu à jour si nécessaire.
                        </p>
                    </section>

                    <Link href="/modeles" className="lp-button lp-button-primary">Consulter les modèles →</Link>
                </div>
            </section>
        </>
    );
}
