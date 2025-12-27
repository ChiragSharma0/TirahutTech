import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function TrihutTech() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh_-_80px)] bg-[#F4F4F4] font-[Inter]">

      {/* ========= TOP ORANGE BANNER ========= */}
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mt-140 mb-[-160px] relative z-20">
        <div className="bg-[url(/img/Banner.webp)] bg-cover  bg-no-repeat text-white rounded-3xl w-full max-w-7xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-lg space-y-6 text-center lg:text-left">
            <p className="text-base sm:text-lg">
              To build anything that truly lasts,
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              it takes time
            </h1>

            <div className="w-14 h-[2px] bg-white mx-auto lg:mx-0" />

            <button className="text-white font-semibold hover:opacity-80 transition">
              READ THE STORY ↗
            </button>
          </div>
        </div>
      </section>

      {/* ========= GREEN MAIN SECTION ========= */}
      <section
        className="w-full bg-gradient-to-r from-[#01686d] to-[#00444b]
                   px-6 sm:px-10 lg:px-40
                   pt-56 pb-32
                   flex flex-col lg:flex-row justify-between items-center gap-16"
      >
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-6 text-white text-center lg:text-left relative">

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <img src="./img/logo.png" alt="Logo" className="w-12" />
            <p className="text-lg text-white/90">All-in-one suite</p>
          </div>

          <h2 className="text-5xl font-bold">Tirahut Tech</h2>

          <p className="text-lg text-white/90">
            The operating system for business
          </p>

          <p className="text-white/90 leading-relaxed">
            Run your entire business on Tirahut Tech with our unified cloud
            software, designed to break down silos and increase efficiency.
          </p>

          {/* ========= BUTTON + RESPONSIVE DROPDOWN ========= */}
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="bg-gradient-to-r from-[#f27b22] to-[#d96c1f]
                         hover:from-[#d96c1f] hover:to-[#f27b22]
                         text-white px-7 py-3.5 rounded-xl
                         text-lg font-semibold shadow-lg
                         flex items-center gap-3
                         transition-all duration-300 hover:scale-[1.03]"
            >
              TRY TIRAHUT TECH
              <span className="transition-transform duration-300">
                ▸
              </span>
            </button>

            {openDropdown && (
              <div
                className="
                  absolute z-50 w-64
                  bg-white/95 backdrop-blur-xl
                  rounded-2xl shadow-2xl
                  border border-gray-100 overflow-hidden

                  /* Mobile */
                  left-0 top-full mt-4

                  /* Desktop */
                  md:left-full md:top-0 md:mt-0 md:ml-4
                "
              >
                <Link
                  to="/service"
                  className="group w-full px-6 py-5 flex items-center gap-3
                             text-gray-800 font-medium transition-all duration-300
                             hover:bg-gradient-to-r hover:from-[#01686d] hover:to-[#00444b]
                             hover:text-white"
                  onClick={() => setOpenDropdown(false)}
                >
                  <span className="text-xl group-hover:scale-110 transition">
                    🚀
                  </span>
                  <span className="flex-1">Service</span>
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </Link>

                <Link
                  to="/product"
                  className="group w-full px-6 py-5 flex items-center gap-3
                             text-gray-800 font-medium transition-all duration-300
                             hover:bg-gradient-to-r hover:from-[#f27b22] hover:to-[#d96c1f]
                             hover:text-white"
                  onClick={() => setOpenDropdown(false)}
                >
                  <span className="text-xl group-hover:scale-110 transition">
                    📦
                  </span>
                  <span className="flex-1">Product</span>
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl text-black text-center lg:text-right space-y-6 shadow-[10px_10px_0_0] shadow-orange-500 bg-white border-[2px] border-orange-500 rounded-[20px] p-6">
          <span className="text-5xl text-orange">“</span>

          <p className="text-2xl leading-relaxed">
            You can be a startup, mid-sized company, or enterprise —
            Tirahut Tech One works for all.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-end">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api"
              alt="CEO"
              className="w-20 h-20 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-xl font-bold">Prakarsh Gagdani</h3>
              <p className="text-sm text-white/80">CEO, 5paisa.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrihutTech;
