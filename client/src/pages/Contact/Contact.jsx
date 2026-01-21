// Contact.jsx
import React from "react";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: "Address", info: "123 Business Street, City, Country" },
    { icon: <HiOutlineMail />, title: "Email", info: "contact@trinit.com" },
    { icon: <FiPhoneCall />, title: "Phone", info: "+91 9876543210" },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, url: "https://www.linkedin.com/in/tirahut-tech-7249323a6", title: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", title: "Twitter" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/tirahut-tech-7249323a6", title: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/tirahut_tech", title: "Instagram" },
  ];

  const iconVariants = { hover: { scale: 1.2, rotate: 10 } };

  return (
    <div className="w-full font-[Inter] bg-gray-50">

      {/* ===== HEADER (MATCHING SERVICES HEADER) ===== */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full py-28 sm:py-32 px-5 text-center overflow-hidden bg-[#e9f4f3]"
      >
        {/* ===== BACKGROUND SHAPES ===== */}
        <div className="absolute -top-32 -left-32 w-[380px] h-[180px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-24 left-40 w-[80px] h-[80px] bg-[#f27b22] rotate-45 shadow-lg" />

        <div className="absolute -bottom-36 -left-28 w-[380px] h-[180px] bg-[#01686d] rotate-45 opacity-90" />
        <div className="absolute bottom-24 left-16 w-[240px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -top-36 -right-36 w-[400px] h-[200px] bg-[#00444b] rotate-45 opacity-90" />
        <div className="absolute top-28 right-28 w-[200px] h-[6px] bg-[#f27b22] rotate-45" />

        <div className="absolute -bottom-24 right-24 w-[100px] h-[100px] bg-[#f27b22] rotate-45 shadow-lg" />

        {/* Soft Glass */}
        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-[#01686d]/10 rotate-45 rounded-xl hidden sm:block" />
        <div className="absolute bottom-[25%] right-[35%] w-[220px] h-[220px] bg-[#00444b]/10 rotate-45 rounded-xl hidden sm:block" />

        {/* ===== HEADER CONTENT ===== */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00444b] mb-3">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#01686d] leading-relaxed">
            Reach out to us for any queries or support. We would love to hear from you!
          </p>
        </div>
      </motion.div>

      {/* ===== FORM + SOCIAL MEDIA SECTION ===== */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE: CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b] mb-6 text-center lg:text-left">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F27B22] outline-none transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F27B22] outline-none transition duration-300"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F27B22] outline-none transition duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F27B22] text-white px-6 py-3 rounded-xl hover:bg-[#e06b1d] transition w-full sm:w-auto block mx-auto lg:mx-0"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: SOCIAL MEDIA + CONTACT INFO */}
        <div className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center lg:items-start order-1 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b] mb-4 text-center lg:text-left">
            Follow & Contact Us
          </h2>
          <p className="text-gray-600 mb-8 text-center lg:text-left">
            Stay connected with us through our social channels for updates, news, and support.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#00444b] hover:bg-[#F27B22] hover:text-white transition duration-300 shadow-md"
                title={social.title}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* CONTACT INFO */}
          <ul className="space-y-3 text-gray-600 w-full">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="p-3 rounded-md bg-[#01686d] text-white text-lg flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-gray-800 font-medium">{item.info}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
