import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import MenuSVG from "../assets/menu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-xl  lg:mr-10 transition-all duration-300 ${
      isActive ? "text-white drop-shadow-[0_0_10px_white]" : "text-gray-300"
    }`;

  return (
    <header className="bg-[#19001C] fixed w-full top-0 py-12 shadow-2xl h-20 md:h-20 flex items-center z-[9999]">
      <div className="main-container  flex items-center justify-between">
        {/* Common Logo */}
        <div className="flex justify-between  w-full items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white flex items-center gap-1">
              Bruno
              <div className="inline-block text-[#180018] font-bold px-4 rounded-3xl bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                S
              </div>
            </h1>
            <h2 className="text-[10px] md:text-xs text-white">
              Language Learning Platform
            </h2>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            {menuOpen ? (
              <IoClose
                size={48}
                color="#DFB6B2"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <div
              onClick={() => setMenuOpen(true)}
              >
                <img src={MenuSVG} alt="" className="h-12 w-12 object-contain cursor-pointer" />
              </div>
              // <FaBars
              //   size={28}
              //   color="#DFB6B2"
              //   onClick={() => setMenuOpen(true)}
              //   className="cursor-pointer"
              // />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden  lg:flex justify-between items-center ">
            <nav className="flex items-center">
              <ul className="flex items-center">
                <li>
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#aboutt" className="text-xl lg:mr-10 text-gray-300 transition-all duration-300">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blogs" className={linkClass}>
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className={linkClass}>
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={linkClass}>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <a href="https://koalendar.com/e/30-follow-up-session-with-bruno" target="_blank" className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white">
                Schedule a call
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        { (
        <nav
        className={`lg:hidden fixed top-20 right-0 h-full w-64 bg-[#080808] p-6 rounded-l-2xl shadow-lg transform transition-transform duration-500 z-[9998]
           ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
            <div className="flex gap-2 flex-col">
                <NavLink
                  to="/"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/courses"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/contact"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              <button className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white">
                Schedule a call
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
