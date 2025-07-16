"use client";

// Next
import Image from "next/image";
import { useParams } from "next/navigation";

// React
import { useState } from "react";

// Next-intl
import { useLocale } from "next-intl";

// Routing
import { routing, usePathname, useRouter } from "@/src/i18n/routing";

// Utils
import { getLocaleLabel } from "@/src/utils/lang";

export default function LocaleSwitcher() {
    const currentLocale = useLocale();

    const router = useRouter();

    const pathname = usePathname();
    const params = useParams();

    // State to open/close the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function onSelectChange(nextLocale: string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: nextLocale },
        );
    }

    return (
        <div className="relative flex items-center justify-center gap-2">
            <Image
                className="cursor-pointer rounded-[50%] transition-transform hover:scale-110"
                src={"/sidebar/flags/" + currentLocale + ".svg"}
                alt={currentLocale}
                width={32}
                height={32}
                onClick={() => setIsModalOpen(!isModalOpen)}
            />
            {isModalOpen && (
                <div className="bg-light-blue absolute bottom-10 z-100 grid w-full grid-cols-2 gap-2 rounded-xl p-4">
                    {routing.locales
                        .filter((locale: string) => locale !== currentLocale)
                        .map((locale: string) => (
                            <div
                                className="flex cursor-pointer items-center gap-1"
                                key={locale}
                                onClick={() => onSelectChange(locale)}
                            >
                                <Image
                                    className="rounded-[50%]"
                                    src={"/sidebar/flags/" + locale + ".svg"}
                                    alt={locale}
                                    width={32}
                                    height={32}
                                />
                                <span className="hover:from-space-blue hover:to-space-pink max-w-16 truncate text-xs text-white hover:bg-gradient-to-r hover:from-15% hover:to-95% hover:bg-clip-text hover:text-transparent">
                                    {getLocaleLabel(locale)}
                                </span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
