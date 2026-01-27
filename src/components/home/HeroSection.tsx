"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Essential ",
    description: "Discover premium quality products for your daily needs",
    cta: "Shop Now",
    link: "/products?collection=essential",
    image: "/assets/3.png",
  },
  {
    id: 2,
    title: "Rasoi Manthra",
    description: "Authentic spices for your kitchen magic",
    cta: "Explore Range",
    link: "/products?brand=rasoi-manthra",
    image: "/assets/b2.png",
  },
  {
    id: 3,
    title: "Savero",
    description: "Fresh ingredients for healthy living",
    cta: "Discover",
    link: "/products?brand=savero",
    image: "/assets/b1.png",
  },
  {
    id: 4,
    title: "Inder Spices",
    description: "Traditional flavors for modern kitchens",
    cta: "Shop Now",
    link: "/products?brand=inder-spices",
  image: "/assets/b1.png",
  },
  {
    id: 5,
    title: "Nyraa",
    description: "Premium quality for discerning tastes",
    cta: "Explore",
    link: "/products?brand=nyraa",
    image: "/assets/b1.png",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full Width Banner Container - Fixed height */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Image container with proper object-fit */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Dark overlay for better text visibility */}
         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
            {/* Content overlay - positioned above image */}
            <div className="absolute inset-0 flex items-end pb-8 md:pb-12 lg:pb-16 justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto md:ml-20 mb-8 md:mb-12 lg:mb-16">
                  <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-[80px] text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <Link href={slide.link} className="inline-flex items-center">
                    <button className="group inline-flex items-center justify-center gap-3 px-3 py-1 md:px-6 md:py-3 bg-[#214687] hover:bg-white text-white hover:text-black font-semibold border-1 border-[#214687] transition-all duration-300">
                      <span className="text-[12px] md:text-[14px] tracking-wide font-montserrat">
                       Learn More
                      </span>
                      <svg
                        className="h-3 w-3 md:h-5 md:w-5 transition-all duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-3 rounded-full shadow-xl transition-all z-10 hidden sm:block "
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-3 w-3 md:h-6 md:w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-3 rounded-full shadow-xl transition-all z-10 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-3 w-3 md:h-6 md:w-6 text-gray-800" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-6 md:w-8 bg-white"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Slide counter */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-[#214687] text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroBanner;