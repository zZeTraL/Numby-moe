"use client";

// NextIntl
import { useTranslations } from "next-intl";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";

// Filters options
const selectItems = [
    { value: "name", tl: "name" },
    { value: "element", tl: "element" },
    { value: "path", tl: "path" },
    { value: "rarity", tl: "rarity" },
];

export default function CharacterFilter() {
    const t = useTranslations("sorter");
    const [sort, setSort] = useQueryState("s", {
        shallow: false,
    });

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    <Select onValueChange={setSort}>
                        <SelectTrigger className="w-[192px]" size="md">
                            <SelectValue placeholder={t("title")} />
                        </SelectTrigger>
                        <SelectContent>
                            {selectItems.map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                    {t(item.tl) as string}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
