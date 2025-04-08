"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// i18n
import { usePathname } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Fragment } from "react";

export default function AppBreadcrumb() {
    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();

    const formattedPathname = pathname.split("/").filter(Boolean);
    const isCharacterPath = formattedPathname.includes("characters");

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${locale}`}>
                        Numby.moe
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {pathname === "/" ? (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{t("sidebar.home")}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                ) : (
                    formattedPathname.map((path, index) => {
                        return (
                            <Fragment key={index}>
                                <BreadcrumbSeparator />
                                {formattedPathname.length - 1 === index ? (
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            {isCharacterPath
                                                ? path.charAt(0).toUpperCase() +
                                                  path.slice(1)
                                                : t(`sidebar.${path}`)}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                ) : (
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href={`/${locale}/${path}`}
                                        >
                                            {t(`sidebar.${path}`)}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                )}
                            </Fragment>
                        );
                    })
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
