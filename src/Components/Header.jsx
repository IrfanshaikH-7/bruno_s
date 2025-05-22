import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-xl  lg:mr-10 transition-all duration-300 ${
      isActive ? "text-white drop-shadow-[0_0_10px_white]" : "text-gray-300"
    }`;

  return (
    <header className="bg-[#19001C] fixed w-full top-0 py-12 shadow-2xl h-24 md:h-40 flex items-center z-[9999]">
      <div className="main-container  flex items-center justify-between">
        {/* Common Logo */}
        <div className="flex justify-between  w-full items-center">
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-1">
              Bruno
              <div className="inline-block text-[#180018] font-bold px-4 rounded-3xl bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                S
              </div>
            </h1>
            <h2 className="text-xs text-white">
              Language Learning Platform
            </h2>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            {menuOpen ? (
              <IoClose
                size={32}
                color="#DFB6B2"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <FaBars
                size={28}
                color="#DFB6B2"
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer"
              />
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
                  <NavLink to="/about" className={linkClass}>
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
        {menuOpen && (
          <nav className="lg:hidden mt-6 bg-[#080808] p-6 rounded-2xl">
            <ul className="flex flex-col">
              <li>
                <NavLink
                  to="/"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink
                  to="/about"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink
                  to="/blogs"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Blogs
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink
                  to="/courses"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink
                  to="/contact"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
              <br />
              <button className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white">
                Schedule a call
              </button>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
