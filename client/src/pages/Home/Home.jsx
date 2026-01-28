// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import TrihutTech from "../Public/TrihutTech";
import EnterpriseSection from "../Public/EnterpriseSection";
import ClientSatisfied from "../Public/ClientSatisfied";


import WhyChoose from "../Public/WhyChoose";

import {
  FaArrowUp,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaLongArrowAltLeft  // updated arrow icon
} from "react-icons/fa";

import DevelopmentProcess from "../Public/DevelopmentProcess";
import SeoHero from "../Public/SeoHero";
import FAQSection from "../Public/FAQSection";
import ReadyToTransform from "../Public/ReadyToTransform";
import { ShapeChevronFilled } from "../../components/ui/Shapes/Shapes";
import PopupForm from "../../components/forms/PopupForm";



const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setShowPopup(true), []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


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


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const maxXY = 30;
    const maxZ = 0;

    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    mouseY.set(dx * maxXY);
    mouseX.set(-dy * maxXY);
    mouseZ.set(dx * maxZ);


  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    mouseZ.set(0);

  };


  return (
    <>
      {/* HERO */}
      <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 pt-16 sm:pt-16 md:pt-12 lg:pt-12 pb-12">
        <div className=" relative max-w-7xl w-full  min-h-full grid md:grid-cols-2 grid-cols-1 items-center gap-10 z-[10]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-[#0b2f32] md:text-left text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Business software <br /> made simple</h1>
            <p className="text-[17px] text-gray-700 mt-5 leading-relaxed max-w-xl mx-auto md:mx-0">
              All-in-one CRM, HRM, POS & ERP built for Indian SMEs, Cloud native, GST-ready & WhatsApp integrated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <button className="px-7 py-3 bg-[#01686d] text-white font-semibold rounded-lg border border-[#01686d] hover:bg-[#00444b] transition">Request Demo</button>
              <button className="px-7 py-3 bg-white text-[#01686d] font-semibold rounded-lg border border-[#01686d] hover:bg-[#f1f1f1] transition">Explore Products</button>
            </div>
            <p className="text-lg mt-10 text-[#01686d] font-medium">Trinit for the Businesses</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="flex justify-center md:justify-end">



            <motion.img src="/img/image.png" alt="Business Dashboard Illustration" className="w-[350px] sm:w-[450px] md:w-[550px] object-contain" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} />


          </motion.div>
        </div>

        <div className="absolute top-[-20px] left-[-85px] w-[300px] h-[300px] rotate-[50deg] z-[5]" >
          <ShapeChevronFilled thickness="5" />
        </div>
      </div>

      {/* PUBLIC SECTIONS */}
      <TrihutTech />
      <EnterpriseSection />
      <ClientSatisfied />
      <WhyChoose />
      <ReadyToTransform />
      <FAQSection />


      {/* SCROLL TO TOP */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#01686d] to-[#00444b] text-white p-4 rounded-full shadow-lg hover:from-[#00444b] hover:to-[#01686d] transition-all"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}

      {/* POPUP FORM */}
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      {/* ================= FLOATING SOCIAL LEFT ARROW ================= */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">

        {/* SOCIAL ICONS */}
        <AnimatePresence>
          {socialOpen && (
            <motion.div
              initial={{ x: 70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 70, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-3 mr-3"
            >
              {[FaLinkedinIn, FaInstagram, FaWhatsapp, FaFacebookF].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15 }}
                    className="
                w-11 h-11 rounded-full flex items-center justify-center
                bg-gradient-to-br from-[#01686d] to-[#00444b]
                shadow-md
              "
                  >
                    <Icon className="text-white text-lg" />
                  </motion.a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SQUARE ARROW BUTTON */}
        <motion.button
          onClick={() => setSocialOpen(!socialOpen)}
          whileHover={{ scale: 1.08 }}
          className="
      w-[56px] h-[56px]
      bg-gradient-to-br from-[#01686d] to-[#00444b]
      flex items-center justify-center
      shadow-xl m-1 rounded-lg
      overflow-visible
    "
        >
          <motion.div
            animate={{
              x: socialOpen ? 0 : [0, 6, 0], // aage–peeche
              rotate: socialOpen ? 180 : 0,
            }}
            transition={{
              x: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 0.3,
              },
            }}
            className="text-white text-xl font-light"
          >
            <FaLongArrowAltLeft />
          </motion.div>
        </motion.button>

      </div>



    </>
  );
};

export default Home;
