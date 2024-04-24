import React from "react";
import "./Footer.css";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="flex justify-between bg-dark text-light px-4 py-4">
      <a className="text-2xl text-yellow font-krona" href="/">
        Welly
      </a>
      <div className="flex items-center">
        {links.map((link) => {
          return (
            <a href="/" className="ml-4">
              {link}
            </a>
          );
        })}
      </div>
      {/* <p className="text-dark-grey text-xs">React JS project of Welly</p> */}
    </footer>
  );
};

export default Footer;
