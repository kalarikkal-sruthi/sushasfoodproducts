"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Essential",
    description: "Pure. Wholesome. Essential",
    cta: "SHOP OILS",
    link: "/products?collection=essential",
    image: "/assets/11.png",
  },
  {
    id: 2,
    title: "Rasoi Manthra",
    description: "Farm Fresh Masalas & Powders",
    cta: "SHOP NOW",
    link: "/products?brand=rasoi-manthra",
    image: "/assets/22.png",
  },
  {
    id: 3,
    title: "Savero",
    description: "Authentic & Flavorful, Made with Love",
    cta: "SHOP FLAVORS",
    link: "/products?brand=savero",
    image: "/assets/33.png",
  },
  {
    id: 4,
    title: "Inder Spices",
    description: "Pure Flavor, Uncompromised Quality",
    cta: "SHOP SPICES",
    link: "/products?brand=inder-spices",
    image: "/assets/44.png",
  },
  {
    id: 5,
    title: "Nyraa",
    description: "Stronger, Shiner, Healthier",
    cta: "SHOP OIL",
    link: "/products?brand=nyraa",
    image: "/assets/66.png",
  },
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const nextSlide = useCallback((): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback((): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number): void => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section 
      aria-label="Product showcase carousel" 
      className="relative w-full overflow-hidden"
      role="region"
    >
      {/* SEO-friendly semantic heading structure */}
      <div className="sr-only">
        <h1>Sushas Food Products - Premium Quality Food Products</h1>
        <p>Discover our range of essential oils, fresh masalas, authentic spices, and health products</p>
      </div>

      {/* Full Width Banner Container */}
      <div className="relative w-full h-[230px] md:h-[700px] lg:h-[700px] xl:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="tabpanel"
            aria-hidden={index !== currentSlide}
            aria-labelledby={`slide-${slide.id}`}
            id={`slide-panel-${slide.id}`}
            className={`absolute inset-0 w-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-0"
                : "opacity-0 pointer-events-none z-[-1]"
            }`}
          >
            {/* SEO-optimized Image with proper alt text */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`${slide.title} - ${slide.description}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>

            {/* Dark overlay for better text visibility */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" 
              aria-hidden="true"
            />
            
            {/* Content overlay - positioned above image */}
            <div className="absolute inset-0 flex items-end pb-8 md:pb-12 lg:pb-16 justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto md:ml-20 mb-0 md:mb-12 lg:mb-16">
                  <h2 className="font-playfair font-medium mb-1 md:mb-6 text-2xl md:text-4xl lg:text-5xl xl:text-[60px] text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="font-figtree tracking-widest text-base md:text-lg lg:text-xl text-white/90 mb-1 md:mb-6 max-w-2xl">
                    {slide.description}
                  </p>
                  <Link 
                    href={slide.link} 
                    className="inline-flex items-center"
                    aria-label={`Shop ${slide.title} products`}
                  >
                    <button 
                      className="group inline-flex items-center justify-center gap-3 px-3 py-1 md:px-6 md:py-3 bg-[#5db046] hover:bg-white text-white hover:text-black font-semibold border-1 border-[#5db046] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-label={`Navigate to ${slide.cta}`}
                    >
                      <span className="text-[12px] md:text-[14px] tracking-wide font-montserrat">
                        {slide.cta}
                      </span>
                      <svg
                        className="h-3 w-3 md:h-5 md:w-5 transition-all duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
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

      {/* Navigation buttons with proper ARIA labels */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-3 rounded-full shadow-xl transition-all z-10 hidden sm:block focus:outline-none focus:ring-2 focus:ring-[#5db046] focus:ring-offset-2"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-3 w-3 md:h-6 md:w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 md:p-3 rounded-full shadow-xl transition-all z-10 hidden sm:block focus:outline-none focus:ring-2 focus:ring-[#5db046] focus:ring-offset-2"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-3 w-3 md:h-6 md:w-6 text-gray-800" />
      </button>

      {/* Slide Indicators with ARIA roles */}
      <div 
        role="tablist" 
        aria-label="Slide indicators"
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            id={`slide-${slide.id}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-controls={`slide-panel-${slide.id}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentSlide
                ? "w-6 md:w-8 bg-white"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div 
        className="absolute top-4 md:top-6 right-4 md:right-6 bg-[#5db046] text-white px-2 md:px-2 py-1 rounded-full text-[10px] font-medium z-10"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="sr-only">Currently viewing slide</span>
        {currentSlide + 1} / {slides.length}
        <span className="sr-only">: {currentSlideData.title} - {currentSlideData.description}</span>
      </div>
    </section>
  );
};

export default HeroBanner;