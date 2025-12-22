import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "SEO Services and Digital Marketing Agency in Texas",
    answer:
      "We provide comprehensive SEO and digital marketing services designed to boost your online visibility and drive quality traffic.",
  },
  {
    question: "Best Search Engine Marketing and SEO Company Texas",
    answer:
      "Our team uses proven strategies including on-page SEO, off-page SEO, PPC campaigns, and content marketing.",
  },
  {
    question: "Why is SEO and Internet Marketing so Important?",
    answer:
      "SEO helps businesses increase visibility, build trust, and generate long-term organic traffic.",
  },
  {
    question: "What Does an Online Marketing Agency Do?",
    answer:
      "An online marketing agency helps businesses grow through SEO, paid ads, social media, branding, and analytics.",
  },
  {
    question: "What is included in Digital Marketing Services?",
    answer:
      "Services include SEO, PPC, social media marketing, content creation, email campaigns, and performance tracking.",
  },
  {
    question: "Why Should you Hire an SEO Company?",
    answer:
      "Hiring an SEO company saves time, ensures best practices, and delivers measurable growth.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-4 bg-white">
      
      {/* Title */}
      <h2
        className="text-center text-3xl sm:text-4xl font-bold mb-14"
        style={{ color: "#00444b" }}
      >
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="
                rounded-2xl
                overflow-hidden
                border border-gray-200
                shadow-sm
              "
            >
              {/* QUESTION ROW */}
              <button
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg, #01686d, #00444b)",
                }}
              >
                <span className="text-sm sm:text-base font-medium">
                  {faq.question}
                </span>

                {/* Plus / Minus */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    w-9 h-9 rounded-full
                    bg-white
                    flex items-center justify-center
                  "
                  style={{ color: "#00444b" }}
                >
                  {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
                      bg-white
                      px-6 py-5
                      text-gray-600
                      text-sm
                      leading-relaxed
                    "
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
