import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SortBy() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="element">Element</SelectItem>
                <SelectItem value="path">Path</SelectItem>
                <SelectItem value="rarity">Rarity</SelectItem>
            </SelectContent>
        </Select>
    );
}
