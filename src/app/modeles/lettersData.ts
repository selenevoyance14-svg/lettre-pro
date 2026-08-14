export type LetterCategory = "motivation" | "officielle";

export interface LetterTemplate {
    slug: string;
    category: LetterCategory;
    title: string;
    shortTitle: string;
    description: string;
    intro: string;
    tag: string;
    updatedAt: string;
    checklist: string[];
    relatedGuide?: string;
    relatedGuideLabel?: string;
    content: string;
}

export const letterTemplates: LetterTemplate[] = [
    {
        slug: "lettre-motivation-cdi",
        category: "motivation",
        title: "Lettre de motivation CDI : modèle gratuit",
        shortTitle: "Motivation pour un CDI",
        description: "Modèle gratuit de lettre de motivation pour un CDI, prêt à personnaliser, copier, télécharger ou imprimer.",
        intro: "Ce modèle convient à une candidature répondant à une offre de CDI. Remplacez les exemples génériques par une réalisation précise et un élément propre à l’entreprise.",
        tag: "Emploi",
        updatedAt: "14 août 2026",
        checklist: ["Nom exact du poste et de l’entreprise", "Une réalisation concrète liée au poste", "Vos coordonnées et la date", "Orthographe et formule de politesse"],
        relatedGuide: "/blog/lettre-motivation-qui-se-demarque",
        relatedGuideLabel: "Comment se démarquer dans sa lettre",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Nom du destinataire, si connu]
[Adresse de l’entreprise]

[Ville], le [date]

Objet : Candidature au poste de [intitulé du poste]

Madame, Monsieur,

Votre offre pour le poste de [intitulé du poste], publiée sur [source], a retenu toute mon attention. Fort(e) de [nombre] années d’expérience en [domaine], je souhaite mettre mes compétences au service de [nom de l’entreprise].

Au cours de mon expérience chez [entreprise précédente], j’ai [réalisation concrète et résultat obtenu]. Cette mission m’a permis de développer [deux compétences utiles pour le poste].

Je souhaite rejoindre votre entreprise notamment pour [raison précise liée à l’entreprise ou au poste]. Je serais heureux(se) de contribuer à [objectif ou projet de l’équipe].

Je me tiens à votre disposition pour vous présenter plus précisément ma candidature lors d’un entretien.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-motivation-stage-alternance",
        category: "motivation",
        title: "Lettre de motivation stage ou alternance : modèle gratuit",
        shortTitle: "Stage ou alternance",
        description: "Modèle de lettre de motivation gratuit pour rechercher un stage ou une alternance, à adapter à votre formation.",
        intro: "Présentez clairement votre formation, vos dates de disponibilité et ce que vous savez déjà faire. Un projet scolaire précis vaut mieux qu’une longue liste de qualités.",
        tag: "Études",
        updatedAt: "14 août 2026",
        checklist: ["Formation et établissement", "Dates et durée recherchées", "Projet scolaire ou expérience pertinente", "Rythme d’alternance, le cas échéant"],
        relatedGuide: "/blog/stage-alternance-reussir-candidature",
        relatedGuideLabel: "Réussir sa candidature en stage ou alternance",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Adresse de l’entreprise]

[Ville], le [date]

Objet : Candidature pour [un stage / une alternance] en [domaine]

Madame, Monsieur,

Actuellement en [formation] à [établissement], je recherche [un stage / une alternance] à partir du [date], pour une durée de [durée].

Votre activité dans [secteur ou projet précis] correspond à mon projet professionnel. Ma formation m’a permis d’acquérir des bases en [compétences pertinentes] et de réaliser [projet concret en une phrase].

Sérieux(se), curieux(se) et désireux(se) de progresser, je souhaite mettre ces acquis en pratique auprès de votre équipe et contribuer à [mission ou besoin identifié].

Je serais heureux(se) de vous rencontrer afin d’échanger sur ma motivation et les missions que vous pourriez me confier.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-motivation-reconversion",
        category: "motivation",
        title: "Lettre de motivation reconversion professionnelle : modèle",
        shortTitle: "Reconversion professionnelle",
        description: "Modèle gratuit de lettre de motivation pour expliquer une reconversion professionnelle et valoriser ses compétences transférables.",
        intro: "Une bonne lettre de reconversion relie votre ancien parcours au nouveau métier. Expliquez le choix, les démarches déjà entreprises et les compétences transférables.",
        tag: "Reconversion",
        updatedAt: "14 août 2026",
        checklist: ["Motif positif de la reconversion", "Formation ou démarche entreprise", "Deux compétences transférables", "Lien clair avec le poste visé"],
        relatedGuide: "/blog/lettre-motivation-reconversion-modeles",
        relatedGuideLabel: "Conseils pour une lettre de reconversion",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Adresse de l’entreprise]

