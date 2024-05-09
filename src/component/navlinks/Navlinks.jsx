import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
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
    <div>
      {links.map((link, index) => (
        <NavLink className="lowercase mr-8 text-sm" to={link.path} key={`${link.name}-${index}`}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
