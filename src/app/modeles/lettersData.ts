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
    {
        slug: "lettre-demission-cdi",
        category: "officielle",
        title: "Lettre de démission CDI : modèle gratuit avec préavis",
        shortTitle: "Démission d’un CDI",
        description: "Modèle gratuit de lettre de démission d’un CDI avec préavis, documents de fin de contrat et date de départ à personnaliser.",
        intro: "Une démission doit exprimer une volonté claire de quitter le CDI. Indiquez la durée du préavis prévue par votre convention ou contrat sans détailler les raisons de votre départ.",
        tag: "Emploi",
        updatedAt: "16 août 2026",
        checklist: ["Intitulé du poste occupé", "Durée et date de fin du préavis", "Mode de remise permettant de dater la réception", "Demande des documents de fin de contrat"],
        relatedGuide: "/blog/lettre-demission-guide-modeles",
        relatedGuideLabel: "Préavis, remise et règles de la démission",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Nom du responsable ou du service RH]
[Adresse de l’entreprise]

[Ville], le [date]

Objet : Notification de ma démission
Lettre recommandée avec accusé de réception / remise en main propre contre décharge

Madame, Monsieur,

Je vous informe par la présente de ma décision claire et non équivoque de démissionner de mon poste de [intitulé du poste], que j’occupe au sein de [nom de l’entreprise] depuis le [date d’embauche].

Conformément à [mon contrat de travail / la convention collective applicable], j’effectuerai un préavis d’une durée de [durée]. Mon contrat prendra donc fin le [date de fin envisagée], sous réserve de la date de réception de ce courrier.

Je vous remercie de bien vouloir tenir à ma disposition, à la fin de mon contrat, mon certificat de travail, mon reçu pour solde de tout compte ainsi que mon attestation destinée à France Travail.

Je reste disponible afin d’organiser la transmission de mes dossiers dans les meilleures conditions.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-demission-sans-preavis",
        category: "officielle",
        title: "Lettre de démission sans préavis : modèle de demande",
        shortTitle: "Démission sans préavis",
        description: "Modèle gratuit pour démissionner et demander à son employeur une dispense totale ou partielle de préavis.",
        intro: "Hors cas particuliers, la dispense de préavis demandée par le salarié nécessite l’accord de l’employeur. Formulez donc une demande explicite et attendez une confirmation écrite.",
        tag: "Emploi",
        updatedAt: "16 août 2026",
        checklist: ["Date de départ souhaitée", "Demande formulée sans ambiguïté", "Accord écrit de l’employeur", "Documents de fin de contrat"],
        relatedGuide: "/blog/lettre-demission-guide-modeles",
        relatedGuideLabel: "Comprendre les conséquences d’une dispense",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Nom du responsable ou du service RH]
[Adresse de l’entreprise]

[Ville], le [date]

Objet : Démission et demande de dispense de préavis

Madame, Monsieur,

Je vous informe de ma décision de démissionner de mon poste de [intitulé du poste], occupé depuis le [date d’embauche].

Mon contrat prévoit un préavis d’une durée de [durée]. Je sollicite toutefois une dispense [totale / partielle] de ce préavis et souhaite que mon contrat prenne fin le [date souhaitée].

Je vous remercie de bien vouloir me confirmer par écrit votre accord ainsi que la date effective de fin de mon contrat. Sans accord de votre part, je reste tenu(e) d’exécuter le préavis applicable.

