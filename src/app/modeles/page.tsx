import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Modèles de lettres gratuits",
    description: "Bibliothèque de modèles gratuits : motivation, résiliation, réclamation, mise en demeure, contestation, banque et logement.",
    alternates: { canonical: "/modeles" },
};

const groups = [
    {
        title: "Emploi & candidature",
        text: "Pour présenter votre profil sans répéter votre CV.",
        href: "/motivation",
        items: ["CDI", "Stage", "Alternance", "Reconversion", "Candidature spontanée"],
        icon: "✦",
    },
    {
        title: "Résiliation",
        text: "Pour demander la fin d’un contrat et une confirmation écrite.",
        href: "/officielle",
        items: ["Abonnement", "Assurance", "Téléphonie", "Salle de sport", "Service en ligne"],
        icon: "↗",
    },
    {
        title: "Réclamation & litige",
        text: "Pour exposer les faits, demander une solution et conserver une trace.",
        href: "/officielle",
        items: ["Facture", "Banque", "Assurance", "Livraison", "Propriétaire"],
        icon: "!",
    },
    {
        title: "Recours & contestation",
        text: "Pour contester une décision dans les délais applicables.",
        href: "/officielle",
        items: ["Amende", "Administration", "CAF", "France Travail", "Recours gracieux"],
        icon: "§",
    },
];

export default function ModelesPage() {
    return (
        <>
            <header className="lp-hero !py-16">
                <div className="lp-shell">
                    <span className="lp-eyebrow">Bibliothèque gratuite</span>
                    <h1 className="!max-w-4xl">Un modèle pour chaque <em>situation.</em></h1>
                    <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
                        Choisissez votre démarche, copiez le texte proposé et remplacez les informations entre crochets.
                    </p>
                </div>
            </header>
            <section className="lp-section lp-section-alt">
                <div className="lp-shell">
                    <div className="lp-category-grid">
                        {groups.map((group) => (
                            <Link href={group.href} className="lp-category-card !min-h-[300px]" key={group.title}>
                                <span>{group.icon}</span>
                                <h2 className="font-heading text-xl font-bold mt-5">{group.title}</h2>
                                <p>{group.text}</p>
                                <ul className="mt-4 text-sm text-gray-500 space-y-1">
                                    {group.items.map((item) => <li key={item}>— {item}</li>)}
                                </ul>
                                <b>Ouvrir les modèles →</b>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="lp-section">
                <div className="lp-shell max-w-3xl text-center">
                    <span className="lp-eyebrow">Besoin de contexte ?</span>
                    <h2 className="font-heading text-4xl font-bold my-4">Consultez nos guides avant l’envoi.</h2>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Délais, justificatifs, recommandé avec accusé de réception et formulations : les articles Lettre Pro vous aident à sécuriser votre démarche.
                    </p>
                    <Link href="/blog" className="lp-button lp-button-primary">Voir les 40 guides →</Link>
                </div>
            </section>
        </>
    );
}
