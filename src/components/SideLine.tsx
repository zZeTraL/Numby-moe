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
            <div className="flex justify-center bg-gradient-to-b from-space-blue from-15% to-space-pink w-[2px] h-full rounded-2xl relative">
                <span className="absolute bottom-20 rotate-90 bg-foreground px-2 whitespace-nowrap uppercase font-first text-xs tracking-[0.27em]">
                    {path}
                </span>
            </div>
        </div>
    );
}
