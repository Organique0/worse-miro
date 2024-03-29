"use client";
import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import {
    useEffect,
    useState,
    ChangeEvent,
} from "react";
import { Input } from "@/components/ui/input";


const SearchInput = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState("");
    const debouncedValue = useDebounceValue(searchValue, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue[0],
            },
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    }, [debouncedValue, router])



    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
                className="w-full max-w-[516px] pl-9"
                placeholder="Search boards"
                onChange={handleChange}
                value={searchValue}
            />
        </div>
    )
}

export default SearchInput