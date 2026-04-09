import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politique de confidentialité — Lettre Pro" };

export default function ConfidentialitePage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Données collectées</h2>
                    <p>Nous collectons votre adresse email et les informations que vous nous fournissez dans le formulaire (offre d'emploi, parcours, situation) uniquement pour générer votre lettre.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Utilisation des données</h2>
                    <p>Vos données sont utilisées exclusivement pour rédiger et envoyer votre lettre. Elles ne sont ni vendues ni transmises à des tiers à des fins commerciales.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Conservation</h2>
                    <p>Vos données sont conservées le temps nécessaire à la fourniture du service, puis supprimées.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Vos droits</h2>
                    <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contact : <a href="mailto:bonsplansmania@gmail.com" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a></p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Paiement</h2>
                    <p>Les paiements sont traités par Stripe. Lettre Pro n'a jamais accès à vos données bancaires.</p>
                </section>
            </div>
        </div>
    );
}
