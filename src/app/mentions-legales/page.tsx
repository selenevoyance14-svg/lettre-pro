import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales — Lettre Pro" };

export default function MentionsLegalesPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Éditeur du site</h2>
                    <p>Site lettre-pro.fr — <a href="mailto:bonsplansmania@gmail.com" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a></p>
                    <p>SIRET : 10133158500014</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Hébergement</h2>
                    <p>Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Propriété intellectuelle</h2>
                    <p>L'ensemble du contenu du site est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>
                </section>
            </div>
        </div>
    );
}
