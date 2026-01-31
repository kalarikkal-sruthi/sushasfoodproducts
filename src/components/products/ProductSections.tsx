// components/ProductSections.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ProductSectionComponent from './ProductSection';
import { dummyProductSections } from '@/data/dummyProducts';
import { ProductSection } from '@/types/product';

const ProductSections = () => {
  const [sections, setSections] = useState<ProductSection[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch with dummy data
  useEffect(() => {
    const fetchSections = () => {
      setLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        setSections(dummyProductSections);
        setLoading(false);
      }, 500);
    };

    fetchSections();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      

      {/* Product Sections */}
      <main>
        {sections.map((section) => (
          <div key={section.id} className={section.id > 1 ? 'border-t border-gray-200' : ''}>
            <ProductSectionComponent section={section} />
          </div>
        ))}
      </main>

   
    </div>
  );
};

export default ProductSections;