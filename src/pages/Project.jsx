import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = [
  {
    img: "/images/clothio.jpeg",
    title: "Clothio",
    development: "Clothing Web Platform",
    link: "https://clothio-self.vercel.app/",
  },
  {
    img: "/images/caddycoffee.jpeg",
    title: "Caddy Coffee",
    development: "Task Manage Platform",
    link: "https://caddycoffee.vercel.app/",
  },
  {
    img: "/images/taskease.jpeg",
    title: "Taskease",
    development: "Task Manage Platform",
    link: "https://taskease-it.vercel.app/",
  },
  {
    img: "/images/nexgen.jpeg",
    title: "NexGen",
    development: "University Website",
    link: "https://nexgenuniversity.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
      {Projects.map((item, index) => (
        <div
          key={index}
          className="group bg-[#111] border border-[#222] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="h-fit w-full object-contain group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-white">
                {item.title}
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                {item.development}
              </p>
            </div>

            {/* Button */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#2a2a2a] transition"
            >
              Open <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
