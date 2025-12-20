import React from "react";
import { HelpCircle, Smile, Users, Settings, DollarSign } from "lucide-react";

// COLOR PALETTE
// Green: #01686d , #00444b
// Orange Accent: #f27b22

const features = [
  {
    title: "Happy 2 Help",
    desc: "Everything we do reduces effort for you—our culture, comms, and delivery are designed to make marketing easier.",
    icon: <Smile className="text-white" size={26} />,
  },
  {
    title: "Team of Experts",
    desc: "Marketing evolves daily, so do we—bringing deep channel specialists to give your campaigns real punch.",
    icon: <Users className="text-white" size={26} />,
  },
  {
    title: "Proven Process",
    desc: "Every engagement begins with discovery, insight-driven planning, and a custom roadmap to outcomes.",
    icon: <Settings className="text-white" size={26} />,
  },
  {
    title: "Real Results",
    desc: "Treat marketing as investment—optimize for pipeline and revenue, not vanity metrics.",
    icon: <DollarSign className="text-white" size={26} />,
  },
];

export default function WhyChooseAdsRole() {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-[#00444b]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01686d] via-[#00444b] to-black opacity-95" />

      <div className="relative max-w-6xl mx-auto text-white">
        {/* HEADING */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="bg-[#f27b22] text-black p-3 rounded-full shadow-lg">
              <HelpCircle size={22} />
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Why Choose <span className="text-[#f27b22]">AdsRole?</span>
            </h2>
          </div>

          <div className="mt-6 flex justify-center">
            <span className="h-1 w-20 rounded-full bg-[#f27b22]" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-start gap-5">
                {/* ICON */}
                <div className="flex-shrink-0 bg-[#01686d] p-4 rounded-full shadow-md">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#00444b]">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
