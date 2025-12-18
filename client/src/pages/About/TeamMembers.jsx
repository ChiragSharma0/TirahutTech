// src/components/TeamSection.jsx
import React from "react";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Chandra Prakash",
    tag: "Founder & CEO",
    desc: "Passionate about tech and innovation, leading the team towards success.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    name: "Riya Sharma",
    tag: "Lead Designer",
    desc: "Creative designer crafting modern and engaging user experiences.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    name: "Amit Verma",
    tag: "Full Stack Developer",
    desc: "Building scalable web applications with performance and style.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
  {
    name: "Sneha Kapoor",
    tag: "Marketing Lead",
    desc: "Driving brand growth and engaging audiences effectively.",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
  },
];

const TeamCard = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="group bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 w-64 h-[420px] mx-auto
               hover:bg-[#f27b22]"
  >
    <div className="w-24 h-24 rounded-full bg-[#00444b] mb-4 flex items-center justify-center text-white text-xl font-bold transition-colors duration-300 group-hover:bg-white group-hover:text-[#f27b22]">
      {member.name[0]}
    </div>
    <h3 className="text-xl font-semibold text-[#00444b] transition-colors duration-300 group-hover:text-white">
      {member.name}
    </h3>
    <p className="text-[#01686d] font-medium transition-colors duration-300 group-hover:text-white">
      {member.tag}
    </p>
    <p className="mt-2 text-sm text-[#00444b] transition-colors duration-300 group-hover:text-white">
      {member.desc}
    </p>
    <div className="flex space-x-4 mt-4 text-[#00444b] transition-colors duration-300 group-hover:text-white">
      <a href={member.social.website} target="_blank" rel="noopener noreferrer">
        <FaGlobe size={20} />
      </a>
      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={20} />
      </a>
      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} />
      </a>
    </div>
    <button className="mt-6 bg-[#01686d] text-white font-semibold px-5 py-2 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-[#f27b22]">
      View Profile
    </button>
  </motion.div>
);

const TeamSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-28 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00444b]">Meet Our Team</h2>
        <p className="mt-2 text-[#01686d] max-w-md mx-auto text-sm">
          The talented people behind our success
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-[#01686d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#00444b] transition-colors duration-300">
          View All Team
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
