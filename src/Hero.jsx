import React from "react";
import bannerImg from "./assets/banner.png";

export default function Hero() {
  return (
    <div className="bg-[#F8FAFC] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-sm">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-semibold mt-6 text-gray-800 leading-tight">
            Supercharge Your <br />
            <span className="text-gray-900">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 mt-6 max-w-lg text-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
            <br />
            <span className="text-gray-700 font-medium">
              Explore Products
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            
            {/* Primary */}
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-7 py-3 rounded-full shadow-md hover:opacity-90 transition">
              Explore Products
            </button>

            {/* Secondary */}
            <button className="flex items-center gap-2 px-7 py-3 rounded-full border border-purple-400 text-purple-600 hover:bg-purple-50 transition">
              <span className="text-sm">▶</span>
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent rounded-2xl z-10"></div>

          <img
            src={bannerImg}
            alt="AI"
            className="rounded-2xl shadow-lg w-full relative z-0"
          />
        </div>

      </div>
    </div>
  );
}