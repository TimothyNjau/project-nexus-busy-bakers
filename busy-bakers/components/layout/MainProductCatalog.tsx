import FilterSection from "../common/FilterSection";
import { ProductProps } from "@/interfaces";
import ProductCard from "../common/ProductCard";
import { useEffect, useState } from "react";

const MainProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("/assets/data/products.json");
      const data = await res.json();
      const allProducts = [...data.cakes, ...data.cookies];
      setProducts(allProducts);
    };
    loadProducts();
  }, []);

  return (
    <>
      <FilterSection />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8">
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-6">
          Our Delicious Treats
        </h1>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product, index) => (
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
