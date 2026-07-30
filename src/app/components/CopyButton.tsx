"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    }

    return (
        <button type="button" onClick={copy} className="btn-primary text-sm py-2 px-4">
            {copied ? "✓ Modèle copié" : "Copier le modèle"}
        </button>
    );
}
