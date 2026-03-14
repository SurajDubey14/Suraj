import React from "react";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} />,
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    desc: "Developing scalable server-side applications using Node.js, Express, and REST APIs.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "Database Management",
    desc: "Designing and optimizing databases using MongoDB and MySQL for performance and scalability.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Full Stack Applications",
    desc: "Creating complete web applications with seamless frontend and backend integration.",
  },
];

const Services = () => {
  return (
    <>
      {/* Heading */}
      <div className="text-center mb-12">
        <p className=" mt-4 max-w-2xl mx-auto">
          Whatever we take on, whether it’s a product, website, or brand, it’s
          never just for show. It’s designed to work hard, deliver real value,
          and never coast on aesthetics.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-8 
            hover:-translate-y-2 
            hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]

            transition duration-300"
          >
            <div className="mb-4 text-yellow-300 group-hover:text-cyan-400 transition">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>

            <p className="text-gray-400 group-hover:text-gray-200 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
