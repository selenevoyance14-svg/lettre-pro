import type { Metadata } from "next";

export const metadata: Metadata = { title: "Conditions d'utilisation — Lettre Pro" };

export default function CGVPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Conditions d&apos;utilisation</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">1. Objet</h2>
                    <p>Les presentes conditions regissent l&apos;utilisation du service gratuit de modeles de lettres propose sur lettre-pro.fr.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">2. Services proposes</h2>
                    <p>Lettre Pro propose des modeles de lettres gratuits (lettre de motivation, lettre officielle) a copier et personnaliser. Le service est fourni a titre d&apos;aide a la redaction uniquement.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">3. Gratuite du service</h2>
                    <p>L&apos;ensemble des modeles de lettres est propose gratuitement, sans inscription requise.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">4. Donnees personnelles</h2>
                    <p>Lettre Pro ne collecte aucune donnee personnelle. Les modeles sont consultes directement dans le navigateur sans transmission d&apos;informations.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">5. Responsabilite</h2>
                    <p>Le contenu des modeles de lettres est fourni a titre indicatif. Lettre Pro ne saurait etre tenu responsable de l&apos;utilisation qui en est faite. Pour tout litige juridique serieux, nous recommandons de consulter un professionnel du droit.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">6. Contact</h2>
                    <p>Pour toute question : <a href="mailto:bonsplansmania@gmail.com" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a>.</p>
                </section>
            </div>
        </div>
    );
}
