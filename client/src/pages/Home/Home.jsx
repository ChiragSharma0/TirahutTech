// src/components/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

import TrihutTech from "../Public/TrihutTech";
import EnterpriseSection from "../Public/EnterpriseSection";
import ClientSatisfied from "../Public/ClientSatisfied";
import Packages from "../Public/Package";
import PopupForm from "../../components/forms/PopupForm";

// MAIN HOME COMPONENT
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dashboardRef = useRef(null);


  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setShowPopup(true), []);

  const BASE_ROTATE_X = 0;
  const BASE_ROTATE_Y = 0;
  const BASE_ROTATE_Z = 0;


  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseZ = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const springZ = useSpring(mouseZ, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springX, v => BASE_ROTATE_X + v);
  const rotateY = useTransform(springY, v => BASE_ROTATE_Y + v);
  const rotateZ = useTransform(springZ, v => BASE_ROTATE_Z + v);
  let MAX = {
    x: 16, // vertical tilt (up / down)
    y: 16, // horizontal tilt (left / right)
    z: 0,  // subtle roll (keep very small or 0)
  };



  const handleMouseMove = (e) => {
  if (!dashboardRef.current) return;

  const rect = dashboardRef.current.getBoundingClientRect();

  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const dx = (e.clientX - cx) / (rect.width / 2);
  const dy = (e.clientY - cy) / (rect.height / 2);

  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

  // Reduce max Y rotation when mouse moves strongly upward
  const dynamicMaxX = dx < -2 ? 6 : dx <-3 ? 10 :MAX.x;
  console.log(dx);
  mouseY.set(clamp(dx, -1, 1) * MAX.y);
  mouseX.set(clamp(-dy, -1, 1) * dynamicMaxX);
  mouseZ.set(clamp(dx, -1, 1) * MAX.z);
};



  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    mouseZ.set(0);

  };



  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show popup instantly on load
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
        <div className=" relative max-w-7xl w-full  min-h-full grid md:grid-cols-2 grid-cols-1 items-center gap-10 z-[10]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#0b2f32] md:text-left text-center"
          >
            {/* MAIN HEADING */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tailored Tech<br /> Simplified Growth
            </h1>

            {/* SUPPORTING PARAGRAPH */}
            <p className="text-[17px] text-gray-700 mt-5 leading-relaxed max-w-xl mx-auto md:mx-0">
              Custom software, automation, and IT services—
              delivered as solutions or dedicated tech teams.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link to="/contact">
                <button className="px-7 py-3 bg-[#01686d] text-white font-semibold rounded-lg border border-[#01686d] hover:bg-[#00444b] transition">
                  Request Demo
                </button>
              </Link>

              <Link to="/service">
                <button className="px-7 py-3 bg-white text-[#01686d] font-semibold rounded-lg border border-[#01686d] hover:bg-[#f1f1f1] transition">
                  Explore Services
                </button>
              </Link>
            </div>

            <p className="text-lg mt-10 text-[#01686d] font-medium">
              Trinit for the Businesses
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/img/image.png"
              alt="Business Dashboard Illustration"
              className="w-[350px] sm:w-[450px] md:w-[550px] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div> */}

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="flex justify-center md:justify-end">



            <div className="relative w-full h-[550px] bg-transparent flex items-center justify-center overflow-hidden [perspective:2000px]">
              {/* Layer 1: The Background Image (Circuits) */}
              <div className="absolute inset-0 z-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-20 pointer-events-none grayscale" style={{ backgroundImage: `url("/img/Circuit.png")` }}></div>

              {/* Layer 2: The Holographic Dashboard Container */}
              {/* Adjusted rotateX from 55deg to 45deg and rotateZ from -25deg to -20deg for a better match */}
              <motion.div
                ref={dashboardRef}
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  transformStyle: "preserve-3d",
                  translateZ: 20,
                }}
                className="
    relative z-10 w-[70%] rounded-2xl
    border border-cyan-300/50
    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),_0_0_20px_2px_rgba(6,182,212,0.2)_inset]
  "
              >


                {/* Reflection Overlay */}
                <div className="absolute  rounded-2xl pointer-events-none z-20"></div>

                {/* Dashboard Content Area */}
                <div className="w-full h-full overflow-hidden rounded-2xl  relative z-10">
                  <picture className="w-full h-full block">
                    <source media="(min-width: 1024px)" srcSet="/img/Dashboard.png" />
                    <img src="/img/Dashboard.png" alt="Dashboard Interface" className="w-full h-full object-cover rounded-xl border border-gray-100" />
                  </picture>
                </div>

                {/* The "Ghost" Outline Layer underneath */}
                <div className="absolute -inset-4 -z-10 rounded-3xl border-[2px] border-cyan-400/20  [transform:translateZ(-40px)]"></div>
              </motion.div>
            </div>


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
