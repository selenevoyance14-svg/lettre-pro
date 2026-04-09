import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lettres officielles gratuites : modeles resiliation, reclamation, litige — Lettre Pro",
    description: "Modeles de lettres officielles gratuits : resiliation, reclamation, mise en demeure, contestation PV, litige banque. Prets a personnaliser.",
};

const modeles = [
    {
        title: "Lettre de resiliation d'abonnement",
        tag: "Resiliation",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

[Nom de l'entreprise]
[Adresse du service client]

Objet : Demande de resiliation — Contrat n°[XXXXXXXX]

Madame, Monsieur,

Par la presente, je vous notifie ma decision de resilier mon abonnement [type] souscrit le [date] sous le numero de contrat [numero].

Conformement a la loi Hamon du 17 mars 2014 et aux dispositions de l'article L.215-1 du Code de la consommation, cette resiliation doit prendre effet dans un delai maximum de [delai selon contrat].

Je vous demande de bien vouloir :
- Confirmer la prise en compte de ma demande par ecrit
- M'indiquer la date effective de resiliation
- Cesser tout prelevement a compter de cette date

Dans l'attente de votre reponse sous 8 jours ouvres, veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Mise en demeure",
        tag: "Juridique",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

[Nom du destinataire]
[Adresse]

Objet : MISE EN DEMEURE

Lettre recommandee avec accuse de reception

Madame, Monsieur,

Par la presente, je vous mets en demeure de [action demandee : proceder au remboursement / executer les travaux / livrer la commande] dans un delai de 8 jours ouvres a compter de la reception de ce courrier.

Rappel des faits :
Le [date], [description chronologique des faits]. Malgre mes relances des [dates], vous n'avez pas [donne suite / respecte vos engagements].

Base juridique :
Conformement a l'article [1231-1 du Code civil / L.217-4 du Code de la consommation], vous etes tenu(e) de [obligation].

A defaut de reponse satisfaisante dans le delai imparti, je me reserve le droit de saisir la juridiction competente afin d'obtenir [remboursement + dommages et interets].

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Reclamation au proprietaire",
        tag: "Logement",
        content: `[Votre Prenom NOM]
[Votre adresse]
[Ville, le JJ/MM/AAAA]

[Nom du proprietaire / agence]
[Adresse]

Objet : Demande d'intervention — [nature du probleme]

Madame, Monsieur,

Je me permets de vous contacter en tant que locataire du logement situe au [adresse], occupe depuis le [date d'entree].

Je constate depuis le [date] le probleme suivant : [description precise : fuite, chauffage en panne, humidite, equipement defectueux].

Conformement a l'article 6 de la loi du 6 juillet 1989, le proprietaire est tenu de maintenir le logement en bon etat et de proceder aux reparations necessaires.

Je vous demande donc de bien vouloir faire intervenir un professionnel dans les meilleurs delais. A defaut de reponse sous 15 jours, je me verrai contraint(e) d'engager les demarches necessaires.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Contestation de PV / amende",
        tag: "Contestation",
        content: `[Votre Prenom NOM]
[Votre adresse]
[N° de permis de conduire]
[Ville, le JJ/MM/AAAA]

Officier du Ministere Public
[Adresse du tribunal / centre de traitement]

Objet : Contestation de l'avis de contravention n°[XXXXXXXX]

Madame, Monsieur l'Officier du Ministere Public,

J'ai l'honneur de contester la contravention n°[numero] dressee le [date] a [lieu] pour le motif suivant : [motif de l'infraction].

Motif de la contestation :
[Expliquez clairement : vous n'etiez pas le conducteur / signalisation absente / erreur materielle / vice de procedure]

Pieces jointes :
- [Formulaire de requete en exoneration]
- [Copie de la carte grise]
- [Photos / attestations / preuves]

En consequence, je vous demande de bien vouloir classer sans suite cette contravention.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
    {
        title: "Contestation de frais bancaires",
        tag: "Banque",
        content: `[Votre Prenom NOM]
[Votre adresse]
[N° de compte : XXXXXXXX]
[Ville, le JJ/MM/AAAA]

[Nom de la banque]
Service Reclamations
[Adresse]

Objet : Contestation de frais bancaires injustifies

Madame, Monsieur,

Je me permets de contester les frais suivants preleves sur mon compte n°[numero] :
- [Date] : [montant] — [libelle du frais]
- [Date] : [montant] — [libelle du frais]

Ces frais me paraissent injustifies pour les raisons suivantes : [frais non notifies 14 jours avant / depassement des plafonds legaux / prelevement non autorise].

Conformement a l'article L.312-1-1 du Code monetaire et financier, je vous demande le remboursement de la somme de [montant total] dans un delai de 8 jours ouvres.

A defaut de reponse, je me reserve le droit de saisir le mediateur bancaire.

Veuillez agreer, Madame, Monsieur, l'expression de mes salutations distinguees.

[Signature]`,
    },
];

export default function OfficiellePage() {
    return (
        <>
            {/* HEADER */}
            <section className="bg-gradient-to-br from-pro-950 to-pro-800 text-white py-14 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">⚖️</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4">
                        Lettres officielles gratuites
                        <span className="block text-pro-200 text-2xl sm:text-3xl mt-2 font-normal">Modeles prets a personnaliser</span>
                    </h1>
                    <p className="text-pro-200 text-base sm:text-lg max-w-xl mx-auto">
                        Resiliation, reclamation, mise en demeure, contestation... Copiez nos modeles et faites valoir vos droits.
                    </p>
                </div>
            </section>

            {/* CAS D'USAGE */}
            <section className="bg-pro-50 border-b border-pro-100 py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        {["📱 Resiliation", "📦 Reclamation", "🏥 Litige assurance", "⚖️ Mise en demeure", "🚗 Contestation PV", "🏦 Litige banque", "🏠 Proprietaire"].map(tag => (
                            <span key={tag} className="bg-white border border-pro-200 text-pro-700 px-3 py-1 rounded-full font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODELES */}
            <section className="py-14 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="space-y-8">
                        {modeles.map((m, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <h2 className="font-heading font-bold text-gray-900">{m.title}</h2>
                                        <span className="badge-free text-xs">{m.tag}</span>
                                    </div>
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
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                        Nos guides pratiques
                    </h2>
                    <p className="text-gray-500 text-sm mb-8">
                        Consultez nos articles pour rediger des lettres encore plus percutantes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="/blog/lettre-resiliation-guide-complet" className="btn-secondary text-sm">Guide resiliation</a>
                        <a href="/blog/contester-pv-amende-2026" className="btn-secondary text-sm">Contester un PV</a>
                        <a href="/blog/modele-mise-en-demeure" className="btn-secondary text-sm">Mise en demeure</a>
                        <a href="/blog/lettre-banque-frais-abusifs" className="btn-secondary text-sm">Frais bancaires</a>
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
