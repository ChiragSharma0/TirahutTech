import React from 'react'
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="w-full font-[Inter] bg-gray-50">
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full text-white py-24 px-5 pt-32 sm:pt-36 overflow-hidden"
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/img/servicess.png"
          alt="Blog Background"
          className="
            absolute inset-0 w-full h-full 
            object-cover object-center
            scale-105
          "
        />

        {/* OVERLAY (GRADIENT + DARK) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01686d]/90 to-[#00444b]/90"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Blogs
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
            some info.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Blog
