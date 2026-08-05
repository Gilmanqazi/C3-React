import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="text-center">
        {/* Logo */}
        <div className="relative flex justify-center items-center">
          <div className="w-28 h-28 rounded-full border-4 border-orange-200 border-t-orange-600 animate-spin"></div>

          <div className="absolute w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="text-3xl">🌺</span>
          </div>
        </div>

        {/* Shop Name */}
        <h1 className="mt-8 text-4xl font-extrabold text-orange-700 tracking-wide">
          GULMOHAR SHOP
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Bringing beautiful products to you...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span>
          <span
            className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-3 h-3 bg-orange-300 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Please wait while we prepare your shopping experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;