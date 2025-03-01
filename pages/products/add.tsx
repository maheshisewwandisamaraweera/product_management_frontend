import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    // For now, you can log the new product to the console
    console.log("New Product:", newProduct);

    // Redirect to products page (after successful addition)
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> {/* Add Navbar here */}

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Product Name Input */}
            <div>
              <label
                htmlFor="productName"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Product Price Input */}
            <div>
              <label
                htmlFor="productPrice"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Product Price
              </label>
              <input
                type="text"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Product Description */}
          <div>
            <label
              htmlFor="productDescription"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
