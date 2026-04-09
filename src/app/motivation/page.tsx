import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lettre de motivation gratuite : modeles et conseils 2026 — Lettre Pro",
    description: "Modeles de lettres de motivation gratuits, prets a personnaliser. Conseils de redaction, structure ideale et exemples pour stage, CDI, alternance.",
};

const modeles = [
    {
        title: "Lettre de motivation — CDI",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

Objet : Candidature au poste de [Intitule du poste]

Madame, Monsieur,

Votre offre de [intitule du poste] publiee sur [source] a retenu toute mon attention. Fort(e) de [X annees] d'experience en [domaine], je souhaite mettre mes competences au service de [Nom de l'entreprise].

Au cours de mon parcours chez [Entreprise precedente], j'ai [realization concrete avec chiffres si possible]. Cette experience m'a permis de developper [competences cles en lien avec le poste].

Votre entreprise se distingue par [element specifique : projet, valeurs, innovation]. C'est pourquoi je serais enthousiaste a l'idee de contribuer a [objectif de l'equipe/entreprise].

Je me tiens a votre disposition pour un entretien a votre convenance.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Lettre de motivation — Stage / Alternance",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

Objet : Candidature pour un stage de [duree] en [domaine]

Madame, Monsieur,

Actuellement en [formation] a [ecole/universite], je recherche un stage de [duree] a partir du [date] dans le domaine de [domaine].

Votre entreprise [element specifique qui montre que vous connaissez l'entreprise] correspond parfaitement a mon projet professionnel. Au cours de ma formation, j'ai acquis des competences en [competences pertinentes] et realise [projet concret].

Curieux(se) et motive(e), je souhaite mettre en pratique mes connaissances et apprendre aupres de vos equipes. Je suis disponible a partir du [date] pour une duree de [X] mois.

Dans l'attente de vous rencontrer, je reste a votre disposition pour un entretien.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Lettre de motivation — Reconversion professionnelle",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

Objet : Candidature au poste de [Intitule du poste]

Madame, Monsieur,

Apres [X annees] dans le secteur de [ancien secteur], j'ai decide de me reconvertir vers [nouveau domaine] par passion pour [motivation]. Votre offre de [poste] represente l'opportunite ideale pour concretiser ce projet.

Mon experience precedente m'a permis de developper des competences transferables : [competences : gestion de projet, relation client, analyse, etc.]. J'ai complete cette transition par [formation, certification, auto-formation].

Ce qui fait ma force, c'est [qualite differenciante : regard neuf, polyvalence, maturite professionnelle]. Je suis convaincu(e) que cette double competence sera un atout pour votre equipe.

Je serais ravi(e) de vous expliquer mon parcours plus en detail lors d'un entretien.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
];

export default function MotivationPage() {
    return (
        <>
            {/* HEADER */}
            <section className="bg-gradient-to-br from-pro-950 to-pro-800 text-white py-14 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">📄</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
                        Lettre de motivation gratuite
                        <span className="block text-pro-200 text-2xl sm:text-3xl mt-2 font-normal">Modeles prets a personnaliser</span>
                    </h1>
                    <p className="text-pro-200 text-base sm:text-lg max-w-xl mx-auto">
                        Copiez nos modeles de lettres de motivation, personnalisez les champs entre crochets et envoyez. 100% gratuit.
                    </p>
                </div>
            </section>

            {/* MODELES */}
            <section className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="space-y-8">
                        {modeles.map((m, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                    <h2 className="font-heading font-bold text-gray-900">{m.title}</h2>
                                    <span className="badge-free text-xs">Gratuit</span>
                                </div>
                                <div className="p-6">
                                    <pre className="text-xs text-gray-600 whitespace-pre-wrap leading-relaxed font-mono">
                                        {m.content}
                                    </pre>
                                </div>
                                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                                    <p className="text-xs text-gray-400">Copiez ce modele et personnalisez les champs entre crochets [ ]</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSEILS */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-heading text-2xl font-bold text-gray-900 text-center mb-10">
                        Conseils pour une lettre de motivation efficace
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { title: "Personnalisez chaque lettre", desc: "Mentionnez le nom de l'entreprise et le poste. Un recruteur repere une lettre generique en 5 secondes." },
                            { title: "Soyez concis : 300 mots max", desc: "Les recruteurs passent 30 secondes sur une lettre. Allez a l'essentiel avec des paragraphes courts." },
                            { title: "Montrez, ne dites pas", desc: "Au lieu de 'je suis motive', donnez un exemple concret de realisation avec des chiffres." },
                            { title: "Terminez par un appel a l'action", desc: "Proposez un entretien et montrez votre proactivite. Ne restez pas passif." },
                        ].map((c, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <a href="/blog/comment-ecrire-lettre-de-motivation-2026" className="text-sm font-medium text-pro-600 hover:text-pro-700 transition">
                            Lire notre guide complet sur la lettre de motivation →
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <a href="/modeles" className="btn-primary">
                        Voir tous nos modeles gratuits →
                    </a>
                </div>
            </section>
        </>
    );
}
