import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted! This is a working demo model for now.");
  };
  return (
    <div>
      <div className="map w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138032.15191441498!2d77.31942469170666!3d28.522327773702926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1750702056562!5m2!1sen!2sin"
          className="w-full rounded-md md:rounded-4xl"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="md:hidden block text-center mt-5 ">
        <h1 className="text-2xl font-semibold font-mono">Socail Media</h1>
        <div className="md:hidden flex text-yellow-300 items-center text-xl gap-4 mt-2 justify-center">
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

      <div>
        <h1 className="font-bold text-2xl mt-4 py-2">Contact Form</h1>
        <form action="">
          <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4 py-4">
            <input
              type="text"
              className=" border w-full px-4 py-2 text-md md:text-xl text-white shadow-lg rounded-xl flex-col border-[#3f3d3b]"
              placeholder="Full name"
            />
            <input
              type="email"
              className=" border w-full px-4 py-2 text-md md:text-xl text-white shadow-lg rounded-xl flex-col border-[#3f3d3b]"
              placeholder="Email address"
            />
          </div>
          <textarea
            name=""
            className=" border w-full p-4 h-28 text-md md:text-xl text-white shadow-lg rounded-xl flex-col border-[#3f3d3b]"
            placeholder="Your message"
            id=""
          ></textarea>
          <div className="py-4 flex items-end justify-end">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="hover:text-yellow-300 flex items-center gap-2 cursor-pointer border px-5 py-3  text-white shadow-lg rounded-xl text-sm md:text-md border-[#3f3d3b]"
            >
              <RiSendPlaneLine />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
