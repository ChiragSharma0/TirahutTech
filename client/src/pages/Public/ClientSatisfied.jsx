import React from "react";

const ClientSatisfied = () => {
  return (
<<<<<<< HEAD
    <section
      className="
        relative w-full overflow-hidden
        min-h-[70vh] md:min-h-[80vh]
        px-6 sm:px-12 md:px-16 lg:px-28
        py-28 md:py-32
        flex items-center
        bg-gradient-to-br from-[#01686d] to-[#00444b]
      "
    >
      {/* ========= BACKGROUND SHAPES ========= */}
      <div className="absolute inset-0 z-0">
        {/* World Map / Line Texture */}
        <div
          className="
            absolute inset-0
            bg-[url('./img/world.png')]
            bg-center bg-no-repeat bg-cover
            opacity-20
          "
        />
        {/* Soft Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ========= MAIN CONTENT ========= */}
      <div className="max-w-7xl relative z-10 text-white w-full">
=======
<section className="w-full relative overflow-hidden bg-[url('/img/WorldMap.webp')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh_-_80px)] py-24 pb-32 px-6 md:px-16 lg:px-28 ">      {/* MAIN CONTENT */}
      <div className="max-w-7xl relative z-10 text-white">
>>>>>>> c0538a7ee45424f74c34cbb7fcf52e663986bd43
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug">
          Made in India.
          <br />
          Made for the World.
        </h1>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          {[
            { value: "130M+", label: "Users Globally" },
            { value: "150+", label: "Countries Served" },
            { value: "18K+", label: "Employees" },
            { value: "29+", label: "Years in Business" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                {item.value}
              </h2>
              <p className="text-white/80 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                {item.label}
              </p>
              <div className="w-12 sm:w-14 h-[2px] bg-white/40 mt-3" />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6">
          <button
            className="
              px-8 py-4 text-base sm:text-lg font-semibold
              rounded-xl shadow-lg
              bg-[#f27b22]
              hover:bg-[#e56f1c]
              transition-all duration-300
              w-full sm:w-auto
            "
          >
            MORE ABOUT TRIHUT →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfied;
