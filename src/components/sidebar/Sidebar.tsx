// Next
import Image from "next/image";

// I18n
import { useTranslations } from "next-intl";

// Components
import LocaleSwitcher from "@/components/sidebar/LocaleSwitcher";
import SidebarLink from "@/components/sidebar/SidebarLinks";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar";
import BackgroundImage from "../image/BackgroundImage";

// Data and types
import { LinkType, sidebarLinks } from "@/utils/links";

// Static assets
import logo from "@/public/logo.svg";
import bottom from "@/public/sidebar/bgIconsBottom.svg";
import top from "@/public/sidebar/bgIconsTop.svg";
import flare from "@/public/sidebar/flare.svg";

export default function AppSidebar() {
    const t = useTranslations("sidebar");

    return (
        <Sidebar>
            <BackgroundImage
                src={top}
                alt="top"
                width={256}
                height={256}
                priority={true}
                className="top-0 left-0 h-48 w-full opacity-3"
            />
            <BackgroundImage
                src={flare}
                alt="flare"
                width={256}
                height={256}
                priority={true}
                className="h-full w-full"
            />
            <BackgroundImage
                src={bottom}
                alt="bottom"
                width={256}
                height={256}
                priority={true}
                className="bottom-0 left-0 h-48 w-full opacity-3"
            />
            <SidebarHeader>
                <Image
                    src={logo}
                    alt="Numby.moe"
                    priority={true}
                    className="w-64"
                />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebarLinks
                            .slice(0, 6)
                            .map((link: LinkType, index: number) => (
                                <SidebarLink props={link} key={index} />
                            ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>{t("database")}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebarLinks
                            .slice(6)
                            .map((link: LinkType, index: number) => (
                                <SidebarLink props={link} key={index} />
                            ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <LocaleSwitcher />
            </SidebarFooter>
        </Sidebar>
    );
}
