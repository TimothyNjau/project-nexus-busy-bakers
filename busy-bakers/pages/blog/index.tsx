import BlogCard from "@/components/blog/BlogCard";

const blogPosts = [
  {
    title: "10 Tips for Perfect Cakes Every Time",
    description:
      "Master the basics of cake baking with these essential tips for consistent, delicious results.",
    image: "/assets/images/blog-cake-tips.jpg",
  },
  {
    title: "How to Use a Stand Mixer Like a Pro",
    description:
      "Unlock the full potential of your stand mixer for doughs, batters, and more.",
    image: "/assets/images/blog-stand-mixer.jpg",
  },
  {
    title: "Creative Cookie Decorating Ideas",
    description:
      "Step up your cookie game with these fun and easy decorating techniques.",
    image: "/assets/images/blog-cookie-decor.jpg",
  },
  {
    title: "The Science of Sourdough",
    description:
      "Discover the secrets behind sourdough bread and how to start your own starter.",
    image: "/assets/images/blog-sourdough.jpg",
  },
  {
    title: "Essential Baking Utensils for Beginners",
    description: "A guide to the must-have tools for every home baker.",
    image: "/assets/images/blog-utensils.jpg",
  },
  {
    title: "How to Make Flaky Pie Crusts",
    description:
      "Learn the tricks to achieving perfectly flaky and buttery pie crusts.",
    image: "/assets/images/blog-pie-crust.jpg",
  },
  {
    title: "Baking with Kids: Fun & Safe Recipes",
    description:
      "Get the whole family involved with these kid-friendly baking projects.",
    image: "/assets/images/blog-baking-kids.jpg",
  },
  {
    title: "Chocolate: From Bean to Bar",
    description:
      "Explore the journey of chocolate and how to use it in your baking.",
    image: "/assets/images/blog-chocolate.jpg",
  },
  {
    title: "Gluten-Free Baking Basics",
    description:
      "Tips and recipes for delicious gluten-free treats everyone will love.",
    image: "/assets/images/blog-glutenfree.jpg",
  },
  {
    title: "How to Store Baked Goods for Freshness",
    description:
      "Keep your cakes, cookies, and breads fresh with these storage hacks.",
    image: "/assets/images/blog-storage.jpg",
  },
  {
    title: "The Art of Layered Desserts",
    description:
      "Impress your guests with beautiful and tasty layered desserts.",
    image: "/assets/images/blog-layered.jpg",
  },
  {
    title: "Vegan Baking Substitutes",
    description:
      "How to swap out eggs, dairy, and more for plant-based baking.",
    image: "/assets/images/blog-vegan.jpg",
  },
  {
    title: "Quick Breads for Busy Days",
    description:
      "Whip up delicious quick breads in no time with these easy recipes.",
    image: "/assets/images/blog-quickbread.jpg",
  },
  {
    title: "Decorating Cakes with Fresh Flowers",
    description: "Add a natural touch to your cakes with safe, edible flowers.",
    image: "/assets/images/blog-flowers.jpg",
  },
  {
    title: "How to Temper Chocolate",
    description: "Get glossy, snappy chocolate for candies and decorations.",
    image: "/assets/images/blog-temper-chocolate.jpg",
  },
  {
    title: "The Best Muffin Recipes",
    description:
      "From blueberry to chocolate chip, try these crowd-pleasing muffins.",
    image: "/assets/images/blog-muffins.jpg",
  },
  {
    title: "Baking with Whole Grains",
    description:
      "Boost nutrition and flavor with whole grain flours in your baking.",
    image: "/assets/images/blog-wholegrain.jpg",
  },
  {
    title: "How to Make Meringue",
    description:
      "Achieve perfect peaks and glossy meringue for pies and cookies.",
    image: "/assets/images/blog-meringue.jpg",
  },
  {
    title: "No-Bake Desserts for Summer",
    description: "Stay cool with these easy, oven-free dessert ideas.",
    image: "/assets/images/blog-nobake.jpg",
  },
  {
    title: "Choosing the Right Baking Pan",
    description:
      "A guide to pan shapes, sizes, and materials for every recipe.",
    image: "/assets/images/blog-pans.jpg",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-amber-700">
        Baking Tips & Inspiration
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogPosts.map((post, idx) => (
          <BlogCard
            key={idx}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
