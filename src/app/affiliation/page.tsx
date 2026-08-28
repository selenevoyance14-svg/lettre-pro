import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliation et partenaires",
    description: "Transparence sur les liens affiliés et les partenaires de Lettre Pro.",
    alternates: { canonical: "/affiliation" },
};

export default function AffiliationPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Affiliation et partenaires</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p>
                    Les modèles de Lettre Pro restent gratuits et accessibles sans inscription.
                    Certains liens clairement identifiés sont affiliés&nbsp;: une commande effectuée
                    après un clic peut rémunérer le site, sans surcoût ajouté par Lettre Pro.
                </p>
                <h2 className="font-semibold text-gray-900 text-base">Merci Facteur</h2>
                <p>
                    Les boutons d’envoi en ligne conduisent vers Merci Facteur, un service tiers payant
                    qui propose notamment l’impression, la mise sous pli, l’affranchissement et l’envoi
                    de courriers recommandés. Les prix et conditions applicables sont affichés par Merci Facteur.
                </p>
                <h2 className="font-semibold text-gray-900 text-base">Amazon</h2>
                <p>
                    En tant que Partenaire Amazon, Lettre Pro réalise un bénéfice sur les achats
                    remplissant les conditions requises. Le prix et la disponibilité sont ceux affichés
                    par Amazon au moment de la visite.
                </p>
                <h2 className="font-semibold text-gray-900 text-base">Indépendance éditoriale</h2>
                <p>
                    Les partenariats n’influencent pas l’accès aux modèles gratuits. Vous restez libre
                    de copier votre lettre et de l’envoyer par le moyen de votre choix.
                </p>
            </div>
        </div>
    );
}