À mon départ, je vous remercie de mettre à ma disposition mon certificat de travail, mon reçu pour solde de tout compte et mon attestation France Travail.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-preavis-logement-1-mois",
        category: "officielle",
        title: "Lettre de préavis logement 1 mois : modèle gratuit",
        shortTitle: "Préavis logement d’un mois",
        description: "Modèle gratuit de lettre de congé avec préavis réduit à un mois pour un logement meublé, en zone tendue ou autre motif éligible.",
        intro: "Pour réclamer un préavis réduit, précisez le motif dans la lettre et joignez le justificatif nécessaire. Un logement meublé ouvre normalement droit à un préavis d’un mois sans motif supplémentaire.",
        tag: "Logement",
        updatedAt: "16 août 2026",
        checklist: ["Adresse complète du logement", "Motif du préavis réduit", "Justificatif joint si nécessaire", "Envoi permettant de prouver la réception"],
        relatedGuide: "/blog/lettre-preavis-logement-modeles",
        relatedGuideLabel: "Vérifier les motifs de préavis réduit",
        content: `[Votre prénom NOM]
[Votre adresse actuelle]
[Votre téléphone et votre e-mail]

[Nom du propriétaire ou de l’agence]
[Adresse]

[Ville], le [date]

Objet : Congé du logement avec préavis d’un mois
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Locataire du logement situé [adresse complète du logement] depuis le [date de prise d’effet du bail], je vous informe de ma décision de vous donner congé.

Je bénéficie d’un délai de préavis réduit à un mois en raison de [logement meublé / logement situé en zone tendue / perte d’emploi / nouvel emploi consécutif à une perte d’emploi / mutation professionnelle / autre motif légal]. [Le justificatif correspondant est joint à ce courrier.]

Le préavis débutera à la réception de cette lettre. Je souhaite quitter les lieux le [date envisagée de départ]. Je vous propose de convenir d’un rendez-vous pour l’état des lieux de sortie et la remise des clés.

Je vous remercie de me restituer le dépôt de garantie dans le délai applicable à compter de la remise des clés.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]

Pièce jointe : [justificatif du préavis réduit, si nécessaire]`,
    },
    {
        slug: "lettre-preavis-logement-3-mois",
        category: "officielle",
        title: "Lettre de préavis logement 3 mois : modèle gratuit",
        shortTitle: "Préavis logement de trois mois",
        description: "Modèle gratuit pour donner congé d’un logement vide avec un préavis de trois mois et organiser l’état des lieux de sortie.",
        intro: "Ce modèle vise principalement la location vide lorsque le délai normal de trois mois s’applique. Le préavis commence à la réception du congé par le bailleur.",
        tag: "Logement",
        updatedAt: "16 août 2026",
        checklist: ["Adresse et date de début du bail", "Date de départ calculée après réception", "Rendez-vous d’état des lieux", "Nouvelle adresse pour la restitution du dépôt"],
        relatedGuide: "/blog/lettre-preavis-logement-modeles",
        relatedGuideLabel: "Préavis et formalités de départ du logement",
        content: `[Votre prénom NOM]
[Votre adresse actuelle]
[Votre téléphone et votre e-mail]

[Nom du propriétaire ou de l’agence]
[Adresse]

[Ville], le [date]

Objet : Congé du logement loué
Lettre recommandée avec accusé de réception

Madame, Monsieur,

Je vous informe de ma décision de quitter le logement que je loue depuis le [date de prise d’effet du bail], situé [adresse complète].

Conformément au délai de préavis de trois mois applicable à cette location, le congé prendra effet trois mois après la réception du présent courrier. La date de départ envisagée est le [date].

Je vous propose de convenir d’un rendez-vous afin de réaliser l’état des lieux de sortie et de vous remettre les clés. Après mon départ, ma nouvelle adresse sera : [nouvelle adresse].

Je vous remercie de procéder à la restitution du dépôt de garantie dans les délais applicables.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-resiliation-assurance-habitation",
        category: "officielle",
        title: "Résiliation assurance habitation : modèle de lettre gratuit",
        shortTitle: "Résiliation assurance habitation",
        description: "Modèle gratuit pour résilier une assurance habitation à échéance, après la première année ou à la suite d’un changement de situation.",
        intro: "Le fondement et la date d’effet dépendent de votre situation. Vérifiez votre contrat et joignez un justificatif si la résiliation suit un déménagement ou un changement de risque.",
        tag: "Assurance",
        updatedAt: "16 août 2026",
        checklist: ["Numéro du contrat", "Adresse du logement assuré", "Fondement de la résiliation", "Justificatif en cas de changement de situation"],
        relatedGuide: "/blog/lettre-resiliation-droits-modeles",
        relatedGuideLabel: "Les règles à vérifier avant de résilier",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’assureur]
[Adresse du service résiliation]

[Ville], le [date]

Objet : Résiliation du contrat d’assurance habitation n° [numéro]

Madame, Monsieur,

Je vous demande de résilier mon contrat d’assurance habitation n° [numéro], couvrant le logement situé [adresse du bien assuré].

Cette demande intervient [à l’échéance annuelle / après la première année de souscription / à la suite du changement de situation suivant : déménagement, vente ou autre motif]. Je souhaite que la résiliation prenne effet le [date souhaitée ou délai applicable].

Vous trouverez joint [le justificatif du changement de situation, le cas échéant]. Je vous remercie de me confirmer par écrit la date de fin des garanties et de me rembourser l’éventuelle portion de cotisation versée pour la période postérieure à cette date.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]

Pièce jointe : [justificatif, si nécessaire]`,
    },
    {
        slug: "lettre-resiliation-mutuelle",
        category: "officielle",
        title: "Lettre de résiliation mutuelle : modèle gratuit",
        shortTitle: "Résiliation d’une mutuelle",
        description: "Modèle gratuit pour demander la résiliation d’une complémentaire santé et obtenir une confirmation de la date de fin du contrat.",
        intro: "Après la première année, une complémentaire santé individuelle peut généralement être résiliée sans frais. Une adhésion obligatoire à la mutuelle d’entreprise peut aussi justifier une demande avec preuve.",
        tag: "Assurance",
        updatedAt: "16 août 2026",
        checklist: ["Numéro d’adhérent et de contrat", "Date d’effet demandée", "Justificatif de mutuelle obligatoire", "Coordonnées pour le remboursement éventuel"],
        relatedGuide: "/blog/lettre-resiliation-droits-modeles",
        relatedGuideLabel: "Bien préparer une demande de résiliation",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de la mutuelle]
