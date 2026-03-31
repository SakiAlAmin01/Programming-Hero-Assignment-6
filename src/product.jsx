import React from "react";
import productsData from "./products.json";

export default function Products({ cart, setCart, view, setView }) {

  // Add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove from cart
  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Checkout
  const handleCheckout = () => {
    setCart([]);
  };

  // Check if already added
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12 min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-3">
          Choose from our curated collection of premium digital products
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setView("products")}
            className={`px-5 py-2 rounded-full ${
              view === "products"
                ? "bg-purple-600 text-white"
                : "text-black border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`px-5 py-2 rounded-full ${
              view === "cart"
                ? "bg-purple-600 text-white"
                : "text-black border"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      {view === "products" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full 
                  ${item.tagType === "best" && "bg-yellow-100 text-yellow-600"}
                  ${item.tagType === "popular" && "bg-blue-100 text-blue-600"}
                  ${item.tagType === "new" && "bg-green-100 text-green-600"}
                `}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-black">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>

              <p className="text-xl font-bold mt-4 text-black">
                ${item.price}
                <span className="text-sm text-gray-400">
                  /{item.period}
                </span>
              </p>

              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {item.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleAddToCart(item)}
                disabled={isInCart(item.id)}
                className={`mt-6 w-full py-2 rounded-full ${
                  isInCart(item.id)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {isInCart(item.id) ? "Added to Cart" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CART */}
      {view === "cart" && (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-6 text-black">
            Your Cart
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4"
                >
                  <div>
                    <p className="font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-sm text-black">
                      ${item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex justify-between items-center mt-6">
                <p className="text-black">Total:</p>
                <p className="text-lg font-bold text-black">
                  ${total}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-full"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}