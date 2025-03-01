import Link from "next/link";
import Navbar from "../src/components/Navbar"; // Importing the Navbar component
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Add Navbar here */}

      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Welcome to Product Management
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This is your one-stop solution for managing products. Browse, edit, and manage your products seamlessly.
        </p>
        
        {/* Button that redirects to the Products page */}
        <Link href="/products">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
