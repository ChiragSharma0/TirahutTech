import React from "react";

function VisionSection() {
  return (
    <section className="w-full bg-orange-600 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* LEFT CONTENT */}
      <div className="max-w-xl w-full">
        <p className="text-sm tracking-wider font-semibold mb-4 opacity-90">
          OUR VISION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          To build <br /> anything that <br /> truly lasts
        </h2>

        <div className="w-20 h-[2px] bg-white mb-4 opacity-70"></div>

        <a
          href="#"
          className=" text-lg font-medium hover:underline flex items-center gap-2"
        >
          READ THE STORY ↗
        </a>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="w-full flex justify-center md:justify-end">
        <img
          src="/mnt/data/Screenshot 2025-11-21 153729.png"
          alt="Building Illustration"
          className="w-[320px] md:w-[420px] lg:w-[500px] object-contain opacity-95"
        />
      </div>

    </section>
  );
}

export default VisionSection;
