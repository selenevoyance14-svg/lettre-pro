import type { LetterTemplate } from "./lettersData";
export const newLetterTemplates: LetterTemplate[] = [
  {
    "slug": "attestation-hebergement",
    "category": "officielle",
    "title": "Attestation d’hébergement : modèle gratuit",
    "shortTitle": "Attestation d’hébergement",
    "description": "Un texte à personnaliser pour attester l’hébergement d’une personne à votre domicile.",
    "intro": "L’hébergeant signe cette attestation. Vérifiez les justificatifs demandés par l’organisme destinataire et indiquez uniquement des faits exacts.",
    "tag": "Logement",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Identité et adresse de l’hébergeant",
      "Identité de la personne hébergée",
      "Date de début exacte",
      "Date, signature et justificatifs demandés"
    ],
    "relatedGuide": "/blog/attestation-hebergement-documents",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Attestation d’hébergement\n\nJe soussigné(e), [prénom NOM de l’hébergeant], né(e) le [date] à [lieu], demeurant au [adresse complète], atteste sur l’honneur héberger à mon domicile [prénom NOM de la personne hébergée], né(e) le [date] à [lieu], depuis le [date de début de l’hébergement].\n\nCette attestation est établie pour être présentée à [organisme ou démarche concernée].\n\nFait à [ville], le [date].\n\n[Signature de l’hébergeant]\n\nPièces jointes : [justificatifs demandés par l’organisme]"
  },
  {
    "slug": "demande-quittance-loyer",
    "category": "officielle",
    "title": "Demande de quittance de loyer : modèle gratuit",
    "shortTitle": "Demande de quittance de loyer",
    "description": "Demander une quittance pour une période dont le loyer et les charges ont été intégralement payés.",
    "intro": "Indiquez les périodes payées et les références du logement. Une quittance concerne un paiement complet ; adaptez la demande si un solde reste dû.",
    "tag": "Logement",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Adresse du logement",
      "Périodes demandées",
      "Paiement intégral vérifié",
      "Coordonnées pour la réponse"
    ],
    "relatedGuide": "/blog/quittance-loyer-demande",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Demande de quittance de loyer — [adresse du logement]\n\nMadame, Monsieur,\n\nLocataire du logement situé au [adresse], je vous remercie de me transmettre une quittance pour la période [mois et année / périodes concernées], dont le loyer et les charges ont été intégralement réglés le [date ou références des paiements].\n\nJe souhaite recevoir ce document par [courrier à l’adresse ci-dessus / e-mail, avec mon accord, à l’adresse suivante : e-mail].\n\nJe reste disponible pour toute précision utile sur les paiements concernés.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\n[Signature]"
  },
  {
    "slug": "reclamation-produit-defectueux",
    "category": "officielle",
    "title": "Réclamation pour un produit défectueux : modèle gratuit",
    "shortTitle": "Réclamation pour un produit défectueux",
    "description": "Exposer le défaut d’un produit acheté auprès d’un professionnel et demander une solution adaptée.",
    "intro": "Décrivez le défaut, les dates et les références de commande. Consultez les conditions de la garantie applicable avant de demander une solution précise.",
    "tag": "Litige",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Vendeur professionnel et référence de commande",
      "Date d’achat ou de livraison",
      "Défaut observé sans exagération",
      "Facture et preuves pertinentes"
    ],
    "relatedGuide": "/blog/reclamation-produit-defectueux-guide",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Réclamation concernant [produit] — commande [référence]\n\nMadame, Monsieur,\n\nJ’ai acheté auprès de votre entreprise [désignation du produit] le [date], sous la référence [commande ou facture]. Le produit m’a été remis le [date].\n\nJ’ai constaté le défaut suivant : [description précise du problème et des circonstances de découverte]. Mes démarches précédentes sont les suivantes : [dates et échanges, le cas échéant].\n\nJe vous demande de m’indiquer les modalités de prise en charge de ce défaut au titre de [garantie applicable après vérification] et de [solution demandée : réparation ou remplacement, selon la situation].\n\nVous trouverez en pièce jointe [facture, photographies ou autres documents utiles]. Merci de me confirmer par écrit la suite donnée à ma demande et les modalités de retour éventuel du produit.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\n[Signature]"
  },
  {
    "slug": "demande-echeancier-paiement",
    "category": "officielle",
    "title": "Demande d’échéancier de paiement : modèle gratuit",
    "shortTitle": "Demande d’échéancier de paiement",
    "description": "Proposer un calendrier de paiement réaliste pour une facture ou une somme due.",
    "intro": "Ce courrier demande un accord amiable. Il ne suspend pas à lui seul une échéance, des frais ou une procédure ; obtenez une réponse écrite.",
    "tag": "Litige",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Référence et montant vérifiés",
      "Échéancier compatible avec votre budget",
      "Dates et montant de chaque versement",
      "Accord écrit à obtenir"
    ],
    "relatedGuide": "/blog/demander-echeancier-paiement-guide",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Proposition d’échéancier — [référence de la facture ou du dossier]\n\nMadame, Monsieur,\n\nJe vous contacte au sujet de la somme de [montant] euros relative à [facture ou dossier], payable le [date].\n\nEn raison de [explication brève de la difficulté, sans détails personnels inutiles], je souhaite vous proposer un règlement réparti comme suit :\n\n- [montant] euros le [date] ;\n- [montant] euros le [date] ;\n- [montant] euros le [date].\n\nLe total proposé correspond à [montant total] euros. Je vous remercie de me confirmer par écrit si vous acceptez ce calendrier, ainsi que les conditions applicables aux éventuels frais et aux modalités de paiement.\n\nCette proposition reste soumise à votre accord. Je reste disponible pour examiner une autre organisation réaliste.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\n[Signature]"
  },
  {
    "slug": "relance-candidature",
    "category": "motivation",
    "title": "Relance de candidature : modèle gratuit",
    "shortTitle": "Relance de candidature",
    "description": "Un message court pour demander où en est une candidature sans répéter toute la lettre de motivation.",
    "intro": "Respectez le calendrier annoncé par l’entreprise. Mentionnez le poste, la date d’envoi et une information utile ; évitez les relances répétées.",
    "tag": "Emploi",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Poste et référence de l’offre",
      "Date de la candidature initiale",
      "Destinataire pertinent",
      "Calendrier annoncé par l’entreprise"
    ],
    "relatedGuide": "/blog/relancer-candidature-sans-insister",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Suivi de candidature — [intitulé du poste / référence]\n\nMadame, Monsieur,\n\nJe me permets de revenir vers vous au sujet de ma candidature au poste de [intitulé], transmise le [date].\n\nJe reste intéressé(e) par cette opportunité, notamment pour [raison précise liée au poste ou à l’entreprise]. Je souhaitais savoir si vous pouviez m’indiquer les prochaines étapes du recrutement ou le calendrier envisagé.\n\nJe reste disponible pour un échange et pour transmettre tout complément utile à l’étude de mon dossier.\n\nJe vous remercie pour votre retour et vous adresse mes salutations distinguées.\n\n[Prénom NOM]\n[Téléphone]"
  },
  {
    "slug": "remerciement-apres-entretien",
    "category": "motivation",
    "title": "Remerciement après un entretien : modèle gratuit",
    "shortTitle": "Remerciement après un entretien",
    "description": "Remercier le recruteur et confirmer votre intérêt avec un message personnalisé après un entretien.",
    "intro": "Appuyez-vous sur un point réellement abordé pendant l’entretien. Ce message complète l’échange sans ajouter des compétences ou engagements inexacts.",
    "tag": "Emploi",
    "updatedAt": "14 octobre 2026",
    "checklist": [
      "Date et intitulé du poste",
      "Nom du destinataire",
      "Un point concret de l’entretien",
      "Coordonnées et éventuel complément demandé"
    ],
    "relatedGuide": "/blog/email-remerciement-entretien-guide",
    "relatedGuideLabel": "Lire le guide avant de personnaliser",
    "content": "[Votre prénom NOM]\n[Votre adresse]\n[Votre téléphone et votre e-mail]\n\n[Nom et adresse du destinataire]\n\n[Ville], le [date]\n\nObjet : Merci pour notre entretien — [intitulé du poste]\n\nMadame / Monsieur [nom],\n\nJe vous remercie pour le temps consacré à notre échange du [date] concernant le poste de [intitulé].\n\nLa discussion sur [mission ou projet abordé] m’a permis de mieux comprendre les attentes de votre équipe et a confirmé mon intérêt pour cette opportunité.\n\nMon expérience en [compétence pertinente] pourrait notamment contribuer à [besoin évoqué pendant l’entretien]. Comme convenu, je vous transmets [complément demandé, ou supprimer cette phrase].\n\nJe reste à votre disposition pour la suite du processus.\n\nBien cordialement,\n\n[Prénom NOM]\n[Téléphone]"
  }
];
