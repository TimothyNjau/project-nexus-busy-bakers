import FilterSection from "../common/FilterSection";
import { ProductCardProps } from "@/interfaces";
import ProductCard from "../common/ProductCard";
import { useEffect, useState } from "react";

const MainProductCatalog:React.FC = () => {
    const [products, setProducts] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("/assets/data/products.json");
            const data = await res.json();
            const allProducts = [...data.cakes, ...data.cookies]
            setProducts(allProducts);
        };
        loadProducts();
    }, []);
    
    return (
        <>
            <FilterSection />
            <div className=" container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Our Delicious Treats</h1>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        products.length > 0 ? (
                                products.map((product, index) => (
                                    <ProductCard key={index + product.name} product={product as any} />
                                ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-full">
                                Loading products...
                            </p>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MainProductCatalog;