[Ville], le [date]

Objet : Candidature au poste de [intitulé du poste]

Madame, Monsieur,

Après [nombre] années dans le secteur de [ancien secteur], j’ai choisi de me reconvertir vers [nouveau domaine] afin de [motivation professionnelle positive].

Mon parcours m’a permis de développer des compétences directement utiles pour ce poste, notamment [compétence transférable 1] et [compétence transférable 2]. J’ai préparé cette transition grâce à [formation, certification, stage ou projet personnel].

Le poste proposé par [nom de l’entreprise] représente pour moi l’occasion de mettre cette double expérience au service de [mission ou objectif précis].

Je serais heureux(se) de vous exposer plus en détail mon projet professionnel lors d’un entretien.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-resiliation-abonnement",
        category: "officielle",
        title: "Lettre de résiliation d’abonnement : modèle gratuit",
        shortTitle: "Résiliation d’abonnement",
        description: "Modèle gratuit de lettre pour résilier un abonnement et demander une confirmation écrite de la date de fin.",
        intro: "Vérifiez les conditions de résiliation de votre contrat avant l’envoi : durée d’engagement, préavis, motif légitime et adresse du service compétent.",
        tag: "Résiliation",
        updatedAt: "14 août 2026",
        checklist: ["Numéro du contrat ou de l’abonné", "Date de fin souhaitée", "Préavis prévu au contrat", "Adresse exacte du service résiliation"],
        relatedGuide: "/blog/lettre-resiliation-droits-modeles",
        relatedGuideLabel: "Comprendre ses droits de résiliation",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Adresse du service résiliation]

[Ville], le [date]

Objet : Résiliation du contrat n° [numéro de contrat]

Madame, Monsieur,

Je vous informe par la présente de ma volonté de résilier mon abonnement [nature de l’abonnement], souscrit le [date de souscription] sous le numéro [numéro de contrat].

Je vous remercie de faire prendre effet à cette résiliation le [date souhaitée], conformément aux conditions prévues par mon contrat [ou : pour le motif légitime suivant : motif].

