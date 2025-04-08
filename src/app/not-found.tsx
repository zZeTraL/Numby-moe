import { redirect } from "@/src/i18n/routing";
import { notFound } from "next/navigation";

export default function NotFound() {
    // send 404 to the root page
    redirect({ href: "/", locale: "en" });
    return notFound();
}
