export const MERCI_FACTEUR_HOME = "https://www.merci-facteur.com#p_ref=175";
export const MERCI_FACTEUR_RECOMMANDE =
    "https://www.merci-facteur.com/lettres/lrar/lettre-recommandee.php#p_ref=175";

export default function MerciFacteurCta({ compact = false }: { compact?: boolean }) {
    return (
        <aside className={`lp-post-cta ${compact ? "lp-post-cta-compact" : ""}`} aria-label="Service partenaire d’envoi de courrier">
            <div className="lp-post-icon" aria-hidden="true">✉</div>
            <div className="lp-post-copy">
                <span>Service partenaire · Merci Facteur</span>
                <h2>Votre lettre est prête&nbsp;? Envoyez-la en ligne.</h2>
                <p>
                    Déposez votre courrier sur Merci Facteur&nbsp;: impression, mise sous pli,
                    affranchissement et envoi en recommandé avec suivi sont réalisés pour vous.
                </p>
            </div>
            <div className="lp-post-actions">
                <a href={MERCI_FACTEUR_RECOMMANDE} target="_blank" rel="sponsored noopener noreferrer">
                    Envoyer en recommandé →
                </a>
                <small>Lien affilié · service payant · tarif affiché chez Merci Facteur</small>
            </div>
        </aside>
    );
}
