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
    {
        slug: "entretien-embauche-preparation-complete",
        title: "Bien préparer son entretien d'embauche : le guide complet",
        description: "Toutes les étapes pour arriver confiant le jour J : recherches, questions fréquentes, posture et erreurs à éviter.",
        date: "15 mars 2026",
        icon: "🎤",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "6 min",
        content: `## L'entretien se gagne avant le jour J

Un entretien réussi, c'est **80 % de préparation** et 20 % d'improvisation. Les candidats qui décrochent le poste sont ceux qui ont investi du temps en amont.

## Les recherches indispensables

Avant chaque entretien, collectez un maximum d'informations :

- **L'entreprise** : chiffre d'affaires, actualités récentes, concurrents, culture
- **Le poste** : missions détaillées, compétences attendues, évolutions possibles
- **L'interlocuteur** : son parcours LinkedIn, son rôle dans l'entreprise
- **Le secteur** : tendances, défis, opportunités du marché

## Les 10 questions les plus fréquentes

1. Parlez-moi de vous (pitch de 2 minutes maximum)
2. Pourquoi cette entreprise ?
3. Quels sont vos points forts et vos axes d'amélioration ?
4. Racontez une situation difficile et comment vous l'avez gérée
5. Où vous voyez-vous dans 5 ans ?
6. Pourquoi quittez-vous votre poste actuel ?
7. Quelle est votre prétention salariale ?
8. Comment travaillez-vous en équipe ?
9. Qu'est-ce qui vous motive au quotidien ?
10. Avez-vous des questions ?

## La méthode STAR pour structurer vos réponses

- **Situation** : décrivez le contexte
- **Tâche** : expliquez votre rôle
- **Action** : détaillez ce que vous avez fait
- **Résultat** : quantifiez l'impact

## Le langage corporel

- Poignée de main ferme mais pas écrasante
- Contact visuel régulier sans fixer
- Posture ouverte, légèrement penchée vers l'avant
- Sourire naturel
- Évitez les bras croisés et les gestes nerveux

## Les erreurs éliminatoires

- Arriver en retard (prévoyez 15 minutes d'avance)
- Critiquer son ancien employeur
- Ne poser aucune question à la fin
- Mentir sur ses compétences
- Consulter son téléphone

## Pour aller plus loin

Pour approfondir votre préparation, ces ouvrages sont des références reconnues par les recruteurs :

- [Réussir ses entretiens d'embauche — Christel de Foucault](https://www.amazon.fr/dp/2100853686?tag=lebrunnathali-21) : un guide pratique avec des mises en situation concrètes
- [Le guide du CV et de l'entretien d'embauche — Uriel Megnassan](https://www.amazon.fr/dp/2212572239?tag=lebrunnathali-21) : idéal pour préparer chaque étape du recrutement`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "cv-parfait-regles-or-2026",
        title: "CV parfait : les règles d'or en 2026",
        description: "Mise en page, contenu, mots-clés ATS : tout ce qu'il faut savoir pour créer un CV qui passe les filtres et séduit les recruteurs.",
        date: "14 mars 2026",
        icon: "📄",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "5 min",
        content: `## Le CV reste votre carte de visite professionnelle

En 2026, les recruteurs reçoivent en moyenne **250 candidatures par offre**. Votre CV a 6 secondes pour convaincre. Voici comment le rendre percutant.

## Les fondamentaux d'un bon CV

### La mise en page

- **Une seule page** pour moins de 10 ans d'expérience
- **Deux pages maximum** pour les profils seniors
- Police lisible : Calibri, Arial ou Garamond en taille 10-11
- Marges de 2 cm minimum
- Espacement aéré entre les sections

### Les rubriques essentielles

1. **En-tête** : nom, titre du poste visé, coordonnées, LinkedIn
2. **Accroche** : 2-3 lignes résumant votre valeur ajoutée
3. **Expériences** : du plus récent au plus ancien, avec résultats chiffrés
4. **Formation** : diplômes pertinents uniquement
5. **Compétences** : techniques et linguistiques

## Passer les filtres ATS

Les ATS (Applicant Tracking Systems) sont des logiciels qui filtrent les CV avant qu'un humain ne les voie. Pour les franchir :

- Utilisez les **mots-clés exacts** de l'offre d'emploi
- Évitez les tableaux, colonnes multiples et graphiques
- Privilégiez un format **PDF simple** ou Word
- N'utilisez pas d'en-têtes ou pieds de page pour les informations importantes

## Les chiffres qui font la différence

Un CV avec des résultats chiffrés a **40 % plus de chances** d'être retenu :

- "Augmentation du CA de 25 % en 18 mois"
- "Management d'une équipe de 12 personnes"
- "Réduction des coûts de 15 % grâce à l'optimisation des process"

## Les erreurs classiques

| Erreur | Pourquoi c'est grave |
|---|---|
| Photo non professionnelle | Première impression ratée |
| Adresse email fantaisiste | Manque de sérieux |
| Fautes d'orthographe | Éliminatoire pour 35 % des recruteurs |
| Mensonges | Vérifiés dans 80 % des cas |
| CV de plus de 3 pages | Jamais lu en entier |

## Nos recommandations de lecture

- [Rédiger un CV efficace — Christel de Foucault](https://www.amazon.fr/dp/2212577222?tag=lebrunnathali-21) : toutes les astuces pour se démarquer sur papier
- [60 CV commentés — Fursac et Barret](https://www.amazon.fr/dp/2100825798?tag=lebrunnathali-21) : exemples réels analysés par des recruteurs`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "lettre-demission-guide-modeles",
        title: "Lettre de démission : guide complet et modèles",
        description: "Comment démissionner dans les règles : préavis, formalités, modèles de lettres pour CDI, CDD et période d'essai.",
        date: "13 mars 2026",
        icon: "📝",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Démissionner : un droit, mais avec des règles

La démission est un acte unilatéral du salarié. Elle n'a pas besoin d'être acceptée par l'employeur, mais elle doit respecter certaines formalités pour être valable.

## Les conditions de la démission

### En CDI

- **Aucune justification** n'est nécessaire
- Le **préavis** est obligatoire sauf accord de l'employeur
- La démission doit être **claire et non équivoque**
- Pas de formalisme obligatoire, mais l'écrit est fortement recommandé

### Les durées de préavis courantes

| Catégorie | Préavis habituel |
|---|---|
| Employé | 1 mois |
| Agent de maîtrise | 2 mois |
| Cadre | 3 mois |
| Période d'essai | 48h à 1 mois |

### En CDD

La démission en CDD n'est possible que dans 3 cas :

- Embauche en CDI ailleurs (justificatif obligatoire)
- Accord amiable avec l'employeur
- Faute grave de l'employeur

## Les mentions à inclure dans votre lettre

- Votre identité et votre poste
- La mention explicite de votre **volonté de démissionner**
- La date de début du préavis
- La date de départ souhaitée
- Une formule de politesse professionnelle

## Ce qu'il ne faut jamais écrire

- Des reproches ou critiques envers l'entreprise
- Les vrais motifs négatifs de votre départ
- Des menaces ou du chantage
- Des informations confidentielles

## Vos droits après la démission

- **Solde de tout compte** : dernier salaire, congés payés non pris, primes au prorata
- **Certificat de travail** : obligatoire, l'employeur doit le fournir
- **Attestation Pôle Emploi** : vous la recevez mais pas de droit au chômage (sauf cas particuliers)
- **Portabilité** : mutuelle et prévoyance maintenues jusqu'à 12 mois

## Négocier une dispense de préavis

Votre employeur peut vous dispenser de préavis. Dans ce cas :

- Demandez-le **par écrit**
- S'il accepte, il doit vous verser une **indemnité compensatrice** égale au salaire du préavis
- S'il refuse, vous devez effectuer votre préavis sous peine de devoir des dommages-intérêts

## Lecture recommandée

- [Droit du travail pour les nuls — Julien Boutiron](https://www.amazon.fr/dp/2412093474?tag=lebrunnathali-21) : pour comprendre tous vos droits en tant que salarié`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de démission" },
    },
    {
        slug: "reconversion-professionnelle-guide-2026",
        title: "Reconversion professionnelle : par où commencer en 2026",
        description: "Les étapes clés pour réussir votre changement de carrière : bilan, financement, formation et premiers pas concrets.",
        date: "11 mars 2026",
        icon: "🔄",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "6 min",
        content: `## La reconversion n'est plus un tabou

En 2026, **1 actif sur 3** envisage une reconversion professionnelle. Le marché du travail évolue vite et changer de voie est devenu un signe de courage et d'adaptabilité, plus un aveu d'échec.

## Étape 1 : Faire le point sur soi

Avant de foncer tête baissée, prenez le temps de l'introspection :

- **Qu'est-ce qui ne vous convient plus** dans votre poste actuel ?
- **Qu'est-ce qui vous anime** vraiment au quotidien ?
- **Quelles compétences** sont transférables à un autre domaine ?
- **Quelles contraintes** devez-vous respecter (financières, géographiques, familiales) ?

### Le bilan de compétences

C'est l'outil officiel pour structurer cette réflexion :

- Durée : **24 heures** réparties sur plusieurs semaines
- Finançable par le **CPF** (Compte Personnel de Formation)
- Accompagnement par un consultant spécialisé
- Résultat : un document de synthèse avec un plan d'action

## Étape 2 : Explorer les pistes

- **Enquêtes métier** : rencontrez des professionnels du secteur visé
- **Immersions** : stages d'observation via Pôle Emploi ou l'APEC
- **MOOC et formations courtes** : testez un domaine avant de vous engager
- **Salons professionnels** : découvrez les réalités du terrain

## Étape 3 : Financer sa reconversion

| Dispositif | Pour qui | Montant |
|---|---|---|
| CPF | Tous les actifs | Jusqu'à 5 000 € |
| Transitions Pro | Salariés en CDI | Maintien du salaire |
| AIRE | Demandeurs d'emploi | Formation financée |
| Plan de développement | Via l'employeur | Variable |

## Étape 4 : Se former

Les formations les plus demandées en reconversion :

- **Numérique** : développement web, data, cybersécurité
- **Santé** : aide-soignant, infirmier
- **Artisanat** : boulangerie, ébénisterie, plomberie
- **Enseignement** : professorat, formation professionnelle

## Étape 5 : Candidater avec un profil atypique

Votre lettre de motivation est cruciale en reconversion. Elle doit :

- Expliquer votre **motivation profonde** pour ce changement
- Valoriser vos **compétences transférables**
- Montrer votre **connaissance du nouveau secteur**
- Prouver votre **engagement** (formations suivies, stages réalisés)

## Lectures pour accompagner votre transition

- [Réussir sa reconversion — Sylvie Protassieff](https://www.amazon.fr/dp/2212573510?tag=lebrunnathali-21) : une méthode éprouvée étape par étape
- [Quel métier est fait pour moi ? — Isabelle Servant](https://www.amazon.fr/dp/2412084963?tag=lebrunnathali-21) : pour identifier le métier qui vous correspond vraiment`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de reconversion" },
    },
    {
        slug: "lettre-reclamation-faire-valoir-droits",
        title: "Lettre de réclamation : faire valoir ses droits efficacement",
        description: "Produit défectueux, service non rendu, erreur de facturation : comment rédiger une réclamation qui obtient une réponse.",
        date: "9 mars 2026",
        icon: "📢",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Pourquoi écrire plutôt qu'appeler

Un appel téléphonique ne laisse aucune trace. Une lettre de réclamation constitue une **preuve écrite** de votre démarche, indispensable si le litige s'envenime.

## Les situations qui justifient une réclamation

- **Produit défectueux** : garantie légale de conformité (2 ans)
- **Service non conforme** : prestation différente de ce qui était convenu
- **Erreur de facturation** : montant erroné, double prélèvement
- **Retard de livraison** : au-delà de 30 jours ou de la date promise
- **Non-remboursement** : après rétractation dans les 14 jours

## La structure d'une réclamation efficace

### 1. L'en-tête

- Vos coordonnées complètes
- Les coordonnées du service client
- L'objet précis : "Réclamation — commande n°..."
- La date

### 2. Le rappel des faits

- Dates, numéros de commande, montants
- Ce qui était convenu (contrat, bon de commande, publicité)
- Ce qui s'est réellement passé

### 3. Votre demande

- Formulez clairement ce que vous attendez : remboursement, échange, réparation, indemnisation
- Fixez un délai raisonnable (15 jours en général)
- Mentionnez les textes de loi applicables

### 4. La formule de conclusion

- Restez courtois mais ferme
- Indiquez les suites que vous envisagez en cas de non-réponse

## Les textes de loi à connaître

| Situation | Texte applicable |
|---|---|
| Produit défectueux | Art. L217-4 Code de la consommation |
| Rétractation | Art. L221-18 (14 jours) |
| Retard livraison | Art. L216-1 |
| Garantie légale | Art. L217-3 à L217-14 |
| Pratiques commerciales trompeuses | Art. L121-1 |

## Les recours en cas de non-réponse

1. **Relance en recommandé** avec mise en demeure
2. **Médiateur de la consommation** (gratuit et obligatoire pour les entreprises)
3. **SignalConso** : plateforme de la DGCCRF
4. **Tribunal de proximité** pour les litiges de moins de 5 000 €

## Pour connaître vos droits

- [Vos droits de consommateur — UFC-Que Choisir](https://www.amazon.fr/dp/2705805788?tag=lebrunnathali-21) : le guide de référence sur la protection du consommateur en France`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de réclamation" },
    },
    {
        slug: "premier-emploi-decrocher-premier-cdi",
        title: "Premier emploi : comment décrocher son premier CDI",
        description: "Jeune diplômé sans expérience ? Voici la stratégie complète pour transformer vos stages en premier poste.",
        date: "7 mars 2026",
        icon: "🎓",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "5 min",
        content: `## Le paradoxe du premier emploi

On vous demande de l'expérience pour un premier poste, mais comment en avoir sans emploi ? C'est le cercle vicieux que vivent **74 % des jeunes diplômés**. La bonne nouvelle : il existe des stratégies pour en sortir.

## Valoriser ce que vous avez déjà

### Vos stages comptent

Un stage de 6 mois en entreprise est une vraie expérience professionnelle. Présentez-le comme tel :

- Décrivez vos **missions concrètes**, pas juste l'intitulé
- Chiffrez vos **résultats** : nombre de dossiers traités, projets livrés
- Mentionnez les **outils maîtrisés** : logiciels, méthodes, langues

### Les projets personnels et associatifs

- Projets universitaires de groupe
- Engagement associatif avec responsabilités
- Projets personnels (blog, portfolio, développement)
- Bénévolat et missions humanitaires

## La lettre de motivation du jeune diplômé

C'est votre arme secrète quand le CV est léger. Mettez en avant :

- Votre **formation** et ce qu'elle vous a apporté
- Votre **motivation** pour le secteur et l'entreprise
- Vos **soft skills** : adaptabilité, curiosité, rigueur
- Un **projet ou stage** détaillé qui prouve vos compétences

## Les canaux de recherche efficaces

| Canal | Taux de succès |
|---|---|
| Réseau personnel et professionnel | 35 % |
| Candidatures spontanées ciblées | 20 % |
| Sites d'emploi spécialisés | 15 % |
| Forums et salons | 10 % |
| Réseaux sociaux professionnels | 10 % |
| Cabinets de recrutement | 10 % |

## Les erreurs du jeune candidat

- **Viser trop haut** dès le premier poste : commencez par acquérir de l'expérience
- **Négliger LinkedIn** : 87 % des recruteurs l'utilisent
- **Attendre l'offre parfaite** : soyez proactif avec les candidatures spontanées
- **Sous-estimer le réseau** : parlez de votre recherche autour de vous

## Lectures pour booster votre recherche

- [Mon premier emploi — Samantha Thouin](https://www.amazon.fr/dp/2412075646?tag=lebrunnathali-21) : guide pratique pour jeunes diplômés
- [Trouver un emploi grâce aux réseaux sociaux — Patrice de Broissia](https://www.amazon.fr/dp/2212568835?tag=lebrunnathali-21) : maîtriser LinkedIn et les réseaux pour sa recherche`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre premier emploi" },
    },
    {
        slug: "negocier-salaire-techniques-arguments",
        title: "Négocier son salaire : techniques et arguments",
        description: "Que ce soit à l'embauche ou en poste, apprenez les techniques de négociation salariale qui fonctionnent vraiment.",
        date: "6 mars 2026",
        icon: "💰",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "5 min",
        content: `## Pourquoi la négociation salariale fait peur

Selon une étude, **57 % des salariés** n'osent pas négocier leur salaire. Pourtant, ne pas négocier peut coûter **jusqu'à 500 000 €** sur une carrière entière, effet cumulé compris.

## Quand négocier ?

### À l'embauche

C'est le **meilleur moment** pour négocier. Vous avez un levier maximum car l'entreprise a investi du temps pour vous recruter.

- Attendez d'avoir une **offre ferme** avant de parler chiffres
- Ne donnez jamais votre salaire actuel en premier
- Proposez une **fourchette haute** plutôt qu'un chiffre unique

### En poste

Les moments propices :

- **Entretien annuel** : le cadre naturel pour cette discussion
- Après un **succès mesurable** : projet livré, objectifs dépassés
- Lors d'une **prise de responsabilités** : nouveau périmètre, management
- À réception d'une **offre externe** (à manier avec précaution)

## Préparer ses arguments

### Connaître sa valeur

- Consultez les **grilles de salaires** : Glassdoor, Robert Half, APEC
- Comparez avec votre **secteur, zone géographique et niveau d'expérience**
- Listez vos **réalisations chiffrées** des 12 derniers mois

### Les arguments qui marchent

- Résultats concrets et mesurables
- Compétences rares ou certifications obtenues
- Responsabilités accrues par rapport à la fiche de poste
- Positionnement marché (benchmark salarial)

### Les arguments à éviter

- "J'ai besoin d'argent" (problème personnel, pas professionnel)
- "Mon collègue gagne plus" (crée un malaise)
- "Je suis là depuis longtemps" (l'ancienneté seule ne suffit pas)

## La technique du silence

Après avoir formulé votre demande, **ne parlez plus**. Le silence met la pression sur votre interlocuteur et l'invite à répondre. Résistez à l'envie de combler le vide ou de baisser votre demande.

## Si la réponse est non

- Demandez **quand la prochaine révision** sera possible
- Négociez des **avantages alternatifs** : télétravail, formation, prime
- Demandez des **objectifs clairs** pour obtenir l'augmentation au prochain cycle
- Formalisez tout par écrit

## Pour approfondir

- [Négocier son salaire — Camy Puech](https://www.amazon.fr/dp/2100843788?tag=lebrunnathali-21) : stratégies concrètes de négociation salariale
- [L'art de la négociation — Michael Wheeler](https://www.amazon.fr/dp/2100830759?tag=lebrunnathali-21) : les principes de négociation appliqués à toutes les situations`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "mail-professionnel-regles-redaction",
        title: "Rédiger un mail professionnel impactant",
        description: "Objet, formules, ton, pièces jointes : toutes les règles pour des emails professionnels irréprochables.",
        date: "4 mars 2026",
        icon: "📧",
        tag: "Conseils",
        tagColor: "bg-red-100 text-red-700",
        readTime: "4 min",
        content: `## Le mail professionnel : un exercice sous-estimé

Un salarié envoie en moyenne **40 emails par jour**. Chacun reflète votre image professionnelle. Un mail mal rédigé peut nuire à votre crédibilité, tandis qu'un mail soigné renforce la confiance.

## L'objet : votre ticket d'entrée

L'objet détermine si votre mail sera ouvert. Les règles :

- **Court et précis** : 5 à 8 mots maximum
- **Informatif** : le destinataire doit comprendre le sujet sans ouvrir
- **Actionnable** : indiquez ce qui est attendu

### Exemples

- ❌ "Question" → ✅ "Validation budget projet Gamma — réponse avant vendredi"
- ❌ "Bonjour" → ✅ "Compte-rendu réunion équipe 4 mars"
- ❌ "(sans objet)" → ✅ "Demande de congés 15-22 mars"

## La structure idéale

### 1. La formule d'appel

- **Formel** : "Madame, Monsieur," / "Cher Monsieur Dupont,"
- **Semi-formel** : "Bonjour Madame Martin,"
- **Entre collègues** : "Bonjour Sophie,"

### 2. Le corps du message

- **Première phrase** : allez droit au but
- **Un paragraphe par idée** : facilitez la lecture
- **Maximum 5 phrases** pour un mail courant
- **Bullet points** pour les listes d'actions

### 3. La formule de politesse

- "Cordialement" (standard, passe-partout)
- "Bien cordialement" (un cran au-dessus)
- "Je vous prie d'agréer..." (très formel, courrier officiel)

## Les erreurs fatales

| Erreur | Conséquence |
|---|---|
| Répondre à tous inutilement | Agace tout le monde |
| Oublier la pièce jointe | Perte de crédibilité |
| Ton agressif ou passif-agressif | Conflit assuré |
| Mail trop long | Jamais lu en entier |
| Fautes d'orthographe | Image non professionnelle |

## Astuces de pro

- **Relisez avant d'envoyer** : une erreur envoyée est une erreur publique
- **Différez l'envoi** si vous écrivez sous le coup de l'émotion
- **Utilisez le champ Cci** pour les envois groupés externes
- **Signez systématiquement** : nom, poste, téléphone

## Pour perfectionner vos écrits professionnels

- [Écrire pour être lu — Anne Vervier](https://www.amazon.fr/dp/2874963003?tag=lebrunnathali-21) : techniques d'écriture claire et efficace pour le monde professionnel`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "teletravail-droits-obligations-2026",
        title: "Télétravail en 2026 : droits et obligations",
        description: "Accord d'entreprise, frais, équipement, droit à la déconnexion : tout ce que salariés et employeurs doivent savoir.",
        date: "2 mars 2026",
        icon: "🏡",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "5 min",
        content: `## Le télétravail est devenu la norme

En 2026, **47 % des salariés du tertiaire** pratiquent le télétravail au moins un jour par semaine. Ce mode de travail s'est structuré juridiquement, mais beaucoup ignorent encore leurs droits.

## Le cadre légal

### Comment le mettre en place

Le télétravail peut être instauré par :

- Un **accord collectif** (prioritaire)
- Une **charte élaborée** par l'employeur après avis du CSE
- Un **accord individuel** entre le salarié et l'employeur

### Le droit de demander

Tout salarié peut **demander** le télétravail, mais l'employeur peut refuser. En revanche, il doit **motiver son refus** par écrit.

## Vos droits en télétravail

### Prise en charge des frais

L'employeur doit compenser les frais liés au télétravail :

- **Forfait** : généralement 10 à 50 € par mois
- **Frais réels** : Internet, électricité, mobilier (sur justificatifs)
- **Équipement** : ordinateur, écran, clavier fournis par l'entreprise

### Droit à la déconnexion

- Aucune obligation de répondre **en dehors des horaires** de travail
- L'employeur doit définir des **plages de disponibilité**
- Les outils de communication peuvent être coupés hors horaires

### Égalité de traitement

Le télétravailleur a **les mêmes droits** que ses collègues en présentiel :

- Accès à la formation
- Évolution de carrière
- Avantages sociaux (tickets restaurant, prime transport)
- Entretiens annuels

## Vos obligations

- Respecter les **horaires convenus** et les plages de joignabilité
- Protéger les **données confidentielles** de l'entreprise
- Être **disponible** comme au bureau pendant les heures de travail
- Informer de tout **accident de travail** à domicile

## Modèle de demande de télétravail

Votre lettre doit mentionner :

- Le nombre de jours souhaités
- L'organisation proposée (jours fixes ou flexibles)
- Les moyens techniques dont vous disposez
- Les bénéfices pour l'entreprise (productivité, réduction des déplacements)

## Bien s'équiper pour le télétravail

Un bon espace de travail à domicile améliore la productivité et préserve votre santé :

- [Chaise de bureau ergonomique — Sihoo](https://www.amazon.fr/dp/B0D1RXBHNY?tag=lebrunnathali-21) : un investissement essentiel pour le dos
- [Rehausseur d'écran avec rangement — Bewood](https://www.amazon.fr/dp/B0CSLZ58MQ?tag=lebrunnathali-21) : pour une posture correcte devant l'écran`,
        cta: { href: "/officielle", text: "⚖️ Générer ma demande de télétravail" },
    },
    {
        slug: "lettre-relance-candidature-modeles",
        title: "Relancer une candidature : quand et comment",
        description: "Pas de réponse après votre candidature ? Voici comment relancer sans paraître insistant et maximiser vos chances.",
        date: "28 février 2026",
        icon: "🔁",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "4 min",
        content: `## La relance est normale et attendue

Ne pas relancer est une erreur. **85 % des recruteurs** considèrent qu'une relance bien faite montre de la motivation. Le silence après une candidature ne signifie pas un refus, il signifie souvent que le processus prend du temps.

## Quand relancer ?

- **Après une candidature** : attendre 7 à 10 jours ouvrés
- **Après un entretien** : envoyer un mail de remerciement sous 24h, puis relancer après 1 semaine
- **Après une promesse de réponse** : relancer le lendemain de la date annoncée
- **Maximum de relances** : 2 à 3, pas plus

## Les canaux de relance

| Canal | Quand l'utiliser |
|---|---|
| Email | Premier choix, toujours approprié |
| Téléphone | Après un email sans réponse |
| LinkedIn | Pour les entreprises tech/startups |
| Courrier | Pour les administrations et grands groupes |

## Comment rédiger une relance efficace

### La structure

1. **Rappel bref** : poste visé, date de candidature
2. **Réaffirmation de l'intérêt** : pourquoi ce poste vous motive
3. **Valeur ajoutée** : un élément nouveau (actualité de l'entreprise, compétence pertinente)
4. **Question ouverte** : "Avez-vous besoin d'informations complémentaires ?"

### Le ton juste

- **Positif** : jamais de reproche sur le délai de réponse
- **Bref** : 5 à 8 lignes maximum
- **Professionnel** : même rigueur que la candidature initiale

## Les erreurs de relance

- Relancer **trop tôt** (avant 5 jours)
- Envoyer un **copier-coller** identique à la première candidature
- Montrer de l'**impatience** ou de la frustration
- Relancer **plus de 3 fois** sans réponse
- Relancer par **plusieurs canaux en même temps**

## Après la relance

Si vous n'obtenez toujours pas de réponse après 2 relances :

- Considérez que c'est un refus implicite
- Passez à d'autres candidatures
- Gardez l'entreprise dans votre veille pour de futures opportunités
- Ne brûlez pas les ponts : vous pourriez recroiser ces recruteurs

## Lecture recommandée

- [Décrocher un emploi grâce au réseau — Hervé Bommelaer](https://www.amazon.fr/dp/2212569106?tag=lebrunnathali-21) : la méthode complète pour activer son réseau et relancer efficacement`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de relance" },
    },
    {
        slug: "droits-salaries-code-travail-essentiel",
        title: "Droits des salariés : l'essentiel du Code du travail",
        description: "Congés, licenciement, heures supplémentaires, harcèlement : les droits fondamentaux que tout salarié doit connaître.",
        date: "25 février 2026",
        icon: "⚖️",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "6 min",
        content: `## Connaître ses droits pour mieux les défendre

Trop de salariés ignorent leurs droits fondamentaux. Cette méconnaissance profite aux employeurs indélicats. Voici un tour d'horizon des protections essentielles.

## Les congés payés

### Le minimum légal

- **5 semaines** de congés payés par an (25 jours ouvrés)
- Acquisition : **2,08 jours par mois** travaillé
- Période de référence : du 1er juin au 31 mai

### Les congés spéciaux

| Événement | Durée légale |
|---|---|
| Mariage du salarié | 4 jours |
| Naissance / adoption | 3 jours |
| Décès d'un enfant | 12 jours |
| Décès conjoint / parent | 3 jours |
| Déménagement | 1 jour (convention) |

## Le temps de travail

- **Durée légale** : 35 heures par semaine
- **Heures supplémentaires** : majorées de 25 % (de la 36e à la 43e) puis 50 %
- **Maximum** : 48h par semaine, 44h en moyenne sur 12 semaines
- **Temps de pause** : 20 minutes minimum toutes les 6 heures

## Le licenciement

### Les motifs légaux

- **Motif personnel** : faute, insuffisance professionnelle, inaptitude
- **Motif économique** : difficultés économiques, mutations technologiques
- **Faute grave** : vol, harcèlement, violence → pas de préavis ni d'indemnité
- **Faute lourde** : intention de nuire → perte de tous les droits

### Vos droits en cas de licenciement

- **Préavis** : 1 à 3 mois selon ancienneté et convention
- **Indemnité de licenciement** : 1/4 de mois par année d'ancienneté (jusqu'à 10 ans), puis 1/3
- **Solde de tout compte** : congés payés, primes au prorata
- **Droit au chômage** : inscription à France Travail

## Le harcèlement au travail

### Ce que dit la loi

- Le harcèlement moral est un **délit** puni de 2 ans de prison et 30 000 € d'amende
- Le harcèlement sexuel est puni de **3 ans de prison** et 45 000 €
- L'employeur a une **obligation de prévention**

### Que faire ?

1. **Conservez les preuves** : mails, SMS, témoignages écrits
2. **Alertez** le CSE, le médecin du travail ou l'inspection du travail
3. **Envoyez une lettre recommandée** à votre employeur décrivant les faits
4. **Consultez un avocat** spécialisé en droit du travail

## Ouvrage de référence

- [Le droit du travail — Alain Supiot](https://www.amazon.fr/dp/2130829783?tag=lebrunnathali-21) : la référence académique pour comprendre le droit du travail français dans sa globalité`,
        cta: { href: "/officielle", text: "⚖️ Générer une lettre officielle" },
    },
    {
        slug: "stage-alternance-reussir-candidature",
        title: "Stage et alternance : réussir sa candidature",
        description: "CV, lettre de motivation, entretien : le guide complet pour décrocher un stage ou une alternance en 2026.",
        date: "23 février 2026",
        icon: "📚",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "5 min",
        content: `## Stage et alternance : des tremplins vers l'emploi

**70 % des alternants** sont embauchés à l'issue de leur contrat. Le stage et l'alternance restent les meilleures portes d'entrée dans le monde professionnel.

## Les différences clés

| Critère | Stage | Alternance |
|---|---|---|
| Statut | Stagiaire | Salarié |
| Rémunération | Gratification (4,35 €/h) | 43 à 100 % du SMIC |
| Durée max | 6 mois | 1 à 3 ans |
| Convention | Tripartite | Contrat de travail |
| Congés payés | Non | Oui |

## Le CV étudiant : valoriser le peu d'expérience

### Ce qui compte vraiment

- **Formations** : diplôme en cours, spécialisations, mentions
- **Projets académiques** : mémoire, projets de groupe, études de cas
- **Compétences techniques** : logiciels, langues, certifications
- **Activités extra-scolaires** : associations, sport, bénévolat

### La mise en forme

- Maximum **1 page** (impératif pour un profil junior)
- Photo professionnelle recommandée (pas obligatoire)
- Mots-clés du secteur visé pour passer les filtres ATS

## La lettre de motivation étudiant

Ce que les recruteurs veulent lire :

1. **Votre projet professionnel** : pourquoi ce secteur, pourquoi cette entreprise
2. **Vos compétences applicables** : ce que vous pouvez apporter malgré le manque d'expérience
3. **Votre curiosité** : montrez que vous connaissez l'entreprise et son actualité
4. **Votre disponibilité** : dates précises de stage/alternance

## Où chercher

- **Portails école** : les offres dédiées à votre formation
- **LinkedIn** : filtrez par "stage" ou "alternance"
- **Sites spécialisés** : alternance.fr, 1jeune1solution.gouv.fr
- **Candidature spontanée** : ciblez les entreprises de votre secteur
- **Salons** : rencontrez les recruteurs directement

## Préparer l'entretien

Les questions spécifiques aux étudiants :

- Pourquoi avez-vous choisi cette formation ?
- Qu'attendez-vous de ce stage/alternance ?
- Quel est votre projet professionnel à moyen terme ?
- Comment gérez-vous la double charge cours/entreprise ?

## Lecture utile

- [Trouver son stage ou son premier emploi — Camille Moreau](https://www.amazon.fr/dp/2212572492?tag=lebrunnathali-21) : conseils concrets pour les étudiants en recherche de stage`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de stage" },
    },
    {
        slug: "contestation-facture-modeles-lettres",
        title: "Contestation de facture : modèles et démarches",
        description: "Facture abusive, erreur de montant, double prélèvement : comment contester efficacement et obtenir un remboursement.",
        date: "21 février 2026",
        icon: "💳",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "4 min",
        content: `## Contester une facture est un droit

Vous n'êtes pas obligé de payer une facture que vous estimez injustifiée. La contestation est un droit prévu par le Code de la consommation.

## Les motifs de contestation recevables

- **Erreur de montant** : tarif différent de celui convenu
- **Double facturation** : deux prélèvements pour la même prestation
- **Service non rendu** : facturation d'un travail non effectué
- **Majoration abusive** : pénalités non prévues au contrat
- **Prescription** : facture de plus de 2 ans (délai de prescription pour les consommateurs)

## La démarche étape par étape

### 1. Vérifier la facture

- Comparez avec le **devis signé** ou le contrat
- Vérifiez les **quantités**, les **tarifs unitaires** et la **TVA**
- Cherchez d'éventuelles **lignes inconnues** ou frais cachés

### 2. Contacter le service client

- Commencez par un appel ou un email pour signaler l'erreur
- Notez la **date, l'heure et le nom** de votre interlocuteur
- Demandez une **correction ou un avoir**

### 3. Envoyer une lettre de contestation

Si le service client ne résout pas le problème :

- Envoyez en **recommandé avec AR**
- Détaillez les **erreurs constatées** avec preuves
- Demandez un **remboursement** avec un délai de 15 jours
- Mentionnez les textes de loi applicables

## Les délais de prescription

| Type de facture | Délai de contestation |
|---|---|
| Facture entre professionnels | 5 ans |
| Facture au consommateur | 2 ans |
| Facture d'énergie (EDF, gaz) | 14 mois |
| Facture d'eau | 4 ans |
| Facture télécom | 1 an |

## En cas de prélèvement automatique

Si un montant incorrect a été prélevé :

- Contactez votre **banque** pour demander un remboursement (8 semaines maximum)
- Pour un prélèvement **non autorisé** : vous avez 13 mois pour contester
- Révoquez l'autorisation de prélèvement si nécessaire

## Vos recours

1. **Médiateur** du secteur concerné (énergie, télécom, banque)
2. **DGCCRF** via la plateforme SignalConso
3. **Tribunal de proximité** pour les litiges inférieurs à 5 000 €
4. **Association de consommateurs** (UFC-Que Choisir, CLCV)

## Pour aller plus loin

- [Guide juridique du consommateur — éditions Prat](https://www.amazon.fr/dp/2809518130?tag=lebrunnathali-21) : tous vos droits face aux litiges de consommation`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de contestation" },
    },
    {
        slug: "organiser-recherche-emploi-methode",
        title: "Organiser sa recherche d'emploi efficacement",
        description: "Planning, outils, suivi des candidatures : la méthode pour rester productif et motivé pendant sa recherche d'emploi.",
        date: "20 février 2026",
        icon: "📊",
        tag: "Conseils",
        tagColor: "bg-red-100 text-red-700",
        readTime: "5 min",
        content: `## La recherche d'emploi est un travail à plein temps

La différence entre ceux qui trouvent vite et ceux qui galèrent est souvent une question de **méthode**, pas de compétences. Structurer sa recherche multiplie les chances par 3.

## Le planning type d'une semaine

### Lundi — Veille et ciblage

- Analyser les nouvelles offres sur les sites d'emploi
- Identifier 5 à 10 entreprises cibles
- Mettre à jour sa liste de suivi

### Mardi-Mercredi — Candidatures

- Personnaliser CV et lettres pour chaque candidature
- Envoyer les candidatures ciblées
- Faire 2 à 3 candidatures spontanées

### Jeudi — Réseau et relances

- Contacter 3 personnes de votre réseau
- Relancer les candidatures sans réponse
- Participer à un événement professionnel (en ligne ou physique)

### Vendredi — Montée en compétences

- Suivre une formation en ligne (MOOC, certifications)
- Lire un article de fond sur votre secteur
- Préparer les entretiens de la semaine suivante

## Les outils indispensables

### Pour le suivi des candidatures

Un simple tableur suffit avec ces colonnes :

| Date | Entreprise | Poste | Statut | Relance | Contact |
|---|---|---|---|---|---|
| 15/02 | Acme SA | Chef de projet | En attente | 25/02 | M. Dupont |

### Pour la veille

- Créez des **alertes email** sur les sites d'emploi
- Suivez les entreprises cibles sur **LinkedIn**
- Abonnez-vous aux **newsletters sectorielles**

## Rester motivé

La recherche d'emploi est un marathon, pas un sprint. Pour garder le moral :

- Fixez-vous des **objectifs quotidiens** réalistes (3-5 actions par jour)
- Célébrez les **petites victoires** : chaque réponse positive, chaque entretien décroché
- Maintenez une **routine** : levez-vous à heure fixe, habillez-vous, sortez
- Entourez-vous : parlez de votre recherche, rejoignez des **groupes d'entraide**
- Prenez des **pauses** : le week-end est sacré

## Les erreurs qui ralentissent

- Postuler en masse sans personnaliser
- Ne postuler que sur les sites d'emploi (néglige le réseau)
- Attendre une réponse avant d'envoyer d'autres candidatures
- Rester isolé et ne pas parler de sa recherche

## Lectures motivantes

- [2h chrono pour trouver un emploi — Christel de Foucault](https://www.amazon.fr/dp/2100847198?tag=lebrunnathali-21) : des exercices pratiques pour structurer sa recherche au quotidien
- [Bullshit Jobs — David Graeber](https://www.amazon.fr/dp/2253820490?tag=lebrunnathali-21) : un regard décalé sur le monde du travail qui aide à repenser ce qu'on cherche vraiment`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "freelance-lettres-modeles-indispensables",
        title: "Freelance : les lettres et documents indispensables",
        description: "Devis, relance, mise en demeure, résiliation : tous les modèles dont un freelance a besoin pour gérer ses clients.",
        date: "18 février 2026",
        icon: "💼",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Être freelance, c'est aussi gérer l'administratif

En tant qu'indépendant, vous êtes votre propre service juridique, comptable et commercial. Avoir des **modèles prêts à l'emploi** vous fait gagner un temps précieux.

## Les documents commerciaux

### Le devis

Le devis est un document précontractuel obligatoire pour certaines prestations. Il doit contenir :

- Vos coordonnées et numéro SIRET
- La description détaillée de la prestation
- Le prix HT et TTC
- La durée de validité du devis
- Les conditions de paiement
- La mention "Devis reçu avant l'exécution des travaux"

### La facture

Obligatoire pour toute prestation, elle doit mentionner :

- Un numéro de facture chronologique
- La date d'émission
- L'identité des deux parties
- Le détail des prestations
- Le montant HT, TVA et TTC
- Les conditions et délais de paiement
- Les pénalités de retard

## Les lettres de relance

### La relance amiable (J+7)

Ton cordial, simple rappel. "Sauf erreur de ma part, la facture n°... reste impayée."

### La relance ferme (J+15)

Ton plus direct, mention des pénalités de retard prévues au contrat.

### La mise en demeure (J+30)

Envoi en recommandé avec AR, mention des poursuites judiciaires possibles.

## Le contrat de prestation

### Les clauses essentielles

- **Objet** : description précise de la mission
- **Durée** : début, fin, jalons éventuels
- **Rémunération** : montant, échéancier, modalités de paiement
- **Propriété intellectuelle** : cession des droits, conditions
- **Confidentialité** : engagement de non-divulgation
- **Résiliation** : conditions de rupture anticipée

## Les impayés : un fléau pour les freelances

**30 % des freelances** ont déjà subi un impayé. Pour se protéger :

- Demandez un **acompte de 30 à 50 %** avant de commencer
- Facturez par **jalons** pour les gros projets
- Inscrivez les **pénalités de retard** dans vos CGV
- Réagissez vite : plus vous attendez, moins vous récupérerez

## Pour gérer votre activité

- [Freelance : l'aventure dont vous êtes le héros — Alexis Minchella](https://www.amazon.fr/dp/2212576862?tag=lebrunnathali-21) : le guide complet pour lancer et développer son activité freelance
- [La micro-entreprise pour les nuls — Grégoire Leclercq](https://www.amazon.fr/dp/2412089507?tag=lebrunnathali-21) : tout comprendre de la création à la gestion quotidienne`,
        cta: { href: "/officielle", text: "⚖️ Générer une lettre de relance" },
    },
    {
        slug: "harcelement-travail-recours-demarches",
        title: "Harcèlement au travail : vos recours et démarches",
        description: "Identifier le harcèlement moral ou sexuel, constituer un dossier et connaître les démarches pour faire cesser la situation.",
        date: "16 février 2026",
        icon: "🛡️",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "6 min",
        content: `## Un phénomène massif et sous-déclaré

**30 % des salariés** déclarent avoir été victimes de harcèlement moral au cours de leur carrière. Pourtant, seule une fraction ose engager des démarches. Connaître vos droits est la première étape.

## Qu'est-ce que le harcèlement moral ?

Le Code du travail (article L1152-1) définit le harcèlement moral comme des **agissements répétés** ayant pour objet ou effet :

- Une **dégradation des conditions de travail**
- Une atteinte aux **droits et à la dignité** du salarié
- Une altération de la **santé physique ou mentale**
- Une compromission de l'**avenir professionnel**

### Exemples concrets

- Critiques incessantes et injustifiées
- Mise à l'écart systématique (plus invité aux réunions)
- Surcharge de travail volontaire ou au contraire retrait des missions
- Humiliations publiques répétées
- Menaces voilées ou explicites

## Qu'est-ce que le harcèlement sexuel ?

L'article L1153-1 définit le harcèlement sexuel comme des **propos ou comportements à connotation sexuelle ou sexiste** répétés portant atteinte à la dignité ou créant une situation intimidante.

Un **acte unique** peut suffire s'il constitue une pression grave dans le but d'obtenir un acte de nature sexuelle.

## Comment constituer votre dossier

### Les preuves recevables

- **Écrits** : emails, SMS, messages instantanés, notes de service
- **Témoignages** : attestations écrites de collègues
- **Certificats médicaux** : attestant l'impact sur votre santé
- **Journal de bord** : notes datées des faits (date, heure, contexte, témoins)
- **Enregistrements** : admissibles comme preuves en droit du travail

### Ce qu'il faut documenter

Pour chaque incident, notez :

- La date et l'heure précises
- Le lieu
- Les personnes présentes
- Les propos ou actes exacts
- Votre réaction et ses conséquences

## Les démarches à entreprendre

### En interne

1. **Alerter le CSE** (Comité Social et Économique)
2. **Saisir le référent harcèlement** (obligatoire dans les entreprises de plus de 250 salariés)
3. **Écrire à l'employeur** en recommandé décrivant les faits

### En externe

1. **Médecin du travail** : peut constater l'impact sur la santé et préconiser un aménagement
2. **Inspection du travail** : peut enquêter et dresser des procès-verbaux
3. **Défenseur des droits** : en cas de harcèlement discriminatoire
4. **Conseil de prud'hommes** : pour obtenir réparation
5. **Plainte pénale** : au commissariat ou au procureur de la République

## Les sanctions encourues par le harceleur

| Type | Sanction maximale |
|---|---|
| Harcèlement moral | 2 ans de prison + 30 000 € d'amende |
| Harcèlement sexuel | 3 ans de prison + 45 000 € d'amende |
| Avec circonstances aggravantes | 5 ans + 75 000 € |

## Pour vous informer et vous défendre

- [Le harcèlement moral au travail — Marie-France Hirigoyen](https://www.amazon.fr/dp/2130811507?tag=lebrunnathali-21) : l'ouvrage fondateur sur le sujet, par la psychiatre qui a fait reconnaître ce phénomène en France`,
        cta: { href: "/officielle", text: "⚖️ Générer une lettre de signalement" },
    },
    {
        slug: "conge-parental-demande-droits",
        title: "Congé parental : comment le demander et vos droits",
        description: "Durée, indemnisation, retour au poste : tout savoir sur le congé parental d'éducation et comment en faire la demande.",
        date: "14 février 2026",
        icon: "👶",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Le congé parental est un droit

Tout salarié ayant **au moins 1 an d'ancienneté** à la date de naissance ou d'adoption peut bénéficier d'un congé parental d'éducation. L'employeur ne peut pas le refuser.

## Les deux formes du congé parental

### Le congé total

- Suspension complète du contrat de travail
- Aucune rémunération de l'employeur
- Possibilité de percevoir la **PreParE** (Prestation Partagée d'Éducation de l'Enfant)

### Le temps partiel

- Durée minimale de **16 heures par semaine**
- Rémunération au prorata
- Complément possible avec la PreParE

## La durée

| Situation | Durée initiale | Renouvellement | Maximum |
|---|---|---|---|
| 1er enfant | 6 mois | 6 mois | 1 an |
| 2e enfant et plus | 6 mois | Renouvelable | Jusqu'aux 3 ans |
| Jumeaux | 6 mois | Renouvelable | Jusqu'aux 3 ans |
| Triplés et plus | 6 mois | Renouvelable | Jusqu'aux 6 ans |

## L'indemnisation

### La PreParE (CAF)

- **Congé total** : environ 428 € par mois
- **Temps partiel (50 % ou moins)** : environ 277 € par mois
- **Temps partiel (50 à 80 %)** : environ 160 € par mois
- Versée par la **CAF** sur demande

### Les conditions

- Avoir au moins **8 trimestres de cotisations** dans les 2 à 5 dernières années
- Cesser ou réduire son activité professionnelle
- L'enfant doit avoir moins de 3 ans (ou moins de 20 ans en cas d'adoption)

## Comment faire la demande

### Le courrier à l'employeur

Envoyez une lettre recommandée avec AR **au moins 1 mois avant** le début du congé (2 mois si le congé ne suit pas immédiatement le congé maternité/paternité).

### Les mentions obligatoires

- La date de début souhaitée
- La durée du congé
- La forme choisie (total ou temps partiel)
- La référence aux articles L1225-47 et suivants du Code du travail

## Le retour au poste

### Vos droits

- Retrouver votre **poste ou un poste équivalent**
- Même **rémunération** et mêmes avantages
- Droit à un **entretien professionnel** de reprise
- Droit à une **formation** de remise à niveau si nécessaire

### Les conseils pour un retour réussi

- Maintenez le contact avec vos collègues pendant votre absence
- Informez votre employeur **1 mois avant** votre retour
- Demandez un entretien de reprise pour faire le point

## Pour bien préparer cette étape

- [Devenir parent sans perdre la tête — Margot Fried-Filliozat](https://www.amazon.fr/dp/2501174356?tag=lebrunnathali-21) : un guide bienveillant pour gérer la parentalité et la vie professionnelle`,
        cta: { href: "/officielle", text: "⚖️ Générer ma demande de congé parental" },
    },
    {
        slug: "bilan-competences-guide-pratique",
        title: "Bilan de compétences : guide pratique complet",
        description: "À quoi sert un bilan de compétences, comment le financer et à quoi s'attendre : toutes les réponses.",
        date: "12 février 2026",
        icon: "🧭",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "5 min",
        content: `## Le bilan de compétences en quelques mots

C'est un accompagnement structuré de **24 heures** (réparties sur 2 à 3 mois) qui vous aide à faire le point sur vos compétences, vos motivations et vos aspirations professionnelles.

## Pour qui ?

- **Salariés** en CDI ou CDD
- **Demandeurs d'emploi** (via France Travail)
- **Indépendants** et professions libérales
- **Agents de la fonction publique**

Il n'y a **pas de condition d'ancienneté** pour mobiliser son CPF.

## Les 3 phases du bilan

### Phase 1 : Préliminaire (2-3h)

- Confirmation de l'engagement dans la démarche
- Définition de vos besoins et attentes
- Présentation de la méthodologie

### Phase 2 : Investigation (16-18h)

- Analyse de votre parcours professionnel et personnel
- Identification de vos **compétences, valeurs et motivations**
- Exploration des pistes professionnelles
- Tests de personnalité et d'intérêts (MBTI, RIASEC)
- Enquêtes métier auprès de professionnels

### Phase 3 : Conclusion (2-3h)

- Synthèse des résultats
- Élaboration d'un **plan d'action concret**
- Remise d'un document de synthèse confidentiel

## Le financement

| Dispositif | Conditions | Démarche |
|---|---|---|
| CPF | Solde suffisant | moncompteformation.gouv.fr |
| Employeur | Plan de développement | Demande à la DRH |
| France Travail | Demandeur d'emploi | Via votre conseiller |
| Autofinancement | — | 1 500 à 3 000 € |

## Comment choisir son prestataire

- Vérifiez la **certification Qualiopi** (obligatoire)
- Demandez un **entretien préalable gratuit**
- Renseignez-vous sur la **méthode utilisée** et les outils
- Consultez les **avis** d'anciens bénéficiaires
- Comparez au moins **3 prestataires**

## Ce que le bilan ne fait pas

- Il ne vous trouve **pas un emploi** : c'est un outil de réflexion, pas de placement
- Il ne vous oblige à **rien** : les conclusions sont confidentielles
- Il ne remplace pas une **thérapie** : si le mal-être est profond, consultez un professionnel de santé

## Après le bilan

Le bilan débouche souvent sur :

- Une **reconversion** vers un nouveau métier
- Une **évolution** dans le même secteur
- Une **formation** qualifiante
- La confirmation que votre poste actuel vous convient
- Un projet de **création d'entreprise**

## Lecture complémentaire

- [Trouver sa voie — Emilie Wapnick](https://www.amazon.fr/dp/2501172833?tag=lebrunnathali-21) : pour les profils multipotentiels qui ont du mal à choisir une seule voie`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "litige-artisan-recours-modeles",
        title: "Litige avec un artisan : vos recours et modèles de lettres",
        description: "Travaux mal faits, abandon de chantier, surfacturation : les démarches pour résoudre un litige avec un artisan.",
        date: "10 février 2026",
        icon: "🔧",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Des litiges plus fréquents qu'on ne le pense

Les travaux du bâtiment représentent le **premier motif de litiges** en matière de consommation en France. Malfaçons, retards, abandon de chantier : les problèmes sont variés mais les recours existent.

## Les problèmes les plus courants

### Malfaçons et non-conformités

- Travaux qui ne correspondent pas au devis
- Finitions bâclées ou matériaux de moindre qualité
- Non-respect des normes (électricité, plomberie, isolation)

### Retards et abandon de chantier

- Dépassement du délai annoncé sans justification
- Absence prolongée sans nouvelles
- Abandon pur et simple du chantier

### Problèmes financiers

- Surfacturation par rapport au devis
- Demande d'acompte excessif (plus de 30 %)
- Travaux supplémentaires non validés par écrit

## Les démarches à suivre

### Étape 1 : Le constat

- **Photographiez** tous les défauts (avec date et heure)
- Faites intervenir un **expert indépendant** si les dégâts sont importants
- Ne payez pas le solde tant que les travaux ne sont pas conformes

### Étape 2 : La lettre de réclamation

- Envoyez un courrier **détaillé et factuel** à l'artisan
- Décrivez les défauts constatés avec photos à l'appui
- Fixez un **délai de 15 jours** pour la reprise des travaux
- Envoyez en recommandé avec AR

### Étape 3 : La mise en demeure

Si l'artisan ne répond pas :

- Envoyez une **mise en demeure** formelle
- Mentionnez les **garanties applicables** (parfait achèvement, décennale)
- Indiquez les **poursuites envisagées**

### Étape 4 : Les recours

1. **Médiation** : saisissez le médiateur de la consommation
2. **Chambre des métiers** : signalez le professionnel
3. **Assurance décennale** de l'artisan : contactez directement l'assureur
4. **Tribunal** : action en justice pour obtenir réparation

## Les garanties à connaître

| Garantie | Durée | Ce qu'elle couvre |
|---|---|---|
| Parfait achèvement | 1 an | Tous les désordres signalés |
| Biennale | 2 ans | Équipements dissociables |
| Décennale | 10 ans | Dommages structurels |

## Prévenir les litiges

- Exigez un **devis détaillé** signé avant tout début de travaux
- Vérifiez l'**assurance décennale** de l'artisan (demandez l'attestation)
- Ne versez jamais plus de **30 % d'acompte** au démarrage
- Rédigez un **procès-verbal de réception** des travaux
- Émettez des **réserves** par écrit si nécessaire

## Pour connaître vos droits

- [Guide des litiges du bâtiment — éditions Eyrolles](https://www.amazon.fr/dp/2212679262?tag=lebrunnathali-21) : la référence pour comprendre les garanties et les recours dans le bâtiment`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de réclamation" },
    },
    {
        slug: "lettre-motivation-reconversion-modeles",
        title: "Lettre de motivation en reconversion : modèles et conseils",
        description: "Comment convaincre un recruteur quand on change de métier : structure, arguments et exemples de lettres de reconversion.",
        date: "8 février 2026",
        icon: "✨",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "5 min",
        content: `## La reconversion en lettre : un exercice délicat

Quand on change de voie, la lettre de motivation devient **l'élément décisif** du dossier. Le CV montre un parcours "incohérent" en apparence : c'est la lettre qui crée le fil rouge.

## Ce que le recruteur veut comprendre

Face à un profil en reconversion, le recruteur se pose 3 questions :

1. **Pourquoi ce changement ?** Est-ce réfléchi ou un coup de tête ?
2. **Quelles compétences transférables ?** Qu'apportez-vous de votre ancien métier ?
3. **Quel engagement concret ?** Formations suivies, stages, projets personnels ?

## La structure idéale

### Paragraphe 1 : L'accroche contextualisée

Ne cachez pas votre reconversion. Assumez-la dès les premières lignes :

- "Après 8 ans dans la finance, j'ai fait le choix réfléchi de me tourner vers..."
- "Ma formation en [nouveau domaine] confirme une passion que je cultivais depuis..."

### Paragraphe 2 : Le pont entre les deux métiers

C'est le coeur de votre lettre. Identifiez les compétences transférables :

- **Gestion de projet** → applicable dans presque tous les secteurs
- **Relation client** → vente, formation, conseil
- **Analyse de données** → marketing, logistique, RH
- **Management** → tout secteur avec encadrement d'équipe

### Paragraphe 3 : Les preuves de votre engagement

- Formations suivies ou en cours
- Stages d'immersion réalisés
- Projets personnels dans le nouveau domaine
- Certifications obtenues

### Paragraphe 4 : La projection

Montrez que vous avez une vision claire de votre nouveau métier et de ce que vous pouvez apporter à l'entreprise.

## Les erreurs spécifiques à la reconversion

| Erreur | Pourquoi c'est un problème |
|---|---|
| S'excuser du changement | Montre un manque de confiance |
| Critiquer l'ancien métier | Impression de fuite, pas de choix |
| Ignorer les compétences passées | Gaspille son meilleur atout |
| Être vague sur le projet | Le recruteur doute de la motivation |

## Les formulations à privilégier

- ✅ "Mon expérience en X m'a doté de compétences en Y directement applicables à..."
- ✅ "Ce changement est le fruit d'une réflexion de 18 mois, concrétisée par..."
- ✅ "Les soft skills développés dans mon ancien poste — rigueur, gestion du stress, leadership — sont des atouts majeurs pour..."

## Les formulations à éviter

- ❌ "Je n'aimais plus mon ancien métier"
- ❌ "Je n'ai pas d'expérience dans votre domaine mais..."
- ❌ "J'espère que vous me donnerez ma chance"

## Pour structurer votre démarche

- [Donner un nouveau souffle à sa carrière — Yves Deloison](https://www.amazon.fr/dp/2212569041?tag=lebrunnathali-21) : méthodologie complète pour réussir sa lettre et sa candidature en reconversion`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de reconversion" },
    },
    {
        slug: "rupture-conventionnelle-guide-negociation",
        title: "Rupture conventionnelle : guide de négociation",
        description: "Procédure, indemnités, délais : tout comprendre sur la rupture conventionnelle et comment bien la négocier.",
        date: "6 février 2026",
        icon: "🤝",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "5 min",
        content: `## La rupture conventionnelle : un départ négocié

Créée en 2008, la rupture conventionnelle permet de mettre fin à un CDI **d'un commun accord** entre le salarié et l'employeur. C'est la seule forme de départ qui ouvre droit au chômage sans licenciement.

## Les conditions

- Réservée aux **CDI uniquement** (pas les CDD ni les intérimaires)
- **Consentement libre** des deux parties (pas de pression)
- Salarié **non protégé** (une procédure spéciale s'applique aux représentants du personnel)
- Possible même en cas d'**arrêt maladie** (sauf maladie professionnelle)

## La procédure étape par étape

### 1. La demande (par l'une ou l'autre partie)

- Pas de formalisme obligatoire, mais un **écrit est recommandé**
- L'autre partie peut refuser sans justification

### 2. Les entretiens

- Au moins **1 entretien obligatoire** (2 à 3 en pratique)
- Le salarié peut se faire assister (représentant du personnel ou conseiller extérieur)
- Négociation de la date de départ et de l'indemnité

### 3. La signature de la convention

- Convention CERFA à remplir et signer par les deux parties
- Remise d'un exemplaire à chaque partie

### 4. Le délai de rétractation

- **15 jours calendaires** pour se rétracter sans motif
- Rétractation par lettre recommandée ou remise en main propre

### 5. L'homologation

- Envoi à la **DREETS** (ex-DIRECCTE) pour validation
- Délai d'instruction : **15 jours ouvrables**
- Silence vaut acceptation

## L'indemnité de rupture conventionnelle

### Le minimum légal

L'indemnité ne peut pas être inférieure à l'**indemnité légale de licenciement** :

- 1/4 de mois de salaire par année d'ancienneté (jusqu'à 10 ans)
- 1/3 de mois par année au-delà de 10 ans

### Négocier plus

En pratique, il est souvent possible de négocier **1 à 3 mois de salaire supplémentaires**. Les arguments :

- Votre ancienneté et votre valeur pour l'entreprise
- L'économie réalisée par l'employeur (pas de licenciement, pas de contentieux)
- La difficulté à retrouver un poste équivalent
- Les conditions de votre départ (transfert de dossiers, formation du remplaçant)

## Rupture conventionnelle et chômage

- Droit à l'**ARE** (Allocation de Retour à l'Emploi) dès la fin du différé d'indemnisation
- Le différé dépend du montant de l'indemnité supra-légale
- Inscription à **France Travail** obligatoire

## Les pièges à éviter

- Signer sous la pression ou dans la précipitation
- Accepter le minimum légal sans négocier
- Oublier de vérifier le solde de tout compte
- Ne pas calculer le différé d'indemnisation chômage

## Pour bien préparer votre négociation

- [La rupture conventionnelle pour les nuls — poche](https://www.amazon.fr/dp/2412086680?tag=lebrunnathali-21) : le guide indispensable pour comprendre la procédure et maximiser votre indemnité`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre de demande" },
    },
    {
        slug: "lettre-motivation-anglais-cover-letter",
        title: "Lettre de motivation en anglais : rédiger une cover letter",
        description: "Structure, expressions clés et erreurs de traduction : comment rédiger une cover letter professionnelle en anglais.",
        date: "4 février 2026",
        icon: "🌍",
        tag: "Motivation",
        tagColor: "bg-blue-100 text-blue-700",
        readTime: "5 min",
        content: `## La cover letter n'est pas une traduction

Traduire mot à mot votre lettre de motivation française est la pire erreur possible. La cover letter anglo-saxonne obéit à des codes très différents.

## Les différences culturelles

| Critère | Lettre française | Cover letter anglaise |
|---|---|---|
| Longueur | 1 page | 3/4 de page maximum |
| Ton | Formel, distant | Direct, enthousiaste |
| Structure | Vous / Moi / Nous | Hook / Value / Ask |
| Formules de politesse | Longues et codifiées | Courtes et simples |
| Modestie | Valorisée | Pénalisante |

## La structure de la cover letter

### 1. Le header

- Votre nom et coordonnées
- La date
- Le nom et l'adresse du recruteur

### 2. L'ouverture (The Hook)

Allez droit au but. Les recruteurs anglo-saxons apprécient l'efficacité :

- "I am writing to apply for the [Job Title] position at [Company]."
- "With 5 years of experience in [field], I am excited about the opportunity to..."

### 3. Le corps (The Value Proposition)

Montrez ce que vous apportez, pas ce que vous cherchez :

- **Premier paragraphe** : pourquoi cette entreprise vous attire
- **Deuxième paragraphe** : vos 2-3 réalisations clés avec chiffres
- **Troisième paragraphe** : comment vos compétences répondent aux besoins du poste

### 4. La conclusion (The Ask)

- "I would welcome the opportunity to discuss how my skills can contribute to [Company]."
- "I look forward to hearing from you."
- Signature : "Sincerely," ou "Best regards,"

## Les expressions utiles

### Pour l'introduction

- "I am eager to bring my expertise in..."
- "Your company's commitment to [value] resonates strongly with..."
- "I was thrilled to see the opening for..."

### Pour valoriser ses compétences

- "I successfully led a team of..."
- "I increased revenue by X% through..."
- "I have a proven track record of..."

### Pour conclure

- "I am confident that my background in..."
- "I would be glad to provide additional references..."
- "I am available for an interview at your convenience."

## Les erreurs de traduction courantes

- ❌ "I am a serious person" → ✅ "I am a dedicated professional"
- ❌ "I am dynamical" → ✅ "I am proactive and results-driven"
- ❌ "I have the honour to..." → ✅ "I am writing to..."
- ❌ "Please accept the expression of my distinguished sentiments" → ✅ "Sincerely,"

## Pour maîtriser l'anglais professionnel

- [L'anglais professionnel — Judith Ward](https://www.amazon.fr/dp/229015637X?tag=lebrunnathali-21) : vocabulaire et expressions clés pour le monde du travail
- [English for Business Writing — collectif](https://www.amazon.fr/dp/2340082293?tag=lebrunnathali-21) : rédiger des emails, lettres et rapports en anglais professionnel`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "lettre-excuse-professionnelle-modeles",
        title: "Lettre d'excuse professionnelle : 5 modèles prêts à l'emploi",
        description: "Retard, erreur, absence : découvrez comment rédiger une lettre d'excuse professionnelle efficace avec nos modèles gratuits.",
        date: "16 avril 2026",
        icon: "🤝",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Quand écrire une lettre d'excuse professionnelle

Tout le monde fait des erreurs. Ce qui fait la différence, c'est la capacité à les reconnaître rapidement et professionnellement. Une lettre d'excuse bien rédigée peut transformer une situation délicate en preuve de maturité.

**Situations courantes** :
- Retard ou absence à une réunion
- Erreur dans un livrable ou un document
- Comportement inapproprié
- Non-respect d'une échéance
- Oubli d'un engagement

## Les 4 règles d'or de l'excuse professionnelle

1. **Agir vite** : plus vous attendez, plus la situation se détériore
2. **Assumer sans détour** : pas de "si j'ai pu vous froisser" — reconnaissez clairement l'erreur
3. **Proposer une solution** : l'excuse seule ne suffit pas, montrez comment vous corrigez
4. **Rester sobre** : pas de justifications interminables ni d'auto-flagellation

## Modèle 1 : Excuse pour retard à une réunion

*Objet : Mes excuses pour mon retard*

Madame, Monsieur,

Je vous prie de bien vouloir m'excuser pour mon retard lors de la réunion de [date]. [Un problème de transport / un imprévu familial] m'a empêché(e) d'arriver à l'heure prévue.

Je suis conscient(e) que cela a pu perturber le bon déroulement de la session. J'ai pris connaissance du compte-rendu et je reste à votre disposition pour rattraper les points que j'aurais manqués.

Je veillerai à ce que cela ne se reproduise pas.

Cordialement,
[Votre nom]

## Modèle 2 : Excuse pour erreur dans un document

*Objet : Rectification et excuses — [Document concerné]*

Madame, Monsieur,

Je vous adresse mes sincères excuses pour l'erreur constatée dans [le rapport / la facture / le devis] du [date]. Après vérification, [décrire brièvement l'erreur].

Vous trouverez ci-joint la version corrigée. J'ai mis en place [un double contrôle / une relecture systématique] pour éviter que cela ne se reproduise.

Je reste à votre entière disposition pour tout complément.

Cordialement,
[Votre nom]

## Modèle 3 : Excuse pour absence non prévenue

*Objet : Excuses pour mon absence du [date]*

Madame, Monsieur,

Je vous prie d'accepter mes excuses pour mon absence du [date] sans préavis. [Raison brève si appropriée]. J'aurais dû vous prévenir et j'en assume l'entière responsabilité.

J'ai rattrapé les tâches en retard et m'assure que le planning n'est pas impacté. Cela ne se reproduira plus.

Cordialement,
[Votre nom]

## Modèle 4 : Excuse à un client

*Objet : Nos excuses — [Motif]*

Cher(ère) [Nom du client],

Nous avons pris connaissance de [l'incident / le retard / l'erreur] et nous vous présentons nos plus sincères excuses pour la gêne occasionnée.

Nous avons immédiatement [action corrective]. Pour compenser ce désagrément, nous vous proposons [geste commercial / solution].

Votre satisfaction est notre priorité et nous mettons tout en œuvre pour que cela ne se reproduise pas.

Cordialement,
[Votre nom]

## Modèle 5 : Excuse pour non-respect d'une échéance

*Objet : Décalage de livraison — [Projet]*

Madame, Monsieur,

Je vous informe que le [livrable / projet] initialement prévu pour le [date] sera livré le [nouvelle date]. Je vous prie de m'en excuser.

Ce décalage est dû à [raison concise]. J'ai réorganisé mon planning pour garantir cette nouvelle échéance et vous tiendrai informé(e) de l'avancement.

Cordialement,
[Votre nom]

## Les formules à utiliser et à éviter

| À utiliser ✅ | À éviter ❌ |
|---|---|
| "Je reconnais mon erreur" | "Ce n'est pas vraiment de ma faute" |
| "Je vous prie de m'excuser" | "Désolé si ça vous a posé problème" |
| "J'ai mis en place une solution" | "Ça n'arrivera plus" (sans action) |
| "Je comprends votre frustration" | "Vous exagérez" |

## Pour aller plus loin

- [L'art de s'excuser — Aaron Lazare](https://www.amazon.fr/s?k=art+excuser+communication+professionnelle&tag=lebrunnathali-21) : comprendre la psychologie de l'excuse pour mieux communiquer
- [La communication non violente — Marshall Rosenberg](https://www.amazon.fr/s?k=communication+non+violente+rosenberg&tag=lebrunnathali-21) : exprimer ses erreurs avec authenticité`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "lettre-augmentation-salaire-modeles",
        title: "Lettre de demande d'augmentation : guide et modèles 2026",
        description: "Comment rédiger une lettre de demande d'augmentation convaincante ? Modèles prêts à l'emploi et arguments qui fonctionnent.",
        date: "16 avril 2026",
        icon: "💰",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "6 min",
        content: `## Le bon moment pour demander une augmentation

Le timing est crucial. Votre demande aura plus de poids si elle arrive au bon moment :

- **Après un succès mesurable** : projet réussi, objectifs dépassés, client gagné
- **Lors de l'entretien annuel** : c'est le cadre naturel pour ces discussions
- **Quand l'entreprise va bien** : résultats positifs, nouveaux contrats
- **Après une prise de responsabilités** : nouvelles missions, management d'équipe

### À éviter absolument
- Juste après une erreur ou un conflit
- En période de crise ou de licenciements
- Devant d'autres collègues (toujours en privé)

## Les arguments qui fonctionnent

### 1. Vos résultats concrets
- "J'ai augmenté le chiffre d'affaires de mon portefeuille de **25 %** en 12 mois."
- "J'ai réduit les délais de livraison de **2 semaines** en optimisant le process."

### 2. Votre évolution dans le poste
- Nouvelles responsabilités prises depuis votre dernière augmentation
- Compétences acquises (formations, certifications)
- Projets supplémentaires gérés

### 3. Le marché
- Salaires moyens pour votre poste dans votre région (consultez les études de rémunération)
- Ancienneté sans revalorisation

## Modèle 1 : Demande formelle par courrier

*Objet : Demande de revalorisation salariale*

Madame, Monsieur,

Je me permets de solliciter un entretien afin d'échanger sur ma rémunération. Depuis mon arrivée en [année] au poste de [intitulé], j'ai eu l'occasion de [réalisation 1] et de [réalisation 2].

Mon périmètre de responsabilités a évolué : [détailler les nouvelles missions]. Ces résultats et cette évolution me semblent justifier une revalorisation de ma rémunération.

Je souhaiterais en discuter avec vous lors d'un entretien. Je reste à votre disposition pour convenir d'une date.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]

## Modèle 2 : Email plus direct

*Objet : Point sur ma rémunération*

Bonjour [Prénom],

J'aimerais faire le point sur ma rémunération lors de notre prochain échange. Depuis [date/événement], mon rôle a significativement évolué :

- [Résultat chiffré 1]
- [Résultat chiffré 2]
- [Nouvelle responsabilité]

Au regard de ces éléments et du marché, une revalorisation de l'ordre de [X %] me semble cohérente. Je suis ouvert(e) à en discuter.

Cordialement,
[Votre nom]

## Combien demander ?

| Situation | Fourchette raisonnable |
|---|---|
| Augmentation annuelle classique | 3 à 5 % |
| Prise de responsabilités | 5 à 10 % |
| Promotion de poste | 10 à 15 % |
| Rattrapage après gel de salaires | 5 à 8 % |

**Conseil** : demandez légèrement plus que ce que vous visez pour garder une marge de négociation.

## Si la réponse est non

Un refus n'est pas un échec. Demandez :
- **Les raisons précises** du refus
- **Ce que vous devez accomplir** pour obtenir l'augmentation
- **Un calendrier** : "Peut-on revoir ce point dans 6 mois ?"
- **Des alternatives** : télétravail, formation, titre, prime

## Pour approfondir

- [Négocier comme un pro — Alexis Kyprianou](https://www.amazon.fr/s?k=negocier+comme+pro+salaire+livre&tag=lebrunnathali-21) : techniques de négociation appliquées au salaire
- [Oser demander — Claude Dubar](https://www.amazon.fr/s?k=oser+demander+augmentation+salaire+livre&tag=lebrunnathali-21) : dépasser la peur de demander plus`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "lettre-recours-gracieux-modeles",
        title: "Lettre de recours gracieux : modèles et guide complet",
        description: "Comment rédiger un recours gracieux efficace ? Modèles pour impôts, amende, CAF, Pôle emploi. Vos droits et la procédure expliqués.",
        date: "16 avril 2026",
        icon: "⚖️",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "6 min",
        content: `## Qu'est-ce qu'un recours gracieux ?

Le recours gracieux est une demande adressée à l'administration qui a pris une décision vous concernant, pour lui demander de **revenir sur sa décision**. C'est gratuit, sans avocat, et souvent efficace. C'est la première étape avant tout recours contentieux (tribunal).

## Quand utiliser un recours gracieux ?

- **Impôts** : demande de remise gracieuse de pénalités ou de majoration
- **Amende** : contestation d'un PV de stationnement ou de vitesse
- **CAF** : trop-perçu, suppression d'allocation
- **Pôle emploi / France Travail** : radiation, refus d'indemnisation
- **Mairie** : refus de permis de construire, décision administrative

## Les règles à respecter

1. **Délai** : vous avez en général **2 mois** à compter de la notification de la décision
2. **Forme** : lettre recommandée avec accusé de réception (obligatoire)
3. **Contenu** : exposé clair des faits, motifs du recours, pièces justificatives
4. **Réponse** : l'administration a **2 mois** pour répondre. Sans réponse = rejet implicite

## Modèle 1 : Recours gracieux aux impôts

*Objet : Recours gracieux — Avis d'imposition n° [numéro]*

Madame, Monsieur le Directeur,

J'ai l'honneur de solliciter votre bienveillance concernant [la majoration / les pénalités / le montant] figurant sur mon avis d'imposition n° [numéro] au titre de l'année [année].

[Exposer les circonstances] : perte d'emploi, difficultés financières, erreur de bonne foi, première infraction.

Au regard de ma situation et de ma bonne foi, je vous serais reconnaissant(e) de bien vouloir m'accorder [une remise totale / partielle] de cette somme.

Vous trouverez ci-joint les pièces justificatives suivantes :
- [Liste des documents]

Dans l'attente de votre décision, je vous prie d'agréer, Madame, Monsieur le Directeur, l'expression de ma considération distinguée.

[Votre nom]
[Adresse]
[Numéro fiscal]

## Modèle 2 : Recours gracieux CAF (trop-perçu)

*Objet : Demande de remise gracieuse — Trop-perçu n° [référence]*

Madame, Monsieur le Directeur,

Suite à la notification de trop-perçu d'un montant de [montant] € au titre de [prestation], je me permets de solliciter une remise gracieuse de cette somme.

[Expliquer la situation] : changement de situation non signalé à temps, erreur de l'organisme, difficultés financières.

Mes ressources actuelles ne me permettent pas de rembourser cette somme. Je vous communique ci-joint :
- [Avis d'imposition / justificatifs de revenus / charges]

Je vous remercie de l'attention portée à ma demande.

Cordialement,
[Votre nom]
[N° d'allocataire]

## Modèle 3 : Recours gracieux amende

*Objet : Contestation de l'avis de contravention n° [numéro]*

Madame, Monsieur l'Officier du Ministère Public,

Je me permets de contester l'avis de contravention n° [numéro] dressé le [date] à [lieu] pour le motif suivant : [stationnement / excès de vitesse].

[Exposer les motifs] : signalisation absente ou confuse, véhicule volé, erreur matérielle, cas de force majeure.

Vous trouverez ci-joint les preuves à l'appui de ma contestation :
- [Photos, témoignages, documents]

Je sollicite l'indulgence de votre service et vous prie de bien vouloir classer cette contravention sans suite.

Respectueusement,
[Votre nom]

## Conseils pour maximiser vos chances

- **Restez poli et factuel** : pas d'agressivité, pas de menaces
- **Apportez des preuves** : justificatifs de revenus, attestations, photos
- **Invoquez votre bonne foi** : première erreur, situation exceptionnelle
- **Citez les textes** : mentionnez l'article L.247 du Livre des procédures fiscales pour les impôts

## Pour aller plus loin

- [Vos droits face à l'administration — collectif](https://www.amazon.fr/s?k=droits+face+administration+recours+guide&tag=lebrunnathali-21) : comprendre les procédures et défendre vos droits
- [Guide pratique du contribuable — Francis Lefebvre](https://www.amazon.fr/s?k=guide+pratique+contribuable+impots&tag=lebrunnathali-21) : tout savoir sur les recours fiscaux`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "rediger-mail-relance-professionnel",
        title: "Comment rédiger un mail de relance professionnel efficace",
        description: "Mail de relance candidature, facture impayée ou client silencieux : modèles et techniques pour relancer sans harceler.",
        date: "16 avril 2026",
        icon: "📧",
        tag: "Conseils",
        tagColor: "bg-red-100 text-red-700",
        readTime: "5 min",
        content: `## Quand relancer (et quand s'abstenir)

La relance est un art délicat. Trop tôt, vous passez pour impatient. Trop tard, on vous a oublié.

### Délais recommandés

| Situation | Délai avant relance |
|---|---|
| Candidature envoyée | 7 à 10 jours |
| Devis envoyé à un client | 3 à 5 jours |
| Facture impayée | Dès J+1 après l'échéance |
| Demande administrative | 15 jours |
| Après un entretien d'embauche | 5 à 7 jours |

## Les règles d'or de la relance

1. **Un objet clair** : "Relance — [sujet]" ou "Suite à notre échange du [date]"
2. **Rappeler le contexte** en une phrase (le destinataire ne se souvient pas forcément)
3. **Rester bref** : 5-8 lignes maximum
4. **Proposer une action concrète** : "Seriez-vous disponible cette semaine pour en discuter ?"
5. **Jamais de reproche** : remplacez "Vous n'avez pas répondu" par "Je me permets de revenir vers vous"

## Modèle 1 : Relance après candidature

*Objet : Relance — Candidature au poste de [intitulé]*

Bonjour [Nom],

Je me permets de revenir vers vous suite à ma candidature au poste de [intitulé] envoyée le [date].

Ce poste correspond parfaitement à mon profil et je serais ravi(e) d'échanger avec vous sur ma candidature. Êtes-vous disponible cette semaine ou la semaine prochaine pour un échange ?

Cordialement,
[Votre nom]

## Modèle 2 : Relance devis / proposition commerciale

*Objet : Suite à notre proposition — [Projet]*

Bonjour [Nom],

Je reviens vers vous concernant la proposition que je vous ai adressée le [date] pour [projet]. Avez-vous eu l'occasion d'en prendre connaissance ?

Je reste disponible pour répondre à vos questions ou ajuster certains points si nécessaire.

Cordialement,
[Votre nom]

## Modèle 3 : Relance facture impayée (ton cordial)

*Objet : Facture n° [numéro] — Échéance dépassée*

Bonjour [Nom],

Sauf erreur de ma part, la facture n° [numéro] d'un montant de [montant] €, arrivée à échéance le [date], n'a pas encore été réglée.

Il s'agit peut-être d'un simple oubli. Pourriez-vous vérifier de votre côté ? Je vous renvoie la facture en pièce jointe pour faciliter le traitement.

Cordialement,
[Votre nom]

## Modèle 4 : Relance facture impayée (ton ferme)

*Objet : Deuxième relance — Facture n° [numéro]*

Madame, Monsieur,

Malgré ma relance du [date], la facture n° [numéro] d'un montant de [montant] € reste impayée à ce jour.

Je vous prie de bien vouloir procéder au règlement sous 8 jours. À défaut, je me verrai dans l'obligation d'engager les démarches nécessaires au recouvrement de cette créance.

Cordialement,
[Votre nom]

## Modèle 5 : Relance après entretien d'embauche

*Objet : Suite à notre entretien du [date]*

Bonjour [Nom],

Je tenais à vous remercier pour notre échange du [date]. Le poste de [intitulé] et les projets de l'équipe ont renforcé ma motivation.

Avez-vous eu l'occasion d'avancer dans le processus de recrutement ? Je reste bien sûr disponible pour tout complément d'information.

Cordialement,
[Votre nom]

## Ce qu'il ne faut jamais écrire dans une relance

- ❌ "Vous ne m'avez toujours pas répondu"
- ❌ "Je suis très déçu(e) de votre silence"
- ❌ "C'est urgent, répondez-moi"
- ✅ "Je me permets de revenir vers vous"
- ✅ "Auriez-vous eu l'occasion de..."
- ✅ "Je reste à votre disposition"`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "lettre-contestation-licenciement-modeles",
        title: "Contestation de licenciement : modèles et droits du salarié",
        description: "Comment contester un licenciement abusif ? Vos droits, les délais, et nos modèles de lettres pour contester auprès de votre employeur.",
        date: "16 avril 2026",
        icon: "🛡️",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "7 min",
        content: `## Quels licenciements peut-on contester ?

Tout licenciement peut être contesté s'il ne respecte pas les conditions légales :

- **Licenciement sans cause réelle et sérieuse** : motif insuffisant ou inventé
- **Licenciement discriminatoire** : âge, genre, grossesse, religion, handicap
- **Vice de procédure** : absence d'entretien préalable, délai non respecté
- **Licenciement économique abusif** : pas de vrai motif économique, reclassement non proposé

## Les délais à connaître

| Type de contestation | Délai |
|---|---|
| Contester le motif du licenciement | 12 mois (conseil de prud'hommes) |
| Licenciement discriminatoire | 5 ans |
| Demander des documents manquants | Pas de délai strict |
| Contester un licenciement économique | 12 mois |

**Important** : ces délais courent à partir de la notification du licenciement (date de réception de la lettre recommandée).

## Étape 1 : Demander les motifs précis

Vous avez **15 jours** après la notification pour demander à votre employeur de préciser les motifs. C'est un droit inscrit dans le Code du travail (article L.1235-2).

### Modèle : Demande de précision des motifs

*Envoi en recommandé avec AR*

Madame, Monsieur,

J'ai bien reçu votre lettre de licenciement en date du [date]. Conformément à l'article L.1235-2 du Code du travail, je vous demande de bien vouloir me préciser les motifs de cette décision.

Je vous rappelle que vous disposez d'un délai de 15 jours pour répondre à cette demande.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]

## Étape 2 : Contester par courrier

### Modèle : Contestation du licenciement

*Envoi en recommandé avec AR*

Madame, Monsieur,

Par la présente, je conteste mon licenciement notifié par courrier du [date] pour le motif de [motif invoqué].

Je considère que ce licenciement est dépourvu de cause réelle et sérieuse pour les raisons suivantes :
- [Argument 1 : le motif invoqué n'est pas établi / est disproportionné]
- [Argument 2 : la procédure n'a pas été respectée]
- [Argument 3 : éléments de preuve contraires]

En conséquence, je vous demande [ma réintégration / le versement de dommages et intérêts]. À défaut de réponse favorable sous 15 jours, je me réserve le droit de saisir le conseil de prud'hommes.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]

## Les indemnités en cas de licenciement abusif

Le barème Macron (article L.1235-3 du Code du travail) fixe les plafonds d'indemnités :

| Ancienneté | Indemnité minimale | Indemnité maximale |
|---|---|---|
| 1 an | 1 mois | 2 mois |
| 5 ans | 3 mois | 6 mois |
| 10 ans | 3 mois | 10 mois |
| 20 ans | 3 mois | 15,5 mois |
| 30 ans | 3 mois | 20 mois |

**Exception** : pas de plafond en cas de discrimination, harcèlement, ou violation d'une liberté fondamentale.

## Vos réflexes immédiats après un licenciement

1. **Conservez tous les documents** : lettre de licenciement, contrat, bulletins de paie, échanges écrits
2. **Demandez les précisions des motifs** dans les 15 jours
3. **Inscrivez-vous à France Travail** pour préserver vos droits au chômage
4. **Consultez un avocat spécialisé** ou contactez un défenseur syndical (gratuit)
5. **Vérifiez votre solde de tout compte** et votre certificat de travail

## Pour aller plus loin

- [Le licenciement — Cédric Pélissier](https://www.amazon.fr/s?k=licenciement+droits+salarie+guide+pratique&tag=lebrunnathali-21) : comprendre vos droits et les recours possibles
- [Code du travail annoté — Dalloz](https://www.amazon.fr/s?k=code+travail+dalloz+2026&tag=lebrunnathali-21) : la référence pour connaître chaque article`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "lettre-demande-formation-employeur",
        title: "Lettre de demande de formation à son employeur : modèles",
        description: "Comment demander une formation à votre employeur ? CPF, plan de développement des compétences. Modèles de lettres et droits.",
        date: "16 avril 2026",
        icon: "🎓",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "5 min",
        content: `## Vos droits à la formation en 2026

Tout salarié a droit à la formation professionnelle. Plusieurs dispositifs existent :

- **CPF (Compte Personnel de Formation)** : alimenté chaque année (500 €/an, plafonné à 5000 €). Vous choisissez la formation.
- **Plan de développement des compétences** : formations financées par l'employeur, à son initiative ou sur demande du salarié.
- **Pro-A (reconversion ou promotion par alternance)** : pour les salariés dont la qualification est insuffisante.
- **CPF de transition** (ex-CIF) : pour les reconversions longues, financé par Transitions Pro.

## Quand faire votre demande

- **Formation courte (hors temps de travail)** : pas besoin d'autorisation, utilisez votre CPF directement
- **Formation sur le temps de travail** : demande écrite à l'employeur **60 jours avant** (formation de moins de 6 mois) ou **120 jours avant** (formation de 6 mois ou plus)

## Modèle 1 : Demande dans le cadre du plan de formation

*Objet : Demande de formation — [Intitulé de la formation]*

Madame, Monsieur,

Je souhaite vous soumettre une demande de formation dans le cadre du plan de développement des compétences de l'entreprise.

**Formation souhaitée** : [Intitulé exact]
**Organisme** : [Nom de l'organisme]
**Durée** : [Nombre d'heures/jours]
**Dates** : [Dates envisagées]
**Coût** : [Montant]

Cette formation me permettrait de [bénéfice concret pour l'entreprise : monter en compétence sur X, prendre en charge Y, améliorer Z].

Je reste à votre disposition pour en discuter lors d'un entretien.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]

## Modèle 2 : Demande CPF sur temps de travail

*Objet : Demande d'autorisation d'absence — Formation CPF*

Madame, Monsieur,

Conformément aux articles L.6323-1 et suivants du Code du travail, je souhaite mobiliser mon Compte Personnel de Formation pour suivre la formation suivante :

**Intitulé** : [Nom de la formation]
**Organisme** : [Organisme certifié Qualiopi]
**Dates** : du [date] au [date]
**Durée** : [X heures], sur temps de travail

Je vous demande l'autorisation de m'absenter durant cette période. Je m'engage à organiser mon travail pour minimiser l'impact sur l'équipe.

Cordialement,
[Votre nom]

## Modèle 3 : Demande lors de l'entretien professionnel

*Objet : Souhait de formation — Entretien professionnel*

Madame, Monsieur,

Suite à notre entretien professionnel du [date], je confirme par écrit mon souhait de suivre la formation [intitulé] évoquée à cette occasion.

Comme nous en avons discuté, cette formation s'inscrit dans mon projet d'évolution vers [objectif] et bénéficiera directement à [projet/service de l'entreprise].

Je reste à votre disposition pour avancer sur les modalités.

Cordialement,
[Votre nom]

## Comment convaincre votre employeur

L'employeur accepte plus facilement quand la formation :

- **Répond à un besoin de l'entreprise** : nouvelle technologie, réglementation, compétence manquante
- **Est certifiante** : diplôme ou certification reconnue
- **A un bon rapport coût/durée** : formation courte et ciblée
- **Est planifiée hors période chargée** : montrez que vous avez anticipé

### Les arguments qui marchent

1. "Cette formation me permettra de **prendre en charge [tâche]** actuellement externalisée."
2. "Notre équipe manque de compétences en **[domaine]**, cette formation comblera le gap."
3. "La certification obtenue sera un atout pour les **appels d'offres** de l'entreprise."

## Pour aller plus loin

- [Se former tout au long de la vie — guide pratique](https://www.amazon.fr/s?k=formation+professionnelle+droits+salarie+guide&tag=lebrunnathali-21) : comprendre tous les dispositifs de formation
- [Mon CPF — site officiel](https://www.moncompteformation.gouv.fr) : vérifier vos droits et vous inscrire`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "lettre-preavis-logement-modeles",
        title: "Lettre de préavis de logement : modèles et délais 2026",
        description: "Comment donner son préavis de logement ? Modèles de lettres pour préavis 1 mois et 3 mois. Conditions pour réduire le délai.",
        date: "16 avril 2026",
        icon: "🏠",
        tag: "Officielle",
        tagColor: "bg-green-100 text-green-700",
        readTime: "5 min",
        content: `## Les délais de préavis en 2026

Le délai de préavis dépend du type de logement et de votre situation :

### Préavis de 3 mois (par défaut)
- Location vide hors zone tendue

### Préavis réduit à 1 mois
- **Zone tendue** (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes, Montpellier et 1100+ communes)
- **Mutation professionnelle** (y compris premier emploi)
- **Perte d'emploi** (licenciement ou fin de CDD)
- **RSA ou AAH** (bénéficiaire)
- **État de santé** justifiant un changement de logement
- **Location meublée** (toujours 1 mois)

## Les règles à respecter

1. **Lettre recommandée avec AR** obligatoire (ou remise en main propre contre signature)
2. **Le préavis court dès réception** de la lettre par le propriétaire
3. **Le loyer est dû** pendant toute la durée du préavis (même si vous partez avant)
4. **Le logement doit être accessible** pour les visites de candidats

## Modèle 1 : Préavis 1 mois (zone tendue)

*Envoi en recommandé avec AR*

Madame, Monsieur,

Par la présente, je vous informe de ma décision de quitter le logement situé au [adresse complète], que j'occupe en vertu du bail signé le [date du bail].

Ce logement étant situé en zone tendue (décret n° 2013-392 du 10 mai 2013), le délai de préavis applicable est de **un mois** conformément à l'article 15 de la loi du 6 juillet 1989.

Mon préavis prendra donc effet à la date de réception de la présente, soit une date de départ estimée au [date estimée].

Je reste à votre disposition pour organiser l'état des lieux de sortie.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]
[Adresse du logement]

## Modèle 2 : Préavis 1 mois (mutation professionnelle)

*Envoi en recommandé avec AR*

Madame, Monsieur,

Par la présente, je vous notifie mon congé pour le logement situé au [adresse complète], objet du bail signé le [date].

Bénéficiant d'une **mutation professionnelle** vers [ville / région], je sollicite l'application du préavis réduit à **un mois** conformément à l'article 15 de la loi du 6 juillet 1989.

Vous trouverez ci-joint l'attestation de mon employeur confirmant cette mutation.

Mon préavis prendra effet à la date de réception du présent courrier.

Cordialement,
[Votre nom]

## Modèle 3 : Préavis 3 mois (standard)

*Envoi en recommandé avec AR*

Madame, Monsieur,

Je vous informe par la présente de mon souhait de résilier le bail du logement situé au [adresse complète], signé le [date du bail].

Conformément à l'article 15 de la loi du 6 juillet 1989, le délai de préavis est de **trois mois**. Mon préavis prendra effet à la date de réception de ce courrier, soit un départ estimé au [date].

Je me tiens à votre disposition pour l'organisation de l'état des lieux de sortie et des visites.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]

## Checklist départ du logement

- ✅ Envoyer le préavis en recommandé AR
- ✅ Résilier l'assurance habitation (à la date de fin de bail)
- ✅ Prévenir EDF/Engie, eau, internet
- ✅ Faire le changement d'adresse (La Poste, impôts, CAF, banque)
- ✅ Préparer l'état des lieux de sortie (nettoyage, réparations)
- ✅ Récupérer le dépôt de garantie (le propriétaire a 1 à 2 mois après l'état des lieux)

## Vérifiez si votre commune est en zone tendue

Consultez la liste officielle sur le site du gouvernement. Les grandes villes et leur première couronne sont quasiment toutes en zone tendue. En cas de doute, **appliquez le préavis d'1 mois et justifiez** — c'est au propriétaire de contester.

## Pour aller plus loin

- [Le guide du locataire — Francis Lefebvre](https://www.amazon.fr/s?k=guide+locataire+droits+logement&tag=lebrunnathali-21) : tous les droits du locataire, du bail à la sortie`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "reussir-entretien-annuel-evaluation",
        title: "Réussir son entretien annuel d'évaluation : le guide complet",
        description: "Comment préparer et réussir votre entretien annuel ? Grille de préparation, questions fréquentes et erreurs à éviter.",
        date: "16 avril 2026",
        icon: "📋",
        tag: "Carrière",
        tagColor: "bg-purple-100 text-purple-700",
        readTime: "6 min",
        content: `## Pourquoi l'entretien annuel est une opportunité

L'entretien annuel n'est pas un examen. C'est le **seul moment de l'année** où vous avez l'attention complète de votre manager pour parler de :
- Vos réussites
- Vos souhaits d'évolution
- Votre rémunération
- Vos besoins en formation

Ne le subissez pas : **préparez-le comme un rendez-vous stratégique**.

## La préparation : 80 % du résultat

### 1. Faire le bilan de l'année

Listez concrètement :
- **Vos réalisations** : projets menés, objectifs atteints, résultats chiffrés
- **Vos compétences développées** : formations suivies, nouvelles responsabilités
- **Les difficultés rencontrées** : et comment vous les avez surmontées
- **Vos contributions invisibles** : aide aux collègues, amélioration de process

### 2. Relire les objectifs de l'année précédente

Reprenez chaque objectif fixé lors du dernier entretien :
- Objectif atteint → préparez les preuves (chiffres, emails, feedbacks)
- Objectif non atteint → préparez une explication honnête et les leçons tirées

### 3. Préparer vos demandes

- **Évolution** : quel poste ou quelles responsabilités visez-vous ?
- **Formation** : quelles compétences souhaitez-vous développer ?
- **Rémunération** : quel ajustement souhaitez-vous et pourquoi ?

## Pendant l'entretien : les bonnes pratiques

### Ce qu'il faut faire
- **Écouter activement** avant de répondre
- **S'appuyer sur des faits** : chiffres, exemples concrets, dates
- **Accepter les critiques constructives** : "Merci, c'est un point sur lequel je vais travailler"
- **Poser des questions** : "Quels objectifs voyez-vous pour moi l'année prochaine ?"

### Ce qu'il faut éviter
- Se comparer aux collègues : "Untel fait moins que moi"
- Être sur la défensive : "Ce n'était pas de ma faute"
- Rester vague : "J'ai bien travaillé cette année"
- Ne rien demander : c'est le moment ou jamais

## Les questions fréquentes (et comment y répondre)

**"Quel est votre bilan de l'année ?"**
→ Préparez 3 réalisations majeures avec résultats chiffrés.

**"Quels points d'amélioration identifiez-vous ?"**
→ Soyez honnête mais montrez que vous agissez déjà : "J'ai identifié [point], et j'ai commencé à [action]."

**"Où vous voyez-vous dans 2 ans ?"**
→ Montrez ambition ET réalisme : "J'aimerais évoluer vers [poste/mission], et je pense que [formation/projet] m'y préparerait."

**"Êtes-vous satisfait de votre rémunération ?"**
→ Si non : "Au regard de mes résultats et de mon évolution, une revalorisation me semble justifiée."

## Après l'entretien

1. **Relisez le compte-rendu** avant de le signer (vous avez le droit de commenter)
2. **Conservez une copie** de vos objectifs pour l'année suivante
3. **Planifiez des points intermédiaires** : n'attendez pas un an pour faire le point

## Grille de préparation express

| Thème | Questions à se poser |
|---|---|
| Réalisations | Qu'ai-je accompli de concret ? Quels résultats chiffrés ? |
| Difficultés | Qu'est-ce qui a été difficile ? Comment ai-je réagi ? |
| Compétences | Qu'ai-je appris cette année ? Que me manque-t-il ? |
| Objectifs N+1 | Que veux-je accomplir l'an prochain ? |
| Évolution | Quel est mon prochain pas de carrière ? |
| Rémunération | Ma rémunération reflète-t-elle ma contribution ? |

## Pour aller plus loin

- [Réussir son entretien annuel — Uriel Megnassan](https://www.amazon.fr/s?k=reussir+entretien+annuel+evaluation+guide&tag=lebrunnathali-21) : préparer, argumenter et obtenir ce que vous méritez
- [L'art de la négociation — Michael Wheeler](https://www.amazon.fr/s?k=art+negociation+michael+wheeler&tag=lebrunnathali-21) : techniques pour défendre vos intérêts`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
    {
        slug: "travailler-etranger-demarches-lettres",
        title: "Travailler à l'étranger : démarches et lettres indispensables",
        description: "Vous partez travailler à l'étranger ? Visa, contrat, résiliation : toutes les démarches et les modèles de lettres à préparer.",
        date: "16 avril 2026",
        icon: "✈️",
        tag: "Conseils",
        tagColor: "bg-red-100 text-red-700",
        readTime: "7 min",
        content: `## Les démarches avant le départ

Partir travailler à l'étranger demande une préparation administrative sérieuse. Voici la checklist complète, étape par étape.

### 1. Le visa ou permis de travail

| Destination | Besoin de visa ? |
|---|---|
| Union Européenne | Non (libre circulation) |
| Suisse | Permis de séjour requis |
| Royaume-Uni (post-Brexit) | Visa de travail (Skilled Worker) |
| Canada | Permis de travail (PVT ou employeur) |
| États-Unis | Visa H-1B, L-1 ou J-1 selon situation |
| Australie | Visa 482 ou WHV (- de 35 ans) |

### 2. Le contrat de travail

Deux options :
- **Contrat local** : vous êtes embauché(e) par une entreprise étrangère, droit local applicable
- **Détachement / expatriation** : votre employeur français vous envoie à l'étranger, maintien (partiel) du droit français

## Les lettres à préparer

### Modèle : Demande de détachement à l'étranger

*À envoyer à votre employeur*

Madame, Monsieur,

Suite à [l'ouverture du poste à l'étranger / notre discussion], je souhaite formaliser ma candidature pour un détachement au sein de [filiale / bureau de ville/pays].

Ce projet s'inscrit dans mon parcours professionnel et répondrait aux besoins de développement de [activité / marché]. Je suis prêt(e) à discuter des modalités (durée, rémunération, couverture sociale, retour).

Cordialement,
[Votre nom]

### Modèle : Résiliation des contrats en France

Avant de partir, résiliez vos contrats français :

*Objet : Résiliation pour départ à l'étranger — Contrat n° [numéro]*

Madame, Monsieur,

Je vous informe de mon départ à l'étranger à compter du [date]. En conséquence, je souhaite résilier mon contrat n° [numéro] à cette date.

Ce motif constitue un motif légitime de résiliation conformément aux conditions générales. Vous trouverez ci-joint un justificatif de mon départ (contrat de travail étranger / visa).

Je vous prie de bien vouloir confirmer la prise en compte de cette résiliation.

Cordialement,
[Votre nom]

**À envoyer à** : assurance habitation, opérateur téléphone/internet, salle de sport, abonnements divers.

### Modèle : Informer les impôts de votre départ

*Objet : Déclaration de départ à l'étranger*

Madame, Monsieur,

Je vous informe de mon départ de France à compter du [date] pour m'installer à [pays].

Mon dernier domicile fiscal en France était : [adresse complète].
Ma nouvelle adresse sera : [adresse à l'étranger].

Je reste à votre disposition pour toute information complémentaire.

Cordialement,
[Votre nom]
[Numéro fiscal]

## Checklist administrative complète

### Avant le départ
- ✅ Visa ou permis de travail obtenu
- ✅ Contrat de travail signé
- ✅ Couverture santé vérifiée (CFE ou assurance locale)
- ✅ Préavis de logement envoyé
- ✅ Contrats résiliés (assurance, téléphone, internet, énergie)
- ✅ Impôts informés du départ
- ✅ Banque prévenue (carte internationale, frais de change)
- ✅ Changement d'adresse effectué (La Poste)

### Sur place
- ✅ Inscription au consulat de France (registre des Français à l'étranger)
- ✅ Ouverture compte bancaire local
- ✅ Assurance santé locale activée
- ✅ Numéro de sécurité sociale local obtenu (si applicable)

## La protection sociale à l'étranger

| Situation | Sécurité sociale | Retraite |
|---|---|---|
| Détachement (- de 2 ans) | Maintien régime français | Cotise en France |
| Expatriation | Régime local ou CFE | Régime local (vérifié bilatéral) |
| Contrat local UE | Régime du pays d'accueil | Périodes cumulées (accords UE) |
| Contrat local hors UE | Régime local | Vérifier convention bilatérale |

**CFE (Caisse des Français de l'Étranger)** : permet de rester affilié à la Sécu française depuis l'étranger. Adhésion volontaire, environ 200-500 €/trimestre selon la formule.

## Pour aller plus loin

- [S'expatrier — mode d'emploi](https://www.amazon.fr/s?k=expatriation+guide+pratique+travailler+etranger&tag=lebrunnathali-21) : toutes les démarches pour réussir son expatriation
- [Vivre et travailler à l'étranger — Lonely Planet](https://www.amazon.fr/s?k=vivre+travailler+etranger+guide&tag=lebrunnathali-21) : conseils pratiques pour s'installer sereinement`,
        cta: { href: "/officielle", text: "⚖️ Générer ma lettre officielle" },
    },
    {
        slug: "droits-stagiaire-convention-guide",
        title: "Droits du stagiaire en 2026 : convention, gratification, durée",
        description: "Quels sont vos droits en tant que stagiaire ? Gratification, durée maximale, convention de stage. Tout ce que vous devez savoir.",
        date: "16 avril 2026",
        icon: "📚",
        tag: "Juridique",
        tagColor: "bg-yellow-100 text-yellow-700",
        readTime: "5 min",
        content: `## Le cadre légal du stage en 2026

Le stage en entreprise est encadré par la loi pour protéger les stagiaires contre les abus. Voici l'essentiel de vos droits.

## La convention de stage

La convention tripartite (étudiant, entreprise, établissement) est **obligatoire**. Sans convention, le stage est illégal. Elle doit mentionner :

- La durée du stage et les dates
- Le nombre d'heures de présence
- Le montant de la gratification
- Les missions confiées
- Le tuteur en entreprise et l'enseignant référent
- Les avantages (tickets restaurant, remboursement transport)

## La gratification : combien et quand ?

| Durée du stage | Gratification |
|---|---|
| Moins de 2 mois | Facultative |
| 2 mois ou plus (soit 309h) | **Obligatoire** : 4,35 €/h minimum (2026) |

**Soit environ 669 € par mois** pour un temps plein (154h/mois).

**Important** : la gratification est due **dès le premier jour** si le stage dépasse 2 mois. Elle n'est pas un salaire et n'est pas soumise aux cotisations sociales (dans la limite du minimum légal).

## La durée maximale

- **6 mois maximum** par année d'enseignement dans la même entreprise
- Calculée en heures : 924 heures (équivalent 6 mois à temps plein)
- **Pas de renouvellement** au-delà de 6 mois

## Vos droits concrets

### Temps de travail
- Même durée que les salariés : **35h/semaine** maximum
- Pas de travail de nuit (sauf dérogation sectorielle)
- Repos obligatoire : 11h par jour, 35h par semaine

### Congés et absences
- Droit aux jours fériés comme les salariés
- Congé maternité, paternité ou adoption si applicable
- Absences autorisées pour examens

### Avantages
- **Tickets restaurant** : si les salariés en bénéficient
- **Remboursement transport** : 50 % du pass Navigo / abonnement (obligatoire)
- Accès au restaurant d'entreprise aux mêmes conditions

## Modèle : Demande de convention de stage

*À envoyer à l'entreprise d'accueil*

Madame, Monsieur,

Actuellement étudiant(e) en [formation] à [établissement], je recherche un stage de [durée] à compter de [date] dans le domaine de [domaine].

Votre entreprise m'intéresse particulièrement pour [raison]. Je serais ravi(e) de contribuer à [mission envisagée].

Pourriez-vous me confirmer la possibilité d'un stage et m'indiquer la procédure pour établir la convention ? Mon établissement se chargera de la partie administrative.

Cordialement,
[Votre nom]
[Formation — Établissement]

## Modèle : Réclamation de gratification non versée

*Envoi en recommandé avec AR*

Madame, Monsieur,

Je me permets de vous signaler que la gratification prévue par ma convention de stage n'a pas été versée pour le(s) mois de [mois concernés].

Conformément à l'article L.612-11 du Code de l'éducation, la gratification est obligatoire pour tout stage d'une durée supérieure à 2 mois. Son montant minimum est de 4,35 €/heure en 2026.

Je vous saurais gré de bien vouloir procéder au versement dans les meilleurs délais.

Cordialement,
[Votre nom]
[Dates du stage]

## Que faire en cas d'abus ?

1. **Parlez-en à votre tuteur enseignant** : il est votre premier interlocuteur
2. **Contactez votre établissement** : le service des stages peut intervenir
3. **Signalez à l'inspection du travail** si l'entreprise refuse de régulariser
4. **Cas graves** (harcèlement, travail dissimulé) : portez plainte

### Les abus les plus fréquents
- Pas de convention de stage
- Gratification non versée
- Missions sans lien avec la formation
- Remplacement d'un salarié absent
- Heures supplémentaires imposées

## Pour aller plus loin

- [Réussir son stage — guide étudiant](https://www.amazon.fr/s?k=reussir+stage+entreprise+guide+etudiant&tag=lebrunnathali-21) : tirer le maximum de votre expérience
- [Les droits des étudiants — collectif](https://www.amazon.fr/s?k=droits+etudiants+stages+guide+juridique&tag=lebrunnathali-21) : le cadre légal expliqué simplement`,
        cta: { href: "/motivation", text: "📄 Générer ma lettre de motivation" },
    },
];
