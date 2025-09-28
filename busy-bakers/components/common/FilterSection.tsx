import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setCategory } from "@/store/filterSlice";
import Pill from "./Pill";

const filters = ["Classic", "Seasonal", "Celebration", "Exotic"];

const FilterSection: React.FC = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.filter.category
  );

  return (
    <div className="w-full px-4 py-3 overflow-x-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        {filters.map((filter) => (
          <Pill
            key={filter}
            title={filter}
            isActive={activeCategory === filter}
            onPillClick={() =>
              dispatch(setCategory(activeCategory === filter ? null : filter))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
