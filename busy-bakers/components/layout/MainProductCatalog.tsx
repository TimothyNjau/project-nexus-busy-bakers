import FilterSection from "../common/FilterSection";
import ProductCard from "../common/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { setProducts } from "@/store/productsSlice";
import { setSortBy, clearSort } from "@/store/sortSlice";

const MainProductCatalog: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const activeCategory = useSelector(
    (state: RootState) => state.filter.category
  );
  const sortBy = useSelector((state: RootState) => state.sort.sortBy);
  const sortLabel =
    sortBy === "price-asc"
      ? "Sort: Ascending"
      : sortBy === "price-desc"
      ? "Sort: Descending"
      : "Sort: Default";

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("/assets/data/products.json");
      const data = await res.json();
      const allProducts = [...data.cakes, ...data.cookies];
      dispatch(setProducts(allProducts));
    };
    loadProducts();
  }, [dispatch]);

  let filtered = products;
  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }
  if (sortBy === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <FilterSection />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8">
        <div className="flex justify-end mb-4 gap-2">
          <button
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded transition-colors"
            onClick={() => {
              if (sortBy === "price-asc") {
                dispatch(setSortBy("price-desc"));
              } else {
                dispatch(setSortBy("price-asc"));
              }
            }}
          >
            {sortLabel}
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded transition-colors border border-gray-400"
            onClick={() => dispatch(clearSort())}
            disabled={!sortBy}
          >
            Clear Sort
          </button>
        </div>
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-6">
          Our Delicious Treats
        </h1>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.length > 0 ? (
            filtered.map((product, index) => (
              <ProductCard key={index + product.name} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainProductCatalog;
