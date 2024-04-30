import React from "react";
import BrandLink from "../brandlink/BrandLink";
// import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 font-krona container mx-auto">
      <BrandLink classes=''/>
      <div className="flex items-end lowercase">
        <a href="/" className="mr-8 text-sm">
          Home
        </a>
        <a href="/search" className="mr-8 text-sm">
          Search
        </a>
        <a href="/about" className="mr-8 text-sm">
          About
        </a>

        {/* Icons */}
        <div className="flex">
          {/* Liked */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          {/* Cart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
