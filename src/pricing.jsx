import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      btnText: "Get Started Free",
      btnType: "primary",
    },
    {
      name: "Pro",
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
      btnType: "secondary",
    },
    {
      name: "Enterprise",
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
      btnType: "primary",
    },
  ];

  return (
    <div className="bg-gray-50 px-6 lg:px-12 py-16 lg:py-24">
      {/* Pricing Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-xl shadow-lg ${
              plan.tag ? "bg-purple-600 text-white" : "bg-white text-gray-800"
            } relative`}
          >
            {plan.tag && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                {plan.tag}
              </span>
            )}
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-base font-normal">/{plan.period}</span>
            </p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✔</span> {feat}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-full font-semibold ${
                plan.btnType === "primary"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-purple-600 hover:bg-purple-50"
              }`}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
{/* Call-to-Action Section */}
      <div className="mt-24 bg-purple-600 text-white py-16 rounded-xl text-center">
        <h3 className="text-3xl font-bold mb-4">Ready To Transform Your Workflow?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Explore Products
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>
        <p className="mt-4 text-sm opacity-80">14-day free trial · No credit card required · Cancel anytime</p>
      </div>
      
    </div>
  );
}