// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrihutTech from "../Public/TrihutTech";
import EnterpriseSection from "../Public/EnterpriseSection";
import ClientSatisfied from "../Public/ClientSatisfied";
import Packages from "../Public/Package";
import { FaArrowUp, FaTimes } from "react-icons/fa";

// Correct image import

const PopupForm = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-3 sm:p-6 z-50"
      >
        {/* MAIN WRAPPER */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            bg-white rounded-xl  w-full 
            max-w-5xl max-h-[90vh] 
            overflow-hidden relative 
            flex flex-col md:flex-row
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              absolute top-3 right-3 
              bg-[#00444b] hover:bg-[#01686d] 
              text-white rounded-full p-2 transition z-50
            "
          >
            <FaTimes size={16} />
          </button>

          {/* LEFT IMAGE SECTION */}
          <div
            className="
              relative w-full 
              md:w-1/2 
              bg-white flex items-center justify-center 
              p-5 sm:p-8 md:p-6 
              overflow-hidden border-b md:border-b-0 
              md:border-r border-gray-200
            "
          >
            {/* Curves */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.51, x: 0 }}
              transition={{ duration: 1 }}
              className="
                absolute top-0 left-0 
                w-[150px] sm:w-[200px] 
                h-[150px] sm:h-[200px] 
                bg-[#f27b22] rounded-br-[160px]
              "
            />

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 0.50, y: 0 }}
              transition={{ duration: 1 }}
              className="
                absolute bottom-0 right-0 
                w-[160px] sm:w-[220px] 
                h-[160px] sm:h-[220px] 
                bg-[#01686d] rounded-tl-[180px]
              "
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="
                absolute top-1/2 left-1/2 
                w-[200px] sm:w-[260px] 
                h-[200px] sm:h-[260px] 
               
                -translate-x-1/2 -translate-y-1/2 
                blur-2xl
              "
            />

            {/* IMAGE */}
            <img
              src="/img/tira.png"
              alt="illustration"
              className="
                w-[70%] sm:w-[80%] md:w-full 
                h-auto object-contain 
                drop-shadow-xl relative z-10
              "
            />
          </div>

          {/* RIGHT FORM SECTION */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              w-full md:w-1/2 
              bg-white p-5 sm:p-8 md:p-10 
              flex flex-col 
              h-full max-h-[90vh]
              overflow-y-auto no-scrollbar
            "
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#003C3F] tracking-tight">
              TIRAHUT TECH
            </h1>

            <h3 className="text-center text-xs sm:text-sm font-semibold tracking-wide text-[#003C3F] mt-2 mb-6">
              Let’s Build Your Next Digital Solution
            </h3>

            {/* FORM */}
            <form className="flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none"
              />

              <input
                type="email"
                placeholder="Business Email Address"
                className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none"
              />

              <select className="border border-gray-300 px-4 py-2.5 sm:py-3 rounded-md text-sm bg-white focus:border-[#01686d] outline-none">
                <option>Select State</option>
                <option>Bihar</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Gujarat</option>
                <option>Tamil Nadu</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your requirements..."
                className="border border-gray-300 px-4 py-3 rounded-md text-sm w-full focus:border-[#01686d] outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#01686d] text-white py-3 rounded-md font-semibold text-sm hover:bg-[#00444b] transition"
              >
                SUBMIT ENQUIRY
              </button>
            </form>

            <p className="text-xs text-center text-gray-600 mt-3">
              By submitting this form, you agree to our Terms & Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};



// MAIN HOME COMPONENT
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show popup instantly
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 pt-32 sm:pt-36 md:pt-28 lg:pt-28 pb-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 grid-cols-1 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#0b2f32] md:text-left text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Business software <br /> made simple
            </h1>

            <p className="text-[17px] text-gray-700 mt-5 leading-relaxed max-w-xl mx-auto md:mx-0">
              All-in-one CRM, HRM, POS & ERP built for Indian SMEs,
              Cloud native, GST-ready & WhatsApp integrated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button className="px-7 py-3 bg-[#01686d] text-white font-semibold rounded-lg border border-[#01686d] hover:bg-[#00444b] transition">
                Request Demo
              </button>

              <button className="px-7 py-3 bg-white text-[#01686d] font-semibold rounded-lg border border-[#01686d] hover:bg-[#f1f1f1] transition">
                Explore Products
              </button>
            </div>

            <p className="text-lg mt-10 text-[#01686d] font-medium">
              Trinit for the Businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/img/pro.png"
              alt="Business Dashboard Illustration"
              className="w-[350px] sm:w-[450px] md:w-[550px] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* PUBLIC SECTIONS */}
      <TrihutTech />
      <EnterpriseSection />
      <ClientSatisfied />
      <Packages />

      {/* SCROLL TO TOP */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-8 right-8 z-50 bg-[#01686d] text-white p-4 rounded-full shadow-lg hover:bg-[#00444b] transition-all"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}

      {/* POPUP FORM */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Home;
