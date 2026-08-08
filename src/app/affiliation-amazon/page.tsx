import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliation Amazon",
    description: "Informations sur les liens affiliés Amazon présents dans les guides Lettre Pro.",
    alternates: { canonical: "/affiliation-amazon" },
};

export default function AffiliationAmazonPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Affiliation Amazon</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-900">
                    En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
                </p>
                <p>
                    Certains guides de Lettre Pro recommandent des livres ou du matériel disponible sur Amazon.fr.
                    Ces liens sont affiliés : un achat réalisé après avoir suivi un lien peut générer une commission
                    pour le site, sans surcoût pour vous.
                </p>
                <h2 className="font-semibold text-gray-900 text-base">Prix et disponibilité</h2>
                <p>
                    Lettre Pro n&apos;affiche pas de prix Amazon et ne vend pas directement les produits recommandés.
                    Le prix applicable, la disponibilité, la livraison, les retours et le service après-vente sont
                    ceux indiqués sur Amazon au moment de votre visite.
                </p>
                <h2 className="font-semibold text-gray-900 text-base">Indépendance éditoriale</h2>
                <p>
                    Les recommandations servent à compléter les guides pratiques. La présence d&apos;un lien affilié
                    ne constitue pas une garantie concernant le produit ou son vendeur.
                </p>
            </div>
        </div>
    );
}
