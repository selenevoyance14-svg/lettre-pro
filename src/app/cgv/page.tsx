import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions d’utilisation",
    alternates: { canonical: "/cgv" },
};

export default function CGVPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Conditions d&apos;utilisation</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">1. Objet</h2>
                    <p>Les présentes conditions régissent l&apos;utilisation du service gratuit de modèles de lettres proposé sur lettre-pro.fr.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">2. Services proposes</h2>
                    <p>Lettre Pro propose des modèles de lettres gratuits (lettre de motivation, lettre officielle) à copier et personnaliser. Le service est fourni à titre d&apos;aide à la rédaction uniquement.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">3. Gratuite du service</h2>
                    <p>L&apos;ensemble des modèles de lettres est proposé gratuitement, sans inscription requise.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">4. Donnees personnelles</h2>
                    <p>Aucune donnée personnelle n&apos;est demandée pour consulter ou personnaliser un modèle. Des données techniques et des identifiants peuvent néanmoins être traités lors de la navigation, conformément à notre politique de confidentialité.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">5. Responsabilite</h2>
                    <p>Le contenu des modèles de lettres est fourni à titre indicatif. Lettre Pro ne saurait être tenu responsable de l&apos;utilisation qui en est faite. Pour tout litige juridique sérieux, nous recommandons de consulter un professionnel du droit.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">6. Contact</h2>
                    <p>Pour toute question : <a href="mailto:contact@lettre-pro.fr" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a>.</p>
                </section>
            </div>
        </div>
    );
}