Je vous demande de me confirmer par écrit la prise en compte de ma demande, la date effective de résiliation et l’arrêt de tout prélèvement postérieur à cette date.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-mise-en-demeure",
        category: "officielle",
        title: "Lettre de mise en demeure : modèle gratuit",
        shortTitle: "Mise en demeure",
        description: "Modèle gratuit de mise en demeure à personnaliser avant un envoi recommandé avec accusé de réception.",
        intro: "La mise en demeure doit décrire l’obligation inexécutée et laisser un délai raisonnable. Joignez les preuves utiles et conservez une copie de l’envoi.",
        tag: "Litige",
        updatedAt: "14 août 2026",
        checklist: ["Chronologie exacte des faits", "Obligation demandée", "Délai raisonnable accordé", "Preuves et précédentes relances"],
        relatedGuide: "/blog/mise-en-demeure-quand-comment",
        relatedGuideLabel: "Quand et comment envoyer une mise en demeure",
        content: `[Votre prénom NOM]
[Votre adresse]

[Nom du destinataire]
[Adresse du destinataire]

[Ville], le [date]

Objet : Mise en demeure de [obligation demandée]
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Le [date], [exposé précis de l’engagement ou du contrat]. Or, à ce jour, [description du manquement constaté], malgré mes relances des [dates des relances].

Par la présente, je vous mets donc en demeure de [action précise demandée] dans un délai de [nombre] jours à compter de la réception de ce courrier.

À défaut d’exécution dans ce délai, je me réserve la possibilité d’engager toute démarche utile afin de faire valoir mes droits.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]

Pièces jointes : [liste des justificatifs]`,
    },
    {
        slug: "lettre-reclamation-proprietaire",
        category: "officielle",
        title: "Lettre de réclamation au propriétaire : modèle gratuit",
        shortTitle: "Réclamation au propriétaire",
        description: "Modèle gratuit pour signaler un problème dans un logement et demander l’intervention du propriétaire ou de l’agence.",
        intro: "Décrivez le problème sans l’exagérer, indiquez depuis quand il existe et joignez des photographies ou constats utiles. Adaptez le délai demandé à l’urgence.",
        tag: "Logement",
        updatedAt: "14 août 2026",
        checklist: ["Adresse du logement", "Description et date du problème", "Photographies ou justificatifs", "Intervention précisément demandée"],
        relatedGuide: "/blog/lettre-proprietaire-modeles",
        relatedGuideLabel: "Tous les modèles utiles pour écrire au propriétaire",
        content: `[Votre prénom NOM]
[Adresse du logement]

[Nom du propriétaire ou de l’agence]
[Adresse]

[Ville], le [date]

Objet : Demande d’intervention concernant [nature du problème]

Madame, Monsieur,

Locataire du logement situé [adresse complète] depuis le [date d’entrée], je vous signale le problème suivant : [description précise du problème]. Celui-ci est constaté depuis le [date].

Cette situation entraîne [conséquences concrètes]. Vous trouverez en pièces jointes [photos, échanges précédents ou autre justificatif].

Je vous remercie de bien vouloir organiser [intervention ou réparation demandée] dans les meilleurs délais et de m’indiquer la date prévue d’intervention.

Dans l’attente de votre retour, veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-contestation-amende",
        category: "officielle",
        title: "Lettre de contestation d’une amende : modèle gratuit",
        shortTitle: "Contestation d’une amende",
        description: "Modèle de lettre gratuit pour présenter une contestation d’amende avec les références et justificatifs nécessaires.",
        intro: "Respectez impérativement la procédure et le délai indiqués sur l’avis. Selon le cas, la contestation s’effectue en ligne ou avec le formulaire joint à l’avis.",
        tag: "Contestation",
        updatedAt: "14 août 2026",
        checklist: ["Numéro et date de l’avis", "Motif factuel de contestation", "Procédure inscrite sur l’avis", "Copies des preuves utiles"],
        relatedGuide: "/blog/contester-amende-guide-complet",
        relatedGuideLabel: "Guide complet pour contester une amende",
        content: `[Votre prénom NOM]
[Votre adresse]

[Destinataire indiqué sur l’avis]
[Adresse]

[Ville], le [date]

Objet : Contestation de l’avis de contravention n° [numéro]

Madame, Monsieur l’Officier du ministère public,

Je conteste l’avis de contravention n° [numéro], établi le [date] à [lieu], concernant le véhicule immatriculé [immatriculation].

Ma contestation repose sur les faits suivants : [présentation claire, chronologique et vérifiable du motif].

Vous trouverez joints à ma demande [liste des pièces et preuves], ainsi que les documents exigés par la procédure mentionnée sur l’avis.

Au regard de ces éléments, je vous demande de bien vouloir examiner ma contestation et classer cet avis sans suite.

Veuillez agréer, Madame, Monsieur l’Officier du ministère public, l’expression de ma considération distinguée.

[Signature]`,
    },
    {
        slug: "lettre-contestation-frais-bancaires",
        category: "officielle",
        title: "Lettre de contestation de frais bancaires : modèle",
        shortTitle: "Contestation de frais bancaires",
        description: "Modèle gratuit pour contester des frais bancaires, demander leur justification et solliciter un remboursement.",
        intro: "Relevez chaque opération contestée avec sa date, son libellé et son montant. Commencez par demander une explication précise et conservez les relevés concernés.",
        tag: "Banque",
        updatedAt: "14 août 2026",
        checklist: ["Numéro de compte partiellement masqué", "Dates, libellés et montants", "Motif précis de la contestation", "Copies des relevés concernés"],
        relatedGuide: "/blog/lettre-reclamation-faire-valoir-droits",
        relatedGuideLabel: "Bien structurer une lettre de réclamation",
        content: `[Votre prénom NOM]
[Votre adresse]
[Référence client ou compte]

[Nom de la banque]
[Adresse du service réclamations]

[Ville], le [date]

Objet : Contestation de frais bancaires

Madame, Monsieur,

Je conteste les frais débités sur mon compte [référence] aux dates suivantes :
- [date] : [montant] — [libellé]
- [date] : [montant] — [libellé]

Ces frais me paraissent injustifiés pour le motif suivant : [explication précise]. Je vous demande de m’indiquer leur fondement contractuel et de procéder, le cas échéant, au remboursement de la somme totale de [montant].

Vous trouverez en pièce jointe la copie des relevés concernés. Je vous remercie de bien vouloir me répondre par écrit.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
];

export function getLetterTemplate(slug: string) {
    return letterTemplates.find((template) => template.slug === slug);
}

export function getLettersByCategory(category: LetterCategory) {
    return letterTemplates.filter((template) => template.category === category);
}
