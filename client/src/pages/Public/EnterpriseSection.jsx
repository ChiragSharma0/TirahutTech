import React from "react";
import {
  ShapeGearwithMagnifyingGlass,
  ShapeShieldwithCheckmark,
  ShapeTrendingUpArrow,
} from "../../components/ui/Shapes/Shapes";

export default function EnterpriseSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* ICONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            <div className="w-16 h-16 flex items-center justify-center">
              <ShapeShieldwithCheckmark />
            </div>
            <div className="w-16 h-16 flex items-center justify-center">
              <ShapeGearwithMagnifyingGlass />
            </div>
            <div className="w-16 h-16 flex items-center justify-center">
              <ShapeTrendingUpArrow />
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00444b] leading-tight">
            Tirahut Tech <br className="hidden sm:block" /> For Enterprise
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Unlock the full potential of your large-scale operations. Experience
            a unified ecosystem with advanced professional services, robust
            infrastructure, top-tier support, and enterprise-grade security.
            Streamline complex processes, foster deeper customer relationships,
            and accelerate sustainable growth.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#f27b22] text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#e56f1c] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>
        </div>

        {/* RIGHT TESTIMONIAL */}
        <div className="relative flex justify-center">

          {/* BACKGROUND BLOB */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/img/blob.webp"
              alt=""
              className="w-[120%] max-w-none opacity-90"
            />
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="relative bg-white border-2 border-[#f3c29a] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.15),0_0_15px_rgba(243,194,154,0.4)] max-w-md sm:max-w-lg w-full flex flex-col justify-between">

            {/* QUOTE */}
            <div className="text-[#f27b22] text-5xl leading-none">“</div>

            {/* TEXT */}
            <p className="mt-4 text-[#00444b] text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
              With our complete business under control, our productivity is up
              <span className="font-bold"> 80% </span>
              in the last year that we have been using Tirahut Tech.
            </p>

            {/* USER */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Thomas John"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#01686d]">
                  Thomas John
                </h4>
                <p className="text-sm text-gray-500">
                  Managing Director, Agappe Diagnostics
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
