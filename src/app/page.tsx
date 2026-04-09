import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lettre Pro — Lettres de motivation & lettres officielles gratuites",
    description: "Modeles de lettres de motivation et lettres officielles gratuits : resiliation, reclamation, litige, mise en demeure. Prets a personnaliser.",
};

const services = [
    {
        icon: "📄",
        title: "Lettre de motivation",
        description: "Modeles de lettres de motivation pour CDI, stage et alternance. Copiez, personnalisez et envoyez en quelques minutes.",
        href: "/motivation",
        cta: "Voir les modeles",
        tag: "Le plus demande",
        tagColor: "bg-pro-600 text-white",
    },
    {
        icon: "⚖️",
        title: "Lettre officielle",
        description: "Resiliation, reclamation, litige avec une assurance, mise en demeure... Des modeles prets a personnaliser pour faire valoir vos droits.",
        href: "/officielle",
        cta: "Voir les modeles",
        tag: null,
        tagColor: "",
    },
];

const useCases = [
    { icon: "💼", text: "Candidature a un CDI" },
    { icon: "🎓", text: "Stage ou alternance" },
    { icon: "📱", text: "Resiliation abonnement" },
    { icon: "🏦", text: "Litige avec une banque" },
    { icon: "🏥", text: "Remboursement assurance" },
    { icon: "🚗", text: "Contestation de PV" },
    { icon: "🏠", text: "Reclamation proprietaire" },
    { icon: "📦", text: "Retard de livraison" },
];

const steps = [
    { num: "1", title: "Choisissez votre modele", desc: "Lettre de motivation ou lettre officielle, trouvez le modele adapte a votre situation." },
    { num: "2", title: "Personnalisez", desc: "Remplacez les champs entre crochets par vos informations. Simple et rapide." },
    { num: "3", title: "Copiez et envoyez", desc: "Copiez votre lettre et envoyez-la par email ou courrier recommande." },
];

const testimonials = [
    { name: "Camille R.", role: "Assistante RH", text: "Ma lettre de motivation etait parfaitement adaptee a l'offre. J'ai decroche l'entretien des le lendemain !", stars: 5 },
    { name: "Thomas B.", role: "Particulier", text: "J'avais un litige avec mon assurance depuis 3 mois. La lettre m'a permis d'obtenir mon remboursement en une semaine.", stars: 5 },
    { name: "Sophie M.", role: "Etudiante", text: "Super pour ma demande d'alternance. La lettre etait pro et adaptee a mon profil. Je recommande.", stars: 5 },
];

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="bg-gradient-to-br from-pro-950 via-pro-800 to-pro-600 text-white py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
                        100% gratuit · Sans inscription
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Vos lettres professionnelles
                        <br />
                        <span className="text-pro-200">redigees en minutes</span>
                    </h1>
                    <p className="text-pro-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Lettre de motivation, reclamation, resiliation, litige...
                        Nos modeles gratuits sont prets a personnaliser. Copiez, adaptez et envoyez.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/motivation" className="btn-accent text-base">
                            📄 Lettre de motivation gratuite
                        </a>
                        <a href="/officielle" className="btn-secondary text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                            ⚖️ Lettre officielle gratuite
                        </a>
                    </div>
                    <p className="text-pro-300 text-sm mt-6">Sans inscription · 100% gratuit</p>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nos services gratuits
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Deux services pensés pour les situations ou rediger une bonne lettre fait toute la difference.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((s) => (
                            <div key={s.title} className="card relative">
                                {s.tag && (
                                    <div className={`absolute -top-3 left-6 text-xs font-bold px-3 py-1 rounded-full ${s.tagColor}`}>
                                        ⭐ {s.tag}
                                    </div>
                                )}
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-accent-600">Gratuit</span>
                                    <a href={s.href} className="btn-primary text-sm py-2 px-4">
                                        {s.cta} →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Pour toutes vos situations
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Que ce soit pour un emploi ou pour defendre vos droits, on vous aide a trouver les bons mots.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {useCases.map((u) => (
                            <div key={u.text} className="card-blue text-center py-4">
                                <div className="text-2xl mb-2">{u.icon}</div>
                                <p className="text-sm font-medium text-gray-700">{u.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section bg-pro-950 text-white">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                            Comment ca marche ?
                        </h2>
                        <p className="text-pro-300 max-w-lg mx-auto">Simple, rapide, sans inscription.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((s) => (
                            <div key={s.num} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-pro-600 flex items-center justify-center mx-auto mb-4">
                                    <span className="font-bold text-white text-lg">{s.num}</span>
                                </div>
                                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                                <p className="text-pro-300 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FREE TEMPLATES CTA */}
            <section className="section bg-accent-500/5 border-y border-accent-500/10">
                <div className="container text-center">
                    <div className="text-4xl mb-4">🎁</div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Des modeles gratuits a telecharger
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto mb-8">
                        Accedez a notre bibliotheque de modeles de lettres gratuits. Personnalisez et envoyez.
                    </p>
                    <a href="/modeles" className="btn-accent">
                        Voir les modeles gratuits →
                    </a>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Ce qu&apos;ils disent de nous
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {testimonials.map((t, i) => (
                            <div key={i} className="card">
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <span key={j} className="text-amber-400 text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                                    <div className="text-gray-400 text-xs">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG / GUIDES */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Nos derniers conseils
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Des guides pratiques pour rediger vos lettres et defendre vos droits.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { slug: 'comment-ecrire-lettre-de-motivation-2026', icon: '📄', title: 'Comment ecrire une lettre de motivation en 2026 ?', tag: 'Emploi' },
                            { slug: 'contester-pv-amende-2026', icon: '🚗', title: 'Comment contester un PV ou une amende en 2026 ?', tag: 'Contestation' },
                            { slug: 'lettre-resiliation-guide-complet', icon: '📱', title: 'Lettre de resiliation : le guide complet', tag: 'Resiliation' },
                        ].map((a) => (
                            <a key={a.slug} href={`/blog/${a.slug}`} className="card group text-center">
                                <div className="text-3xl mb-3">{a.icon}</div>
                                <span className="badge-free text-xs mb-2 inline-block">{a.tag}</span>
                                <h3 className="font-heading font-semibold text-gray-900 text-sm group-hover:text-pro-600 transition leading-snug">
                                    {a.title}
                                </h3>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="/blog" className="text-sm font-medium text-pro-600 hover:text-pro-700 transition">
                            Voir tous nos articles →
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="section bg-pro-600 text-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                        Pret a rediger votre lettre ?
                    </h2>
                    <p className="text-pro-100 text-lg mb-10">
                        Lettre de motivation ou lettre officielle — des modeles gratuits prets a personnaliser.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/motivation" className="btn-accent text-base">
                            📄 Lettre de motivation gratuite
                        </a>
                        <a href="/officielle" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition text-base inline-flex items-center gap-2">
                            ⚖️ Lettre officielle gratuite
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
