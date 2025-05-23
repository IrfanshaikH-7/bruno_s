import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    `text-xl mr-4 transition-all duration-300 ${isActive ? "text-white drop-shadow-[0_0_10px_white]" : "text-gray-300"
    }`;
  const mobilelinkClass = ({ isActive }) =>
    `text-sm mr-4 transition-all duration-300 ${isActive ? "text-white drop-shadow-[0_0_10px_white]" : "text-gray-300"
    }`;

  return (
    <footer className="bg-[#201022] py-10">
      <div className="main-container">
        <div className="md:flex md:justify-between md:gap-8">
          <div className="md:flex-1 text-center max-w-sm">
            <div className="mb-3">
              <h1 className="text-5xl">
                Bruno
                <div className="inline-block text-[#180018] font-bold px-4 rounded-3xl bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                  S
                </div>
              </h1>
              <h2 className="text-[15px]">Language Learning Platform</h2>
            </div>
            <p className="text-base md:text-xl mb-3">
              “If you talk to someone in a language they understand, that goes
              to their head. If you talk to them in their own language, that
              goes to their heart", Nelson Mandela - by
            </p>
          </div>
          <div className="md:flex-1 md:ml-4 ">
            <h2 className="text-2xl mb-2 text-center md:text-start pt-4 md:pt-0">Quick Links</h2>
            {/* desktop  */}
            <div className="hidden sm:flex ">
              <div className="flex-1">
                <div className="mb-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/about" className={linkClass}>
                    About
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/blogs" className={linkClass}>
                    Blogs
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/courses" className={linkClass}>
                    Courses
                  </NavLink>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Resources
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Faq
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Pricing
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/contact" className={linkClass}>
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-center  flex-wrap gap-4 text-center light-txt-color sm:hidden">
              <NavLink to="/" className={mobilelinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={mobilelinkClass}>
                About
              </NavLink>
              <NavLink to="/blogs" className={mobilelinkClass}>
                Blogs
              </NavLink>
              <NavLink to="/courses" className={mobilelinkClass}>
                Courses
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Resources
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Faq
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Pricing
              </NavLink>
              <NavLink to="/contact" className={mobilelinkClass}>
                Contact Us
              </NavLink>
            </div>

          </div>
          <div className="md:flex-1 text-center md:text-start pt-4 md:pt-0">
            <p className="md:text-2xl mb-3 mt-3 md:mt-0">Stay connected and keep learning!</p>
            <div className="flex md:gap-0 gap-1 items-center md:items-start md:justify-start justify-center">
              <img src="/footer/youtube.png" alt="youtube" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" />
              <img src="/footer/linkedin.png" alt="linkedin" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" />
              <img src="/footer/facebook.png" alt="facebook" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" />
              <img src="/footer/instagram.png" alt="instagram" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
