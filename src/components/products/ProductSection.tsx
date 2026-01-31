// components/ProductSection.tsx
import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { ProductSection as ProductSectionType } from '@/types/product';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/grid';

// Import required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Grid,
  FreeMode,
} from 'swiper/modules';

interface ProductSectionProps {
  section: ProductSectionType;
}

const ProductSectionComponent: React.FC<ProductSectionProps> = ({ section }) => {
  const swiperRef = useRef<SwiperCore>();

  // Navigation handlers
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation */}
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-gray-600 text-lg">{section.subtitle}</p>
            )}
          </div>
          
          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 group"
              aria-label="Previous products"
            >
              <span className="text-2xl transform -translate-y-px group-hover:-translate-x-px transition-transform">
                ←
              </span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 group"
              aria-label="Next products"
            >
              <span className="text-2xl transform -translate-y-px group-hover:translate-x-px transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
          onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Grid, FreeMode]}
            spaceBetween={24}
            slidesPerView={2}
            grid={{
              rows: 1,
              fill: 'row',
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumBounce: false,
              minimumVelocity: 0.01,
            }}
        breakpoints={{
              // Mobile
              320: {
                slidesPerView: 2.2,
                spaceBetween: 16,
                grid: {
                  rows: 1,
                },
              },
              // Small tablets
              480: {
                slidesPerView: 2.2,
                spaceBetween: 16,
                grid: {
                  rows: 1,
                },
              },
              // Tablets
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                grid: {
                  rows: 1,
                },
              },
              // Small desktop
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                grid: {
                  rows: 1,
                },
              },
              // Desktop
              1024: {
                slidesPerView: 4.3,
                spaceBetween: 32,
                grid: {
                  rows: 1,
                },
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{
              hide: false,
            }}
            loop={true}
            
   
        className="mySwiper"
          >
            {section.products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 group"
              aria-label="Previous products"
            >
              <span className="text-2xl transform -translate-y-px group-hover:-translate-x-px transition-transform">
                ←
              </span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 group"
              aria-label="Next products"
            >
              <span className="text-2xl transform -translate-y-px group-hover:translate-x-px transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200">
            View All {section.title}
            <span className="text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionComponent;