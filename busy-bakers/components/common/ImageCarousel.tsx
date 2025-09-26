import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
    images: { image: string; name: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    //Auto-rotate every 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length])
    return(
        <>
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl drop-shadow-lg">
            {
                images.map((img: { image: string; name: string }, index: number) => (
                    <div key={index} className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
                        <Image src={img.image} alt={img.name} layout="fill" objectFit="cover" priority={index === currentIndex}/>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4 text-lg font-semibold">
                            {img.name}
                        </div>
                    </div>
                ))
            }
            
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-white" : "bg-gray-400"}`}  />
                ))}
            </div>
        </div>
        </>
    )
}

export default ImageCarousel;