import React from "react";
import { FaBullhorn, FaUsers, FaChessKnight, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Brand Making",
      desc: "From sharp strategy to credible reputation, establish your authority and become the go-to BRAND in your domain.",
      icon: <FaBullhorn />,
    },
    {
      title: "Highly Proficient Team",
      desc: "Seasoned specialists who remove friction and elevate growth with accountable, end-to-end execution.",
      icon: <FaUsers />,
    },
    {
      title: "Strategic Planning",
      desc: "Well-researched, data-driven strategies designed for sustainable long-term business success.",
      icon: <FaChessKnight />,
    },
    {
      title: "High Success Rate",
      desc: "Proven track record of delivering consistent, measurable, and scalable business results.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">

      {/* Soft Background Accents */}
      <div className="absolute -top-32 -left-32 w-[380px] h-[380px] bg-[#01686d]/10 rounded-full blur-[120px]" />
      <div className="absolute top-40 -right-32 w-[380px] h-[380px] bg-[#f27b22]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#f27b22] text-3xl">★</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00444b]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-[#01686d] to-[#f27b22]" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-8
                bg-white
                border border-gray-200
                shadow-md
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:bg-[#f27b22]
                hover:border-[#f27b22]
                hover:shadow-[0_18px_40px_rgba(242,123,34,0.45)]
              "
            >
              {/* Icon Box */}
              <div
                className="
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                  text-2xl text-white
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{
                  background: "linear-gradient(135deg, #01686d, #00444b)",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3
                className="
                  text-xl font-semibold mb-3
                  text-[#00444b]
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-gray-600 text-sm leading-relaxed
                  transition-colors duration-300
                  group-hover:text-white/90
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
