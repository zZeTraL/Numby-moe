// Next
import Image from "next/image";
import Link from "next/link";

// Types
import { LinkType } from "@/utils/links";

// Static assets
import discord from "@/public/footer/discord.svg";
import github from "@/public/footer/github.svg";
import reddit from "@/public/footer/reddit.svg";
import twitter from "@/public/footer/twitter.svg";

const iconMap = {
    "discord.svg": discord,
    "twitter.svg": twitter,
    "reddit.svg": reddit,
    "github.svg": github,
} as const;

interface Props {
    props: LinkType;
}

export default function FooterLink({ props }: Props) {
    const iconSrc = iconMap[props.icon as keyof typeof iconMap] || props.icon;

    return (
        <div className="flex items-center gap-2">
            <div className="flex size-5 justify-center md:size-8">
                <Image
                    src={iconSrc}
                    alt={props.default}
                    width={24}
                    height={24}
                    color="white"
                />
            </div>
            <Link
                href={props.path}
                target="_blank"
                className="text-xs md:text-sm"
            >
                {props.default}
            </Link>
        </div>
    );
}
