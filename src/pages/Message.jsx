// import React, { useEffect, useState } from "react";
// import MessageCard from "../components/MessageCard";
// import axios from "axios";

// const Message = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/getcontact")
//       .then((res) => {
//         setData(res.data.Contact);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="grid gap-6 md:grid-cols-2">
//       {data.map((item, index) => (
//         <MessageCard
//           key={index}
//           fullname={item.fullname}
//           email={item.email}
//           message={item.message}
//         />
//       ))}
//     </div>
//   );
// };

// export default Message;

// import React, { useEffect, useState } from "react";
// import MessageCard from "../components/MessageCard";
// import axios from "axios";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Message = () => {
//   const [data, setData] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);

//   const visibleCards = 3;

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/getcontact")
//       .then((res) => {
//         setData(res.data.Contact);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleNext = () => {
//     if (startIndex + visibleCards < data.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <div className="relative w-full">

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2a2a2a] p-3 rounded-full text-white hover:bg-[#3a3a3a]"
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Cards */}
//       <div className="flex justify-center gap-6 overflow-hidden px-10">

//         {data
//           .slice(startIndex, startIndex + visibleCards)
//           .map((item, index) => (
//             <MessageCard
//               key={index}
//               fullname={item.fullname}
//               email={item.email}
//               message={item.message}
//             />
//           ))}

//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2a2a2a] p-3 rounded-full text-white hover:bg-[#3a3a3a]"
//       >
//         <FaChevronRight />
//       </button>

//     </div>
//   );
// };

// export default Message;

import React, { useEffect, useState } from "react";
import MessageCard from "../components/MessageCard";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Message = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  useEffect(() => {
    axios
      .get("http://localhost:3000/getcontact")
      .then((res) => {
        setData(res.data.Contact || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextSlide = () => {
    if (index < data.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
        bg-[#2a2a2a] p-3 rounded-full text-white hover:bg-[#3a3a3a]"
      >
        <FaChevronLeft />
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">

        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="w-1/3 flex-shrink-0 px-3"
            >
              <MessageCard
                fullname={item.fullname}
                email={item.email}
                message={item.message}
              />
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
        bg-[#2a2a2a] p-3 rounded-full text-white hover:bg-[#3a3a3a]"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Message;