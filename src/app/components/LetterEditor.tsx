"use client";

import { useState } from "react";

export default function LetterEditor({ initialContent, title }: { initialContent: string; title: string }) {
    const [content, setContent] = useState(initialContent);
    const [copied, setCopied] = useState(false);

    async function copyLetter() {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    }

    function downloadLetter() {
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "")}.txt`;
        link.click();
        URL.revokeObjectURL(url);
    }

    function printLetter() {
        const popup = window.open("", "_blank", "noopener,noreferrer");
        if (!popup) return;
        popup.document.write(`<!doctype html><html lang="fr"><head><title>${title}</title><style>body{font:16px/1.65 Georgia,serif;max-width:760px;margin:48px auto;padding:0 32px;white-space:pre-wrap;color:#172033}</style></head><body></body></html>`);
        popup.document.body.textContent = content;
        popup.document.close();
        popup.focus();
        popup.print();
    }

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="flex flex-col gap-2 border-b border-gray-100 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="font-heading font-bold text-gray-900">Personnalisez votre lettre</h2>
                    <p className="text-xs text-gray-500">Cliquez dans le texte et remplacez tous les passages entre crochets.</p>
                </div>
                <button type="button" onClick={() => setContent(initialContent)} className="text-left text-xs font-semibold text-pro-700 hover:text-pro-900">Réinitialiser</button>
            </div>
            <textarea
                aria-label="Texte de la lettre à personnaliser"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                spellCheck
                className="min-h-[680px] w-full resize-y px-5 py-6 font-mono text-sm leading-7 text-gray-700 outline-none focus:ring-2 focus:ring-inset focus:ring-pro-300 sm:px-8"
            />
            <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:flex-row">
                <button type="button" onClick={copyLetter} className="btn-primary text-sm">{copied ? "✓ Lettre copiée" : "Copier la lettre"}</button>
                <button type="button" onClick={downloadLetter} className="btn-secondary text-sm">Télécharger en texte</button>
                <button type="button" onClick={printLetter} className="btn-secondary text-sm">Imprimer / enregistrer en PDF</button>
            </div>
        </div>
    );
}
