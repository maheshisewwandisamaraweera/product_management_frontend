import Navbar from "../src/components/Navbar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Add Navbar here */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-700">
          This is your dashboard where you can manage your products and more.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
