import React from "react";

const Resume = () => {
  return (
    <div className="font-sans text-white space-y-12">
      {/* Education */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Education</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="text-sm">
              GNIOT, AKTU — Greater Noida, India (July 2020 – July 2024)
            </p>
            <p className="mt-1">CGPA: 8.0</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Developer – Colibyt Technology
            </h3>
            <p className="text-sm">Sec-62, Noida | Sept 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Led frontend team using React, Node.js & MySQL</li>
              <li>
                Worked closely with PMs, designers & stakeholders to improve UX
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Developer – Publicis Groupe (Digitas)
            </h3>
            <p className="text-sm">Gurugram, Haryana | May 2024 – Aug 2024</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Built web apps using React.js, Firebase, Node.js & MongoDB
              </li>
              <li>Tested APIs with Postman and developed real-time features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="max-w-fit">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <span className="block h-1 mt-1 mb-4 w-full bg-yellow-400"></span>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Git",
            "Postman",
            "Figma",
            "Framer Motion",
            "GSAP",
            "Bootstrap",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-[#3f3d3b] text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
