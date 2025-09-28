import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const all = [...data.cakes, ...data.cookies];
        const found = all.find((p: Product) => p.id === Number(id));
        setProduct(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product)
    return <div className="text-center py-10">Product not found.</div>;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10 flex flex-col items-center">
      <div className="w-full h-64 relative mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-amber-700">
        {product.name}
      </h1>
      <div className="text-gray-600 text-center mb-4">
        Category: {product.category}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-4">
        Ksh {product.price}
      </div>
      <p className="text-gray-700 text-center mb-6">{product.description}</p>
      <button
        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded transition-colors"
        onClick={() => product && dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
