import React from "react";
import {
  FaLaptopCode,
  FaCameraRetro,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

const testimonials = [
  {
    image: "/images/testimoalboy.png",
    name: "Rahul Sharma",
    testimonial:
      "Working with this team was a game-changer for our online presence. The website they delivered was not only visually stunning but also incredibly easy to use. Their eye for detail and design sensibility is top-notch. Our customer engagement has grown significantly since the redesign.",
  },
  {
    image: "/images/testimonalgirl.png",
    name: "Priya Menon",
    testimonial:
      "From the first call to final delivery, the entire experience was smooth and professional. Their ability to transform our brand vision into a digital experience exceeded our expectations. The photography and design quality they brought to our project was simply outstanding.",
  },
];

// const Testimonals = () => {
//   return (
//     <>
//       <div className="bg-[#252423] relative shadow-lg rounded-2xl px-5 pt-14 pb-8">
//         <div className=" absolute bottom-36 w-fit flex items-baseline gap-x-4 justify-center ">
//           <div className="bg-[#514b43]  rounded-4xl">
//             <img src="/images/bitemoji.png" alt="" className="w-24" />
//           </div>
//           <p className="text-xl font-bold">Rohit patil</p>
//         </div>
//         <div className="py-4 text-lg font-semibold">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque
//           sapiente placeat, necessitatibus quidem modi ex dignissimos maiores ut
//           pariatur perspiciatis nobis omnis assumenda quibusdam.
//         </div>
//       </div>
//     </>
//   );
// };

const About = () => {
  return (
    <>
      <div>
        <p className="text-lg font-semibold md:pt-5">
          I'm a Creative Director and UI/UX Designer based in Noida, India,
          specializing in web development and print media. I’m passionate about
          transforming complex challenges into elegant, intuitive, and visually
          engaging design solutions.
        </p>
        <p className="text-lg font-semibold py-4 md:py-2">
          My goal is to craft websites that are not only functional and
          user-friendly but also visually appealing. I strive to add a unique
          personal touch to every project, ensuring that the final product is
          both eye-catching and easy to navigate. My mission is to communicate
          your brand’s message and identity in the most creative and effective
          way possible. Over the years, I’ve had the opportunity to design for
          several well-known brands.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-4 py-2">What I'm Doing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:p-4 gap-x-4 gap-y-10">
          {/* Web Design */}
          <div className="gap-x-4 border w-full md:w-[80%] bg-[#171716] shadow-2xl  rounded-2xl  text-start border-[#3f3d3b] p-4 text-white">
            <div className="flex space-y-2 ">
              <span className="text-yellow-300  text-xl md:text-2xl mr-2 md:mr-4">
                <FaPaintBrush />
              </span>
              <h2 className="text-sm md:text-lg font-semibold">Web Design</h2>
            </div>
            <p className="pt-1">
              Creative, user-focused designs that balance aesthetics and
              usability to deliver an exceptional user experience.
            </p>
          </div>

          {/* Web Development */}
          <div className="gap-x-4 border w-full md:w-[80%] bg-[#171716] shadow-2xl  rounded-2xl  text-start border-[#3f3d3b] p-4 text-white">
            <div className="flex space-y-2 ">
              <span className="text-yellow-300  text-xl md:text-2xl mr-2 md:mr-4">
                <FaLaptopCode />
              </span>
              <h2 className="text-sm md:text-lg font-semibold">
                Web Development
              </h2>
            </div>
            <p className="pt-1">
              High-performance, responsive, and secure websites built with
              modern technologies and clean code practices.
            </p>
          </div>

          {/* Photography */}
          <div className="gap-x-4 border w-full md:w-[80%] bg-[#171716] shadow-2xl  rounded-2xl  text-start border-[#3f3d3b] p-4 text-white">
            <div className="flex space-y-2 ">
              <span className="text-yellow-300  text-xl md:text-2xl mr-2 md:mr-4">
                <FaCameraRetro />
              </span>
              <h2 className="text-sm md:text-lg font-semibold">Photography</h2>
            </div>
            <p className="pt-1">
              ofessional photography services capturing stunning visuals that
              tell compelling stories.
            </p>
          </div>

          {/* Video Editing */}
          <div className="gap-x-4 border w-full md:w-[80%] bg-[#171716] shadow-2xl  rounded-2xl  text-start border-[#3f3d3b] p-4 text-white">
            <div className="flex space-y-2 ">
              <span className="text-yellow-300 text-xl md:text-2xl mr-2 md:mr-4">
                <FaVideo />
              </span>
              <h2 className="text-sm md:text-lg font-semibold">
                Video Editing
              </h2>
            </div>
            <p className="pt-1">
              Dynamic and engaging video edits tailored to enhance your brand
              message and captivate your audience.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl mt-4 py-2">Testimonals</h1>
        <div className="flex items-start flex-col md:flex-row py-20 gap-x-4 gap-y-20 md:gap-y-10">
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="bg-[#252423] relative shadow-lg rounded-2xl px-5 pt-14 pb-8">
                <div className=" absolute -top-8 md:bottom-40 w-fit md:pb-4 flex items-baseline gap-x-2 md:gap-x-4 justify-center ">
                  <div className="bg-[#514b43]  rounded-2xl">
                    <img src={item.image} alt="" className="w-16 md:w-24" />
                  </div>
                  <p className="text-sm md:text-xl font-bold">{item.name}</p>
                </div>
                <div className="py-1 md:py-4 text-sm md:text-lg font-normal md:font-semibold">
                  {item.testimonial}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default About;
