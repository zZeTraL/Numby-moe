export type LinkType = {
    tl?: string;
    path: string;
    icon: string;
    default: string;
};

export const sidebarLinks: LinkType[] = [
    {
        tl: "home",
        path: "/",
        icon: "QuestMainIcon.png",
        default: "home",
    },
    {
        tl: "characters",
        path: "/characters",
        icon: "AvatarIcon.png",
        default: "characters",
    },
    {
        tl: "warp_counter",
        path: "/warp_counter",
        icon: "DrawcardIcon.png",
        default: "warp_counter",
    },
    {
        tl: "calculator",
        path: "/calculator",
        icon: "Maze03Icon.png",
        default: "warp_counter",
    },
    {
        tl: "timeline",
        path: "/timeline",
        icon: "ActivityIcon.png",
        default: "timeline",
    },
    {
        tl: "settings",
        path: "/settings",
        icon: "SettingsIcon.png",
        default: "settings",
    },
    {
        tl: "items",
        path: "/items",
        icon: "InventoryFosterIcon.png",
        default: "items",
    },
    {
        tl: "artifacts",
        path: "/artifacts",
        icon: "NovicePrestigeIcon.png",
        default: "artifacts",
    },
    {
        tl: "light_cones",
        path: "/light_cones",
        icon: "MazeSkillIcon.png",
        default: "light cones",
    },
    {
        tl: "success",
        path: "/success",
        icon: "AchievementIcon.png",
        default: "success",
    },
] as const;

export const footerLinks: LinkType[] = [
    {
        path: "https://discord.gg/",
        icon: "discord.svg",
        default: "Discord",
    },
    {
        path: "https://discord.gg/honkaistarrail",
        icon: "discord.svg",
        default: "Discord",
    },
    {
        path: "https://twitter.com/honkaistarrail",
        icon: "twitter.svg",
        default: "Twitter",
    },
    {
        path: "https://www.reddit.com/r/HonkaiStarRail",
        icon: "reddit.svg",
        default: "Reddit",
    },
    {
        path: "https://github.com/Mar-7th/StarRailRes",
        icon: "github.svg",
        default: "StarRailRes",
    },
    {
        path: "https://github.com/MetaCubeX/mihomo",
        icon: "github.svg",
        default: "Mihomo",
    },
] as const;
