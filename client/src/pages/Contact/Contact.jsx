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
    { icon: <FaFacebookF />, url: "https://facebook.com", title: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", title: "Twitter" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com", title: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://instagram.com", title: "Instagram" },
  ];

  const iconVariants = { hover: { scale: 1.2, rotate: 10 } };

  return (
    <div className="w-full font-[Inter] bg-gray-50">

      {/* HERO HEADER WITH IMAGE */}
      <div className="relative w-full text-white py-24 px-5 sm:px-6 text-center pt-32 sm:pt-36 overflow-hidden">
        {/* IMAGE TAG ADDED */}
        <img
          src="/img/servicess.png" // <-- image added
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01686d]/90 to-[#00444b]/90"></div>

        {/* HEADER CONTENT */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
            Reach out to us for any queries or support. We would love to hear from you!
          </p>
        </div>
      </div>

      {/* FORM + SOCIAL MEDIA SECTION */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE: CONTACT FORM */}
        <div className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col justify-center order-1 lg:order-1">
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
        <div className="bg-white shadow-lg rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-2">
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
