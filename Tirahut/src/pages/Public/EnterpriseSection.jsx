import React from "react";

const EnterpriseSection = () => {
    return (
        <section className="w-full py-16 px-6 md:px-16 lg:px-24 bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT SECTION */}
                <div>
                    {/* Illustration */}
                    <div className="w-full">
                        <img
                            src="./img/Enteriprises.svg"
                            alt="Enterprise Illustration"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* Quote */}
                    <div className="mt-6">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed">
                            <span className="text-4xl font-serif">"</span>
                            With our complete business under control, our productivity is up by
                            80% in the last year that we have been using Trihut Tech.
                            <span className="text-4xl font-serif">"</span>
                        </p>

                        {/* Profile */}
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180"
                                alt="User"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Thomas John</h3>
                                <p className="text-gray-600 text-sm">
                                    Managing Director, Agappe Diagnostics
                                </p>
                            </div>
                        </div>

                        {/* Read story */}
                       <button className="mt-4 text-[#f27b22] hover:text-[#d96d1f] font-semibold flex items-center gap-2">
  READ THE STORY →
</button>

                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="lg:pl-12">
                    {/* Logo + Heading */}
                    <div className="flex items-center gap-4">
                        <img
                            src="./img/logo.png"
                            alt="Trihut Tech Logo"
                            className="w-14"
                        />

                        {/* Updated Heading Style */}
                        <div className="leading-tight">
                            <h2 className="text-xl font-semibold text-gray-700">
                                Tirahut Tech For
                            </h2>
                            <h3 className="text-4xl font-bold text-gray-900 -mt-1">
                                Enterprise
                            </h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                        Experience the breadth and depth of the Tirahut ecosystem, with the
                        professional services, infrastructure, support, and security that a
                        modern enterprise needs. Streamline complex processes, build strong
                        customer relationships, and drive growth at scale.
                    </p>

                    {/* Button */}
                    <button
                        className="mt-8 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                        style={{ backgroundColor: "#01686d" }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#00444b")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#01686d")}
                    >
                        LEARN MORE →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSection;
