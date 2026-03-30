import React from "react";
import bannerImg from "./assets/banner.png"; // 👈 important

export default function Hero() {
  return (
    <div className="px-6 lg:px-12 py-16 lg:py-24 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
            ● New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl lg:text-6xl font-bold mt-6 text-gray-800 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mt-6 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Explore Products
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 flex items-center gap-2">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={bannerImg} 
            alt="AI"
            className="rounded-xl shadow-md w-full"
          />
        </div>

      </div>
    </div>
  );
}