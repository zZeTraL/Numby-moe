// React and Next.js
import { notFound } from "next/navigation";
import React from "react";

// I18n
import { routing } from "@/src/i18n/routing";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";

// CSS
import "@/app/[locale]/globals.css";

// Components
import AppBreadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/footer/Footer";
import AppSidebar from "@/components/sidebar/Sidebar";
import SideLine from "@/components/SideLine";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Metadata
export const metadata = {
    title: "Numby.moe",
    description: "Your kind Numby asisstant for you.",
};

// Static assets
import BackgroundImage from "@/components/image/BackgroundImage";
import DecoTrainImage from "@/public/DecoTrainBig.svg";

const MainContent = ({ children }: { children: React.ReactNode }) => (
    <div className="flex min-h-screen w-screen overflow-hidden">
        <main className="bg-foreground relative z-10 m-4 flex w-full flex-col gap-4 rounded-xl p-4">
            <BackgroundImage
                src={DecoTrainImage}
                alt="DecoTrain"
                priority={true}
                className="absolute -right-10 -bottom-10 -z-10 h-auto opacity-80"
            />
            <div className="flex items-center gap-4">
                <SidebarTrigger />
                <Separator orientation="vertical" />
                <AppBreadcrumb />
            </div>
            <div className="flex grow-1 gap-4">
                <SideLine />
                {children}
            </div>
            <Footer />
        </main>
    </div>
);

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale as Locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider>
                    <SidebarProvider>
                        <AppSidebar />
                        <MainContent>{children}</MainContent>
                    </SidebarProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
