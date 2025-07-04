"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner from "/public/banner.jpeg";
import banner2 from "/public/banner2.png";
import banner3 from "/public/banner3.png";
import Image from "next/image";

const images = [banner, banner2, banner3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, intervalTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-lg">
      <div className="w-full h-full relative">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.05,
            }}
            transition={{ duration: 0.8 }}
            className={`absolute top-0 left-0 w-full h-full ${
              index === currentIndex ? "z-10" : "z-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:bg-black/80 z-20"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:bg-black/80 z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer border border-white ${
              index === currentIndex ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
