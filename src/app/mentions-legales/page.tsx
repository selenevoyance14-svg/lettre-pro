import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales",
    alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-14">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Éditeur du site</h2>
                    <p>Le site lettre-pro.fr est édité par :</p>
                    <p>Nathalie Lebrun — Entrepreneur individuel (EI)</p>
                    <p>524 rue de la Tourrache<br />83600 Fréjus — France</p>
                    <p>SIREN : 101 331 585<br />SIRET : 101 331 585 00014</p>
                    <p>Contact : <a href="mailto:contact@lettre-pro.fr" className="text-pro-600 hover:underline">contact@lettre-pro.fr</a></p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Direction de la publication</h2>
                    <p>Directrice de la publication : Nathalie Lebrun.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Hébergement</h2>
                    <p>Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Propriété intellectuelle</h2>
                    <p>Les textes, modèles, guides, éléments graphiques et la structure du site sont protégés par le droit d&apos;auteur. Toute reproduction ou diffusion non autorisée est interdite.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Nature du service et responsabilité</h2>
                    <p>Lettre Pro propose gratuitement des exemples et modèles génériques destinés à aider les visiteurs dans la rédaction de leurs courriers. Ces contenus doivent être relus, adaptés et complétés avant toute utilisation.</p>
                    <p className="mt-2">Les modèles ne constituent pas un conseil juridique et ne remplacent pas l&apos;avis d&apos;un professionnel qualifié. Lettre Pro ne garantit pas qu&apos;un modèle corresponde à chaque situation particulière et ne peut être tenu responsable de son utilisation, de son envoi ou de ses conséquences.</p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-900 text-base mb-2">Liens externes et affiliation</h2>
                    <p>Le site peut contenir des liens vers des services ou sites tiers dont Lettre Pro ne contrôle pas le contenu. Certains liens peuvent être affiliés et générer une commission sans coût supplémentaire pour le visiteur.</p>
                </section>
            </div>
        </div>
    );
}
