/**
 * Type pour les codes de langue supportés
 */
export type Locale = "en" | "fr" | "kr";

/**
 * Mapping des labels de langue par code de langue
 */
const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    kr: "한국어",
};

/**
 * Affiche le label d'une langue à partir de son code
 * @param locale - Le code de la langue
 * @returns Le label de la langue ou le code si non supporté
 */
export const displayLocaleLabel = (locale: string): string => {
    return LOCALE_LABELS[locale as Locale] || locale;
};
