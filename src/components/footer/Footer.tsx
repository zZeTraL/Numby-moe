// Next
import Image from "next/image";

// I18n
import { getTranslations } from "next-intl/server";

// Data and type
import { footerLinks, LinkType } from "@/utils/links";

// Components
import RichText from "@/components/RichText";
import FooterLink from "./FooterLink";

// Static assets
import footerLogo from "@/public/footer/footerLogo.png";

export default async function Footer() {
    const t = await getTranslations("footer");

    return (
        <footer className="flex flex-col gap-8">
            <RichText className="tracking-wide opacity-65">
                {(tags) => t.rich("not-affiliated", tags)}
            </RichText>
            <div className="flex gap-8">
                <div className="flex size-32 h-full items-end max-sm:hidden">
                    <Image src={footerLogo} alt="Logo" width={96} height={96} />
                </div>
                <div className="flex w-full flex-wrap items-end gap-12 opacity-65 max-md:gap-8 max-sm:gap-5">
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">
                            {t("discord")}
                        </h2>
                        <div className="flex items-center gap-2 leading-none">
                            {footerLinks
                                .slice(0, 1)
                                .map((link: LinkType, index: number) => {
                                    return (
                                        <FooterLink key={index} props={link} />
                                    );
                                })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">
                            {t("official_links")}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 leading-none">
                            {footerLinks
                                .slice(1, 4)
                                .map((link: LinkType, index: number) => {
                                    return (
                                        <FooterLink key={index} props={link} />
                                    );
                                })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 leading-none">
                        <h2 className="text-md leading-none tracking-wide">
                            {t("credits")}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 leading-none">
                            {footerLinks
                                .slice(4)
                                .map((link: LinkType, index: number) => {
                                    return (
                                        <FooterLink key={index} props={link} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
