export type Locale = "en" | "fr" | "kr";

const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    kr: "한국어",
};

export const getLocaleLabel = (locale: string | Locale): string =>
    LOCALE_LABELS[locale as Locale] || "Not supported";
