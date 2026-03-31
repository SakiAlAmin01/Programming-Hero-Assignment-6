import React from "react";

export default function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: "👤",
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: "📦",
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: "🚀",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
          Get Started In 3 Steps
        </h2>

        <p className="text-gray-500 mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl p-8 border shadow-sm 
              transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              
              {/* Step Number (Gradient) */}
              <div className="absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                {step.id}
              </div>

              {/* Icon Circle (Gradient Touch) */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#4F39F6]/10 to-[#9514FA]/10 text-2xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-6">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}