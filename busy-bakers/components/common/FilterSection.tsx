import { useState } from "react";
import Pill from "./Pill";

const filters = [
    "Classic",
    "Seasonal",
    "Celebration",
    "Exotic"
];


const FilterSection:React.FC = () => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const toggleFilter = (label: string) => {
        setActiveFilters((prev) => 
        prev.includes(label) ? prev.filter((f) => f !== label) : [...prev,label]
        );
    };

    return (
        <div className="w-full px-4 py-3 overflow-x-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
                {
                    filters.map((filter) => (
                        <Pill  key={filter} title={filter} isActive={activeFilters.includes(filter)} onPillClick={() => toggleFilter(filter)}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterSection;