"use client";

import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export default function ElementSelector() {
    const [element, setElement] = useQueryState(
        "e",
        parseAsArrayOf(parseAsString)
            .withDefault([])
            .withOptions({ shallow: false, throttleMs: 2000 }),
    );

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <button
                    onClick={() =>
                        setElement((prev) =>
                            prev.includes("fire")
                                ? prev.filter((el) => el !== "fire")
                                : [...prev, "fire"],
                        )
                    }
                >
                    Fire
                </button>
                <button
                    onClick={() =>
                        setElement((prev) =>
                            prev.includes("ice")
                                ? prev.filter((el) => el !== "ice")
                                : [...prev, "ice"],
                        )
                    }
                >
                    Ice
                </button>
            </div>
            <pre>{JSON.stringify(element, null, 4)}</pre>
        </div>
    );
}
