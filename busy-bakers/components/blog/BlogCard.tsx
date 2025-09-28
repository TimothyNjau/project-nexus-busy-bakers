import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-200 cursor-pointer flex flex-col">
    <div className="relative w-full h-40 sm:h-48">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h2 className="text-lg font-bold mb-2 text-amber-700">{title}</h2>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
    </div>
  </div>
);

export default BlogCard;
