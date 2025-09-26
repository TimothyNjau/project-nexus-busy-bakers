import { useEffect, useState } from "react";
import ImageCarousel from "@/components/common/ImageCarousel";
import Image from "next/image";

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
      <main>
        <section className="container px-6 mx-auto">
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
