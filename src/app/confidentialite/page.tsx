import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description: "Données, cookies et publicité sur lettre-pro.fr.",
    alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Données collectées</h2>
                    <p>Les modèles sont consultables et copiables sans compte. Lettre Pro ne demande ni nom, ni adresse e-mail, ni informations sur votre situation pour accéder aux modèles.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Utilisation des données</h2>
                    <p>L&apos;hébergeur peut traiter des journaux techniques nécessaires à la sécurité et au fonctionnement du site : adresse IP, navigateur, date, heure et pages consultées.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Publicité et cookies</h2>
                    <p>Le site utilise Google AdSense. Google et ses partenaires peuvent utiliser des cookies ou identifiants pour diffuser et mesurer des annonces selon votre consentement et la réglementation applicable.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Vos droits</h2>
                    <p>Conformément au RGPD, vous disposez notamment de droits d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition. Contact : <a href="mailto:bonsplansmania@gmail.com" className="text-pro-600 hover:underline">bonsplansmania@gmail.com</a></p>
                </section>
            </div>
        </div>
    );
}
