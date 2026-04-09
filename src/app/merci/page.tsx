import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Merci — Lettre Pro",
};

export default function MerciPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center py-16 bg-gray-50">
            <div className="max-w-lg mx-auto px-4 text-center">
                <div className="text-6xl mb-6">✨</div>
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Merci d&apos;utiliser Lettre Pro !
                </h1>
                <p className="text-gray-500 text-sm mb-8">
                    Nos services sont 100% gratuits. N&apos;hesitez pas a revenir quand vous avez besoin d&apos;une nouvelle lettre.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/" className="btn-primary">
                        Retour a l&apos;accueil
                    </a>
                    <a href="/modeles" className="btn-secondary">
                        Voir les modeles gratuits
                    </a>
                </div>
            </div>
        </div>
    );
}
