"use client";

import { Link } from "@/src/i18n/routing";
import { LinkType } from "@/utils/links";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import styled from "styled-components";

// Styled Components
const StyledLink = styled(Link)<{ $current: boolean }>`
    opacity: ${(props) => (props.$current ? 1 : 0.75)};
    transform: ${(props) => (props.$current ? "scale(1)" : "none")};
    &:hover {
        opacity: 1;
        transform: ${(props) => (props.$current ? "scale(1)" : "scale(1.05)")};
    }
`;

export default function SidebarLink({ props }: { props: LinkType }) {
    const t = useTranslations("sidebar");
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
    const current = pathname === props.path;

    return (
        <StyledLink
            className="relative overflow-hidden rounded-xl px-3 py-3 duration-200 ease-in"
            href={props.path}
            $current={current}
        >
            {current && (
                <div className="from-space-blue to-space-pink animate-fade-in absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-15% to-95%" />
            )}
            <div className="flex items-center gap-4">
                <Image
                    src={"/game/icon/sign/" + props.icon}
                    alt=""
                    width={24}
                    height={24}
                />
                <span className="text-s leading-none tracking-wide">
                    {t(props.tl ?? props.default)}
                </span>
            </div>
        </StyledLink>
    );
}
