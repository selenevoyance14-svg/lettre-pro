import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://lettre-pro.fr"),
    title: {
        default: "Modèles de lettres gratuits à copier | Lettre Pro",
        template: "%s | Lettre Pro",
    },
    description: "Modèles gratuits de lettres de motivation, résiliation, réclamation, recours et mise en demeure. Copiez, personnalisez et envoyez.",
    applicationName: "Lettre Pro",
    authors: [{ name: "Nathalie Lebrun", url: "/a-propos" }],
    creator: "Nathalie Lebrun",
    publisher: "Lettre Pro",
    category: "Modèles de lettres",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
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
                    <Link href="/a-propos">À propos</Link>
                    <Link href="/mentions-legales">Mentions légales</Link>
                    <Link href="/cgv">Conditions d’utilisation</Link>
                    <Link href="/affiliation-amazon">Affiliation Amazon</Link>
                    <Link href="/confidentialite">Confidentialité</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="lp-footer-note">
                    <strong>À savoir</strong>
                    <p>Les modèles officiels sont informatifs. Vérifiez les délais et textes applicables à votre situation avant envoi.</p>
                </div>
            </div>
            <div className="lp-shell lp-copyright">
                <span>© 2026 Lettre Pro</span>
                <span>En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.</span>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://lettre-pro.fr/#organization",
                name: "Lettre Pro",
                url: "https://lettre-pro.fr/",
                logo: {
                    "@type": "ImageObject",
                    url: "https://lettre-pro.fr/og.png",
                    width: 1200,
                    height: 630,
                },
                email: "contact@lettre-pro.fr",
                founder: { "@id": "https://lettre-pro.fr/a-propos#nathalie-lebrun" },
            },
            {
                "@type": "Person",
                "@id": "https://lettre-pro.fr/a-propos#nathalie-lebrun",
                name: "Nathalie Lebrun",
                url: "https://lettre-pro.fr/a-propos",
                jobTitle: "Éditrice et directrice de la publication",
                worksFor: { "@id": "https://lettre-pro.fr/#organization" },
            },
        ],
    };

    return (
        <html lang="fr">
            <head>
                <meta name="google-adsense-account" content="ca-pub-5064203547863113" />
            </head>
            <body>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <Header />
                <main>{children}</main>
                <Footer />
                <Script
                    id="adsense-script"
                    async
                    strategy="afterInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
                    crossOrigin="anonymous"
                />
            </body>
        </html>
    );
}
