'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Essential",
    description: "Discover the latest trends in fashion with our exclusive summer collection",
    mainImage: "/assets/1.png", // Main image on the right
    bottomImage: "/assets/1c.png", // Image under content
    cta: "Shop Now",
    link: "/products?collection=summer",
    bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    title: "Rasoi Manthra",
    description: "Limited time offer on selected items. Don't miss out!",
     mainImage: "/assets/1.png", // Main image on the right
    bottomImage: "/assets/1c.png", // Image under content
    cta: "View Deals",
    link: "/products?discount=true",
    bgColor: "bg-gradient-to-r from-rose-50 to-pink-50",
  },
  {
    id: 3,
    title: "Savero",
    description: "Fresh styles added daily. Be the first to shop our new collection",
    mainImage: "/assets/1.png", // Main image on the right
    bottomImage: "/assets/1c.png", // Image under content
    cta: "Explore",
    link: "/products?new=true",
    bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
  },
  {
    id: 4,
    title: "  Inder Spices",
    description: "Fresh styles added daily. Be the first to shop our new collection",
    mainImage: "/assets/1.png", // Main image on the right
    bottomImage: "/assets/1c.png", // Image under content
    cta: "Explore",
    link: "/products?new=true",
    bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
  },
  {
    id: 5,
    title: "Nyraa",
    description: "Fresh styles added daily. Be the first to shop our new collection",
    mainImage: "/assets/1.png", // Main image on the right
    bottomImage: "/assets/1c.png", // Image under content
    cta: "Explore",
    link: "/products?new=true",
    bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
  },

];

const HeroSection = () => {
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
    <section className="relative overflow-hidden">
      <div className="relative min-h-[650px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className={`absolute inset-0 ${slide.bgColor}`} />
            
            <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center">
              {/* Left Content Section */}
              <div className="lg:w-1/2 pt-12 lg:pt-0 z-50">
                <div className="max-w-2xl z-10">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center px-6 py-2 bg-[#082047] text-white font-semibold  hover:bg-primary-dark transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
                
                {/* Bottom Image - Under Content (Visible on mobile, hidden on desktop) */}
                <div className="mt-8 lg:hidden">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={slide.bottomImage}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                       sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
                <div className="relative h-80 lg:h-[500px] w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-2xl" />
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src={slide.mainImage}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Image - Under Content (Hidden on mobile, visible on desktop) */}
            {/* <div className="hidden lg:block absolute bottom-0 left-0 right-0">
              <div className="container mx-auto px-4">
                <div className="relative h-48 w-full max-w-2xl rounded-t-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Image
                    src={slide.bottomImage}
                    alt={`${slide.title} - Additional`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-semibold bg-primary/80 px-3 py-1 rounded-full">
                      Featured Item
                    </span>
                  </div>
                </div>
              </div>
            </div>
             */}
          </div>
        ))}
      </div>

      {/* Alternative Layout with images side by side under content */}
      {/* 
      If you want both images side by side under the content, use this:
      
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={slides[currentSlide].mainImage}
              alt="Main product"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={slides[currentSlide].bottomImage}
              alt="Secondary product"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      */}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-blue-900'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;