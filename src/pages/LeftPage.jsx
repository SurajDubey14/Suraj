import React from "react";
import { MdOutlineMail, MdOutlineDateRange } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftPage = () => {
  return (
    <div className="w-full sm:w-96  border bg-[#171716] shadow-lg rounded-2xl flex items-center jsutify-center flex-col border-[#3f3d3b] p-4 text-white">
      <div className="bg-[#514b43] rounded-4xl">
        <img src="/images/bitemoji.png" alt="" className="w-48" />
      </div>
      <div className="text-2xl font-semibold mt-8">
        <p>Suraj Dubey</p>
      </div>
      <div className="text-white bg-[#292828] inset-2/5  px-3 py-1 rounded-lg mt-6">
        <p className="font-semibold">Full Stack Developer</p>
      </div>

      <span className="border-t border-gray-400 h-2 w-[80%] mt-5"></span>

      <div className="flex items-start jsutify-start flex-col gap-2 ">
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <MdOutlineMail size={22} />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="pt-1">dubeysuraj1472002@gmail.com</p>
          </div>
        </div>
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <IoPhonePortraitOutline size={22} />
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="pt-1">+91 9310745399</p>
          </div>
        </div>
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <MdOutlineDateRange size={22} />
          </div>
          <div>
            <p className="font-semibold">Birthday</p>
            <p className="pt-1">14 July, 2002</p>
          </div>
        </div>
        <div className="flex text-sm items-start gap-4 mt-4">
          <div className="bg-[#514b43] text-yellow-300 p-2 rounded-xl">
            <FaLocationDot size={22} />
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="pt-1">Noida</p>
          </div>
        </div>
      </div>

      <div className="flex text-yellow-300 items-center text-xl gap-4 mt-5 justify-center">
        <Link to={"https://www.facebook.com/profile.php?id=100011569590964"}>
          <FaFacebook />
        </Link>
        <Link to={"https://www.instagram.com/surajpandat_01/?hl=en"}>
          <FaInstagram />
        </Link>
        <Link to={"https://github.com/SurajDubey14"}>
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default LeftPage;
