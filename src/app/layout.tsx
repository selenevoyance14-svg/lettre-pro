import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://lettre-pro.fr"),
    title: {
        default: "Modèles de lettres gratuits à copier | Lettre Pro",
        template: "%s | Lettre Pro",
    },
    description: "Modèles gratuits de lettres de motivation, résiliation, réclamation, recours et mise en demeure. Copiez, personnalisez et envoyez.",
    keywords: ["modèle de lettre gratuit", "lettre de motivation", "lettre de résiliation", "lettre de réclamation", "mise en demeure"],
    alternates: { canonical: "/" },
    openGraph: {
        title: "Lettre Pro — Les bons mots, au bon moment",
        description: "Des modèles de lettres gratuits, clairs et immédiatement utilisables.",
        type: "website",
        locale: "fr_FR",
        url: "https://lettre-pro.fr",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lettre Pro — modèles de lettres gratuits" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lettre Pro — Modèles de lettres gratuits",
        description: "Copiez, personnalisez et envoyez votre lettre gratuitement.",
        images: ["/og.png"],
    },
};

function Header() {
    return (
        <header className="lp-header">
            <div className="lp-shell lp-nav">
                <Link href="/" className="lp-brand" aria-label="Lettre Pro, accueil">
                    <span className="lp-brand-mark">L</span>
                    <span>LETTRE <b>PRO</b></span>
                </Link>
                <nav aria-label="Navigation principale">
                    <Link href="/modeles">Tous les modèles</Link>
                    <Link href="/motivation">Motivation</Link>
                    <Link href="/officielle">Lettres officielles</Link>
                    <Link href="/blog">Conseils</Link>
                </nav>
                <Link href="/modeles" className="lp-nav-cta">Trouver ma lettre <span>→</span></Link>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="lp-footer">
            <div className="lp-shell lp-footer-grid">
                <div>
                    <Link href="/" className="lp-brand lp-footer-brand">
                        <span className="lp-brand-mark">L</span><span>LETTRE <b>PRO</b></span>
                    </Link>
                    <p>Des modèles gratuits pour candidater, résilier, réclamer et défendre vos droits plus clairement.</p>
                </div>
                <div>
                    <strong>Modèles</strong>
                    <Link href="/motivation">Lettre de motivation</Link>
                    <Link href="/officielle">Lettre officielle</Link>
                    <Link href="/modeles">Bibliothèque complète</Link>
                    <Link href="/blog">Guides pratiques</Link>
                </div>
                <div>
                    <strong>Informations</strong>
                    <Link href="/mentions-legales">Mentions légales</Link>
                    <Link href="/confidentialite">Confidentialité</Link>
                    <a href="mailto:contact@lettre-pro.fr">Contact</a>
                </div>
                <div className="lp-footer-note">
                    <strong>À savoir</strong>
                    <p>Les modèles officiels sont informatifs. Vérifiez les délais et textes applicables à votre situation avant envoi.</p>
                </div>
            </div>
            <div className="lp-shell lp-copyright">
                <span>© 2026 Lettre Pro</span><span>Gratuit · Sans inscription</span>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113" crossOrigin="anonymous" />
            </head>
            <body><Header /><main>{children}</main><Footer /></body>
        </html>
    );
}
