import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const Main = ({children}) => {
  // Navbar
  // Content
  // Footer
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Main;
