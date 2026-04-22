import React from "react";

const MessageCard = ({ fullname, email, message }) => {
  return (
    <div className="flex items-center justify-center p-4">
      
      <div
        className="group bg-[#1d1d1d] border border-[#2a2a2a] 
        w-full max-w-md min-h-[40vh] rounded-2xl p-6
        transition duration-300
        hover:-translate-y-2
        hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
      >

        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Message Details
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">Full Name</p>
          <p className="text-white font-medium break-words">
            {fullname}
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm">Email</p>
          <p className="text-white font-medium break-words">
            {email}
          </p>
        </div>

        {/* Message */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">Message</p>
          <p className="text-gray-300 text-sm bg-[#2a2a2a] p-3 mt-2 rounded-lg break-words">
            {message}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            className="w-full sm:w-1/2 bg-yellow-300 text-black py-2 rounded-lg 
            hover:bg-yellow-400 transition font-medium"
          >
            OK
          </button>

          <button
            className="w-full sm:w-1/2 bg-cyan-400 text-black py-2 rounded-lg 
            hover:bg-cyan-500 transition font-medium"
          >
            Mail Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default MessageCard;