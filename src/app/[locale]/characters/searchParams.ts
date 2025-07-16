import {
    createSearchParamsCache,
    parseAsArrayOf,
    parseAsString,
} from "nuqs/server";

export const searchParamsCache = createSearchParamsCache({
    s: parseAsString.withDefault(""),
    e: parseAsArrayOf(parseAsString).withDefault([]),
});
