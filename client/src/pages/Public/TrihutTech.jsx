import React from "react";

function TrihutTech() {
  return (
    <div className="w-full min-h-screen bg-[#F4F4F4] font-[Inter]">

      {/* ========= TOP ORANGE BANNER ========= */}
      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mt-140 mb-[-160px] relative z-20">
        <div className="bg-[#f27b22] text-white rounded-3xl w-full max-w-7xl 
                        shadow-xl p-8 sm:p-12 
                        flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* LEFT TEXT */}
          <div className="max-w-lg space-y-6 text-center lg:text-left">
            <p className="text-base sm:text-lg">To build anything that truly lasts,</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              it takes time
            </h1>

            <div className="w-14 h-[2px] bg-white mx-auto lg:mx-0"></div>

            <button className="mt-4 text-white font-semibold hover:opacity-80 transition text-sm sm:text-base">
              READ THE STORY ↗
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* <img
              src="/banner.png"
              alt="Banner"
              className="w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[620px] rounded-2xl"
            /> */}
          </div>
        </div>
      </section>

      {/* ========= GREEN MAIN SECTION ========= */}
      <section
  className="
    w-full 
    bg-gradient-to-r from-[#01686d] to-[#00444b] 
    px-6 sm:px-10 lg:px-40
    pt-44 sm:pt-56 lg:pt-60
    pb-24 sm:pb-32 lg:pb-40
    flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-10
    relative z-10
  "
>
  {/* LEFT CONTENT */}
  <div className="max-w-xl space-y-6 text-white text-center lg:text-left">
    <div className="flex items-center justify-center lg:justify-start gap-4">
      <img src="./img/logo.png" alt="Logo" className="w-12 sm:w-14" />
      <p className="text-sm sm:text-lg text-white/90">All-in-one suite</p>
    </div>

    <h2 className="text-4xl sm:text-5xl font-bold">Tirahut Tech</h2>

    <p className="text-base sm:text-lg font-medium text-white/90">
      The operating system for business
    </p>

    <p className="text-white/90 text-base sm:text-lg leading-relaxed">
      Run your entire business on Tirahut Tech with our unified cloud software,
      designed to break down silos and increase organizational efficiency.
    </p>

    <button
      className="
        mt-4 bg-[#f27b22] hover:bg-[#d96c1f] 
        text-white px-6 py-3 rounded-lg
        text-base sm:text-lg shadow-md transition-all
      "
    >
      TRY TIRAHUT TECH ONE →
    </button>
  </div>

  {/* DIVIDER */}
  <div className="hidden lg:flex h-[200px] w-[1px] bg-white/30 rounded-full"></div>

  {/* RIGHT CONTENT */}
  <div className="max-w-xl space-y-6 text-white text-center lg:text-right">
    <span className="text-5xl">“</span>

    <p className="text-xl sm:text-2xl leading-relaxed">
      You can be a startup, mid-sized company, or an enterprise—
      Tirahut Tech One is a boon for all.
    </p>

    <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-4 mt-6 justify-center lg:justify-end">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180"
        alt="CEO"
        className="w-20 h-20 rounded-full border-2 border-white"
      />

      <div className="text-center lg:text-right">
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
