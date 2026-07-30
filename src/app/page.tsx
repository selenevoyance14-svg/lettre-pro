import type { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "./blog/blogData";

export const metadata: Metadata = {
    title: "Modèles de lettres gratuits à copier | Lettre Pro",
    description: "Trouvez un modèle gratuit de lettre de motivation, résiliation, réclamation, recours ou mise en demeure. Copiez-le sans inscription.",
    alternates: { canonical: "/" },
};

const categories = [
    { icon: "✦", title: "Lettre de motivation", text: "CDI, stage, alternance, reconversion et candidature spontanée.", href: "/motivation" },
    { icon: "↗", title: "Résiliation", text: "Assurance, abonnement, salle de sport, téléphone et services.", href: "/officielle" },
    { icon: "§", title: "Réclamation & recours", text: "Banque, assurance, administration, facture et consommation.", href: "/officielle" },
    { icon: "!", title: "Mise en demeure", text: "Demander l’exécution d’une obligation avec une formulation claire.", href: "/officielle" },
];

const steps = [
    ["01", "Trouvez le bon modèle", "Choisissez selon votre situation : candidature, résiliation, réclamation ou recours."],
    ["02", "Remplacez les crochets", "Personnalisez les noms, dates, références et faits propres à votre dossier."],
    ["03", "Relisez puis envoyez", "Vérifiez les informations et choisissez l’e-mail ou le recommandé selon l’enjeu."],
];

export default function Home() {
    const featured = blogArticles.slice(0, 3);

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Lettre Pro",
        url: "https://lettre-pro.fr/",
        description: "Modèles gratuits de lettres professionnelles et officielles à personnaliser.",
        inLanguage: "fr-FR",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <section className="lp-hero">
                <div className="lp-shell lp-hero-grid">
                    <div className="lp-hero-copy">
                        <span className="lp-eyebrow">Modèles gratuits · sans inscription</span>
                        <h1>Les bons mots,<br /><em>au bon moment.</em></h1>
                        <p>
                            Une candidature à envoyer, un contrat à résilier ou une décision à contester ?
                            Partez d’un modèle clair, adaptez les champs et gardez la maîtrise de votre courrier.
                        </p>
                        <div className="lp-actions">
                            <Link className="lp-button lp-button-primary" href="/modeles">Trouver mon modèle <span>→</span></Link>
                            <Link className="lp-button lp-button-secondary" href="/motivation">Lettre de motivation</Link>
                        </div>
                        <div className="lp-proof">
                            <span>✓ 40 guides pratiques</span>
                            <span>✓ Copie immédiate</span>
                            <span>✓ Aucun compte demandé</span>
                        </div>
                    </div>
                    <div className="lp-paper-card" aria-label="Aperçu d’un modèle de lettre professionnelle">
                        <div className="lp-paper-top"><span>LETTRE PRO</span><span>MODÈLE GRATUIT</span></div>
                        <h2>Objet : votre demande</h2>
                        <div className="lp-paper-lines" aria-hidden="true">
                            <span /><span /><span /><span /><span /><span />
                        </div>
                        <div className="lp-signature">Votre signature</div>
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section-alt">
                <div className="lp-shell">
                    <div className="lp-heading">
                        <div><span className="lp-eyebrow">Choisir une situation</span><h2>Quel courrier préparez-vous ?</h2></div>
                        <p>Commencez par le sujet de votre démarche. Chaque modèle indique les éléments à remplacer avant l’envoi.</p>
                    </div>
                    <div className="lp-category-grid">
                        {categories.map((category) => (
                            <Link className="lp-category-card" href={category.href} key={category.title}>
                                <span>{category.icon}</span><h3>{category.title}</h3><p>{category.text}</p><b>Voir les modèles →</b>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lp-section">
                <div className="lp-shell">
                    <div className="lp-heading">
                        <div><span className="lp-eyebrow">Mode d’emploi</span><h2>Une lettre prête en trois étapes.</h2></div>
                        <p>Nos modèles restent volontairement simples : vous voyez le texte, vous le copiez et vous gardez la main.</p>
                    </div>
                    <div className="lp-steps">
                        {steps.map(([number, title, text]) => (
                            <div className="lp-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="lp-section lp-section-alt">
                <div className="lp-shell">
                    <div className="lp-heading">
                        <div><span className="lp-eyebrow">Guides pratiques</span><h2>Comprendre avant d’envoyer.</h2></div>
                        <p>Délais, pièces à joindre, formules et erreurs à éviter : nos articles complètent chaque modèle.</p>
                    </div>
                    <div className="lp-guide-grid">
                        {featured.map((article) => (
                            <Link className="lp-guide-card" href={`/blog/${article.slug}`} key={article.slug}>
                                <small>{article.tag} · {article.readTime}</small>
                                <h3>{article.title}</h3>
                                <b>Lire le guide →</b>
                            </Link>
                        ))}
                    </div>
                    <div className="lp-actions">
                        <Link className="lp-button lp-button-secondary" href="/blog">Voir les 40 guides</Link>
                    </div>
                </div>
            </section>

            <section className="lp-final">
                <div className="lp-shell">
                    <h2>Votre lettre commence ici.</h2>
                    <p>Choisissez un modèle gratuit, personnalisez les passages entre crochets et relisez-le avant de l’envoyer.</p>
                    <Link className="lp-button" href="/modeles">Parcourir tous les modèles <span>→</span></Link>
                </div>
            </section>
        </>
    );
}
