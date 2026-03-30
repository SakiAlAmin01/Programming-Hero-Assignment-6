import React from "react";
import products from "./products.json";

export default function Products() {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-3">
          Choose from our curated collection of premium digital products
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
            Products
          </button>
          <button className="border px-5 py-2 rounded-full">
            Cart (2)
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            
            {/* Tag */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-xs px-2 py-1 rounded-full 
                ${item.tagType === "best" && "bg-yellow-100 text-yellow-600"}
                ${item.tagType === "popular" && "bg-blue-100 text-blue-600"}
                ${item.tagType === "new" && "bg-green-100 text-green-600"}
              `}>
                {item.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">{item.name}</h3>

            {/* Desc */}
            <p className="text-sm text-gray-500 mt-2">
              {item.description}
            </p>

            {/* Price */}
            <p className="text-xl font-bold mt-4">
              ${item.price}
              <span className="text-sm text-gray-400">
                /{item.period}
              </span>
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-1 text-sm text-gray-600">
              {item.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700">
              Buy Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}