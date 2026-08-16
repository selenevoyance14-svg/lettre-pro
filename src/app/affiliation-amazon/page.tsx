import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Affiliation Amazon",
    description: "Découvrez comment Lettre Pro utilise les liens affiliés Amazon et finance la publication de ses modèles et guides gratuits.",
    alternates: { canonical: "/affiliation-amazon" },
};

export default function AffiliationAmazonPage() {
    return (
        <>
            <header className="lp-hero !py-16">
                <div className="lp-shell max-w-3xl">
                    <span className="lp-eyebrow">Transparence</span>
                    <h1 className="!max-w-3xl">Affiliation <em>Amazon.</em></h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
                        Certains guides contiennent des liens affiliés vers des ouvrages ou produits utiles à nos lecteurs.
                    </p>
                </div>
            </header>

            <section className="lp-section lp-section-alt">
                <div className="lp-shell max-w-3xl">
                    <div className="rounded-2xl border border-pro-100 bg-pro-50 p-6 text-pro-950">
                        <strong>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</strong>
                    </div>

                    <div className="mt-10 space-y-8 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="font-heading text-2xl font-bold text-gray-900">Ce que cela signifie pour vous</h2>
                            <p className="mt-3">
                                Si vous cliquez sur un lien Amazon présent sur Lettre Pro puis effectuez un achat éligible, Amazon peut nous verser une commission. Le prix payé reste identique : aucun supplément ne vous est facturé.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold text-gray-900">Notre ligne éditoriale</h2>
                            <p className="mt-3">
                                La présence d’un lien affilié ne garantit ni le prix, ni la disponibilité, ni la qualité d’un produit. Vérifiez toujours les informations, le vendeur et les conditions affichées sur Amazon avant tout achat.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold text-gray-900">Pourquoi utiliser l’affiliation ?</h2>
                            <p className="mt-3">
                                Ces commissions contribuent au financement de l’hébergement et à la création de nouveaux modèles et guides, qui restent accessibles gratuitement et sans inscription.
                            </p>
                        </section>

                        <p className="rounded-xl border border-gray-200 bg-white p-5 text-sm">
                            Une question sur un lien ou une recommandation ? Écrivez-nous à{" "}
                            <a className="font-semibold text-pro-700 underline" href="mailto:bonsplansmania@gmail.com">bonsplansmania@gmail.com</a>.
                        </p>

                        <Link href="/blog" className="lp-button lp-button-primary">Consulter les guides →</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
