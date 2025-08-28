import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  interval?: number; // optional auto-cycle interval in ms
  className?: string; // optional styling for the container
  imageClassName?: string; // optional styling for the image
}

export default function Carousel({
  images,
  interval = 4000,
  className = "",
  imageClassName = "",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length, interval]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setIsPaused(true);
  };

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className={`rounded-xl shadow-md max-h-[400px] w-auto object-contain transition-all duration-700 ${imageClassName}`}
      />

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
