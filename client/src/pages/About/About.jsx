import React from "react";
import { motion } from "framer-motion";
import VisionSection from "./VisionSection";
import WhySets from "./WhySets";
import WhyChoose from "../Public/WhyChoose";
import TeamMembers from "./TeamMembers";

const AboutSection = () => {
  return (
    <>
      {/* ===== HEADER (SAME AS SERVICES STYLE) ===== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full text-white py-24 px-5 text-center pt-32 sm:pt-36 
                   bg-gradient-to-r from-[#01686d] to-[#00444b]"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
          Discover who we are and what drives our digital excellence.
        </p>
      </motion.div>

      {/* ===== ABOUT CONTENT SECTION ===== */}
      <section className="relative w-full bg-white py-20 overflow-hidden">

        {/* Soft Background Shapes */}
        <div className="absolute -top-32 -left-32 w-[380px] h-[380px] bg-[#01686d]/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 -right-32 w-[380px] h-[380px] bg-[#f27b22]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#00444b] leading-tight">
              Tirahut Tech – A Digital <br />
              <span className="text-[#01686d]">
                Marketing Company
              </span>
            </h2>

            {/* Accent Line */}
            <div className="w-20 h-1 bg-[#f27b22] mt-6 mb-6 rounded-full" />

            <p className="text-lg text-[#01686d] font-medium mb-4">
              Discover our journey and what drives us.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              We empower your brand through data-driven strategies, crafting
              impactful marketing campaigns that resonate with your audience and
              deliver measurable results that transform your business growth.
            </p>

            <button className="px-7 py-3 rounded-xl bg-[#01686d] text-white font-medium shadow-lg 
                               hover:bg-[#00444b] transition flex items-center gap-2">
              Learn More
              <span className="text-[#f27b22] text-xl">→</span>
            </button>
          </motion.div>

          {/* RIGHT VIDEO / IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#01686d]/30" />

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/img/ik.jpg"
                autoPlay
                loop
                muted
                className="w-full h-[300px] md:h-[420px] object-cover"

                
              />
              
            </div>
            

            {/* Floating Accent */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#f27b22] rounded-2xl shadow-lg" />
          </motion.div>

        </div>
        
      </section>

    
      <VisionSection />
      <WhySets/>
      <WhyChoose/>
      <TeamMembers/>
      

      {/* ===== GRADIENT DIVIDER ===== */}
      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12" />


      
    </>
  
  );
};

export default AboutSection;
