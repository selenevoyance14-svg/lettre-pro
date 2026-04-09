'use client';

import { useState } from 'react';

const TYPES_LETTRES = [
    { value: 'resiliation', label: '📱 Résiliation d\'abonnement' },
    { value: 'reclamation', label: '📦 Réclamation (produit, service)' },
    { value: 'litige-assurance', label: '🏥 Litige avec une assurance' },
    { value: 'mise-en-demeure', label: '⚖️ Mise en demeure' },
    { value: 'contestation-pv', label: '🚗 Contestation de PV / amende' },
    { value: 'litige-banque', label: '🏦 Litige avec une banque' },
    { value: 'reclamation-proprietaire', label: '🏠 Réclamation au propriétaire' },
    { value: 'autre', label: '✉️ Autre lettre officielle' },
];

export default function OfficielleForm() {
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [type, setType] = useState('');
    const [destinataire, setDestinataire] = useState('');
    const [situation, setSituation] = useState('');
    const [demande, setDemande] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [letter, setLetter] = useState('');
    const [copied, setCopied] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if (!prenom || !type || !destinataire || !situation) {
            setError('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prenom, email, type, destinataire, situation, demande, serviceType: 'officielle' }),
            });
            const data = await res.json();
            if (data.letter) {
                setLetter(data.letter);
            } else {
                setError('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch {
            setError('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    }

    function handleCopy() {
        navigator.clipboard.writeText(letter);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    if (letter) {
        return (
            <div className="space-y-6">
                <div className="bg-accent-500/10 border border-accent-500/20 rounded-xl px-4 py-3 flex items-center gap-2">
                    <span className="text-accent-600 text-lg">✅</span>
                    <p className="text-accent-700 text-sm font-medium">
                        Votre lettre officielle est prête !
                    </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Votre lettre officielle
                        </p>
                        <button
                            onClick={handleCopy}
                            className="text-xs font-medium text-pro-600 hover:text-pro-700 transition flex items-center gap-1"
                        >
                            {copied ? '✅ Copié !' : '📋 Copier'}
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                            {letter}
                        </div>
                    </div>
                </div>

                <div className="bg-pro-50 border border-pro-100 rounded-xl px-4 py-3">
                    <p className="text-pro-700 text-xs leading-relaxed">
                        💡 <strong>Conseil :</strong> Pour les litiges importants, envoyez votre lettre en recommandé avec accusé de réception.
                    </p>
                </div>

                <div className="flex items-center gap-4 justify-center text-xs text-gray-400">
                    <span>100% gratuit</span>
                    <span>Copiez et personnalisez</span>
                </div>

                <button
                    onClick={() => { setLetter(''); setCopied(false); }}
                    className="text-sm text-gray-400 hover:text-gray-600 transition w-full text-center"
                >
                    ← Générer une nouvelle lettre
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Votre prénom <span className="text-pro-600">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        value={prenom}
                        onChange={e => setPrenom(e.target.value)}
                        placeholder="Ex : Jean"
                        className="input"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Votre email <span className="text-gray-400 font-normal">(optionnel)</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="votre@email.fr"
                        className="input"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type de lettre <span className="text-pro-600">*</span>
                </label>
                <select
                    required
                    value={type}
                    onChange={e => setType(e.target.value)}
                    className="input"
                >
                    <option value="">Sélectionnez le type de lettre...</option>
                    {TYPES_LETTRES.map(t => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destinataire <span className="text-pro-600">*</span>
                </label>
                <input
                    type="text"
                    required
                    value={destinataire}
                    onChange={e => setDestinataire(e.target.value)}
                    placeholder="Ex : Service client Orange, Macif, Agence immobilière..."
                    className="input"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Décrivez votre situation <span className="text-pro-600">*</span>
                </label>
                <p className="text-gray-400 text-xs mb-2">Que s&apos;est-il passé ? Quand ? Quels problèmes avez-vous rencontrés ?</p>
                <textarea
                    required
                    value={situation}
                    onChange={e => setSituation(e.target.value)}
                    placeholder="Ex : J'ai souscrit un abonnement en novembre 2024, j'ai demandé la résiliation en janvier mais je suis toujours prélevé..."
                    rows={5}
                    className="textarea"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ce que vous demandez <span className="text-gray-400 font-normal">(optionnel)</span>
                </label>
                <input
                    type="text"
                    value={demande}
                    onChange={e => setDemande(e.target.value)}
                    placeholder="Ex : Remboursement de 3 mois, arrêt des prélèvements, réparation..."
                    className="input"
                />
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? '⏳ Génération en cours...' : '✨ Générer ma lettre gratuitement'}
            </button>

            <p className="text-gray-400 text-xs text-center">
                100% gratuit · Sans inscription · Lettre complète en quelques secondes
            </p>
        </form>
    );
}
