"use client";

import { useState } from "react";
import { MERCI_FACTEUR_RECOMMANDE } from "./MerciFacteurCta";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <button type="button" onClick={copy} className="btn-primary text-sm py-2 px-4">
                {copied ? "✓ Modèle copié" : "Copier le modèle"}
            </button>
            <a
                href={MERCI_FACTEUR_RECOMMANDE}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-pro-200 bg-white px-4 py-2 text-sm font-semibold text-pro-700 transition hover:border-pro-400 hover:bg-pro-50"
            >
                Envoyer en ligne ↗
            </a>
        </div>
    );
}
