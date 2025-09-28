import { useEffect, useState } from "react";
import ImageCarousel from "@/components/common/ImageCarousel";
import MainProductCatalog from "@/components/layout/MainProductCatalog";

const Home: React.FC = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      const res = await fetch("/assets/data/products.json");
      const data = await res.json();
      setCakes(data.cakes.slice(0, 5));
    };
    fetchCakes();
  }, []);

  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-8">
        <section className="image-carousel w-full mb-6">
          {cakes.length > 0 ? (
            <ImageCarousel images={cakes} />
          ) : (
            <p className="text-center">Loading cakes...</p>
          )}
        </section>
        <section className="main-product-catalog w-full">
          <MainProductCatalog />
        </section>
      </main>
    </>
  );
};

export default Home;
