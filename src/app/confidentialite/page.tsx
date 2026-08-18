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
                    <p>Les modèles sont consultables et copiables sans compte. Lettre Pro ne demande ni nom, ni adresse e-mail, ni informations sur votre situation pour y accéder. Lors de la navigation, des données techniques et identifiants en ligne peuvent néanmoins être traités, notamment l&apos;adresse IP, le navigateur, l&apos;appareil utilisé, la date, l&apos;heure et les pages consultées.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Finalités et bases légales</h2>
                    <p>Les données techniques strictement nécessaires sont traitées pour assurer le fonctionnement et la sécurité du site. Les cookies publicitaires et de mesure sont utilisés selon les choix exprimés dans le gestionnaire de consentement.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Publicité et cookies</h2>
                    <p>Le site utilise Google AdSense. Google et ses partenaires peuvent utiliser des cookies ou identifiants pour diffuser et mesurer des annonces selon votre consentement et la réglementation applicable. Vous pouvez refuser les cookies non essentiels ou modifier vos choix à tout moment dans le gestionnaire de consentement.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Durée de conservation et destinataires</h2>
                    <p>Les données techniques sont accessibles uniquement aux prestataires nécessaires au fonctionnement, à la sécurité, à l&apos;hébergement et à la monétisation du site. Les durées applicables aux cookies sont précisées dans le gestionnaire de consentement.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Vos droits</h2>
                    <p>Conformément au RGPD, vous disposez notamment de droits d&apos;accès, de rectification, d&apos;effacement, de limitation et d&apos;opposition, ainsi que du droit de retirer votre consentement. Contact : <a href="mailto:contact@lettre-pro.fr" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a>. Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-pro-600 hover:underline">CNIL</a>.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Responsable du traitement</h2>
                    <p>Nathalie Lebrun — Entrepreneur individuel<br />524 rue de la Tourrache<br />83600 Fréjus — France</p>
                </section>
            </div>
        </div>
    );
}
