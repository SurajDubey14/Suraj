import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Message from "./pages/Message";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/message" element={<Message />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
