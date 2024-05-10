import React from 'react'
import ButtonLink from '../buttonLink/ButtonLink';
import banner from './banner.png'

const SecondaryBanner = () => {
  return (
    <div className="container flex mx-auto bg-pink">
      <div>
        <h3 className="font-krona md:text-5xl mb-4 md:mb-10">
          be natural, be smart, be you.
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-0 md:ml-4 mb-4 md:mb-0 py-10 md:py-0 w-2/3 md:w-full">
        <img
          src={banner}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </div>
    </div>
  );
}

export default SecondaryBanner