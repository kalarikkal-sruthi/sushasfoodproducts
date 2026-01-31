// components/ProductCard.tsx
import React from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </span>
        </div>
      )}

      {/* Featured Badge */}
      {/* {product.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </span>
        </div>
      )} */}

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        {/* <div className="mb-2">
          <span className="text-sm text-gray-500 font-medium">
            {product.category}
          </span>
        </div> */}

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 ">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {/* <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">
                {i < Math.floor(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.rating.toFixed(1)})
          </span>
        </div> */}

        {/* Price and Stock */}
         <div className="flex items-center justify-between">
          <div>
            
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                 ₹{(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ₹{product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </span>
            )}
          </div>
        {/* <div className="flex items-center justify-between">
          <div>
            
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div> */}

          {/* Stock Status */}
          {/* <div className="text-right">
            <span
              className={`text-sm font-medium ${
                product.stock > 10
                  ? "text-green-600"
                  : product.stock > 0
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {product.stock > 10
                ? "In Stock"
                : product.stock > 0
                ? `Only ${product.stock} left`
                : "Out of Stock"}
            </span>
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Add to Cart
          </button>
          {/* <button className="px-4 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            ♡
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
