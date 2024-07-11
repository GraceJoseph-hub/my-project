import React from 'react'
import ButtonLink from '../buttonLink/ButtonLink';
import banner from './banner.png'
import './SecondaryBanner.css'

const SecondaryBanner = ({isRelative, className}) => {
  return (
    <div className={`${isRelative ? "relative" : ""} relative -mb-24 container flex items-center justify-between mx-auto md:px-20 bg-green w-full ${className}`}>
      <div>
        <h3 className="font-krona  mb-4 md:mb-10">
          Be natural, <br /> be smart, <br /> be you.
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          className="p-8"
          width="200"
          src={banner}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </div>
    </div>
  );
}

export default SecondaryBanner