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
import {
  ShapeHexagonFilled,
  ShapeQuadFilled,
  ShapeShardAFilled,
} from "../../components/ui/Shapes/Shapes";

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: <HiOutlineCode />,
      color: "#01686d",
      desc: "Modern, responsive, and SEO-friendly websites for businesses.",
      extra: "Fast • Clean UI • Scalable",
      link: "/service/web-development",
    },
    {
      title: "App Development",
      icon: <BsPersonUp />,
      color: "#01686d",
      desc: "Android & iOS apps with smooth UI and strong backend systems.",
      extra: "Secure • Fast • User-focused",
      link: "/service/app-development",
    },
    {
      title: "Automation",
      icon: <FiHeadphones />,
      color: "#01686d",
      desc: "Automate workflows to increase efficiency and reduce work.",
      extra: "Smart • Error-free • Faster",
      link: "/service/automation",
    },
    {
      title: "Marketing",
      icon: <FaBullhorn />,
      color: "#F27B22",
      desc: "Grow your business with digital marketing strategies.",
      extra: "SEO • Ads • Branding",
      link: "/service/marketing",
    },
    {
      title: "E-Commerce Development",
      icon: <HiOutlineCode />,
      color: "#F27B22",
      desc: "Custom e-commerce websites that increase sales.",
      extra: "Secure payments • Admin panel",
      link: "/service/ecommerce-development",
    },
    {
      title: "Custom Software",
      icon: <BsPersonUp />,
      color: "#00444b",
      desc: "Tailor-made software solutions for businesses.",
      extra: "CRM • ERP • SaaS",
      link: "/service/customer-software",
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.section
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full py-24 sm:py-28 px-4 text-white overflow-hidden"
      >
        <img
          src="/img/servicess.png"
          alt="Services Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01686d]/90 to-[#00444b]/90" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-sm sm:text-lg opacity-90">
            Empowering businesses with professional digital solutions.
          </p>
        </div>
      </motion.section>

      {/* ================= INTRO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-6 max-w-5xl mx-auto mt-14 text-center"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-[#003C3F]">
          Websites & Web Apps That Drive Growth
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-lg">
          High-performance websites, apps, and digital solutions tailored
          to your business.
        </p>
      </motion.div>

      {/* ================= SERVICE CARDS ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          relative grid grid-cols-1 sm:grid-cols-2
          gap-6 px-4 sm:px-6 max-w-6xl mx-auto mt-12
        "
      >
        {/* Decorative Shape (desktop only) */}
        <div className="hidden lg:block absolute -top-10 -left-10 w-24 h-24 z-[-1]">
          <ShapeHexagonFilled color="o" />
        </div>

        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link to={service.link}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="
                  group bg-white border border-gray-200
                  rounded-2xl p-5 sm:p-6 shadow-md
                  flex gap-4 items-start min-h-[170px]
                  transition hover:bg-[#F27B22]
                  hover:border-[#F27B22]
                "
              >
                <div
                  className="text-3xl sm:text-4xl shrink-0 group-hover:text-white"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    {service.desc}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 group-hover:text-white">
                    {service.extra}
                  </p>
                </div>

                <div className="text-xl sm:text-2xl text-gray-400 group-hover:text-white">
                  <FaArrowRightLong />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center px-4 mt-16 mb-20"
      >
        {/* Shapes (desktop only) */}
        <div className="hidden lg:block absolute left-[20%] top-1/2 w-24">
          <ShapeQuadFilled color="t" />
        </div>
        <div className="hidden lg:block absolute right-[20%] -top-10 w-24">
          <ShapeShardAFilled color="o" />
        </div>

        <Link
          to="/contact"
          className="
            bg-[#F27B22] text-white font-semibold
            px-7 sm:px-10 py-4 rounded-xl
            text-sm sm:text-lg shadow-lg
            hover:bg-[#d86919] transition
          "
        >
          Book a Free Automation Consultation
        </Link>
      </motion.div>

      <WhyChooseUs />

      <div className="w-full h-1 bg-gradient-to-r from-[#01686d] via-[#f27b22] to-[#00444b] mt-12" />
    </>
  );
};

export default Services;
