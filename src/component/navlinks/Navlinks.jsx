import React, { useState } from "react";
import './Navlinks.css'
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
          // <Link>
          <NavLink
            to={link.path}
            key={`${link.name}-${index}`}
            className={` lowercase mr-8 text-sm ${
              activeRoute === link.path
                ? "text-yellow"
                : "text-black dark:text-white"
            }`}
          >
            {link.name}
          </NavLink>
          // {/* <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span> */}
          // </Link>
        ))}
      </div>
      <div onClick={toggleBtn} className="menu cursor-pointer">
        {isOpen ? <FaSquareXmark /> : <FaBars />}
      </div>
    </>
  );
};

export default Navlinks;
