import React, { useState } from "react";
import "./Navlinks.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaSquareXmark } from "react-icons/fa6";

const Navlinks = () => {
  const location = useLocation();
  const activeRoute = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/search",
      name: "Search",
    },
    {
      path: "/about",
      name: "About",
    },
  ];

  return (
    <>
      <div className="navlinks">
        {links.map((link, index) => (
          <NavLink
            to={link.path}
            key={`${link.name}-${index}`}
            className={`lowercase mr-8 text-sm ${
              activeRoute === link.path
                ? "text-yellow"
                : "text-black dark:text-black"
            }`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div onClick={toggleBtn} className="menu-button">
        {isOpen ? <FaSquareXmark /> : <FaBars className="menu"/>}
      </div>
      <div className={`overlay ${isOpen ? "open" : "hide"}`}>
        <div className="flex flex-col items-center">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={`${link.name}-${index}`}
              className={`text-base mt-2 mb-2 ${
                activeRoute === link.path ? "text-yellow" : "text-white"
              }`}
              onClick={toggleBtn} 
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navlinks;
