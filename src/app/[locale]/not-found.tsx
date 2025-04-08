// import {redirect} from "@/i18n/routing"
// import {getLocale} from "next-intl/server";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-white">404 - Page Not Found</h1>
        </div>
    )
}

// export default async function NotFound() {
//     const currentLocale = await getLocale();
//     redirect({href: "/", locale: currentLocale});
// }