import React from "react";
import LeftPage from "../pages/LeftPage";
import Home from "../pages/Home";
import style from "./Layout.module.css";
import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="md:flex-row flex-col-reverse flex min-h-screen items-start gap-4 md:gap-10 justify-between p-4 md:p-10">
      <LeftPage />
      <div className="w-full border bg-[#171716] shadow-lg rounded-2xl flex-col border-[#3f3d3b] p-4 text-white">
        <div className="">
          <Navbar />
        </div>
        {/* Main content area should be dynamic bg-[#eaf6ff]*/}
        <main className="p-4">
          {/* Dynamic content */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
