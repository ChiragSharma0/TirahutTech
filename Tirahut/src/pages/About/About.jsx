import React from "react";
import TeamMembers from "./teamMembers";
import VisionSection from "./VisionSection";

function AboutPage() {
  return (
    <>
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">

      {/* HEADER SECTION */}
      <div
        className="
          w-full text-white 
          py-20 px-6 text-center
          pt-32 sm:pt-36
        "
        style={{
          background: "linear-gradient(135deg, #01686d, #00444b)"
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          About Us
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          Learn more about our company and our commitment to providing innovative
          software solutions.
        </p>
      </div>

      {/* ABOUT CARD SECTION */}
      <div className="max-w-4xl w-full px-5 sm:px-6 py-16 flex justify-center">
        <div className="bg-[#F8F6F2] shadow-lg rounded-3xl p-8 sm:p-10 w-full text-center border border-gray-200">

          {/* ICON */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#01686d"
              viewBox="0 0 24 24"
              width="80"
              height="80"
              className="sm:w-20 sm:h-20"
            >
              <path d="M12 2L2 7v2h2v9H2v2h20v-2h-2V9h2V7l-10-5zm0 2.18L18.09 7H5.91L12 4.18zM7 9h2v9H7V9zm4 0h2v9h-2V9zm4 0h2v9h-2V9z" />
            </svg>
          </div>

          {/* TITLE */}
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6"
            style={{ color: "#00444b" }}
          >
            About Our Company
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </div>
    </div>
      <VisionSection/>
    <TeamMembers/>
  

    </>
  );
}

export default AboutPage;
