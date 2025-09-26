import { useEffect, useState } from "react";
import ImageCarousel from "@/components/common/ImageCarousel";
import Image from "next/image";

const Home: React.FC = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchCakes = async () => {
      const res = await fetch("/assets/data/products.json");
      const data = await res.json();
      setCakes(data.cakes.slice(2, 8));
    };
    fetchCakes();
  }, []);

  return (
    <>
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Busy Bakers</h1>
          {
          cakes.length > 0 ? (
            <ImageCarousel images={cakes} />
          ) : (
            <p className="text-center">Loading cakes...</p>
          )
          }
        </section>
  
      </main>
    </>
  );
};

export default Home;
