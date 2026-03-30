import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <div className="navbar bg-white px-6 lg:px-12 py-4 shadow-sm">
      
      {/* Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-purple-600">DigiTools</a>
      </div>

      {/* Menu */}
      <div className="hidden lg:flex gap-8 font-medium text-gray-600">
        <a className="hover:text-purple-600 cursor-pointer">Products</a>
        <a className="hover:text-purple-600 cursor-pointer">Features</a>
        <a className="hover:text-purple-600 cursor-pointer">Pricing</a>
        <a className="hover:text-purple-600 cursor-pointer">Testimonials</a>
        <a className="hover:text-purple-600 cursor-pointer">FAQ</a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Cart */}
        <div className="relative cursor-pointer">
          <span className="text-xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
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

        {/* Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}