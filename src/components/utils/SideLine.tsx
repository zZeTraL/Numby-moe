"use client";

import { usePathname } from "@/src/i18n/routing";

export default function SideLine() {
    const pathname = usePathname();

    // Main page
    if (pathname === "/") return null;

    // Remove / and replace _ by space
    let path = pathname.slice(1).replace(/_/g, " ");

    // If we are in a character page /characters/[tag]
    if (pathname.includes("/characters/")) {
        path = path.split("/").pop() as string;
    }

    return (
        <div className="relative h-full md:px-2">
            <div className="from-space-blue to-space-pink relative flex h-full w-[2px] justify-center rounded-2xl bg-gradient-to-b from-15%">
                <span className="bg-foreground font-first absolute bottom-20 rotate-90 px-2 text-xs tracking-[0.27em] whitespace-nowrap uppercase">
                    {path}
                </span>
            </div>
        </div>
    );
}
