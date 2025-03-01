// pages/products/index.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../src/components/Navbar"; // Ensure correct import path

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$100" },
    { id: 2, name: "Product 2", price: "$150" },
    { id: 3, name: "Product 3", price: "$200" },
  ]);

  useEffect(() => {
    // Your fetch logic will go here for fetching data from API
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Container Box for Products */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            Product Management
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Manage your products below. You can edit, delete, or add new products.
          </p>

          {/* Button to Add New Product */}
          <div className="text-center mb-8">
            <Link href="/products/add">
              <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                Add New Product
              </button>
            </Link>
          </div>

          {/* Product List Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{product.price}</p>

                <div className="flex justify-between items-center">
                  {/* Edit Button */}
                  <Link href={`/products/edit/${product.id}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                      Edit
                    </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                    onClick={() => {
                      setProducts(products.filter((item) => item.id !== product.id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
