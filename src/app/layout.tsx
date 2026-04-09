import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lettre Pro — Vos lettres rédigées en minutes",
    description: "Lettre de motivation, lettre officielle, réclamation, résiliation... Obtenez une lettre professionnelle personnalisée par email en quelques minutes.",
    keywords: "lettre de motivation, lettre officielle, réclamation, résiliation, lettre professionnelle",
    openGraph: {
        title: "Lettre Pro — Vos lettres rédigées en minutes",
        description: "Lettre de motivation, lettre officielle personnalisée par email.",
        type: "website",
        locale: "fr_FR",
        url: "https://lettre-pro.fr",
    },
};

function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pro-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">LP</span>
                        </div>
                        <span className="font-heading font-bold text-gray-900 text-lg">Lettre Pro</span>
                    </a>
                    <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <a href="/motivation" className="hover:text-pro-600 transition">Lettre de motivation</a>
                        <a href="/officielle" className="hover:text-pro-600 transition">Lettre officielle</a>
                        <a href="/modeles" className="hover:text-pro-600 transition">Modèles gratuits</a>
                        <a href="/blog" className="hover:text-pro-600 transition">Blog</a>
                    </nav>
                    <a href="/motivation" className="btn-primary text-sm py-2 px-4">
                        Rédiger ma lettre →
                    </a>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 bg-pro-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">LP</span>
                            </div>
                            <span className="font-heading font-bold text-gray-900">Lettre Pro</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Vos lettres professionnelles rédigées en minutes, personnalisées et prêtes à envoyer.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="/motivation" className="hover:text-pro-600 transition">Lettre de motivation</a></li>
                            <li><a href="/officielle" className="hover:text-pro-600 transition">Lettre officielle</a></li>
                            <li><a href="/modeles" className="hover:text-pro-600 transition">Modèles gratuits</a></li>
                            <li><a href="/blog" className="hover:text-pro-600 transition">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Informations</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="/cgv" className="hover:text-pro-600 transition">CGV</a></li>
                            <li><a href="/mentions-legales" className="hover:text-pro-600 transition">Mentions légales</a></li>
                            <li><a href="/confidentialite" className="hover:text-pro-600 transition">Confidentialité</a></li>
                            <li><a href="mailto:bonsplansmania@gmail.com" className="hover:text-pro-600 transition">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
                    <p>© 2026 Lettre Pro. Tous droits réservés.</p>
                    <p>100% gratuit · Sans inscription</p>
                </div>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
                    crossOrigin="anonymous"
                />
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
