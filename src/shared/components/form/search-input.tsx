import SearchIcon from "@/assets/icons/search";

export default function SearchInput({ onChange }: { onChange: (value: string) => void }) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const timeout = setTimeout(() => {
            onChange(e.target.value);
        }, 1000);

        return () => clearTimeout(timeout);
    }

    return <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2 max-w-[400px] w-full">
        <SearchIcon />
        <input type="text" placeholder="Search document..." className="outline-none" onChange={handleChange} />
    </div>;
}