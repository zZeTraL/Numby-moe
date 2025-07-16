// NextIntl
import { getTranslations } from "next-intl/server";

// Components
import CharacterFilter from "@/components/character/CharacterFilter";
import ElementSelector from "@/components/character/ElementSelector";

// Metadata
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Numby.moe | Characters",
    description: "Your kind Numby asisstant for you.",
    alternates: {
        canonical: "https://numby.moe/characters",
    },
};

import { type SearchParams } from "nuqs/server";
import { searchParamsCache } from "./searchParams";
type CharactersPageProps = {
    searchParams: Promise<SearchParams>;
};

export default async function CharactersPage({
    searchParams,
}: CharactersPageProps) {
    const t = await getTranslations("characters");

    const { s: sort, e: element } = await searchParamsCache.parse(searchParams);
    console.log({
        s: sort,
        e: element,
    });

    return (
        <div className="flex w-full flex-col gap-8">
            <h1 className="text-4xl tracking-wide">{t("title")}</h1>
            <div>
                <CharacterFilter />
            </div>
            <div>
                <ElementSelector />
            </div>
            <pre>{sort}</pre>
            <pre className="flex flex-wrap gap-4">
                {element.map((el) => (
                    <span key={el}>{el}</span>
                ))}
            </pre>
        </div>
    );
}
