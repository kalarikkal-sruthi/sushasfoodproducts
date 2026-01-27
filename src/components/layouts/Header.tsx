"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="shadow-sm sm:shadow-none flex items-center justify-between sm:gap-2">
          {/* Logo */}
          <div className="flex items-center pl-2">
            <button
              className="lg:hidden mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
            <Link
              href="/"
              className="text-2xl font-bold text-primary flex items-center"
            >
              <Image
                src="/assets/logosushas.jpeg"
                alt="susha's food products"
                width={100}
                height={100}
                className="h-14 w-14 md:h-28 md:w-28 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-between space-x-6 pr-2">
            <button className="relative" aria-label="Search">
              <Search className="h-6 w-6 text-gray-700 md:hidden" />
            </button>

            <Link href="/account" className="hidden md:block" aria-label="My Account">
              <User className="h-6 w-6 text-gray-700 hover:text-primary" />
            </Link>

            <Link href="/cart" className="relative" aria-label="Shopping Cart">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary" />
              <span className="absolute -top-2  bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden m-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-1 py-1 md:px-4 md:py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Menu Overlay and Panel */}
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sliding Panel */}
        <div
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50
            transform transition-transform duration-300 ease-in-out
            lg:hidden
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close button in panel */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium py-2 text-[12px] border-b border-gray-100 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/account"
                className="text-gray-700 hover:text-primary font-medium py-2 text-[12px] border-b border-gray-100 "
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
            </div>
          </div>

          {/* Additional info or call to action */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gray-50">
            <div className="text-[12px] text-black text-start">
              <p>Need help? Call us:</p>
              <p className="text-black text-[12px]">+91 81293 13515</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;