// src/components/Products.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  // Example product data (In a real-world application, you would fetch this data from an API or database)
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$100" },
    { id: 2, name: "Product 2", price: "$150" },
    { id: 3, name: "Product 3", price: "$200" },
  ]);

  // Simulating data fetching (You can replace this with an actual API call)
  useEffect(() => {
    // Replace with your API fetch logic to get product data
    // setProducts(fetchedData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Add Navbar here */}

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">
          Product Management
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Manage your products below. You can edit or delete existing products.
        </p>

        {/* Button to Add New Product */}
        <div className="text-center mb-8">
          <Link href="/products/add">  {/* Correct route path */}
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add New Product
            </button>
          </Link>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{product.price}</p>

              <div className="flex justify-between">
                <Link href={`/products/edit/${product.id}`}>
                  <a className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Edit
                  </a>
                </Link>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => {
                    // Handle delete functionality here
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
  );
};

export default ProductsPage;