[Adresse du service résiliation]

[Ville], le [date]

Objet : Résiliation de la complémentaire santé n° [numéro de contrat]

Madame, Monsieur,

Je vous informe de ma volonté de résilier mon contrat de complémentaire santé n° [numéro], souscrit le [date de souscription], pour le motif suivant : [résiliation après la première année / adhésion obligatoire à la mutuelle de mon employeur / autre motif prévu].

Je vous remercie de mettre fin au contrat à compter du [date souhaitée ou date résultant du délai applicable] et de cesser tout prélèvement à partir de sa date effective de résiliation.

[Dans le cas d’une adhésion obligatoire : Vous trouverez jointe l’attestation remise par mon employeur.]

Merci de me confirmer par écrit la prise en compte de ma demande et de procéder au remboursement de toute cotisation versée au-delà de la date de fin.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-resiliation-box-internet-mobile",
        category: "officielle",
        title: "Résiliation box Internet ou forfait mobile : modèle gratuit",
        shortTitle: "Résiliation Internet ou mobile",
        description: "Modèle gratuit pour résilier une box Internet ou un forfait mobile et demander les modalités de restitution du matériel.",
        intro: "Avant l’envoi, vérifiez la durée d’engagement, les frais éventuels et les règles de portabilité du numéro. Pour conserver votre numéro mobile, la procédure par RIO est souvent préférable.",
        tag: "Résiliation",
        updatedAt: "16 août 2026",
        checklist: ["Numéro client et ligne concernée", "Engagement et frais vérifiés", "Conservation éventuelle du numéro", "Retour de la box et des accessoires"],
        relatedGuide: "/blog/lettre-resiliation-droits-modeles",
        relatedGuideLabel: "Délais et preuves utiles pour résilier",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’opérateur]
[Adresse du service résiliation]

[Ville], le [date]

Objet : Résiliation du contrat [Internet / mobile] n° [numéro de contrat]

Madame, Monsieur,

Je vous demande de résilier mon abonnement [nom de l’offre], associé à la ligne [numéro de téléphone ou identifiant de ligne] et au compte client n° [numéro].

Je souhaite que cette résiliation prenne effet [dans le délai contractuel applicable / le date souhaitée], pour le motif suivant : [fin d’engagement / motif légitime à préciser].

Merci de me confirmer la date effective de résiliation, le montant des éventuels frais de clôture ainsi que la procédure et le délai de restitution du matériel mis à ma disposition.

Je vous demande également de cesser tout prélèvement après le règlement de la facture de clôture.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-rupture-periode-essai-salarie",
        category: "officielle",
        title: "Rupture de période d’essai par le salarié : modèle",
        shortTitle: "Rupture de période d’essai",
        description: "Modèle gratuit pour notifier la rupture d’une période d’essai par le salarié en respectant le délai de prévenance.",
        intro: "Le salarié peut rompre sa période d’essai sans motiver sa décision, mais doit respecter un délai de prévenance. Remettez la lettre de façon à pouvoir prouver sa date de réception.",
        tag: "Emploi",
        updatedAt: "16 août 2026",
        checklist: ["Date de début du contrat", "Période d’essai encore en cours", "Délai de prévenance applicable", "Date effective de départ"],
        relatedGuide: "/blog/droits-salaries-code-travail-essentiel",
        relatedGuideLabel: "Les règles essentielles du contrat de travail",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Nom du responsable ou du service RH]
[Adresse]

[Ville], le [date]

Objet : Rupture de ma période d’essai

Madame, Monsieur,

