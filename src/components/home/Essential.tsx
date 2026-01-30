// components/ProductGrid.tsx
import React from "react";
import Image from "next/image";

export interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  altText: string;
}

interface ProductGridProps {
  products: Product[];
}

const Essential: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Header Section with SEO-friendly title */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Premium Organic Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our curated selection of high-quality, organic food products
          for a healthier lifestyle.
        </p>
      </header>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products?.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-72 w-full bg-gradient-to-r from-amber-100 to-yellow-100">
                <Image
                  src={product.imageUrl}
                  alt={product.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={product.id <= 3}
                  itemProp="image"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 md:p-6">
                {/* Product Title */}
                <h2
                  className="text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {product.title}
                </h2>

                {/* Product Description */}
                <p
                  className="text-gray-700 mb-4 h-12 overflow-hidden"
                  itemProp="description"
                >
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">Price</span>
                    <p
                      className="text-2xl font-bold text-amber-700"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <span itemProp="priceCurrency" content="SGD">
                        S$
                      </span>
                      <span
                        itemProp="price"
                        content={product.price
                          .replace("S$ ", "")
                          .replace(" p", "")}
                      >
                        {product.price.split(" ")[1]}
                      </span>
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        per item
                      </span>
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium py-2 px-5 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    aria-label={`Add ${product.title} to cart`}
                  >
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">+ Cart</span>
                  </button>
                </div>

                {/* SEO Meta (hidden) */}
                <meta itemProp="brand" content="Organic Premium" />
                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SEO Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.title,
                description: product.description,
                image: product.imageUrl,
                offers: {
                  "@type": "Offer",
                  price: product.price.replace("S$ ", "").replace(" p", ""),
                  priceCurrency: "SGD",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
};

// Sample data matching your provided content
export const sampleProducts: Product[] = [
  {
    id: 1,
    category: "Whole Turmeins",
    title: "Fonjaast Oil/Rippelias",
    description:
      "Premium quality turmeins oil extracted using traditional methods",
    price: "95.90",
    imageUrl: "/images/whole-turmeins.jpg",
    altText: "Premium Whole Turmeins Oil",
  },
  {
    id: 2,
    category: "Cold-Pressed Oils",
    title: "Ergavair Düneyroits",
    description: "Cold-pressed oil preserving all natural nutrients and flavor",
    price: "63.90",
    imageUrl: "/images/cold-pressed-oil.jpg",
    altText: "Organic Cold-Pressed Oil",
  },
  {
    id: 3,
    category: "Multi-Grain Atta",
    title: "Orgaant Čireqpčder",
    description: "Nutritious multi-grain flour for healthier baking",
    price: "55.30",
    imageUrl: "/images/multi-grain-atta-1.jpg",
    altText: "Premium Multi-Grain Atta",
  },
  {
    id: 4,
    category: "Multi-Grain Atta",
    title: "Raspast Cibrieptades",
    description: "Special blend of grains for perfect homemade bread",
    price: "35.00",
    imageUrl: "/images/multi-grain-atta-2.jpg",
    altText: "Special Multi-Grain Atta Blend",
  },
  {
    id: 5,
    category: "Multi-Grain A",
    title: "Drigaant Clustnpsod",
    description: "Advanced multi-grain formula for nutritional balance",
    price: "45.90",
    imageUrl: "/images/multi-grain-a.jpg",
    altText: "Advanced Multi-Grain Product",
  },
];

export default Essential;
