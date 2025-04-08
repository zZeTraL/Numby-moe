// Next
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
}

export default function BackgroundImage({
    src,
    alt,
    width,
    height,
    priority,
    className,
}: Props) {
    return (
        <div
            className={`pointer-events-none absolute bg-center bg-no-repeat ${className ?? ""}`}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className="w-full"
            />
        </div>
    );
}