J’ai intégré l’entreprise le [date de début] en qualité de [intitulé du poste], dans le cadre d’un contrat comportant une période d’essai de [durée].

Je vous informe de ma décision de mettre fin à cette période d’essai. Compte tenu du délai de prévenance applicable de [durée du délai], mon dernier jour de travail sera le [date de départ].

Je vous remercie de bien vouloir préparer pour cette date mon certificat de travail, mon reçu pour solde de tout compte et mon attestation France Travail.

Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-motivation-candidature-spontanee",
        category: "motivation",
        title: "Lettre de motivation candidature spontanée : modèle gratuit",
        shortTitle: "Candidature spontanée",
        description: "Modèle gratuit de candidature spontanée pour proposer un profil ciblé à une entreprise sans répondre à une offre publiée.",
        intro: "Une candidature spontanée doit montrer que vous connaissez l’entreprise et proposer une contribution concrète. Visez un métier ou une équipe plutôt qu’une demande vague de poste.",
        tag: "Emploi",
        updatedAt: "16 août 2026",
        checklist: ["Métier ou service clairement visé", "Actualité ou projet de l’entreprise", "Réalisation mesurable", "Destinataire identifié si possible"],
        relatedGuide: "/blog/candidature-spontanee-reussir-2026",
        relatedGuideLabel: "Réussir et relancer une candidature spontanée",
        content: `[Votre prénom NOM]
[Votre adresse]
[Votre téléphone et votre e-mail]

[Nom de l’entreprise]
[Nom du destinataire, si connu]
[Adresse]

[Ville], le [date]

Objet : Candidature spontanée – [métier ou domaine recherché]

Madame, Monsieur,

Votre entreprise retient particulièrement mon attention pour [activité, projet, valeur ou actualité précise]. Je souhaite vous proposer ma candidature pour contribuer à vos activités en tant que [métier ou fonction visée].

Au cours de [expérience, formation ou projet], j’ai développé [compétence 1] et [compétence 2]. J’ai notamment [réalisation concrète accompagnée d’un résultat], une expérience que je pourrais mettre au service de [besoin ou projet possible de l’entreprise].

Disponible à partir du [date], je serais heureux(se) d’échanger avec vous sur vos besoins actuels ou à venir et sur la contribution que je pourrais apporter à votre équipe.

Je vous remercie de l’attention portée à ma démarche et vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

[Signature]`,
    },
    {
        slug: "lettre-motivation-parcoursup",
        category: "motivation",
        title: "Lettre de motivation Parcoursup 2026 : modèle de projet motivé",
        shortTitle: "Motivation Parcoursup",
        description: "Modèle de projet de formation motivé Parcoursup à adapter à la formation, aux attendus et à votre parcours personnel.",
        intro: "Sur Parcoursup, le texte doit expliquer pourquoi cette formation correspond à votre projet. N’ajoutez pas d’informations personnelles interdites lorsque la candidature est anonymisée et respectez la limite affichée.",
        tag: "Études",
        updatedAt: "16 août 2026",
        checklist: ["Nom exact de la formation", "Deux attendus reliés à votre parcours", "Projet d’études ou professionnel", "Limite de caractères respectée"],
        relatedGuide: "/blog/stage-alternance-reussir-candidature",
        relatedGuideLabel: "Présenter son parcours et sa motivation",
        content: `Madame, Monsieur,

Actuellement en [classe ou situation], je souhaite intégrer [nom exact de la formation] au sein de [nom de l’établissement] afin de poursuivre mon projet dans le domaine de [domaine visé].

Cette formation m’intéresse particulièrement pour [enseignement, spécialisation, méthode pédagogique ou débouché précis]. Les attendus en [attendu 1] et [attendu 2] correspondent aux compétences que j’ai développées grâce à [matière, projet, activité ou expérience concrète].

[Décrivez en deux ou trois phrases une réalisation, une lecture, une activité ou une expérience qui démontre votre intérêt.] Cette expérience a confirmé mon envie de progresser en [compétence ou discipline].

À terme, je souhaite [projet d’études ou professionnel, même encore ouvert]. Sérieux(se), curieux(se) et prêt(e) à m’investir, je suis convaincu(e) que votre formation constitue une étape cohérente pour construire ce projet.

Je vous remercie de l’attention portée à ma candidature.`,
    },
];

export function getLetterTemplate(slug: string) {
    return letterTemplates.find((template) => template.slug === slug);
}

export function getLettersByCategory(category: LetterCategory) {
    return letterTemplates.filter((template) => template.category === category);
}
