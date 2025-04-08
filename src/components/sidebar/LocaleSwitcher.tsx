"use client";

// Next
import Image from "next/image";
import {useParams} from "next/navigation";

// React
import {useState} from "react";

// Next-intl
import {useLocale} from "next-intl";

// Routing
import {routing, usePathname, useRouter} from "@/src/i18n/routing"

// Utils
import {displayLocaleLabel} from "@/src/utils/lang";

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
            { locale: nextLocale }
        );
    }

    return (
        <div className="flex items-center justify-center gap-2 relative">
            <Image
                className="cursor-pointer rounded-[50%] hover:scale-110 transition-transform"
                src={"/sidebar/flags/" + currentLocale + ".svg"}
                alt={currentLocale}
                width={32}
                height={32}
                onClick={() => setIsModalOpen(!isModalOpen)}
            />
            {
                isModalOpen && (
                    <div className="absolute w-full grid grid-cols-2 gap-2 bottom-10 bg-light-blue p-4 rounded-xl z-100">
                        {routing.locales
                            .filter((locale: string) => locale !== currentLocale)
                            .map((locale: string) => (
                            <div
                                 className="flex gap-1 items-center cursor-pointer"
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
                                <span className="text-xs max-w-16 truncate text-white hover:bg-gradient-to-r hover:from-space-blue hover:from-15% hover:to-space-pink hover:to-95% hover:text-transparent hover:bg-clip-text">{displayLocaleLabel(locale)}</span>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}