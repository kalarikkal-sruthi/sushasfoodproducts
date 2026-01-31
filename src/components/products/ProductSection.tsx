// components/ProductSection.tsx
import React from 'react';
import ProductCard from './ProductCard';
import { ProductSection as ProductSectionType } from '@/types/product';

interface ProductSectionProps {
  section: ProductSectionType;
}

const ProductSectionComponent: React.FC<ProductSectionProps> = ({ section }) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-gray-600 text-lg">{section.subtitle}</p>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200">
            View All {section.title}
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionComponent;