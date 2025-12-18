import React from "react";

const Packages = () => {
  const plans = [
    {
      name: "Basic",
      price: 29,
      features: ["Feature one", "Feature two", "Feature three"],
    },
    {
      name: "Standard",
      price: 59,
      features: ["Feature one", "Feature two", "Feature three"],
    },
    {
      name: "Premium",
      price: 99,
      features: ["Feature one", "Feature two", "Feature three"],
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">

        {/* HEADER SECTION (NO BACKGROUND) */}
        <div
          className="
            w-full 
            py-20 px-5 sm:px-6 text-center
            pt-32 sm:pt-36
          "
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-teal-900">
            Our Packages
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto opacity-80 text-gray-700">
            Choose a plan that’s right for your business needs and scale as you grow.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-6 py-16 max-w-6xl w-full">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col items-center border border-gray-200 
                hover:shadow-2xl transition duration-300 h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-900 mb-2">
                {plan.name}
              </h2>

              <p className="text-4xl sm:text-5xl font-bold text-teal-900 mb-1">
                ${plan.price}
              </p>

              <p className="text-gray-600 mb-6 text-sm sm:text-base">per month</p>

              <div className="w-full h-px bg-gray-300 mb-6" />

              {/* FEATURES */}
              <ul className="space-y-4 text-gray-700 mb-10 w-full text-sm sm:text-base">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-teal-700 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 w-full rounded-xl transition shadow-md">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Packages;
