import React from "react";
import BrandLink from "../brandlink/BrandLink";
import Navlinks from "../navlinks/Navlinks";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";



const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 font-krona container mx-auto">
      <BrandLink classes="" />
      <div className="flex items-end">
        <Navlinks />
        <div className="flex">
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
