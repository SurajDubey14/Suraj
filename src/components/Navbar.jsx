import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const location = useLocation();

  const currentPage = location.pathname; // Can be: "about", "services", "projects", etc.

  const renderHeading = () => {
    switch (currentPage) {
      case "/":
        return "About";
      case "/services":
        return "Our Services";
      case "/resume":
        return "Resume";
      case "/portfolio":
        return "Portfolio";
      case "/contact":
        return "Get in Touch";
      default:
        return "Welcome";
    }
  };

  // alert(location.pathname);
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h1 className="text-2xl font-semibold font-mono">{renderHeading()}</h1>
        <span className="block h-1 mt-1 w-16 bg-yellow-300"></span>
      </div>
      <div>
        <nav className="">
          <ul className="hidden md:flex items-end justify-end gap-x-10 ">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-yellow-300">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-yellow-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ham md:hidden block">
<CgMenuRightAlt size={22} />
      </div>


    </div>
  );
};

export default Navbar;
