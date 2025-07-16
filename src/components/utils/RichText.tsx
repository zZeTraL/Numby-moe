import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

type Tag = "b" | "i" | "br" | "important" | "sr" | "ssr";

type Props = {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
};

export default function RichText({ children, className }: Props) {
    return (
        <p
            className={cn(
                "max-md:text-sm md:text-justify text-xs break-words",
                className
            )}
        >
            {children({
                b: (chunks: ReactNode) => (
                    <b className="font-semibold">{chunks}</b>
                ),
                i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
                important: (chunks: ReactNode) => (
                    <span className="text-important">{chunks}</span>
                ),
                sr: (chunks: ReactNode) => (
                    <span className="text-important">{chunks}</span>
                ),
                ssr: (chunks: ReactNode) => (
                    <span className="text-ssr">{chunks}</span>
                ),
                br: () => <br />,
            })}
        </p>
    );
}
