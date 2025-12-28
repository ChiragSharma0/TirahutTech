import React from "react";
import { ShapeTirahutLogo } from "../../components/ui/Shapes/Shapes";

export default function ReadyToTransform() {
  return (
<section className="relative w-full py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0f6f73] via-[#0b5a5e] to-[#073f42] min-h-[calc(100vh_-_80px)]">      {/* Background Gradient */}
      <div className="absolute inset-0  opacity-95 scale-[0.8]" >
        <ShapeTirahutLogo />
      </div>

    

<div className="relative max-w-4xl mx-auto text-center text-white h-full flex flex-col justify-center">        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to transform your <br className="hidden md:block" />
          business with <span className="font-extrabold">Tirahut Tech?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
          Join hundreds of businesses already using our all-in-one platform to
          streamline operations and drive success. Get started today with a
          free demo or contact our team.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="px-8 py-4 rounded-xl bg-[#f27b22] text-white font-semibold shadow-lg hover:bg-[#e56f1c] transition-all duration-300">
            GET A FREE DEMO
          </button>

          <button className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0b5a5e] transition-all duration-300">
            CONTACT SALES
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-sm md:text-base text-white/90">
          <span className="font-medium">Email:</span> sales@tirahuttech.com
          <span className="mx-2">|</span>
          <span className="font-medium">Phone:</span> +91 12345 67890
        </div>
      </div>

    </section>
  );
}
