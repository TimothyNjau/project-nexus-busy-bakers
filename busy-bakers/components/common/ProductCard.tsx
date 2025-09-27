import { ProductCardProps} from "@/interfaces";
import Image from "next/image";
import { $PRIMARYCOLOR, $SECONDARYCOLOR, $TERTIARYCOLOR } from "@/styles/color";




const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={`bg-[${$TERTIARYCOLOR}] rounded-2xl overflow-hidden border border-[#f0eaff] 
                 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,201,16,0.4)] 
                 hover:-translate-y-1`}>
            <div className="relative w-full h-56">
                <Image src={product.imageURL} alt={product.name} layout="fill" objectFit="cover" className="transition-transform duration-500 hover:scale-105"/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-[#272726] truncate">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                    {product.category}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#272726]">
                        Ksh {product.price}
                    </span>
                    <button className={`bg-[${$PRIMARYCOLOR}] text-[${$SECONDARYCOLOR}] text-sm font-semibold px-4 py-1.5 rounded-lg shadow-md hover:shadow-lg hover:bg-[#ffd84d] transition duration-300`}>
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;