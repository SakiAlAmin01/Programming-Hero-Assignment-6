import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      period: "Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      btnText: "Get Started Free",
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      period: "Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      tag: "Most Popular",
      btnText: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      period: "Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      btnText: "Contact Sales",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] px-6 lg:px-12 py-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col justify-between p-8 rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl
            ${
              plan.highlight
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-xl"
                : "bg-white text-gray-800 border"
            }`}
          >
            {/* Tag */}
            {plan.tag && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full">
                {plan.tag}
              </span>
            )}

            {/* Top Content */}
            <div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-purple-100" : "text-gray-400"
                }`}
              >
                {plan.desc}
              </p>

              <p className="text-4xl font-bold mt-6">
                {plan.price}
                <span className="text-base font-normal">
                  /{plan.period}
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className={`font-bold ${
                        plan.highlight ? "text-white" : "text-green-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button (BOTTOM ALIGNED FIX) */}
            <button
              className={`mt-8 w-full py-3 rounded-full font-semibold transition
              ${
                plan.highlight
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
              }`}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}