export interface BlogArticle {
    slug: string;
    title: string;
    description: string;
    date: string;
    icon: string;
    tag: string;
    tagColor: string;
    readTime: string;
    content: string;
    cta: { href: string; text: string };
}

export const blogArticles: BlogArticle[] = [
    {
        slug: "lettre-motivation-qui-se-demarque",
        title: "Comment rédiger une lettre de motivation qui se démarque",
        description: "Découvrez les techniques concrètes pour capter l'attention des recruteurs dès les premières lignes et décrocher un entretien.",
        date: "12 mars 2026",
        icon: "✍️",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "5 min",
        content: `## Pourquoi votre lettre de motivation est décisive

Un recruteur passe en moyenne **30 secondes** sur une lettre de motivation. Dans ce laps de temps, il décide si votre candidature mérite un second regard ou finit à la corbeille. Voici comment faire partie de ceux qui retiennent l'attention.

## L'accroche : votre arme secrète

Oubliez les formules bateau comme *"Suite à votre annonce parue sur..."*. Privilégiez une accroche percutante :

- **Citez un chiffre clé** de votre parcours : "En 3 ans, j'ai augmenté le CA de mon portefeuille de 40 %."
- **Montrez que vous connaissez l'entreprise** : "Votre engagement RSE annoncé en janvier m'a convaincu de vous écrire."
- **Posez une question** qui intrigue : "Comment transformer un service client en levier de fidélisation ?"

## La structure gagnante en 3 paragraphes

1. **Vous** — Ce qui vous attire dans l'entreprise et le poste. Montrez que vous avez fait vos recherches.
2. **Moi** — Vos compétences clés et réalisations concrètes, chiffrées si possible.
3. **Nous** — Ce que vous apporterez à l'équipe et pourquoi cette collaboration a du sens.

## Les détails qui font la différence

- **Personnalisez chaque lettre** : un copier-coller générique se repère immédiatement.
- **Restez concis** : une page maximum, 250 à 350 mots idéalement.
- **Soignez la mise en forme** : police lisible, marges aérées, paragraphes courts.
- **Relisez à voix haute** : c'est le meilleur moyen de détecter les tournures lourdes.

## Les formules de politesse à utiliser

Évitez les formules trop longues. Préférez :

- "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
- "Dans l'attente de votre retour, je reste à votre disposition pour un entretien."

## Erreur classique à éviter

Ne répétez jamais votre CV dans votre lettre. La lettre de motivation complète votre parcours en apportant du **contexte**, de la **personnalité** et de la **motivation**. C'est votre opportunité de raconter l'histoire que les bullet points de votre CV ne peuvent pas transmettre.`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "5-erreurs-lettre-motivation",
        title: "Les 5 erreurs fatales dans une lettre de motivation",
        description: "Ces erreurs courantes éliminent votre candidature avant même qu'un recruteur lise votre CV. Apprenez à les éviter.",
        date: "10 mars 2026",
        icon: "⚠️",
        tag: "Conseils",
        tagColor: "bg-red-100 text-red-700",
        readTime: "4 min",
        content: `## Des erreurs plus fréquentes qu'on ne le croit

Même les candidats expérimentés commettent ces erreurs. Selon une étude Robert Half, **76 % des recruteurs** écartent une candidature à cause de la lettre de motivation. Voici les 5 pièges les plus courants.

## Erreur n°1 : La lettre générique

❌ Envoyer la même lettre à toutes les entreprises en changeant juste le nom.

✅ **La solution** : Mentionnez au minimum le nom de l'entreprise, le poste visé et un élément spécifique (actualité, valeur, projet) qui montre votre intérêt réel.

## Erreur n°2 : Réciter son CV

❌ Transformer la lettre en liste chronologique de vos expériences.

✅ **La solution** : Sélectionnez **2 ou 3 réalisations** pertinentes pour le poste et expliquez-les avec du contexte. Ajoutez des chiffres : résultats obtenus, taille d'équipe, budget géré.

## Erreur n°3 : Trop parler de soi

❌ Commencer chaque phrase par "Je" et ne parler que de ses besoins.

✅ **La solution** : Adoptez la structure **Vous / Moi / Nous**. Montrez d'abord que vous comprenez les enjeux de l'entreprise, puis expliquez comment vous pouvez y répondre.

## Erreur n°4 : Les fautes d'orthographe

❌ Une seule faute peut suffire à éliminer votre candidature. Les recruteurs y voient un manque de rigueur.

✅ **La solution** :
- Relisez votre texte à voix haute
- Utilisez un correcteur orthographique
- Faites relire par une tierce personne
- Attendez 24h avant l'envoi final pour un regard neuf

## Erreur n°5 : Une formule de politesse bâclée

❌ Terminer par "Cordialement" tout seul ou, pire, oublier la formule de politesse.

✅ **La solution** : Utilisez une formule professionnelle complète et proposez un appel à l'action clair, comme une disponibilité pour un entretien.

## Récapitulatif

| Erreur | Impact | Solution rapide |
|---|---|---|
| Lettre générique | Éliminatoire | Personnaliser chaque envoi |
| Réciter le CV | Ennuyeux | Sélectionner 2-3 réalisations |
| Trop de "Je" | Égocentrique | Structure Vous/Moi/Nous |
| Fautes | Rédhibitoire | Triple relecture |
| Politesse bâclée | Non professionnel | Formule complète + CTA |

Ne laissez pas ces erreurs saboter vos chances. Une lettre soignée peut compenser un CV moins impressionnant.`,
        cta: { href: "/motivation", text: "📄 Générer une lettre sans erreur" },
    },
    {
        slug: "lettre-resiliation-droits-modeles",
        title: "Lettre de résiliation : vos droits et modèles",
        description: "Résiliez vos contrats en toute légalité grâce à nos modèles gratuits et nos explications sur vos droits (loi Chatel, loi Hamon).",
        date: "8 mars 2026",
        icon: "📋",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Vos droits en matière de résiliation

La législation française protège les consommateurs avec plusieurs dispositifs. Connaître vos droits vous permet de résilier sans frais et sans stress.

## La loi Chatel (2005)

Cette loi oblige les professionnels à vous **prévenir entre 3 mois et 1 mois** avant la date de reconduction automatique de votre contrat. Si l'entreprise ne respecte pas ce délai, vous pouvez résilier à tout moment sans frais.

- **Concerne** : assurances, abonnements téléphoniques, salles de sport, magazines
- **Délai** : résiliation possible dans les 20 jours suivant la date d'envoi du rappel

## La loi Hamon (2014)

Elle permet de **résilier à tout moment après 1 an** d'engagement pour certains contrats :

- Assurance auto et moto
- Assurance habitation
- Assurance emprunteur (affinitaire)

**Le plus** : c'est votre nouvel assureur qui s'occupe des démarches de résiliation.

## La loi Infra-annuelle (2023)

Depuis 2023, vous pouvez résilier **en 3 clics** en ligne pour de nombreux contrats. L'entreprise doit mettre à disposition un bouton de résiliation visible sur son site.

## Comment rédiger votre lettre de résiliation

### Les éléments obligatoires

- Vos coordonnées complètes
- Les références du contrat (numéro, date de souscription)
- L'objet clair : "Résiliation du contrat n°..."
- La mention de la loi applicable (Chatel, Hamon ou autre)
- La demande de confirmation écrite

### Les bonnes pratiques

- **Envoyez en recommandé avec AR** : c'est la seule preuve juridiquement valable
- **Conservez une copie** de votre lettre et de l'accusé de réception
- **Respectez le préavis** indiqué dans vos conditions générales
- **Demandez le remboursement** du trop-perçu si applicable

## Modèle type

Votre lettre doit être courte et factuelle. Évitez les justifications longues : vous exercez un droit, pas une faveur. Indiquez simplement les références légales et la date souhaitée de prise d'effet.

## Que faire en cas de refus ?

Si l'entreprise refuse votre résiliation alors que vous êtes dans votre droit :

1. Renvoyez votre demande en recommandé avec AR en citant la loi précise
2. Contactez le **médiateur** du secteur concerné
3. En dernier recours, saisissez la **DGCCRF** ou le tribunal d'instance`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de résiliation" },
    },
    {
        slug: "contester-amende-guide-complet",
        title: "Comment contester une amende : guide complet",
        description: "Radar, stationnement, excès de vitesse : découvrez les procédures et modèles pour contester une amende efficacement.",
        date: "5 mars 2026",
        icon: "🚗",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Peut-on vraiment contester une amende ?

Oui, contester une amende est un **droit fondamental**. Chaque année, des milliers de contraventions sont annulées pour vice de forme ou erreur matérielle. Encore faut-il connaître la procédure.

## Les motifs de contestation recevables

### Erreur matérielle
- Mauvaise plaque d'immatriculation
- Véhicule vendu ou volé à la date de l'infraction
- Erreur sur le lieu ou la date

### Vices de procédure
- Absence de signalisation conforme
- PV non remis dans les délais légaux
- Radar non homologué ou mal calibré

### Cas de force majeure
- Urgence médicale justifiée
- Panne mécanique imprévisible
- Passage imposé par un agent de police

## La procédure étape par étape

1. **Ne payez pas l'amende** — Le paiement vaut reconnaissance de l'infraction et rend toute contestation impossible.
2. **Consignez le montant** — Déposez une consignation (pas un paiement) si l'amende est forfaitaire.
3. **Rédigez une requête en exonération** — Adressée à l'Officier du Ministère Public (OMP).
4. **Joignez les preuves** — Photos, témoignages, certificat de vente, attestation médicale.
5. **Envoyez en recommandé avec AR** dans le délai de **45 jours**.

## Les délais à respecter

| Type d'amende | Délai de contestation |
|---|---|
| Amende forfaitaire | 45 jours |
| Amende majorée | 30 jours |
| Amende PV électronique | 45 jours |

## Les pièces à joindre

- L'original ou la copie de l'avis de contravention
- Le formulaire de requête en exonération (joint à l'avis)
- Vos preuves et justificatifs
- Une copie de votre pièce d'identité

## Conseils pour maximiser vos chances

- **Soyez factuel** : évitez les arguments émotionnels, tenez-vous aux faits et aux textes de loi
- **Citez les articles** du Code de la route concernés
- **Joignez un maximum de preuves** : photos horodatées, témoignages écrits, documents officiels
- **Respectez scrupuleusement les délais** : hors délai = contestation irrecevable

## Et après ?

L'OMP peut classer sans suite (vous gagnez), renvoyer devant le tribunal de police, ou rejeter votre demande. Dans ce dernier cas, vous pouvez encore faire appel devant le tribunal.`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de contestation" },
    },
    {
        slug: "lettre-recommandation-guide",
        title: "Lettre de recommandation : comment la demander et la rédiger",
        description: "Guide complet pour obtenir ou rédiger une lettre de recommandation percutante qui valorise un parcours professionnel.",
        date: "3 mars 2026",
        icon: "⭐",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "4 min",
        content: `## Le pouvoir d'une bonne recommandation

Une lettre de recommandation crédible peut faire basculer une décision de recrutement. **68 % des recruteurs** considèrent les recommandations comme un critère important dans leur choix final.

## Comment demander une recommandation

### À qui la demander ?
- Un **ancien manager direct** qui connaît votre travail au quotidien
- Un **client** avec qui vous avez mené un projet réussi
- Un **collègue senior** qui peut témoigner de vos compétences
- Un **professeur** pour les jeunes diplômés

### Quand la demander ?
- **Idéalement avant votre départ** de l'entreprise
- Au minimum **2 semaines à l'avance** pour laisser le temps à la rédaction
- **Jamais en période de conflit** ou de tension

### Comment formuler la demande ?
- Rappelez le contexte de votre collaboration
- Expliquez pourquoi vous sollicitez cette personne en particulier
- Précisez le poste ou le secteur visé
- Proposez de fournir des **éléments clés** à mentionner (projets, résultats)

## Comment rédiger une recommandation

Si on vous demande de rédiger une lettre de recommandation pour un collègue, voici la structure idéale :

### 1. Introduction
- Votre identité et votre fonction
- Votre lien avec la personne recommandée
- La durée de votre collaboration

### 2. Compétences professionnelles
- **2 à 3 qualités clés** illustrées par des exemples concrets
- Des résultats chiffrés si possible
- Les responsabilités confiées et tenues

### 3. Qualités personnelles
- Esprit d'équipe, fiabilité, initiative
- Un exemple de situation difficile bien gérée

### 4. Conclusion
- Une recommandation claire et sans ambiguïté
- Vos coordonnées pour un éventuel contact

## Les erreurs à éviter

- **Rester trop vague** : "C'est quelqu'un de bien" ne suffit pas
- **En faire trop** : une recommandation dithyrambique perd en crédibilité
- **Oublier les exemples concrets** : les recruteurs veulent des faits, pas des adjectifs
- **Négliger la mise en forme** : utilisez du papier à en-tête si possible

## Astuce : la recommandation LinkedIn

En complément de la lettre formelle, demandez une **recommandation sur LinkedIn**. Elle est visible par tous les recruteurs et renforce votre profil. Proposez d'écrire un brouillon que votre contact pourra ajuster.`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "mise-en-demeure-quand-comment",
        title: "Mise en demeure : quand et comment l'envoyer",
        description: "Tout savoir sur la mise en demeure : dans quels cas l'utiliser, comment la rédiger et quels sont ses effets juridiques.",
        date: "1 mars 2026",
        icon: "⚖️",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "5 min",
        content: `## Qu'est-ce qu'une mise en demeure ?

La mise en demeure est un courrier formel qui **somme une personne ou une entreprise** de respecter une obligation dans un délai précis. C'est souvent la dernière étape avant une action en justice, et elle est prise très au sérieux.

## Dans quels cas envoyer une mise en demeure ?

- **Facture impayée** : un client ou un fournisseur qui ne règle pas
- **Travaux non réalisés** : un artisan qui ne termine pas un chantier
- **Produit défectueux** : un vendeur qui refuse le remboursement ou l'échange
- **Nuisances** : un voisin qui ne respecte pas le règlement de copropriété
- **Non-restitution** : un propriétaire qui ne rend pas le dépôt de garantie

## Les effets juridiques

La mise en demeure a une **valeur légale importante** :

- Elle fait courir les **intérêts de retard** (article 1231-6 du Code civil)
- Elle constitue une **preuve de votre bonne foi** devant un tribunal
- Elle déclenche le délai au-delà duquel vous pouvez agir en justice
- Elle montre votre détermination et pousse souvent à un règlement amiable

## Comment rédiger une mise en demeure efficace

### Les mentions obligatoires

- La mention **"Mise en demeure"** clairement visible dans l'objet
- L'identité complète des deux parties
- Le rappel précis de l'obligation non respectée
- Les **références** : contrat, facture, devis, date des faits
- Un **délai raisonnable** pour s'exécuter (généralement 8 à 15 jours)
- La mention des **actions envisagées** en cas de non-respect (tribunal, huissier)

### Le ton à adopter

- **Ferme mais courtois** : restez professionnel, évitez les menaces excessives
- **Factuel** : citez les dates, montants et références précises
- **Juridique** : mentionnez les articles de loi applicables

## L'envoi : les règles à respecter

- **Toujours en recommandé avec accusé de réception** (LRAR)
- Conservez une copie du courrier et de l'AR
- Notez la date d'envoi et la date de réception
- Le délai court à compter de la **date de réception**, pas d'envoi

## Et si la mise en demeure reste sans réponse ?

| Délai écoulé | Action possible |
|---|---|
| Après le délai fixé | Saisir le tribunal compétent |
| Montant < 5 000 € | Tribunal de proximité |
| Montant > 5 000 € | Tribunal judiciaire |
| Litige professionnel | Tribunal de commerce |

Avant le tribunal, vous pouvez aussi tenter la **médiation** ou la **conciliation**, souvent obligatoire pour les litiges de moins de 5 000 €.

## Conseil final

Une mise en demeure bien rédigée résout **plus de 60 % des litiges** sans passer par la case tribunal. C'est un outil puissant et peu coûteux : le prix d'un recommandé suffit.`,
        cta: { href: "/officielle", text: "⚖️ Générer ma mise en demeure" },
    },
    {
        slug: "candidature-spontanee-reussir-2026",
        title: "Réussir sa candidature spontanée en 2026",
        description: "La candidature spontanée reste un levier puissant. Voici la méthode complète pour cibler les bonnes entreprises et se faire remarquer.",
        date: "26 février 2026",
        icon: "🎯",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "4 min",
        content: `## Pourquoi la candidature spontanée fonctionne encore

En 2026, **60 % des embauches** se font sans offre publiée. Les entreprises recrutent via leur réseau, les cooptations et... les candidatures spontanées. C'est le **marché caché** de l'emploi, et il est accessible à tous.

## Étape 1 : Cibler les bonnes entreprises

Ne tirez pas dans le vide. Identifiez les entreprises qui vous correspondent :

- **Consultez leurs actualités** : levée de fonds, ouverture de bureau, nouveau contrat = besoin de recruter
- **Analysez LinkedIn** : des postes ouverts dans un département signalent une croissance
- **Utilisez des outils** : Societe.com pour la santé financière, Glassdoor pour la culture interne
- **Visez les PME** : elles sont plus réactives et moins submergées de candidatures

## Étape 2 : Trouver le bon interlocuteur

N'envoyez jamais votre candidature à *"recrutement@entreprise.fr"*. Identifiez la personne qui décide :

- Le **responsable du département** qui vous intéresse
- Le **DRH** ou **talent acquisition** pour les grandes structures
- Le **dirigeant** pour les TPE/PME

**Astuce** : LinkedIn est votre meilleur allié. Cherchez par entreprise + intitulé de poste.

## Étape 3 : Rédiger une lettre percutante

Votre candidature spontanée doit répondre à 3 questions :

1. **Pourquoi cette entreprise ?** — Montrez que ce n'est pas un envoi massif
2. **Quel problème pouvez-vous résoudre ?** — Identifiez un besoin et proposez une solution
3. **Pourquoi vous ?** — Vos compétences clés et une réalisation marquante

### Structure recommandée

- **Accroche** : un fait concret sur l'entreprise qui vous motive
- **Votre valeur ajoutée** : 2-3 compétences illustrées par des résultats
- **Proposition** : demandez un échange informel, pas un poste directement

## Étape 4 : Le suivi qui fait la différence

- **Relancez après 7 à 10 jours** si vous n'avez pas de réponse
- Appelez ou envoyez un **email court** de relance
- Proposez un **café ou un appel de 15 minutes** plutôt qu'un entretien formel
- Si la réponse est négative, demandez s'il est possible de **rester en contact** pour de futures opportunités

## Les chiffres qui motivent

| Statistique | Chiffre |
|---|---|
| Embauches via marché caché | 60 % |
| Taux de réponse candidature spontanée ciblée | 15-25 % |
| Taux de réponse envoi massif non ciblé | 1-3 % |

La candidature spontanée n'est pas un coup de poker. C'est une **démarche stratégique** qui, bien menée, ouvre des portes que les sites d'emploi ne montrent jamais.`,
        cta: { href: "/motivation", text: "📄 Générer ma candidature spontanée" },
    },
    {
        slug: "lettre-proprietaire-modeles",
        title: "Lettre au propriétaire : tous les modèles utiles",
        description: "Demande de travaux, congé, contestation de charges : retrouvez tous les modèles de lettres pour communiquer avec votre propriétaire.",
        date: "22 février 2026",
        icon: "🏠",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Communiquer efficacement avec son propriétaire

La relation locataire-propriétaire repose sur des droits et obligations précis. Pour faire valoir vos droits, il est essentiel de **communiquer par écrit** et de conserver une trace de vos échanges.

## Demande de réparations et travaux

Le propriétaire est tenu d'effectuer les **réparations importantes** (article 6 de la loi du 6 juillet 1989) :

- Toiture, murs, canalisations
- Chauffage, eau chaude, électricité
- Remplacement d'équipements vétustes

### Comment formuler votre demande

- Décrivez le problème de manière **précise et factuelle**
- Joignez des **photos** si possible
- Fixez un **délai raisonnable** (15 à 30 jours)
- Mentionnez l'article de loi applicable
- Envoyez en recommandé si le problème persiste après un premier courrier simple

## Congé du locataire (préavis de départ)

### Les délais de préavis

| Situation | Préavis |
|---|---|
| Zone tendue | 1 mois |
| Zone non tendue | 3 mois |
| Mutation professionnelle | 1 mois |
| Perte d'emploi | 1 mois |
| Premier emploi | 1 mois |
| Bénéficiaire RSA/AAH | 1 mois |

### Les mentions obligatoires

- La date de prise d'effet du congé
- Le motif si vous demandez un préavis réduit (avec justificatif)
- Votre nouvelle adresse pour la restitution du dépôt de garantie

## Contestation de charges locatives

Vous avez le droit de **vérifier les charges** facturées par votre propriétaire. Il doit vous fournir les justificatifs sur simple demande.

- Demandez le **détail des charges** et les pièces justificatives
- Comparez avec la **régularisation annuelle**
- En cas de désaccord, saisissez la **commission départementale de conciliation** (gratuit)

## Restitution du dépôt de garantie

Le propriétaire dispose de :
- **1 mois** pour restituer le dépôt si l'état des lieux de sortie est conforme
- **2 mois** si des dégradations sont constatées

Passé ce délai, le montant est majoré de **10 % du loyer** par mois de retard. Si votre propriétaire ne réagit pas, une lettre de mise en demeure est la prochaine étape.

## Conseils généraux

- **Privilégiez toujours l'écrit** : un SMS ou un appel ne constitue pas une preuve suffisante
- **Gardez des copies** de tous vos courriers
- **Soyez courtois mais ferme** : citez les textes de loi sans agressivité
- **Respectez les délais** : chaque procédure a ses propres échéances
- En cas de litige persistant, l'**ADIL** (Agence Départementale d'Information sur le Logement) offre des conseils juridiques gratuits`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre au propriétaire" },
    },
];
