import React from "react";

export default function StatsBar() {
  return (
    <div className="py-14 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
          
          {/* Item 1 */}
          <div className="py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              50K+
            </h2>
            <p className="mt-2 text-base md:text-lg text-white/80">
              Active Users
            </p>
          </div>

          {/* Item 2 */}
          <div className="py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              200+
            </h2>
            <p className="mt-2 text-base md:text-lg text-white/80">
              Premium Tools
            </p>
          </div>

          {/* Item 3 */}
          <div className="py-6 md:py-0">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              4.9
            </h2>
            <p className="mt-2 text-base md:text-lg text-white/80">
              Rating
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}