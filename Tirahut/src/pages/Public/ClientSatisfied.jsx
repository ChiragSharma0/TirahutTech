import React from "react";

const ClientSatisfied = () => {
  return (
    <section
      className="w-full relative overflow-hidden py-24 pb-32 px-6 md:px-16 lg:px-28 mb-20"
      style={{ background: "linear-gradient(180deg, #01686d 0%, #00444b 100%)" }}
    >
      {/* MAIN CONTENT */}
      <div className="max-w-7xl relative z-10 text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Made in India.
          <br />
          Made for the World.
        </h1>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">130M+</h2>
            <p className="text-white/80 mt-1 text-lg">Users Globally</p>
            <div className="w-12 h-[2px] bg-white/40 mt-3"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold">150+</h2>
            <p className="text-white/80 mt-1 text-lg">Countries Served</p>
            <div className="w-12 h-[2px] bg-white/40 mt-3"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold">18K+</h2>
            <p className="text-white/80 mt-1 text-lg">Employees</p>
            <div className="w-12 h-[2px] bg-white/40 mt-3"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold">29+</h2>
            <p className="text-white/80 mt-1 text-lg">Years in Business</p>
            <div className="w-12 h-[2px] bg-white/40 mt-3"></div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="mt-12 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
          style={{ backgroundColor: "#f27b22" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#d96c1f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#f27b22")}
        >
          MORE ABOUT TRIHUT →
        </button>
      </div>
    </section>
  );
};

export default ClientSatisfied;
