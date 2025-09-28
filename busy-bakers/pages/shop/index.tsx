import MainProductCatalog from "@/components/layout/MainProductCatalog";

const Shop: React.FC = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8">
      <section className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-700 mb-2">
          Shop With Us 🛒
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
          Discover our delicious range of cakes, cookies, and treats. Browse,
          filter, and shop your favorites—all freshly baked and delivered with
          love!
        </p>
      </section>
      <MainProductCatalog />
    </main>
  );
};

export default Shop;
