import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({classes}) => {
  return (
      <Link className={`text-2xl font-krona ${classes}`} to="/">
        Welly
      </Link>

  );
};

export default BrandLink;
