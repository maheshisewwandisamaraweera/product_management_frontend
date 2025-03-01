// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          ProductApp
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
         
          <Link href="/products/add" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
            Add Product
          </Link>
          <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
