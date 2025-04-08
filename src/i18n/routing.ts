import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const availableLocales = ["en", "fr", "kr"] as const;

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: availableLocales,

    // Used when no locale matches
    defaultLocale: "en",

    // We can configure path n  ames for SEO purposes
    // pathnames: {}
});

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
