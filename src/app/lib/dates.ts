export function toIsoDate(value: string): string {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    const months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    const match = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/);
    if (!match || !months.includes(match[2])) throw new Error(`Date invalide : ${value}`);
    return `${match[3]}-${String(months.indexOf(match[2]) + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}
