'use client';

import { useState } from 'react';

export default function MotivationForm() {
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [offre, setOffre] = useState('');
    const [cv, setCv] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [letter, setLetter] = useState('');
    const [copied, setCopied] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if (!prenom || !offre || !cv) {
            setError('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prenom, email, offre, cv, serviceType: 'motivation' }),
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
                        Votre lettre de motivation est prête !
                    </p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Votre lettre de motivation
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
                        placeholder="Ex : Marie"
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
                    L&apos;offre d&apos;emploi <span className="text-pro-600">*</span>
                </label>
                <p className="text-gray-400 text-xs mb-2">Copiez-collez le texte de l&apos;offre d&apos;emploi (intitulé du poste, missions, entreprise...)</p>
                <textarea
                    required
                    value={offre}
                    onChange={e => setOffre(e.target.value)}
                    placeholder="Copiez-collez l'offre d'emploi ici..."
                    rows={6}
                    className="textarea"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre parcours / CV <span className="text-pro-600">*</span>
                </label>
                <p className="text-gray-400 text-xs mb-2">Résumez votre expérience, vos compétences, vos formations. Plus c&apos;est précis, plus la lettre sera personnalisée.</p>
                <textarea
                    required
                    value={cv}
                    onChange={e => setCv(e.target.value)}
                    placeholder="Ex : J'ai 3 ans d'expérience en marketing digital, diplômée d'un Master Communication en 2022..."
                    rows={6}
                    className="textarea"
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
