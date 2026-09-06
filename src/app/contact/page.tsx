import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez la rédaction de Lettre Pro pour signaler une correction, poser une question ou proposer une amélioration.",
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return (
        <>
            <header className="lp-hero !py-16">
                <div className="lp-shell max-w-3xl">
                    <span className="lp-eyebrow">Nous écrire</span>
                    <h1 className="!max-w-3xl">Contacter <em>Lettre Pro.</em></h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
                        Une correction à signaler, une question sur un modèle ou une suggestion de nouveau courrier ?
                        La rédaction vous répond par e-mail.
                    </p>
                </div>
            </header>

            <section className="lp-section lp-section-alt">
                <div className="lp-shell max-w-3xl">
                    <div className="rounded-2xl border border-pro-100 bg-pro-50 p-6 sm:p-8">
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Adresse de contact</h2>
                        <p className="mt-3 leading-relaxed text-gray-600">
                            Écrivez à <a className="font-semibold text-pro-700 underline underline-offset-2" href="mailto:contact@lettre-pro.fr">contact@lettre-pro.fr</a>
                            {" "}en précisant l’adresse de la page concernée et, si nécessaire, le passage à vérifier.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-gray-500">
                            Lettre Pro ne fournit pas de consultation juridique personnalisée. Pour une urgence ou un litige important,
                            adressez-vous à un professionnel qualifié ou au service public compétent.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/modeles" className="lp-button lp-button-primary">Consulter les modèles</Link>
                        <Link href="/a-propos" className="lp-button lp-button-secondary">Notre méthode éditoriale</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
