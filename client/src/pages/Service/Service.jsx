// Services.jsx
import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { BsPersonUp } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";

// Stagger Animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <HiOutlineCode />,
      color: "#01686d",
      desc: "Modern, responsive, and SEO-friendly websites for businesses.",
      extra: "Fast performance • Clean UI • Scalable",
      link: "/service/web-development",
    },
    {
      title: "App Development",
      icon: <BsPersonUp />,
      color: "#01686d",
      desc: "Android & iOS apps with smooth UI and strong backend systems.",
      extra: "High performance • Secure • User-focused",
      link: "/service/app-development",
    },
    {
      title: "Automation",
      icon: <FiHeadphones />,
      color: "#01686d",
      desc: "Automate workflows to increase efficiency and reduce manual work.",
      extra: "Smart automation • Error-free • Faster results",
      link: "/service/automation",
    },
    {
      title: "Marketing",
      icon: <FaBullhorn />,
      color: "#F27B22",
      desc: "Grow your business with strong digital marketing strategies.",
      extra: "SEO • Ads • Social Media • Branding",
      link: "/service/marketing",
    },
    {
      title: "E-Commerce Development",
      icon: <HiOutlineCode />,
      color: "#F27B22",
      desc: "Custom e-commerce websites that increase your online sales.",
      extra: "Fast checkout • Secure payments • Admin dashboard",
      link: "/service/ecommerce-development",
    },
    {
      title: "Custom Software",
      icon: <BsPersonUp />,
      color: "#00444b",
      desc: "Tailor-made software solutions for startups & enterprises.",
      extra: "CRM • ERP • SaaS • Automation Tools",
      link: "/service/customer-software",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full text-white py-24 px-5 text-center pt-32 sm:pt-36 bg-gradient-to-r from-[#01686d] to-[#00444b]"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto opacity-90">
          Empowering businesses with professional digital solutions.
        </p>
      </motion.div>

      {/* MAIN HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 max-w-6xl mx-auto mt-14 mb-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#003C3F]">
          Websites & Web Apps That Drive Growth
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          High-performance websites, apps, and digital solutions tailored to your business.
        </p>
      </motion.div>

      {/* SERVICE CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-7 px-6 md:px-12 max-w-6xl mx-auto pb-10"
      >
        {services.map((service, index) => (
          <motion.div variants={cardVariants} key={index}>
            <Link to={service.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`
                  group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg 
                  transition duration-300 flex gap-4 items-start min-h-[180px]
                  hover:bg-[#F27B22] hover:border-[#F27B22] hover:shadow-[0_6px_20px_rgba(242,123,34,0.35)]
                `}
              >
                {/* ICON */}
                <div
                  className="text-4xl mt-1 shrink-0 transition duration-300 group-hover:text-white"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-white mb-1">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-[14px] leading-relaxed group-hover:text-white mb-1">
                    {service.desc}
                  </p>

                  <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-white">
                    {service.extra}
                  </p>
                </div>

                {/* ARROW ANIMATION */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-gray-400 mt-1 group-hover:text-white"
                >
                  <FaArrowRightLong />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA BUTTON BELOW CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full flex justify-center mt-4 mb-20"
      >
        <Link
          to="/contact"
          className="
            bg-[#F27B22] text-white font-semibold px-8 py-4 
            rounded-xl shadow-lg text-lg
            hover:bg-[#d86919] hover:shadow-xl transition duration-300
          "
        >
          Book a Free Automation Consultation
        </Link>
      </motion.div>

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* GRADIENT DIVIDER LINE LIKE APP DEVELOPMENT */}
      <div className="w-full h-2 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12"></div>
    </>
  );
};

export default Services;
