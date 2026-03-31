import React from "react";

export default function Navbar({ cartCount, setView }) {
  return (
    <div className="bg-white px-6 lg:px-12 py-4 shadow-sm flex items-center justify-between">
      
      {/* LEFT - Logo */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">
          DigiTools
        </h1>
      </div>

      {/* CENTER - Menu */}
      <div className="hidden lg:flex flex-1 justify-center gap-10 font-medium text-gray-600">
        <button
          onClick={() => setView("products")}
          className="hover:text-purple-600"
        >
          Products
        </button>

        <button className="hover:text-purple-600">Features</button>
        <button className="hover:text-purple-600">Pricing</button>
        <button className="hover:text-purple-600">Testimonials</button>
        <button className="hover:text-purple-600">FAQ</button>
      </div>

      {/* RIGHT - Actions */}
      <div className="flex flex-1 justify-end items-center gap-6">
        
        {/* Cart */}
        <div
          onClick={() => setView("cart")}
          className="relative cursor-pointer"
        >
          <span className="text-2xl">🛒</span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Login */}
        <button className="text-gray-600 hover:text-purple-600">
          Login
        </button>

        {/* Get Started */}
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <details className="dropdown">
            <summary className="cursor-pointer text-xl">☰</summary>
            <ul className="absolute right-0 mt-3 p-3 shadow bg-white rounded-lg w-44 space-y-2 text-gray-600">
              <li>
                <button onClick={() => setView("products")}>
                  Products
                </button>
              </li>
              <li><button>Features</button></li>
              <li><button>Pricing</button></li>
              <li><button>Testimonials</button></li>
              <li><button>FAQ</button></li>
            </ul>
          </details>
        </div>

      </div>
    </div>
  );
}