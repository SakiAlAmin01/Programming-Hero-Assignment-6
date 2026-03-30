import React from "react";
export default function StatsBar() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 max-w-5xl mx-auto">
        
        <div>
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-sm opacity-80">Active Users</p>
        </div>

        <div className="hidden md:block border-l border-white/30"></div>

        <div>
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-sm opacity-80">Premium Tools</p>
        </div>

        <div className="hidden md:block border-l border-white/30"></div>

        <div>
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="text-sm opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
}