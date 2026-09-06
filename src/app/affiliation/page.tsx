import type { Metadata } from "next";
import AffiliationAmazonPage from "../affiliation-amazon/page";

export const metadata: Metadata = {
    title: "Affiliation et partenaires",
    description: "Informations sur les liens affiliés et le financement des modèles gratuits de Lettre Pro.",
    alternates: { canonical: "/affiliation-amazon" },
    robots: { index: false, follow: true },
};

export default AffiliationAmazonPage;
